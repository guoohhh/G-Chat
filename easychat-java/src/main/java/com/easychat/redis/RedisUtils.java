package com.easychat.redis;

import org.slf4j.Logger;  // 导入 SLF4J 日志库，用于记录日志
import org.slf4j.LoggerFactory;  // 导入 SLF4J 工厂类，用于创建 Logger 实例
import org.springframework.data.redis.core.RedisTemplate;  // 导入 Spring RedisTemplate 类，用于操作 Redis 数据
import org.springframework.stereotype.Component;  // 导入 Spring Component 注解，用于标记该类为 Spring Bean
import org.springframework.util.CollectionUtils;  // 导入 Spring 工具类，用于处理集合相关的操作

import javax.annotation.Resource;  // 导入 Spring 注解，用于自动注入 Bean
import java.util.Collection;  // 导入 Java Collection 类，用于操作集合
import java.util.List;  // 导入 Java List 类，用于表示列表类型的数据
import java.util.concurrent.TimeUnit;  // 导入 Java TimeUnit 枚举类，用于设置时间单位

@Component("redisUtils")  // 声明该类为 Spring 管理的 Bean，名称为 redisUtils
public class RedisUtils<V> {  // 泛型类，V 表示 Redis 中存储的数据类型

    @Resource
    private RedisTemplate<String, V> redisTemplate;  // 自动注入 RedisTemplate，用于执行 Redis 操作

    private static final Logger logger = LoggerFactory.getLogger(RedisUtils.class);  // 创建日志记录器，用于记录 Redis 操作的日志

    /**
     * 删除缓存
     *
     * @param key 可以传一个值 或多个
     */
    public void delete(String... key) {  // 接受一个或多个缓存的 key
        if (key != null && key.length > 0) {  // 如果 key 数组不为空且长度大于 0
            if (key.length == 1) {  // 如果只有一个 key
                redisTemplate.delete(key[0]);  // 删除该单个 key 对应的缓存
            } else {  // 如果有多个 key
                redisTemplate.delete((Collection<String>) CollectionUtils.arrayToList(key));  // 将 key 数组转换为 List，然后删除
            }
        }
    }

    public V get(String key) {  // 获取指定 key 对应的缓存值
        return key == null ? null : redisTemplate.opsForValue().get(key);  // 如果 key 不为 null，使用 RedisTemplate 获取该 key 的值
    }

    /**
     * 普通缓存放入
     *
     * @param key   键
     * @param value 值
     * @return true成功 false失败
     */
    public boolean set(String key, V value) {  // 将指定的 key-value 存入 Redis 缓存
        try {
            redisTemplate.opsForValue().set(key, value);  // 使用 RedisTemplate 将 value 存入指定 key 中
            return true;  // 存储成功，返回 true
        } catch (Exception e) {  // 如果发生异常，捕获并记录错误日志
            logger.error("设置redisKey:{},value:{}失败", key, value);
            return false;  // 存储失败，返回 false
        }
    }

    /**
     * 普通缓存放入并设置时间
     *
     * @param key   键
     * @param value 值
     * @param time  时间(秒) time要大于0 如果time小于等于0 将设置无限期
     * @return true成功 false 失败
     */
    public boolean setex(String key, V value, long time) {  // 将缓存存入并设置过期时间
        try {
            if (time > 0) {  // 如果时间大于 0，设置过期时间
                redisTemplate.opsForValue().set(key, value, time, TimeUnit.SECONDS);  // 设置 key 对应的缓存，并设置过期时间（秒）
            } else {
                set(key, value);  // 如果时间小于等于 0，则不设置过期时间，调用 set 方法存储数据
            }
            return true;  // 存储成功，返回 true
        } catch (Exception e) {  // 如果发生异常，捕获并记录错误日志
            logger.error("设置redisKey:{},value:{}失败", key, value);
            return false;  // 存储失败，返回 false
        }
    }

    public boolean expire(String key, long time) {  // 设置某个缓存的过期时间
        try {
            if (time > 0) {  // 如果时间大于 0，设置过期时间
                redisTemplate.expire(key, time, TimeUnit.SECONDS);  // 设置指定 key 的过期时间（秒）
            }
            return true;  // 设置成功，返回 true
        } catch (Exception e) {  // 如果发生异常，捕获并打印异常信息
            e.printStackTrace();
            return false;  // 设置失败，返回 false
        }
    }

    public List<V> getQueueList(String key) {  // 获取 Redis 中指定 key 对应的列表
        return redisTemplate.opsForList().range(key, 0, -1);  // 获取指定 key 的整个列表
    }

    public boolean lpush(String key, V value, long time) {  // 将数据插入 Redis 列表的头部
        try {
            redisTemplate.opsForList().leftPush(key, value);  // 将 value 插入指定 key 对应的列表头部
            if (time > 0) {  // 如果时间大于 0，设置过期时间
                expire(key, time);  // 设置指定 key 的过期时间
            }
            return true;  // 插入成功，返回 true
        } catch (Exception e) {  // 如果发生异常，捕获并打印异常信息
            e.printStackTrace();
            return false;  // 插入失败，返回 false
        }
    }

    public long remove(String key, Object value) {  // 从列表中移除指定的元素
        try {
            Long remove = redisTemplate.opsForList().remove(key, 1, value);  // 从指定 key 的列表中移除 value 元素，移除最多一个
            return remove;  // 返回移除的数量
        } catch (Exception e) {  // 如果发生异常，捕获并打印异常信息
            e.printStackTrace();
            return 0;  // 移除失败，返回 0
        }
    }

    public boolean lpushAll(String key, List<V> values, long time) {  // 批量插入数据到 Redis 列表的头部
        try {
            redisTemplate.opsForList().leftPushAll(key, values);  // 将 values 列表中的所有元素插入到指定 key 对应的列表头部
            if (time > 0) {  // 如果时间大于 0，设置过期时间
                expire(key, time);  // 设置指定 key 的过期时间
            }
            return true;  // 插入成功，返回 true
        } catch (Exception e) {  // 如果发生异常，捕获并打印异常信息
            e.printStackTrace();
            return false;  // 插入失败，返回 false
        }
    }

}
