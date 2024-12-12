package com.easychat.controller;

// 引入所需的依赖
import com.easychat.annotation.GlobalInterceptor; // 自定义的全局拦截器注解
import com.easychat.entity.constants.Constants; // 项目中定义的常量类
import com.easychat.entity.dto.SysSettingDto; // 系统设置数据传输对象（DTO）
import com.easychat.entity.vo.ResponseVO; // 统一响应对象（VO）
import com.easychat.entity.vo.SysSettingVO; // 系统设置响应对象（VO）
import com.easychat.entity.vo.UserInfoVO; // 用户信息响应对象（VO）
import com.easychat.exception.BusinessException; // 自定义的业务异常类
import com.easychat.redis.RedisComponet; // Redis 组件，用于访问 Redis
import com.easychat.redis.RedisUtils; // Redis 工具类
import com.easychat.service.UserContactService; // 用户联系人服务
import com.easychat.service.UserInfoService; // 用户信息服务
import com.easychat.utils.CopyTools; // 用于对象复制的工具类
import com.easychat.websocket.MessageHandler; // WebSocket 消息处理器
import com.wf.captcha.ArithmeticCaptcha; // 算术验证码库

import org.springframework.validation.annotation.Validated; // 用于验证请求参数的注解
import org.springframework.web.bind.annotation.RequestMapping; // HTTP 请求映射注解
import org.springframework.web.bind.annotation.RestController; // 控制器类注解

import javax.annotation.Resource; // 用于依赖注入
import javax.validation.constraints.Email; // 邮箱验证注解
import javax.validation.constraints.NotEmpty; // 非空验证注解
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController("accountController") // 标明这是一个 RESTful 风格的控制器，返回 JSON 格式的响应
@RequestMapping("/account") // 设置该控制器所有接口的公共请求路径为 "/account"
@Validated // 启用参数验证，确保请求的参数符合指定的约束条件
public class AccountController extends ABaseController {

    // 注入用户信息服务，用于处理用户注册和登录的相关业务逻辑
    @Resource
    private UserInfoService userInfoService;

    // 注入 Redis 工具类，用于操作 Redis 缓存
    @Resource
    private RedisUtils redisUtils;

    // 注入 WebSocket 消息处理器，用于处理 WebSocket 消息
    @Resource
    private MessageHandler messageHandler;

    // 注入用户联系人服务，用于管理用户联系人信息
    @Resource
    private UserContactService userContactService;

    // 注入 Redis 组件，用于读取和管理系统设置
    @Resource
    private RedisComponet redisComponet;

    /**
     * 获取验证码
     * 生成一个算术验证码，并将验证码文本存入 Redis，返回验证码图片的 Base64 字符串和对应的 Key。
     *
     * @return 包含验证码图片和验证码 Key 的响应对象
     */
    @RequestMapping(value = "/checkCode")
    public ResponseVO checkCode() {
        // 创建一个算术验证码对象，指定验证码图片的宽度和高度
        ArithmeticCaptcha captcha = new ArithmeticCaptcha(100, 42);

        // 获取验证码的计算结果（如：12 + 3 = ?）
        String code = captcha.text();

        // 生成一个唯一的验证码键（Key），用于存储到 Redis 中
        String checkCodeKey = UUID.randomUUID().toString();

        // 将验证码文本存入 Redis，设置过期时间为 10 分钟
        redisUtils.setex(Constants.REDIS_KEY_CHECK_CODE + checkCodeKey, code, 60 * 10);

        // 将验证码图片转换为 Base64 字符串，供前端显示
        String checkCodeBase64 = captcha.toBase64();

        // 构建返回的结果，包含验证码图片和验证码 Key
        Map<String, String> result = new HashMap<>();
        result.put("checkCode", checkCodeBase64); // 验证码图片
        result.put("checkCodeKey", checkCodeKey); // 验证码 Key，用于后续验证

        // 返回成功响应，包含验证码图片和 Key
        return getSuccessResponseVO(result);
    }

    /**
     * 用户注册
     * 验证验证码是否正确，然后调用注册服务完成用户注册。
     *
     * @param checkCodeKey 验证码的 Key
     * @param email 用户邮箱
     * @param password 用户密码
     * @param nickName 用户昵称
     * @param checkCode 验证码内容
     * @return 注册成功的响应对象
     */
    @RequestMapping(value = "/register")
    public ResponseVO register(@NotEmpty String checkCodeKey,
                               @NotEmpty @Email String email,  // 验证邮箱格式
                               @NotEmpty String password,
                               @NotEmpty String nickName,
                               @NotEmpty String checkCode) {

        try {
            // 从 Redis 中获取验证码并进行验证
            if (!checkCode.equalsIgnoreCase((String) redisUtils.get(Constants.REDIS_KEY_CHECK_CODE + checkCodeKey))) {
                // 如果验证码不正确，抛出业务异常
                throw new BusinessException("图片验证码不正确");
            }

            // 调用用户信息服务进行用户注册
            userInfoService.register(email, nickName, password);

            // 返回注册成功的响应，参数为 null 表示没有额外数据
            return getSuccessResponseVO(null);
        } finally {
            // 无论注册是否成功，都会删除 Redis 中存储的验证码
            redisUtils.delete(Constants.REDIS_KEY_CHECK_CODE + checkCodeKey);
        }
    }

    /**
     * 用户登录
     * 验证验证码是否正确，然后调用登录服务完成用户登录，返回用户信息。
     *
     * @param checkCodeKey 验证码的 Key
     * @param email 用户邮箱
     * @param password 用户密码
     * @param checkCode 验证码内容
     * @return 登录成功的响应对象，包含用户信息
     */
    @RequestMapping(value = "/login")
    public ResponseVO login(@NotEmpty String checkCodeKey,
                            @NotEmpty @Email String email,  // 验证邮箱格式
                            @NotEmpty String password,
                            @NotEmpty String checkCode) {
        try {
            // 从 Redis 中获取验证码并进行验证
            if (!checkCode.equalsIgnoreCase((String) redisUtils.get(Constants.REDIS_KEY_CHECK_CODE + checkCodeKey))) {
                // 如果验证码不正确，抛出业务异常
                throw new BusinessException("图片验证码不正确");
            }

            // 调用用户信息服务进行用户登录，返回用户信息
            UserInfoVO userInfoVO = userInfoService.login(email, password);

            // 返回登录成功的响应，包含用户信息
            return getSuccessResponseVO(userInfoVO);
        } finally {
            // 无论登录是否成功，都会删除 Redis 中存储的验证码
            redisUtils.delete(Constants.REDIS_KEY_CHECK_CODE + checkCodeKey);
        }
    }

    /**
     * 获取系统设置
     * 从 Redis 中读取系统设置并返回给前端。
     *
     * @return 系统设置的响应对象
     */
    @RequestMapping(value = "/getSysSetting")
    @GlobalInterceptor  // 使用自定义的全局拦截器注解，保证接口的权限校验或日志记录
    public ResponseVO getSysSetting() {
        // 从 Redis 中获取系统设置的 DTO 对象
        SysSettingDto sysSettingDto = redisComponet.getSysSetting();

        // 将 DTO 转换为前端需要的 VO 对象，可能是为了适配前端数据结构
        return getSuccessResponseVO(CopyTools.copy(sysSettingDto, SysSettingVO.class));
    }
}
