package com.easychat.controller;

import com.easychat.entity.constants.Constants; // 引入项目中的常量类
import com.easychat.entity.dto.TokenUserInfoDto; // 引入 Token 用户信息的 DTO 类
import com.easychat.entity.enums.ResponseCodeEnum; // 引入响应码的枚举类
import com.easychat.entity.vo.ResponseVO; // 引入通用响应 VO 类
import com.easychat.exception.BusinessException; // 引入业务异常类
import com.easychat.redis.RedisUtils; // 引入 Redis 工具类

import javax.annotation.Resource; // 用于依赖注入
import javax.servlet.http.HttpServletRequest; // 提供对 HTTP 请求的操作

/**
 * ABaseController 是基础控制器类，提供一些通用的方法和工具，
 * 供其他具体的 Controller 类继承使用。
 */
public class ABaseController {

    // 定义 Cookie 中的 Token 键名
    protected static final String COOKIE_KEY_TOKEN = "token";

    // 定义操作状态：成功
    protected static final String STATUC_SUCCESS = "success";

    // 定义操作状态：失败
    protected static final String STATUC_ERROR = "error";

    // 注入 Redis 工具类，用于操作 Redis 缓存
    @Resource
    private RedisUtils redisUtils;

    /**
     * 构建成功的响应对象。
     *
     * @param t 响应数据
     * @param <T> 数据的类型
     * @return 包含成功状态、响应码和数据的 ResponseVO 对象
     */
    protected <T> ResponseVO getSuccessResponseVO(T t) {
        ResponseVO<T> responseVO = new ResponseVO<>();
        responseVO.setStatus(STATUC_SUCCESS); // 设置状态为成功
        responseVO.setCode(ResponseCodeEnum.CODE_200.getCode()); // 设置响应码 200
        responseVO.setInfo(ResponseCodeEnum.CODE_200.getMsg()); // 设置响应信息
        responseVO.setData(t); // 设置响应数据
        return responseVO;
    }

    /**
     * 构建业务异常的响应对象。
     *
     * @param e 业务异常对象
     * @param t 额外的数据
     * @param <T> 数据的类型
     * @return 包含错误状态、响应码和异常信息的 ResponseVO 对象
     */
    protected <T> ResponseVO getBusinessErrorResponseVO(BusinessException e, T t) {
        ResponseVO vo = new ResponseVO();
        vo.setStatus(STATUC_ERROR); // 设置状态为失败
        // 如果业务异常中没有指定错误码，则使用默认的错误码 600
        if (e.getCode() == null) {
            vo.setCode(ResponseCodeEnum.CODE_600.getCode());
        } else {
            vo.setCode(e.getCode());
        }
        vo.setInfo(e.getMessage()); // 设置异常信息
        vo.setData(t); // 设置额外数据
        return vo;
    }

    /**
     * 构建服务器内部错误的响应对象。
     *
     * @param t 额外的数据
     * @param <T> 数据的类型
     * @return 包含错误状态、响应码和默认错误信息的 ResponseVO 对象
     */
    protected <T> ResponseVO getServerErrorResponseVO(T t) {
        ResponseVO vo = new ResponseVO();
        vo.setStatus(STATUC_ERROR); // 设置状态为失败
        vo.setCode(ResponseCodeEnum.CODE_500.getCode()); // 设置错误码 500
        vo.setInfo(ResponseCodeEnum.CODE_500.getMsg()); // 设置默认错误信息
        vo.setData(t); // 设置额外数据
        return vo;
    }

    /**
     * 从请求中获取 Token，并根据 Token 从 Redis 中获取对应的用户信息。
     *
     * @param request HttpServletRequest 对象，包含请求的上下文
     * @return TokenUserInfoDto 对象，包含 Token 对应的用户信息
     */
    protected TokenUserInfoDto getTokenUserInfo(HttpServletRequest request) {
        String token = request.getHeader("token"); // 从请求头中获取 Token
        // 从 Redis 中获取 Token 对应的用户信息
        TokenUserInfoDto tokenUserInfoDto = (TokenUserInfoDto) redisUtils.get(Constants.REDIS_KEY_WS_TOKEN + token);
        return tokenUserInfoDto;
    }

    /**
     * 更新 Redis 中的 Token 用户信息，同时重置 Token 的过期时间。
     *
     * @param request HttpServletRequest 对象，包含请求的上下文
     * @param tokenUserInfoDto Token 对应的用户信息
     */
    protected void resetTokenUserInfo(HttpServletRequest request, TokenUserInfoDto tokenUserInfoDto) {
        String token = request.getHeader("token"); // 从请求头中获取 Token
        // 将 Token 用户信息重新保存到 Redis，并设置过期时间为常量的两倍
        redisUtils.setex(Constants.REDIS_KEY_WS_TOKEN + token, tokenUserInfoDto, Constants.REDIS_KEY_EXPIRES_DAY * 2);
    }
}
