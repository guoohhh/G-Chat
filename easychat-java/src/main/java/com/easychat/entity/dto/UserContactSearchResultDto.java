package com.easychat.entity.dto;

import com.easychat.entity.enums.UserContactStatusEnum;  // 导入UserContactStatusEnum，用户联系人的状态枚举类

// 用户联系人查询结果的数据传输对象 (DTO) 类
public class UserContactSearchResultDto {

    private String contactId;  // 联系人ID，用于标识联系人
    private String contactType;  // 联系人类型，可能是用户或群组
    private String nickName;  // 联系人昵称
    private Long avatarLastUpdate;  // 头像最后更新时间戳
    private Integer status;  // 联系人状态，通常用于表示该联系人是否活跃
    private String statusName;  // 联系人状态的名称（例如：已添加、已拉黑等）
    private Integer sex;  // 联系人性别，可能值为男、女等
    private String areaName;  // 联系人所在地区名称

    // 获取联系人ID
    public String getContactId() {
        return contactId;  // 返回联系人ID
    }

    // 设置联系人ID
    public void setContactId(String contactId) {
        this.contactId = contactId;  // 设置联系人ID
    }

    // 获取联系人类型
    public String getContactType() {
        return contactType;  // 返回联系人类型
    }

    // 设置联系人类型
    public void setContactType(String contactType) {
        this.contactType = contactType;  // 设置联系人类型
    }

    // 获取联系人昵称
    public String getNickName() {
        return nickName;  // 返回联系人昵称
    }

    // 设置联系人昵称
    public void setNickName(String nickName) {
        this.nickName = nickName;  // 设置联系人昵称
    }

    // 获取头像最后更新时间戳
    public Long getAvatarLastUpdate() {
        return avatarLastUpdate;  // 返回头像最后更新时间戳
    }

    // 设置头像最后更新时间戳
    public void setAvatarLastUpdate(Long avatarLastUpdate) {
        this.avatarLastUpdate = avatarLastUpdate;  // 设置头像最后更新时间戳
    }

    // 获取联系人状态
    public Integer getStatus() {
        return status;  // 返回联系人状态
    }

    // 设置联系人状态
    public void setStatus(Integer status) {
        this.status = status;  // 设置联系人状态
    }

    // 获取联系人状态的名称，通过状态值获取枚举描述
    public String getStatusName() {
        UserContactStatusEnum statusEnum = UserContactStatusEnum.getByStatus(status);  // 根据状态值获取对应的状态枚举
        return statusEnum == null ? null : statusEnum.getDesc();  // 如果状态枚举为空，返回null，否则返回状态的描述
    }

    // 设置联系人状态名称（通常不需要手动设置，这个字段是由getStatusName方法动态生成的）
    public void setStatusName(String statusName) {
        this.statusName = statusName;  // 设置状态名称
    }

    // 获取联系人性别
    public Integer getSex() {
        return sex;  // 返回联系人性别
    }

    // 设置联系人性别
    public void setSex(Integer sex) {
        this.sex = sex;  // 设置联系人性别
    }

    // 获取联系人所在地区名称
    public String getAreaName() {
        return areaName;  // 返回联系人所在地区名称
    }

    // 设置联系人所在地区名称
    public void setAreaName(String areaName) {
        this.areaName = areaName;  // 设置联系人所在地区名称
    }
}
