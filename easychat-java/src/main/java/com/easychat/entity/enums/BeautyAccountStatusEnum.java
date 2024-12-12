package com.easychat.entity.enums;

public enum BeautyAccountStatusEnum {

    // 0: 表示靓号未使用
    NO_USE(0, "未使用"),

    // 1: 表示靓号已使用
    USEED(1, "已使用");

    // status 字段保存靓号的状态（0表示未使用，1表示已使用）
    private Integer status;

    // desc 字段保存对应状态的描述（例如，"未使用" 或 "已使用"）
    private String desc;

    /**
     * 构造方法，初始化靓号状态枚举对象
     * @param status 靓号的状态值
     * @param desc   对应状态的描述信息
     */
    BeautyAccountStatusEnum(Integer status, String desc) {
        this.status = status;
        this.desc = desc;
    }

    /**
     * 根据状态值获取对应的靓号状态枚举对象
     * @param status 靓号的状态值
     * @return 对应的靓号状态枚举对象，如果没有找到匹配的状态，返回 null
     */
    public static BeautyAccountStatusEnum getByStatus(Integer status) {
        for (BeautyAccountStatusEnum item : BeautyAccountStatusEnum.values()) {
            if (item.getStatus().equals(status)) {
                return item; // 找到对应的枚举对象，返回
            }
        }
        return null; // 如果没有找到，返回 null
    }

    /**
     * 获取靓号状态值
     * @return 靓号状态值
     */
    public Integer getStatus() {
        return status;
    }

    /**
     * 获取靓号状态描述
     * @return 靓号状态的描述信息
     */
    public String getDesc() {
        return desc;
    }

    /**
     * 设置靓号状态描述
     * @param desc 设置新的描述信息
     */
    public void setDesc(String desc) {
        this.desc = desc;
    }
}
