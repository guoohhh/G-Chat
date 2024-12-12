package com.easychat.controller;

// 引入所需的类和注解
import com.easychat.annotation.GlobalInterceptor; // 自定义注解，用于全局拦截
import com.easychat.entity.dto.TokenUserInfoDto; // 用户信息DTO，用于封装Token中的用户信息
import com.easychat.entity.enums.GroupStatusEnum; // 群组状态枚举，用于表示群组的状态
import com.easychat.entity.enums.MessageTypeEnum; // 消息类型枚举，用于定义消息类型
import com.easychat.entity.enums.UserContactStatusEnum; // 用户联系状态枚举
import com.easychat.entity.po.GroupInfo; // 群组信息实体类2
import com.easychat.entity.po.UserContact; // 用户联系人实体类
import com.easychat.entity.query.GroupInfoQuery; // 群组查询条件封装类
import com.easychat.entity.query.UserContactQuery; // 用户联系人查询条件封装类
import com.easychat.entity.vo.GroupInfoVO; // 群组信息视图对象
import com.easychat.entity.vo.ResponseVO; // 通用响应对象封装类
import com.easychat.exception.BusinessException; // 业务异常类
import com.easychat.service.GroupInfoService; // 群组信息服务类，处理群组相关业务
import com.easychat.service.UserContactService; // 用户联系人服务类，处理用户与群组的关系
import org.springframework.web.bind.annotation.RequestMapping; // 用于映射请求路径
import org.springframework.web.bind.annotation.RestController; // 标注为 REST 控制器
import org.springframework.web.multipart.MultipartFile; // 处理文件上传

import javax.annotation.Resource; // 用于依赖注入
import javax.servlet.http.HttpServletRequest; // HttpServletRequest，用于获取请求中的信息
import javax.validation.constraints.NotEmpty; // 校验注解，确保参数非空
import javax.validation.constraints.NotNull; // 校验注解，确保参数不为null
import java.util.List;

/**
 * 群组控制器类
 * 提供群组相关操作接口，包括群组的创建、查看、解散、退群、添加或移除成员等操作。
 */
@RestController("groupController") // 声明为 RESTful 控制器，名称为 groupController
@RequestMapping("/group") // 定义基础路径为 /group
public class GroupController extends ABaseController {

    @Resource
    private GroupInfoService groupInfoService; // 注入群组信息服务类

    @Resource
    private UserContactService userContactService; // 注入用户联系人服务类

