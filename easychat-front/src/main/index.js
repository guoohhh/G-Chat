import { app, shell, BrowserWindow, Menu, Tray } from 'electron' // 导入Electron的核心模块，用于创建应用、浏览器窗口、菜单和托盘图标等功能。
import { join } from 'path' // 导入'path'模块中的join方法，用于处理文件路径。
const NODE_ENV = process.env.NODE_ENV // 获取当前环境变量（例如，'development' 或 'production'），用于后续判断。
import { electronApp, optimizer, is } from '@electron-toolkit/utils' // 导入Electron Toolkit中的实用工具，用于应用初始化和环境判断。
import icon from '../../resources/icon.png?asset' // 导入应用的图标，用于窗口和托盘图标。
import { 
  onSetLocalStore, onGetLocalStore, onLoginSuccess, onLoadChatMessage, onLoadSessionData, 
  onReLogin, onLoginOrRegister, winTitleOp, onOpenNewWindow, openWindow, 
  onSetSessionSelect, onLoadContactApply, onUpdateContactNoReadCount, 
  onAddLocalMessage, onCreateCover, onSaveAs, onGetSettingInfo, onChangeLocalFolder, 
  onOpenLocalFolder, onDownloadUpdate, onOpenUrl, onSaveClipBoardFile, 
  onLoadLocalUser, onDelChatSession, onTopChatSession, onReloadChatSession 
} from "./ipc" // 从"ipc"模块中导入各种函数，用于处理应用功能的IPC通信（例如登录、消息加载、会话管理等）。
import { saveWindow } from './windowProxy' // 导入保存窗口状态的函数，用于后续窗口的保存与恢复。

const login_width = 300 // 定义登录窗口的默认宽度。
const login_height = 370 // 定义登录窗口的默认高度。
const register_height = 490 // 定义注册窗口的高度。

