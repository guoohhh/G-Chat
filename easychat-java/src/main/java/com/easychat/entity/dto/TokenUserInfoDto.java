package com.easychat.entity.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;  // 导入Jackson注解，用于忽略未知属性
import java.io.Serializable;  // 导入Serializable接口，确保类可以序列化

// 使用@JsonIgnoreProperties注解，表示在反序列化过程中忽略未知字段
@JsonIgnoreProperties(ignoreUnknown = true)
public class TokenUserInfoDto implements Serializable {  // TokenUserInfoDto类实现Serializable接口，表示该类的实例可以被序列化和反序列化
    private static final long serialVersionUID = -6910208948981307451L;  // 定义一个唯一的serialVersionUID，用于版本控制，确保序列化时兼容性

    // 声明类的字段
    private String token;  // 存储用户的认证token
    private String userId;  // 存储用户的唯一ID
    private String nickName;  // 存储用户的昵称
    private Boolean admin;  // 存储用户是否为管理员的标识

    // 获取昵称
    public String getNickName() {
        return nickName;  // 返回用户昵称
    }

    // 设置昵称
    public void setNickName(String nickName) {
        this.nickName = nickName;  // 设置用户昵称
    }

    // 获取token
    public String getToken() {
        return token;  // 返回token值
    }

    // 设置token
    public void setToken(String token) {
        this.token = token;  // 设置token值
    }

    // 获取用户ID
    public String getUserId() {
        return userId;  // 返回用户ID
    }

    // 设置用户ID
    public void setUserId(String userId) {
        this.userId = userId;  // 设置用户ID
    }

    // 获取是否为管理员标识
    public Boolean getAdmin() {
        return admin;  // 返回用户是否是管理员的标识
    }

    // 设置是否为管理员标识
    public void setAdmin(Boolean admin) {
        this.admin = admin;  // 设置用户是否为管理员
    }
}
