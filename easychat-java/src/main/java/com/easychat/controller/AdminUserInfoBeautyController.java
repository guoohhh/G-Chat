package com.easychat.controller;

import com.easychat.annotation.GlobalInterceptor;
import com.easychat.entity.po.UserInfoBeauty;
import com.easychat.entity.query.UserInfoBeautyQuery;
import com.easychat.entity.vo.ResponseVO;
import com.easychat.service.UserInfoBeautyService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.validation.constraints.NotNull;

/**
 * 靓号管理 Controller
 * 提供后台管理功能，用于处理靓号（特殊用户账号）的增删改查操作。
 */
@RestController("userInfoBeautyController") // 标注该类为 Spring 的 Controller 组件，并指定 Controller 名称
@RequestMapping("/admin") // 设置请求路径的根路径为 "/admin"
@Validated // 启用 Spring 的参数校验功能
public class AdminUserInfoBeautyController extends ABaseController {

    // 注入 UserInfoBeautyService 服务，用于处理靓号相关的业务逻辑
    @Resource
    private UserInfoBeautyService userInfoBeautyService;

    /**
     * 分页查询靓号账号列表
     * 根据查询条件分页获取靓号账号信息。
     *
     * @param query 查询条件，包含分页参数等
     * @return 包含靓号账号列表的响应对象
     */
    @RequestMapping("/loadBeautyAccountList")
    @GlobalInterceptor(checkAdmin = true) // 检查是否具有管理员权限
    public ResponseVO loadBeautyAccountList(UserInfoBeautyQuery query) {
        // 调用服务层方法进行分页查询，并返回成功响应
        return getSuccessResponseVO(userInfoBeautyService.findListByPage(query));
    }

    /**
     * 保存靓号账号信息
     * 用于保存或更新靓号账号的相关信息。
     *
     * @param beauty 靓号账号实体对象，包含账号信息
     * @return 保存成功的响应对象
     */
    @RequestMapping("/saveBeautAccount")
    @GlobalInterceptor(checkAdmin = true) // 检查是否具有管理员权限
    public ResponseVO saveBeautAccount(UserInfoBeauty beauty) {
        // 调用服务层方法保存靓号账号
        userInfoBeautyService.saveAccount(beauty);

        // 返回成功响应
        return getSuccessResponseVO(null);
    }

    /**
     * 删除靓号账号
     * 根据指定的 ID 删除相应的靓号账号记录。
     *
     * @param id 靓号账号的 ID
     * @return 删除成功的响应对象
     */
    @RequestMapping("/delBeautAccount")
    @GlobalInterceptor(checkAdmin = true) // 检查是否具有管理员权限
    public ResponseVO delBeautAccount(@NotNull Integer id) {
        // 调用服务层方法删除指定 ID 的靓号账号记录
        return getSuccessResponseVO(userInfoBeautyService.deleteUserInfoBeautyById(id));
    }
}
