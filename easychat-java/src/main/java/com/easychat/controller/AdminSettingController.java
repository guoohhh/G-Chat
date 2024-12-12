package com.easychat.controller;

// 引入必要的依赖
import com.easychat.annotation.GlobalInterceptor; // 自定义注解，用于全局拦截器功能
import com.easychat.entity.config.AppConfig; // 应用配置类
import com.easychat.entity.constants.Constants; // 系统常量类
import com.easychat.entity.dto.SysSettingDto; // 系统设置的数据传输对象
import com.easychat.entity.vo.ResponseVO; // 返回数据的统一封装类
import com.easychat.redis.RedisComponet; // Redis组件，用于缓存和数据存储
import org.springframework.web.bind.annotation.RequestMapping; // 映射HTTP请求
import org.springframework.web.bind.annotation.RestController; // 标注为Rest风格的控制器
import org.springframework.web.multipart.MultipartFile; // 用于处理上传文件

import javax.annotation.Resource; // 用于注入依赖
import java.io.File; // 文件操作
import java.io.IOException; // IO异常处理

// 标注为一个RestController，指定其名称为"adminSettingController"，以便于Spring容器管理
@RestController("adminSettingController")
// 指定该控制器的基础路径为"/admin"
@RequestMapping("/admin")
public class AdminSettingController extends ABaseController { // 继承自ABaseController，可能封装了一些基础功能

    // 注入应用配置类，获取全局配置信息
    @Resource
    private AppConfig appConfig;

    // 注入Redis组件，用于操作Redis存储
    @Resource
    private RedisComponet redisComponet;

    // 处理保存系统设置的请求
    @RequestMapping("/saveSysSetting")
    @GlobalInterceptor(checkAdmin = true) // 自定义注解，拦截器会检查是否为管理员
    public ResponseVO saveSysSetting(SysSettingDto sysSettingDto, // 系统设置数据对象
                                     MultipartFile robotFile, // 上传的机器人文件
                                     MultipartFile robotCover // 上传的机器人封面文件
    ) throws IOException { // 方法可能抛出IO异常
        if (robotFile != null) { // 如果上传了机器人文件
            // 获取基础文件夹路径
            String baseFolder = appConfig.getProjectFolder() + Constants.FILE_FOLDER_FILE;
            // 创建目标文件夹对象
            File targetFileFolder = new File(baseFolder + Constants.FILE_FOLDER_AVATAR_NAME);
            if (!targetFileFolder.exists()) { // 如果目标文件夹不存在
                targetFileFolder.mkdirs(); // 创建目标文件夹
            }
            // 构建机器人头像文件路径
            String filePath = targetFileFolder.getPath() + "/" + Constants.ROBOT_UID + Constants.IMAGE_SUFFIX;
            // 将上传的机器人文件保存到指定路径
            robotFile.transferTo(new File(filePath));
            // 将机器人封面文件保存到指定路径（后缀区分）
            robotCover.transferTo(new File(filePath + Constants.COVER_IMAGE_SUFFIX));
        }
        // 将系统设置保存到Redis中
        redisComponet.saveSysSetting(sysSettingDto);
        // 返回成功的响应对象
        return getSuccessResponseVO(null);
    }

    // 处理获取系统设置的请求
    @RequestMapping("/getSysSetting")
    @GlobalInterceptor(checkAdmin = true) // 自定义注解，拦截器会检查是否为管理员
    public ResponseVO getSysSetting() {
        // 从Redis中获取系统设置
        SysSettingDto sysSettingDto = redisComponet.getSysSetting();
        // 返回成功的响应对象，附带系统设置数据
        return getSuccessResponseVO(sysSettingDto);
    }
}
