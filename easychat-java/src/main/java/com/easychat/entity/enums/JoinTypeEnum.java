package com.easychat.entity.enums;

import com.easychat.utils.StringTools;

/**
 * 加入类型枚举类
 * 用于表示群组加入的方式：
 * - JOIN：直接加入
 * - APPLY：需要审核（申请加入）
 */
public enum JoinTypeEnum {

    // 枚举常量定义，包含两种加入方式：直接加入和需要审核
    JOIN(0, "直接加入"),     // 直接加入，type 为 0，描述为 "直接加入"
    APPLY(1, "需要审核");    // 需要审核，type 为 1，描述为 "需要审核"

    private Integer type;  // 加入类型的数值表示（0 或 1）
    private String desc;   // 加入类型的描述信息（如：直接加入、需要审核）

    /**
     * 构造函数，用于初始化每个枚举常量的 type 和 desc 字段
     * @param type 加入类型的数值表示（0 或 1）
     * @param desc 加入类型的描述信息（如：直接加入、需要审核）
     */
    JoinTypeEnum(Integer type, String desc) {
        this.type = type;   // 设置加入类型的数值
        this.desc = desc;   // 设置加入类型的描述信息
    }

    /**
     * 获取加入类型的数值表示
     * @return 加入类型的数值（0 或 1）
     */
    public Integer getType() {
        return type;
    }

    /**
     * 获取加入类型的描述信息
     * @return 加入类型的描述信息（如：直接加入、需要审核）
     */
    public String getDesc() {
        return desc;
    }

    /**
     * 根据名称获取对应的枚举常量
     * @param name 枚举常量的名称（大小写不敏感）
     * @return 对应的 JoinTypeEnum 枚举常量，如果没有匹配项返回 null
     */
    public static JoinTypeEnum getByName(String name) {
        try {
            // 检查传入的名称是否为空
            if (StringTools.isEmpty(name)) {
                return null;
            }
            // 将传入的 name 转换为大写后，使用 valueOf 获取枚举常量
            return JoinTypeEnum.valueOf(name.toUpperCase());
        } catch (IllegalArgumentException e) {
            // 如果 name 无效或没有匹配的枚举常量，返回 null
            return null;
        }
    }

    /**
     * 根据 type 获取对应的枚举常量
     * @param joinType 加入类型的数值（0 或 1）
     * @return 对应的 JoinTypeEnum 枃常量，如果没有找到，返回 null
     */
    public static JoinTypeEnum getByType(Integer joinType) {
        // 遍历所有枚举常量
        for (JoinTypeEnum jonTypeEnum : JoinTypeEnum.values()) {
            // 如果当前枚举常量的 type 与传入的 joinType 匹配，返回该枚举项
            if (jonTypeEnum.getType().equals(joinType)) {
                return jonTypeEnum;
            }
        }
        // 如果没有找到匹配的枚举常量，返回 null
        return null;
    }
}
