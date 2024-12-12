import { _ as _export_sfc, b as getCurrentInstance, r as ref, f as resolveComponent, h as openBlock, i as createElementBlock, j as createBaseVNode, k as createVNode, w as withCtx, F as Fragment, q as withKeys, s as createTextVNode, L as AvatarBase, t as toDisplayString, p as createCommentVNode, m as createBlock, v as pushScopeId, x as popScopeId } from "./index-d3de2193.js";
const UserList_vue_vue_type_style_index_0_scoped_7c40e4a8_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-7c40e4a8"), n = n(), popScopeId(), n);
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
const _hoisted_9 = { key: 1 };
const _sfc_main = {
  __name: "UserList",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const tableData = ref({});
    const tableOptions = {};
    const columns = [
      {
        label: "头像",
        prop: "userId",
        width: 70,
        scopedSlots: "slotAvatar"
      },
      {
        label: "昵称",
        prop: "nickName",
        scopedSlots: "slotNickName"
      },
      {
        label: "邮箱",
        prop: "email",
        width: 200
      },
      {
        label: "加入时间",
        prop: "createTime",
        width: 200
      },
      {
        label: "地区",
        prop: "areaName",
        width: 150
      },
      {
        label: "用户状态",
        prop: "status",
        width: 100,
        scopedSlots: "slotStatus"
      },
      {
        label: "在线状态",
        prop: "onlineType",
        width: 100,
        scopedSlots: "slotOnline"
      },
      {
        label: "操作",
        prop: "operation",
        width: 100,
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
        url: proxy.Api.loadAdminAccount,
        params
      });
      if (!result) {
        return;
      }
      Object.assign(tableData.value, result.data);
    };
    const changeAccountStatus = (data) => {
      let status = data.status == 0 ? 1 : 0;
      let info = status == 0 ? "禁用" : "启用";
      proxy.Confirm({
        message: `确认要【${info}】【${data.nickName}】吗？`,
        okfun: async () => {
          let result = await proxy.Request({
            url: proxy.Api.updateUserStatus,
            params: {
              userId: data.userId,
              status
            }
          });
          if (!result) {
            return;
          }
          proxy.Message.success("操作成功");
          loadDataList();
        }
      });
    };
    const forceOffLine = (data) => {
      proxy.Confirm({
        message: `确认要将【${data.nickName}】强制下线吗？`,
        okfun: async () => {
          let result = await proxy.Request({
            url: proxy.Api.forceOffLine,
            params: {
              userId: data.userId
            }
          });
          if (!result) {
            return;
          }
          proxy.Message.success("操作成功");
          loadDataList();
        }
      });
    };
    const userInfo = ref({});
    const getLoginInfo = async () => {
      let result = await proxy.Request({
        url: proxy.Api.getUserInfo
      });
      if (!result) {
        return;
      }
      userInfo.value = result.data;
    };
    getLoginInfo();
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_card = resolveComponent("el-card");
      const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
      const _component_el_dropdown = resolveComponent("el-dropdown");
      const _component_Table = resolveComponent("Table");
      return openBlock(), createElementBlock(Fragment, null, [
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
                            label: "UID",
                            "label-width": "40px"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                class: "password-input",
                                modelValue: searchForm.value.userId,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchForm.value.userId = $event),
                                clearable: "",
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
                          createVNode(_component_el_form_item, { label: "昵称" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                class: "password-input",
                                modelValue: searchForm.value.nickNameFuzzy,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchForm.value.nickNameFuzzy = $event),
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
                createVNode(AvatarBase, {
                  width: 50,
                  userId: row.userId,
                  partType: "avatar"
                }, null, 8, ["userId"])
              ]),
              slotNickName: withCtx(({ index, row }) => [
                createTextVNode(toDisplayString(row.nickName) + " (" + toDisplayString(row.userId) + ") ", 1),
                row.sex == 0 ? (openBlock(), createElementBlock("span", _hoisted_2)) : createCommentVNode("", true),
                row.sex == 1 ? (openBlock(), createElementBlock("span", _hoisted_3)) : createCommentVNode("", true)
              ]),
              slotStatus: withCtx(({ index, row }) => [
                row.status == 0 ? (openBlock(), createElementBlock("span", _hoisted_4, "禁用")) : (openBlock(), createElementBlock("span", _hoisted_5, "启用"))
              ]),
              slotOnline: withCtx(({ index, row }) => [
                row.onlineType == 1 ? (openBlock(), createElementBlock("span", _hoisted_6, "在线")) : (openBlock(), createElementBlock("span", _hoisted_7, "离线"))
              ]),
              slotOperation: withCtx(({ index, row }) => [
                userInfo.value.userId != row.userId ? (openBlock(), createBlock(_component_el_dropdown, {
                  key: 0,
                  placement: "bottom-end",
                  trigger: "click"
                }, {
                  dropdown: withCtx(() => [
                    createVNode(_component_el_dropdown_item, {
                      onClick: ($event) => changeAccountStatus(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.status == 0 ? "启用" : "禁用"), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    row.onlineType == 1 ? (openBlock(), createBlock(_component_el_dropdown_item, {
                      key: 0,
                      onClick: ($event) => forceOffLine(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("强制下线")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  default: withCtx(() => [
                    _hoisted_8
                  ]),
                  _: 2
                }, 1024)) : (openBlock(), createElementBlock("div", _hoisted_9, "管理员"))
              ]),
              _: 1
            }, 8, ["dataSource"])
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
const UserList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7c40e4a8"]]);
export {
  UserList as default
};
