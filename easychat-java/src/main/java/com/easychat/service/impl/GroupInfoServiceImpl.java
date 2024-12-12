package com.easychat.service.impl;  // 定义包路径，放置在服务实现层

import com.easychat.entity.config.AppConfig;  // 导入应用配置类
import com.easychat.entity.constants.Constants;  // 导入常量类
import com.easychat.entity.dto.MessageSendDto;  // 导入消息发送的数据传输对象
import com.easychat.entity.dto.SysSettingDto;  // 导入系统设置数据传输对象
import com.easychat.entity.dto.TokenUserInfoDto;  // 导入用户信息数据传输对象
import com.easychat.entity.enums.*;  // 导入枚举类（如状态、类型等）
import com.easychat.entity.po.*;  // 导入PO类（持久化对象）
import com.easychat.entity.query.*;  // 导入查询条件类
import com.easychat.entity.vo.PaginationResultVO;  // 导入分页结果视图对象
import com.easychat.exception.BusinessException;  // 导入业务异常类
import com.easychat.mappers.*;  // 导入数据库映射器类
import com.easychat.redis.RedisComponet;  // 导入Redis组件类
import com.easychat.service.ChatSessionUserService;  // 导入聊天会话用户服务接口
import com.easychat.service.GroupInfoService;  // 导入群组信息服务接口
import com.easychat.service.UserContactService;  // 导入用户联系服务接口
import com.easychat.utils.CopyTools;  // 导入复制工具类
import com.easychat.utils.StringTools;  // 导入字符串工具类
import com.easychat.websocket.ChannelContextUtils;  // 导入WebSocket频道上下文工具类
import com.easychat.websocket.MessageHandler;  // 导入WebSocket消息处理类
import org.slf4j.Logger;  // 导入日志类
import org.slf4j.LoggerFactory;  // 导入日志工厂类
import org.springframework.context.annotation.Lazy;  // 导入懒加载注解
import org.springframework.stereotype.Service;  // 导入服务类注解
import org.springframework.transaction.annotation.Transactional;  // 导入事务管理注解
import org.springframework.web.multipart.MultipartFile;  // 导入文件上传类

import javax.annotation.Resource;  // 导入资源注入注解
import java.io.File;  // 导入文件类
import java.io.IOException;  // 导入IO异常类
import java.util.Date;  // 导入日期类
import java.util.List;  // 导入集合类

/**
 * 业务接口实现类：GroupInfoService接口的实现类
 */
@Service("groupInfoService")  // 指定该类为Spring服务组件
public class GroupInfoServiceImpl implements GroupInfoService {

    private static final Logger logger = LoggerFactory.getLogger(GroupInfoServiceImpl.class);  // 创建日志记录器

    @Resource  // 注入AppConfig实例
    private AppConfig appConfig;

    @Resource  // 注入GroupInfoMapper实例，用于数据库操作
    private GroupInfoMapper<GroupInfo, GroupInfoQuery> groupInfoMapper;

    @Resource  // 注入Redis组件实例，用于操作Redis缓存
    private RedisComponet redisComponet;

    @Resource  // 注入UserContactMapper实例，用于数据库操作
    private UserContactMapper<UserContact, UserContactQuery> userContactMapper;

    @Resource  // 注入ChatSessionUserService实例，用于管理聊天会话中的用户
    private ChatSessionUserService chatSessionUserService;

    @Resource  // 注入ChatSessionMapper实例，用于操作聊天会话的数据库
    private ChatSessionMapper<ChatSession, ChatSessionQuery> chatSessionMapper;

    @Resource  // 注入消息处理器，用于处理WebSocket消息
    private MessageHandler messageHandler;

    @Resource  // 注入ChannelContextUtils，用于WebSocket频道管理
    private ChannelContextUtils channelContextUtils;

    @Resource  // 注入ChatMessageMapper，用于操作聊天消息数据库
    private ChatMessageMapper<ChatMessage, ChatMessageQuery> chatMessageMapper;

    @Resource  // 注入UserInfoMapper实例，用于操作用户信息数据库
    private UserInfoMapper<UserInfo, UserInfoQuery> userInfoMapper;

    @Resource  // 注入UserContactService实例，处理用户联系业务
    private UserContactService userContactService;

    @Resource  // 懒加载注入GroupInfoService实例
    @Lazy
    private GroupInfoService groupInfoService;

