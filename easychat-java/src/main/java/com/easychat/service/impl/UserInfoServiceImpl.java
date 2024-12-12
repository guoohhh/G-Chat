package com.easychat.service.impl;

// 引入应用配置类，用于加载和访问应用程序配置（例如文件路径、系统设置等）
import com.easychat.entity.config.AppConfig;

// 引入常量类，包含项目中的常量定义
import com.easychat.entity.constants.Constants;

// 引入DTO类，用于发送消息时的数据传输对象
import com.easychat.entity.dto.MessageSendDto;
import com.easychat.entity.dto.TokenUserInfoDto;

// 引入枚举类，定义用户状态、消息类型等业务常用的枚举值
import com.easychat.entity.enums.*;

// 引入PO类，实体类，表示与数据库表结构相对应的对象模型
import com.easychat.entity.po.GroupInfo;
import com.easychat.entity.po.UserContact;
import com.easychat.entity.po.UserInfo;
import com.easychat.entity.po.UserInfoBeauty;

// 引入查询条件类，用于封装查询时的条件
import com.easychat.entity.query.*;

// 引入VO类，用于返回分页结果和用户信息等展示数据
import com.easychat.entity.vo.PaginationResultVO;
import com.easychat.entity.vo.UserInfoVO;

// 引入自定义异常类，用于业务逻辑中的异常处理
import com.easychat.exception.BusinessException;

// 引入MyBatis的Mapper接口，用于与数据库交互
import com.easychat.mappers.GroupInfoMapper;
import com.easychat.mappers.UserContactMapper;
import com.easychat.mappers.UserInfoBeautyMapper;
import com.easychat.mappers.UserInfoMapper;

// 引入Redis组件类，用于与Redis数据库交互，缓存数据
import com.easychat.redis.RedisComponet;

// 引入业务服务类，处理聊天会话、用户联系人等相关业务
import com.easychat.service.ChatSessionUserService;
import com.easychat.service.UserContactService;
import com.easychat.service.UserInfoService;

// 引入工具类，提供常用的工具方法（如对象复制、字符串处理等）
import com.easychat.utils.CopyTools;
import com.easychat.utils.StringTools;

// 引入WebSocket消息处理类，用于发送实时消息
import com.easychat.websocket.MessageHandler;

// 引入Apache的工具类，用于处理数组
import org.apache.commons.lang3.ArrayUtils;

// 引入Spring框架中的注解，标识这是一个服务类
import org.springframework.stereotype.Service;

// 引入Spring框架中的事务管理注解，确保方法的原子性
import org.springframework.transaction.annotation.Transactional;

// 引入Spring的MultipartFile类，用于处理文件上传
import org.springframework.web.multipart.MultipartFile;

// 引入Java的注解，进行依赖注入
import javax.annotation.Resource;

// 引入Java的I/O类，用于文件操作
import java.io.File;
import java.io.IOException;

// 引入Java的日期类，用于时间处理
import java.util.Date;

// 引入Java的集合类，用于处理集合类型的数据
import java.util.List;

// 引入Java 8的流式API，用于简化集合操作
import java.util.stream.Collectors;

/**
 * 用户信息相关业务逻辑的实现
 * 提供用户信息的增删改查，登录、注册、更新操作等
 */
@Service("userInfoService")  // 标识这是一个Spring管理的Service类，名称为 userInfoService
public class UserInfoServiceImpl implements UserInfoService {

    // 使用@Resource注解，自动注入依赖的服务组件
    @Resource  // 注入 UserInfoMapper，用于执行数据库操作
    private UserInfoMapper<UserInfo, UserInfoQuery> userInfoMapper;

    @Resource  // 注入应用配置类，用于获取配置信息
    private AppConfig appConfig;

    @Resource  // 注入 GroupInfoMapper，用于处理群组信息
    private GroupInfoMapper<GroupInfo, GroupInfoQuery> groupInfoMapper;

    @Resource  // 注入 UserContactMapper，用于操作用户联系人
    private UserContactMapper<UserContact, UserContactQuery> userContactMapper;

    @Resource  // 注入 Redis 组件，操作 Redis 中的数据
    private RedisComponet redisComponet;

    @Resource  // 注入聊天会话用户服务，用于处理与聊天会话相关的业务
    private ChatSessionUserService chatSessionUserService;

    @Resource  // 注入消息处理类，用于发送消息
    private MessageHandler messageHandler;

    @Resource  // 注入用户联系人服务，用于操作用户的联系人
    private UserContactService userContactService;

    @Resource  // 注入用户信息靓号映射类，用于处理用户靓号
    private UserInfoBeautyMapper<UserInfoBeauty, UserInfoBeautyQuery> userInfoBeautyMapper;

