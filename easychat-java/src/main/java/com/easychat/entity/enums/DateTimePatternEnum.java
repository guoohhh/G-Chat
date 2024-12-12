package com.easychat.entity.enums;

// 定义一个枚举类型，用于表示不同的时间格式模式
public enum DateTimePatternEnum {

    // 定义了三个时间格式模式：'yyyy-MM-dd HH:mm:ss'、'yyyy-MM-dd'、'yyyyMM'
    YYYY_MM_DD_HH_MM_SS("yyyy-MM-dd HH:mm:ss"),  // 完整的日期和时间格式
    YYYY_MM_DD("yyyy-MM-dd"),  // 仅日期格式（年月日）
    YYYYMM("yyyyMM");  // 仅年和月（年月）

    // 存储时间格式的字符串
    private String pattern;

    // 枚举构造函数，接受一个字符串作为时间格式，并初始化 pattern 字段
    DateTimePatternEnum(String pattern) {
        this.pattern = pattern;
    }

    // 获取该枚举项对应的时间格式字符串
    public String getPattern() {
        return pattern;
    }
}
