import { bM as defineStore } from "./index-347654a5.js";
const useMessageCountStore = defineStore("messageCount", {
  state: () => {
    return {
      messageCount: {
        chatCount: 0,
        contactApplyCount: 0
      }
    };
  },
  actions: {
    setCount(key, count, forceUpdate) {
      if (forceUpdate) {
        this.messageCount[key] = count;
        return;
      }
      let curCount = this.messageCount[key];
      this.messageCount[key] = curCount + count;
    },
    getCount(key) {
      return this.messageCount[key];
    }
  }
});
export {
  useMessageCountStore as u
};
