package com.easychat.utils;

import com.easychat.entity.constants.Constants;  // 导入常量类，常用常量存放位置，通常包括固定的值、配置项等
import com.easychat.entity.enums.UserContactTypeEnum;  // 导入用户联系方式类型的枚举类，可能用于用户类型的标识
import com.easychat.exception.BusinessException;  // 导入自定义的业务异常类，用于处理业务逻辑中的错误
import org.apache.commons.codec.digest.DigestUtils;  // 导入 Apache Commons Codec 库中的 DigestUtils 类，提供 MD5、SHA 等加密方法
import org.apache.commons.lang3.RandomStringUtils;  // 导入 Apache Commons Lang 库中的 RandomStringUtils 类，提供随机字符串生成工具
import org.apache.commons.lang3.StringUtils;  // 导入 Apache Commons Lang 库中的 StringUtils 类，提供常用的字符串操作工具方法

import java.lang.reflect.Field;  // 导入 Java 反射相关类，Field 用于获取类的字段
import java.lang.reflect.Method;  // 导入 Java 反射相关类，Method 用于获取类的方法
import java.util.Arrays;  // 导入 Java 标准库中的 Arrays 类，用于处理数组（如排序、转换等）


public class StringTools {

    /**
     * 校验传入的对象参数是否满足非空条件
     *
     * @param param 需要校验的对象
     * @throws BusinessException 如果对象的所有字段都为空则抛出异常
     */
    public static void checkParam(Object param) {
        try {
            // 获取对象的所有字段
            Field[] fields = param.getClass().getDeclaredFields();  // 获取传入对象的所有字段
            boolean notEmpty = false;  // 标记是否存在非空字段
            for (Field field : fields) {  // 遍历字段
                // 生成 getter 方法名（如 getFieldName）
                String methodName = "get" + StringTools.upperCaseFirstLetter(field.getName());  // 根据字段名生成 getter 方法名
                Method method = param.getClass().getMethod(methodName);  // 通过反射获取 getter 方法
                // 获取字段值
                Object object = method.invoke(param);  // 调用 getter 方法，获取字段的值

                // 检查字段是否为空，如果是字符串则判断是否为空，非字符串则只判断是否为 null
                if (object != null && object instanceof java.lang.String && !StringTools.isEmpty(object.toString())
                        || object != null && !(object instanceof java.lang.String)) {  // 判断字符串是否为空，或其他对象是否为 null
                    notEmpty = true;  // 如果发现非空字段，设置标记为 true
                    break;  // 一旦找到非空字段，跳出循环
                }
            }
            // 如果所有字段都为空，抛出业务异常
            if (!notEmpty) {
                throw new BusinessException("多参数更新，删除，必须有非空条件");  // 如果没有非空字段，抛出自定义业务异常
            }
        } catch (BusinessException e) {
            throw e;  // 如果捕获到业务异常，直接抛出
        } catch (Exception e) {
            e.printStackTrace();  // 打印异常栈信息
            throw new BusinessException("校验参数是否为空失败");  // 发生其他异常时抛出通用异常
        }
    }


    /**
     * 将传入的字符串首字母大写
     *
     * @param field 输入的字符串
     * @return 首字母大写的字符串
     */
    public static String upperCaseFirstLetter(String field) {
        if (isEmpty(field)) {
            return field; // 如果字符串为空，直接返回
        }
        // 如果第二个字母是大写，则不改变
        if (field.length() > 1 && Character.isUpperCase(field.charAt(1))) {
            return field;
        }
        // 否则将第一个字母大写
        return field.substring(0, 1).toUpperCase() + field.substring(1);
    }

    /**
     * 检查字符串是否为数字
     *
     * @param str 输入的字符串
     * @return 如果是数字返回 true，否则返回 false
     */
    public static boolean isNumber(String str) {
        String checkNumber = "^[0-9]+$"; // 定义正则表达式，匹配数字
        if (null == str) {
            return false; // 如果字符串为 null，返回 false
        }
        return str.matches(checkNumber); // 如果匹配数字正则表达式，返回 true
    }

