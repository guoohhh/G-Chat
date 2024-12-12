package com.easychat.annotation;  // 定义该注解类所在的包路径，属于 com.easychat.annotation 包

import org.springframework.web.bind.annotation.Mapping;  // 引入 Spring 的 Mapping 注解，用于将注解与 HTTP 映射关联

import java.lang.annotation.*;  // 引入 Java 的注解相关类，用于定义自定义注解

@Target({ElementType.METHOD, ElementType.TYPE})  // 定义注解的作用目标，可以作用于方法或者类
@Retention(RetentionPolicy.RUNTIME)  // 定义注解的生命周期为运行时，即程序运行时可以通过反射获取到该注解
@Documented  // 表示该注解将包含在 Javadoc 中，文档生成时可以显示
@Mapping  // 继承自 Spring 的 Mapping 注解，标识该注解具有 HTTP 映射功能
public @interface GlobalInterceptor {  // 定义一个名为 GlobalInterceptor 的自定义注解，主要用于标识需要拦截的请求方法或类

    /**
     * 校验登录
     *
     * @return 默认值为 true，表示该方法或类需要校验登录状态
     */
    boolean checkLogin() default true;  // 校验用户登录状态，默认需要校验

    /**
     * 校验管理员
     *
     * @return 默认值为 false，表示默认不需要校验管理员权限
     */
    boolean checkAdmin() default false;  // 校验是否为管理员，默认不需要校验

}
