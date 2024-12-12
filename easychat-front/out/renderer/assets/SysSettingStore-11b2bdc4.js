import { bM as defineStore } from "./index-347654a5.js";
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