    /**
     * 根据条件查询群组信息列表
     *
     * @param param 查询条件
     * @return 群组信息列表
     */
    @Override
    public List<GroupInfo> findListByParam(GroupInfoQuery param) {
        return this.groupInfoMapper.selectList(param);  // 调用Mapper层的方法查询数据
    }

    /**
     * 根据条件查询符合条件的群组数量
     *
     * @param param 查询条件
     * @return 群组数量
     */
    @Override
    public Integer findCountByParam(GroupInfoQuery param) {
        return this.groupInfoMapper.selectCount(param);  // 调用Mapper层的方法查询数据
    }

    /**
     * 分页查询群组信息
     *
     * @param param 查询条件
     * @return 分页结果对象，包含查询结果和分页信息
     */
    @Override
    public PaginationResultVO<GroupInfo> findListByPage(GroupInfoQuery param) {
        int count = this.findCountByParam(param);  // 获取符合条件的群组数量
        int pageSize = param.getPageSize() == null ? PageSize.SIZE15.getSize() : param.getPageSize();  // 设置分页大小，默认15条记录每页

        SimplePage page = new SimplePage(param.getPageNo(), count, pageSize);  // 创建分页对象
        param.setSimplePage(page);  // 设置查询条件中的分页信息
        List<GroupInfo> list = this.findListByParam(param);  // 查询分页数据
        PaginationResultVO<GroupInfo> result = new PaginationResultVO(count, page.getPageSize(), page.getPageNo(), page.getPageTotal(), list);  // 创建分页结果对象
        return result;  // 返回分页结果
    }

    /**
     * 新增群组信息
     *
     * @param bean 群组信息对象
     * @return 插入的记录数
     */
    @Override
    public Integer add(GroupInfo bean) {
        return this.groupInfoMapper.insert(bean);  // 调用Mapper层插入数据
    }

    /**
     * 批量新增群组信息
     *
     * @param listBean 群组信息列表
     * @return 插入的记录数
     */
    @Override
    public Integer addBatch(List<GroupInfo> listBean) {
        if (listBean == null || listBean.isEmpty()) {  // 判断输入的列表是否为空
            return 0;  // 如果为空，则返回0
        }
        return this.groupInfoMapper.insertBatch(listBean);  // 调用Mapper层批量插入数据
    }

    /**
     * 批量新增或修改群组信息
     *
     * @param listBean 群组信息列表
     * @return 插入或更新的记录数
     */
    @Override
    public Integer addOrUpdateBatch(List<GroupInfo> listBean) {
        if (listBean == null || listBean.isEmpty()) {  // 判断输入的列表是否为空
            return 0;  // 如果为空，则返回0
        }
        return this.groupInfoMapper.insertOrUpdateBatch(listBean);  // 调用Mapper层批量插入或更新数据
    }

    /**
     * 根据条件更新群组信息
     *
     * @param bean  更新的群组信息
     * @param param 查询条件
     * @return 更新的记录数
     */
    @Override
    public Integer updateByParam(GroupInfo bean, GroupInfoQuery param) {
        StringTools.checkParam(param);  // 检查查询条件的有效性
        return this.groupInfoMapper.updateByParam(bean, param);  // 调用Mapper层更新数据
    }

    /**
     * 根据条件删除群组信息
     *
     * @param param 查询条件
     * @return 删除的记录数
     */
    @Override
    public Integer deleteByParam(GroupInfoQuery param) {
        StringTools.checkParam(param);  // 检查查询条件的有效性
        return this.groupInfoMapper.deleteByParam(param);  // 调用Mapper层删除数据
    }

    /**
     * 根据GroupId获取群组信息
     *
     * @param groupId 群组ID
     * @return 群组信息对象
     */
    @Override
    public GroupInfo getGroupInfoByGroupId(String groupId) {
        return this.groupInfoMapper.selectByGroupId(groupId);  // 调用Mapper层根据GroupId查询群组信息
    }

    /**
     * 根据GroupId修改群组信息
     *
     * @param bean    更新的群组信息
     * @param groupId 群组ID
     * @return 更新的记录数
     */
    @Override
    public Integer updateGroupInfoByGroupId(GroupInfo bean, String groupId) {
        return this.groupInfoMapper.updateByGroupId(bean, groupId);  // 调用Mapper层根据GroupId更新群组信息
    }

