package com.easychat.redis;

import org.redisson.api.RSet;  // 导入 Redisson 的 RSet 接口，用于表示 Redis 集合类型的数据结构
import org.redisson.api.RedissonClient;  // 导入 RedissonClient 接口，用于操作 Redis 客户端
import org.springframework.stereotype.Component;  // 导入 Spring 的 Component 注解，表示这是一个 Spring 管理的 Bean

import javax.annotation.Resource;  // 导入 Spring 的 Resource 注解，用于自动注入依赖
import java.util.concurrent.TimeUnit;  // 导入 Java 的 TimeUnit 枚举类，用于设置时间单位

@Component("redissonUtils")  // 将该类标记为一个 Spring Bean，名为 "redissonUtils"，可以被其他类自动注入
public class RedissonUtils<T> {  // 泛型类 T，表示操作的数据类型可以是任意类型

    @Resource  // 自动注入 RedissonClient 实例，RedissonClient 是 Redisson 的核心客户端接口
    private RedissonClient redissonClient;  // 用于操作 Redis 数据

    /**
     * 向 Redis 的 Set 中添加元素，并设置过期时间
     *
     * @param key     Redis 中的 key，用于标识该 Set
     * @param value   要添加到 Set 中的值
     * @param seconds 设置 Set 的过期时间（秒）
     */
    public void addSet(String key, T value, Long seconds) {
        // 获取 Redis 中对应 key 的 RSet 集合实例
        RSet<T> reset = redissonClient.getSet(key);  // 调用 RedissonClient 的 getSet 方法，获取一个 RSet 集合

        // 向 Set 中添加指定的元素
        reset.add(value);  // 将 value 元素添加到 RSet 中

        // 设置 RSet 的过期时间
        reset.expire(seconds, TimeUnit.SECONDS);  // 设置该集合在指定的秒数后过期，过期后该集合会自动被删除
    }
}
