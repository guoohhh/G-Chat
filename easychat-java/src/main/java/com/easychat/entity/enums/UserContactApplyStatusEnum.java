package com.easychat.entity.enums;

import com.easychat.utils.StringTools;

/**
 * 用户联系申请状态枚举类
 * 用于定义用户之间联系申请的不同状态，管理用户联系申请的处理状态。
 * 可能的状态包括：待处理、已同意、已拒绝、已拉黑。
 */
public enum UserContactApplyStatusEnum {

    // 定义枚举常量，每个常量代表一种用户联系申请状态
    INIT(0, "待处理"),       // 0：待处理状态，表示申请尚未处理
    PASS(1, "已同意"),       // 1：已同意，表示申请已经通过
    REJECT(2, "已拒绝"),     // 2：已拒绝，表示申请被拒绝
    BLACKLIST(3, "已拉黑");   // 3：已拉黑，表示该用户已被拉黑

    // 状态值
    private Integer status;

    // 状态描述信息
    private String desc;

    /**
     * 构造函数，初始化用户联系申请状态的枚举常量
     * @param status 状态值
     * @param desc 状态描述
     */
    UserContactApplyStatusEnum(Integer status, String desc) {
        this.status = status;   // 设置状态值
        this.desc = desc;       // 设置状态描述
    }

    /**
     * 获取状态值
     * @return 当前枚举常量的状态值
     */
    public Integer getStatus() {
        return status;  // 返回状态值
    }

    /**
     * 获取状态描述
     * @return 当前枚举常量的状态描述
     */
    public String getDesc() {
        return desc;  // 返回状态描述
    }

    /**
     * 根据字符串状态获取对应的枚举
     * @param status 状态的字符串值
     * @return 对应的枚举对象，若无匹配则返回 null
     */
    public static UserContactApplyStatusEnum getByStatus(String status) {
        try {
            if (StringTools.isEmpty(status)) {  // 检查状态是否为空
                return null;  // 如果为空，返回 null
            }
            return UserContactApplyStatusEnum.valueOf(status.toUpperCase());  // 根据传入的字符串值返回对应的枚举常量
        } catch (IllegalArgumentException e) {
            return null;  // 如果没有匹配的枚举常量，则捕获异常并返回 null
        }
    }

    /**
     * 根据整数状态值获取对应的枚举
     * @param status 状态的整数值
     * @return 对应的枚举对象，若无匹配则返回 null
     */
    public static UserContactApplyStatusEnum getByStatus(Integer status) {
        for (UserContactApplyStatusEnum item : UserContactApplyStatusEnum.values()) {
            if (item.getStatus().equals(status)) {  // 比较传入的状态值与枚举常量中的状态值
                return item;  // 找到匹配的枚举常量并返回
            }
        }
        return null;  // 如果没有匹配的状态，返回 null
    }
}
