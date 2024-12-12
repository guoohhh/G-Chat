import { b as getCurrentInstance, bK as useContactStateStore, M as useAvatarInfoStore, r as ref, f as resolveComponent, h as openBlock, m as createBlock, w as withCtx, k as createVNode, s as createTextVNode, t as toDisplayString, l as withModifiers } from "./index-d3de2193.js";
import { _ as _sfc_main$1 } from "./AvatarUpload-860c6215.js";
const _sfc_main = {
  __name: "GroupEditForm",
  emits: ["eidtBack"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { proxy } = getCurrentInstance();
    const contactStateStore = useContactStateStore();
    const avatarInfoStore = useAvatarInfoStore();
    const formData = ref({});
    const formDataRef = ref();
    const rules = {
      groupName: [{ required: true, message: "请输入群名称" }],
      joinType: [{ required: true, message: "请选择加入权限" }],
      avatarFile: [{ required: true, message: "请选择头像" }]
    };
    const avatarUploadRef = ref();
    const emit = __emit;
    const submit = () => {
      formDataRef.value.validate(async (valid) => {
        if (!valid) {
          return;
        }
        let params = {};
        Object.assign(params, formData.value);
        contactStateStore.setContactReload(null);
        if (params.groupId) {
          avatarInfoStore.setFoceReload(params.groupId, false);
        }
        let result = await proxy.Request({
          url: proxy.Api.saveGroup,
          params
        });
        if (!result) {
          return;
        }
        avatarUploadRef.value.clear();
        if (params.groupId) {
          proxy.Message.success("群组修改成功");
          emit("eidtBack");
        } else {
          proxy.Message.success("群组创建成功");
        }
        formDataRef.value.resetFields();
        contactStateStore.setContactReload("MY");
        if (params.groupId) {
          avatarInfoStore.setFoceReload(params.groupId, true);
        }
      });
    };
    const saveCover = ({ avatarFile, coverFile }) => {
      formData.value.avatarFile = avatarFile;
      formData.value.avatarCover = coverFile;
    };
    const show = (data) => {
      formDataRef.value.resetFields();
      formData.value = Object.assign({}, data);
      formData.value.avatarFile = data.groupId;
    };
    __expose({
      show
    });
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_radio = resolveComponent("el-radio");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
      return openBlock(), createBlock(_component_el_form, {
        model: formData.value,
        rules,
        ref_key: "formDataRef",
        ref: formDataRef,
        "label-width": "80px",
        onSubmit: _cache[4] || (_cache[4] = withModifiers(() => {
        }, ["prevent"]))
      }, {
        default: withCtx(() => [
          createVNode(_component_el_form_item, {
            label: "群名称",
            prop: "groupName"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                maxlength: "150",
                clearable: "",
                placeholder: "请输入群名称",
                modelValue: formData.value.groupName,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.groupName = $event),
                modelModifiers: { trim: true }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, {
            label: "封面",
            prop: "avatarFile"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, {
                modelValue: formData.value.avatarFile,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.avatarFile = $event),
                ref_key: "avatarUploadRef",
                ref: avatarUploadRef,
                onCoverFile: saveCover
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, {
            label: "加入权限",
            prop: "joinType"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_radio_group, {
                modelValue: formData.value.joinType,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.joinType = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_radio, { label: 1 }, {
                    default: withCtx(() => [
                      createTextVNode("管理员同意后加入")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_radio, { label: 0 }, {
                    default: withCtx(() => [
                      createTextVNode("直接加入")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, {
            label: "公告",
            prop: "groupNotice"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                clearable: "",
                placeholder: "请输入群公告",
                modelValue: formData.value.groupNotice,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.groupNotice = $event),
                modelModifiers: { trim: true },
                type: "textarea",
                rows: "5",
                maxlength: "300",
                "show-word-limit": true,
                resize: "none"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(_component_el_form_item, null, {
            default: withCtx(() => [
              createVNode(_component_el_button, {
                type: "primary",
                onClick: submit
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(formData.value.groupId ? "修改群组" : "创建群组"), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model"]);
    };
  }
};
export {
  _sfc_main as _
};
