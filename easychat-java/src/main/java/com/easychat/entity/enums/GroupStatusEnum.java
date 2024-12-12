package com.easychat.entity.enums;

/**
 * 群组状态枚举
 * 该枚举类用于表示群组的状态，有两种状态：
 * - NORMAL：正常状态
 * - DISSOLUTION：解散状态
 */
public enum GroupStatusEnum {

    // 定义枚举常量，每个常量都包含两个属性：status 和 desc
    NORMAL(1, "正常"),    // 群组正常状态，status 值为 1，描述为 "正常"
    DISSOLUTION(0, "解散"); // 群组解散状态，status 值为 0，描述为 "解散"

    private Integer status;  // 用于存储群组状态的数值（如：1表示正常，0表示解散）
    private String desc;     // 用于存储群组状态的描述（如：正常或解散）

    /**
     * 构造函数，用于初始化枚举常量的 status 和 desc 字段。
     * @param status 群组状态的数值表示（1 或 0）
     * @param desc 群组状态的描述信息（如：正常、解散）
     */
    GroupStatusEnum(Integer status, String desc) {
        this.status = status;  // 将传入的 status 参数赋值给实例的 status 字段
        this.desc = desc;      // 将传入的 desc 参数赋值给实例的 desc 字段
    }

    /**
     * 根据 status 值获取对应的枚举项
     * @param status 群组状态的数值（1 或 0）
     * @return 对应的 GroupStatusEnum 枚举项，如果没有找到则返回 null
     */
    public static GroupStatusEnum getByStatus(Integer status) {
        // 遍历所有枚举常量
        for (GroupStatusEnum item : GroupStatusEnum.values()) {
            // 如果找到与传入 status 相等的枚举项，返回该枚举项
            if (item.getStatus().equals(status)) {
                return item;
            }
        }
        // 如果没有找到匹配的枚举项，则返回 null
        return null;
    }

    /**
     * 获取群组状态的数值表示
     * @return 群组状态的数值（1 或 0）
     */
    public Integer getStatus() {
        return status;
    }

    /**
     * 获取群组状态的描述信息
     * @return 群组状态的描述信息（如：正常、解散）
     */
    public String getDesc() {
        return desc;
    }
}
