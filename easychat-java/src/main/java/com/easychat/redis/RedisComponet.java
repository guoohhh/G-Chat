package com.easychat.redis;  // 定义包名，表示该类属于 `com.easychat.redis` 包

import com.easychat.entity.constants.Constants;  // 导入常量类，用于定义 Redis 键的前缀和过期时间等常量
import com.easychat.entity.dto.SysSettingDto;  // 导入系统设置数据传输对象类，用于获取和保存系统设置
import com.easychat.entity.dto.TokenUserInfoDto;  // 导入 Token 用户信息数据传输对象类，用于获取和保存用户信息
import com.easychat.utils.StringTools;  // 导入字符串工具类，用于字符串处理（如判空等）
import org.redisson.api.RedissonClient;  // 导入 Redisson 客户端接口，用于与 Redis 交互
import org.springframework.stereotype.Component;  // 导入 Spring 组件注解，将该类标记为 Spring 管理的 Bean

import javax.annotation.Resource;  // 导入注解，用于将 Redis 工具类和 Redisson 客户端注入到该类
import java.util.List;  // 导入 List 接口，用于定义返回值类型（如联系人列表、会话列表等）

@Component  // 将该类标记为 Spring 组件，Spring 会自动扫描并将其作为 Bean 注册
public class RedisComponet {  // 定义 Redis 组件类，用于操作 Redis 数据库中的用户信息、心跳、联系人等数据

    @Resource  // 注入 RedisUtils 类实例，用于进行 Redis 操作
    private RedisUtils redisUtils;

    @Resource  // 注入 RedissonClient 实例，用于操作 Redis 分布式数据
    private RedissonClient redissonClient;

    /**
     * 获取 Token 对应的用户信息
     *
     * @param token 用户 Token
     * @return TokenUserInfoDto 用户信息数据传输对象
     */
    public TokenUserInfoDto getTokenUserInfoDto(String token) {
        // 从 Redis 获取用户信息，Redis 键为 "REDIS_KEY_WS_TOKEN" + token
        TokenUserInfoDto tokenUserInfoDto = (TokenUserInfoDto) redisUtils.get(Constants.REDIS_KEY_WS_TOKEN + token);
        return tokenUserInfoDto;  // 返回获取到的用户信息
    }

    /**
     * 通过用户 ID 获取对应的 Token 用户信息
     *
     * @param userId 用户 ID
     * @return TokenUserInfoDto 用户信息数据传输对象
     */
    public TokenUserInfoDto getTokenUserInfoDtoByUserId(String userId) {
        // 从 Redis 获取用户 ID 对应的 Token
        String token = (String) redisUtils.get(Constants.REDIS_KEY_WS_TOKEN_USERID + userId);
        return getTokenUserInfoDto(token);  // 根据 Token 获取用户信息
    }

    /**
     * 保存 Token 用户信息
     *
     * @param tokenUserInfoDto 用户信息数据传输对象
     */
    public void saveTokenUserInfoDto(TokenUserInfoDto tokenUserInfoDto) {
        // 将用户信息保存到 Redis，设置过期时间为两天
        redisUtils.setex(Constants.REDIS_KEY_WS_TOKEN + tokenUserInfoDto.getToken(), tokenUserInfoDto, Constants.REDIS_KEY_EXPIRES_DAY * 2);
        // 将用户 ID 和 Token 的映射关系保存到 Redis，设置过期时间为两天
        redisUtils.setex(Constants.REDIS_KEY_WS_TOKEN_USERID + tokenUserInfoDto.getUserId(), tokenUserInfoDto.getToken(), Constants.REDIS_KEY_EXPIRES_DAY * 2);
    }

    /**
     * 清除用户的 Token 信息
     *
     * @param userId 用户 ID
     */
    public void cleanUserTokenByUserId(String userId) {
        // 从 Redis 获取用户 ID 对应的 Token
        String token = (String) redisUtils.get(Constants.REDIS_KEY_WS_TOKEN_USERID + userId);
        // 如果 Token 不为空，则删除与 Token 对应的用户信息
        if (!StringTools.isEmpty(token)) {
            redisUtils.delete(Constants.REDIS_KEY_WS_TOKEN + token);
        }
    }

    /**
     * 保存用户心跳时间（用于检测连接是否活跃）
     *
     * @param userId 用户 ID
     */
    public void saveUserHeartBeat(String userId) {
        // 将当前时间戳保存到 Redis，作为用户的最后心跳时间，设置过期时间为指定值（如 5 分钟）
        redisUtils.setex(Constants.REDIS_KEY_WS_USER_HEART_BEAT + userId, System.currentTimeMillis(), Constants.REDIS_KEY_EXPIRES_HEART_BEAT);
    }

