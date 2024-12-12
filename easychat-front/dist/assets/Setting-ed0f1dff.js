import { _ as _export_sfc, b as getCurrentInstance, I as useRoute, u as useRouter, r as ref, f as resolveComponent, h as openBlock, m as createBlock, w as withCtx, j as createBaseVNode, i as createElementBlock, n as renderList, D as normalizeClass, E as unref, J as normalizeStyle, t as toDisplayString, F as Fragment, k as createVNode, K as resolveDynamicComponent, v as pushScopeId, x as popScopeId } from "./index-d3de2193.js";
const Setting_vue_vue_type_style_index_0_scoped_03e27354_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-03e27354"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "title-panel drag" }, "设置", -1));
const _hoisted_2 = { class: "menu-list" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "menu-name" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "title-panel drag" }, null, -1));
const _sfc_main = {
  __name: "Setting",
  setup(__props) {
    getCurrentInstance();
    const route = useRoute();
    const router = useRouter();
    const settingMenuList = ref([
      {
        name: "账号设置",
        icon: "icon-user-setting",
        path: "/setting/userInfo",
        bgColor: "#0294f5"
      },
      {
        name: "文件管理",
        icon: "icon-folder1",
        path: "/setting/fileManage",
        bgColor: "#ffd04f"
      },
      {
        name: "关于G-Chat",
        icon: "icon-about",
        path: "/setting/about",
        bgColor: "#08bf61"
      }
    ]);
    const jump = (data) => {
      router.push(data.path);
    };
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      const _component_Layout = resolveComponent("Layout");
      return openBlock(), createBlock(_component_Layout, null, {
        "left-content": withCtx(() => [
          _hoisted_1,
          createBaseVNode("div", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(settingMenuList.value, (item) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["menu-item", unref(route).path == item.path ? "menu-active" : ""]),
                onClick: ($event) => jump(item)
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(["iconfont", item.icon]),
                  style: normalizeStyle({ background: item.bgColor })
                }, null, 6),
                createBaseVNode("div", _hoisted_4, toDisplayString(item.name), 1)
              ], 10, _hoisted_3);
            }), 256))
          ])
        ]),
        "right-content": withCtx(() => [
          _hoisted_5,
          createVNode(_component_router_view, null, {
            default: withCtx(({ Component }) => [
              (openBlock(), createBlock(resolveDynamicComponent(Component), { ref: "componentRef" }, null, 512))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const Setting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03e27354"]]);
export {
  Setting as default
};
