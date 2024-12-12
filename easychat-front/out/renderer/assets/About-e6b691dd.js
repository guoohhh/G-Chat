import { b as getCurrentInstance, r as ref, f as resolveComponent, h as openBlock, i as createElementBlock, k as createVNode, w as withCtx, F as Fragment, l as withModifiers, j as createBaseVNode, t as toDisplayString, E as unref, s as createTextVNode } from "./index-347654a5.js";
import { c as config, U as Update } from "./Update-4ac5f111.js";
const _hoisted_1 = { class: "version-info" };
const _sfc_main = {
  __name: "About",
  setup(__props) {
    getCurrentInstance();
    const updateRef = ref();
    const checkUpdate = () => {
      updateRef.value.checkUpdate();
    };
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_form = resolveComponent("el-form");
      const _component_ContentPanel = resolveComponent("ContentPanel");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_ContentPanel, null, {
          default: withCtx(() => [
            createVNode(_component_el_form, {
              ref: "formDataRef",
              "label-width": "80px",
              onSubmit: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["prevent"]))
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, { label: "版本信息" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1, [
                      createBaseVNode("div", null, "G-Chat " + toDisplayString(unref(config).version), 1),
                      createBaseVNode("div", null, [
                        createVNode(_component_el_button, {
                          type: "primary",
                          onClick: checkUpdate
                        }, {
                          default: withCtx(() => [
                            createTextVNode("检查更新")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        }),
        createVNode(Update, {
          autoUpdate: false,
          ref_key: "updateRef",
          ref: updateRef
        }, null, 512)
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
