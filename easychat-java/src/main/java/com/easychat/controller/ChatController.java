package com.easychat.controller;

import com.easychat.annotation.GlobalInterceptor;
import com.easychat.entity.config.AppConfig;
import com.easychat.entity.constants.Constants;
import com.easychat.entity.dto.MessageSendDto;
import com.easychat.entity.dto.TokenUserInfoDto;
import com.easychat.entity.enums.MessageTypeEnum;
import com.easychat.entity.enums.ResponseCodeEnum;
import com.easychat.entity.po.ChatMessage;
import com.easychat.entity.vo.ResponseVO;
import com.easychat.exception.BusinessException;
import com.easychat.service.ChatMessageService;
import com.easychat.service.ChatSessionUserService;
import com.easychat.utils.StringTools;
import org.apache.commons.lang3.ArrayUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

/**
 * 聊天 Controller
 * 提供聊天相关的接口，包括发送消息、上传文件、下载文件等功能。
 */
@RestController // 标注该类为 Spring 的 Controller 组件
@RequestMapping("/chat") // 设置请求路径的根路径为 "/chat"
public class ChatController extends ABaseController {

    private static final Logger logger = LoggerFactory.getLogger(ChatController.class); // 用于记录日志

    @Resource
    private ChatMessageService chatMessageService; // 注入 ChatMessageService，用于处理聊天消息相关业务

    @Resource
    private ChatSessionUserService chatSessionUserService; // 注入 ChatSessionUserService，用于处理用户会话相关业务

    @Resource
    private AppConfig appConfig; // 注入 AppConfig，用于获取应用配置

    /**
     * 发送消息接口
     * 用于发送聊天消息，可以是文本消息或媒体文件消息。
     *
     * @param request 请求对象，包含用户的 Token 信息
     * @param contactId 联系人 ID
     * @param messageContent 消息内容
     * @param messageType 消息类型（文本、媒体）
     * @param fileSize 文件大小（如果是媒体消息）
     * @param fileName 文件名（如果是媒体消息）
     * @param fileType 文件类型（如果是媒体消息）
     * @return 返回发送成功的响应
     */
    @RequestMapping("/sendMessage")
    @GlobalInterceptor // 表示该接口需要经过全局拦截器，进行权限校验等操作
    public ResponseVO sendMessage(HttpServletRequest request,
                                  @NotEmpty String contactId, // 联系人 ID，不能为空
                                  @NotEmpty @Max(500) String messageContent, // 消息内容，最大长度 500
                                  @NotNull Integer messageType, // 消息类型，不能为空
                                  Long fileSize, // 文件大小（如果是媒体消息）
                                  String fileName, // 文件名（如果是媒体消息）
                                  Integer fileType) { // 文件类型（如果是媒体消息）

        // 校验消息类型是否有效
        MessageTypeEnum messageTypeEnum = MessageTypeEnum.getByType(messageType);
        if (null == messageTypeEnum || !ArrayUtils.contains(new Integer[]{MessageTypeEnum.CHAT.getType(), MessageTypeEnum.MEDIA_CHAT.getType()}, messageType)) {
            throw new BusinessException(ResponseCodeEnum.CODE_600); // 无效的消息类型
        }

        // 获取当前用户信息
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfo(request);

        // 创建聊天消息对象
        ChatMessage chatMessage = new ChatMessage();
        chatMessage.setContactId(contactId); // 设置联系人 ID
        chatMessage.setMessageContent(messageContent); // 设置消息内容
        chatMessage.setFileSize(fileSize); // 设置文件大小
        chatMessage.setFileName(fileName); // 设置文件名
        chatMessage.setFileType(fileType); // 设置文件类型
        chatMessage.setMessageType(messageType); // 设置消息类型

        // 调用服务层保存消息
        MessageSendDto messageSendDto = chatMessageService.saveMessage(chatMessage, tokenUserInfoDto);

        // 返回成功响应
        return getSuccessResponseVO(messageSendDto);
    }

