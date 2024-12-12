package com.easychat.controller;

// 引入所需的类和注解
import com.easychat.annotation.GlobalInterceptor; // 自定义注解，用于全局拦截
import com.easychat.entity.query.UserInfoQuery; // 用户信息查询条件封装类
import com.easychat.entity.vo.PaginationResultVO; // 分页结果的封装类
import com.easychat.entity.vo.ResponseVO; // 通用响应对象封装类
import com.easychat.service.UserInfoService; // 用户信息服务类，处理用户相关业务
import org.springframework.web.bind.annotation.RequestMapping; // 用于映射请求路径
import org.springframework.web.bind.annotation.RestController; // 标注为 REST 控制器

import javax.annotation.Resource; // 用于依赖注入
import javax.validation.constraints.NotEmpty; // 校验注解，确保参数非空
import javax.validation.constraints.NotNull; // 校验注解，确保参数不为null

/**
 * 管理员用户信息控制器类
 * 提供管理员相关的用户管理接口，例如加载用户信息、更新用户状态、强制下线用户。
 */
@RestController("adminUserInfoController") // 声明为 RESTful 控制器，名称为 adminUserInfoController
@RequestMapping("/admin") // 定义基础路径为 /admin
public class AdminUserInfoController extends ABaseController {

    @Resource
    private UserInfoService userInfoService; // 注入用户信息服务类

    /**
     * 加载用户信息
     * @param userInfoQuery 用户信息查询条件封装类
     * @return 响应对象，包含查询到的分页结果
     */
    @RequestMapping("/loadUser") // 映射请求路径为 /admin/loadUser
    @GlobalInterceptor(checkAdmin = true) // 启用全局拦截器，检查管理员权限
    public ResponseVO loadUser(UserInfoQuery userInfoQuery) {
        userInfoQuery.setOrderBy("create_time desc"); // 设置查询结果按创建时间倒序排列
        PaginationResultVO resultVO = userInfoService.findListByPage(userInfoQuery); // 根据查询条件分页查询用户信息
        return getSuccessResponseVO(resultVO); // 返回成功响应，包含分页结果
    }

    /**
     * 更新用户状态
     * @param status 用户的新状态（例如启用、禁用）
     * @param userId 用户ID，不能为空
     * @return 响应对象，表示操作结果
     */
    @RequestMapping("/updateUserStatus") // 映射请求路径为 /admin/updateUserStatus
    @GlobalInterceptor(checkAdmin = true) // 启用全局拦截器，检查管理员权限
    public ResponseVO updateUserStatus(@NotNull Integer status, // 校验status参数不能为空
                                       @NotEmpty String userId) { // 校验userId不能为空
        userInfoService.updateUserStatus(status, userId); // 调用服务方法更新用户状态
        return getSuccessResponseVO(null); // 返回成功响应，响应体为空
    }

    /**
     * 强制用户下线
     * @param userId 用户ID，不能为空
     * @return 响应对象，表示操作结果
     */
    @RequestMapping("/forceOffLine") // 映射请求路径为 /admin/forceOffLine
    @GlobalInterceptor(checkAdmin = true) // 启用全局拦截器，检查管理员权限
    public ResponseVO forceOffLine(@NotEmpty String userId) { // 校验userId不能为空
        userInfoService.forceOffLine(userId); // 调用服务方法强制用户下线
        return getSuccessResponseVO(null); // 返回成功响应，响应体为空
    }
}
