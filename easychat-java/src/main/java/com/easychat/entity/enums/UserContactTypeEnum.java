package com.easychat.entity.enums;

import com.easychat.utils.StringTools;

/**
 * 用户联系类型枚举类：表示用户的联系类型，可能是个人用户（USER）或群组（GROUP）。
 */
public enum UserContactTypeEnum {
    // 枚举常量定义：USER 表示个人用户，GROUP 表示群组
    USER(0, "U", "好友"),
    GROUP(1, "G", "群");

    private Integer type;   // 存储联系类型的整数值（0表示个人用户，1表示群组）
    private String prefix;  // 存储联系类型的前缀字符（"U" 表示用户，"G" 表示群组）
    private String desc;    // 存储联系类型的描述信息（如“好友”和“群”）

    /**
     * 构造函数：初始化每个枚举常量的属性。
     * @param type    联系类型的整数值
     * @param prefix  联系类型的前缀字符
     * @param desc    联系类型的描述信息
     */
    UserContactTypeEnum(Integer type, String prefix, String desc) {
        this.type = type;
        this.prefix = prefix;
        this.desc = desc;
    }

    /**
     * 获取前缀字符。
     * @return 返回前缀字符（例如 "U" 或 "G"）
     */
    public String getPrefix() {
        return prefix;
    }

    /**
     * 获取联系类型的整数值。
     * @return 返回整数值（例如 0 表示用户，1 表示群组）
     */
    public Integer getType() {
        return type;
    }

    /**
     * 获取联系类型的描述信息。
     * @return 返回描述（例如 "好友" 或 "群"）
     */
    public String getDesc() {
        return desc;
    }

    /**
     * 根据名称（字符串形式）获取对应的枚举常量。
     * 传入的名称会被转换成大写并匹配枚举常量的名称（name()）。
     * @param name 枚举常量的名称（例如 "USER" 或 "GROUP"）
     * @return 如果匹配成功，返回对应的枚举常量；如果没有匹配成功，返回 null。
     */
    public static UserContactTypeEnum getByName(String name) {
        try {
            // 判断传入的名称是否为空
            if (StringTools.isEmpty(name)) {
                return null; // 如果为空，返回 null
            }
            // 将名称转换为大写并匹配对应的枚举常量
            return UserContactTypeEnum.valueOf(name.toUpperCase());
        } catch (IllegalArgumentException e) {
            // 如果没有匹配的枚举常量，捕获异常并返回 null
            return null;
        }
    }

    /**
     * 根据前缀字符获取对应的枚举常量。
     * 传入的前缀会与枚举常量的前缀字段进行比较。
     * @param prefix 前缀字符（例如 "U" 或 "G"）
     * @return 如果找到匹配的枚举常量，返回该枚举；如果没有找到，返回 null。
     */
    public static UserContactTypeEnum getByPrefix(String prefix) {
        // 判断传入的前缀是否为空或为空白字符
        if (StringTools.isEmpty(prefix) || prefix.trim().length() == 0) {
            return null; // 如果为空，返回 null
        }
        // 取前缀的第一个字符进行匹配
        prefix = prefix.substring(0, 1);
        // 遍历所有的枚举常量，查找匹配的前缀
        for (UserContactTypeEnum typeEnum : UserContactTypeEnum.values()) {
            // 比较前缀
            if (typeEnum.getPrefix().equals(prefix)) {
                return typeEnum; // 如果匹配成功，返回该枚举常量
            }
        }
        return null; // 如果没有匹配，返回 null
    }
}
