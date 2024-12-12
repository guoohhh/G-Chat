package com.easychat.entity.enums;

/**
 * 消息状态枚举类
 * 用于表示消息发送的不同状态，如正在发送和已发送。
 */
public enum MessageStatusEnum {

    // 定义两种消息状态：发送中（0）和已发送（1）
    SENDING(0, "发送中"),  // 发送中，type 为 0，描述为 "发送中"
    SENDED(1, "已发送");   // 已发送，type 为 1，描述为 "已发送"

    private Integer status;  // 消息状态的数值（0: 发送中，1: 已发送）
    private String desc;     // 消息状态的描述信息（"发送中" 或 "已发送"）

    /**
     * 构造函数，用于初始化每个枚举常量的 `status` 和 `desc` 字段。
     * @param status 消息状态的数值（0 或 1）
     * @param desc 消息状态的描述信息（如："发送中" 或 "已发送"）
     */
    MessageStatusEnum(Integer status, String desc) {
        this.status = status;   // 设置消息状态的数值
        this.desc = desc;       // 设置消息状态的描述信息
    }

    /**
     * 根据消息状态数值获取对应的枚举项
     * @param status 消息状态的数值（0 或 1）
     * @return 对应的 MessageStatusEnum 枚举项，如果没有找到，返回 null
     */
    public static MessageStatusEnum getByStatus(Integer status) {
        // 遍历所有的 MessageStatusEnum 枚举常量
        for (MessageStatusEnum item : MessageStatusEnum.values()) {
            // 如果当前枚举项的 status 与传入的 status 相同，返回该枚举项
            if (item.getStatus().equals(status)) {
                return item;
            }
        }
        // 如果没有找到匹配的枚举常量，返回 null
        return null;
    }

    /**
     * 获取消息状态的数值（0 或 1）
     * @return 消息状态的数值
     */
    public Integer getStatus() {
        return status;
    }

    /**
     * 获取消息状态的描述信息（如："发送中" 或 "已发送"）
     * @return 消息状态的描述信息
     */
    public String getDesc() {
        return desc;
    }

    /**
     * 设置消息状态的描述信息
     * @param desc 新的描述信息
     */
    public void setDesc(String desc) {
        this.desc = desc;
    }
}
