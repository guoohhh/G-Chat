package com.easychat.entity.query;

// BaseParam 类定义了分页查询的基本参数，用于存储分页信息、排序信息等。
public class BaseParam {

	// SimplePage 对象用于封装分页的详细信息（如当前页、每页显示的条数等）
	private SimplePage simplePage;

	// 页码，表示当前请求的页数
	private Integer pageNo;

	// 每页显示的记录数，控制分页的大小
	private Integer pageSize;

	// 排序字段，通常用于指定查询结果按照某个字段排序的方式
	private String orderBy;

	// 获取 SimplePage 对象，SimplePage 封装了分页的一些基础信息
	public SimplePage getSimplePage() {
		return simplePage;
	}

	// 设置 SimplePage 对象，SimplePage 封装分页的属性
	public void setSimplePage(SimplePage simplePage) {
		this.simplePage = simplePage;
	}

	// 获取页码（pageNo），即当前查询的页数
	public Integer getPageNo() {
		return pageNo;
	}

	// 设置页码（pageNo），即当前查询的页数
	public void setPageNo(Integer pageNo) {
		this.pageNo = pageNo;
	}

	// 获取每页记录数（pageSize），即每一页展示多少条数据
	public Integer getPageSize() {
		return pageSize;
	}

	// 设置每页记录数（pageSize），即每一页展示多少条数据
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	// 设置排序字段（orderBy），用于指定查询结果的排序依据
	public void setOrderBy(String orderBy){
		this.orderBy = orderBy;
	}

	// 获取排序字段（orderBy），通常是数据库字段的名称
	public String getOrderBy(){
		return this.orderBy;
	}
}
