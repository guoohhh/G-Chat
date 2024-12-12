package com.easychat.mappers;

import org.apache.ibatis.annotations.Param;

import java.util.List;

// 这个接口定义了基础的 CRUD 操作，T 是实体类，P 是查询参数类
interface BaseMapper<T, P> {

	/**
	 * selectList: 根据查询条件查询数据集合
	 * @param p 查询条件对象
	 * @return 返回符合条件的对象列表
	 */
	List<T> selectList(@Param("query") P p);  // 查询集合，根据查询参数 p 返回 List<T> 对象

	/**
	 * selectCount: 根据查询条件查询符合条件的数据数量
	 * @param p 查询条件对象
	 * @return 返回符合条件的记录数
	 */
	Integer selectCount(@Param("query") P p);  // 根据查询参数 p 返回记录总数

	/**
	 * insert: 插入一条新的数据记录
	 * @param t 要插入的实体对象
	 * @return 返回受影响的记录数（一般为 1，表示插入成功）
	 */
	Integer insert(@Param("bean") T t);  // 插入一条记录，T 是实体类对象，返回受影响的记录数

	/**
	 * insertOrUpdate: 插入或更新一条数据记录
	 * 如果记录存在，执行更新操作；如果记录不存在，执行插入操作
	 * @param t 要插入或更新的实体对象
	 * @return 返回受影响的记录数
	 */
	Integer insertOrUpdate(@Param("bean") T t);  // 插入或更新操作，根据主键判断是插入还是更新

	/**
	 * insertBatch: 批量插入数据
	 * @param list 要插入的数据列表
	 * @return 返回受影响的记录数
	 */
	Integer insertBatch(@Param("list") List<T> list);  // 批量插入操作，传入 List<T> 列表

	/**
	 * insertOrUpdateBatch: 批量插入或更新数据
	 * 如果记录存在，执行更新操作；如果记录不存在，执行插入操作
	 * @param list 要插入或更新的数据列表
	 * @return 返回受影响的记录数
	 */
	Integer insertOrUpdateBatch(@Param("list") List<T> list);  // 批量插入或更新操作

	/**
	 * updateByParam: 根据多个查询条件更新数据记录
	 * @param t 要更新的实体对象
	 * @param p 查询条件对象
	 * @return 返回受影响的记录数
	 */
	Integer updateByParam(@Param("bean") T t, @Param("query") P p);  // 根据查询条件更新数据

	/**
	 * deleteByParam: 根据多个查询条件删除数据记录
	 * @param p 查询条件对象
	 * @return 返回受影响的记录数
	 */
	Integer deleteByParam(@Param("query") P p);  // 根据查询条件删除数据
}
