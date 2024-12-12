import { _ as _export_sfc, b as getCurrentInstance, d as useUserInfoStore, u as useRouter, a7 as computed, r as ref, f as resolveComponent, h as openBlock, i as createElementBlock, k as createVNode, w as withCtx, F as Fragment, j as createBaseVNode, q as withKeys, t as toDisplayString, E as unref, m as createBlock, s as createTextVNode, p as createCommentVNode, bL as _sfc_main$1 } from "./index-d3de2193.js";
const Search_vue_vue_type_style_index_0_scoped_9c9453b6_lang = "";
const _hoisted_1 = { class: "search-form" };
const _hoisted_2 = {
  key: 0,
  class: "search-result-panel"
};
const _hoisted_3 = { class: "search-result" };
const _hoisted_4 = { class: "contact-type" };
const _hoisted_5 = {
  key: 0,
  class: "op-btn"
};
const _hoisted_6 = { key: 2 };
const _hoisted_7 = {
  key: 1,
  class: "no-data"
};
const _sfc_main = {
  __name: "Search",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const userInfoStore = useUserInfoStore();
    const router = useRouter();
    const contactTypeName = computed(() => {
      if (userInfoStore.getInfo().userId === searchResult.value.contactId) {
        return "自己";
      }
      if (searchResult.value.contactType == "USER") {
        return "用户";
      }
      if (searchResult.value.contactType == "GROUP") {
        return "群组";
      }
    });
    const contactId = ref();
    const searchResult = ref({});
    const search = async () => {
      let result = await proxy.Request({
        url: proxy.Api.search,
        params: {
          contactId: contactId.value
        }
      });
      if (!result) {
        return;
      }
      searchResult.value = result.data;
    };
    const searchAddRef = ref();
    const applyContact = async () => {
      searchAddRef.value.show(searchResult.value);
    };
    const resetForm = () => {
      searchResult.value = {};
      contactId.value = void 0;
    };
    const sendMessage = () => {
      router.push({ path: "/chat", query: { chatId: searchResult.value.contactId } });
    };
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_UserBaseInfo = resolveComponent("UserBaseInfo");
      const _component_el_button = resolveComponent("el-button");
      const _component_ContentPanel = resolveComponent("ContentPanel");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_ContentPanel, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createVNode(_component_el_input, {
                clearable: "",
                placeholder: "请输入用户ID或群组ID",
                modelValue: contactId.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => contactId.value = $event),
                size: "large",
                onKeydown: withKeys(search, ["enter"])
              }, null, 8, ["modelValue"]),
              createBaseVNode("div", {
                class: "search-btn iconfont icon-search",
                onClick: search
              })
            ]),
            searchResult.value && Object.keys(searchResult.value).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("span", _hoisted_4, toDisplayString(contactTypeName.value), 1),
                createVNode(_component_UserBaseInfo, {
                  userInfo: searchResult.value,
                  showArea: searchResult.value.contactType == "USER"
                }, null, 8, ["userInfo", "showArea"])
              ]),
              searchResult.value.contactId != unref(userInfoStore).getInfo().userId ? (openBlock(), createElementBlock("div", _hoisted_5, [
                searchResult.value.status == null || searchResult.value.status == 0 || searchResult.value.status == 2 || searchResult.value.status == 3 || searchResult.value.status == 4 ? (openBlock(), createBlock(_component_el_button, {
                  key: 0,
                  type: "primary",
                  onClick: applyContact
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(searchResult.value.contactType == "USER" ? "添加到联系人" : "申请加入群组"), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                searchResult.value.status == 1 ? (openBlock(), createBlock(_component_el_button, {
                  key: 1,
                  type: "primary",
                  onClick: sendMessage
                }, {
                  default: withCtx(() => [
                    createTextVNode("发消息")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                searchResult.value.status == 5 || searchResult.value.status == 6 ? (openBlock(), createElementBlock("span", _hoisted_6, "对方拉黑了你")) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            !searchResult.value ? (openBlock(), createElementBlock("div", _hoisted_7, "没有搜索到任何结果")) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_sfc_main$1, {
          ref_key: "searchAddRef",
          ref: searchAddRef,
          onReload: resetForm
        }, null, 512)
      ], 64);
    };
  }
};
const Search = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c9453b6"]]);
export {
  Search as default
};