    /**
     * 根据GroupId删除群组信息
     *
     * @param groupId 群组ID
     * @return 删除的记录数
     */
    @Override
    public Integer deleteGroupInfoByGroupId(String groupId) {
        return this.groupInfoMapper.deleteByGroupId(groupId);  // 调用Mapper层根据GroupId删除群组信息
    }

    @Override
    @Transactional(rollbackFor = Exception.class)  // 标明此方法为事务方法，遇到异常时回滚事务
    public void saveGroup(GroupInfo groupInfo, MultipartFile avatarFile, MultipartFile avatarCover) {
        Date curDate = new Date();  // 获取当前日期时间，用于群组创建时间、消息时间等字段的赋值

        // 判断群组ID是否为空，如果为空则表示是新建群组
        if (StringTools.isEmpty(groupInfo.getGroupId())) {

            // 根据群主ID查询是否已存在群组
            GroupInfoQuery groupInfoQuery = new GroupInfoQuery();
            groupInfoQuery.setGroupOwnerId(groupInfo.getGroupOwnerId());  // 设置查询条件为群主ID
            Integer count = this.groupInfoMapper.selectCount(groupInfoQuery);  // 获取群主已有的群组数量

            // 从缓存中获取系统设置，限制群主创建的群组数量
            SysSettingDto sysSettingDto = redisComponet.getSysSetting();
            if (count >= sysSettingDto.getMaxGroupCount()) {
                // 超过最大群组数量限制，抛出业务异常
                throw new BusinessException("最多只能创建" + sysSettingDto.getMaxGroupCount() + "个群聊");
            }

            // 检查头像文件是否为空，若为空则抛出异常
            if (null == avatarFile) {
                throw new BusinessException(ResponseCodeEnum.CODE_600);  // 头像文件不能为空
            }

            // 设置群组创建时间和生成群组ID
            groupInfo.setCreateTime(curDate);  // 设置群组的创建时间为当前时间
            groupInfo.setGroupId(StringTools.getGroupId());  // 使用工具类生成唯一的群组ID
            this.groupInfoMapper.insert(groupInfo);  // 插入群组数据到数据库中

            // 将群主添加为自己的群组联系人
            UserContact userContact = new UserContact();
            userContact.setStatus(UserContactStatusEnum.FRIEND.getStatus());  // 设置联系人的状态为朋友
            userContact.setContactType(UserContactTypeEnum.GROUP.getType());  // 设置联系人类型为群组
            userContact.setContactId(groupInfo.getGroupId());  // 设置群组ID为联系人ID
            userContact.setUserId(groupInfo.getGroupOwnerId());  // 设置群主ID为用户ID
            userContact.setCreateTime(curDate);  // 设置创建时间为当前时间
            userContact.setLastUpdateTime(curDate);  // 设置最后更新时间为当前时间
            this.userContactMapper.insert(userContact);  // 插入联系人数据到数据库

            // 创建群组会话ID
            String sessionId = StringTools.getChatSessionId4Group(groupInfo.getGroupId());  // 使用工具类生成群组会话ID
            ChatSession chatSession = new ChatSession();
            chatSession.setSessionId(sessionId);  // 设置会话ID
            chatSession.setLastMessage(MessageTypeEnum.GROUP_CREATE.getInitMessage());  // 设置群组创建的初始消息
            chatSession.setLastReceiveTime(curDate.getTime());  // 设置接收到消息的时间为当前时间
            this.chatSessionMapper.insert(chatSession);  // 插入会话数据到数据库

            // 创建群主的会话信息
            ChatSessionUser chatSessionUser = new ChatSessionUser();
            chatSessionUser.setUserId(groupInfo.getGroupOwnerId());  // 设置群主ID
            chatSessionUser.setContactId(groupInfo.getGroupId());  // 设置群组ID为联系人ID
            chatSessionUser.setContactName(groupInfo.getGroupName());  // 设置群组名称
            chatSessionUser.setSessionId(sessionId);  // 设置会话ID
            this.chatSessionUserService.add(chatSessionUser);  // 将群主加入会话中

            // 将群主添加到Redis缓存中的联系人列表
            redisComponet.addUserContact(groupInfo.getGroupOwnerId(), groupInfo.getGroupId());  // 将群主的群组ID存入Redis缓存

            // 将群主添加到群组的WebSocket频道
            channelContextUtils.addUser2Group(groupInfo.getGroupOwnerId(), groupInfo.getGroupId());  // 将群主加入WebSocket频道中

            // 创建群组初始化消息
            ChatMessage chatMessage = new ChatMessage();
            chatMessage.setSessionId(sessionId);  // 设置会话ID
            chatMessage.setMessageType(MessageTypeEnum.GROUP_CREATE.getType());  // 设置消息类型为群组创建消息
            chatMessage.setMessageContent(MessageTypeEnum.GROUP_CREATE.getInitMessage());  // 设置消息内容为群组创建的初始消息
            chatMessage.setSendUserId(null);  // 群组创建消息没有发送用户ID
            chatMessage.setSendUserNickName(null);  // 群组创建消息没有发送用户昵称
            chatMessage.setSendTime(curDate.getTime());  // 设置消息发送时间
            chatMessage.setContactId(groupInfo.getGroupId());  // 设置群组ID为消息的联系人ID
            chatMessage.setContactType(UserContactTypeEnum.GROUP.getType());  // 设置消息的联系人类型为群组
            chatMessage.setStatus(MessageStatusEnum.SENDED.getStatus());  // 设置消息状态为已发送
            chatMessageMapper.insert(chatMessage);  // 插入群组创建消息到数据库

            // 发送群组创建的WebSocket消息
            chatSessionUser.setLastMessage(MessageTypeEnum.GROUP_CREATE.getInitMessage());  // 设置群组创建消息为最后一条消息
            chatSessionUser.setLastReceiveTime(curDate.getTime());  // 设置消息接收时间为当前时间
            chatSessionUser.setMemberCount(1);  // 设置群组成员数量为1
            MessageSendDto messageSend = CopyTools.copy(chatMessage, MessageSendDto.class);  // 将聊天消息复制到消息发送DTO
            messageSend.setExtendData(chatSessionUser);  // 设置扩展数据为会话用户信息
            messageSend.setLastMessage(chatSessionUser.getLastMessage());  // 设置最后一条消息内容
            messageHandler.sendMessage(messageSend);  // 发送WebSocket消息到群组

        } else {
            // 如果群组ID不为空，表示是更新群组
            GroupInfo dbInfo = this.groupInfoMapper.selectByGroupId(groupInfo.getGroupId());  // 从数据库中查询群组信息
            // 检查群主ID是否一致，不一致则抛出异常
            if (!dbInfo.getGroupOwnerId().equals(groupInfo.getGroupOwnerId())) {
                throw new BusinessException(ResponseCodeEnum.CODE_600);  // 如果群主ID不一致，抛出异常
            }
            // 更新群组信息
            this.groupInfoMapper.updateByGroupId(groupInfo, groupInfo.getGroupId());  // 更新群组数据到数据库

            // 更新群组的冗余字段（如群组名称）
            String contactNameUpdate = null;
            if (!dbInfo.getGroupName().equals(groupInfo.getGroupName())) {
                contactNameUpdate = groupInfo.getGroupName();  // 如果群组名称有变化，记录新的群组名称
            }
            chatSessionUserService.updateRedundanceInfo(contactNameUpdate, groupInfo.getGroupId());  // 更新群组冗余信息
        }

        // 如果头像文件不为空，处理头像文件的保存
        if (null == avatarFile) {
            return;  // 如果没有头像文件，直接返回
        }
        // 获取头像文件保存路径
        String baseFolder = appConfig.getProjectFolder() + Constants.FILE_FOLDER_FILE;
        File targetFileFolder = new File(baseFolder + Constants.FILE_FOLDER_AVATAR_NAME);
        if (!targetFileFolder.exists()) {
            targetFileFolder.mkdirs();  // 如果文件夹不存在，则创建文件夹
        }

        // 头像文件的保存路径
        String filePath = targetFileFolder.getPath() + "/" + groupInfo.getGroupId() + Constants.IMAGE_SUFFIX;
        try {
            // 将头像文件保存到指定路径
            avatarFile.transferTo(new File(filePath));  // 将头像文件上传到指定的文件夹路径
            // 保存封面文件到指定路径
            avatarCover.transferTo(new File(filePath + Constants.COVER_IMAGE_SUFFIX));  // 将封面文件上传到指定的文件夹路径
        } catch (IOException e) {
            logger.error("头像上传失败", e);  // 记录上传失败的日志
            throw new BusinessException("头像上传失败");  // 抛出头像上传失败的异常
        }
    }


