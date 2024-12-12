package com.easychat.entity.po;

// 引入需要的类
import com.easychat.entity.enums.DateTimePatternEnum; // 引入日期时间格式枚举
import com.easychat.utils.DateUtil; // 引入日期工具类
import com.fasterxml.jackson.annotation.JsonFormat; // 引入Json格式化注解
import org.springframework.format.annotation.DateTimeFormat; // 引入Spring日期时间格式化注解

import java.io.Serializable; // 引入Serializable接口
import java.util.Date; // 引入日期类

/**
 * 群组信息类，表示群组的基本信息
 * 实现 Serializable 接口，使得该类的对象可以被序列化
 */
public class GroupInfo implements Serializable {

    // 群组的唯一标识符
    /**
     * 群ID
     */
    private String groupId;

    // 群组的名称
    /**
     * 群组名
     */
    private String groupName;

    // 群主的ID
    /**
     * 群主id
     */
    private String groupOwnerId;

    // 群组的创建时间，格式化输出
    /**
     * 创建时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")  // JSON序列化时，格式化日期字段
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")  // 用于SpringMVC的日期转换，前端传入日期时的格式
    private Date createTime;

    // 群公告信息
    /**
     * 群公告
     */
    private String groupNotice;

    // 允许的加入方式，0为直接加入，1为需要管理员同意
    /**
     * 0:直接加入 1:管理员同意后加入
     */
    private Integer joinType;

    // 群组的状态，1表示正常，0表示已解散
    /**
     * 状态 1:正常 0:解散
     */
    private Integer status;

    // 群组的成员数量
    private Integer memberCount;

    // 群主的昵称
    private String groupOwnerNickName;


    // 以下是 getter 和 setter 方法，主要用于获取和设置对象的属性值

    // 设置群组ID
    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    // 获取群组ID
    public String getGroupId() {
        return this.groupId;
    }

    // 设置群组名称
    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    // 获取群组名称
    public String getGroupName() {
        return this.groupName;
    }

    // 设置群主ID
    public void setGroupOwnerId(String groupOwnerId) {
        this.groupOwnerId = groupOwnerId;
    }

    // 获取群主ID
    public String getGroupOwnerId() {
        return this.groupOwnerId;
    }

    // 设置创建时间
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    // 获取创建时间
    public Date getCreateTime() {
        return this.createTime;
    }

    // 设置群公告
    public void setGroupNotice(String groupNotice) {
        this.groupNotice = groupNotice;
    }

    // 获取群公告
    public String getGroupNotice() {
        return this.groupNotice;
    }

    // 设置加入方式（0为直接加入，1为管理员同意后加入）
    public void setJoinType(Integer joinType) {
        this.joinType = joinType;
    }

    // 获取加入方式
    public Integer getJoinType() {
        return this.joinType;
    }

    // 设置群组状态（1为正常，0为解散）
    public void setStatus(Integer status) {
        this.status = status;
    }

    // 获取群组状态
    public Integer getStatus() {
        return this.status;
    }

    // 获取成员数量
    public Integer getMemberCount() {
        return memberCount;
    }

    // 设置成员数量
    public void setMemberCount(Integer memberCount) {
        this.memberCount = memberCount;
    }

    // 获取群主昵称
    public String getGroupOwnerNickName() {
        return groupOwnerNickName;
    }

    // 设置群主昵称
    public void setGroupOwnerNickName(String groupOwnerNickName) {
        this.groupOwnerNickName = groupOwnerNickName;
    }

    // 重写toString方法，用于打印群组信息的字符串表示
    @Override
    public String toString() {
        return "群ID:" + (groupId == null ? "空" : groupId) + "，群组名:" + (groupName == null ? "空" : groupName)
                + "，群主id:" + (groupOwnerId == null ? "空" : groupOwnerId)
                + "，创建时间:" + (createTime == null ? "空" : DateUtil.format(createTime, DateTimePatternEnum.YYYY_MM_DD_HH_MM_SS.getPattern()))
                + "，群公告:" + (groupNotice == null ? "空" : groupNotice)
                + "，0:直接加入 1:管理员同意后加入:" + (joinType == null ? "空" : joinType)
                + "，状态 1:正常 0:解散:" + (status == null ? "空" : status);
    }
}