    /**
     * 根据查询参数获取用户信息列表
     */
    @Override
    public List<UserInfo> findListByParam(UserInfoQuery param) {
        return this.userInfoMapper.selectList(param);  // 通过 UserInfoMapper 获取符合条件的用户信息列表
    }

    /**
     * 根据查询条件获取符合条件的用户信息数量
     */
    @Override
    public Integer findCountByParam(UserInfoQuery param) {
        return this.userInfoMapper.selectCount(param);  // 通过 UserInfoMapper 获取符合条件的记录数
    }

    /**
     * 分页查询用户信息
     */
    @Override
    public PaginationResultVO<UserInfo> findListByPage(UserInfoQuery param) {
        int count = this.findCountByParam(param);  // 获取总记录数
        int pageSize = param.getPageSize() == null ? PageSize.SIZE15.getSize() : param.getPageSize();  // 设置每页显示的条数，默认是 15

        // 创建分页对象，设置当前页、总条数、每页显示的条数
        SimplePage page = new SimplePage(param.getPageNo(), count, pageSize);
        param.setSimplePage(page);  // 设置分页信息到查询条件中
        List<UserInfo> list = this.findListByParam(param);  // 获取分页后的数据
        return new PaginationResultVO<>(count, page.getPageSize(), page.getPageNo(), page.getPageTotal(), list);  // 返回分页结果
    }

    /**
     * 新增用户信息
     */
    @Override
    public Integer add(UserInfo bean) {
        return this.userInfoMapper.insert(bean);  // 调用 Mapper 插入一条记录
    }

    /**
     * 批量新增用户信息
     */
    @Override
    public Integer addBatch(List<UserInfo> listBean) {
        if (listBean == null || listBean.isEmpty()) {  // 如果传入的列表为空，则返回 0
            return 0;
        }
        return this.userInfoMapper.insertBatch(listBean);  // 调用 Mapper 批量插入记录
    }

    /**
     * 批量新增或更新用户信息
     */
    @Override
    public Integer addOrUpdateBatch(List<UserInfo> listBean) {
        if (listBean == null || listBean.isEmpty()) {  // 如果传入的列表为空，则返回 0
            return 0;
        }
        return this.userInfoMapper.insertOrUpdateBatch(listBean);  // 调用 Mapper 批量插入或更新记录
    }

    /**
     * 根据条件更新用户信息
     */
    @Override
    public Integer updateByParam(UserInfo bean, UserInfoQuery param) {
        StringTools.checkParam(param);  // 检查查询参数是否有效
        return this.userInfoMapper.updateByParam(bean, param);  // 调用 Mapper 更新用户信息
    }

    /**
     * 根据条件删除用户信息
     */
    @Override
    public Integer deleteByParam(UserInfoQuery param) {
        StringTools.checkParam(param);  // 检查查询参数是否有效
        return this.userInfoMapper.deleteByParam(param);  // 调用 Mapper 删除符合条件的用户信息
    }

    /**
     * 根据用户 ID 获取用户信息
     */
    @Override
    public UserInfo getUserInfoByUserId(String userId) {
        return this.userInfoMapper.selectByUserId(userId);  // 调用 Mapper 根据用户 ID 获取用户信息
    }

    /**
     * 根据用户 ID 修改用户信息
     */
    @Override
    public Integer updateUserInfoByUserId(UserInfo bean, String userId) {
        return this.userInfoMapper.updateByUserId(bean, userId);  // 调用 Mapper 根据用户 ID 更新用户信息
    }

    /**
     * 根据用户 ID 删除用户信息
     */
    @Override
    public Integer deleteUserInfoByUserId(String userId) {
        return this.userInfoMapper.deleteByUserId(userId);  // 调用 Mapper 根据用户 ID 删除用户信息
    }

    /**
     * 根据邮箱获取用户信息
     */
    @Override
    public UserInfo getUserInfoByEmail(String email) {
        return this.userInfoMapper.selectByEmail(email);  // 调用 Mapper 根据邮箱获取用户信息
    }

    /**
     * 根据邮箱修改用户信息
     */
    @Override
    public Integer updateUserInfoByEmail(UserInfo bean, String email) {
        return this.userInfoMapper.updateByEmail(bean, email);  // 调用 Mapper 根据邮箱更新用户信息
    }

    /**
     * 根据邮箱删除用户信息
     */
    @Override
    public Integer deleteUserInfoByEmail(String email) {
        return this.userInfoMapper.deleteByEmail(email);  // 调用 Mapper 根据邮箱删除用户信息
    }

