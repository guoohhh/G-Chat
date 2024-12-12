// src/stores/userinfostore.js
import { defineStore } from 'pinia';

export const useUserInfoStore = defineStore('userInfo', {
  state: () => ({
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
  }),
  actions: {
    // 设置用户信息并保存到 localStorage
    setInfo(userInfo) {
      this.userInfo = userInfo;
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    },
    // 清除用户信息并从 localStorage 中移除
    clearInfo() {
      this.userInfo = {};
      localStorage.removeItem('userInfo');
    },
    // 保留 getInfo 方法以确保与现有代码兼容
    getInfo() {
      return this.userInfo;
    },
  },
});
