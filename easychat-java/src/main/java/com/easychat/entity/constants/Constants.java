package com.easychat.entity.constants;  // 包名，定义在 com.easychat.entity.constants 包下，表示该类用于存放常量。

import com.easychat.entity.enums.UserContactTypeEnum;  // 引入 UserContactTypeEnum 枚举类，用于获取与用户相关的常量。

public class Constants {

    // 字符串常量
    public static final String ZERO_STR = "0";  // 字符串类型的 0。

    // 整型常量
    public static final Integer ZERO = 0;

    public static final Integer ONE = 1;

    public static final Integer LENGTH_10 = 10;

    public static final Integer LENGTH_11 = 11;

    public static final Integer LENGTH_20 = 20;

    public static final Integer LENGTH_30 = 30;

    // 会话密钥相关
    public static final String SESSION_KEY = "session_key";  // 用于存储会话密钥的常量。

    // 文件存储路径常量
    public static final String FILE_FOLDER_FILE = "/file/";  // 文件目录常量，表示文件存储路径。

    public static final String FILE_FOLDER_TEMP = "/temp/";  // 临时文件目录常量，表示临时文件存储路径。

    public static final String FILE_FOLDER_TEMP_2 = "temp";  // 临时文件目录的另一常量，通常用于标识临时目录。

    public static final String FILE_FOLDER_IMAGE = "images/";  // 图片文件夹常量，表示图片存储路径。

    public static final String FILE_FOLDER_AVATAR_NAME = "avatar/";  // 用户头像文件夹常量，表示头像图片存储路径。

    // 校验码相关
    public static final String CHECK_CODE_KEY = "check_code_key";  // 用于存储校验码的键常量。

    // 图片文件相关常量
    public static final String IMAGE_SUFFIX = ".png";  // 图片文件的后缀名常量，表示图片类型为 PNG 格式。

    public static final String COVER_IMAGE_SUFFIX = "_cover.png";  // 封面图片的后缀名，表示封面图片使用 PNG 格式。

    public static final String[] IMAGE_SUFFIX_LIST = new String[]{".jpeg", ".jpg", ".png", ".gif", ".bmp", ".webp"};  // 支持的图片格式列表，包含 JPEG、PNG、GIF、BMP、WEBP 格式。

    // 视频文件相关常量
    public static final String[] VIDEO_SUFFIX_LIST = new String[]{".mp4", ".avi", ".rmvb", ".mkv", ".mov"};  // 支持的视频格式列表，包含 MP4、AVI、RMVB、MKV、MOV 格式。

    public static final Long FILE_SIZE_MB = 1024 * 1024L;  // 文件大小上限，单位为字节，1MB = 1024 * 1024 字节。

    /**
     * redis key 相关常量
     */

    // Redis 过期时间相关常量
    public static final Integer REDIS_KEY_EXPIRES_ONE_MIN = 60;  // Redis 缓存过期时间，单位为秒，表示 1 分钟。

    public static final Integer REDIS_KEY_EXPIRES_HEART_BEAT = 6;  // Redis 缓存过期时间，单位为秒，表示心跳时间间隔。

    public static final Integer REDIS_KEY_EXPIRES_DAY = REDIS_KEY_EXPIRES_ONE_MIN * 60 * 24;  // Redis 缓存过期时间，单位为秒，表示 1 天的过期时间。

    public static final Integer REDIS_KEY_TOKEN_EXPIRES = REDIS_KEY_EXPIRES_DAY * 2;  // Redis 缓存过期时间，单位为秒，表示 Token 的过期时间为 2 天。

    // Redis 键常量
    public static final String REDIS_KEY_CHECK_CODE = "easychat:checkcode:";  // 用于存储校验码的 Redis 键前缀。

    public static final String REDIS_KEY_WS_TOKEN = "easychat:ws:token:";  // 用于存储 WebSocket Token 的 Redis 键前缀。

    public static final String REDIS_KEY_WS_TOKEN_USERID = "easychat:ws:token:userid";  // 用于存储 WebSocket Token 与用户 ID 映射的 Redis 键常量。

    public static final String REDIS_KEY_WS_USER_HEART_BEAT = "easychat:ws:user:heartbeat";  // 用于存储 WebSocket 用户心跳数据的 Redis 键常量。

    public static final String REDIS_KEY_WS_ON_LINE_USER = "easychat:ws:online:";  // 用于存储 WebSocket 在线用户信息的 Redis 键常量。

    // 用户联系人列表相关
    public static final String REDIS_KEY_USER_CONTACT = "easychat:ws:user:contact:";  // 用于存储用户联系人的 Redis 键常量。

    // 用户参与的会话列表相关
    public static final String REDIS_KEY_USER_SESSION = "easychat:ws:user:session:";  // 用于存储用户会话信息的 Redis 键常量。

    public static final Long MILLISECOND_3DAYS_AGO = 3 * 24 * 60 * 60 * 1000L;  // 3 天前的时间戳，单位为毫秒，用于时间计算。

    public static final String ROBOT_UID = UserContactTypeEnum.USER.getPrefix() + "robot";  // 机器人用户的唯一 ID，前缀加 "robot"。

    // 系统设置相关
    public static final String REDIS_KEY_SYS_SETTING = "easychat:syssetting:";  // 系统设置 Redis 键前缀。

    // 应用更新文件夹相关
    public static final String APP_UPDATE_FOLDER = "/app/";  // 存储应用更新文件的文件夹路径。

    // 应用名称和安装包后缀
    public static final String APP_NAME = "EasyChatSetup.";  // 应用安装包的名称前缀。
    public static final String APP_EXE_SUFFIX = ".exe";  // 应用安装包的文件后缀名，表示 Windows 可执行文件。

    // 正则表达式常量
    public static final String REGEX_PASSWORD = "^(?=.*\\d)(?=.*[a-zA-Z])[\\da-zA-Z~!@#$%^&*_]{8,18}$";  // 用于验证密码格式的正则表达式，要求密码包含字母、数字和特殊符号，长度在 8 到 18 之间。

    // 申请信息模板
    public static final String APPLY_INFO_TEMPLATE = "我是%s";  // 申请信息的模板，通常用于格式化用户的申请信息。

    // 退出群聊模板
    public static final String out_group_TEMPLATE_self = "%s退出了群聊";  // 自己退出群聊时的模板，表示退出的人为自己。

    // 被管理员踢出群聊模板
    public static final String out_group_TEMPLATE = "%s被管理员移出了群聊";  // 被管理员踢出群聊时的模板，表示被踢出的人。

}
