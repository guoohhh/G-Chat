import { bM as defineStore } from "./index-d3de2193.js";
const useSysSettingStore = defineStore("sysSetting", {
  state: () => {
    return {
      sysSetting: {}
    };
  },
  actions: {
    setSetting(config) {
      this.sysSetting = config;
    },
    getSetting() {
      return this.sysSetting;
    }
  }
});
export {
  useSysSettingStore as u
};