    @Override
    @Transactional(rollbackFor = Exception.class)  // 标注为事务方法，遇到异常时会回滚事务
    public void dissolutionGroup(String userId, String groupId) {
        GroupInfo dbInfo = this.groupInfoMapper.selectByGroupId(groupId);  // 根据群组ID查询群组信息
        if (null == groupId || !dbInfo.getGroupOwnerId().equals(userId)) {  // 检查群组ID是否存在，且是否为群主操作
            throw new BusinessException(ResponseCodeEnum.CODE_600);  // 如果不是群主操作，则抛出异常
        }

        // 1. 删除群组：更新群组状态为“已解散”
        GroupInfo updateInfo = new GroupInfo();
        updateInfo.setStatus(GroupStatusEnum.DISSOLUTION.getStatus());  // 设置群组状态为解散
        this.groupInfoMapper.updateByGroupId(updateInfo, groupId);  // 更新群组状态

        // 2. 删除用户与群组的联系人关系：删除群成员与群组的联系
        UserContactQuery userContactQuery = new UserContactQuery();
        userContactQuery.setContactId(groupId);  // 设置查询条件，查询与该群组相关的联系人
        userContactQuery.setContactType(UserContactTypeEnum.GROUP.getType());  // 设置联系人类型为群组

        // 3. 将群组成员的联系状态改为删除
        UserContact updateUserContact = new UserContact();
        updateUserContact.setStatus(UserContactStatusEnum.DEL.getStatus());  // 设置联系人状态为“删除”
        userContactMapper.updateByParam(updateUserContact, userContactQuery);  // 执行更新操作

        // 4. 从数据库中获取所有与群组相关的联系人
        List<UserContact> userContactList = this.userContactMapper.selectList(userContactQuery);
        for (UserContact userContact : userContactList) {
            redisComponet.removeUserContact(userContact.getUserId(), userContact.getContactId());  // 从Redis缓存中删除用户的群组联系
        }

        // 5. 更新群组会话信息：群组解散后更新会话的最后一条消息
        String sessionId = StringTools.getChatSessionId4Group(groupId);  // 获取群组的会话ID
        Date curTime = new Date();  // 获取当前时间
        String messageContent = MessageTypeEnum.DISSOLUTION_GROUP.getInitMessage();  // 获取群组解散的初始化消息

        // 更新会话中的最后一条消息和接收时间
        ChatSession chatSession = new ChatSession();
        chatSession.setLastMessage(messageContent);  // 设置群组解散的消息
        chatSession.setLastReceiveTime(curTime.getTime());  // 设置消息接收时间
        chatSessionMapper.updateBySessionId(chatSession, sessionId);  // 更新会话信息

        // 6. 记录群组解散消息到消息表
        ChatMessage chatMessage = new ChatMessage();
        chatMessage.setSessionId(sessionId);  // 设置会话ID
        chatMessage.setSendTime(curTime.getTime());  // 设置消息发送时间
        chatMessage.setContactType(UserContactTypeEnum.GROUP.getType());  // 设置消息类型为群组
        chatMessage.setStatus(MessageStatusEnum.SENDED.getStatus());  // 设置消息状态为已发送
        chatMessage.setMessageType(MessageTypeEnum.DISSOLUTION_GROUP.getType());  // 设置消息类型为群组解散
        chatMessage.setContactId(groupId);  // 设置群组ID
        chatMessage.setMessageContent(messageContent);  // 设置群组解散的消息内容
        chatMessageMapper.insert(chatMessage);  // 将消息插入到数据库中

        // 7. 发送群组解散消息
        MessageSendDto messageSendDto = CopyTools.copy(chatMessage, MessageSendDto.class);  // 将聊天消息复制到消息发送DTO
        messageHandler.sendMessage(messageSendDto);  // 发送WebSocket消息
    }