    /**
     * 上传文件接口
     * 用于上传聊天消息中的文件，包括消息文件和封面图。
     *
     * @param request 请求对象，包含用户的 Token 信息
     * @param messageId 消息 ID
     * @param file 文件对象（媒体文件）
     * @param cover 封面文件（如果有）
     * @return 返回上传成功的响应
     */
    @RequestMapping("uploadFile")
    @GlobalInterceptor // 表示该接口需要经过全局拦截器，进行权限校验等操作
    public ResponseVO uploadFile(HttpServletRequest request,
                                 @NotNull Long messageId, // 消息 ID，不能为空
                                 @NotNull MultipartFile file, // 文件，不能为空
                                 @NotNull MultipartFile cover) { // 封面文件，不能为空

        // 获取当前用户信息
        TokenUserInfoDto userInfoDto = getTokenUserInfo(request);

        // 调用服务层保存消息文件
        chatMessageService.saveMessageFile(userInfoDto.getUserId(), messageId, file, cover);

        // 返回成功响应
        return getSuccessResponseVO(null);
    }

    /**
     * 下载文件接口
     * 用于下载聊天消息中的文件，可以选择下载原文件或封面图。
     *
     * @param request 请求对象，包含用户的 Token 信息
     * @param response 响应对象，用于设置文件下载的 HTTP 响应头
     * @param fileId 文件 ID，用于指定要下载的文件
     * @param showCover 是否显示封面图
     * @throws Exception 如果发生异常，抛出错误
     */
    @RequestMapping("downloadFile")
    @GlobalInterceptor // 表示该接口需要经过全局拦截器，进行权限校验等操作
    public void downloadFile(HttpServletRequest request, HttpServletResponse response,
                             @NotEmpty String fileId, // 文件 ID，不能为空
                             @NotNull Boolean showCover) throws Exception { // 是否显示封面图，不能为空

        // 获取当前用户信息
        TokenUserInfoDto userInfoDto = getTokenUserInfo(request);
        OutputStream out = null;
        FileInputStream in = null;

        try {
            File file = null;

            // 判断文件 ID 是否是数字，如果是数字，说明是正常的文件 ID
            if (!StringTools.isNumber(fileId)) {
                // 文件 ID 是字符串，可能是头像文件，需要处理为头像文件路径
                String avatarFolderName = Constants.FILE_FOLDER_FILE + Constants.FILE_FOLDER_AVATAR_NAME;
                String avatarPath = appConfig.getProjectFolder() + avatarFolderName + fileId + Constants.IMAGE_SUFFIX;
                if (showCover) {
                    avatarPath = avatarPath + Constants.COVER_IMAGE_SUFFIX; // 如果需要封面图，修改文件路径
                }
                file = new File(avatarPath);
                if (!file.exists()) {
                    throw new BusinessException(ResponseCodeEnum.CODE_602); // 文件不存在，抛出异常
                }
            } else {
                // 如果是数字文件 ID，调用服务层下载文件
                file = chatMessageService.downloadFile(userInfoDto, Long.parseLong(fileId), showCover);
            }

            // 设置响应头，告诉客户端这是一个文件下载
            response.setContentType("application/x-msdownload; charset=UTF-8");
            response.setHeader("Content-Disposition", "attachment;");
            response.setContentLengthLong(file.length()); // 设置文件长度

            // 读取文件并写入响应输出流
            in = new FileInputStream(file);
            byte[] byteData = new byte[1024];
            out = response.getOutputStream();
            int len = 0;
            while ((len = in.read(byteData)) != -1) {
                out.write(byteData, 0, len);
            }

            out.flush(); // 刷新输出流
        } finally {
            // 关闭流，避免资源泄漏
            if (out != null) {
                try {
                    out.close();
                } catch (IOException e) {
                    logger.error("IO异常", e);
                }
            }
            if (in != null) {
                try {
                    in.close();
                } catch (IOException e) {
                    logger.error("IO异常", e);
                }
            }
        }
    }
}

