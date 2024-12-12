package com.easychat.entity.enums;

// 定义了一个枚举类型 AppUpdateSatusEnum，表示应用更新的发布状态
public enum AppUpdateSatusEnum {

    // 枚举常量 INIT, GRAYSCALE 和 ALL 分别表示应用更新的不同发布状态
    INIT(0, "未发布"),            // INIT 对应 status=0，表示“未发布”
    GRAYSCALE(1, "灰度发布"),     // GRAYSCALE 对应 status=1，表示“灰度发布”
    ALL(2, "全网发布");          // ALL 对应 status=2，表示“全网发布”

    private Integer status;       // 存储状态值，表示发布状态的标识（0, 1, 2）
    private String description;   // 存储状态描述，表示该发布状态的文本描述（如“未发布”）

    // 枚举类构造器，用于初始化每个枚举实例的 status 和 description
    AppUpdateSatusEnum(int status, String description) {
        this.status = status;           // 设置当前枚举实例的 status 值
        this.description = description; // 设置当前枚举实例的 description 值
    }

    // 获取当前枚举实例的状态值（status）
    public Integer getStatus() {
        return status; // 返回当前枚举实例的 status 值
    }

    // 获取当前枚举实例的描述信息（description）
    public String getDescription() {
        return description; // 返回当前枚举实例的 description 值
    }

    // 根据状态值查找对应的枚举实例
    public static AppUpdateSatusEnum getByStatus(Integer status) {
        // 遍历所有的枚举实例，检查其 status 是否与给定的状态匹配
        for (AppUpdateSatusEnum at : AppUpdateSatusEnum.values()) {
            if (at.status.equals(status)) {  // 如果枚举实例的 status 值与传入的 status 相同
                return at;                    // 返回匹配的枚举实例
            }
        }
        return null;  // 如果没有找到匹配的枚举实例，返回 null
    }
}
