package com.easychat.controller;

// 引入所需的类和注解
import com.easychat.annotation.GlobalInterceptor; // 自定义注解，用于全局拦截
import com.easychat.entity.constants.Constants; // 常量类，存放一些常用的常量
import com.easychat.entity.dto.TokenUserInfoDto; // 用户信息DTO，用于封装Token中的用户信息
import com.easychat.entity.po.UserInfo; // 用户信息实体类
import com.easychat.entity.vo.ResponseVO; // 通用响应对象封装类
import com.easychat.entity.vo.UserInfoVO; // 用户信息视图对象
import com.easychat.service.UserInfoService; // 用户信息服务类，处理用户相关业务
import com.easychat.utils.CopyTools; // 工具类，用于复制对象
import com.easychat.utils.StringTools; // 字符串工具类，用于密码加密等
import com.easychat.websocket.ChannelContextUtils; // WebSocket工具类，用于关闭连接等操作
import org.springframework.web.bind.annotation.RequestMapping; // 用于映射请求路径
import org.springframework.web.bind.annotation.RestController; // 声明为REST控制器
import org.springframework.web.multipart.MultipartFile; // 处理文件上传

import javax.annotation.Resource; // 用于依赖注入
import javax.servlet.http.HttpServletRequest; // HttpServletRequest，用于获取请求中的信息
import javax.validation.constraints.NotEmpty; // 校验注解，确保参数非空
import javax.validation.constraints.Pattern; // 校验注解，确保参数符合正则表达式
import java.io.IOException;

/**
 * 用户信息控制器类
 * 提供用户信息相关的操作接口，包括获取用户信息、更新用户信息、修改密码、登出等操作。
 */
@RestController("userInfoController") // 声明为RESTful控制器，名称为 userInfoController
@RequestMapping("/userInfo") // 定义基础路径为 /userInfo
public class UserInfoController extends ABaseController {

    @Resource
    private UserInfoService userInfoService; // 注入用户信息服务类

    @Resource
    private ChannelContextUtils channelContextUtils; // 注入 WebSocket 工具类，用于处理用户的连接上下文

    /**
     * 获取当前用户信息
     * @param request HttpServletRequest对象，用于获取当前请求的用户信息
     * @return 响应对象，包含用户信息
     */
    @RequestMapping("/getUserInfo") // 映射请求路径为 /userInfo/getUserInfo
    @GlobalInterceptor // 启用全局拦截器，进行权限校验等
    public ResponseVO getUserInfo(HttpServletRequest request) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request); // 获取请求中的用户信息
        UserInfo userInfo = userInfoService.getUserInfoByUserId(tokenUserInfoDto.getUserId()); // 获取用户信息
        UserInfoVO userInfoVO = CopyTools.copy(userInfo, UserInfoVO.class); // 将用户信息复制到视图对象
        userInfoVO.setAdmin(tokenUserInfoDto.getAdmin()); // 设置当前用户是否是管理员
        return getSuccessResponseVO(userInfoVO); // 返回用户信息视图对象
    }

    /**
     * 更新用户信息（包括昵称、头像等）
     * @param request HttpServletRequest对象，用于获取当前请求的用户信息
     * @param userInfo 用户信息对象，包含要更新的字段
     * @param avatarFile 用户头像文件
     * @param avatarCover 用户封面文件
     * @return 响应对象，包含更新后的用户信息
     * @throws IOException 文件处理异常
     */
    @RequestMapping("/saveUserInfo") // 映射请求路径为 /userInfo/saveUserInfo
    @GlobalInterceptor // 启用全局拦截器，进行权限校验等
    public ResponseVO saveUserInfo(HttpServletRequest request, UserInfo userInfo, MultipartFile avatarFile, MultipartFile avatarCover) throws IOException {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request); // 获取请求中的用户信息
        userInfo.setUserId(tokenUserInfoDto.getUserId()); // 设置要更新的用户ID
        userInfo.setPassword(null); // 不更新密码字段
        userInfo.setStatus(null); // 不更新状态字段
        userInfo.setCreateTime(null); // 不更新创建时间字段
        userInfo.setLastLoginTime(null); // 不更新最后登录时间字段
        this.userInfoService.updateUserInfo(userInfo, avatarFile, avatarCover); // 调用服务类更新用户信息
        // 如果昵称发生变化，更新Token中的昵称信息
        if (!tokenUserInfoDto.getNickName().equals(userInfo.getNickName())) {
            tokenUserInfoDto.setNickName(userInfo.getNickName()); // 更新Token中的昵称
            resetTokenUserInfo(request, tokenUserInfoDto); // 重置Token中的用户信息
        }
        return getUserInfo(request); // 返回更新后的用户信息
    }

    /**
     * 更新用户密码
     * @param request HttpServletRequest对象，用于获取当前请求的用户信息
     * @param password 用户新密码，必须符合密码正则
     * @return 响应对象，表示密码更新成功
     */
    @RequestMapping("/updatePassword") // 映射请求路径为 /userInfo/updatePassword
    @GlobalInterceptor // 启用全局拦截器，进行权限校验等
    public ResponseVO updatePassword(HttpServletRequest request, @NotEmpty @Pattern(regexp = Constants.REGEX_PASSWORD) String password) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request); // 获取请求中的用户信息
        UserInfo userInfo = new UserInfo();
        userInfo.setPassword(StringTools.encodeByMD5(password)); // 使用MD5加密密码
        this.userInfoService.updateUserInfoByUserId(userInfo, tokenUserInfoDto.getUserId()); // 更新用户密码
        channelContextUtils.closeContext(tokenUserInfoDto.getUserId()); // 密码更新后，关闭当前用户的WebSocket连接，要求重新登录
        return getSuccessResponseVO(null); // 返回成功响应
    }

    /**
     * 用户登出
     * @param request HttpServletRequest对象，用于获取当前请求的用户信息
     * @return 响应对象，表示登出成功
     */
    @RequestMapping("/logout") // 映射请求路径为 /userInfo/logout
    @GlobalInterceptor // 启用全局拦截器，进行权限校验等
    public ResponseVO logout(HttpServletRequest request) {
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request); // 获取请求中的用户信息
        // 关闭WebSocket连接
        channelContextUtils.closeContext(tokenUserInfoDto.getUserId()); // 注销用户的WebSocket连接
        return getSuccessResponseVO(null); // 返回成功响应
    }
}
