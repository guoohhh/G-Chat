import { _ as _export_sfc, b as getCurrentInstance, r as ref, f as resolveComponent, h as openBlock, i as createElementBlock, j as createBaseVNode, k as createVNode, w as withCtx, q as withKeys, s as createTextVNode, L as AvatarBase, t as toDisplayString, p as createCommentVNode } from "./index-d3de2193.js";
const GroupList_vue_vue_type_style_index_0_scoped_1c34e40a_lang = "";
const _hoisted_1 = { class: "top-panel" };
const _hoisted_2 = {
  key: 0,
  style: { "color": "red" }
};
const _hoisted_3 = {
  key: 1,
  style: { "color": "green" }
};
const _hoisted_4 = { class: "row-op-panel" };
const _hoisted_5 = ["onClick"];
const _sfc_main = {
  __name: "GroupList",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const tableData = ref({});
    const tableOptions = {};
    const columns = [
      {
        label: "头像",
        prop: "groupId",
        width: 70,
        scopedSlots: "slotAvatar"
      },
      {
        label: "群名称",
        prop: "groupName",
        scopedSlots: "slotGroupName"
      },
      {
        label: "群主",
        prop: "groupOwnerNickName",
        scopedSlots: "slotGroupOwnerNickName"
      },
      {
        label: "群员",
        prop: "memberCount",
        width: 200
      },
      {
        label: "创建时间",
        prop: "createTime",
        width: 200
      },
      {
        label: "加入方式",
        prop: "joinType",
        width: 150,
        scopedSlots: "slotJoinType"
      },
      {
        label: "状态",
        prop: "status",
        width: 150,
        scopedSlots: "slotStatus"
      },
      {
        label: "操作",
        prop: "operation",
        width: 80,
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
        url: proxy.Api.loadGroup,
        params
      });
      if (!result) {
        return;
      }
      Object.assign(tableData.value, result.data);
    };
    const dissolutionGroup = (data) => {
      proxy.Confirm({
        message: `确认要解散群组【${data.groupName}】吗？`,
        okfun: async () => {
          let result = await proxy.Request({
            url: proxy.Api.adminDissolutionGroup,
            params: {
              groupId: data.groupId
            }
          });
          if (!result) {
            return;
          }
          proxy.Message.success("解散成功");
          loadDataList();
        }
      });
    };
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_card = resolveComponent("el-card");
      const _component_Table = resolveComponent("Table");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_el_card, null, {
            default: withCtx(() => [
              createVNode(_component_el_form, {
                model: searchForm.value,
                "label-width": "80px",
                "label-position": "right"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, { span: 5 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            label: "群组ID",
                            "label-width": "55px"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                class: "password-input",
                                modelValue: searchForm.value.groupId,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchForm.value.groupId = $event),
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
                          createVNode(_component_el_form_item, { label: "群名称" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                class: "password-input",
                                modelValue: searchForm.value.groupNameFuzzy,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchForm.value.groupNameFuzzy = $event),
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
                          createVNode(_component_el_form_item, { label: "群主UID" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                class: "password-input",
                                modelValue: searchForm.value.groupOwnerId,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => searchForm.value.groupOwnerId = $event),
                                clearable: "",
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
                            onClick: _cache[3] || (_cache[3] = ($event) => loadDataList())
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
                  userId: row.groupId,
                  partType: "avatar"
                }, null, 8, ["userId"])
              ]),
              slotGroupName: withCtx(({ index, row }) => [
                createTextVNode(toDisplayString(row.groupName) + "(" + toDisplayString(row.groupId) + ") ", 1)
              ]),
              slotGroupOwnerNickName: withCtx(({ index, row }) => [
                createTextVNode(toDisplayString(row.groupOwnerNickName) + "(" + toDisplayString(row.groupOwnerId) + ") ", 1)
              ]),
              slotJoinType: withCtx(({ index, row }) => [
                createBaseVNode("div", null, toDisplayString(row.joinType == 0 ? "直接加入" : "管理员同意后加入"), 1)
              ]),
              slotStatus: withCtx(({ index, row }) => [
                createBaseVNode("div", null, [
                  row.status == 0 ? (openBlock(), createElementBlock("span", _hoisted_2, "已解散")) : createCommentVNode("", true),
                  row.status == 1 ? (openBlock(), createElementBlock("span", _hoisted_3, "正常")) : createCommentVNode("", true)
                ])
              ]),
              slotOperation: withCtx(({ index, row }) => [
                createBaseVNode("div", _hoisted_4, [
                  row.status == 1 ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    href: "javascript:void(0)",
                    onClick: ($event) => dissolutionGroup(row)
                  }, "解散", 8, _hoisted_5)) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            }, 8, ["dataSource"])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const GroupList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c34e40a"]]);
export {
  GroupList as default
};
