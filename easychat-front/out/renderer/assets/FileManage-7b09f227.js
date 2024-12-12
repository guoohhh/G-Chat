import { _ as _export_sfc, b as getCurrentInstance, r as ref, o as onMounted, e as onUnmounted, f as resolveComponent, b5 as resolveDirective, G as withDirectives, h as openBlock, m as createBlock, w as withCtx, k as createVNode, j as createBaseVNode, t as toDisplayString, s as createTextVNode, l as withModifiers, v as pushScopeId, x as popScopeId } from "./index-347654a5.js";
const FileManage_vue_vue_type_style_index_0_scoped_c24fd6d1_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-c24fd6d1"), n = n(), popScopeId(), n);
const _hoisted_1 = ["title"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "tips" }, "文件的默认保存位置", -1));
const _sfc_main = {
  __name: "FileManage",
  setup(__props) {
    getCurrentInstance();
    const formData = ref({});
    const formDataRef = ref();
    const getSetting = () => {
      window.ipcRenderer.send("getSysSetting");
    };
    onMounted(() => {
      getSetting();
      window.ipcRenderer.on("getSysSettingCallback", (e, sysSetting) => {
        copying.value = false;
        sysSetting = JSON.parse(sysSetting);
        formData.value = {
          sysSetting: sysSetting.localFileFolder
        };
      });
      window.ipcRenderer.on("copyingCallback", (e) => {
        copying.value = true;
      });
    });
    onUnmounted(() => {
      window.ipcRenderer.removeAllListeners("getSysSettingCallback");
      window.ipcRenderer.removeAllListeners("copyingCallback");
    });
    const copying = ref(false);
    const changeFolder = () => {
      window.ipcRenderer.send("changeLocalFolder");
    };
    const openLocalFolder = () => {
      window.ipcRenderer.send("openLocalFolder");
    };
    return (_ctx, _cache) => {
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
      const _component_ContentPanel = resolveComponent("ContentPanel");
      const _directive_loading = resolveDirective("loading");
      return withDirectives((openBlock(), createBlock(_component_ContentPanel, { "element-loading-text": "正在复制文件" }, {
        default: withCtx(() => [
          createVNode(_component_el_form, {
            "label-position": "top",
            model: formData.value,
            ref_key: "formDataRef",
            ref: formDataRef,
            "label-width": "80px",
            onSubmit: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["prevent"]))
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                label: "文件管理",
                prop: "",
                class: "file-manage"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", {
                    class: "file-input",
                    title: formData.value.sysSetting
                  }, toDisplayString(formData.value.sysSetting), 9, _hoisted_1),
                  _hoisted_2
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "",
                prop: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: changeFolder
                  }, {
                    default: withCtx(() => [
                      createTextVNode("更改")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: openLocalFolder
                  }, {
                    default: withCtx(() => [
                      createTextVNode("打开文件夹")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      })), [
        [_directive_loading, copying.value]
      ]);
    };
  }
};
const FileManage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c24fd6d1"]]);
export {
  FileManage as default
};
