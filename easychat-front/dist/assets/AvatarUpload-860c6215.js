import { b as getCurrentInstance, u as useRouter, I as useRoute, r as ref, a7 as computed, o as onMounted, e as onUnmounted, f as resolveComponent, h as openBlock, i as createElementBlock, j as createBaseVNode, F as Fragment, m as createBlock, w as withCtx, k as createVNode, s as createTextVNode } from "./index-d3de2193.js";
const AvatarUpload_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "avatar-upload" };
const _hoisted_2 = { class: "avatar-show" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "iconfont icon-add" }, null, -1);
const _hoisted_4 = { class: "select-btn" };
const _sfc_main = {
  __name: "AvatarUpload",
  props: {
    modelValue: {
      type: [String, Object],
      default: null
    }
  },
  emits: ["coverFile"],
  setup(__props, { expose: __expose, emit: __emit }) {
    getCurrentInstance();
    useRouter();
    useRoute();
    ref("");
    const props = __props;
    const preview = computed(() => {
      return props.modelValue instanceof File;
    });
    const localFile = ref(null);
    const emit = __emit;
    const uploadImage = async (file) => {
      file = file.file;
      window.ipcRenderer.send("createCover", file.path);
    };
    const clear = () => {
      localFile.value = null;
    };
    __expose({
      clear
    });
    onMounted(() => {
      window.ipcRenderer.on("createCoverCallback", (e, { avatarStream, coverStream }) => {
        const coverBlob = new Blob([coverStream], { type: "image/png" });
        const coverFile = new File([coverBlob], "thumbnail.jpg");
        let img = new FileReader();
        img.readAsDataURL(coverFile);
        img.onload = ({ target }) => {
          localFile.value = target.result;
        };
        const avatarBlob = new Blob([avatarStream], { type: "image/png" });
        const avatarFile = new File([avatarBlob], "thumbnai2.jpg");
        emit("coverFile", { avatarFile, coverFile });
      });
    });
    onUnmounted(() => {
      window.ipcRenderer.removeAllListeners("createCoverCallback");
    });
    return (_ctx, _cache) => {
      const _component_el_image = resolveComponent("el-image");
      const _component_ShowLocalImage = resolveComponent("ShowLocalImage");
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_button = resolveComponent("el-button");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          __props.modelValue ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            preview.value ? (openBlock(), createBlock(_component_el_image, {
              key: 0,
              src: localFile.value,
              fit: "scale-down"
            }, null, 8, ["src"])) : (openBlock(), createBlock(_component_ShowLocalImage, {
              key: 1,
              fileId: props.modelValue,
              partType: "avatar",
              width: 40
            }, null, 8, ["fileId"]))
          ], 64)) : (openBlock(), createBlock(_component_el_upload, {
            key: 1,
            name: "file",
            "show-file-list": false,
            accept: ".png,.PNG,.jpg,.JPG,.jpeg,.JPEG,.gif,.GIF,.bmp,.BMP",
            multiple: false,
            "http-request": uploadImage
          }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }))
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_el_upload, {
            name: "file",
            "show-file-list": false,
            accept: ".png,.PNG,.jpg,.JPG,.jpeg,.JPEG,.gif,.GIF,.bmp,.BMP",
            multiple: false,
            "http-request": uploadImage
          }, {
            default: withCtx(() => [
              createVNode(_component_el_button, {
                type: "primary",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode("选择")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
export {
  _sfc_main as _
};
