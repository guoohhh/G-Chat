package com.easychat.entity.po;  // 包名，定义该类在 com.easychat.entity.po 包下，用于存放实体类。

import java.io.Serializable;  // 引入 Serializable 接口，表示该类的实例可以被序列化，用于数据传输或存储。

/**
 * 靓号实体类
 * 该类用于表示靓号（与用户账号相关的邮箱和状态信息）
 */
public class UserInfoBeauty implements Serializable {  // 实现 Serializable 接口，允许该类的对象被序列化。

    // 实例变量定义开始

    /**
     * 自增ID，作为每个靓号的唯一标识
     */
    private Integer id;  // 用于存储靓号的自增ID

    /**
     * 邮箱，靓号对应的邮箱地址
     */
    private String email;  // 用于存储靓号关联的邮箱

    /**
     * 用户ID，表示与此靓号关联的用户的唯一标识
     */
    private String userId;  // 用于存储与该靓号关联的用户ID

    /**
     * 状态，表示靓号的使用情况
     * 0: 未使用
     * 1: 已使用
     */
    private Integer status;  // 存储靓号的状态，0 表示未使用，1 表示已使用

    // 实例方法定义开始

    /**
     * 设置自增ID
     */
    public void setId(Integer id) {  // 设置靓号的自增ID
        this.id = id;  // 将传入的id赋值给当前实例的id字段
    }

    /**
     * 获取自增ID
     */
    public Integer getId() {  // 返回当前靓号实例的ID
        return this.id;  // 返回自增ID
    }

    /**
     * 设置邮箱
     */
    public void setEmail(String email) {  // 设置靓号的邮箱地址
        this.email = email;  // 将传入的邮箱值赋给当前实例的email字段
    }

    /**
     * 获取邮箱
     */
    public String getEmail() {  // 返回当前靓号实例的邮箱地址
        return this.email;  // 返回邮箱地址
    }

    /**
     * 设置用户ID
     */
    public void setUserId(String userId) {  // 设置与靓号相关的用户ID
        this.userId = userId;  // 将传入的用户ID赋值给当前实例的userId字段
    }

    /**
     * 获取用户ID
     */
    public String getUserId() {  // 返回当前靓号实例的用户ID
        return this.userId;  // 返回用户ID
    }

    /**
     * 设置状态
     */
    public void setStatus(Integer status) {  // 设置靓号的状态，0表示未使用，1表示已使用
        this.status = status;  // 将传入的状态值赋给当前实例的status字段
    }

    /**
     * 获取状态
     */
    public Integer getStatus() {  // 返回当前靓号实例的状态
        return this.status;  // 返回靓号的状态
    }

    /**
     * 重写toString()方法，返回该对象的字符串表示
     * 该方法提供了靓号信息的文本表示，便于调试和日志输出。
     */
    @Override
    public String toString() {  // 重写 Object 类的 toString() 方法
        return  "自增ID:" + (id == null ? "空" : id) +
                "，邮箱:" + (email == null ? "空" : email) +
                "，用户ID:" + (userId == null ? "空" : userId) +
                "，状态0:未使用 1:已使用:" + (status == null ? "空" : status);
        // 返回字符串表示，若字段为null，则显示“空”，否则显示实际值。
    }
}
