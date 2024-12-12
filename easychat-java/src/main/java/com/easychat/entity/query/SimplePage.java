package com.easychat.entity.query;

import com.easychat.entity.enums.PageSize;  // 导入自定义的分页大小枚举

// SimplePage 类用于封装分页的核心信息，包括当前页码、总记录数、每页记录数、总页数等。
public class SimplePage {

	// 当前页码，表示用户请求的页数
	private int pageNo;

	// 总记录数，表示数据库中符合查询条件的记录总数
	private int countTotal;

	// 每页显示的记录数，表示每一页展示的数据条数
	private int pageSize;

	// 总页数，根据总记录数和每页记录数计算得出
	private int pageTotal;

	// 查询的起始位置，即从哪条记录开始查询
	private int start;

	// 查询的结束位置，表示一页查询的记录数
	private int end;

	// 无参构造函数，用于初始化一个空的 SimplePage 对象
	public SimplePage() {
	}

	// 带有页码、总记录数和每页记录数的构造函数，用于创建分页对象
	public SimplePage(Integer pageNo, int countTotal, int pageSize) {
		if (null == pageNo) {
			pageNo = 0;  // 如果页码为 null，则将其初始化为 0
		}
		this.pageNo = pageNo;
		this.countTotal = countTotal;
		this.pageSize = pageSize;
		action();  // 调用 action() 方法，计算分页信息
	}

	// 带起始位置和结束位置的构造函数，通常用于已知查询范围的情况
	public SimplePage(int start, int end) {
		this.start = start;
		this.end = end;
	}

	// action() 方法用于计算分页信息：总页数、当前页的起始位置和结束位置
	public void action() {
		// 如果每页记录数小于或等于 0，默认将其设置为 PageSize.SIZE20（一般为 20）
		if (this.pageSize <= 0) {
			this.pageSize = PageSize.SIZE20.getSize();  // 从枚举中获取默认的每页记录数
		}

		// 计算总页数
		if (this.countTotal > 0) {
			// 如果总记录数可以整除每页记录数，总页数为总记录数除以每页记录数
			// 否则，需增加一页来容纳余数
			this.pageTotal = this.countTotal % this.pageSize == 0 ? this.countTotal / this.pageSize
					: this.countTotal / this.pageSize + 1;
		} else {
			// 如果总记录数为 0，则总页数默认为 1
			pageTotal = 1;
		}

		// 如果当前页小于等于 1，默认设置为第 1 页
		if (pageNo <= 1) {
			pageNo = 1;
		}
		// 如果当前页大于总页数，设置为总页数（防止越界）
		if (pageNo > pageTotal) {
			pageNo = pageTotal;
		}

		// 计算当前页的查询起始位置：从 (当前页 - 1) * 每页记录数 开始
		this.start = (pageNo - 1) * pageSize;

		// 设置当前页的查询结束位置（通常是每页记录数）
		this.end = this.pageSize;
	}

	// 获取当前页的起始位置
	public int getStart() {
		return start;
	}

	// 获取当前页的结束位置
	public int getEnd() {
		return end;
	}

	// 获取总页数
	public int getPageTotal() {
		return pageTotal;
	}

	// 获取当前页码
	public int getPageNo() {
		return pageNo;
	}

	// 设置当前页码
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}

	// 设置总页数
	public void setPageTotal(int pageTotal) {
		this.pageTotal = pageTotal;
	}

	// 获取总记录数
	public int getCountTotal() {
		return countTotal;
	}

	// 获取每页显示的记录数
	public int getPageSize() {
		return pageSize;
	}

	// 设置查询的起始位置
	public void setStart(int start) {
		this.start = start;
	}

	// 设置查询的结束位置
	public void setEnd(int end) {
		this.end = end;
	}

	// 设置总记录数并重新计算分页信息
	public void setCountTotal(int countTotal) {
		this.countTotal = countTotal;
		this.action();  // 调用 action() 方法，更新分页信息
	}

	// 设置每页显示的记录数并重新计算分页信息
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

}
