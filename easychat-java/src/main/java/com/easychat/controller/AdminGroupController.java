package com.easychat.controller;

// 引入所需的类和注解
import com.easychat.annotation.GlobalInterceptor; // 自定义注解，用于全局拦截
import com.easychat.entity.enums.ResponseCodeEnum; // 枚举类，定义响应状态码
import com.easychat.entity.po.GroupInfo; // 群组信息实体类
import com.easychat.entity.query.GroupInfoQuery; // 群组信息查询条件封装类
import com.easychat.entity.vo.PaginationResultVO; // 分页结果的封装类
import com.easychat.entity.vo.ResponseVO; // 通用响应对象封装类
import com.easychat.exception.BusinessException; // 业务异常类
import com.easychat.service.GroupInfoService; // 服务类，处理群组相关业务
import org.springframework.web.bind.annotation.RequestMapping; // 用于映射请求路径
import org.springframework.web.bind.annotation.RestController; // 标注为 REST 控制器

import javax.annotation.Resource; // 用于依赖注入
import javax.validation.constraints.NotEmpty; // 校验注解，确保参数非空

/**
 * 管理员群组控制器类
 * 提供管理员相关的群组管理接口，例如加载群组信息和解散群组。
 */
@RestController("adminGroupController") // 声明为 RESTful 控制器，名称为 adminGroupController
@RequestMapping("/admin") // 定义基础路径为 /admin
public class AdminGroupController extends ABaseController {

    @Resource
    private GroupInfoService groupInfoService; // 注入群组信息服务类

    /**
     * 加载群组信息
     * @param groupInfoQuery 群组信息查询条件封装类
     * @return 响应对象，包含查询到的分页结果
     */
    @RequestMapping("/loadGroup") // 映射请求路径为 /admin/loadGroup
    @GlobalInterceptor(checkAdmin = true) // 启用全局拦截器，检查管理员权限
    public ResponseVO loadGroup(GroupInfoQuery groupInfoQuery) {
        groupInfoQuery.setQueryGroupOwnerName(true); // 设置查询条件：查询群主名称
        groupInfoQuery.setQueryMemberCount(true); // 设置查询条件：查询群成员数量
        PaginationResultVO resultVO = groupInfoService.findListByPage(groupInfoQuery); // 根据条件分页查询群组信息
        return getSuccessResponseVO(resultVO); // 返回成功响应，包含分页结果
    }

    /**
     * 解散群组
     * @param groupId 群组ID，不能为空
     * @return 响应对象，表示操作结果
     */
    @RequestMapping("/dissolutionGroup") // 映射请求路径为 /admin/dissolutionGroup
    @GlobalInterceptor(checkAdmin = true) // 启用全局拦截器，检查管理员权限
    public ResponseVO dissolutionGroup(@NotEmpty String groupId) {
        GroupInfo groupInfo = groupInfoService.getGroupInfoByGroupId(groupId); // 根据群组ID获取群组信息
        if (null == groupInfo) { // 如果群组信息不存在
            throw new BusinessException(ResponseCodeEnum.CODE_200); // 抛出业务异常，返回特定错误码
        }
        groupInfoService.dissolutionGroup(groupInfo.getGroupOwnerId(), groupId); // 调用服务方法解散群组
        return getSuccessResponseVO(null); // 返回成功响应，响应体为空
    }
}