    /**
     * 用户注册
     */
    @Override
    @Transactional(rollbackFor = Exception.class)  // 事务管理，出现异常时回滚
    public void register(String email, String nickName, String password) {
        // 检查邮箱是否已经注册
        UserInfo userInfo = this.userInfoMapper.selectByEmail(email);
        if (null != userInfo) {
            throw new BusinessException("邮箱账号已经存在");  // 如果已注册，抛出异常
        }

        // 获取当前时间
        Date curDate = new Date();

        // 生成唯一的用户 ID
        String userId = StringTools.getUserId();

        // 查询邮箱是否需要设置靓号
        UserInfoBeauty beautyAccount = this.userInfoBeautyMapper.selectByEmail(email);

        // 如果该邮箱对应的靓号账户未被使用，则使用靓号 ID
        Boolean useBeautyAccount = null != beautyAccount && BeautyAccountStatusEnum.NO_USE.getStatus().equals(beautyAccount.getStatus());
        if (useBeautyAccount) {
            // 使用靓号 ID
            userId = UserContactTypeEnum.USER.getPrefix() + beautyAccount.getUserId();
        }

        // 创建新的用户信息对象
        userInfo = new UserInfo();
        userInfo.setUserId(userId);  // 设置用户 ID
        userInfo.setNickName(nickName);  // 设置昵称
        userInfo.setEmail(email);  // 设置邮箱
        userInfo.setPassword(StringTools.encodeByMD5(password));  // 设置加密后的密码
        userInfo.setCreateTime(curDate);  // 设置用户创建时间
        userInfo.setStatus(UserStatusEnum.ENABLE.getStatus());  // 设置用户状态为启用
        userInfo.setLastOffTime(curDate.getTime());  // 设置用户最后离线时间

        // 插入用户信息到数据库
        this.userInfoMapper.insert(userInfo);

        // 如果该邮箱对应有靓号账户，更新靓号状态为已使用
        if (useBeautyAccount) {
            UserInfoBeauty updateBeauty = new UserInfoBeauty();
            updateBeauty.setStatus(BeautyAccountStatusEnum.USEED.getStatus());  // 设置靓号状态为已使用
            this.userInfoBeautyMapper.updateById(updateBeauty, beautyAccount.getId());  // 更新靓号状态
        }

        // 创建机器人好友（添加机器人为联系人）
        userContactService.addContact4Robot(userId);
    }

    /**
     * 用户登录
     */
    @Override
    public UserInfoVO login(String email, String password) {
        // 根据邮箱查询用户信息
        UserInfo userInfo = this.userInfoMapper.selectByEmail(email);
        if (null == userInfo || !userInfo.getPassword().equals(password)) {
            throw new BusinessException("账号或者密码错误");  // 如果找不到用户或密码不匹配，抛出异常
        }
        // 如果账号被禁用，抛出异常
        if (UserStatusEnum.DISABLE.getStatus().equals(userInfo.getStatus())) {
            throw new BusinessException("账号已禁用");
        }

        // 查询用户的联系人
        UserContactQuery contactQuery = new UserContactQuery();
        contactQuery.setUserId(userInfo.getUserId());  // 设置查询条件，按用户 ID 查找联系人
        contactQuery.setStatusArray(new Integer[]{UserContactStatusEnum.FRIEND.getStatus()});  // 仅查询好友状态的联系人
        List<UserContact> contactList = userContactMapper.selectList(contactQuery);  // 执行查询
        // 提取联系人 ID 列表
        List<String> contactIdList = contactList.stream().map(item -> item.getContactId()).collect(Collectors.toList());

        // 清空用户的 Redis 联系人数据
        redisComponet.cleanUserContact(userInfo.getUserId());
        if (!contactIdList.isEmpty()) {
            // 批量添加联系人到 Redis
            redisComponet.addUserContactBatch(userInfo.getUserId(), contactIdList);
        }

        // 获取 Token 用户信息
        TokenUserInfoDto tokenUserInfoDto = getTokenUserInfoDto(userInfo);
        // 获取用户最后一次心跳时间
        Long lastHeartBeat = redisComponet.getUserHeartBeat(tokenUserInfoDto.getUserId());
        if (lastHeartBeat != null) {
            throw new BusinessException("此账号已经在别处登录，请退出后再登录");  // 如果用户在其他地方登录，抛出异常
        }

        // 生成登录 Token，并保存到 Redis
        String token = StringTools.encodeByMD5(tokenUserInfoDto.getUserId() + StringTools.getRandomString(Constants.LENGTH_20));
        tokenUserInfoDto.setToken(token);
        redisComponet.saveTokenUserInfoDto(tokenUserInfoDto);  // 将 Token 信息保存到 Redis

        // 返回用户信息和 Token
        UserInfoVO userInfoVO = CopyTools.copy(userInfo, UserInfoVO.class);
        userInfoVO.setToken(tokenUserInfoDto.getToken());  // 设置返回的 Token
        userInfoVO.setAdmin(tokenUserInfoDto.getAdmin());  // 设置用户是否为管理员
        return userInfoVO;
    }