    /**
     * 检查字符串是否为空
     *
     * @param str 输入的字符串
     * @return 如果字符串为空或为 "null" 或 "\u0000"，返回 true，否则返回 false
     */
    public static boolean isEmpty(String str) {
        if (null == str || "".equals(str) || "null".equals(str) || "\u0000".equals(str)) {
            return true; // 如果为 null 或为空，返回 true
        } else if ("".equals(str.trim())) {
            return true; // 如果去除空格后为空，返回 true
        }
        return false;
    }

    /**
     * 生成指定长度的随机数字字符串
     *
     * @param count 随机数字的长度
     * @return 随机数字字符串
     */
    public static final String getRandomNumber(Integer count) {
        return RandomStringUtils.random(count, false, true); // 生成数字字符串
    }

    /**
     * 生成指定长度的随机字符串
     *
     * @param count 随机字符串的长度
     * @return 随机字符串
     */
    public static final String getRandomString(Integer count) {
        return RandomStringUtils.random(count, true, true); // 生成包含字母和数字的随机字符串
    }

    /**
     * MD5 加密
     *
     * @param originString 输入字符串
     * @return MD5 加密后的字符串，如果输入为空则返回 null
     */
    public static String encodeByMD5(String originString) {
        return StringTools.isEmpty(originString) ? null : DigestUtils.md5Hex(originString); // MD5 加密
    }

    /**
     * 获取文件的后缀名
     *
     * @param fileName 文件名
     * @return 文件后缀名
     */
    public static String getFileSuffix(String fileName) {
        // 获取最后一个 "." 后的字符串，即文件后缀
        String suffix = fileName.substring(fileName.lastIndexOf("."));
        return suffix;
    }

    /**
     * 检查文件路径是否合法
     *
     * @param path 文件路径
     * @return 如果路径为空或不包含非法字符，则返回 true，否则返回 false
     */
    public static boolean pathIsOk(String path) {
        if (StringTools.isEmpty(path)) {
            return true; // 如果路径为空，返回 true
        }
        // 检查路径是否包含非法字符（如 "../"）
        if (path.contains("../") || path.contains("..\\")) {
            return false; // 如果路径包含非法路径，返回 false
        }
        return true;
    }

    /**
     * 获取群组 ID
     *
     * @return 群组 ID
     */
    public static final String getGroupId() {
        return UserContactTypeEnum.GROUP.getPrefix() + getRandomNumber(Constants.LENGTH_11); // 获取群组 ID
    }

    /**
     * 获取用户 ID
     *
     * @return 用户 ID
     */
    public static final String getUserId() {
        return UserContactTypeEnum.USER.getPrefix() + getRandomNumber(Constants.LENGTH_11); // 获取用户 ID
    }

    /**
     * 获取用户之间的聊天会话 ID
     *
     * @param userIds 用户 ID 数组
     * @return 用户之间的聊天会话 ID
     */
    public static final String getChatSessionId4User(String[] userIds) {
        Arrays.sort(userIds); // 排序用户 ID 数组，确保顺序一致
        return encodeByMD5(StringUtils.join(userIds, "")); // 将用户 ID 拼接成字符串后进行 MD5 加密
    }

    /**
     * 清除 HTML 标签
     *
     * @param content 需要清除 HTML 标签的字符串
     * @return 清除 HTML 标签后的字符串
     */
    public static String cleanHtmlTag(String content) {
        if (isEmpty(content)) {
            return content; // 如果内容为空，直接返回
        }
        content = content.replace("<", "&lt;"); // 将 < 替换为 &lt;
        content = content.replace("\r\n", "<br>"); // 将换行符替换为 <br>
        content = content.replace("\n", "<br>"); // 将换行符替换为 <br>
        return content;
    }

    /**
     * 重置消息内容
     *
     * @param content 消息内容
     * @return 清除 HTML 标签后的消息内容
     */
    public static String resetMessageContent(String content) {
        content = cleanHtmlTag(content); // 清除 HTML 标签
        return content;
    }

    /**
     * 获取群组聊天会话 ID
     *
     * @param groupId 群组 ID
     * @return 群组聊天会话 ID
     */
    public static final String getChatSessionId4Group(String groupId) {
        return encodeByMD5(groupId); // 对群组 ID 进行 MD5 加密
    }
}
