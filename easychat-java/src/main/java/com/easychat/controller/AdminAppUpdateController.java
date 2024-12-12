package com.easychat.controller;

import com.easychat.annotation.GlobalInterceptor;
import com.easychat.entity.po.AppUpdate;
import com.easychat.entity.query.AppUpdateQuery;
import com.easychat.entity.vo.ResponseVO;
import com.easychat.service.AppUpdateService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.IOException;

/**
 * App 发布管理 Controller
 * 提供后台管理功能，支持 App 更新信息的分页查询、保存、删除以及发布。
 */
@RestController("adminAppUpdateController")
@RequestMapping("/admin")
@Validated
public class AdminAppUpdateController extends ABaseController {

    // 注入 App 更新服务，用于处理与 App 更新相关的业务逻辑
    @Resource
    private AppUpdateService appUpdateService;

    /**
     * 分页查询更新列表
     * 根据传入的查询条件，分页获取 App 更新记录。
     *
     * @param query 查询条件，包含分页参数和其他筛选条件
     * @return 包含更新列表的响应对象
     */
    @RequestMapping("/loadUpdateList")
    @GlobalInterceptor(checkAdmin = true) // 检查是否具有管理员权限
    public ResponseVO loadUpdateList(AppUpdateQuery query) {
        // 设置默认排序方式为 ID 倒序
        query.setOrderBy("id desc");

        // 调用服务层方法获取分页结果并返回成功响应
        return getSuccessResponseVO(appUpdateService.findListByPage(query));
    }

    /**
     * 保存更新信息
     * 保存或更新 App 发布记录，同时支持上传文件（如安装包）。
     *
     * @param id 更新记录的 ID（用于编辑时指定记录）
     * @param version 版本号
     * @param updateDesc 更新描述信息
     * @param fileType 文件类型（如 APK、IPA 等）
     * @param outerLink 外部链接地址（可选）
     * @param file 上传的文件对象（如安装包文件）
     * @return 保存成功的响应对象
     * @throws IOException 如果文件上传或处理发生异常
     */
    @RequestMapping("/saveUpdate")
    @GlobalInterceptor(checkAdmin = true) // 检查是否具有管理员权限
    public ResponseVO saveUpdate(Integer id,
                                 @NotEmpty String version,
                                 @NotEmpty String updateDesc,
                                 @NotNull Integer fileType,
                                 String outerLink,
                                 MultipartFile file) throws IOException {
        // 创建并填充 App 更新对象
        AppUpdate appUpdate = new AppUpdate();
        appUpdate.setId(id);
        appUpdate.setVersion(version);
        appUpdate.setUpdateDesc(updateDesc);
        appUpdate.setFileType(fileType);
        appUpdate.setOuterLink(outerLink);

        // 调用服务层方法保存或更新记录，同时上传文件
        appUpdateService.saveUpdate(appUpdate, file);

        // 返回成功响应
        return getSuccessResponseVO(null);
    }

    /**
     * 删除更新信息
     * 根据指定 ID 删除对应的 App 更新记录。
     *
     * @param id 更新记录的 ID
     * @return 删除成功的响应对象
     */
    @RequestMapping("/delUpdate")
    @GlobalInterceptor(checkAdmin = true) // 检查是否具有管理员权限
    public ResponseVO delUpdate(@NotNull Integer id) {
        // 调用服务层方法删除指定的更新记录
        appUpdateService.deleteAppUpdateById(id);

        // 返回成功响应
        return getSuccessResponseVO(null);
    }

    /**
     * 发布或更新 App
     * 根据指定 ID 和状态，发布或灰度更新 App 版本。
     *
     * @param id 更新记录的 ID
     * @param status 发布状态（如正式发布、灰度发布等）
     * @param grayscaleUid 灰度发布的用户 UID（可选，针对灰度发布）
     * @return 发布成功的响应对象
     */
    @RequestMapping("/postUpdate")
    @GlobalInterceptor(checkAdmin = true) // 检查是否具有管理员权限
    public ResponseVO postUpdate(@NotNull Integer id, @NotNull Integer status, String grayscaleUid) {
        // 调用服务层方法处理发布逻辑
        appUpdateService.postUpdate(id, status, grayscaleUid);

        // 返回成功响应
        return getSuccessResponseVO(null);
    }
}
