import { _ as _export_sfc, b as getCurrentInstance, d as useUserInfoStore, r as ref, o as onMounted, e as onUnmounted, f as resolveComponent, h as openBlock, i as createElementBlock, j as createBaseVNode, F as Fragment, n as renderList, t as toDisplayString, k as createVNode, E as unref, p as createCommentVNode, v as pushScopeId, x as popScopeId } from "./index-347654a5.js";
const name = "easychat-front";
const version = "1.0.0";
const description = "G-Chat";
const main = "./out/main/index.js";
const author = "example.com";
const homepage = "https://www.electronjs.org";
const codeversion = "0516879824";
const scripts = {
  format: "prettier --write .",
  lint: "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix",
  start: "electron-vite preview",
  dev: "chcp 65001 && electron-vite dev --inspect=5858 --mode=dev",
  build: "electron-vite build",
  postinstall: "electron-builder install-app-deps",
  "build:win": "npm run build && electron-builder --win --config",
  "build:mac": "npm run build && electron-builder --mac --config",
  "build:linux": "npm run build && electron-builder --linux --config"
};
const build = {
  extraResources: [
    "./assets/**"
  ],
  productName: "G-Chat",
  appId: "com.easychat",
  directories: {
    output: "installPackages"
  },
  afterSign: "./asarmor.js",
  nsis: {
    oneClick: false,
    allowElevation: true,
    allowToChangeInstallationDirectory: true,
    installerIcon: "./resources/icon.ico",
    uninstallerIcon: "./resources/icon.ico",
    installerHeaderIcon: "./resources/icon.ico",
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
    shortcutName: "G-Chat"
  },
  mac: {
    icon: "icons/icon.icns"
  },
  win: {
    artifactName: "${productName}Setup.${version}.exe",
    icon: "resources/icon.ico",
    target: [
      "nsis"
    ]
  }
};
const dependencies = {
  "@electron-toolkit/preload": "^2.0.0",
  "@electron-toolkit/utils": "^2.0.0",
  "@imengyu/vue3-context-menu": "^1.3.8",
  axios: "^1.6.2",
  dplayer: "^1.27.1",
  "electron-store": "^8.1.0",
  "element-plus": "^2.4.3",
  express: "^4.18.2",
  "fluent-ffmpeg": "^2.1.2",
  "fs-extra": "^11.2.0",
  "js-md5": "^0.8.3",
  moment: "^2.30.1",
  pinia: "^2.1.7",
  sass: "^1.69.5",
  "sass-loader": "^13.3.2",
  sqlite3: "5.1.6",
  uuid: "^11.0.3",
  "v-viewer": "^3.0.11",
  "vue-cookies": "^1.8.3",
  "vue-draggable-next": "^2.2.1",
  "vue-router": "^4.2.5",
  vuedraggable: "^2.24.3",
  ws: "^8.16.0"
};
const devDependencies = {
  "@electron-toolkit/eslint-config": "^1.0.1",
  "@rushstack/eslint-patch": "^1.3.3",
  "@vitejs/plugin-vue": "^4.3.1",
  "@vue/eslint-config-prettier": "^8.0.0",
  asarmor: "^2.0.0",
  electron: "^25.9.8",
  "electron-builder": "^24.6.3",
  "electron-vite": "^1.0.27",
  eslint: "^8.47.0",
  "eslint-plugin-vue": "^9.17.0",
  less: "^4.2.0",
  "node-gyp": "^10.0.1",
  prettier: "^3.0.2",
  vite: "^4.4.9",
  vue: "^3.3.4"
};
const config = {
  name,
  version,
  description,
  main,
  author,
  homepage,
  codeversion,
  scripts,
  build,
  dependencies,
  devDependencies
};
const Update_vue_vue_type_style_index_0_scoped_002fd985_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-002fd985"), n = n(), popScopeId(), n);
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "update-container drag" }, null, -1));
const _hoisted_3 = { class: "update-panel no-drag" };
const _hoisted_4 = { class: "update-inner" };
const _hoisted_5 = { class: "update-content" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "update-content-title" }, "更新内容", -1));
const _hoisted_7 = { class: "update-list" };
const _hoisted_8 = {
  key: 0,
  class: "download-progress"
};
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { class: "download-tips" };
const _hoisted_11 = { key: 1 };
const _hoisted_12 = {
  key: 1,
  class: "op-btn"
};
const _sfc_main = {
  __name: "Update",
  props: {
    autoUpdate: {
      type: Boolean,
      default: true
    }
  },
  setup(__props, { expose: __expose }) {
    const { proxy } = getCurrentInstance();
    const userInfoStore = useUserInfoStore();
    const props = __props;
    const showUpdate = ref(false);
    const updateInfo = ref({
      size: 0,
      updateList: []
    });
    const checkUpdateAuto = async (auto) => {
      let result = await proxy.Request({
        url: proxy.Api.checkVersion,
        params: {
          appVersion: config.version,
          token: localStorage.getItem("token"),
          uid: userInfoStore.getInfo().userId
        }
      });
      if (!result) {
        return;
      }
      if (result.data == null) {
        if (!auto) {
          proxy.Confirm({ message: "已经是最新版本!", showCancelBtn: false });
        }
        return;
      }
      showUpdate.value = true;
      updateInfo.value = result.data;
    };
    const cancelUpdateHandler = () => {
      showUpdate.value = false;
    };
    const downloading = ref(false);
    const downloadPercent = ref({
      progress: 0,
      loaded: 0,
      total: updateInfo.value.size
    });
    const startDownload = () => {
      if (updateInfo.value.fileType == 0) {
        downloading.value = true;
        window.ipcRenderer.send("downloadUpdate", {
          id: updateInfo.value.id,
          fileName: updateInfo.value.fileName
        });
      } else if (updateInfo.value.fileType == 1) {
        window.ipcRenderer.send("openUrl", { url: updateInfo.value.outerLink });
      }
    };
    onMounted(() => {
      if (props.autoUpdate) {
        checkUpdateAuto(true);
      }
      window.ipcRenderer.on("updateDownloadCallback", (e, loaded) => {
        downloadPercent.value.loaded = loaded;
        downloadPercent.value.progress = Math.floor(loaded / updateInfo.value.size * 100);
      });
    });
    onUnmounted(() => {
      window.ipcRenderer.removeAllListeners("updateDownloadCallback");
    });
    const checkUpdate = () => {
      checkUpdateAuto(false);
    };
    __expose({
      checkUpdate
    });
    return (_ctx, _cache) => {
      const _component_el_progress = resolveComponent("el-progress");
      return showUpdate.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
              createBaseVNode("div", _hoisted_7, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(updateInfo.value.updateList, (item, index) => {
                  return openBlock(), createElementBlock("div", null, toDisplayString(index + 1) + "、" + toDisplayString(item), 1);
                }), 256))
              ])
            ]),
            downloading.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
              downloadPercent.value.progress != 100 ? (openBlock(), createElementBlock("div", _hoisted_9, [
                createVNode(_component_el_progress, {
                  percentage: downloadPercent.value.progress
                }, null, 8, ["percentage"]),
                createBaseVNode("div", _hoisted_10, " 正在下载，请稍后(" + toDisplayString(unref(proxy).Utils.size2Str(downloadPercent.value.loaded)) + "/" + toDisplayString(unref(proxy).Utils.size2Str(downloadPercent.value.total)) + ") ", 1)
              ])) : (openBlock(), createElementBlock("div", _hoisted_11, "下载完成，准备安装"))
            ])) : (openBlock(), createElementBlock("div", _hoisted_12, [
              createBaseVNode("div", {
                class: "cancel",
                onClick: cancelUpdateHandler
              }, "残忍拒绝"),
              createBaseVNode("div", {
                class: "update",
                onClick: startDownload
              }, "更新")
            ]))
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
const Update = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-002fd985"]]);
export {
  Update as U,
  config as c
};
