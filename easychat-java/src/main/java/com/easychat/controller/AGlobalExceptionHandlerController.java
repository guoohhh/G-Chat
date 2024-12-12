package com.easychat.controller;

// 引入必要的依赖
import com.easychat.entity.enums.ResponseCodeEnum; // 响应代码枚举，用于统一响应代码
import com.easychat.entity.vo.ResponseVO; // 统一响应对象
import com.easychat.exception.BusinessException; // 自定义的业务异常类
import org.slf4j.Logger; // 日志记录工具
import org.slf4j.LoggerFactory; // 用于创建Logger实例
import org.springframework.dao.DuplicateKeyException; // 用于处理主键冲突异常
import org.springframework.validation.BindException; // 用于处理参数绑定异常
import org.springframework.web.bind.annotation.ExceptionHandler; // 异常处理注解
import org.springframework.web.bind.annotation.RestControllerAdvice; // 统一异常处理控制器
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException; // 参数类型不匹配异常
import org.springframework.web.servlet.NoHandlerFoundException; // 请求处理未找到异常

import javax.servlet.http.HttpServletRequest; // HTTP请求对象
import javax.validation.ConstraintViolationException; // 验证约束异常

// 使用@RestControllerAdvice，表示该类会处理全局异常
@RestControllerAdvice
public class AGlobalExceptionHandlerController extends ABaseController {

    // 创建日志记录器
    private static final Logger logger = LoggerFactory.getLogger(AGlobalExceptionHandlerController.class);

    // 统一处理所有异常
    @ExceptionHandler(value = Exception.class)
    Object handleException(Exception e, HttpServletRequest request) {
        // 记录详细的错误日志，包括请求的URL和异常信息
        logger.error("请求错误，请求地址{}, 错误信息:", request.getRequestURL(), e);

        // 创建响应对象
        ResponseVO ajaxResponse = new ResponseVO();

        // 判断异常类型并处理
        if (e instanceof NoHandlerFoundException) {
            // 404错误，表示找不到处理该请求的Handler
            ajaxResponse.setCode(ResponseCodeEnum.CODE_404.getCode()); // 设置错误代码
            ajaxResponse.setInfo(ResponseCodeEnum.CODE_404.getMsg()); // 设置错误信息
            ajaxResponse.setStatus(STATUC_ERROR); // 设置状态为错误
        } else if (e instanceof BusinessException) {
            // 业务异常（自定义异常），如业务逻辑错误
            BusinessException biz = (BusinessException) e;
            ajaxResponse.setCode(biz.getCode() == null ? ResponseCodeEnum.CODE_600.getCode() : biz.getCode());
            // 如果自定义异常没有指定错误代码，则默认使用CODE_600
            ajaxResponse.setInfo(biz.getMessage()); // 设置错误信息为异常的message
            ajaxResponse.setStatus(STATUC_ERROR); // 设置状态为错误
        } else if (e instanceof BindException || e instanceof MethodArgumentTypeMismatchException) {
            // 参数类型不匹配或绑定异常
            ajaxResponse.setCode(ResponseCodeEnum.CODE_600.getCode()); // 设置错误代码
            ajaxResponse.setInfo(ResponseCodeEnum.CODE_600.getMsg()); // 设置错误信息
            ajaxResponse.setStatus(STATUC_ERROR); // 设置状态为错误
        } else if (e instanceof DuplicateKeyException) {
            // 主键冲突异常，通常是数据库中的唯一约束违反
            ajaxResponse.setCode(ResponseCodeEnum.CODE_601.getCode()); // 设置错误代码
            ajaxResponse.setInfo(ResponseCodeEnum.CODE_601.getMsg()); // 设置错误信息
            ajaxResponse.setStatus(STATUC_ERROR); // 设置状态为错误
        } else if (e instanceof ConstraintViolationException || e instanceof BindException) {
            // 请求参数错误，参数验证失败
            ConstraintViolationException ce = (ConstraintViolationException) e;
            ajaxResponse.setCode(ResponseCodeEnum.CODE_600.getCode()); // 设置错误代码
            ajaxResponse.setInfo(ResponseCodeEnum.CODE_600.getMsg()); // 设置错误信息
            ajaxResponse.setStatus(STATUC_ERROR); // 设置状态为错误
        } else {
            // 捕获其他所有异常并返回500错误
            ajaxResponse.setCode(ResponseCodeEnum.CODE_500.getCode()); // 设置错误代码
            ajaxResponse.setInfo(ResponseCodeEnum.CODE_500.getMsg()); // 设置错误信息
            ajaxResponse.setStatus(STATUC_ERROR); // 设置状态为错误
        }

        // 返回构造的响应对象
        return ajaxResponse;
    }
}
