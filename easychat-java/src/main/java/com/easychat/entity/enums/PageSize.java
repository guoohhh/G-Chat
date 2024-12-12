package com.easychat.entity.enums;

/**
 * 分页大小枚举类
 * 用于定义不同的分页大小选项，如每页15条、20条等。
 */
public enum PageSize {

	// 定义了不同的分页大小：15、20、30、40、50，每个枚举常量都对应一个分页大小
	SIZE15(15),  // 每页 15 条记录
	SIZE20(20),  // 每页 20 条记录
	SIZE30(30),  // 每页 30 条记录
	SIZE40(40),  // 每页 40 条记录
	SIZE50(50);  // 每页 50 条记录

	// 枚举常量的属性：分页大小（每页的记录数）
	int size;

	/**
	 * 构造函数，用于初始化每个枚举常量的 size 属性
	 * @param size 每页的记录数
	 */
	private PageSize(int size) {
		this.size = size;  // 初始化枚举常量的分页大小
	}

	/**
	 * 获取当前枚举常量对应的分页大小
	 * @return 当前枚举常量的分页大小
	 */
	public int getSize() {
		return this.size;  // 返回分页大小
	}
}
