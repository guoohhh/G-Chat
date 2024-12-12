import { _ as _export_sfc, b as getCurrentInstance, f as resolveComponent, h as openBlock, i as createElementBlock, k as createVNode, j as createBaseVNode, bK as useContactStateStore, u as useRouter, I as useRoute, r as ref, A as watch, m as createBlock, w as withCtx, G as withDirectives, H as vShow, n as renderList, F as Fragment, t as toDisplayString, D as normalizeClass, E as unref, J as normalizeStyle, p as createCommentVNode, K as resolveDynamicComponent, v as pushScopeId, x as popScopeId } from "./index-d3de2193.js";
import { u as useMessageCountStore } from "./MessageCountStore-55153eb3.js";
const ContactSearchResult_vue_vue_type_style_index_0_scoped_5b1eef1b_lang = "";
const _hoisted_1$1 = { class: "search-item" };
const _hoisted_2$1 = { class: "contact-info" };
const _hoisted_3$1 = ["innerHTML"];
const _sfc_main$1 = {
  __name: "ContactSearchResult",
  props: {
    data: {
      type: Object
    }
  },
  setup(__props) {
    getCurrentInstance();
    return (_ctx, _cache) => {
      const _component_Avatar = resolveComponent("Avatar");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_Avatar, {
          userId: __props.data.contactId,
          showDetail: false
        }, null, 8, ["userId"]),
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", {
            class: "contact-name",
            innerHTML: __props.data.contactName
          }, null, 8, _hoisted_3$1)
        ])
      ]);
    };
  }
};
const ContactSearchResult = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5b1eef1b"]]);
const Contact_vue_vue_type_style_index_0_scoped_bf6bc679_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-bf6bc679"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "drag-panel drag" }, null, -1));
const _hoisted_2 = { class: "top-search" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "iconfont icon-search" }, null, -1));
const _hoisted_4 = { class: "contact-list" };
const _hoisted_5 = { class: "part-title" };
const _hoisted_6 = { class: "part-list" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "text" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "text" };
const _hoisted_11 = {
  key: 0,
  class: "no-data"
};
const _hoisted_12 = { class: "search-list" };
const _hoisted_13 = { class: "title-panel drag" };
const _sfc_main = {
  __name: "Contact",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const contactStateStore = useContactStateStore();
    const messageCountStore = useMessageCountStore();
    const router = useRouter();
    const route = useRoute();
    const partList = ref([
      {
        partName: "新朋友",
        children: [
          {
            name: "搜好友",
            icon: "icon-search",
            iconBgColor: "#fa9d3b",
            path: "/contact/search"
          },
          {
            name: "新的朋友",
            icon: "icon-plane",
            iconBgColor: "#08bf61",
            path: "/contact/contactNotice",
            showTitle: true,
            countKey: "contactApplyCount"
          }
        ]
      },
      {
        partName: "我的群聊",
        children: [
          {
            name: "新建群聊",
            icon: "icon-add-group",
            iconBgColor: "#1485ee",
            path: "/contact/createGroup"
          }
        ],
        contactId: "groupId",
        contactName: "groupName",
        showTitle: true,
        contactData: [],
        contactPath: "/contact/groupDetail"
      },
      {
        partName: "我加入的群聊",
        contactId: "contactId",
        contactName: "contactName",
        showTitle: true,
        contactData: [],
        contactPath: "/contact/groupDetail",
        emptyMsg: "暂未加入群聊"
      },
      {
        partName: "我的好友",
        children: [],
        contactId: "contactId",
        contactName: "contactName",
        contactData: [],
        contactPath: "/contact/userDetail",
        emptyMsg: "暂无好友"
      }
    ]);
    const rightTitle = ref();
    const partJump = (data) => {
      if (data.showTitle) {
        rightTitle.value = data.name;
      } else {
        rightTitle.value = null;
      }
      if (data.countKey) {
        messageCountStore.setCount(data.countKey, 0, true);
        window.ipcRenderer.send("updateContactNoReadCount");
      }
      router.push(data.path);
    };
    const loadContact = async (contactType) => {
      let result = await proxy.Request({
        url: proxy.Api.loadContact,
        showLoading: false,
        params: {
          contactType
        }
      });
      if (!result) {
        return;
      }
      if (contactType === "GROUP") {
        partList.value[2].contactData = result.data;
      } else if (contactType === "USER") {
        partList.value[3].contactData = result.data;
      }
    };
    loadContact("USER");
    loadContact("GROUP");
    const loadMyGroup = async () => {
      let result = await proxy.Request({
        url: proxy.Api.loadMyGroup
      });
      if (!result) {
        return;
      }
      partList.value[1].contactData = result.data;
    };
    loadMyGroup();
    const contactDetail = (contact, part) => {
      if (part.showTitle) {
        rightTitle.value = contact[part.contactName];
      } else {
        rightTitle.value = null;
      }
      router.push({
        path: part.contactPath,
        query: {
          contactId: contact[part.contactId]
        }
      });
    };
    const searchKey = ref();
    const searchList = ref([]);
    const search = () => {
      if (!searchKey.value) {
        return;
      }
      searchList.value = [];
      var regex = new RegExp("(" + searchKey.value + ")", "gi");
      let allContactList = [];
      partList.value.forEach((item) => {
        if (item.contactData) {
          allContactList = allContactList.concat(item.contactData);
        }
      });
      allContactList.forEach((item) => {
        let contactName = item.groupId ? item.groupName : item.contactName;
        if (contactName.includes(searchKey.value)) {
          contactName = contactName.replace(regex, "<span class='highlight'>$1</span>");
          let newData = {
            contactName,
            contactId: item.groupId || item.contactId
          };
          searchList.value.push(newData);
        }
      });
    };
    const searchClickHandler = (data) => {
      searchKey.value = void 0;
      router.push({ path: "/chat", query: { chatId: data.contactId, timestamp: (/* @__PURE__ */ new Date()).getTime() } });
    };
    watch(
      () => contactStateStore.contactReload,
      (newVal, oldVal) => {
        if (!newVal) {
          return;
        }
        switch (newVal) {
          case "MY":
            loadMyGroup();
            break;
          case "USER":
          case "GROUP":
            loadContact(newVal);
            break;
          case "DISSOLUTION_GROUP":
            loadMyGroup();
            router.push("/contact/blank");
            rightTitle.value = null;
            break;
          case "LEAVE_GROUP":
            loadContact("GROUP");
            router.push("/contact/blank");
            rightTitle.value = null;
            break;
          case "REMOVE_USER":
            loadContact("USER");
            router.push("/contact/blank");
            rightTitle.value = null;
            break;
        }
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_Badge = resolveComponent("Badge");
      const _component_Avatar = resolveComponent("Avatar");
      const _component_router_view = resolveComponent("router-view");
      const _component_Layout = resolveComponent("Layout");
      return openBlock(), createBlock(_component_Layout, null, {
        "left-content": withCtx(() => [
          _hoisted_1,
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_el_input, {
              placeholder: "搜索",
              modelValue: searchKey.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchKey.value = $event),
              size: "small",
              onKeyup: search
            }, {
              suffix: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          withDirectives(createBaseVNode("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(partList.value, (item) => {
              return openBlock(), createElementBlock(Fragment, null, [
                createBaseVNode("div", _hoisted_5, toDisplayString(item.partName), 1),
                createBaseVNode("div", _hoisted_6, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (sub) => {
                    return openBlock(), createElementBlock("div", {
                      class: normalizeClass(["part-item", sub.path == unref(route).path ? "active" : ""]),
                      onClick: ($event) => partJump(sub)
                    }, [
                      createBaseVNode("div", {
                        class: normalizeClass(["iconfont", sub.icon]),
                        style: normalizeStyle({ background: sub.iconBgColor })
                      }, null, 6),
                      createBaseVNode("div", _hoisted_8, toDisplayString(sub.name), 1),
                      createVNode(_component_Badge, {
                        count: unref(messageCountStore).getCount(sub.countKey),
                        top: 3,
                        left: 45
                      }, null, 8, ["count"])
                    ], 10, _hoisted_7);
                  }), 256)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.contactData, (contact) => {
                    return openBlock(), createElementBlock("div", {
                      class: normalizeClass([
                        "part-item",
                        contact[item.contactId] == unref(route).query.contactId ? "active" : ""
                      ]),
                      onClick: ($event) => contactDetail(contact, item)
                    }, [
                      createVNode(_component_Avatar, {
                        userId: contact[item.contactId],
                        width: 35
                      }, null, 8, ["userId"]),
                      createBaseVNode("div", _hoisted_10, toDisplayString(contact[item.contactName]), 1)
                    ], 10, _hoisted_9);
                  }), 256)),
                  item.contactData && item.contactData.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString(item.emptyMsg), 1)) : createCommentVNode("", true)
                ])
              ], 64);
            }), 256))
          ], 512), [
            [vShow, !searchKey.value]
          ]),
          withDirectives(createBaseVNode("div", _hoisted_12, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(searchList.value, (item) => {
              return openBlock(), createBlock(ContactSearchResult, {
                onClick: ($event) => searchClickHandler(item),
                data: item
              }, null, 8, ["onClick", "data"]);
            }), 256))
          ], 512), [
            [vShow, searchKey.value]
          ])
        ]),
        "right-content": withCtx(() => [
          createBaseVNode("div", _hoisted_13, toDisplayString(rightTitle.value), 1),
          createVNode(_component_router_view, null, {
            default: withCtx(({ Component }) => [
              (openBlock(), createBlock(resolveDynamicComponent(Component), { ref: "componentRef" }, null, 512))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf6bc679"]]);
export {
  Contact as default
};
