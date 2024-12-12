package com.easychat.mappers;

import org.apache.ibatis.annotations.Param;

/**
 *  数据库操作接口
 *  该接口继承自 BaseMapper<T, P>，并提供了针对 `UserInfo` 数据表的 CRUD 操作。
 */
public interface UserInfoMapper<T, P> extends BaseMapper<T, P> {

	/**
	 * 根据 UserId 更新用户信息
	 *
	 * @param t 包含要更新的用户信息的实体对象
	 * @param userId 用户的唯一标识符（UserId），作为更新条件
	 * @return 返回受影响的记录数，通常为 1 表示成功
	 */
	Integer updateByUserId(@Param("bean") T t, @Param("userId") String userId);

	/**
	 * 根据 UserId 删除用户信息
	 *
	 * @param userId 用户的唯一标识符（UserId），作为删除条件
	 * @return 返回受影响的记录数，通常为 1 表示成功
	 */
	Integer deleteByUserId(@Param("userId") String userId);

	/**
	 * 根据 UserId 获取用户信息对象
	 *
	 * @param userId 用户的唯一标识符（UserId），作为查询条件
	 * @return 返回对应的用户实体对象
	 */
	T selectByUserId(@Param("userId") String userId);

	/**
	 * 根据 Email 更新用户信息
	 *
	 * @param t 包含要更新的用户信息的实体对象
	 * @param email 用户的邮箱，作为更新条件
	 * @return 返回受影响的记录数，通常为 1 表示成功
	 */
	Integer updateByEmail(@Param("bean") T t, @Param("email") String email);

	/**
	 * 根据 Email 删除用户信息
	 *
	 * @param email 用户的邮箱，作为删除条件
	 * @return 返回受影响的记录数，通常为 1 表示成功
	 */
	Integer deleteByEmail(@Param("email") String email);

	/**
	 * 根据 Email 获取用户信息对象
	 *
	 * @param email 用户的邮箱，作为查询条件
	 * @return 返回对应的用户实体对象
	 */
	T selectByEmail(@Param("email") String email);
}
