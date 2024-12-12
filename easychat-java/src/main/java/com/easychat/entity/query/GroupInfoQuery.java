package com.easychat.entity.query;

/**
 * GroupInfoQuery 类用于封装查询群组信息的参数，包括群组的各类信息以及分页信息等。
 * 继承自 BaseParam 类，可以使用 BaseParam 中定义的分页功能。
 */
public class GroupInfoQuery extends BaseParam {

    /**
     * 群ID，群组的唯一标识
     */
    private String groupId;

    // 模糊匹配的群ID，用于支持不完全匹配的查询
    private String groupIdFuzzy;

    /**
     * 群组名称
     */
    private String groupName;

    // 模糊匹配的群组名称，用于支持不完全匹配的查询
    private String groupNameFuzzy;

    /**
     * 群主ID，表示该群组的创建者或拥有者
     */
    private String groupOwnerId;

    // 模糊匹配的群主ID，用于支持不完全匹配的查询
    private String groupOwnerIdFuzzy;

    /**
     * 创建时间，记录群组的创建时间
     */
    private String createTime;

    // 用于查询群组的创建时间范围的开始时间
    private String createTimeStart;

    // 用于查询群组的创建时间范围的结束时间
    private String createTimeEnd;

    /**
     * 群公告，群主可以在此设置群公告
     */
    private String groupNotice;

    // 模糊匹配的群公告，用于支持不完全匹配的查询
    private String groupNoticeFuzzy;

    /**
     * 加入方式：
     * 0: 直接加入
     * 1: 管理员同意后加入
     */
    private Integer joinType;

    /**
     * 群组状态：
     * 1: 正常
     * 0: 解散
     */
    private Integer status;

    // 是否查询群主名称
    private Boolean queryGroupOwnerName;

    // 是否查询群成员数量
    private Boolean queryMemberCount;

    // 以下是 getter 和 setter 方法，用于访问和设置各个字段的值

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public String getGroupId() {
        return this.groupId;
    }

    public void setGroupIdFuzzy(String groupIdFuzzy) {
        this.groupIdFuzzy = groupIdFuzzy;
    }

    public String getGroupIdFuzzy() {
        return this.groupIdFuzzy;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getGroupName() {
        return this.groupName;
    }

    public void setGroupNameFuzzy(String groupNameFuzzy) {
        this.groupNameFuzzy = groupNameFuzzy;
    }

    public String getGroupNameFuzzy() {
        return this.groupNameFuzzy;
    }

    public void setGroupOwnerId(String groupOwnerId) {
        this.groupOwnerId = groupOwnerId;
    }

    public String getGroupOwnerId() {
        return this.groupOwnerId;
    }

    public void setGroupOwnerIdFuzzy(String groupOwnerIdFuzzy) {
        this.groupOwnerIdFuzzy = groupOwnerIdFuzzy;
    }

    public String getGroupOwnerIdFuzzy() {
        return this.groupOwnerIdFuzzy;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getCreateTime() {
        return this.createTime;
    }

    public void setCreateTimeStart(String createTimeStart) {
        this.createTimeStart = createTimeStart;
    }

    public String getCreateTimeStart() {
        return this.createTimeStart;
    }

    public void setCreateTimeEnd(String createTimeEnd) {
        this.createTimeEnd = createTimeEnd;
    }

    public String getCreateTimeEnd() {
        return this.createTimeEnd;
    }

    public void setGroupNotice(String groupNotice) {
        this.groupNotice = groupNotice;
    }

    public String getGroupNotice() {
        return this.groupNotice;
    }

    public void setGroupNoticeFuzzy(String groupNoticeFuzzy) {
        this.groupNoticeFuzzy = groupNoticeFuzzy;
    }

    public String getGroupNoticeFuzzy() {
        return this.groupNoticeFuzzy;
    }

    public void setJoinType(Integer joinType) {
        this.joinType = joinType;
    }

    public Integer getJoinType() {
        return this.joinType;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getStatus() {
        return this.status;
    }

    public Boolean getQueryGroupOwnerName() {
        return queryGroupOwnerName;
    }

    public void setQueryGroupOwnerName(Boolean queryGroupOwnerName) {
        this.queryGroupOwnerName = queryGroupOwnerName;
    }

    public Boolean getQueryMemberCount() {
        return queryMemberCount;
    }

    public void setQueryMemberCount(Boolean queryMemberCount) {
        this.queryMemberCount = queryMemberCount;
    }
}