    /**
     * 保存群组信息
     * @param request HttpServletRequest对象，用于获取当前请求的用户信息
     * @param groupId 群组ID，如果是新建群组则为空
     * @param groupName 群组名称
     * @param groupNotice 群组公告
     * @param joinType 群组加入方式（公开、邀请制等）
     * @param avatarFile 群组头像文件
     * @param avatarCover 群组封面文件
     * @return 响应对象，表示操作结果
     */
    @RequestMapping(value = "/saveGroup") // 映射请求路径为 /group/saveGroup
    @GlobalInterceptor // 启用全局拦截器，进行权限校验等
    public ResponseVO saveGroup(HttpServletRequest request,
                                String groupId,
                                @NotEmpty String groupName,
                                String groupNotice,
                                @NotNull Integer joinType,
                                MultipartFile avatarFile,
                                MultipartFile avatarCover) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request); // 获取请求中的用户信息
        GroupInfo groupInfo = new GroupInfo(); // 创建群组信息对象
        groupInfo.setGroupId(groupId); // 设置群组ID
        groupInfo.setGroupOwnerId(tokenUserInfoDto.getUserId()); // 设置群组拥有者为当前用户
        groupInfo.setGroupName(groupName); // 设置群组名称
        groupInfo.setGroupNotice(groupNotice); // 设置群组公告
        groupInfo.setJoinType(joinType); // 设置群组加入方式
        this.groupInfoService.saveGroup(groupInfo, avatarFile, avatarCover); // 调用服务类保存群组信息
        return getSuccessResponseVO(null); // 返回成功响应
    }

    /**
     * 加载当前用户的群组列表
     * @param request HttpServletRequest对象，用于获取当前请求的用户信息
     * @return 响应对象，包含当前用户的群组列表
     */
    @RequestMapping(value = "/loadMyGroup") // 映射请求路径为 /group/loadMyGroup
    @GlobalInterceptor // 启用全局拦截器，进行权限校验等
    public ResponseVO loadMyGroup(HttpServletRequest request) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request); // 获取当前用户信息
        GroupInfoQuery infoQuery = new GroupInfoQuery(); // 创建群组查询对象
        infoQuery.setGroupOwnerId(tokenUserInfoDto.getUserId()); // 设置群主ID为当前用户
        infoQuery.setOrderBy("create_time desc"); // 按照创建时间倒序排列群组
        List<GroupInfo> groupInfoList = this.groupInfoService.findListByParam(infoQuery); // 获取群组列表
        return getSuccessResponseVO(groupInfoList); // 返回群组列表
    }

    /**
     * 获取指定群组的详细信息
     * @param request HttpServletRequest对象，用于获取当前请求的用户信息
     * @param groupId 群组ID
     * @return 响应对象，包含群组详细信息
     */
    @RequestMapping(value = "/getGroupInfo") // 映射请求路径为 /group/getGroupInfo
    @GlobalInterceptor // 启用全局拦截器，进行权限校验等
    public ResponseVO getGroupInfo(HttpServletRequest request,
                                   @NotEmpty String groupId) {
        GroupInfo groupInfo = getGroupDetailCommon(request, groupId); // 获取群组的详细信息
        UserContactQuery userContactQuery = new UserContactQuery(); // 创建联系人查询对象
        userContactQuery.setContactId(groupId); // 设置群组ID作为联系人ID
        Integer memberCount = this.userContactService.findCountByParam(userContactQuery); // 获取群组成员数量
        groupInfo.setMemberCount(memberCount); // 设置群组的成员数量
        return getSuccessResponseVO(groupInfo); // 返回群组信息
    }

    /**
     * 获取群组详细信息（通用方法，检查群组是否存在且有效）
     * @param request HttpServletRequest对象，用于获取当前请求的用户信息
     * @param groupId 群组ID
     * @return 群组信息
     */
    private GroupInfo getGroupDetailCommon(HttpServletRequest request, String groupId) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request); // 获取当前用户信息
        UserContact userContact = this.userContactService.getUserContactByUserIdAndContactId(tokenUserInfoDto.getUserId(), groupId); // 获取用户与群组的联系信息
        // 判断用户是否为群组成员且群组状态为正常
        if (userContact == null || !UserContactStatusEnum.FRIEND.getStatus().equals(userContact.getStatus())) {
            throw new BusinessException("你不在群聊或者群聊不存在或已经解散");
        }
        GroupInfo groupInfo = this.groupInfoService.getGroupInfoByGroupId(groupId); // 获取群组信息
        if (groupInfo == null || !GroupStatusEnum.NORMAL.getStatus().equals(groupInfo.getStatus())) {
            throw new BusinessException("群聊不存在或已经解散");
        }
        return groupInfo; // 返回群组信息
    }

    /**
     * 获取群组信息，包括群成员（用于聊天页面）
     * @param request HttpServletRequest对象，用于获取当前请求的用户信息
     * @param groupId 群组ID
     * @return 响应对象，包含群组信息及成员列表
     */
    @RequestMapping(value = "/getGroupInfo4Chat") // 映射请求路径为 /group/getGroupInfo4Chat
    @GlobalInterceptor // 启用全局拦截器，进行权限校验等
    public ResponseVO getGroupInfo4Chat(HttpServletRequest request, @NotEmpty String groupId) {
        GroupInfo groupInfo = getGroupDetailCommon(request, groupId); // 获取群组的详细信息
        UserContactQuery userContactQuery = new UserContactQuery(); // 创建联系人查询对象
        userContactQuery.setContactId(groupId); // 设置群组ID作为联系人ID
        userContactQuery.setQueryUserInfo(true); // 查询用户的详细信息
        userContactQuery.setOrderBy("create_time asc"); // 按照创建时间升序排列成员
        userContactQuery.setStatus(UserContactStatusEnum.FRIEND.getStatus()); // 只查询好友状态的成员
        List<UserContact> userContactList = this.userContactService.findListByParam(userContactQuery); // 获取群组成员列表
        GroupInfoVO groupInfoVo = new GroupInfoVO(); // 创建群组信息视图对象
        groupInfoVo.setGroupInfo(groupInfo); // 设置群组信息
        groupInfoVo.setUserContactList(userContactList); // 设置群组成员列表
        return getSuccessResponseVO(groupInfoVo); // 返回群组信息和成员列表
    }

    /**
     * 退群
     * @param request HttpServletRequest对象，用于获取当前请求的用户信息
     * @param groupId 群组ID
     * @return 响应对象，表示操作结果
     */
    @RequestMapping(value = "/leaveGroup") // 映射请求路径为 /group/leaveGroup
    @GlobalInterceptor // 启用全局拦截器，进行权限校验等
    public ResponseVO leaveGroup(HttpServletRequest request, @NotEmpty String groupId) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request); // 获取当前用户信息
        groupInfoService.leaveGroup(tokenUserInfoDto.getUserId(), groupId, MessageTypeEnum.LEAVE_GROUP); // 调用服务方法让用户退群
        return getSuccessResponseVO(null); // 返回成功响应
    }

    /**
     * 解散群
     * @param request HttpServletRequest对象，用于获取当前请求的用户信息
     * @param groupId 群组ID
     * @return 响应对象，表示操作结果
     */
    @RequestMapping(value = "/dissolutionGroup") // 映射请求路径为 /group/dissolutionGroup
    @GlobalInterceptor // 启用全局拦截器，进行权限校验等
    public ResponseVO dissolutionGroup(HttpServletRequest request, @NotEmpty String groupId) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request); // 获取当前用户信息
        groupInfoService.dissolutionGroup(tokenUserInfoDto.getUserId(), groupId); // 调用服务方法解散群
        return getSuccessResponseVO(null); // 返回成功响应
    }

    /**
     * 添加或移除群组成员
     * @param request HttpServletRequest对象，用于获取当前请求的用户信息
     * @param groupId 群组ID
     * @param selectContacts 选择的联系人ID列表
     * @param opType 操作类型：1表示添加成员，2表示移除成员
     * @return 响应对象，表示操作结果
     */
    @RequestMapping(value = "/addOrRemoveGroupUser") // 映射请求路径为 /group/addOrRemoveGroupUser
    @GlobalInterceptor // 启用全局拦截器，进行权限校验等
    public ResponseVO addOrRemoveGroupUser(HttpServletRequest request, @NotEmpty String groupId, @NotEmpty String selectContacts,
                                           @NotNull Integer opType) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request); // 获取当前用户信息
        groupInfoService.addOrRemoveGroupUser(tokenUserInfoDto, groupId, selectContacts, opType); // 调用服务方法添加或移除成员
        return getSuccessResponseVO(null); // 返回成功响应
    }
}