    /**
     * 删除用户的心跳信息
     *
     * @param userId 用户 ID
     */
    public void removeUserHeartBeat(String userId) {
        // 删除 Redis 中保存的用户心跳时间信息
        redisUtils.delete(Constants.REDIS_KEY_WS_USER_HEART_BEAT + userId);
    }

    /**
     * 获取用户的最后心跳时间
     *
     * @param userId 用户 ID
     * @return 用户最后心跳的时间戳
     */
    public Long getUserHeartBeat(String userId) {
        // 从 Redis 获取用户的最后心跳时间戳
        return (Long) redisUtils.get(Constants.REDIS_KEY_WS_USER_HEART_BEAT + userId);
    }

    /**
     * 获取用户的联系人列表
     *
     * @param userId 用户 ID
     * @return 用户的联系人 ID 列表
     */
    public List<String> getUserContactList(String userId) {
        // 从 Redis 获取用户的联系人列表
        return redisUtils.getQueueList(Constants.REDIS_KEY_USER_CONTACT + userId);
    }

    /**
     * 添加联系人到用户的联系人列表
     *
     * @param userId    用户 ID
     * @param contactId 联系人 ID
     */
    public void addUserContact(String userId, String contactId) {
        // 获取用户当前的联系人列表
        List<String> contactList = redisUtils.getQueueList(Constants.REDIS_KEY_USER_CONTACT + userId);
        // 如果联系人列表中没有该联系人 ID，则将其添加到 Redis 中
        if (!contactList.contains(contactId)) {
            redisUtils.lpush(Constants.REDIS_KEY_USER_CONTACT + userId, contactId, Constants.REDIS_KEY_TOKEN_EXPIRES);
        }
    }

    /**
     * 清空用户的联系人列表
     *
     * @param userId 用户 ID
     */
    public void cleanUserContact(String userId) {
        // 删除 Redis 中用户的所有联系人信息
        redisUtils.delete(Constants.REDIS_KEY_USER_CONTACT + userId);
    }

    /**
     * 从用户的联系人列表中移除指定的联系人
     *
     * @param userId    用户 ID
     * @param contactId 要移除的联系人 ID
     */
    public void removeUserContact(String userId, String contactId) {
        // 从 Redis 中的联系人列表中移除指定的联系人
        redisUtils.remove(Constants.REDIS_KEY_USER_CONTACT + userId, contactId);
    }

    /**
     * 批量添加联系人到用户的联系人列表
     *
     * @param userId        用户 ID
     * @param contactIdList 要添加的联系人 ID 列表
     */
    public void addUserContactBatch(String userId, List<String> contactIdList) {
        // 批量将联系人添加到 Redis 中，并设置过期时间
        redisUtils.lpushAll(Constants.REDIS_KEY_USER_CONTACT + userId, contactIdList, Constants.REDIS_KEY_TOKEN_EXPIRES);
    }

    /**
     * 获取用户的会话列表
     *
     * @param userId 用户 ID
     * @return 用户的会话 ID 列表
     */
    public List<String> getUserSessionList(String userId) {
        // 从 Redis 获取用户的会话列表
        return redisUtils.getQueueList(Constants.REDIS_KEY_USER_SESSION + userId);
    }

    /**
     * 添加用户会话 ID 到会话列表
     *
     * @param userId    用户 ID
     * @param sessionId 会话 ID
     */
    public void addUserSession(String userId, String sessionId) {
        // 获取用户的会话列表
        List<String> sessionList = redisUtils.getQueueList(Constants.REDIS_KEY_USER_SESSION + userId);
        // 如果会话列表中没有该会话 ID，则将其添加到 Redis 中
        if (!sessionList.contains(sessionId)) {
            redisUtils.lpush(Constants.REDIS_KEY_USER_SESSION + userId, sessionId, Constants.REDIS_KEY_TOKEN_EXPIRES);
        }
    }

    /**
     * 清空用户的会话列表
     *
     * @param userId 用户 ID
     */
    public void cleanUserSession(String userId) {
        // 删除 Redis 中用户的所有会话信息
        redisUtils.delete(Constants.REDIS_KEY_USER_SESSION + userId);
    }

    /**
     * 保存系统设置到 Redis
     *
     * @param sysSettingDto 系统设置数据传输对象
     */
    public void saveSysSetting(SysSettingDto sysSettingDto) {
        // 将系统设置保存到 Redis 中
        redisUtils.set(Constants.REDIS_KEY_SYS_SETTING, sysSettingDto);
    }

    /**
     * 获取系统设置
     *
     * @return 系统设置数据传输对象
     */
    public SysSettingDto getSysSetting() {
        // 从 Redis 获取系统设置，如果 Redis 中没有则返回一个新的默认设置对象
        SysSettingDto sysSettingDto = (SysSettingDto) redisUtils.get(Constants.REDIS_KEY_SYS_SETTING);
        sysSettingDto = sysSettingDto == null ? new SysSettingDto() : sysSettingDto;
        return sysSettingDto;
    }
}
