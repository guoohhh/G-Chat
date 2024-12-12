package com.easychat.entity.enums;


public enum MessageTypeEnum {
    INIT(0, "", "连接WS获取信息"),
    ADD_FRIEND(1, "", "添加好友打招呼消息"),
    CHAT(2, "", "普通聊天消息"),
    GROUP_CREATE(3, "群组已经创建好，可以和好友一起畅聊了", "群创建成功"),
    CONTACT_APPLY(4, "", "好友申请"),
    MEDIA_CHAT(5, "", "媒体文件"),
    FILE_UPLOAD(6, "", "文件上传完成"),
    FORCE_OFF_LINE(7, "", "强制下线"),
    DISSOLUTION_GROUP(8, "群聊已解散", "解散群聊"),
    ADD_GROUP(9, "%s加入了群组", "加入群聊"),
    CONTACT_NAME_UPDATE(10, "", "更新群昵称"),
    LEAVE_GROUP(11, "%s退出了群聊", "退出群聊"),
    REMOVE_GROUP(12, "%s被管理员移出了群聊", "被管理员移出了群聊"),
    ADD_FRIEND_SELF(13, "", "添加好友打招呼消息发送给自己");

    private Integer type;         // 消息类型的数值表示
    private String initMessage;   // 初始化消息内容（部分类型有初始化消息内容）
    private String desc;          // 消息类型的描述信息

    /**
     * 构造函数，用于初始化每个枚举常量的 `type`、`initMessage` 和 `desc` 字段。
     * @param type 消息类型的数值（0, 1, 2 等）
     * @param initMessage 初始化消息内容（用于某些特定类型）
     * @param desc 消息类型的描述信息（如 "普通聊天消息"）
     */
    MessageTypeEnum(Integer type, String initMessage, String desc) {
        this.type = type;
        this.initMessage = initMessage;
        this.desc = desc;
    }

    /**
     * 根据消息类型数值获取对应的枚举项
     * @param type 消息类型的数值（0, 1, 2 等）
     * @return 对应的 MessageTypeEnum 枚举项，如果没有找到，返回 null
     */
    public static MessageTypeEnum getByType(Integer type) {
        // 遍历所有的 MessageTypeEnum 枚举常量
        for (MessageTypeEnum item : MessageTypeEnum.values()) {
            // 如果当前枚举项的 type 与传入的 type 相同，返回该枚举项
            if (item.getType().equals(type)) {
                return item;
            }
        }
        // 如果没有找到匹配的枚举常量，返回 null
        return null;
    }

    /**
     * 获取消息类型的数值表示
     * @return 消息类型的数值（如 0 表示 "连接WS获取信息"，1 表示 "添加好友打招呼消息" 等）
     */
    public Integer getType() {
        return type;
    }

    /**
     * 获取初始化消息内容
     * @return 初始化消息内容（部分类型有初始化消息内容，如群创建时的提示消息）
     */
    public String getInitMessage() {
        return initMessage;
    }

    /**
     * 获取消息类型的描述信息
     * @return 消息类型的描述信息（如 "普通聊天消息"、"群创建成功" 等）
     */
    public String getDesc() {
        return desc;
    }
}