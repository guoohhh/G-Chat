package com.easychat.utils;

import org.springframework.beans.BeanUtils;  // 导入 Spring 框架中的 BeanUtils 类，用于进行 JavaBean 属性的复制

import java.util.ArrayList;  // 导入 ArrayList 类，用于创建列表
import java.util.List;  // 导入 List 接口，表示一个列表

public class CopyTools {

    /**
     * 将源对象列表中的每个对象的属性复制到目标类型的新对象中
     *
     * @param sList 源对象列表，包含多个源类型的对象
     * @param classz 目标对象的类型，用于通过反射创建目标对象的实例
     * @param <T> 目标对象的类型
     * @param <S> 源对象的类型
     * @return 返回目标对象类型的列表，列表中的每个元素是源对象属性复制后的目标对象
     */
    public static <T, S> List<T> copyList(List<S> sList, Class<T> classz) {
        List<T> list = new ArrayList<T>();  // 创建一个新的空的目标类型的 ArrayList 列表，用于存储目标对象

        // 遍历源列表中的每一个源对象
        for (S s : sList) {
            T t = null;  // 初始化目标对象 t 为 null

            try {
                t = classz.newInstance();  // 通过反射使用目标对象的 Class 类型创建一个新的实例
            } catch (Exception e) {
                e.printStackTrace();  // 捕获并打印反射过程中可能发生的异常，例如实例化失败
            }

            // 使用 Spring 的 BeanUtils.copyProperties 方法将源对象 s 的属性复制到目标对象 t 中
            BeanUtils.copyProperties(s, t);  // 将源对象 s 的属性值复制到目标对象 t 中

            list.add(t);  // 将复制后的目标对象 t 添加到目标列表 list 中
        }

        return list;  // 返回目标对象列表
    }

    /**
     * 将源对象的属性复制到目标类型的新对象中
     *
     * @param s 源对象，包含需要复制的属性
     * @param classz 目标对象的类型，用于通过反射创建目标对象的实例
     * @param <T> 目标对象的类型
     * @param <S> 源对象的类型
     * @return 返回复制属性后的目标对象
     */
    public static <T, S> T copy(S s, Class<T> classz) {
        T t = null;  // 初始化目标对象 t 为 null

        try {
            t = classz.newInstance();  // 通过反射创建目标类型的实例
        } catch (Exception e) {
            e.printStackTrace();  // 捕获并打印反射过程中可能发生的异常，例如实例化失败
        }

        // 使用 BeanUtils.copyProperties 方法将源对象 s 的属性复制到目标对象 t 中
        BeanUtils.copyProperties(s, t);  // 将源对象 s 的属性值复制到目标对象 t 中

        return t;  // 返回目标对象 t
    }
}
