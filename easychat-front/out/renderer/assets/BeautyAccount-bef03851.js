import { b as getCurrentInstance, r as ref, f as resolveComponent, h as openBlock, m as createBlock, w as withCtx, k as createVNode, y as nextTick, _ as _export_sfc, i as createElementBlock, j as createBaseVNode, q as withKeys, s as createTextVNode, t as toDisplayString, p as createCommentVNode, v as pushScopeId, x as popScopeId } from "./index-347654a5.js";
const _sfc_main$1 = {
  __name: "BeautyAccountEdit",
  emits: ["reload"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { proxy } = getCurrentInstance();
    const dialogConfig = ref({
      show: false,
      title: "编辑靓号",
      buttons: [
        {
          type: "primary",
          text: "确定",
          click: (e) => {
            submitForm();
          }
        }
      ]
    });
    const formData = ref({ updateDescList: [] });
    const formDataRef = ref();
    const rules = {
      email: [
        { required: true, message: "请输入版本号" },
        { validator: proxy.Verify.email, message: "请输入正确的邮箱" }
      ],
      userId: [
        { required: true, message: "请选择更新文件" },
        { min: 11, max: 11, message: "靓号必须11位" },
        { validator: proxy.Verify.number, message: "靓号只能是数字" }
      ]
    };
    const emit = __emit;
    const submitForm = () => {
      formDataRef.value.validate(async (valid) => {
        if (!valid) {
          return;
        }
        let params = {};
        Object.assign(params, formData.value);
        let result = await proxy.Request({
          url: proxy.Api.saveBeautAccount,
          params
        });
        if (!result) {
          return;
        }
        dialogConfig.value.show = false;
        emit("reload");
      });
    };
    const showEdit = (data = {}) => {
      dialogConfig.value.show = true;
      nextTick(() => {
        formDataRef.value.resetFields();
        formData.value = Object.assign({}, data);
      });
    };
    __expose({
      showEdit
    });
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_form = resolveComponent("el-form");
      const _component_Dialog = resolveComponent("Dialog");
      return openBlock(), createBlock(_component_Dialog, {
        title: dialogConfig.value.title,
        buttons: dialogConfig.value.buttons,
        show: dialogConfig.value.show,
        onClose: _cache[2] || (_cache[2] = ($event) => dialogConfig.value.show = false),
        width: "400px"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_form, {
            ref_key: "formDataRef",
            ref: formDataRef,
            model: formData.value,
            rules,
            "label-width": "60px"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                label: "邮箱",
                prop: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    maxLength: 50,
                    modelValue: formData.value.email,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.email = $event),
                    modelModifiers: { trim: true },
                    placeholder: "请输入邮箱"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "靓号",
                prop: "userId"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    maxLength: 11,
                    modelValue: formData.value.userId,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.userId = $event),
                    modelModifiers: { trim: true },
                    placeholder: "请输入靓号"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 8, ["title", "buttons", "show"]);
    };
  }
};
const BeautyAccount_vue_vue_type_style_index_0_scoped_b901d334_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-b901d334"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "top-panel" };
const _hoisted_2 = {
  key: 0,
  class: "iconfont icon-woman"
};
const _hoisted_3 = {
  key: 1,
  class: "iconfont icon-man"
};
const _hoisted_4 = {
  key: 0,
  style: { "color": "red" }
};
const _hoisted_5 = {
  key: 1,
  style: { "color": "green" }
};
const _hoisted_6 = {
  key: 0,
  style: { "color": "green" }
};
const _hoisted_7 = {
  key: 1,
  style: { "color": "#8a8a8a" }
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "iconfont icon-more" }, null, -1));
const _sfc_main = {
  __name: "BeautyAccount",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const tableData = ref({});
    const tableOptions = {};
    const columns = [
      {
        label: "邮箱",
        prop: "email"
      },
      {
        label: "靓号",
        prop: "userId"
      },
      {
        label: "状态",
        prop: "status",
        scopedSlots: "slotStatus"
      },
      {
        label: "操作",
        prop: "operation",
        scopedSlots: "slotOperation"
      }
    ];
    const searchForm = ref({});
    const loadDataList = async () => {
      let params = {
        pageNo: tableData.value.pageNo,
        pageSize: tableData.value.pageSize
      };
      Object.assign(params, searchForm.value);
      let result = await proxy.Request({
        url: proxy.Api.loadBeautyAccount,
        params
      });
      if (!result) {
        return;
      }
      Object.assign(tableData.value, result.data);
    };
    const delAccount = (data) => {
      proxy.Confirm({
        message: `确定要删除邮箱【${data.email}】对应的靓号吗？`,
        okfun: async () => {
          let result = await proxy.Request({
            url: proxy.Api.delBeautAccount,
            params: {
              id: data.id
            }
          });
          if (!result) {
            return;
          }
          proxy.Message.success("删除成功");
          loadDataList();
        }
      });
    };
    const beautyAccountEditRef = ref();
    const editAccount = (data) => {
      beautyAccountEditRef.value.showEdit(data);
    };
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_card = resolveComponent("el-card");
      const _component_Avatar = resolveComponent("Avatar");
      const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
      const _component_el_dropdown = resolveComponent("el-dropdown");
      const _component_Table = resolveComponent("Table");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_el_card, null, {
            default: withCtx(() => [
              createVNode(_component_el_form, {
                model: searchForm.value,
                "label-width": "70px",
                "label-position": "right"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, { span: 5 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            label: "靓号",
                            "label-width": "40px"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                class: "password-input",
                                modelValue: searchForm.value.userIdFuzzy,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchForm.value.userIdFuzzy = $event),
                                clearable: "",
                                placeholder: "支持模糊搜索",
                                onKeyup: withKeys(loadDataList, ["native"])
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, { span: 5 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, { label: "邮箱" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                class: "password-input",
                                modelValue: searchForm.value.emailFuzzy,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchForm.value.emailFuzzy = $event),
                                clearable: "",
                                placeholder: "支持模糊搜索",
                                onKeyup: withKeys(loadDataList, ["native"])
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, {
                        span: 4,
                        style: { paddingLeft: "10px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_button, {
                            type: "success",
                            onClick: _cache[2] || (_cache[2] = ($event) => loadDataList())
                          }, {
                            default: withCtx(() => [
                              createTextVNode("查询 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_el_button, {
                            type: "primary",
                            onClick: _cache[3] || (_cache[3] = ($event) => editAccount())
                          }, {
                            default: withCtx(() => [
                              createTextVNode("新增靓号 ")
                            ]),
                            _: 1
                          })
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
          })
        ]),
        createVNode(_component_el_card, { class: "table-data-card" }, {
          default: withCtx(() => [
            createVNode(_component_Table, {
              columns,
              fetch: loadDataList,
              dataSource: tableData.value,
              options: tableOptions
            }, {
              slotAvatar: withCtx(({ index, row }) => [
                createVNode(_component_Avatar, {
                  width: 50,
                  userId: row.userId,
                  partType: "avatar"
                }, null, 8, ["userId"])
              ]),
              slotNickName: withCtx(({ index, row }) => [
                createTextVNode(toDisplayString(row.nickName) + " ", 1),
                row.sex == 0 ? (openBlock(), createElementBlock("span", _hoisted_2)) : createCommentVNode("", true),
                row.sex == 1 ? (openBlock(), createElementBlock("span", _hoisted_3)) : createCommentVNode("", true)
              ]),
              slotStatus: withCtx(({ index, row }) => [
                row.status == 0 ? (openBlock(), createElementBlock("span", _hoisted_4, "未使用")) : (openBlock(), createElementBlock("span", _hoisted_5, "已使用"))
              ]),
              slotOnline: withCtx(({ index, row }) => [
                !row.status || row.onlineType == 1 ? (openBlock(), createElementBlock("span", _hoisted_6, "在线")) : (openBlock(), createElementBlock("span", _hoisted_7, "离线"))
              ]),
              slotOperation: withCtx(({ index, row }) => [
                createVNode(_component_el_dropdown, {
                  placement: "bottom-end",
                  trigger: "click"
                }, {
                  dropdown: withCtx(() => [
                    row.status == 0 ? (openBlock(), createBlock(_component_el_dropdown_item, {
                      key: 0,
                      onClick: ($event) => editAccount(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("修改")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true),
                    createVNode(_component_el_dropdown_item, {
                      onClick: ($event) => delAccount(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("删除")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  default: withCtx(() => [
                    _hoisted_8
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            }, 8, ["dataSource"])
          ]),
          _: 1
        }),
        createVNode(_sfc_main$1, {
          ref_key: "beautyAccountEditRef",
          ref: beautyAccountEditRef,
          onReload: loadDataList
        }, null, 512)
      ]);
    };
  }
};
const BeautyAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b901d334"]]);
export {
  BeautyAccount as default
};
