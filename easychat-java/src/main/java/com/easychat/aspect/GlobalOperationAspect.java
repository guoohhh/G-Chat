package com.easychat.aspect;  // 定义该类所在的包路径，属于 com.easychat.aspect 包，用于处理与切面相关的逻辑

import com.easychat.annotation.GlobalInterceptor;  // 引入自定义注解 GlobalInterceptor，用于标记需要全局拦截的控制器方法
import com.easychat.entity.constants.Constants;  // 引入常量类 Constants，提供 Redis 键常量
import com.easychat.entity.dto.TokenUserInfoDto;  // 引入 TokenUserInfoDto 类，表示存储在 Redis 中的用户信息
import com.easychat.entity.enums.ResponseCodeEnum;  // 引入响应码枚举类，提供标准化的响应码
import com.easychat.exception.BusinessException;  // 引入 BusinessException，用于抛出业务异常
import com.easychat.redis.RedisUtils;  // 引入 RedisUtils 类，提供与 Redis 操作的工具方法
import org.aspectj.lang.JoinPoint;  // 引入 AOP 的 JoinPoint 类，表示切点信息
import org.aspectj.lang.annotation.Aspect;  // 引入 Aspect 注解，标识这是一个切面类
import org.aspectj.lang.annotation.Before;  // 引入 Before 注解，表示该方法是一个前置通知
import org.aspectj.lang.reflect.MethodSignature;  // 引入 MethodSignature，获取方法签名
import org.slf4j.Logger;  // 引入日志工具类
import org.slf4j.LoggerFactory;  // 引入 LoggerFactory，用于创建日志实例
import org.springframework.stereotype.Component;  // 引入 Component 注解，标识这是一个 Spring 管理的组件
import org.springframework.web.context.request.RequestContextHolder;  // 引入 RequestContextHolder，获取当前请求上下文
import org.springframework.web.context.request.ServletRequestAttributes;  // 引入 ServletRequestAttributes，从请求上下文中获取请求对象

import javax.annotation.Resource;  // 引入 Resource 注解，标识依赖注入的资源
import javax.servlet.http.HttpServletRequest;  // 引入 HttpServletRequest，用于获取 HTTP 请求相关信息
import java.lang.reflect.Method;  // 引入反射工具包，用于获取方法信息

@Component("operationAspect")  // 将该类标记为 Spring 管理的组件，并命名为 operationAspect
@Aspect  // 声明这是一个切面类，表示该类用于处理横切关注点（如事务、日志等）
public class GlobalOperationAspect {

    @Resource  // 自动注入 RedisUtils 实例，用于操作 Redis 数据库
    private RedisUtils redisUtils;

    private static Logger logger = LoggerFactory.getLogger(GlobalOperationAspect.class);  // 创建一个 Logger 实例，用于日志记录

    @Before("@annotation(com.easychat.annotation.GlobalInterceptor)")  // 使用 AOP 前置通知，拦截所有被 GlobalInterceptor 注解标记的方法
    public void interceptorDo(JoinPoint point) {  // 切面方法，在目标方法执行前执行
        try {
            Method method = ((MethodSignature) point.getSignature()).getMethod();  // 获取当前切点的方法对象
            GlobalInterceptor interceptor = method.getAnnotation(GlobalInterceptor.class);  // 获取方法上的 GlobalInterceptor 注解
            if (null == interceptor) {  // 如果方法上没有该注解，直接返回，不做处理
                return;
            }
            /**
             * 校验登录
             */
            // 如果 checkLogin 或 checkAdmin 为 true，进行登录校验
            if (interceptor.checkLogin() || interceptor.checkAdmin()) {
                checkLogin(interceptor.checkAdmin());  // 调用 checkLogin 方法进行登录校验，如果需要，还会校验管理员权限
            }
        } catch (BusinessException e) {  // 捕获业务异常，进行日志记录并抛出
            logger.error("全局拦截器异常", e);
            throw e;  // 抛出业务异常，便于上层调用进行处理
        } catch (Exception e) {  // 捕获其他异常，进行日志记录并抛出通用异常
            logger.error("全局拦截器异常", e);
            throw new BusinessException(ResponseCodeEnum.CODE_500);  // 统一抛出 500 错误
        } catch (Throwable e) {  // 捕获其他任何错误，进行日志记录并抛出通用异常
            logger.error("全局拦截器异常", e);
            throw new BusinessException(ResponseCodeEnum.CODE_500);  // 统一抛出 500 错误
        }
    }

    // 校验登录状态
    private void checkLogin(Boolean checkAdmin) {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();  // 获取当前 HTTP 请求对象
        String token = request.getHeader("token");  // 从请求头中获取 token
        TokenUserInfoDto tokenUserInfoDto = (TokenUserInfoDto) redisUtils.get(Constants.REDIS_KEY_WS_TOKEN + token);  // 根据 token 从 Redis 中获取用户信息
        if (tokenUserInfoDto == null) {  // 如果 token 无效，用户信息为空，抛出未登录异常
            throw new BusinessException(ResponseCodeEnum.CODE_901);  // 统一抛出 901 错误，表示未登录
        }
        if (checkAdmin && !tokenUserInfoDto.getAdmin()) {  // 如果需要校验管理员权限，并且用户不是管理员，抛出权限不足异常
            throw new BusinessException(ResponseCodeEnum.CODE_404);  // 统一抛出 404 错误，表示权限不足
        }
    }
}
