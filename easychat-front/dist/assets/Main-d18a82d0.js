import { U as Update } from "./Update-05f91c07.js";
import { _ as _export_sfc, b as getCurrentInstance, u as useRouter, I as useRoute, d as useUserInfoStore, C as useGlobalInfoStore, M as useAvatarInfoStore, r as ref, o as onMounted, e as onUnmounted, A as watch, f as resolveComponent, h as openBlock, i as createElementBlock, j as createBaseVNode, k as createVNode, E as unref, F as Fragment, n as renderList, w as withCtx, D as normalizeClass, m as createBlock, N as Badge, p as createCommentVNode, K as resolveDynamicComponent, O as KeepAlive } from "./index-d3de2193.js";
import { u as useSysSettingStore } from "./SysSettingStore-97da8bdf.js";
import { u as useMessageCountStore } from "./MessageCountStore-55153eb3.js";
const Main_vue_vue_type_style_index_0_scoped_7d42a174_lang = "";
const _hoisted_1 = { class: "main" };
const _hoisted_2 = { class: "left-sider" };
const _hoisted_3 = { class: "menu-list" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "menu-list menu-buttom" };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { class: "right-container" };
const _sfc_main = {
  __name: "Main",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const route = useRoute();
    const userInfoStore = useUserInfoStore();
    const sysSettingStore = useSysSettingStore();
    const messageCountStore = useMessageCountStore();
    const globalInfoStore = useGlobalInfoStore();
    const avatarInfoStore = useAvatarInfoStore();
    const menuList = ref([
      {
        name: "chat",
        icon: "icon-chat",
        path: "/chat",
        countKey: "chatCount",
        position: "top"
      },
      {
        name: "contact",
        icon: "icon-icon23",
        path: "/contact",
        countKey: "contactApplyCount",
        position: "top"
      },
      {
        name: "list",
        // 新增的功能
        icon: "icon-jihua",
        // 可以选择合适的图标
        path: "/list",
        countKey: "unfinishedTaskCount",
        // 新增 countKey
        position: "top"
      },
      {
        name: "mysetting",
        icon: "icon-more",
        path: "/setting",
        position: "bottom"
      }
    ]);
    const componentRef = ref(null);
    const changeMenu = (item) => {
      currentMenu.value = item;
      router.push(item.path);
    };
    const currentMenu = ref(menuList.value[0]);
    const menuSelect = (path) => {
      currentMenu.value = menuList.value.find((item) => {
        return path.includes(item.path);
      });
    };
    const getLoginInfo = async () => {
      let result = await proxy.Request({
        url: proxy.Api.getUserInfo
      });
      if (!result) {
        return;
      }
      userInfoStore.setInfo(result.data);
      window.ipcRenderer.send("getLocalStore", result.data.userId + "localServerPort");
    };
    const getSysSetting = async () => {
      let result = await proxy.Request({
        url: proxy.Api.getSysSetting
      });
      if (!result) {
        return;
      }
      sysSettingStore.setSetting(result.data);
    };
    onMounted(() => {
      window.ipcRenderer.on("getLocalStoreCallback", (e, serverPort) => {
        globalInfoStore.setInfo("localServerPort", serverPort);
      });
      getLoginInfo();
      getSysSetting();
      window.ipcRenderer.on("reLogin", (e, info) => {
        router.push("/login");
      });
      window.ipcRenderer.on("reloadAvatar", (e, fileId) => {
        avatarInfoStore.setFoceReload(fileId, true);
      });
    });
    onUnmounted(() => {
      window.ipcRenderer.removeAllListeners("getLocalStoreCallback");
      window.ipcRenderer.removeAllListeners("reLogin");
      window.ipcRenderer.removeAllListeners("reloadAvatar");
    });
    watch(
      () => route.path,
      (newVal, oldVal) => {
        if (newVal) {
          menuSelect(newVal);
        }
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _cache) => {
      const _component_Avatar = resolveComponent("Avatar");
      const _component_router_view = resolveComponent("router-view");
      const _component_WinOp = resolveComponent("WinOp");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_Avatar, {
              userId: unref(userInfoStore).getInfo().userId,
              width: 35,
              showDetail: false
            }, null, 8, ["userId"]),
            createBaseVNode("div", _hoisted_3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(menuList.value, (item) => {
                return openBlock(), createElementBlock(Fragment, null, [
                  item.position == "top" ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["tab-item iconfont", item.icon, item.path == currentMenu.value.path ? "active" : ""]),
                    onClick: ($event) => changeMenu(item)
                  }, [
                    item.name == "chat" || item.name == "contact" || item.name == "list" ? (openBlock(), createBlock(Badge, {
                      key: 0,
                      count: unref(messageCountStore).getCount(item.countKey),
                      top: 5,
                      left: 15
                    }, null, 8, ["count"])) : createCommentVNode("", true)
                  ], 10, _hoisted_4)) : createCommentVNode("", true)
                ], 64);
              }), 256))
            ]),
            createBaseVNode("div", _hoisted_5, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(menuList.value, (item) => {
                return openBlock(), createElementBlock(Fragment, null, [
                  item.position == "bottom" ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["tab-item iconfont", item.icon, item.path == currentMenu.value.path ? "active" : ""]),
                    onClick: ($event) => changeMenu(item)
                  }, null, 10, _hoisted_6)) : createCommentVNode("", true)
                ], 64);
              }), 256))
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createVNode(_component_router_view, null, {
              default: withCtx(({ Component }) => [
                (openBlock(), createBlock(KeepAlive, { include: "chat" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(Component), {
                    ref_key: "componentRef",
                    ref: componentRef
                  }, null, 512))
                ], 1024))
              ]),
              _: 1
            })
          ]),
          createVNode(Update)
        ]),
        createVNode(_component_WinOp)
      ], 64);
    };
  }
};
const Main = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d42a174"]]);
export {
  Main as default
};
