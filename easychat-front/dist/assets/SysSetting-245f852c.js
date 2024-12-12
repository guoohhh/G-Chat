import { _ as _export_sfc, b as getCurrentInstance, r as ref, f as resolveComponent, h as openBlock, i as createElementBlock, k as createVNode, w as withCtx, l as withModifiers, s as createTextVNode } from "./index-d3de2193.js";
import { _ as _sfc_main$1 } from "./AvatarUpload-860c6215.js";
const SysSetting_vue_vue_type_style_index_0_scoped_dedc93cf_lang = "";
const _hoisted_1 = { class: "form-panel" };
const _sfc_main = {
  __name: "SysSetting",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const formData = ref({});
    const formDataRef = ref();
    const rules = {
      maxGroupCount: [
        { required: true, message: "请输入每人最多可创建群组数" },
        { validator: proxy.Verify.number, message: "只能是数字" }
      ],
      maxGroupMemberCount: [
        { required: true, message: "请输入每个群组最大成员数" },
        { validator: proxy.Verify.number, message: "只能是数字" }
      ],
      maxImageSize: [
        { required: true, message: "请输入允许上传的图片大小" },
        { validator: proxy.Verify.number, message: "只能是数字" }
      ],
      maxVideoSize: [
        { required: true, message: "请输入允许上传的视频大小" },
        { validator: proxy.Verify.number, message: "只能是数字" }
      ],
      maxFileSize: [
        { required: true, message: "请输入允许上传的文件大小" },
        { validator: proxy.Verify.number, message: "只能是数字" }
      ],
      robotNickName: [{ required: true, message: "请输入机器人昵称" }],
      robotFile: [{ required: true, message: "请选择机器人头像" }],
      robotWelcome: [{ required: true, message: "请输入新用户注册机器人欢迎消息" }]
    };
    const saveCover = ({ avatarFile, coverFile }) => {
      formData.value.robotFile = avatarFile;
      formData.value.robotCover = coverFile;
    };
    const getSysSetting = async () => {
      let result = await proxy.Request({
        url: proxy.Api.getSysSetting4Admin
      });
      if (!result) {
        return;
      }
      formData.value = result.data;
      formData.value.robotFile = result.data.robotUid;
    };
    getSysSetting();
    const saveSysSetting = () => {
      formDataRef.value.validate(async (valid) => {
        if (!valid) {
          return;
        }
        let params = {};
        Object.assign(params, formData.value);
        let result = await proxy.Request({
          url: proxy.Api.saveSysSetting,
          params
        });
        if (!result) {
          return;
        }
        proxy.Message.success("保存成功");
      });
    };
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_form, {
          model: formData.value,
          rules,
          ref_key: "formDataRef",
          ref: formDataRef,
          "label-width": "160px",
          onSubmit: _cache[8] || (_cache[8] = withModifiers(() => {
          }, ["prevent"]))
        }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, {
              label: "最多可创建群组数",
              prop: "maxGroupCount"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  clearable: "",
                  placeholder: "请输入每人最多可创建群组数",
                  modelValue: formData.value.maxGroupCount,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.maxGroupCount = $event),
                  modelModifiers: { trim: true }
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, {
              label: "群组最大成员数",
              prop: "maxGroupMemberCount"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  clearable: "",
                  placeholder: "请输入每个群组最大成员数",
                  modelValue: formData.value.maxGroupMemberCount,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.maxGroupMemberCount = $event),
                  modelModifiers: { trim: true }
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, {
              label: "图片大小",
              prop: "maxImageSize"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  clearable: "",
                  placeholder: "请输入允许上传的图片大小",
                  modelValue: formData.value.maxImageSize,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.maxImageSize = $event),
                  modelModifiers: { trim: true }
                }, {
                  append: withCtx(() => [
                    createTextVNode("MB")
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, {
              label: "视频大小",
              prop: "maxVideoSize"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  clearable: "",
                  placeholder: "请输入允许上传的视频大小",
                  modelValue: formData.value.maxVideoSize,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.maxVideoSize = $event),
                  modelModifiers: { trim: true }
                }, {
                  append: withCtx(() => [
                    createTextVNode("MB")
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, {
              label: "其他文件大小",
              prop: "maxFileSize"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  clearable: "",
                  placeholder: "请输入允许上传的文件大小",
                  modelValue: formData.value.maxFileSize,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.value.maxFileSize = $event),
                  modelModifiers: { trim: true }
                }, {
                  append: withCtx(() => [
                    createTextVNode("MB")
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, {
              label: "机器人昵称",
              prop: "robotNickName"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  clearable: "",
                  placeholder: "请输入机器人昵称",
                  modelValue: formData.value.robotNickName,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.robotNickName = $event),
                  modelModifiers: { trim: true },
                  maxlength: "20"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, {
              label: "机器人头像",
              prop: "robotFile"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$1, {
                  modelValue: formData.value.robotFile,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.value.robotFile = $event),
                  onCoverFile: saveCover
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, {
              label: "欢迎消息",
              prop: "robotWelcome"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  clearable: "",
                  placeholder: "请输入新用户注册机器人欢迎消息",
                  modelValue: formData.value.robotWelcome,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => formData.value.robotWelcome = $event),
                  type: "textarea",
                  rows: "5",
                  maxlength: "300",
                  "show-word-limit": true,
                  resize: "none"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "" }, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: saveSysSetting
                }, {
                  default: withCtx(() => [
                    createTextVNode("保存设置")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"])
      ]);
    };
  }
};
const SysSetting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dedc93cf"]]);
export {
  SysSetting as default
};
