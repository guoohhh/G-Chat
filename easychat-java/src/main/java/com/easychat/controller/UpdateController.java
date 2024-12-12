package com.easychat.controller;

// 引入必要的依赖
import com.easychat.annotation.GlobalInterceptor; // 自定义的全局拦截器注解
import com.easychat.entity.config.AppConfig; // 应用配置类
import com.easychat.entity.constants.Constants; // 系统常量类
import com.easychat.entity.po.AppUpdate; // 应用更新实体类
import com.easychat.entity.vo.AppUpdateVO; // 应用更新视图对象
import com.easychat.entity.vo.ResponseVO; // 统一响应对象
import com.easychat.service.AppUpdateService; // 应用更新服务
import com.easychat.utils.CopyTools; // 用于对象属性拷贝的工具类
import com.easychat.utils.StringTools; // 字符串工具类
import org.slf4j.Logger; // 日志记录工具
import org.slf4j.LoggerFactory; // 用于创建Logger实例
import org.springframework.validation.annotation.Validated; // 注解用于启用JSR-303校验
import org.springframework.web.bind.annotation.RequestMapping; // 映射HTTP请求
import org.springframework.web.bind.annotation.RestController; // 标注为Rest风格的控制器

import javax.annotation.Resource; // 用于注入依赖
import javax.servlet.http.HttpServletResponse; // 用于HTTP响应对象
import javax.validation.constraints.NotNull; // 用于参数校验
import java.io.File; // 文件操作类
import java.io.FileInputStream; // 文件输入流
import java.io.IOException; // IO异常类
import java.io.OutputStream; // 输出流
import java.util.Arrays; // 用于处理数组的工具类

// 标注为RestController，指定该控制器的名称为"updateController"
@RestController("updateController")
// 指定基础路径为"/update"
@RequestMapping("/update")
// 启用JSR-303验证机制
@Validated
public class UpdateController extends ABaseController {

    // 创建日志记录器
    private static final Logger logger = LoggerFactory.getLogger(UpdateController.class);

    // 注入应用配置类，获取配置项
    @Resource
    private AppConfig appConfig;

    // 注入应用更新服务，用于业务逻辑操作
    @Resource
    private AppUpdateService appUpdateService;

    // 检查版本更新接口
    @RequestMapping("/checkVersion")
    @GlobalInterceptor // 使用全局拦截器，拦截器会执行一些业务前置检查
    public ResponseVO loadAllCategory(String appVersion, String uid) {
        // 如果应用版本为空，直接返回成功响应
        if (StringTools.isEmpty(appVersion)) {
            return getSuccessResponseVO(null);
        }

        // 查询最新的应用更新信息
        AppUpdate appUpdate = appUpdateService.getLatestUpdate(appVersion, uid);

        // 如果没有找到更新，返回空响应
        if (appUpdate == null) {
            return getSuccessResponseVO(null);
        }

        // 将应用更新实体复制到视图对象中
        AppUpdateVO updateVO = CopyTools.copy(appUpdate, AppUpdateVO.class);

        // 获取应用更新文件的大小
        File file = new File(appConfig.getProjectFolder() + Constants.APP_UPDATE_FOLDER + appUpdate.getId() + Constants.APP_EXE_SUFFIX);
        updateVO.setSize(file.length()); // 设置文件大小
        updateVO.setUpdateList(Arrays.asList(appUpdate.getUpdateDescArray())); // 设置更新说明列表
        String fileName = Constants.APP_NAME + appUpdate.getVersion() + Constants.APP_EXE_SUFFIX;
        updateVO.setFileName(fileName); // 设置更新文件名

        // 返回成功响应，并携带更新信息
        return getSuccessResponseVO(updateVO);
    }

    // 下载应用更新文件接口
    @RequestMapping("/download")
    @GlobalInterceptor // 使用全局拦截器
    public void download(HttpServletResponse response, @NotNull Integer id) {
        OutputStream out = null;
        FileInputStream in = null;
        try {
            // 根据ID查询应用更新信息
            AppUpdate appUpdate = appUpdateService.getAppUpdateById(id);

            // 根据更新ID构建文件路径
            File file = new File(appConfig.getProjectFolder() + Constants.APP_UPDATE_FOLDER + appUpdate.getId() + Constants.APP_EXE_SUFFIX);

            // 如果文件不存在，则不进行下载操作
            if (!file.exists()) {
                return;
            }

            // 设置响应类型和内容编码
            response.setContentType("application/x-msdownload; charset=UTF-8");
            response.setHeader("Content-Disposition", "attachment;"); // 告诉浏览器这是一个下载文件
            response.setContentLengthLong(file.length()); // 设置文件的长度

            // 创建文件输入流，准备读取文件内容
            in = new FileInputStream(file);
            byte[] byteData = new byte[1024]; // 定义缓冲区
            out = response.getOutputStream(); // 获取响应输出流

            int len;
            // 循环读取文件内容并写入响应流
            while ((len = in.read(byteData)) != -1) {
                out.write(byteData, 0, len);
            }

            // 强制刷新输出流
            out.flush();
        } catch (Exception e) {
            // 捕获异常并记录错误日志
            logger.error("读取文件异常", e);
        } finally {
            // 关闭流，避免资源泄露
            if (out != null) {
                try {
                    out.close();
                } catch (IOException e) {
                    logger.error("IO异常", e);
                }
            }
            if (in != null) {
                try {
                    in.close();
                } catch (IOException e) {
                    logger.error("IO异常", e);
                }
            }
        }
    }
}
