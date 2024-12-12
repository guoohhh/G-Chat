import { _ as _export_sfc, b as getCurrentInstance, bK as useContactStateStore, r as ref, A as watch, f as resolveComponent, b5 as resolveDirective, G as withDirectives, h as openBlock, m as createBlock, w as withCtx, j as createBaseVNode, i as createElementBlock, n as renderList, D as normalizeClass, t as toDisplayString, k as createVNode, s as createTextVNode, F as Fragment, p as createCommentVNode } from "./index-347654a5.js";
import { u as useMessageCountStore } from "./MessageCountStore-7221543c.js";
const ContactApply_vue_vue_type_style_index_0_scoped_abdb3c0c_lang = "";
const _hoisted_1 = { class: "apply-item" };
const _hoisted_2 = { class: "contact-info" };
const _hoisted_3 = { class: "nick-name" };
const _hoisted_4 = { class: "apply-info" };
const _hoisted_5 = { class: "op-btn" };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { class: "el-dropdown-link" };
const _hoisted_8 = {
  key: 1,
  class: "result-name"
};
const _hoisted_9 = {
  key: 0,
  class: "no-data"
};
const _sfc_main = {
  __name: "ContactApply",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const contactStateStore = useContactStateStore();
    const messageCountStore = useMessageCountStore();
    const applyList = ref([]);
    let pageNo = 0;
    let pageTotal = 1;
    const loadApply = async () => {
      pageNo++;
      if (pageNo > pageTotal) {
        return;
      }
      let result = await proxy.Request({
        url: proxy.Api.loadApply,
        params: {
          pageNo
        }
      });
      if (!result) {
        return;
      }
      pageTotal = result.data.pageTotal;
      if (result.data.pageNo == 1) {
        applyList.value = [];
      }
      applyList.value = applyList.value.concat(result.data.list);
      pageNo = result.data.pageNo;
    };
    loadApply();
    const dealWithApply = (applyId, contactType, status) => {
      contactStateStore.setContactReload(null);
      proxy.Confirm({
        message: "确定要执行操作吗?",
        okfun: async () => {
          let result = await proxy.Request({
            url: proxy.Api.dealWithApply,
            params: {
              applyId,
              status
            }
          });
          if (!result) {
            return;
          }
          pageNo = 0;
          loadApply();
          if (contactType == 0 && status == 1) {
            contactStateStore.setContactReload("USER");
          } else if (contactType == 1 && status == 1) {
            contactStateStore.setContactReload("GROUP");
          }
        }
      });
    };
    watch(
      () => messageCountStore.messageCount.contactApplyCount,
      (newVal, oldVal) => {
        if (newVal) {
          console.log(newVal);
          pageNo = 0;
          loadApply();
        }
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _cache) => {
      const _component_Avatar = resolveComponent("Avatar");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
      const _component_el_dropdown = resolveComponent("el-dropdown");
      const _component_ContentPanel = resolveComponent("ContentPanel");
      const _directive_infinite_scroll = resolveDirective("infinite-scroll");
      return withDirectives((openBlock(), createBlock(_component_ContentPanel, {
        "infinite-scroll-immediate": false,
        showTopBorder: true
      }, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(applyList.value, (item) => {
              return openBlock(), createElementBlock("div", _hoisted_1, [
                createBaseVNode("div", {
                  class: normalizeClass(["contact-type", item.contactType == 0 ? "user-contact" : ""])
                }, toDisplayString(item.contactType == 0 ? "好友" : "群聊"), 3),
                createVNode(_component_Avatar, {
                  width: 50,
                  userId: item.applyUserId,
                  lastUpdateTime: item.iconLastUpdateTime
                }, null, 8, ["userId", "lastUpdateTime"]),
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("div", _hoisted_3, toDisplayString(item.contactName), 1),
                  createBaseVNode("div", _hoisted_4, toDisplayString(item.applyInfo), 1)
                ]),
                createBaseVNode("div", _hoisted_5, [
                  item.status == 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
                    createVNode(_component_el_dropdown, {
                      placement: "bottom-end",
                      trigger: "click"
                    }, {
                      dropdown: withCtx(() => [
                        createVNode(_component_el_dropdown_item, {
                          onClick: ($event) => dealWithApply(item.applyId, item.contactType, 1)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("同意")
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(_component_el_dropdown_item, {
                          onClick: ($event) => dealWithApply(item.applyId, item.contactType, 2)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("拒绝")
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(_component_el_dropdown_item, {
                          onClick: ($event) => dealWithApply(item.applyId, item.contactType, 3)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("拉黑")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createBaseVNode("span", _hoisted_7, [
                          createVNode(_component_el_button, {
                            type: "primary",
                            size: "small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("接受")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ])) : (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(item.statusName), 1))
                ])
              ]);
            }), 256))
          ]),
          applyList.value.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_9, "暂无申请")) : createCommentVNode("", true)
        ]),
        _: 1
      })), [
        [_directive_infinite_scroll, loadApply]
      ]);
    };
  }
};
const ContactApply = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-abdb3c0c"]]);
export {
  ContactApply as default
};