function createWindow() { // 创建主窗口的函数。
  const mainWindow = new BrowserWindow({ // 创建新的浏览器窗口，并设置相关参数。
    icon: icon, // 设置窗口图标。
    width: login_width, // 设置初始窗口宽度为登录窗口的宽度。
    height: login_height, // 设置初始窗口高度为登录窗口的高度。
    show: false, // 初始化时窗口不显示。
    fullscreenable: false, // 禁止全屏功能。
    fullscreen: false, // 确保全屏模式不可用。
    maximizable: false, // 禁止最大化窗口。
    autoHideMenuBar: true, // 自动隐藏菜单栏。
    resizable: false, // 禁止窗口大小调整。
    frame: true, // 显示窗口的边框（包括标题栏、按钮等）。
    transparent: true, // 使窗口背景透明。
    hasShadow: false, // 禁用窗口阴影。
    titleBarStyle: 'hidden', // 隐藏标题栏。
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'), // 设置预加载脚本，用于初始化web环境。
      sandbox: false, // 禁用沙盒模式。
      contextIsolation: false // 禁用上下文隔离，允许渲染进程访问Node.js API。
    }
  })

  saveWindow('main', mainWindow) // 保存主窗口的状态，用于后续恢复窗口。

  // 开发环境下打开控制台调试工具
  if (NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools() // 如果是开发模式，打开开发者工具（Console等）。
  }

  // 窗口加载完成后显示
  mainWindow.on('ready-to-show', () => {
    mainWindow.show() // 显示窗口。
    mainWindow.setTitle("G-Chat") // 设置窗口标题。
  })

  // 监听窗口获取焦点事件，移除闪烁效果
  mainWindow.once('focus', () => mainWindow.flashFrame(false))

  // 窗口关闭时，隐藏窗口而不是退出应用
  mainWindow.on('close', (e) => {
    mainWindow.hide() // 隐藏窗口，避免直接退出应用。
  })

  // 设置窗口打开新链接时的行为
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url) // 通过外部浏览器打开新链接。
    return { action: 'deny' } // 阻止在应用内打开新窗口。
  })

  // 根据不同环境加载不同的内容
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']) // 如果是开发环境，加载开发服务器URL。
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html')) // 如果是生产环境，加载本地HTML文件。
  }

  // 创建托盘图标和菜单
  const tray = new Tray(icon) // 创建托盘图标。
  const contextMenu = [ // 定义托盘菜单项。
    {
      label: '退出G-Chat', click: function () {
        app.exit() // 点击退出菜单项时，退出应用。
      }
    }
  ]

  const menu = Menu.buildFromTemplate(contextMenu) // 创建菜单。
  tray.setToolTip('G-Chat') // 设置托盘提示文本。
  tray.setContextMenu(menu) // 设置托盘右键菜单。
  
  // 点击托盘图标时显示主窗口
  tray.on("click", () => {
    mainWindow.setSkipTaskbar(false) // 在任务栏显示窗口。
    mainWindow.show() // 显示窗口。
  })

  // 设置本地存储
  onSetLocalStore()

  // 获取本地存储
  onGetLocalStore()

  onLoginSuccess((config) => { // 登录成功时执行的回调。
    contextMenu.splice(0) // 清空现有菜单项。
    contextMenu.push({
      label: '退出G-Chat', click: function () {
        app.exit() // 添加退出菜单项。
      }
    })

    // 登录成功后修改窗口大小
    mainWindow.setResizable(true) // 允许调整窗口大小。
    mainWindow.setSize(850, 800) // 设置新窗口尺寸。
    mainWindow.center() // 将窗口居中显示。
    mainWindow.setMaximizable(true) // 允许最大化窗口。
    mainWindow.setMinimumSize(800, 600) // 设置最小窗口尺寸。

    // 更新托盘菜单
    if (config.admin) { // 如果是管理员，添加“管理后台”菜单项。
      contextMenu.unshift({
        label: "管理后台", click: function () {
          openWindow({
            windowId: 'admin',
            title: "管理后台",
            path: `/admin`,
            width: config.screenWidth * 0.8,
            height: config.screenHeight * 0.8,
            data: {
              token: config.token
            }
          })
        }
      })
    }

    // 设置用户信息
    contextMenu.unshift({
      label: "用户：" + config.nickName, click: function () { }
    })
    tray.setContextMenu(Menu.buildFromTemplate(contextMenu)) // 更新托盘菜单。
  })

  onLoginOrRegister((isLogin) => { // 登录或注册状态变化时的回调。
    mainWindow.setResizable(true) // 允许调整窗口大小。
    if (isLogin) {
      mainWindow.setSize(login_width, login_height) // 登录时设置窗口尺寸。
    } else {
      mainWindow.setSize(login_width, register_height) // 注册时设置窗口尺寸。
    }
    mainWindow.setResizable(false) // 禁止窗口大小调整。
  })

  onReLogin(() => { // 重新登录时的回调。
    mainWindow.setResizable(true) // 允许调整窗口大小。
    mainWindow.setMinimumSize(login_width, login_height) // 设置最小窗口尺寸。
    mainWindow.setSize(login_width, login_height) // 设置窗口尺寸。
    mainWindow.center() // 将窗口居中显示。
    mainWindow.setResizable(false) // 禁止窗口大小调整。
  })

  // 监听窗口标题操作（如关闭、最小化、最大化等）
  winTitleOp((e, { action, data }) => {
    const webContents = e.sender
    const win = BrowserWindow.fromWebContents(webContents)
    switch (action) {
      case "close": {
        if (data.closeType == 0) {
          win.close() // 关闭窗口
        } else {
          win.setSkipTaskbar(true) // 设置窗口不显示在任务栏中
          win.hide() // 隐藏窗口
        }
        break
      }
      case "minimize": {
        win.minimize() // 最小化窗口
        break
      }
      case "maximize": {
        win.maximize() // 最大化窗口
        break
      }
      case "unmaximize": {
        win.unmaximize() // 恢复窗口原大小
        break
      }
      case "top": {
        win.setAlwaysOnTop(data.top) // 设置窗口总在最上层
      }
    }
  })

  onLoadChatMessage() // 加载聊天消息
  onLoadSessionData() // 加载会话数据

  //打开新窗口
  onOpenNewWindow()

  //设置session
  onSetSessionSelect()

  //查询好友申请
  onLoadContactApply()

  //设置未读数
  onUpdateContactNoReadCount()

  //增加本地消息
  onAddLocalMessage()

  //生成缩略图
  onCreateCover()

  //文件另存为
  onSaveAs()

  //获取设置信息
  onGetSettingInfo()

  //更改本地目录
  onChangeLocalFolder()

  //打开本地目录
  onOpenLocalFolder()

  //下载更新
  onDownloadUpdate()

  //打开URL
  onOpenUrl()

  //保存剪切板的内功
  onSaveClipBoardFile()

  //查询本地用户
  onLoadLocalUser()

  //删除好友
  onDelChatSession()

  //置顶会话
  onTopChatSession()

  onReloadChatSession()
}

// 该方法将在 Electron 完成初始化并准备好创建浏览器窗口时调用。
// 一些API只能在此事件发生后使用。
app.whenReady().then(() => { // 当 Electron 完成初始化并准备好创建窗口时执行以下操作。
  // 为 Windows 设置应用的用户模型 ID（在 Windows 中用于显示任务栏图标和通知）
  electronApp.setAppUserModelId('com.electron') 

  // 在开发环境下，F12 会默认打开开发者工具（DevTools），在生产环境中忽略 CommandOrControl + R 这个快捷键。
  // 参考链接：https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => { // 每当创建一个新的浏览器窗口时，执行以下操作。
    optimizer.watchWindowShortcuts(window) // 监听窗口的快捷键，优化窗口操作。
  })
  createWindow() // 调用 createWindow 函数来创建主窗口。

  app.on('activate', function () { // 监听 'activate' 事件，当应用在 macOS 上被点击时触发。
    // 在 macOS 上，当没有打开的窗口时，点击 Dock 图标会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow() // 如果没有打开的窗口，则创建新窗口。
  })
})

// 当所有窗口关闭时退出应用，除了 macOS。因为在 macOS 上，通常应用和菜单栏会一直保留，直到用户显式地退出（Cmd + Q）。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { // 如果不是 macOS 平台（比如 Windows 或 Linux），退出应用。
    app.quit() // 退出应用程序。
  }
})

// 禁用窗口的动画效果（例如窗口打开时的过渡动画）
app.commandLine.appendSwitch('wm-window-animations-disabled') 

