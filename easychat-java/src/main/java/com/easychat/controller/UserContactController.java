package com.easychat.controller;

import com.easychat.annotation.GlobalInterceptor;  // 引入全局拦截器，确保请求的用户已登录
import com.easychat.entity.dto.TokenUserInfoDto;  // 用户登录信息的数据传输对象
import com.easychat.entity.dto.UserContactSearchResultDto;  // 联系人搜索结果DTO
import com.easychat.entity.enums.PageSize;  // 分页大小枚举
import com.easychat.entity.enums.ResponseCodeEnum;  // 响应代码枚举
import com.easychat.entity.enums.UserContactStatusEnum;  // 联系人状态枚举
import com.easychat.entity.enums.UserContactTypeEnum;  // 联系人类型枚举
import com.easychat.entity.po.UserContact;  // 用户联系人实体
import com.easychat.entity.po.UserInfo;  // 用户信息实体
import com.easychat.entity.query.UserContactApplyQuery;  // 联系人申请查询条件
import com.easychat.entity.query.UserContactQuery;  // 联系人查询条件
import com.easychat.entity.vo.PaginationResultVO;  // 分页结果VO
import com.easychat.entity.vo.ResponseVO;  // 响应VO
import com.easychat.entity.vo.UserInfoVO;  // 用户信息VO
import com.easychat.exception.BusinessException;  // 自定义业务异常
import com.easychat.redis.RedisUtils;  // Redis工具类
import com.easychat.service.GroupInfoService;  // 群组信息服务
import com.easychat.service.UserContactApplyService;  // 用户联系人申请服务
import com.easychat.service.UserContactService;  // 用户联系人服务
import com.easychat.service.UserInfoService;  // 用户信息服务
import com.easychat.utils.CopyTools;  // 拷贝工具类，用于转换实体类到VO类
import jodd.util.ArraysUtil;  // 用于数组操作的工具类
import org.slf4j.Logger;  // 日志记录器
import org.slf4j.LoggerFactory;  // 日志记录工厂
import org.springframework.web.bind.annotation.RequestMapping;  // 请求映射注解
import org.springframework.web.bind.annotation.RestController;  // RESTful控制器注解

import javax.annotation.Resource;  // 用于注入资源
import javax.servlet.http.HttpServletRequest;  // 请求对象
import javax.validation.constraints.NotEmpty;  // 非空验证注解
import javax.validation.constraints.NotNull;  // 非空验证注解
import java.util.List;  // List集合类

// 联系人控制器类，处理用户联系人相关操作
@RestController
@RequestMapping("/contact")  // 设置请求路径的根路径为/contact
public class UserContactController extends ABaseController {

    private static final Logger logger = LoggerFactory.getLogger(UserContactController.class);  // 设置日志记录器

    // 注入相关的服务类
    @Resource
    private UserInfoService userInfoService;

    @Resource
    private GroupInfoService groupInfoService;

    @Resource
    private RedisUtils redisUtils;

    @Resource
    private UserContactService userContactService;

    @Resource
    private UserContactApplyService userContactApplyService;

