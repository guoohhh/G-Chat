package com.easychat.entity.config;  // 定义包名，表示该类属于 com.easychat.entity.config 包

// 引入工具类 StringTools，用于字符串操作
import com.easychat.utils.StringTools;
// 引入日志工具类，使用 SLF4J 日志框架进行日志记录
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
// 引入 Spring 注解，用于从配置文件中注入属性
import org.springframework.beans.factory.annotation.Value;
// 引入 Spring 注解，用于标记该类为组件，便于依赖注入
import org.springframework.stereotype.Component;

/**
 * AppConfig 类用于读取并存储应用程序的配置项
 * 配置项通过 Spring 的 @Value 注解注入
 */
@Component("appConfig")  // 将该类标记为 Spring Bean，名称为 appConfig
public class AppConfig {

    // 使用 SLF4J 提供的 LoggerFactory 获取日志记录器
    private static final Logger logger = LoggerFactory.getLogger(AppConfig.class);

    /**
     * websocket 端口号，配置文件中获取值
     * 如果配置文件中没有指定值，默认值为空
     */
    @Value("${ws.port:}")  // 通过 Spring 的 @Value 注解从配置文件中获取 ws.port 的值，若没有配置则使用默认值
    private Integer wsPort;

    /**
     * 文件存储的根目录，配置文件中获取值
     * 如果配置文件中没有指定值，默认值为空
     */
    @Value("${project.folder:}")  // 通过 Spring 的 @Value 注解从配置文件中获取 project.folder 的值，若没有配置则使用默认值
    private String projectFolder;

    /**
     * 管理员邮箱列表，配置文件中获取值
     * 如果配置文件中没有指定值，默认值为空
     */
    @Value("${admin.emails:}")  // 通过 Spring 的 @Value 注解从配置文件中获取 admin.emails 的值，若没有配置则使用默认值
    private String adminEmails;

    /**
     * 获取项目文件夹路径，确保路径以斜杠（/）结尾
     * 如果路径不存在或不是以斜杠结尾，会自动拼接上斜杠
     *
     * @return 返回标准化后的文件夹路径
     */
    public String getProjectFolder() {
        // 如果 projectFolder 非空且不以斜杠结尾，则在末尾添加斜杠
        if (!StringTools.isEmpty(projectFolder) && !projectFolder.endsWith("/")) {
            projectFolder = projectFolder + "/";  // 添加斜杠
        }
        return projectFolder;  // 返回处理后的路径
    }

    /**
     * 获取管理员邮箱列表
     *
     * @return 返回管理员邮箱字符串
     */
    public String getAdminEmails() {
        return adminEmails;  // 返回 adminEmails 配置项的值
    }

    /**
     * 获取 WebSocket 端口号
     *
     * @return 返回 wsPort 配置项的值
     */
    public Integer getWsPort() {
        return wsPort;  // 返回 wsPort 配置项的值
    }
}
