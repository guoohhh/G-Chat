import { _ as _export_sfc, b as getCurrentInstance, I as useRoute, u as useRouter, bK as useContactStateStore, r as ref, A as watch, f as resolveComponent, h as openBlock, m as createBlock, w as withCtx, j as createBaseVNode, k as createVNode, s as createTextVNode, t as toDisplayString, v as pushScopeId, x as popScopeId } from "./index-347654a5.js";
const UserDetail_vue_vue_type_style_index_0_scoped_50c97ce1_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-50c97ce1"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "user-info" };
const _hoisted_2 = { class: "more-op" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "el-dropdown-link" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "iconfont icon-more" })
], -1));
const _hoisted_4 = { class: "part-item" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "part-title" }, "个性签名", -1));
const _hoisted_6 = { class: "part-content" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "iconfont icon-chat2" }, null, -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text" }, "发消息", -1));
const _hoisted_9 = [
  _hoisted_7,
  _hoisted_8
];
const _sfc_main = {
  __name: "UserDetail",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const router = useRouter();
    const contactStateStore = useContactStateStore();
    const userInfo = ref({});
    const loadUserDetail = async (contactId) => {
      let result = await proxy.Request({
        url: proxy.Api.getContactUserInfo,
        params: {
          contactId
        }
      });
      if (!result) {
        return;
      }
      userInfo.value = result.data;
    };
    const addContact2BlackList = () => {
      proxy.Confirm({
        message: "确定要将用户加入黑名单？",
        okfun: async () => {
          let result = await proxy.Request({
            url: proxy.Api.addContact2BlackList,
            params: {
              contactId: userInfo.value.userId
            }
          });
          if (!result) {
            return;
          }
          delContactData(userInfo.value.userId);
        }
      });
    };
    const delContact = () => {
      proxy.Confirm({
        message: "确定要删除联系人？",
        okfun: async () => {
          let result = await proxy.Request({
            url: proxy.Api.delContact,
            params: {
              contactId: userInfo.value.userId
            }
          });
          if (!result) {
            return;
          }
          delContactData(userInfo.value.userId);
        }
      });
    };
    const delContactData = (contactId) => {
      contactStateStore.setContactReload("REMOVE_USER");
      contactStateStore.delContact(contactId);
    };
    watch(
      () => route.query.contactId,
      (newVal, oldVal) => {
        if (newVal) {
          loadUserDetail(newVal);
        }
      },
      { immediate: true, deep: true }
    );
    const sendMessage = () => {
      router.push({
        path: "/chat",
        query: { chatId: userInfo.value.userId, timestamp: (/* @__PURE__ */ new Date()).getTime() }
      });
    };
    return (_ctx, _cache) => {
      const _component_UserBaseInfo = resolveComponent("UserBaseInfo");
      const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = resolveComponent("el-dropdown");
      const _component_ContentPanel = resolveComponent("ContentPanel");
      return openBlock(), createBlock(_component_ContentPanel, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_UserBaseInfo, { userInfo: userInfo.value }, null, 8, ["userInfo"]),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_el_dropdown, {
                placement: "bottom-end",
                trigger: "click"
              }, {
                dropdown: withCtx(() => [
                  createVNode(_component_el_dropdown_menu, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_dropdown_item, { onClick: addContact2BlackList }, {
                        default: withCtx(() => [
                          createTextVNode("加入黑名单")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_dropdown_item, { onClick: delContact }, {
                        default: withCtx(() => [
                          createTextVNode("删除联系人")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  _hoisted_3
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_4, [
            _hoisted_5,
            createBaseVNode("div", _hoisted_6, toDisplayString(userInfo.value.personalSignature || "-"), 1)
          ]),
          createBaseVNode("div", {
            class: "send-message",
            onClick: sendMessage
          }, _hoisted_9)
        ]),
        _: 1
      });
    };
  }
};
const UserDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-50c97ce1"]]);
export {
  UserDetail as default
};
