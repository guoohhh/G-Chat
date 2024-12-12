package com.easychat.redis;  // 定义包名，表示该类属于 `com.easychat.redis` 包

import io.lettuce.core.RedisConnectionException;  // 导入 Lettuce 客户端的 Redis 连接异常类，用于处理 Redis 连接错误
import org.redisson.Redisson;  // 导入 Redisson 客户端的 Redisson 类，用于创建 RedissonClient 实例
import org.redisson.api.RedissonClient;  // 导入 RedissonClient 接口，Redisson 的客户端对象
import org.redisson.config.Config;  // 导入 Redisson 配置类，用于配置 Redisson 客户端的连接设置
import org.slf4j.Logger;  // 导入 SLF4J 日志接口，用于记录日志
import org.slf4j.LoggerFactory;  // 导入 SLF4J 日志工厂，用于创建日志对象
import org.springframework.beans.factory.annotation.Value;  // 导入 Spring 的 Value 注解，用于读取配置文件中的值
import org.springframework.context.annotation.Bean;  // 导入 Spring 的 Bean 注解，用于将方法返回的对象注册为 Spring Bean
import org.springframework.context.annotation.Configuration;  // 导入 Spring 的 Configuration 注解，用于标识该类是一个配置类
import org.springframework.data.redis.connection.RedisConnectionFactory;  // 导入 RedisConnectionFactory 接口，用于 Redis 连接工厂的配置
import org.springframework.data.redis.core.RedisTemplate;  // 导入 RedisTemplate 类，Spring Data Redis 中用于操作 Redis 数据的模板类
import org.springframework.data.redis.serializer.RedisSerializer;  // 导入 RedisSerializer 接口，用于 Redis 数据的序列化和反序列化

@Configuration  // 该类是 Spring 配置类，用于配置 Redis 相关的 Bean
public class RedisConfig<V> {  // Redis 配置类，泛型类型 V 用于表示 Redis 中的值类型

    // 创建一个静态日志对象，用于记录 Redis 配置相关的信息
    private static final Logger logger = LoggerFactory.getLogger(RedisConfig.class);

    // 从配置文件中读取 Redis 的主机地址（默认为空）
    @Value("${spring.redis.host:}")
    private String redisHost;

    // 从配置文件中读取 Redis 的端口号（默认为 null）
    @Value("${spring.redis.port:}")
    private Integer redisPort;

    /**
     * 创建 RedissonClient 实例，用于操作 Redis
     * @return RedissonClient 实例
     */
    @Bean(name = "redissonClient", destroyMethod = "shutdown")  // 将该方法的返回值注册为名为 "redissonClient" 的 Bean，并指定销毁方法为 shutdown
    public RedissonClient redissonClient() {  // 创建 RedissonClient 实例的方法
        try {
            // 创建 Redisson 配置对象，设置 Redis 连接信息
            Config config = new Config();
            // 配置 Redisson 连接单个 Redis 服务器的地址，使用 redisHost 和 redisPort 配置读取的主机和端口
            config.useSingleServer().setAddress("redis://" + redisHost + ":" + redisPort);
            // 创建 RedissonClient 实例并返回
            RedissonClient redissonClient = Redisson.create(config);
            return redissonClient;
        } catch (RedisConnectionException e) {  // 捕获 Redis 连接异常
            // 记录 Redis 配置错误的日志，提示用户检查 Redis 配置
            logger.error("redis配置错误，请检查redis配置");
        }
        // 如果连接失败，返回 null
        return null;
    }

    /**
     * 创建 RedisTemplate 实例，用于操作 Redis 数据
     * @param factory Redis 连接工厂
     * @return RedisTemplate 实例
     */
    @Bean("redisTemplate")  // 将该方法的返回值注册为名为 "redisTemplate" 的 Bean
    public RedisTemplate<String, V> redisTemplate(RedisConnectionFactory factory) {  // 创建 RedisTemplate 实例的方法
        // 创建 RedisTemplate 实例
        RedisTemplate<String, V> template = new RedisTemplate<>();
        // 设置 Redis 连接工厂
        template.setConnectionFactory(factory);

        // 设置 Redis key 的序列化方式为字符串（用于存储和获取 Redis 中的 key）
        template.setKeySerializer(RedisSerializer.string());
        // 设置 Redis value 的序列化方式为 JSON（用于存储和获取 Redis 中的值）
        template.setValueSerializer(RedisSerializer.json());

        // 设置 Redis Hash key 的序列化方式为字符串
        template.setHashKeySerializer(RedisSerializer.string());
        // 设置 Redis Hash value 的序列化方式为 JSON
        template.setHashValueSerializer(RedisSerializer.json());

        // 初始化 RedisTemplate 的其他属性
        template.afterPropertiesSet();
        return template;
    }
}