    /**
     * 根据用户信息构造 Token 用户信息
     */
    private TokenUserInfoDto getTokenUserInfoDto(UserInfo userInfo) {
        TokenUserInfoDto tokenUserInfoDto = new TokenUserInfoDto();
        tokenUserInfoDto.setUserId(userInfo.getUserId());  // 设置用户 ID
        tokenUserInfoDto.setNickName(userInfo.getNickName());  // 设置用户昵称

        // 判断是否为管理员
        String adminEmails = appConfig.getAdminEmails();
        if (!StringTools.isEmpty(adminEmails) && ArrayUtils.contains(adminEmails.split(","), userInfo.getEmail())) {
            tokenUserInfoDto.setAdmin(true);  // 如果是管理员，设置为 true
        } else {
            tokenUserInfoDto.setAdmin(false);  // 否则设置为 false
        }
        return tokenUserInfoDto;
    }

    /**
     * 更新用户信息，包括头像
     */
    @Override
    @Transactional(rollbackFor = Exception.class)  // 事务管理，出现异常时回滚
    public void updateUserInfo(UserInfo userInfo, MultipartFile avatarFile, MultipartFile avatarCover) throws IOException {
        // 如果有上传头像文件，保存文件
        if (avatarFile != null) {
            String baseFolder = appConfig.getProjectFolder() + Constants.FILE_FOLDER_FILE;
            File targetFileFolder = new File(baseFolder + Constants.FILE_FOLDER_AVATAR_NAME);
            if (!targetFileFolder.exists()) {
                targetFileFolder.mkdirs();  // 创建头像存储文件夹
            }
            // 保存头像文件
            String filePath = targetFileFolder.getPath() + "/" + userInfo.getUserId() + Constants.IMAGE_SUFFIX;
            avatarFile.transferTo(new File(filePath));
            // 保存封面头像文件
            avatarCover.transferTo(new File(filePath + Constants.COVER_IMAGE_SUFFIX));
        }
        // 获取数据库中的原用户信息
        UserInfo dbInfo = this.userInfoMapper.selectByUserId(userInfo.getUserId());

        // 更新用户信息
        this.userInfoMapper.updateByUserId(userInfo, userInfo.getUserId());

        // 如果昵称发生变化，则更新联系人昵称和 Token 中的昵称
        String contactNameUpdate = null;
        if (!dbInfo.getNickName().equals(userInfo.getNickName())) {
            contactNameUpdate = userInfo.getNickName();  // 更新昵称
        }
        if (contactNameUpdate == null) {
            return;  // 如果昵称没有变化，直接返回
        }

        // 更新 Token 中的昵称
        TokenUserInfoDto tokenUserInfoDto = redisComponet.getTokenUserInfoDtoByUserId(userInfo.getUserId());
        tokenUserInfoDto.setNickName(contactNameUpdate);
        redisComponet.saveTokenUserInfoDto(tokenUserInfoDto);  // 保存更新后的 Token 信息到 Redis

        // 更新聊天会话中的冗余信息
        chatSessionUserService.updateRedundanceInfo(contactNameUpdate, userInfo.getUserId());
    }

    /**
     * 更新用户状态
     */
    @Override
    public void updateUserStatus(Integer status, String userId) {
        // 根据状态值获取对应的用户状态枚举
        UserStatusEnum userStatusEnum = UserStatusEnum.getByStatus(status);
        if (userStatusEnum == null) {
            throw new BusinessException(ResponseCodeEnum.CODE_600);  // 如果状态值无效，抛出异常
        }
        // 设置用户状态并更新
        UserInfo updateInfo = new UserInfo();
        updateInfo.setStatus(userStatusEnum.getStatus());  // 设置用户状态
        userInfoMapper.updateByUserId(updateInfo, userId);  // 更新用户状态
    }

    /**
     * 强制用户下线
     */
    @Override
    public void forceOffLine(String userId) {
        // 创建消息发送 DTO
        MessageSendDto sendDto = new MessageSendDto();
        sendDto.setContactType(UserContactTypeEnum.USER.getType());  // 设置消息类型为用户
        sendDto.setMessageType(MessageTypeEnum.FORCE_OFF_LINE.getType());  // 设置消息类型为强制下线
        sendDto.setContactId(userId);  // 设置用户 ID
        messageHandler.sendMessage(sendDto);  // 发送强制下线消息
    }
}