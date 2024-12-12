package com.easychat.entity.enums;  // 定义包名，表示该类属于 com.easychat.entity.enums 包

// 定义一个枚举类型 UserStatusEnum，表示用户的状态（禁用、启用）
public enum UserStatusEnum {

    DISABLE(0, "禁用"),  // 禁用状态，整数值0，描述为"禁用"
    ENABLE(1, "启用");   // 启用状态，整数值1，描述为"启用"

    // 枚举项的成员变量
    private Integer status;  // 用户状态的整数值（0表示禁用，1表示启用）
    private String desc;     // 用户状态的描述（"禁用" 或 "启用"）

    // 枚举构造函数，初始化枚举项的状态和描述
    UserStatusEnum(Integer status, String desc) {
        this.status = status;
        this.desc = desc;
    }

    // 根据状态值获取对应的枚举项
    public static UserStatusEnum getByStatus(Integer status) {
        // 遍历枚举值，查找与给定状态匹配的枚举项
        for (UserStatusEnum item : UserStatusEnum.values()) {
            // 如果枚举项的status值与传入的status匹配，则返回该枚举项
            if (item.getStatus().equals(status)) {
                return item;
            }
        }
        return null;  // 如果没有匹配的状态，则返回null
    }

    // 获取该枚举项的状态值
    public Integer getStatus() {
        return status;  // 返回枚举项的状态值（0 或 1）
    }

    // 获取该枚举项的描述
    public String getDesc() {
        return desc;  // 返回枚举项的描述（"禁用" 或 "启用"）
    }

    // 设置该枚举项的描述
    public void setDesc(String desc) {
        this.desc = desc;  // 更新枚举项的描述
    }
}
