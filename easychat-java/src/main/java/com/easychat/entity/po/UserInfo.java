package com.easychat.entity.po;  // 定义包名，表示该类属于 com.easychat.entity.po 包

// 引入常量类，包含常量定义

import com.easychat.entity.constants.Constants;
// 引入日期时间格式枚举，用于日期的格式化
import com.easychat.entity.enums.DateTimePatternEnum;
// 引入工具类，提供日期格式化方法
import com.easychat.utils.DateUtil;
// 引入 Jackson 序列化注解，用于自定义 JSON 序列化格式
import com.fasterxml.jackson.annotation.JsonFormat;
// 引入 Jackson 注解，用于在 JSON 序列化时忽略某个字段
import com.fasterxml.jackson.annotation.JsonIgnore;
// 引入 Spring 格式化注解，用于表单日期格式化
import org.springframework.format.annotation.DateTimeFormat;

// 引入验证注解，确保字段不能为空
import javax.validation.constraints.NotEmpty;
// 引入 Serializable 接口，使得类的对象可以进行序列化
import java.io.Serializable;
// 引入 Date 类型，用于表示时间字段
import java.util.Date;

/**
 * 用户信息类，表示一个用户的各类信息。
 * 实现 Serializable 接口，允许该类的对象在网络上传输或存储到文件中
 */
public class UserInfo implements Serializable {

    // 用户ID，不能为空字段
    @NotEmpty  // 表示该字段不能为空
    private String userId;

    // 用户的电子邮件地址
    private String email;

    // 用户的显示名称
    private String nickName;

    // 加入类型：0 - 直接加入，1 - 同意后加好友
    private Integer joinType;

    // 性别：0 - 女，1 - 男
    private Integer sex;

    // 密码字段，序列化时会被忽略
    @JsonIgnore  // 在 JSON 序列化时忽略该字段，不返回密码
    private String password;

    // 个性签名，用户的个人签名
    private String personalSignature;

    // 用户状态：表示用户的当前状态（如：启用、禁用）
    private Integer status;

    // 创建时间，表示用户账户的创建时间
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")  // 设置 JSON 序列化时的时间格式
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")  // 设置 Spring 表单提交时的日期格式
    private Date createTime;

    // 最后登录时间，记录用户的最后一次登录时间
    private Date lastLoginTime;

    // 用户所在的省份
    private String areaName;

    // 用户所在的城市
    private String areaCode;

    // 最后离开时间，记录用户最后一次离开应用的时间
    private Long lastOffTime;

    // 在线类型字段，1 表示在线，0 表示离线
    private Integer onlineType;

    // 新增字段，表示用户的大学名称
    private String university;

    /**
     * 获取在线状态的方法
     * 根据最后登录时间和最后离开时间来判断用户是否在线。
     * 如果用户的最后登录时间晚于最后离开时间，认为用户在线。
     *
     * @return Integer 在线类型，1 表示在线，0 表示离线
     */
    public Integer getOnlineType() {
        // 如果最后登录时间存在，并且比最后离开时间要晚，认为用户在线
        if (lastLoginTime != null && lastLoginTime.getTime() > lastOffTime) {
            return Constants.ONE;  // 返回 1 表示在线
        } else {
            return Constants.ZERO;  // 返回 0 表示离线
        }
    }

    // 以下是常见的 getter 和 setter 方法，用于访问和修改各个字段的值

    public void setOnlineType(Integer onlineType) {
        this.onlineType = onlineType;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserId() {
        return this.userId;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getNickName() {
        return this.nickName;
    }

    public void setJoinType(Integer joinType) {
        this.joinType = joinType;
    }

    public Integer getJoinType() {
        return this.joinType;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    public Integer getSex() {
        return this.sex;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPersonalSignature(String personalSignature) {
        this.personalSignature = personalSignature;
    }

    public String getPersonalSignature() {
        return this.personalSignature;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getStatus() {
        return this.status;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getCreateTime() {
        return this.createTime;
    }

    public Date getLastLoginTime() {
        return lastLoginTime;
    }

    public void setLastLoginTime(Date lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }

    public String getAreaName() {
        return this.areaName;
    }

    public void setAreaCode(String areaCode) {
        this.areaCode = areaCode;
    }

    public String getAreaCode() {
        return this.areaCode;
    }

    public void setLastOffTime(Long lastOffTime) {
        this.lastOffTime = lastOffTime;
    }

    public Long getLastOffTime() {
        return this.lastOffTime;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getUniversity() {
        return this.university;
    }

    /**
     * 重写 `toString` 方法，用于返回该类的字符串表示。
     * 该方法通常用于调试或者日志输出时，帮助开发人员查看对象的内容。
     *
     * @return String 返回用户信息的字符串表示
     */
    @Override
    public String toString() {
        // 通过拼接各个字段的字符串，生成一个用户信息的描述
        return "用户ID:" + (userId == null ? "空" : userId) +
                "，邮箱:" + (email == null ? "空" : email) +
                "，昵称:" + (nickName == null ? "空" : nickName) +
                "，0:直接加入 1:同意后加好友:" + (joinType == null ? "空" : joinType) +
                "，0:女 1:男:" + (sex == null ? "空" : sex) +
                "，密码:" + (password == null ? "空" : password) +
                "，个性签名:" + (personalSignature == null ? "空" : personalSignature) +
                "，状态:" + (status == null ? "空" : status) +
                "，创建时间:" + (createTime == null ? "空" : DateUtil.format(createTime, DateTimePatternEnum.YYYY_MM_DD_HH_MM_SS.getPattern())) +
                "，最后登录时间:" + (lastLoginTime == null ? "空" : lastLoginTime) +
                "，省份:" + (areaName == null ? "空" : areaName) +
                "，城市:" + (areaCode == null ? "空" : areaCode) +
                "，大学:" + (university == null ? "空" : university) +
                "，最后离开时间:" + (lastOffTime == null ? "空" : lastOffTime);
    }
}
