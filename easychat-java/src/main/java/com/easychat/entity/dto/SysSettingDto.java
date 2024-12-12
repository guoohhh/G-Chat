package com.easychat.entity.dto;

import com.easychat.entity.constants.Constants;  // 引入常量类
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;  // 引入Jackson注解，忽略未知的JSON属性

import java.io.Serializable;  // 实现Serializable接口，使对象可以序列化

@JsonIgnoreProperties(ignoreUnknown = true)  // 序列化时，忽略JSON中不认识的属性
public class SysSettingDto implements Serializable {  // 系统设置数据传输对象，实现序列化接口

    // 定义一些系统设置的默认值
    private Integer maxGroupCount = 5;  // 最大群组数量
    private Integer maxGroupMemberCount = 500;  // 每个群组的最大成员数量
    private Integer maxImageSize = 2;  // 最大图片大小，单位MB
    private Integer maxVideoSize = 5;  // 最大视频大小，单位MB
    private Integer maxFileSize = 5;  // 最大文件大小，单位MB
    private String robotUid = Constants.ROBOT_UID;  // 机器人UID，默认值来自Constants类
    private String robotNickName = "EasyChat";  // 机器人昵称，默认值为"EasyChat"
    private String robotWelcome = "欢迎使用EasyChat";  // 机器人欢迎信息，默认值为"欢迎使用EasyChat"

    // 获取最大群组数量
    public Integer getMaxGroupCount() {
        return maxGroupCount;
    }

    // 设置最大群组数量
    public void setMaxGroupCount(Integer maxGroupCount) {
        this.maxGroupCount = maxGroupCount;
    }

    // 获取每个群组的最大成员数量
    public Integer getMaxGroupMemberCount() {
        return maxGroupMemberCount;
    }

    // 设置每个群组的最大成员数量
    public void setMaxGroupMemberCount(Integer maxGroupMemberCount) {
        this.maxGroupMemberCount = maxGroupMemberCount;
    }

    // 获取最大图片大小（单位MB）
    public Integer getMaxImageSize() {
        return maxImageSize;
    }

    // 设置最大图片大小（单位MB）
    public void setMaxImageSize(Integer maxImageSize) {
        this.maxImageSize = maxImageSize;
    }

    // 获取最大视频大小（单位MB）
    public Integer getMaxVideoSize() {
        return maxVideoSize;
    }

    // 设置最大视频大小（单位MB）
    public void setMaxVideoSize(Integer maxVideoSize) {
        this.maxVideoSize = maxVideoSize;
    }

    // 获取机器人昵称
    public String getRobotNickName() {
        return robotNickName;
    }

    // 设置机器人昵称
    public void setRobotNickName(String robotNickName) {
        this.robotNickName = robotNickName;
    }

    // 获取机器人欢迎信息
    public String getRobotWelcome() {
        return robotWelcome;
    }

    // 设置机器人欢迎信息
    public void setRobotWelcome(String robotWelcome) {
        this.robotWelcome = robotWelcome;
    }

    // 获取最大文件大小（单位MB）
    public Integer getMaxFileSize() {
        return maxFileSize;
    }

    // 设置最大文件大小（单位MB）
    public void setMaxFileSize(Integer maxFileSize) {
        this.maxFileSize = maxFileSize;
    }

    // 获取机器人UID
    public String getRobotUid() {
        return robotUid;
    }
}
