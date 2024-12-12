import { _ as _sfc_main$2 } from "./GroupEditForm-9c8635e7.js";
import { b as getCurrentInstance, r as ref, f as resolveComponent, h as openBlock, m as createBlock, w as withCtx, k as createVNode, y as nextTick, _ as _export_sfc, I as useRoute, u as useRouter, d as useUserInfoStore, bK as useContactStateStore, A as watch, i as createElementBlock, F as Fragment, j as createBaseVNode, E as unref, s as createTextVNode, t as toDisplayString, v as pushScopeId, x as popScopeId } from "./index-d3de2193.js";
import "./AvatarUpload-860c6215.js";
const _sfc_main$1 = {
  __name: "GroupEditDialog",
  emits: ["reloadGroupInfo"],
  setup(__props, { expose: __expose, emit: __emit }) {
    getCurrentInstance();
    const dialogConfig = ref({
      show: false,
      title: "修改群组",
      buttons: []
    });
    const groupEditRef = ref();
    const show = (data) => {
      dialogConfig.value.show = true;
      nextTick(() => {
        groupEditRef.value.show(data);
      });
    };
    const emit = __emit;
    const eidtBack = () => {
      dialogConfig.value.show = false;
      emit("reloadGroupInfo");
    };
    __expose({
      show
    });
    return (_ctx, _cache) => {
      const _component_Dialog = resolveComponent("Dialog");
      return openBlock(), createBlock(_component_Dialog, {
        show: dialogConfig.value.show,
        title: dialogConfig.value.title,
        buttons: dialogConfig.value.buttons,
        width: "400px",
        showCancel: false,
        onClose: _cache[0] || (_cache[0] = ($event) => dialogConfig.value.show = false)
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$2, {
            ref_key: "groupEditRef",
            ref: groupEditRef,
            onEidtBack: eidtBack
          }, null, 512)
        ]),
        _: 1
      }, 8, ["show", "title", "buttons"]);
    };
  }
};
const GroupDetail_vue_vue_type_style_index_0_scoped_56f047b9_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-56f047b9"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "group-info-item" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "group-title" }, "群封面：", -1));
const _hoisted_3 = { class: "group-value" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "el-dropdown-link" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "iconfont icon-more" })
], -1));
const _hoisted_5 = { class: "group-info-item" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "group-title" }, "群ID：", -1));
const _hoisted_7 = { class: "group-value" };
const _hoisted_8 = { class: "group-info-item" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "group-title" }, "群名称：", -1));
const _hoisted_10 = { class: "group-value" };
const _hoisted_11 = { class: "group-info-item" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "group-title" }, "群成员：", -1));
const _hoisted_13 = { class: "group-value" };
const _hoisted_14 = { class: "group-info-item" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "group-title" }, "加入权限：", -1));
const _hoisted_16 = { class: "group-value" };
const _hoisted_17 = { class: "group-info-item notice" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "group-title" }, "公告：", -1));
const _hoisted_19 = { class: "group-value" };
const _hoisted_20 = { class: "group-info-item" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "group-title" }, null, -1));
const _hoisted_22 = { class: "group-value" };
const _sfc_main = {
  __name: "GroupDetail",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const router = useRouter();
    const userInfoStore = useUserInfoStore();
    const contactStateStore = useContactStateStore();
    const groupInfo = ref({});
    const groupId = ref();
    const getGroupInfo = async () => {
      let result = await proxy.Request({
        url: proxy.Api.getGroupInfo,
        params: {
          groupId: groupId.value
        }
      });
      if (!result) {
        return;
      }
      groupInfo.value = result.data;
    };
    const groupEditDialogRef = ref();
    const eidtGroupInfo = () => {
      groupEditDialogRef.value.show(groupInfo.value);
    };
    const dissolutionGroup = () => {
      proxy.Confirm({
        message: "确定要删除群组?删除后将无法恢复!",
        okfun: async () => {
          contactStateStore.setContactReload(null);
          let result = await proxy.Request({
            url: proxy.Api.dissolutionGroup,
            params: {
              groupId: groupInfo.value.groupId
            }
          });
          if (!result) {
            return;
          }
          proxy.Message.success("解散成功");
          contactStateStore.setContactReload("DISSOLUTION_GROUP");
        }
      });
    };
    const leaveGroup = () => {
      proxy.Confirm({
        message: "确定要退出群组?",
        okfun: async () => {
          contactStateStore.setContactReload(null);
          let result = await proxy.Request({
            url: proxy.Api.leaveGroup,
            params: {
              groupId: groupInfo.value.groupId
            }
          });
          if (!result) {
            return;
          }
          proxy.Message.success("退出成功");
          contactStateStore.setContactReload("LEAVE_GROUP");
        }
      });
    };
    const sendMessage = () => {
      router.push({
        path: "/chat",
        query: { chatId: groupInfo.value.groupId, timestamp: (/* @__PURE__ */ new Date()).getTime() }
      });
    };
    watch(
      () => route.query.contactId,
      (newVal, oldVal) => {
        if (newVal) {
          groupId.value = newVal;
          getGroupInfo();
        }
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _cache) => {
      const _component_Avatar = resolveComponent("Avatar");
      const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = resolveComponent("el-dropdown");
      const _component_el_button = resolveComponent("el-button");
      const _component_ContentPanel = resolveComponent("ContentPanel");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_ContentPanel, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              _hoisted_2,
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_Avatar, {
                  userId: groupInfo.value.groupId,
                  contactType: 1
                }, null, 8, ["userId"])
              ]),
              createVNode(_component_el_dropdown, {
                placement: "bottom-end",
                trigger: "click"
              }, {
                dropdown: withCtx(() => [
                  groupInfo.value.groupOwnerId == unref(userInfoStore).getInfo().userId ? (openBlock(), createBlock(_component_el_dropdown_menu, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_dropdown_item, { onClick: eidtGroupInfo }, {
                        default: withCtx(() => [
                          createTextVNode("修改群信息")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_dropdown_item, { onClick: dissolutionGroup }, {
                        default: withCtx(() => [
                          createTextVNode("解散该群")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(_component_el_dropdown_menu, { key: 1 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_dropdown_item, { onClick: leaveGroup }, {
                        default: withCtx(() => [
                          createTextVNode("退出该群")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }))
                ]),
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
              createBaseVNode("div", _hoisted_7, toDisplayString(groupInfo.value.groupId), 1)
            ]),
            createBaseVNode("div", _hoisted_8, [
              _hoisted_9,
              createBaseVNode("div", _hoisted_10, toDisplayString(groupInfo.value.groupName), 1)
            ]),
            createBaseVNode("div", _hoisted_11, [
              _hoisted_12,
              createBaseVNode("div", _hoisted_13, toDisplayString(groupInfo.value.memberCount), 1)
            ]),
            createBaseVNode("div", _hoisted_14, [
              _hoisted_15,
              createBaseVNode("div", _hoisted_16, toDisplayString(groupInfo.value.joinType == 0 ? "直接加入" : "管理员同意后加入"), 1)
            ]),
            createBaseVNode("div", _hoisted_17, [
              _hoisted_18,
              createBaseVNode("div", _hoisted_19, toDisplayString(groupInfo.value.groupNotice || "-"), 1)
            ]),
            createBaseVNode("div", _hoisted_20, [
              _hoisted_21,
              createBaseVNode("div", _hoisted_22, [
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: sendMessage
                }, {
                  default: withCtx(() => [
                    createTextVNode("发送群消息")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }),
        createVNode(_sfc_main$1, {
          ref_key: "groupEditDialogRef",
          ref: groupEditDialogRef,
          onReloadGroupInfo: getGroupInfo
        }, null, 512)
      ], 64);
    };
  }
};
const GroupDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-56f047b9"]]);
export {
  GroupDetail as default
};
