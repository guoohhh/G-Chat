package com.easychat.entity.enums;

/**
 * 媒体文件类型枚举类
 * 用于表示不同类型的媒体文件，包括图片、视频和文件。
 */
public enum MediaFileTypeEnum {

    // 枚举常量定义，包含三种媒体文件类型：图片、视频和文件
    IMAGE(0, "图片"),   // 图片类型，type 为 0，描述为 "图片"
    VIDEO(1, "视频"),   // 视频类型，type 为 1，描述为 "视频"
    FILE(2, "文件");    // 文件类型，type 为 2，描述为 "文件"

    private Integer type;   // 媒体文件类型的数值表示（0：图片，1：视频，2：文件）
    private String desc;    // 媒体文件类型的描述信息（如：图片、视频、文件）

    /**
     * 构造函数，用于初始化每个枚举常量的 `type` 和 `desc` 字段。
     * @param type 媒体文件类型的数值表示（0、1、2）
     * @param desc 媒体文件类型的描述信息（如：图片、视频、文件）
     */
    MediaFileTypeEnum(Integer type, String desc) {
        this.type = type;   // 设置媒体文件类型的数值
        this.desc = desc;   // 设置媒体文件类型的描述信息
    }

    /**
     * 获取媒体文件类型的数值表示
     * @return 媒体文件类型的数值（0：图片，1：视频，2：文件）
     */
    public Integer getType() {
        return type;
    }

    /**
     * 获取媒体文件类型的描述信息
     * @return 媒体文件类型的描述信息（如：图片、视频、文件）
     */
    public String getDesc() {
        return desc;
    }

    /**
     * 根据 type 获取对应的枚举常量
     * @param type 媒体文件类型的数值表示（0、1、2）
     * @return 对应的 MediaFileTypeEnum 枚举常量，如果没有找到，返回 null
     */
    public static MediaFileTypeEnum getByType(Integer type) {
        // 遍历所有的 MediaFileTypeEnum 枚举常量
        for (MediaFileTypeEnum item : MediaFileTypeEnum.values()) {
            // 如果当前枚举项的 type 与传入的 type 相同，返回该枚举项
            if (item.getType().equals(type)) {
                return item;
            }
        }
        // 如果没有找到匹配的枚举常量，返回 null
        return null;
    }
}