    @Override
    @Transactional(rollbackFor = Exception.class)  // 事务方法，发生异常时回滚
    public void leaveGroup(String userId, String groupId, MessageTypeEnum messageTypeEnum) {
        GroupInfo groupInfo = groupInfoMapper.selectByGroupId(groupId);  // 根据群组ID查询群组信息
        if (groupInfo == null) {  // 如果群组不存在，抛出异常
            throw new BusinessException(ResponseCodeEnum.CODE_600);
        }

        // 检查是否是群主退出群组，群主不能退出，只能解散群组
        if (userId.equals(groupInfo.getGroupOwnerId())) {
            throw new BusinessException(ResponseCodeEnum.CODE_600);  // 群主不能退出群组
        }

        // 1. 删除用户与群组的联系人关系：从联系人表中删除用户和群组的关系
        Integer count = userContactMapper.deleteByUserIdAndContactId(userId, groupId);
        if (count == 0) {  // 如果没有找到该关系，抛出异常
            throw new BusinessException(ResponseCodeEnum.CODE_600);
        }

        // 2. 获取用户信息：用于生成消息内容
        UserInfo userInfo = userInfoMapper.selectByUserId(userId);

        // 3. 更新群组会话信息：退出群组时更新会话中的消息
        String sessionId = StringTools.getChatSessionId4Group(groupId);  // 获取群组的会话ID
        Date curTime = new Date();  // 获取当前时间
        String messageContent = String.format(messageTypeEnum.getInitMessage(), userInfo.getNickName());  // 生成退出群组的消息内容

        // 更新群组会话的最后一条消息和接收时间
        ChatSession chatSession = new ChatSession();
        chatSession.setLastMessage(messageContent);  // 设置退出群组的消息
        chatSession.setLastReceiveTime(curTime.getTime());  // 设置消息接收时间
        chatSessionMapper.updateBySessionId(chatSession, sessionId);  // 更新会话信息

        // 4. 记录退出群组的消息到消息表
        ChatMessage chatMessage = new ChatMessage();
        chatMessage.setSessionId(sessionId);  // 设置会话ID
        chatMessage.setSendTime(curTime.getTime());  // 设置发送时间
        chatMessage.setContactType(UserContactTypeEnum.GROUP.getType());  // 设置消息类型为群组
        chatMessage.setStatus(MessageStatusEnum.SENDED.getStatus());  // 设置消息状态为已发送
        chatMessage.setMessageType(messageTypeEnum.getType());  // 设置消息类型
        chatMessage.setContactId(groupId);  // 设置群组ID
        chatMessage.setMessageContent(messageContent);  // 设置消息内容
        chatMessageMapper.insert(chatMessage);  // 插入消息到数据库

        // 5. 获取群组成员数量
        UserContactQuery userContactQuery = new UserContactQuery();
        userContactQuery.setContactId(groupId);  // 设置查询条件，查询与群组相关的联系人
        userContactQuery.setStatus(UserContactStatusEnum.FRIEND.getStatus());  // 只查询状态为朋友的联系人
        Integer memberCount = this.userContactMapper.selectCount(userContactQuery);  // 获取群组成员数量

        // 6. 发送退出群组消息
        MessageSendDto messageSendDto = CopyTools.copy(chatMessage, MessageSendDto.class);  // 将聊天消息复制到消息发送DTO
        messageSendDto.setExtendData(userId);  // 设置扩展数据，包含用户ID
        messageSendDto.setMemberCount(memberCount);  // 设置群组成员数量
        messageHandler.sendMessage(messageSendDto);  // 发送WebSocket消息
    }

    @Override
    @Transactional(rollbackFor = Exception.class)  // 事务方法，异常时回滚
    public void addOrRemoveGroupUser(TokenUserInfoDto tokenUserInfoDto, String groupId, String contactIds, Integer opType) {
        GroupInfo groupInfo = groupInfoMapper.selectByGroupId(groupId);  // 根据群组ID查询群组信息
        if (null == groupInfo || !groupInfo.getGroupOwnerId().equals(tokenUserInfoDto.getUserId())) {
            throw new BusinessException(ResponseCodeEnum.CODE_600);  // 检查是否为群主操作，群主ID不匹配时抛出异常
        }

        String[] contactIdList = contactIds.split(",");  // 分割联系人ID列表

        for (String contactId : contactIdList) {
            // 移除群成员操作
            if (Constants.ZERO.equals(opType)) {
                groupInfoService.leaveGroup(contactId, groupId, MessageTypeEnum.REMOVE_GROUP);  // 调用 leaveGroup 方法将用户移除群组
            } else {
                userContactService.addContact(contactId, null, groupId, UserContactTypeEnum.GROUP.getType(), null);  // 添加用户到群组
            }
        }
    }
}