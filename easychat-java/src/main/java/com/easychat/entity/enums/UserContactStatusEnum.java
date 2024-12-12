package com.easychat.entity.enums;

import com.easychat.utils.StringTools;

// 定义一个枚举类 UserContactStatusEnum，表示用户的联系人状态
public enum UserContactStatusEnum {
    NOT_FRIEND(0, "非好友"), // 0：表示非好友
    FRIEND(1, "好友"), // 1：表示好友
    DEL(2, "已删除好友"), // 2：表示已删除的好友
    DEL_BE(3, "被好友删除"), // 3：表示被好友删除
    BLACKLIST(4, "已拉黑好友"), // 4：表示已将该好友拉入黑名单
    BLACKLIST_BE(5, "被好友拉黑"), // 5：表示被该好友拉入黑名单
    BLACKLIST_BE_FIRST(6, "首次被好友拉黑"); // 6：表示首次被好友拉入黑名单

    private Integer status; // 用于表示联系人状态的整数值
    private String desc; // 用于描述该状态的文字说明

    // 构造方法，用于初始化每个枚举常量的 status 和 desc
    UserContactStatusEnum(Integer status, String desc) {
        this.status = status;
        this.desc = desc;
    }

    /**
     * 根据状态的字符串值获取对应的枚举常量
     * @param status 状态的字符串值
     * @return 返回对应的枚举常量，如果没有找到则返回 null
     */
    public static UserContactStatusEnum getByStatus(String status) {
        try {
            // 如果传入的状态字符串为空，返回 null
            if (StringTools.isEmpty(status)) {
                return null;
            }
            // 将状态字符串转化为大写并查找对应的枚举常量
            return UserContactStatusEnum.valueOf(status.toUpperCase());
        } catch (IllegalArgumentException e) {
            // 如果传入的状态值不能匹配任何枚举常量，捕获异常并返回 null
            return null;
        }
    }

    /**
     * 根据整数状态值获取对应的枚举常量
     * @param status 状态的整数值
     * @return 返回对应的枚举常量，如果没有找到则返回 null
     */
    public static UserContactStatusEnum getByStatus(Integer status) {
        // 遍历所有的枚举常量
        for (UserContactStatusEnum item : UserContactStatusEnum.values()) {
            // 比较当前枚举常量的 status 和传入的 status 是否相等
            if (item.getStatus().equals(status)) {
                return item; // 如果找到了匹配的枚举常量，返回它
            }
        }
        return null; // 如果没有找到匹配的状态，返回 null
    }

    // 获取状态值（整数）
    public Integer getStatus() {
        return status;
    }

    // 获取状态描述（字符串）
    public String getDesc() {
        return desc;
    }
}
