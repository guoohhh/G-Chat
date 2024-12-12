import { _ as _export_sfc, b as getCurrentInstance, u as useRouter, I as useRoute, C as useGlobalInfoStore, r as ref, o as onMounted, e as onUnmounted, f as resolveComponent, h as openBlock, i as createElementBlock, j as createBaseVNode, F as Fragment, n as renderList, k as createVNode, w as withCtx, D as normalizeClass, E as unref, J as normalizeStyle, t as toDisplayString, m as createBlock, K as resolveDynamicComponent, v as pushScopeId, x as popScopeId } from "./index-d3de2193.js";
const Admin_vue_vue_type_style_index_0_scoped_ed6a77fe_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-ed6a77fe"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "admin-window" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "title drag" }, "管理员", -1));
const _hoisted_3 = { class: "body-content" };
const _hoisted_4 = { class: "left-side" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "text" };
const _hoisted_7 = { class: "right-content" };
const _sfc_main = {
  __name: "Admin",
  setup(__props) {
    getCurrentInstance();
    const router = useRouter();
    const route = useRoute();
    const globalInfoStore = useGlobalInfoStore();
    const menuList = ref([
      {
        name: "用户管理",
        icon: "icon-user",
        path: "/admin/userList",
        iconBgColor: "#fa9d3b"
      },
      {
        name: "靓号管理",
        icon: "icon-beauty-beauty",
        path: "/admin/beautyAccount",
        iconBgColor: "#fe90b3"
      },
      {
        name: "群组管理",
        icon: "icon-group",
        path: "/admin/groupList",
        iconBgColor: "#1485ee"
      },
      {
        name: "系统设置",
        icon: "icon-setting",
        path: "/admin/sysSetting",
        iconBgColor: "#fa5151"
      },
      {
        name: "版本管理",
        icon: "icon-refresh",
        path: "/admin/update",
        iconBgColor: "#07c160"
      }
    ]);
    const menuJump = (item) => {
      router.push(item.path);
    };
    onMounted(() => {
      window.ipcRenderer.on("pageInitData", (e, data) => {
        localStorage.setItem("token", data.token);
        globalInfoStore.setInfo("localServerPort", data.localServerPort);
      });
    });
    onUnmounted(() => {
      window.ipcRenderer.removeAllListeners("pageInitData");
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      const _component_WinOp = resolveComponent("WinOp");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _hoisted_2,
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(menuList.value, (item) => {
                return openBlock(), createElementBlock("div", {
                  class: normalizeClass(["menu-item", item.path == unref(route).path ? "active" : ""]),
                  onClick: ($event) => menuJump(item)
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["iconfont", item.icon]),
                    style: normalizeStyle({ background: item.iconBgColor })
                  }, null, 6),
                  createBaseVNode("div", _hoisted_6, toDisplayString(item.name), 1)
                ], 10, _hoisted_5);
              }), 256))
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_router_view, null, {
                default: withCtx(({ Component }) => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component), { ref: "componentRef" }, null, 512))
                ]),
                _: 1
              })
            ])
          ])
        ]),
        createVNode(_component_WinOp, {
          showMax: false,
          showSetTop: false
        })
      ], 64);
    };
  }
};
const Admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ed6a77fe"]]);
export {
  Admin as default
};
