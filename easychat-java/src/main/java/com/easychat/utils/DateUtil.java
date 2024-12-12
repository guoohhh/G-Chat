package com.easychat.utils;

import java.text.ParseException;  // 导入用于处理日期解析异常的类
import java.text.SimpleDateFormat;  // 导入用于日期格式化的类
import java.util.Date;  // 导入用于表示日期和时间的类
import java.util.HashMap;  // 导入 HashMap 类，用于存储线程安全的日期格式对象
import java.util.Map;  // 导入 Map 接口，用于存储不同日期格式的缓存

// DateUtil 类用于日期的格式化和解析，并通过线程安全的机制提高效率
public class DateUtil {

    // 创建一个锁对象，用于同步多线程操作
    private static final Object lockObj = new Object();

    // 用于缓存不同日期格式的 SimpleDateFormat 对象，确保线程安全
    private static Map<String, ThreadLocal<SimpleDateFormat>> sdfMap = new HashMap<String, ThreadLocal<SimpleDateFormat>>();

    /**
     * 获取 SimpleDateFormat 对象，采用线程安全的机制。
     * 使用缓存来避免每次格式化或解析时都创建新的 SimpleDateFormat 对象。
     *
     * @param pattern 日期格式模式
     * @return 返回一个 SimpleDateFormat 对象
     */
    private static SimpleDateFormat getSdf(final String pattern) {
        // 先从缓存中查找对应的 ThreadLocal<SimpleDateFormat> 对象
        ThreadLocal<SimpleDateFormat> tl = sdfMap.get(pattern);

        if (tl == null) {  // 如果缓存中没有该模式的 SimpleDateFormat
            synchronized (lockObj) {  // 对操作进行同步，确保线程安全
                tl = sdfMap.get(pattern);  // 再次检查缓存中是否已经有该模式的 SimpleDateFormat
                if (tl == null) {  // 如果还是没有
                    // 创建新的 ThreadLocal<SimpleDateFormat> 对象，并在其中创建一个新的 SimpleDateFormat
                    tl = new ThreadLocal<SimpleDateFormat>() {
                        @Override
                        protected SimpleDateFormat initialValue() {
                            // 每个线程会在这里创建一个 SimpleDateFormat 对象，使用指定的日期模式
                            return new SimpleDateFormat(pattern);
                        }
                    };
                    sdfMap.put(pattern, tl);  // 将新的 ThreadLocal<SimpleDateFormat> 对象加入缓存
                }
            }
        }

        // 返回当前线程对应的 SimpleDateFormat 对象
        return tl.get();
    }

    /**
     * 将 Date 对象格式化为指定模式的字符串
     *
     * @param date    要格式化的 Date 对象
     * @param pattern 日期格式模式
     * @return 格式化后的日期字符串
     */
    public static String format(Date date, String pattern) {
        // 调用 getSdf 方法获取指定模式的 SimpleDateFormat 对象，并格式化日期
        return getSdf(pattern).format(date);
    }

    /**
     * 将指定的日期字符串解析为 Date 对象
     *
     * @param dateStr 日期字符串
     * @param pattern 日期格式模式
     * @return 解析得到的 Date 对象，如果解析失败则返回当前日期
     */
    public static Date parse(String dateStr, String pattern) {
        try {
            // 调用 getSdf 方法获取指定模式的 SimpleDateFormat 对象，并解析日期字符串
            return getSdf(pattern).parse(dateStr);
        } catch (ParseException e) {  // 捕获日期解析异常
            e.printStackTrace();  // 输出异常信息
        }
        // 如果解析失败，返回当前日期
        return new Date();
    }
}