    /**
     * 搜索联系人
     * @param request HttpServletRequest 请求对象
     * @param contactId 要搜索的联系人ID
     * @return 包含联系人搜索结果的响应VO
     */
    @RequestMapping("/search")
    @GlobalInterceptor  // 全局拦截器，确保用户已登录
    public ResponseVO search(HttpServletRequest request, @NotEmpty String contactId) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request);  // 获取登录用户的信息
        // 调用服务层进行联系人搜索
        UserContactSearchResultDto resultDto = userContactService.searchContact(tokenUserInfoDto.getUserId(), contactId);
        // 返回联系人搜索结果
        return getSuccessResponseVO(resultDto);
    }

    /**
     * 申请添加联系人（发起好友请求或群组请求）
     * @param request HttpServletRequest 请求对象
     * @param contactId 要申请的联系人ID
     * @param contactType 联系人类型（用户或群组）
     * @param applyInfo 申请附加信息（可选）
     * @return 返回申请的类型（例如，是否为群组或好友申请）
     */
    @RequestMapping("/applyAdd")
    @GlobalInterceptor  // 全局拦截器，确保用户已登录
    public ResponseVO applyAdd(HttpServletRequest request, @NotEmpty String contactId,
                               @NotEmpty String contactType, String applyInfo) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request);  // 获取登录用户的信息
        // 调用服务层发起添加联系人申请
        Integer joinType = userContactApplyService.applyAdd(tokenUserInfoDto, contactId, contactType, applyInfo);
        // 返回申请的类型（例如是否为群组或好友申请）
        return getSuccessResponseVO(joinType);
    }

    /**
     * 加载待处理的联系人申请（如好友请求）
     * @param request HttpServletRequest 请求对象
     * @param pageNo 页码（用于分页）
     * @return 包含待处理联系人申请的分页响应VO
     */
    @RequestMapping("/loadApply")
    @GlobalInterceptor  // 全局拦截器，确保用户已登录
    public ResponseVO loadApply(HttpServletRequest request, Integer pageNo) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request);  // 获取登录用户的信息
        UserContactApplyQuery userContactApplyQuery = new UserContactApplyQuery();
        // 设置查询条件，按申请时间倒序排列
        userContactApplyQuery.setOrderBy("last_apply_time desc");
        userContactApplyQuery.setReceiveUserId(tokenUserInfoDto.getUserId());
        userContactApplyQuery.setQueryContactInfo(true);  // 查询联系人信息
        userContactApplyQuery.setPageNo(pageNo);  // 设置页码
        userContactApplyQuery.setPageSize(PageSize.SIZE15.getSize());  // 设置每页显示条数
        // 获取分页结果
        PaginationResultVO resultVO = userContactApplyService.findListByPage(userContactApplyQuery);
        // 返回分页结果
        return getSuccessResponseVO(resultVO);
    }

    /**
     * 处理联系人申请（接受或拒绝）
     * @param request HttpServletRequest 请求对象
     * @param applyId 申请ID
     * @param status 申请状态（如接受或拒绝）
     * @return 返回处理结果
     */
    @RequestMapping("/dealWithApply")
    @GlobalInterceptor  // 全局拦截器，确保用户已登录
    public ResponseVO dealWithApply(HttpServletRequest request, @NotNull Integer applyId, @NotNull Integer status) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request);  // 获取登录用户的信息
        // 调用服务层处理申请
        userContactApplyService.dealWithApply(tokenUserInfoDto.getUserId(), applyId, status);
        // 返回成功响应
        return getSuccessResponseVO(null);
    }

    /**
     * 加载用户联系人列表
     * @param request HttpServletRequest 请求对象
     * @param contactType 联系人类型（用户或群组）
     * @return 包含联系人列表的响应VO
     */
    @RequestMapping("/loadContact")
    @GlobalInterceptor  // 全局拦截器，确保用户已登录
    public ResponseVO loadContact(HttpServletRequest request, @NotEmpty String contactType) {
        // 根据contactType获取联系人类型枚举
        UserContactTypeEnum contactTypeEnum = UserContactTypeEnum.getByName(contactType);
        if (null == contactTypeEnum) {
            throw new BusinessException(ResponseCodeEnum.CODE_600);  // 如果类型无效，抛出业务异常
        }
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request);  // 获取登录用户的信息
        UserContactQuery contactQuery = new UserContactQuery();
        contactQuery.setUserId(tokenUserInfoDto.getUserId());  // 设置查询用户ID
        contactQuery.setContactType(contactTypeEnum.getType());  // 设置联系人类型（用户或群组）
        if (UserContactTypeEnum.USER == contactTypeEnum) {
            contactQuery.setQueryContactUserInfo(true);  // 查询用户信息
        } else if (UserContactTypeEnum.GROUP == contactTypeEnum) {
            contactQuery.setQueryGroupInfo(true);  // 查询群组信息
            contactQuery.setExcludeMyGroup(true);  // 排除自己的群组
        }
        // 设置联系人状态过滤条件
        contactQuery.setStatusArray(new Integer[]{
                UserContactStatusEnum.FRIEND.getStatus(),
                UserContactStatusEnum.DEL_BE.getStatus(),
                UserContactStatusEnum.BLACKLIST_BE.getStatus()});
        contactQuery.setOrderBy("last_update_time desc");  // 按更新时间排序
        // 查询联系人列表
        List<UserContact> contactList = userContactService.findListByParam(contactQuery);
        // 返回联系人列表
        return getSuccessResponseVO(contactList);
    }

    /**
     * 获取联系人的详细信息（包括是否为好友）
     * @param request HttpServletRequest 请求对象
     * @param contactId 联系人ID
     * @return 联系人信息
     */
    @RequestMapping("/getContactInfo")
    @GlobalInterceptor  // 全局拦截器，确保用户已登录
    public ResponseVO getContactInfo(HttpServletRequest request, @NotEmpty String contactId) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request);  // 获取登录用户的信息
        UserInfo userInfo = userInfoService.getUserInfoByUserId(contactId);  // 获取用户信息
        UserInfoVO userInfoVO = CopyTools.copy(userInfo, UserInfoVO.class);  // 将实体转换为VO对象
        userInfoVO.setContactStatus(UserContactStatusEnum.NOT_FRIEND.getStatus());  // 默认为非好友状态
        // 检查是否为联系人
        UserContact userContact = userContactService.getUserContactByUserIdAndContactId(tokenUserInfoDto.getUserId(), contactId);
        if (userContact != null) {
            userInfoVO.setContactStatus(userContact.getStatus());  // 设置联系人状态
        }
        // 返回联系人信息
        return getSuccessResponseVO(userInfoVO);
    }

    /**
     * 获取联系人信息（确保联系人在联系人列表中）
     * @param request HttpServletRequest 请求对象
     * @param contactId 联系人ID
     * @return 联系人详细信息
     */
    @RequestMapping("/getContactUserInfo")
    @GlobalInterceptor  // 全局拦截器，确保用户已登录
    public ResponseVO getContactUserInfo(HttpServletRequest request, @NotEmpty String contactId) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request);  // 获取登录用户的信息
        UserContact userContact = this.userContactService.getUserContactByUserIdAndContactId(tokenUserInfoDto.getUserId(), contactId);
        if (null == userContact || !ArraysUtil.contains(new Integer[]{
                UserContactStatusEnum.FRIEND.getStatus(),
                UserContactStatusEnum.DEL_BE.getStatus(),
                UserContactStatusEnum.BLACKLIST_BE.getStatus(),
                UserContactStatusEnum.BLACKLIST_BE_FIRST.getStatus()}, userContact.getStatus())) {
            throw new BusinessException(ResponseCodeEnum.CODE_600);  // 如果联系人状态无效，抛出异常
        }
        UserInfo userInfo = userInfoService.getUserInfoByUserId(contactId);  // 获取联系人信息
        UserInfoVO userInfoVO = CopyTools.copy(userInfo, UserInfoVO.class);  // 转换为VO对象
        return getSuccessResponseVO(userInfoVO);  // 返回联系人详细信息
    }

    /**
     * 删除联系人
     * @param request HttpServletRequest 请求对象
     * @param contactId 要删除的联系人ID
     * @return 删除结果
     */
    @RequestMapping("/delContact")
    @GlobalInterceptor  // 全局拦截器，确保用户已登录
    public ResponseVO delContact(HttpServletRequest request, @NotEmpty String contactId) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request);  // 获取登录用户的信息
        // 调用服务层删除联系人
        userContactService.removeUserContact(tokenUserInfoDto.getUserId(), contactId, UserContactStatusEnum.DEL);
        return getSuccessResponseVO(null);  // 返回成功响应
    }

    /**
     * 将联系人添加到黑名单
     * @param request HttpServletRequest 请求对象
     * @param contactId 要添加到黑名单的联系人ID
     * @return 添加黑名单结果
     */
    @RequestMapping("/addContact2BlackList")
    @GlobalInterceptor  // 全局拦截器，确保用户已登录
    public ResponseVO addContact2BlackList(HttpServletRequest request, @NotEmpty String contactId) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request);  // 获取登录用户的信息
        // 调用服务层将联系人添加到黑名单
        userContactService.removeUserContact(tokenUserInfoDto.getUserId(), contactId, UserContactStatusEnum.BLACKLIST);
        return getSuccessResponseVO(null);  // 返回成功响应
    }
}
