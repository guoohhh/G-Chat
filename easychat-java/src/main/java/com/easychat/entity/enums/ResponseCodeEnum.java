package com.easychat.entity.enums;

/**
 * 响应码枚举类
 * 用于定义常见的 HTTP 响应码和相关的消息描述，用于统一管理 API 响应的状态和提示信息。
 */
public enum ResponseCodeEnum {

    // 定义不同的响应码及其对应的消息描述
    CODE_200(200, "请求成功"),  // 200：请求成功
    CODE_404(404, "请求地址不存在"),  // 404：请求的地址不存在
    CODE_600(600, "请求参数错误"),  // 600：请求参数错误
    CODE_601(601, "信息已经存在"),  // 601：信息已存在
    CODE_602(602, "文件不存在"),  // 602：文件不存在
    CODE_500(500, "服务器返回错误，请联系管理员"),  // 500：服务器错误
    CODE_901(901, "登录超时"),  // 901：登录超时
    CODE_902(902, "您不是对方的好友，请先向好友发送朋友验证申请"),  // 902：不是对方的好友，需要验证申请
    CODE_903(903, "你已经不在群聊，请重新加入群聊");  // 903：不在群聊，需要重新加入

    // 响应码的整数值
    private Integer code;

    // 响应消息的描述
    private String msg;

    /**
     * 构造函数，初始化响应码枚举的 code 和 msg 字段
     * @param code 响应码
     * @param msg 响应消息描述
     */
    ResponseCodeEnum(Integer code, String msg) {
        this.code = code;  // 设置响应码的值
        this.msg = msg;  // 设置响应消息描述
    }

    /**
     * 获取响应码
     * @return 当前枚举常量的响应码
     */
    public Integer getCode() {
        return code;  // 返回响应码
    }

    /**
     * 获取响应消息
     * @return 当前枚举常量的响应消息描述
     */
    public String getMsg() {
        return msg;  // 返回响应消息描述
    }
}
