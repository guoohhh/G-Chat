package com.easychat.entity.enums;

// 定义了一个枚举类型 AppUpdateFileTypeEnum，表示应用更新文件的类型
public enum AppUpdateFileTypeEnum {

    // 枚举常量 LOCAL 和 OUTER_LINK 分别代表本地文件和外链文件
    LOCAL(0, "本地"),          // LOCAL 对应 type=0，表示“本地”文件
    OUTER_LINK(1, "外链");     // OUTER_LINK 对应 type=1，表示“外链”文件

    private Integer type;       // 枚举项的类型值，表示文件类型的标识
    private String description; // 枚举项的描述，表示文件类型的名称（"本地" 或 "外链"）

    // 枚举构造器，用于初始化枚举实例的 type 和 description 字段
    AppUpdateFileTypeEnum(int type, String description) {
        this.type = type;             // 设置当前枚举项的 type 值
        this.description = description; // 设置当前枚举项的 description 值
    }

    // 获取当前枚举项的 type 值
    public Integer getType() {
        return type; // 返回当前枚举项的 type 值
    }

    // 获取当前枚举项的 description 值
    public String getDescription() {
        return description; // 返回当前枚举项的 description 值
    }

    // 根据 type 值查找对应的枚举项
    public static AppUpdateFileTypeEnum getByType(Integer type) {
        // 遍历所有枚举项，检查其 type 是否与给定的 type 匹配
        for (AppUpdateFileTypeEnum at : AppUpdateFileTypeEnum.values()) {
            if (at.type.equals(type)) {  // 如果枚举项的 type 与给定值匹配
                return at;                // 返回匹配的枚举项
            }
        }
        return null;  // 如果没有匹配的枚举项，返回 null
    }
}
