package com.easychat.utils;

import com.alibaba.fastjson.JSON;  // 导入 Alibaba Fastjson 库中的 JSON 类，用于处理 JSON 对象的转换
import com.alibaba.fastjson.JSONArray;  // 导入 Alibaba Fastjson 库中的 JSONArray 类，用于处理 JSON 数组的转换
import com.alibaba.fastjson.JSONObject;  // 导入 Alibaba Fastjson 库中的 JSONObject 类，用于处理 JSON 对象的转换
import com.alibaba.fastjson.serializer.SerializerFeature;  // 导入 Fastjson 的序列化特性类，用于指定序列化的行为
import com.easychat.entity.enums.ResponseCodeEnum;  // 导入自定义的响应代码枚举类，用于标准化 API 响应
import com.easychat.exception.BusinessException;  // 导入自定义的业务异常类，用于抛出业务错误
import org.slf4j.Logger;  // 导入 SLF4J 的 Logger 类，用于记录日志
import org.slf4j.LoggerFactory;  // 导入 SLF4J 的 LoggerFactory 类，用于创建 Logger 对象

import java.util.List;  // 导入 List 接口，用于存储多个元素的集合

// JsonUtils 类是一个工具类，用于处理对象与 JSON 字符串之间的转换
public class JsonUtils {
    // 创建日志对象，用于记录日志
    private static final Logger logger = LoggerFactory.getLogger(JsonUtils.class);

    // 设置 Fastjson 的序列化特性，WriteMapNullValue 表示序列化时将 null 值的字段也包含在内
    public static SerializerFeature[] FEATURES = new SerializerFeature[]{SerializerFeature.WriteMapNullValue};

    /**
     * 将对象转换为 JSON 字符串
     *
     * @param obj 需要转换的对象
     * @return 返回转换后的 JSON 字符串
     */
    public static String convertObj2Json(Object obj) {
        // 使用 Fastjson 的 toJSONString 方法将对象转换为 JSON 字符串，并应用序列化特性
        return JSON.toJSONString(obj, FEATURES);
    }

    /**
     * 将 JSON 字符串转换为指定类型的对象
     *
     * @param json JSON 字符串
     * @param classz 目标对象类型
     * @param <T> 泛型类型
     * @return 转换后的对象
     * @throws BusinessException 如果解析失败，抛出业务异常
     */
    public static <T> T convertJson2Obj(String json, Class<T> classz) {
        try {
            // 使用 Fastjson 的 parseObject 方法将 JSON 字符串转换为指定类型的对象
            return JSONObject.parseObject(json, classz);
        } catch (Exception e) {
            // 捕获转换过程中的异常，记录错误日志并抛出自定义业务异常
            logger.error("convertJson2Obj异常，json:{}", json);
            throw new BusinessException(ResponseCodeEnum.CODE_601);  // 抛出业务异常，提示 JSON 转换错误
        }
    }

    /**
     * 将 JSON 数组字符串转换为 List 集合
     *
     * @param json JSON 数组字符串
     * @param classz 目标对象类型
     * @param <T> 泛型类型
     * @return 转换后的 List 集合
     * @throws BusinessException 如果解析失败，抛出业务异常
     */
    public static <T> List<T> convertJsonArray2List(String json, Class<T> classz) {
        try {
            // 使用 Fastjson 的 parseArray 方法将 JSON 数组字符串转换为 List 集合
            return JSONArray.parseArray(json, classz);
        } catch (Exception e) {
            // 捕获转换过程中的异常，记录错误日志并抛出自定义业务异常
            logger.error("convertJsonArray2List,json:{}", json, e);
            throw new BusinessException(ResponseCodeEnum.CODE_601);  // 抛出业务异常，提示 JSON 数组转换错误
        }
    }
}
