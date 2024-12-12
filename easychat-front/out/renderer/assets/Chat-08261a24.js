import { P as BaseTransition, Q as BaseTransitionPropsValidators, R as Comment, S as EffectScope, F as Fragment, O as KeepAlive, T as ReactiveEffect, U as Static, V as Suspense, W as Teleport, X as Text, Y as Transition, Z as TransitionGroup, $ as VueElement, a0 as assertNumber, a1 as callWithAsyncErrorHandling, a2 as callWithErrorHandling, a3 as camelize, a4 as capitalize, a5 as cloneVNode, a6 as compatUtils, a7 as computed, a8 as createApp, m as createBlock, p as createCommentVNode, i as createElementBlock, j as createBaseVNode, a9 as createHydrationRenderer, aa as createPropsRestProxy, ab as createRenderer, ac as createSSRApp, ad as createSlots, ae as createStaticVNode, s as createTextVNode, k as createVNode, af as customRef, ag as defineAsyncComponent, z as defineComponent, ah as defineCustomElement, ai as defineEmits, aj as defineExpose, ak as defineModel, al as defineOptions, am as defineProps, an as defineSSRCustomElement, ao as defineSlots, ap as devtools, aq as effect, ar as effectScope, b as getCurrentInstance, as as getCurrentScope, at as getTransitionRawChildren, au as guardReactiveProps, av as h, aw as handleError, ax as hasInjectionContext, ay as hydrate, az as initCustomFormatter, aA as initDirectivesForSSR, aB as inject, aC as isMemoSame, aD as isProxy, aE as isReactive, aF as isReadonly, aG as isRef, aH as isRuntimeOnly, aI as isShallow, aJ as isVNode, aK as markRaw, aL as mergeDefaults, aM as mergeModels, aN as mergeProps, y as nextTick, D as normalizeClass, aO as normalizeProps, J as normalizeStyle, aP as onActivated, aQ as onBeforeMount, aR as onBeforeUnmount, aS as onBeforeUpdate, aT as onDeactivated, aU as onErrorCaptured, o as onMounted, aV as onRenderTracked, aW as onRenderTriggered, aX as onScopeDispose, aY as onServerPrefetch, e as onUnmounted, aZ as onUpdated, h as openBlock, x as popScopeId, a_ as provide, a$ as proxyRefs, v as pushScopeId, b0 as queuePostFlushCb, b1 as reactive, b2 as readonly, r as ref, b3 as registerRuntimeCompiler, b4 as render, n as renderList, B as renderSlot, f as resolveComponent, b5 as resolveDirective, K as resolveDynamicComponent, b6 as resolveFilter, b7 as resolveTransitionHooks, b8 as setBlockTracking, b9 as setDevtoolsHook, ba as setTransitionHooks, bb as shallowReactive, bc as shallowReadonly, bd as shallowRef, be as ssrContextKey, bf as ssrUtils, bg as stop, t as toDisplayString, bh as toHandlerKey, bi as toHandlers, bj as toRaw, bk as toRef, bl as toRefs, bm as toValue, bn as transformVNodeArgs, bo as triggerRef, E as unref, bp as useAttrs, bq as useCssModule, br as useCssVars, bs as useModel, bt as useSSRContext, bu as useSlots, bv as useTransitionState, bw as vModelCheckbox, bx as vModelDynamic, by as vModelRadio, bz as vModelSelect, bA as vModelText, H as vShow, bB as version, bC as warn, A as watch, bD as watchEffect, bE as watchPostEffect, bF as watchSyncEffect, bG as withAsyncContext, w as withCtx, bH as withDefaults, G as withDirectives, q as withKeys, bI as withMemo, l as withModifiers, bJ as withScopeId, g as getAugmentedNamespace, c as commonjsGlobal, a as getDefaultExportFromCjs, _ as _export_sfc, L as AvatarBase, d as useUserInfoStore, bK as useContactStateStore, C as useGlobalInfoStore, bL as _sfc_main$c, I as useRoute } from "./index-347654a5.js";
import { B as Blank } from "./Blank-edb457e6.js";
import { u as useSysSettingStore } from "./SysSettingStore-11b2bdc4.js";
import { u as useMessageCountStore } from "./MessageCountStore-7221543c.js";
const compile = () => {
};
const vue_runtime_esmBundler = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition,
  BaseTransitionPropsValidators,
  Comment,
  EffectScope,
  Fragment,
  KeepAlive,
  ReactiveEffect,
  Static,
  Suspense,
  Teleport,
  Text,
  Transition,
  TransitionGroup,
  VueElement,
  assertNumber,
  callWithAsyncErrorHandling,
  callWithErrorHandling,
  camelize,
  capitalize,
  cloneVNode,
  compatUtils,
  compile,
  computed,
  createApp,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createElementVNode: createBaseVNode,
  createHydrationRenderer,
  createPropsRestProxy,
  createRenderer,
  createSSRApp,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  customRef,
  defineAsyncComponent,
  defineComponent,
  defineCustomElement,
  defineEmits,
  defineExpose,
  defineModel,
  defineOptions,
  defineProps,
  defineSSRCustomElement,
  defineSlots,
  get devtools() {
    return devtools;
  },
  effect,
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  getTransitionRawChildren,
  guardReactiveProps,
  h,
  handleError,
  hasInjectionContext,
  hydrate,
  initCustomFormatter,
  initDirectivesForSSR,
  inject,
  isMemoSame,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isRuntimeOnly,
  isShallow,
  isVNode,
  markRaw,
  mergeDefaults,
  mergeModels,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onScopeDispose,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
  openBlock,
  popScopeId,
  provide,
  proxyRefs,
  pushScopeId,
  queuePostFlushCb,
  reactive,
  readonly,
  ref,
  registerRuntimeCompiler,
  render,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  resolveFilter,
  resolveTransitionHooks,
  setBlockTracking,
  setDevtoolsHook,
  setTransitionHooks,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  ssrContextKey,
  ssrUtils,
  stop,
  toDisplayString,
  toHandlerKey,
  toHandlers,
  toRaw,
  toRef,
  toRefs,
  toValue,
  transformVNodeArgs,
  triggerRef,
  unref,
  useAttrs,
  useCssModule,
  useCssVars,
  useModel,
  useSSRContext,
  useSlots,
  useTransitionState,
  vModelCheckbox,
  vModelDynamic,
  vModelRadio,
  vModelSelect,
  vModelText,
  vShow,
  version,
  warn,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  withAsyncContext,
  withCtx,
  withDefaults,
  withDirectives,
  withKeys,
  withMemo,
  withModifiers,
  withScopeId
}, Symbol.toStringTag, { value: "Module" }));
var vue3ContextMenu_umd = { exports: {} };
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(vue_runtime_esmBundler);
(function(module, exports) {
  (function($, e) {
    e(exports, require$$0);
  })(commonjsGlobal, function($, e) {
    let T = null;
    function Ce() {
      return T !== null;
    }
    function ge(n) {
      T && ae(), T = n;
    }
    function ke(n) {
      n === T && (T = null);
    }
    function ae() {
      T && (T.closeMenu(), T = null);
    }
    const j = { defaultDirection: "br", defaultMinWidth: 100, defaultMaxWidth: 600, defaultZindex: 100, defaultAdjustPadding: { x: 0, y: 10 } };
    function L(n, t) {
      let r = n.offsetTop;
      return n.offsetParent != null && n.offsetParent != t && (r -= n.offsetParent.scrollTop, r += L(n.offsetParent, t)), r;
    }
    function v(n, t) {
      let r = n.offsetLeft;
      return n.offsetParent != null && n.offsetParent != t && (r -= n.offsetParent.scrollLeft, r += v(n.offsetParent, t)), r;
    }
    function be(n, t, r, a) {
      return { x: v(n, a) + t, y: L(n, a) + r };
    }
    const oe = "mx-menu-default-container", Me = "mx-menu-container-";
    let ye = 0;
    function ce(n) {
      const { getContainer: t, zIndex: r } = n;
      if (t) {
        const h2 = typeof t == "function" ? t() : t;
        if (h2) {
          let C = h2.getAttribute("id");
          return C || (C = Me + ye++, h2.setAttribute("id", C)), { eleId: C, container: h2, isNew: false };
        }
      }
      let a = document.getElementById(oe);
      return a || (a = document.createElement("div"), a.setAttribute("id", oe), a.setAttribute("class", "mx-menu-ghost-host fullscreen"), document.body.appendChild(a)), a.style.zIndex = (r == null ? void 0 : r.toString()) || j.defaultZindex.toString(), { eleId: oe, container: a, isNew: true };
    }
    function Se(n) {
      return typeof n == "number" ? `${n}px` : n;
    }
    const R = e.defineComponent({ props: { vnode: { type: null }, data: { type: null, default: null } }, setup(n) {
      const { vnode: t, data: r } = e.toRefs(n);
      return () => typeof t.value == "function" ? t.value(r.value) : t.value;
    } }), Y = (n, t) => {
      const r = n.__vccOpts || n;
      for (const [a, h2] of t)
        r[a] = h2;
      return r;
    }, xe = {}, Be = { class: "mx-checked-mark", "aria-hidden": "true", viewBox: "0 0 1024 1024" }, we = [e.createElementVNode("path", { d: "M129.3,428.6L52,512l345,372.5l575-620.8l-69.5-75L400.4,718.2L129.3,428.6z" }, null, -1)];
    function Ie(n, t) {
      return e.openBlock(), e.createElementBlock("svg", Be, we);
    }
    const We = Y(xe, [["render", Ie]]), Pe = {}, Oe = { class: "mx-right-arrow", "aria-hidden": "true", viewBox: "0 0 1024 1024" }, $e = [e.createElementVNode("path", { d: "M307.018 49.445c11.517 0 23.032 4.394 31.819 13.18L756.404 480.18c8.439 8.438 13.181 19.885 13.181 31.82s-4.741 23.38-13.181 31.82L338.838 961.376c-17.574 17.573-46.065 17.573-63.64-0.001-17.573-17.573-17.573-46.065 0.001-63.64L660.944 512 275.198 126.265c-17.574-17.573-17.574-46.066-0.001-63.64C283.985 53.839 295.501 49.445 307.018 49.445z" }, null, -1)];
    function Ee(n, t) {
      return e.openBlock(), e.createElementBlock("svg", Oe, $e);
    }
    const de = Y(Pe, [["render", Ee]]), Ne = { class: "mx-item-row" }, je = ["xlink:href"], Re = { key: 1, class: "label" }, _e = { class: "mx-item-row" }, Fe = { class: "mx-shortcut" }, q = e.defineComponent({ __name: "ContextMenuItem", props: { disabled: { type: Boolean, default: false }, hidden: { type: Boolean, default: false }, customRender: { type: Function, default: null }, customClass: { type: String, default: "" }, clickHandler: { type: Function, default: null }, label: { type: [String, Object, Function], default: "" }, icon: { type: [String, Object, Function], default: "" }, iconFontClass: { type: String, default: "iconfont" }, checked: { type: Boolean, default: false }, shortcut: { type: String, default: "" }, svgIcon: { type: String, default: "" }, svgProps: { type: Object, default: null }, preserveIconWidth: { type: Boolean, default: true }, showRightArrow: { type: Boolean, default: false }, hasChildren: { type: Boolean, default: false }, clickClose: { type: Boolean, default: true }, clickableWhenHasChildren: { type: Boolean, default: false }, rawMenuItem: { type: Object, default: void 0 } }, emits: ["click", "subMenuOpen", "subMenuClose"], setup(n, { expose: t, emit: r }) {
      const a = n, h2 = r, { clickHandler: C, clickClose: l, clickableWhenHasChildren: S, disabled: k, hidden: g, label: o, icon: B, iconFontClass: I, showRightArrow: P, shortcut: E, hasChildren: M } = e.toRefs(a), i = e.ref(false), u = e.ref(false), f = e.ref(), p = e.inject("globalHasSlot"), b = e.inject("globalRenderSlot"), _ = e.inject("globalTheme"), N = e.inject("globalIconFontClass"), F = e.inject("globalMenuTransitionProps"), D = e.inject("globalClickCloseClassName"), A = e.inject("globalIgnoreClickClassName"), m = e.inject("globalCloseMenu"), y = e.inject("menuContext"), O = { showSubMenu: () => i.value ? (y.markActiveMenuItem(O, true), true) : M.value ? (V(), true) : false, isDisabledOrHidden: () => k.value || g.value, getElement: () => f.value, focus: () => u.value = true, blur: () => u.value = false, click: z };
      e.onMounted(() => {
        y.isMenuItemDataCollectedFlag() ? e.nextTick(() => {
          let c = 0;
          const w = y.getElement();
          if (w) {
            let s = 0;
            for (let d = 0; d < w.children.length; d++) {
              const x = w.children[d];
              if (x.getAttribute("data-type") === "ContextMenuItem") {
                if (x === f.value) {
                  c = s;
                  break;
                }
                s++;
              }
            }
          }
          y.addChildMenuItem(O, c);
        }) : y.addChildMenuItem(O);
      }), e.onBeforeUnmount(() => {
        y.removeChildMenuItem(O);
      });
      function z(c) {
        if (!k.value) {
          if (c) {
            const w = c.target;
            if (w.classList.contains("mx-context-no-clickable") || A && w.classList.contains(A))
              return;
            if (D && w.classList.contains(D)) {
              c.stopPropagation(), m(a.rawMenuItem);
              return;
            }
          }
          M.value ? S.value ? (typeof C.value == "function" && C.value(c), h2("click", c)) : i.value || V() : (typeof C.value == "function" && C.value(c), h2("click", c), l.value && m(a.rawMenuItem));
        }
      }
      function V(c) {
        u.value = false, y.checkCloseOtherSubMenuTimeOut() || y.closeOtherSubMenu(), k.value || (y.markActiveMenuItem(O), M.value && (c || y.markThisOpenedByKeyBoard(), y.addOpenedSubMenu(() => {
          u.value = false, i.value = false, h2("subMenuClose");
        }), i.value = true, h2("subMenuOpen")));
      }
      function W() {
        return { disabled: k.value, label: o.value, icon: B.value, iconFontClass: I.value, showRightArrow: P.value, clickClose: l.value, clickableWhenHasChildren: S.value, shortcut: E.value, theme: _, isOpen: i, hasChildren: M, onClick: z, onMouseEnter: V, closeMenu: m };
      }
      return t({ showSubMenu: i, keyBoardFocusMenu: u }), (c, w) => e.unref(g) ? e.createCommentVNode("", true) : (e.openBlock(), e.createElementBlock("div", { key: 0, class: "mx-context-menu-item-wrapper", ref_key: "menuItemRef", ref: f, "data-type": "ContextMenuItem" }, [e.unref(p)("itemRender") ? (e.openBlock(), e.createBlock(e.unref(R), { key: 0, vnode: () => e.unref(b)("itemRender", W()) }, null, 8, ["vnode"])) : n.customRender ? (e.openBlock(), e.createBlock(e.unref(R), { key: 1, vnode: n.customRender, data: W() }, null, 8, ["vnode", "data"])) : (e.openBlock(), e.createElementBlock("div", { key: 2, class: e.normalizeClass(["mx-context-menu-item", e.unref(k) ? "disabled" : "", u.value ? "keyboard-focus" : "", n.customClass ? " " + n.customClass : "", i.value ? "open" : ""]), onClick: z, onMouseenter: V }, [e.renderSlot(c.$slots, "default", {}, () => [e.createElementVNode("div", Ne, [e.createElementVNode("div", { class: e.normalizeClass(["mx-icon-placeholder", n.preserveIconWidth ? "preserve-width" : ""]) }, [e.renderSlot(c.$slots, "icon", {}, () => [e.unref(p)("itemIconRender") ? (e.openBlock(), e.createBlock(e.unref(R), { key: 0, vnode: () => e.unref(b)("itemIconRender", W()) }, null, 8, ["vnode"])) : typeof n.svgIcon == "string" && n.svgIcon ? (e.openBlock(), e.createElementBlock("svg", e.mergeProps({ key: 1, class: "icon svg" }, n.svgProps), [e.createElementVNode("use", { "xlink:href": n.svgIcon }, null, 8, je)], 16)) : typeof e.unref(B) != "string" ? (e.openBlock(), e.createBlock(e.unref(R), { key: 2, vnode: e.unref(B), data: e.unref(B) }, null, 8, ["vnode", "data"])) : typeof e.unref(B) == "string" && e.unref(B) !== "" ? (e.openBlock(), e.createElementBlock("i", { key: 3, class: e.normalizeClass(e.unref(B) + " icon " + e.unref(I) + " " + e.unref(N)) }, null, 2)) : e.createCommentVNode("", true)]), n.checked ? e.renderSlot(c.$slots, "check", { key: 0 }, () => [e.unref(p)("itemCheckRender") ? (e.openBlock(), e.createBlock(e.unref(R), { key: 0, vnode: () => e.unref(b)("itemCheckRender", W()) }, null, 8, ["vnode"])) : e.createCommentVNode("", true), e.createVNode(We)]) : e.createCommentVNode("", true)], 2), e.renderSlot(c.$slots, "label", {}, () => [e.unref(p)("itemLabelRender") ? (e.openBlock(), e.createBlock(e.unref(R), { key: 0, vnode: () => e.unref(b)("itemLabelRender", W()) }, null, 8, ["vnode"])) : typeof e.unref(o) == "string" ? (e.openBlock(), e.createElementBlock("span", Re, e.toDisplayString(e.unref(o)), 1)) : (e.openBlock(), e.createBlock(e.unref(R), { key: 2, vnode: e.unref(o), data: e.unref(o) }, null, 8, ["vnode", "data"]))])]), e.createElementVNode("div", _e, [e.unref(E) ? e.renderSlot(c.$slots, "shortcut", { key: 0 }, () => [e.unref(p)("itemShortcutRender") ? (e.openBlock(), e.createBlock(e.unref(R), { key: 0, vnode: () => e.unref(b)("itemShortcutRender", W()) }, null, 8, ["vnode"])) : e.createCommentVNode("", true), e.createElementVNode("span", Fe, e.toDisplayString(e.unref(E)), 1)]) : e.createCommentVNode("", true), e.unref(P) ? e.renderSlot(c.$slots, "rightArrow", { key: 1 }, () => [e.unref(p)("itemRightArrowRender") ? (e.openBlock(), e.createBlock(e.unref(R), { key: 0, vnode: () => e.unref(b)("itemRightArrowRender", W()) }, null, 8, ["vnode"])) : e.createCommentVNode("", true), e.createVNode(de)]) : e.createCommentVNode("", true)])])], 34)), e.unref(F) ? (e.openBlock(), e.createBlock(e.Transition, e.normalizeProps(e.mergeProps({ key: 3 }, e.unref(F))), { default: e.withCtx(() => [i.value ? e.renderSlot(c.$slots, "submenu", { key: 0 }) : e.createCommentVNode("", true)]), _: 3 }, 16)) : i.value ? e.renderSlot(c.$slots, "submenu", { key: 4 }) : e.createCommentVNode("", true)], 512));
    } }), Ae = e.defineComponent({ name: "ContextMenuSperator", components: { VNodeRender: R }, setup() {
      const n = e.inject("globalHasSlot"), t = e.inject("globalRenderSlot");
      return { globalHasSlot: n, globalRenderSlot: t };
    } }), Ve = { key: 1, class: "mx-context-menu-item-sperator mx-context-no-clickable" };
    function He(n, t, r, a, h2, C) {
      const l = e.resolveComponent("VNodeRender");
      return n.globalHasSlot("separatorRender") ? (e.openBlock(), e.createBlock(l, { key: 0, vnode: () => n.globalRenderSlot("separatorRender", {}) }, null, 8, ["vnode"])) : (e.openBlock(), e.createElementBlock("div", Ve));
    }
    const J = Y(Ae, [["render", He]]), Te = e.defineComponent({ name: "ContextSubMenu", components: { ContextMenuItem: q, ContextMenuSeparator: J, ContextMenuIconRight: de }, props: { items: { type: Object, default: null }, maxWidth: { type: [String, Number], default: 0 }, minWidth: { type: [String, Number], default: 0 }, adjustPosition: { type: Boolean, default: true }, direction: { type: String, default: "br" } }, setup(n) {
      const t = e.inject("menuContext"), r = e.inject("globalOptions"), a = e.inject("globalHasSlot"), h2 = e.inject("globalRenderSlot"), C = e.inject("globalTheme"), { zIndex: l, getParentWidth: S, getParentHeight: k } = t, { adjustPosition: g } = e.toRefs(n), o = e.ref(), B = e.ref(), I = e.ref(), P = [], E = e.inject("globalSetCurrentSubMenu"), M = [];
      let i = null, u = 0;
      function f() {
        i && i.blur();
      }
      function p(s, d) {
        if (s) {
          for (let x = d !== void 0 ? d : 0; x < M.length; x++)
            if (!M[x].isDisabledOrHidden()) {
              b(x);
              break;
            }
        } else
          for (let x = d !== void 0 ? d : M.length - 1; x >= 0; x--)
            if (!M[x].isDisabledOrHidden()) {
              b(x);
              break;
            }
      }
      function b(s) {
        if (i && f(), s !== void 0 && (i = M[Math.max(0, Math.min(s, M.length - 1))]), !!i && (i.focus(), W.value)) {
          const d = i.getElement();
          d && (m.value = Math.min(Math.max(-y.value, -d.offsetTop - d.offsetHeight + w.value), 0));
        }
      }
      function _() {
        E(N);
      }
      const N = { isTopLevel: () => t.getParentContext() === null, closeSelfAndActiveParent: () => {
        const s = A.getParentContext();
        if (s) {
          s.closeOtherSubMenu();
          const d = s.getSubMenuInstanceContext();
          if (d)
            return d.focusCurrentItem(), true;
        }
        return false;
      }, closeCurrentSubMenu: () => {
        var s;
        return (s = A.getParentContext()) == null ? void 0 : s.closeOtherSubMenu();
      }, moveCurrentItemFirst: () => p(true), moveCurrentItemLast: () => p(false), moveCurrentItemDown: () => p(true, i ? M.indexOf(i) + 1 : 0), moveCurrentItemUp: () => p(false, i ? M.indexOf(i) - 1 : 0), focusCurrentItem: () => b(), openCurrentItemSubMenu: () => i ? i == null ? void 0 : i.showSubMenu() : false, triggerCurrentItemClick: (s) => i == null ? void 0 : i.click(s) };
      let F = false, D = false;
      const A = { zIndex: l + 1, container: t.container, adjustPadding: r.adjustPadding || j.defaultAdjustPadding, getParentWidth: () => {
        var s;
        return ((s = o.value) == null ? void 0 : s.offsetWidth) || 0;
      }, getParentHeight: () => {
        var s;
        return ((s = o.value) == null ? void 0 : s.offsetHeight) || 0;
      }, getParentX: () => c.value.x, getParentY: () => c.value.y, getParentAbsX: () => o.value ? v(o.value, t.container) : 0, getParentAbsY: () => o.value ? L(o.value, t.container) : 0, getPositon: () => [0, 0], addOpenedSubMenu(s) {
        P.push(s);
      }, closeOtherSubMenu() {
        P.forEach((s) => s()), P.splice(0, P.length), E(N);
      }, checkCloseOtherSubMenuTimeOut() {
        return u ? (clearTimeout(u), u = 0, true) : false;
      }, closeOtherSubMenuWithTimeOut() {
        u = setTimeout(() => {
          u = 0, this.closeOtherSubMenu();
        }, 200);
      }, addChildMenuItem: (s, d) => {
        d === void 0 ? M.push(s) : M.splice(d, 0, s);
      }, removeChildMenuItem: (s) => {
        M.splice(M.indexOf(s), 1);
      }, markActiveMenuItem: (s, d = false) => {
        f(), i = s, d && b();
      }, markThisOpenedByKeyBoard: () => {
        F = true;
      }, isOpenedByKeyBoardFlag: () => F ? (F = false, true) : false, isMenuItemDataCollectedFlag: () => D, getElement: () => o.value || null, getParentContext: () => t, getSubMenuInstanceContext: () => N };
      e.provide("menuContext", A);
      const m = e.ref(0), y = e.ref(0);
      function O(s) {
        s ? m.value = Math.min(Math.max(m.value - 50, -y.value), 0) : m.value = Math.min(m.value + 50, 0);
      }
      function z(s) {
        s.preventDefault(), s.stopPropagation(), O(s.deltaY > 0);
      }
      function V(s) {
        r.mouseScroll && (s.preventDefault(), s.stopPropagation(), O(s.deltaY > 0));
      }
      const W = e.ref(false), c = e.ref({ x: 0, y: 0 }), w = e.ref(0);
      return e.onMounted(() => {
        const s = t.getPositon();
        c.value = { x: s[0] ?? r.xOffset ?? 0, y: s[1] ?? r.yOffset ?? 0 }, E(N), e.nextTick(() => {
          var x, U;
          const d = o.value;
          if (d && B.value) {
            const { container: H } = t, K = (S == null ? void 0 : S()) ?? 0, ee = (k == null ? void 0 : k()) ?? 0, ne = typeof t.adjustPadding == "number" ? t.adjustPadding : ((x = t.adjustPadding) == null ? void 0 : x.x) ?? 0, te = typeof t.adjustPadding == "number" ? t.adjustPadding : ((U = t.adjustPadding) == null ? void 0 : U.y) ?? 0, X = ee > 0 ? te : 0, en = document.documentElement.scrollHeight, nn = document.documentElement.scrollWidth, tn = Math.min(nn, H.offsetWidth), se = Math.min(en, H.offsetHeight);
            let re = v(d, H), ie = L(d, H);
            n.direction.includes("l") ? c.value.x -= d.offsetWidth + ne : n.direction.includes("r") ? c.value.x += K + ne : (c.value.x += K / 2, c.value.x -= (d.offsetWidth + ne) / 2), n.direction.includes("t") ? c.value.y -= d.offsetHeight + te * 2 : n.direction.includes("b") ? c.value.y -= te : c.value.y -= (d.offsetHeight + te) / 2, g.value && e.nextTick(() => {
              re = v(d, H), ie = L(d, H);
              const on = re + d.offsetWidth - tn, pe = ie + d.offsetHeight + X * 2 - se;
              if (W.value = pe > 0, y.value = d.offsetHeight - se + X * 2, on > 0) {
                const G = K + d.offsetWidth - ne, Z = re;
                G > Z ? c.value.x -= Z : c.value.x -= G;
              }
              if (W.value) {
                const G = pe, Z = ie;
                G > Z ? c.value.y -= Z - X : c.value.y -= G - X, w.value = se - X * 2;
              } else
                w.value = 0;
            });
          }
          d == null || d.focus({ preventScroll: true }), t.isOpenedByKeyBoardFlag() && p(true), D = true;
        });
      }), { menu: o, scroll: B, options: r, zIndex: l, constOptions: j, scrollValue: m, upScrollButton: I, overflow: W, position: c, scrollHeight: y, maxHeight: w, globalHasSlot: a, globalRenderSlot: h2, globalTheme: C, onScroll: O, onSubMenuBodyClick: _, onMouseWhell: V, onMouseWhellMx: z, solveNumberOrStringSize: Se };
    } }), Le = { key: 0, class: "mx-context-menu-updown placeholder" }, ve = { key: 1, class: "mx-context-menu-updown placeholder" }, De = { class: "mx-context-menu-scroll", ref: "scroll" };
    function ze(n, t, r, a, h2, C) {
      const l = e.resolveComponent("ContextMenuSeparator"), S = e.resolveComponent("ContextSubMenu", true), k = e.resolveComponent("ContextMenuItem"), g = e.resolveComponent("ContextMenuIconRight");
      return e.openBlock(), e.createElementBlock("div", { class: e.normalizeClass("mx-context-menu " + (n.options.customClass ? n.options.customClass : "") + " " + n.globalTheme), style: e.normalizeStyle({ maxWidth: n.maxWidth ? n.solveNumberOrStringSize(n.maxWidth) : `${n.constOptions.defaultMaxWidth}px`, minWidth: n.minWidth ? n.solveNumberOrStringSize(n.minWidth) : `${n.constOptions.defaultMinWidth}px`, maxHeight: n.overflow && n.maxHeight > 0 ? `${n.maxHeight}px` : void 0, zIndex: n.zIndex, left: `${n.position.x}px`, top: `${n.position.y}px` }), "data-type": "ContextSubMenu", onClick: t[4] || (t[4] = (...o) => n.onSubMenuBodyClick && n.onSubMenuBodyClick(...o)), onWheel: t[5] || (t[5] = (...o) => n.onMouseWhell && n.onMouseWhell(...o)) }, [e.createElementVNode("div", { class: e.normalizeClass(["mx-context-menu-items"]), ref: "menu", style: e.normalizeStyle({ top: `${n.scrollValue}px` }) }, [e.renderSlot(n.$slots, "default", {}, () => [n.overflow && n.options.updownButtonSpaceholder ? (e.openBlock(), e.createElementBlock("div", Le)) : e.createCommentVNode("", true), (e.openBlock(true), e.createElementBlock(e.Fragment, null, e.renderList(n.items, (o, B) => (e.openBlock(), e.createElementBlock(e.Fragment, { key: B }, [o.hidden !== true && o.divided === "up" ? (e.openBlock(), e.createBlock(l, { key: 0 })) : e.createCommentVNode("", true), o.hidden !== true && o.divided === "self" ? (e.openBlock(), e.createBlock(l, { key: 1 })) : (e.openBlock(), e.createBlock(k, { key: 2, clickHandler: o.onClick ? (I) => o.onClick(I) : void 0, disabled: o.disabled, hidden: o.hidden, icon: o.icon, iconFontClass: o.iconFontClass, svgIcon: o.svgIcon, svgProps: o.svgProps, label: o.label, customRender: o.customRender, customClass: o.customClass, checked: o.checked, shortcut: o.shortcut, clickClose: o.clickClose, clickableWhenHasChildren: o.clickableWhenHasChildren, preserveIconWidth: o.preserveIconWidth !== void 0 ? o.preserveIconWidth : n.options.preserveIconWidth, showRightArrow: o.children && o.children.length > 0, hasChildren: o.children && o.children.length > 0, rawMenuItem: o, onSubMenuOpen: o.onSubMenuOpen, onSubMenuClose: o.onSubMenuClose }, e.createSlots({ _: 2 }, [o.children && o.children.length > 0 ? { name: "submenu", fn: e.withCtx(() => [e.createVNode(S, { items: o.children, maxWidth: o.maxWidth, minWidth: o.minWidth, adjustPosition: o.adjustSubMenuPosition !== void 0 ? o.adjustSubMenuPosition : n.options.adjustPosition, direction: o.direction !== void 0 ? o.direction : n.options.direction }, null, 8, ["items", "maxWidth", "minWidth", "adjustPosition", "direction"])]), key: "0" } : void 0]), 1032, ["clickHandler", "disabled", "hidden", "icon", "iconFontClass", "svgIcon", "svgProps", "label", "customRender", "customClass", "checked", "shortcut", "clickClose", "clickableWhenHasChildren", "preserveIconWidth", "showRightArrow", "hasChildren", "rawMenuItem", "onSubMenuOpen", "onSubMenuClose"])), o.hidden !== true && (o.divided === "down" || o.divided === true) ? (e.openBlock(), e.createBlock(l, { key: 3 })) : e.createCommentVNode("", true)], 64))), 128)), n.overflow && n.options.updownButtonSpaceholder ? (e.openBlock(), e.createElementBlock("div", ve)) : e.createCommentVNode("", true)])], 4), e.createElementVNode("div", De, [e.withDirectives(e.createElementVNode("div", { ref: "upScrollButton", class: e.normalizeClass("mx-context-menu-updown mx-context-no-clickable up" + (n.overflow && n.scrollValue < 0 ? "" : " disabled")), onClick: t[0] || (t[0] = (o) => n.onScroll(false)), onWheel: t[1] || (t[1] = (...o) => n.onMouseWhellMx && n.onMouseWhellMx(...o)) }, [e.createVNode(g)], 34), [[e.vShow, n.overflow]]), e.withDirectives(e.createElementVNode("div", { class: e.normalizeClass("mx-context-menu-updown mx-context-no-clickable down" + (n.overflow && n.scrollValue > -n.scrollHeight ? "" : " disabled")), onClick: t[2] || (t[2] = (o) => n.onScroll(true)), onWheel: t[3] || (t[3] = (...o) => n.onMouseWhellMx && n.onMouseWhellMx(...o)) }, [e.createVNode(g)], 34), [[e.vShow, n.overflow]])], 512)], 38);
    }
    const Q = Y(Te, [["render", ze]]), Ke = { class: "mx-menu-ghost-host" }, ue = e.defineComponent({ __name: "ContextSubMenuWrapper", props: { options: { type: Object, default: null }, show: { type: Object, default: null }, container: { type: Object, default: null }, isFullScreenContainer: { type: Boolean, default: true } }, emits: ["close", "closeAnimFinished"], setup(n, { expose: t, emit: r }) {
      var _, N, F, D, A;
      const a = n, h2 = r, C = e.useSlots(), { options: l, show: S, container: k } = e.toRefs(a);
      e.onMounted(() => {
        S.value && B();
      }), e.onBeforeUnmount(() => {
        M();
      }), e.watch(S, (m) => {
        m ? B() : M();
      });
      const g = { closeMenu: I, isClosed: P };
      let o = false;
      function B() {
        E(), ge(g);
      }
      function I(m) {
        o = true, h2("close", m), l.value.menuTransitionProps || h2("closeAnimFinished"), ke(g);
      }
      function P() {
        return o;
      }
      function E() {
        setTimeout(() => {
          document.addEventListener("click", p, true), document.addEventListener("contextmenu", p, true), document.addEventListener("scroll", f, true), !a.isFullScreenContainer && k.value && k.value.addEventListener("scroll", f, true), l.value.keyboardControl !== false && document.addEventListener("keydown", u);
        }, 50);
      }
      function M() {
        document.removeEventListener("contextmenu", p, true), document.removeEventListener("click", p, true), document.removeEventListener("scroll", f, true), !a.isFullScreenContainer && k.value && k.value.removeEventListener("scroll", f, true), l.value.keyboardControl !== false && document.removeEventListener("keydown", u);
      }
      const i = e.ref();
      e.provide("globalSetCurrentSubMenu", (m) => i.value = m);
      function u(m) {
        var O, z, V, W, c, w, s, d, x, U, H, K, ee;
        let y = true;
        switch (m.key) {
          case "Escape": {
            ((O = i.value) == null ? void 0 : O.isTopLevel()) === false ? (z = i.value) == null || z.closeCurrentSubMenu() : I();
            break;
          }
          case "ArrowDown":
            (V = i.value) == null || V.moveCurrentItemDown();
            break;
          case "ArrowUp":
            (W = i.value) == null || W.moveCurrentItemUp();
            break;
          case "Home":
            (c = i.value) == null || c.moveCurrentItemFirst();
            break;
          case "End":
            (w = i.value) == null || w.moveCurrentItemLast();
            break;
          case "ArrowLeft": {
            (s = i.value) != null && s.closeSelfAndActiveParent() || (x = (d = l.value).onKeyFocusMoveLeft) == null || x.call(d);
            break;
          }
          case "ArrowRight":
            (U = i.value) != null && U.openCurrentItemSubMenu() || (K = (H = l.value).onKeyFocusMoveRight) == null || K.call(H);
            break;
          case "Enter":
            (ee = i.value) == null || ee.triggerCurrentItemClick(m);
            break;
          default:
            y = false;
            break;
        }
        y && i.value && (m.stopPropagation(), m.preventDefault());
      }
      function f() {
        l.value.closeWhenScroll !== false && I();
      }
      function p(m) {
        b(m.target);
      }
      function b(m) {
        for (; m; ) {
          if (m.classList && m.classList.contains("mx-menu-host"))
            return;
          m = m.parentNode;
        }
        l.value.clickCloseOnOutside !== false && (M(), I());
      }
      return e.provide("globalOptions", l.value), e.provide("globalCloseMenu", I), e.provide("globalTheme", ((_ = l.value) == null ? void 0 : _.theme) || "light"), e.provide("globalIsFullScreenContainer", a.isFullScreenContainer), e.provide("globalClickCloseClassName", (N = l.value) == null ? void 0 : N.clickCloseClassName), e.provide("globalIgnoreClickClassName", (F = l.value) == null ? void 0 : F.ignoreClickClassName), e.provide("globalIconFontClass", ((D = l.value) == null ? void 0 : D.iconFontClass) || "iconfont"), e.provide("globalMenuTransitionProps", (A = l.value) == null ? void 0 : A.menuTransitionProps), e.provide("globalHasSlot", (m) => C[m] !== void 0), e.provide("globalRenderSlot", (m, y) => e.renderSlot(C, m, { ...y }, () => [e.h("span", "Render slot failed")], false)), e.provide("menuContext", { zIndex: l.value.zIndex || j.defaultZindex, container: k.value, adjustPadding: { x: 0, y: 0 }, getParentAbsY: () => l.value.x, getParentAbsX: () => l.value.y, getParentX: () => 0, getParentY: () => 0, getParentWidth: () => 0, getParentHeight: () => 0, getPositon: () => [l.value.x, l.value.y], closeOtherSubMenuWithTimeOut: () => {
      }, checkCloseOtherSubMenuTimeOut: () => false, addOpenedSubMenu: () => {
      }, closeOtherSubMenu: () => {
      }, getParentContext: () => null, getSubMenuInstanceContext: () => null, getElement: () => null, addChildMenuItem: () => {
      }, removeChildMenuItem: () => {
      }, markActiveMenuItem: () => {
      }, markThisOpenedByKeyBoard: () => {
      }, isOpenedByKeyBoardFlag: () => false, isMenuItemDataCollectedFlag: () => false }), t(g), (m, y) => (e.openBlock(), e.createElementBlock("div", Ke, [e.unref(l).menuTransitionProps ? (e.openBlock(), e.createBlock(e.Transition, e.mergeProps({ key: 0, appear: "" }, e.unref(l).menuTransitionProps, { onAfterLeave: y[0] || (y[0] = (O) => h2("closeAnimFinished")) }), { default: e.withCtx(() => [e.unref(S) ? (e.openBlock(), e.createBlock(Q, { key: 0, class: "mx-menu-host", items: e.unref(l).items, adjustPosition: e.unref(l).adjustPosition, maxWidth: e.unref(l).maxWidth || e.unref(j).defaultMaxWidth, minWidth: e.unref(l).minWidth || e.unref(j).defaultMinWidth, direction: e.unref(l).direction || e.unref(j).defaultDirection }, { default: e.withCtx(() => [e.renderSlot(m.$slots, "default")]), _: 3 }, 8, ["items", "adjustPosition", "maxWidth", "minWidth", "direction"])) : e.createCommentVNode("", true)]), _: 3 }, 16)) : e.unref(S) ? (e.openBlock(), e.createBlock(Q, { key: 1, class: "mx-menu-host", items: e.unref(l).items, adjustPosition: e.unref(l).adjustPosition, maxWidth: e.unref(l).maxWidth || e.unref(j).defaultMaxWidth, minWidth: e.unref(l).minWidth || e.unref(j).defaultMinWidth, direction: e.unref(l).direction || e.unref(j).defaultDirection }, { default: e.withCtx(() => [e.renderSlot(m.$slots, "default")]), _: 3 }, 8, ["items", "adjustPosition", "maxWidth", "minWidth", "direction"])) : e.createCommentVNode("", true)]));
    } }), fe = e.defineComponent({ name: "ContextMenu", emits: ["update:show", "close"], props: { options: { type: Object, default: null }, show: { type: Boolean, default: false } }, setup(n, t) {
      const { options: r, show: a } = e.toRefs(n);
      return t.expose({ closeMenu: () => t.emit("update:show", false), isClosed: () => !a.value }), () => {
        const { isNew: h2, container: C, eleId: l } = ce(r.value);
        return [e.h(e.Teleport, { to: `#${l}` }, [e.h(ue, { options: r, show: a, container: C, isFullScreenContainer: !h2, onClose: (S) => {
          var k, g;
          t.emit("update:show", false), t.emit("close"), (g = (k = r.value).onClose) == null || g.call(k, S);
        } }, t.slots)])];
      };
    } }), me = e.defineComponent({ name: "ContextMenuGroup", props: { disabled: { type: Boolean, default: false }, hidden: { type: Boolean, default: false }, clickHandler: { type: Function, default: null }, label: { type: String, default: "" }, icon: { type: String, default: "" }, iconFontClass: { type: String, default: "iconfont" }, checked: { type: Boolean, default: false }, shortcut: { type: String, default: "" }, svgIcon: { type: String, default: "" }, svgProps: { type: Object, default: null }, preserveIconWidth: { type: Boolean, default: true }, showRightArrow: { type: Boolean, default: false }, clickClose: { type: Boolean, default: true }, adjustSubMenuPosition: { type: Boolean, default: void 0 }, maxWidth: { type: [String, Number], default: 0 }, minWidth: { type: [String, Number], default: 0 } }, setup(n, t) {
      const r = e.inject("globalOptions"), { adjustSubMenuPosition: a, maxWidth: h2, minWidth: C } = e.toRefs(n), l = typeof a.value < "u" ? a.value : r.adjustPosition;
      return () => e.h(q, { ...n, showRightArrow: true, maxWidth: void 0, minWidth: void 0, adjustSubMenuPosition: void 0, hasChildren: typeof t.slots.default !== void 0 }, t.slots.default ? { submenu: () => e.h(Q, { maxWidth: h2.value, minWidth: C.value, adjustPosition: l }, { default: t.slots.default }) } : void 0);
    } });
    function Ye(n, t, r, a) {
      const h2 = e.ref(true), C = e.h(ue, { options: n, show: h2, container: t, isFullScreenContainer: !r, onCloseAnimFinished: () => {
        e.render(null, t);
      }, onClose: (l) => {
        var S;
        (S = n.onClose) == null || S.call(n, l), h2.value = false;
      } }, a);
      return e.render(C, t), C.component;
    }
    function he(n, t) {
      const r = ce(n);
      return Ye(n, r.container, r.isNew, t).exposed;
    }
    const le = { install(n) {
      n.config.globalProperties.$contextmenu = he, n.component("ContextMenu", fe), n.component("ContextMenuItem", q), n.component("ContextMenuGroup", me), n.component("ContextMenuSperator", J), n.component("ContextMenuSeparator", J), n.component("ContextSubMenu", Q);
    }, showContextMenu(n, t) {
      return he(n, t);
    }, isAnyContextMenuOpen() {
      return Ce();
    }, closeContextMenu: ae, transformMenuPosition: be }, Ue = {}, Xe = { class: "mx-menu-bar-icon-menu", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200" }, Ge = [e.createElementVNode("path", { d: "M133.310936 296.552327l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949 0-19.781623-15.997312-35.950949-35.950949-35.950949L133.310936 224.650428c-19.781623 0-35.950949 16.169326-35.950949 35.950949C97.359987 280.383 113.529313 296.552327 133.310936 296.552327z" }, null, -1), e.createElementVNode("path", { d: "M890.51705 476.135058 133.310936 476.135058c-19.781623 0-35.950949 16.169326-35.950949 35.950949 0 19.781623 16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949C926.467999 492.304384 910.298673 476.135058 890.51705 476.135058z" }, null, -1), e.createElementVNode("path", { d: "M890.51705 727.447673 133.310936 727.447673c-19.781623 0-35.950949 15.997312-35.950949 35.950949s16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-15.997312 35.950949-35.950949S910.298673 727.447673 890.51705 727.447673z" }, null, -1)];
    function Ze(n, t) {
      return e.openBlock(), e.createElementBlock("svg", Xe, Ge);
    }
    const qe = Y(Ue, [["render", Ze]]), Je = ["onClick", "onMouseenter"], Qe = e.defineComponent({ __name: "MenuBar", props: { options: { type: Object, default: null } }, setup(n) {
      const t = n, r = e.ref(), a = e.ref(false), h2 = e.ref([]), C = e.ref(null);
      function l() {
        a.value = true;
      }
      function S() {
        a.value = false;
      }
      e.onMounted(() => {
        h2.value = t.options.items || [];
      }), e.watch(() => t.options, () => {
        h2.value = t.options.items || [];
      });
      let k = null, g = -1;
      function o() {
        g < h2.value.length - 1 ? g++ : g = 0, P(g, h2.value[g]);
      }
      function B() {
        g > 0 ? g-- : g = h2.value.length - 1, P(g, h2.value[g]);
      }
      function I(u) {
        const f = t.options.barPopDirection ?? "bl";
        let p = 0, b = 0;
        return f.startsWith("b") ? b = L(u) + u.offsetHeight : f.startsWith("t") ? b = L(u) : b = L(u) + u.offsetHeight / 2, f.endsWith("l") ? p = v(u) : f.startsWith("r") ? p = v(u) + u.offsetWidth : p = v(u) + u.offsetWidth / 2, { x: p, y: b };
      }
      function P(u, f) {
        var b;
        if (g = u, !f.children)
          return;
        k && (k.closeMenu(), k = null, a.value = true), C.value = f;
        const p = (b = r.value) == null ? void 0 : b.children[u];
        if (p) {
          const { x: _, y: N } = I(p);
          k = le.showContextMenu({ ...t.options, items: f.children, x: _, y: N, onKeyFocusMoveLeft() {
            B();
          }, onKeyFocusMoveRight() {
            o();
          }, onClose() {
            C.value == f && (a.value = false, C.value = null);
          } });
        }
      }
      function E() {
        g = 0;
        const u = r.value;
        if (u) {
          const { x: f, y: p } = I(u);
          k = le.showContextMenu({ ...t.options, x: f, y: p });
        }
      }
      function M(u, f) {
        f ? (a.value = true, P(u, f), f.onClick && (f.clickableWhenHasChildren === true && f.children && f.children.length > 0 || !f.children || f.children.length === 0) && f.onClick()) : E();
      }
      function i(u, f) {
        a.value && P(u, f);
      }
      return (u, f) => (e.openBlock(), e.createElementBlock("div", { class: e.normalizeClass(["mx-menu-bar", n.options.theme ?? "", n.options.mini ? "mini" : ""]), onFocus: l, onBlur: S }, [e.renderSlot(u.$slots, "prefix"), n.options.mini ? (e.openBlock(), e.createElementBlock("div", { key: 0, ref_key: "menuBarContent", ref: r, class: "mx-menu-bar-content" }, [e.createElementVNode("div", { class: "mx-menu-bar-item", onClick: f[0] || (f[0] = (p) => M(0, null)) }, [e.createVNode(qe)])], 512)) : (e.openBlock(), e.createElementBlock("div", { key: 1, ref_key: "menuBarContent", ref: r, class: "mx-menu-bar-content" }, [(e.openBlock(true), e.createElementBlock(e.Fragment, null, e.renderList(h2.value, (p, b) => (e.openBlock(), e.createElementBlock("div", { key: b, class: e.normalizeClass(["mx-menu-bar-item", p == C.value ? "active" : ""]), onClick: (_) => M(b, p), onMouseenter: (_) => i(b, p) }, e.toDisplayString(p.label), 43, Je))), 128))], 512)), e.renderSlot(u.$slots, "suffix")], 34));
    } });
    $.ContextMenu = fe, $.ContextMenuGroup = me, $.ContextMenuItem = q, $.ContextMenuSeparator = J, $.MenuBar = Qe, $.default = le, Object.defineProperties($, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  });
})(vue3ContextMenu_umd, vue3ContextMenu_umd.exports);
var vue3ContextMenu_umdExports = vue3ContextMenu_umd.exports;
const ContextMenu = /* @__PURE__ */ getDefaultExportFromCjs(vue3ContextMenu_umdExports);
const vue3ContextMenu = "";
const SearchResult_vue_vue_type_style_index_0_scoped_5e0fa65f_lang = "";
const _hoisted_1$b = { class: "search-item" };
const _hoisted_2$7 = { class: "contact-info" };
const _hoisted_3$7 = ["innerHTML"];
const _hoisted_4$6 = ["innerHTML"];
const _sfc_main$b = {
  __name: "SearchResult",
  props: {
    data: {
      type: Object
    }
  },
  setup(__props) {
    getCurrentInstance();
    return (_ctx, _cache) => {
      const _component_Avatar = resolveComponent("Avatar");
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createVNode(_component_Avatar, {
          userId: __props.data.contactId,
          showDetail: false
        }, null, 8, ["userId"]),
        createBaseVNode("div", _hoisted_2$7, [
          createBaseVNode("div", {
            class: "contact-name",
            innerHTML: __props.data.searchContactName
          }, null, 8, _hoisted_3$7),
          createBaseVNode("div", {
            class: "last-message",
            innerHTML: __props.data.searchLastMessage
          }, null, 8, _hoisted_4$6)
        ])
      ]);
    };
  }
};
const SearchResult = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-5e0fa65f"]]);
const UserSelect_vue_vue_type_style_index_0_scoped_92988ad8_lang = "";
const _hoisted_1$a = { class: "select-item" };
const _hoisted_2$6 = { class: "avatar" };
const _hoisted_3$6 = { class: "nick-name" };
const _sfc_main$a = {
  __name: "UserSelect",
  emits: ["callback"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { proxy } = getCurrentInstance();
    const dialogConfig = ref({
      show: false,
      title: "选择联系人",
      buttons: [
        {
          type: "primary",
          text: "确定",
          click: (e) => {
            submitData();
          }
        }
      ]
    });
    const search = (query, item) => {
      return item.contactName.toLowerCase().includes(query.toLowerCase());
    };
    const dataList = ref([]);
    const formData = ref({
      selectContacts: []
    });
    const show = ({ contactList, groupId, opType }) => {
      dialogConfig.value.title = opType == 0 ? "移除群员" : "添加群员";
      dialogConfig.value.show = true;
      dataList.value = contactList;
      formData.value = {
        selectContacts: [],
        groupId,
        opType
      };
    };
    __expose({ show });
    const emit = __emit;
    const submitData = async () => {
      if (formData.value.selectContacts.length == 0) {
        proxy.Message.warning("请选择联系人");
        return;
      }
      let params = {};
      Object.assign(params, formData.value);
      params.selectContacts = params.selectContacts.join(",");
      let result = await proxy.Request({
        url: proxy.Api.addOrRemoveGroupUser,
        params
      });
      if (!result) {
        return;
      }
      dialogConfig.value.show = false;
      emit("callback");
    };
    return (_ctx, _cache) => {
      const _component_el_transfer = resolveComponent("el-transfer");
      const _component_Dialog = resolveComponent("Dialog");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_Dialog, {
          show: dialogConfig.value.show,
          title: dialogConfig.value.title,
          buttons: dialogConfig.value.buttons,
          width: "660px",
          onClose: _cache[1] || (_cache[1] = ($event) => dialogConfig.value.show = false)
        }, {
          default: withCtx(() => [
            createVNode(_component_el_transfer, {
              modelValue: formData.value.selectContacts,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.selectContacts = $event),
              titles: ["全部", "已选"],
              format: {
                noChecked: "${total}",
                hasChecked: "${checked}/${total}"
              },
              data: dataList.value,
              props: {
                key: "contactId",
                label: "contactName"
              },
              filterable: "",
              "filter-method": search
            }, {
              default: withCtx(({ option }) => [
                createBaseVNode("div", _hoisted_1$a, [
                  createBaseVNode("div", _hoisted_2$6, [
                    createVNode(AvatarBase, {
                      userId: option.contactId,
                      width: 30,
                      borderRadius: 5,
                      showDetail: false
                    }, null, 8, ["userId"])
                  ]),
                  createBaseVNode("div", _hoisted_3$6, toDisplayString(option.contactName), 1)
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "data"])
          ]),
          _: 1
        }, 8, ["show", "title", "buttons"])
      ]);
    };
  }
};
const UserSelect = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-92988ad8"]]);
const ChatGroupDetail_vue_vue_type_style_index_0_scoped_25ec25bf_lang = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-25ec25bf"), n = n(), popScopeId(), n);
const _hoisted_1$9 = { class: "group-panel" };
const _hoisted_2$5 = { class: "group-panel-body" };
const _hoisted_3$5 = { class: "member-list" };
const _hoisted_4$5 = { class: "member-item" };
const _hoisted_5$5 = ["title"];
const _hoisted_6$5 = {
  key: 0,
  class: "owner-tag"
};
const _hoisted_7$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "iconfont icon-add icon-op" }, null, -1));
const _hoisted_8$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "nick-name" }, "添加", -1));
const _hoisted_9$2 = [
  _hoisted_7$4,
  _hoisted_8$2
];
const _hoisted_10$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "iconfont icon-min icon-op" }, null, -1));
const _hoisted_11$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "nick-name" }, "移除", -1));
const _hoisted_12$1 = [
  _hoisted_10$2,
  _hoisted_11$1
];
const _hoisted_13 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _hoisted_14 = { class: "part-content" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "part-title" }, "群号", -1));
const _hoisted_16 = { class: "part-content" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "part-title" }, "群聊名称", -1));
const _hoisted_18 = { class: "part-content" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "part-title" }, "群公告", -1));
const _hoisted_20 = { class: "part-content" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _sfc_main$9 = {
  __name: "ChatGroupDetail",
  emits: ["delChatSessionCallback"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { proxy } = getCurrentInstance();
    const userInfoStore = useUserInfoStore();
    useContactStateStore();
    const showDrawer = ref(false);
    const memberList = ref([]);
    const groupInfo = ref({});
    const show = async (groupId) => {
      let result = await proxy.Request({
        url: proxy.Api.getGroupInfo4Chat,
        params: {
          groupId
        },
        showError: false,
        errorCallback: (response) => {
          proxy.Confirm({ message: response.info, showCancelBtn: false });
        }
      });
      if (!result) {
        return;
      }
      showDrawer.value = true;
      memberList.value = result.data.userContactList;
      groupInfo.value = result.data.groupInfo;
    };
    const drawerRef = ref();
    const closeDrawerHandler = () => {
      drawerRef.value.close();
    };
    __expose({
      show
    });
    const emit = __emit;
    const leaveGroup = () => {
      proxy.Confirm({
        message: `确定要退出群聊【${groupInfo.value.groupName}】吗？`,
        okfun: async () => {
          let result = await proxy.Request({
            url: proxy.Api.leaveGroup,
            params: {
              groupId: groupInfo.value.groupId
            }
          });
          if (!result) {
            return;
          }
          window.ipcRenderer.send("delChatSession", groupInfo.value.groupId);
          proxy.Message.success("退出成功");
          drawerRef.value.close();
          emit("delChatSessionCallback", groupInfo.value.groupId);
        }
      });
    };
    const dissolutionGroup = () => {
      proxy.Confirm({
        message: `确定要解散群聊【${groupInfo.value.groupName}】吗？`,
        okfun: async () => {
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
          drawerRef.value.close();
        }
      });
    };
    const userSelectRef = ref();
    const addUser = async () => {
      let result = await proxy.Request({
        url: proxy.Api.loadContact,
        params: {
          contactType: "USER"
        }
      });
      if (!result) {
        return;
      }
      const contactIds = memberList.value.map((item) => item["userId"]);
      let contactList = result.data;
      contactList.forEach((element) => {
        if (contactIds.includes(element.contactId)) {
          element.disabled = true;
        }
      });
      userSelectRef.value.show({
        contactList,
        groupId: groupInfo.value.groupId,
        opType: 1
      });
    };
    const removeUser = () => {
      let contactList = memberList.value.map((item) => item);
      contactList.forEach((item) => {
        item.contactId = item.userId;
      });
      contactList.splice(0, 1);
      userSelectRef.value.show({ contactList, groupId: groupInfo.value.groupId, opType: 0 });
    };
    const addOrRemoveUserCallback = () => {
      showDrawer.value = false;
    };
    return (_ctx, _cache) => {
      const _component_Avatar = resolveComponent("Avatar");
      const _component_el_drawer = resolveComponent("el-drawer");
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createVNode(_component_el_drawer, {
          modelValue: showDrawer.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showDrawer.value = $event),
          "modal-class": "mask-style",
          size: 300,
          ref_key: "drawerRef",
          ref: drawerRef
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$5, [
              createBaseVNode("div", _hoisted_3$5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(memberList.value, (item) => {
                  return openBlock(), createElementBlock("div", _hoisted_4$5, [
                    createVNode(_component_Avatar, {
                      userId: item.userId,
                      width: 30,
                      onCloseDrawer: closeDrawerHandler
                    }, null, 8, ["userId"]),
                    createBaseVNode("div", {
                      class: "nick-name",
                      title: item.contactName
                    }, toDisplayString(item.contactName), 9, _hoisted_5$5),
                    item.userId == groupInfo.value.groupOwnerId ? (openBlock(), createElementBlock("div", _hoisted_6$5, "群主")) : createCommentVNode("", true)
                  ]);
                }), 256)),
                unref(userInfoStore).getInfo().userId == groupInfo.value.groupOwnerId ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createBaseVNode("div", {
                    class: "member-item",
                    onClick: addUser
                  }, _hoisted_9$2),
                  createBaseVNode("div", {
                    class: "member-item",
                    onClick: removeUser
                  }, _hoisted_12$1)
                ], 64)) : createCommentVNode("", true)
              ]),
              _hoisted_13,
              createBaseVNode("div", _hoisted_14, [
                createVNode(AvatarBase, {
                  userId: groupInfo.value.groupId,
                  width: 60,
                  borderRadius: 5,
                  showDetail: true
                }, null, 8, ["userId"])
              ]),
              _hoisted_15,
              createBaseVNode("div", _hoisted_16, toDisplayString(groupInfo.value.groupId), 1),
              _hoisted_17,
              createBaseVNode("div", _hoisted_18, toDisplayString(groupInfo.value.groupName), 1),
              _hoisted_19,
              createBaseVNode("div", _hoisted_20, toDisplayString(groupInfo.value.groupNotice || "-"), 1),
              _hoisted_21,
              unref(userInfoStore).getInfo().userId == groupInfo.value.groupOwnerId ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: "javascript:void(0)",
                class: "leave-btn",
                onClick: dissolutionGroup
              }, "解散群聊")) : (openBlock(), createElementBlock("a", {
                key: 1,
                href: "javascript:void(0)",
                class: "leave-btn",
                onClick: leaveGroup
              }, "退出群聊"))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(UserSelect, {
          ref_key: "userSelectRef",
          ref: userSelectRef,
          onCallback: addOrRemoveUserCallback
        }, null, 512)
      ]);
    };
  }
};
const ChatGroupDetail = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-25ec25bf"]]);
const File_TYPE = {
  jpeg: 0,
  jpg: 0,
  png: 0,
  gif: 0,
  bmp: 0,
  webp: 0,
  mp4: 1,
  avi: 1,
  rmvb: 1,
  mkv: 1,
  mov: 1,
  0: "图片",
  1: "视频",
  2: "文件"
};
const getFileType = (suffix) => {
  if (suffix == void 0) {
    return 2;
  }
  if (typeof suffix === "string") {
    suffix = suffix.toLowerCase();
  }
  const fileType2 = File_TYPE[suffix];
  return fileType2 == void 0 ? 2 : fileType2;
};
const ChatSession_vue_vue_type_style_index_0_scoped_7063e993_lang = "";
const _hoisted_1$8 = {
  key: 0,
  class: "contact-tag"
};
const _hoisted_2$4 = { class: "user-info" };
const _hoisted_3$4 = { class: "user-name-panel" };
const _hoisted_4$4 = { class: "user-name" };
const _hoisted_5$4 = { class: "message-time" };
const _hoisted_6$4 = ["innerHTML"];
const _hoisted_7$3 = {
  key: 1,
  class: "chat-top iconfont icon-top"
};
const _sfc_main$8 = {
  __name: "ChatSession",
  props: {
    data: {
      type: Object,
      default: {}
    },
    currentSession: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const { proxy } = getCurrentInstance();
    return (_ctx, _cache) => {
      const _component_Badge = resolveComponent("Badge");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["chat-session-item", __props.currentSession ? "active" : ""])
      }, [
        __props.data.contactType == 1 ? (openBlock(), createElementBlock("div", _hoisted_1$8, "群")) : createCommentVNode("", true),
        createVNode(_component_Badge, {
          count: __props.data.noReadCount,
          top: 2,
          left: 42
        }, null, 8, ["count"]),
        createVNode(AvatarBase, {
          userId: __props.data.contactId
        }, null, 8, ["userId"]),
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("div", _hoisted_3$4, [
            createBaseVNode("div", _hoisted_4$4, toDisplayString(__props.data.contactName), 1),
            createBaseVNode("div", _hoisted_5$4, toDisplayString(unref(proxy).Utils.formatDate(__props.data.lastReceiveTime)), 1)
          ]),
          createBaseVNode("div", {
            class: "last-message",
            innerHTML: __props.data.lastMessage
          }, null, 8, _hoisted_6$4)
        ]),
        __props.data.topType == 1 ? (openBlock(), createElementBlock("div", _hoisted_7$3)) : createCommentVNode("", true)
      ], 2);
    };
  }
};
const ChatSession = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-7063e993"]]);
const ChatMessageFile_vue_vue_type_style_index_0_scoped_556564b3_lang = "";
const _hoisted_1$7 = ["title"];
const _hoisted_2$3 = { class: "file-name" };
const _hoisted_3$3 = { class: "file-size" };
const _hoisted_4$3 = { class: "process" };
const _hoisted_5$3 = {
  key: 0,
  class: "iconfont icon-ok"
};
const _hoisted_6$3 = { class: "info" };
const _sfc_main$7 = {
  __name: "ChatMessageFile",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const { proxy } = getCurrentInstance();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "file-panel",
        style: normalizeStyle({ cursor: __props.data.status == 1 ? "pointer" : "" })
      }, [
        createBaseVNode("div", {
          class: "file-info",
          title: __props.data.fileName
        }, [
          createBaseVNode("div", _hoisted_2$3, toDisplayString(__props.data.fileName), 1),
          createBaseVNode("div", _hoisted_3$3, "大小：" + toDisplayString(unref(proxy).Utils.size2Str(__props.data.fileSize)), 1),
          createBaseVNode("div", _hoisted_4$3, [
            __props.data.status == 1 ? (openBlock(), createElementBlock("span", _hoisted_5$3)) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_6$3, toDisplayString(__props.data.status == 0 ? "文件处理中" : "处理完成"), 1)
          ])
        ], 8, _hoisted_1$7),
        createBaseVNode("div", {
          class: normalizeClass(["iconfont", __props.data.fileType == 2 ? "icon-file" : "icon-video"])
        }, null, 2)
      ], 4);
    };
  }
};
const ChatMessageFile = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-556564b3"]]);
const _hoisted_1$6 = { class: "image-panel" };
const _sfc_main$6 = {
  __name: "ChatMessageVideo",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    getCurrentInstance();
    useGlobalInfoStore();
    return (_ctx, _cache) => {
      const _component_ShowLocalImage = resolveComponent("ShowLocalImage");
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createVNode(_component_ShowLocalImage, {
          fileId: __props.data.messageId,
          showPlay: true,
          partType: "chat",
          fileType: __props.data.fileType
        }, null, 8, ["fileId", "fileType"])
      ]);
    };
  }
};
const _hoisted_1$5 = { class: "image-panel" };
const _sfc_main$5 = {
  __name: "ChatMessageImage",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    getCurrentInstance();
    useGlobalInfoStore();
    return (_ctx, _cache) => {
      const _component_ShowLocalImage = resolveComponent("ShowLocalImage");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createVNode(_component_ShowLocalImage, {
          fileId: __props.data.messageId,
          partType: "chat",
          fileType: __props.data.fileType
        }, null, 8, ["fileId", "fileType"])
      ]);
    };
  }
};
const ChatMessage_vue_vue_type_style_index_0_scoped_83e54163_lang = "";
const _hoisted_1$4 = {
  key: 0,
  class: "message-content-my"
};
const _hoisted_2$2 = {
  key: 0,
  class: "sending"
};
const _hoisted_3$2 = ["innerHTML"];
const _hoisted_4$2 = {
  key: 1,
  class: "content"
};
const _hoisted_5$2 = {
  key: 1,
  class: "message-content-other"
};
const _hoisted_6$2 = { class: "user-avatar" };
const _hoisted_7$2 = {
  key: 0,
  class: "nick-name"
};
const _hoisted_8$1 = {
  key: 1,
  class: "sending"
};
const _hoisted_9$1 = ["innerHTML"];
const _hoisted_10$1 = {
  key: 1,
  class: "content"
};
const _sfc_main$4 = {
  __name: "ChatMessage",
  props: {
    data: {
      type: Object,
      default: {}
    },
    currentChatSession: {
      type: Object,
      default: {}
    }
  },
  emits: ["showMediaDetail"],
  setup(__props, { emit: __emit }) {
    getCurrentInstance();
    const userInfoStore = useUserInfoStore();
    const props = __props;
    const emit = __emit;
    const showDetail = () => {
      if (props.data.stauts == 0) {
        return;
      }
      emit("showMediaDetail", props.data.messageId);
    };
    return (_ctx, _cache) => {
      const _component_el_skeleton_item = resolveComponent("el-skeleton-item");
      const _component_el_skeleton = resolveComponent("el-skeleton");
      const _component_Avatar = resolveComponent("Avatar");
      return __props.data.sendUserId == unref(userInfoStore).getInfo().userId ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", {
          class: normalizeClass(["content-panel", __props.data.messageType == 5 ? "content-panel-media" : ""])
        }, [
          __props.data.status == 0 ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
            createVNode(_component_el_skeleton, { animated: true }, {
              template: withCtx(() => [
                createVNode(_component_el_skeleton_item, {
                  class: "skeleton-item",
                  variant: "image"
                })
              ]),
              _: 1
            })
          ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            __props.data.messageType != 5 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "content",
              innerHTML: __props.data.messageContent
            }, null, 8, _hoisted_3$2)) : (openBlock(), createElementBlock("div", _hoisted_4$2, [
              __props.data.fileType == 0 ? (openBlock(), createBlock(_sfc_main$5, {
                key: 0,
                data: __props.data,
                onClick: showDetail
              }, null, 8, ["data"])) : createCommentVNode("", true),
              __props.data.fileType == 1 ? (openBlock(), createBlock(_sfc_main$6, {
                key: 1,
                data: __props.data,
                onClick: showDetail
              }, null, 8, ["data"])) : createCommentVNode("", true),
              __props.data.fileType == 2 ? (openBlock(), createBlock(ChatMessageFile, {
                key: 2,
                data: __props.data,
                onClick: showDetail
              }, null, 8, ["data"])) : createCommentVNode("", true)
            ]))
          ], 64))
        ], 2),
        createVNode(_component_Avatar, {
          width: 35,
          userId: unref(userInfoStore).getInfo().userId
        }, null, 8, ["userId"])
      ])) : (openBlock(), createElementBlock("div", _hoisted_5$2, [
        createBaseVNode("div", _hoisted_6$2, [
          createVNode(_component_Avatar, {
            width: 35,
            userId: __props.data.sendUserId
          }, null, 8, ["userId"])
        ]),
        createBaseVNode("div", {
          class: normalizeClass([
            "content-panel",
            __props.data.contactType == 1 ? "group-content" : "",
            __props.data.messageType == 5 ? "content-panel-media" : ""
          ])
        }, [
          __props.data.contactType == 1 ? (openBlock(), createElementBlock("div", _hoisted_7$2, toDisplayString(__props.data.sendUserNickName), 1)) : createCommentVNode("", true),
          __props.data.status == 0 ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
            createVNode(_component_el_skeleton, { animated: true }, {
              template: withCtx(() => [
                createVNode(_component_el_skeleton_item, {
                  class: "skeleton-item",
                  variant: "image"
                })
              ]),
              _: 1
            })
          ])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            __props.data.messageType != 5 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "content",
              innerHTML: __props.data.messageContent
            }, null, 8, _hoisted_9$1)) : (openBlock(), createElementBlock("div", _hoisted_10$1, [
              __props.data.fileType == 0 ? (openBlock(), createBlock(_sfc_main$5, {
                key: 0,
                data: __props.data,
                onClick: showDetail
              }, null, 8, ["data"])) : createCommentVNode("", true),
              __props.data.fileType == 1 ? (openBlock(), createBlock(_sfc_main$6, {
                key: 1,
                data: __props.data,
                onClick: showDetail
              }, null, 8, ["data"])) : createCommentVNode("", true),
              __props.data.fileType == 2 ? (openBlock(), createBlock(ChatMessageFile, {
                key: 2,
                data: __props.data,
                onClick: showDetail
              }, null, 8, ["data"])) : createCommentVNode("", true)
            ]))
          ], 64))
        ], 2)
      ]));
    };
  }
};
const ChatMessage = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-83e54163"]]);
const ChatMessageTime_vue_vue_type_style_index_0_scoped_6a0ec1eb_lang = "";
const _hoisted_1$3 = { class: "message-time" };
const _sfc_main$3 = {
  __name: "ChatMessageTime",
  props: {
    data: {
      type: Object
    }
  },
  setup(__props) {
    const { proxy } = getCurrentInstance();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, toDisplayString(unref(proxy).Utils.formatDate(__props.data.sendTime)), 1);
    };
  }
};
const ChatMessageTime = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6a0ec1eb"]]);
const ChatMessageSys_vue_vue_type_style_index_0_scoped_a437b4e4_lang = "";
const _hoisted_1$2 = { class: "sys-message" };
const _sfc_main$2 = {
  __name: "ChatMessageSys",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    getCurrentInstance();
    const props = __props;
    const dataMessage = computed(() => {
      const data = { ...props.data };
      if (data.messageType == 1) {
        data.messageContent = "已经添加为好友，以下是打招呼的信息";
      }
      return data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(ChatMessageTime, { data: __props.data }, null, 8, ["data"]),
        createBaseVNode("div", _hoisted_1$2, toDisplayString(dataMessage.value.messageContent), 1)
      ], 64);
    };
  }
};
const ChatMessageSys = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a437b4e4"]]);
const emojiList = [
  {
    name: "笑脸",
    emojiList: [
      "😀",
      "😃",
      "😄",
      "😁",
      "😆",
      "😅",
      "🤣",
      "😂",
      "🙂",
      "🙃",
      "🫠",
      "😉",
      "😊",
      "😇",
      "🥰",
      "😍",
      "🤩",
      "😘",
      "😗",
      "😚",
      "😙",
      "🥲",
      "😋",
      "😛",
      "😜",
      "🤪",
      "😝",
      "🤑",
      "🤗",
      "🤭",
      "🫢",
      "🫣",
      "🤫",
      "🤔",
      "🫡",
      "🤐",
      "🤨",
      "😐",
      "😑",
      "😶",
      "🫥",
      "😶‍🌫️",
      "😏",
      "😒",
      "🙄",
      "😬",
      "😮‍💨",
      "🤥",
      "😌",
      "😔",
      "😪",
      "🤤",
      "😴",
      "😷",
      "🤒",
      "🤕",
      "🤢",
      "🤮",
      "🤧",
      "🥵",
      "🥶",
      "🥴",
      "😵",
      "😵‍💫",
      "🤯",
      "🤠",
      "🥳",
      "🥸",
      "😎",
      "🤓",
      "🧐",
      "😕",
      "🫤",
      "😟",
      "🙁",
      "☹️",
      "😮",
      "😯",
      "😲",
      "😳"
    ]
  },
  {
    name: "人物",
    emojiList: [
      "👋",
      "🤚",
      "🖐️",
      "✋",
      "🖖",
      "🫱",
      "🫲",
      "🫳",
      "🫴",
      "👌",
      "🤌",
      "🤏",
      "✌️",
      "🤞",
      "🫰",
      "🤟",
      "🤘",
      "🤙",
      "👈",
      "👉",
      "👆",
      "🖕",
      "👇",
      "☝️",
      "🫵",
      "👍",
      "👎",
      "✊",
      "👊",
      "🤛",
      "🤜",
      "👏",
      "🙌",
      "🫶",
      "👐",
      "🤲",
      "🤝",
      "🙏",
      "✍️",
      "💅",
      "🤳",
      "💪",
      "🦾",
      "🦿",
      "🦵",
      "🦶",
      "👂",
      "🦻",
      "👃",
      "🧠",
      "🫀",
      "🫁",
      "🦷",
      "🦴",
      "👀",
      "👁️",
      "👅",
      "👄",
      "🫦",
      "👶",
      "🧒",
      "👦",
      "👧",
      "🧑",
      "👱",
      "👨",
      "🧔",
      "🧔‍♂️",
      "🧔‍♀️",
      "👨‍🦰",
      "👨‍🦱",
      "👨‍🦳",
      "👨‍🦲",
      "👩",
      "👩‍🦰",
      "🧑‍🦰",
      "👩‍🦱",
      "🧑‍🦱",
      "👩‍🦳",
      "🧑‍🦳"
    ]
  },
  {
    name: "动物",
    emojiList: [
      "🐵",
      "🐒",
      "🦍",
      "🦧",
      "🐶",
      "🐕",
      "🦮",
      "🐕",
      "🐩",
      "🐺",
      "🦊",
      "🦝",
      "🐱",
      "🐈",
      "🐈",
      "🦁",
      "🐯",
      "🐅",
      "🐆",
      "🐴",
      "🐎",
      "🦄",
      "🦓",
      "🦌",
      "🦬",
      "🐮",
      "🐂",
      "🐃",
      "🐄",
      "🐷",
      "🐖",
      "🐗",
      "🐽",
      "🐏",
      "🐑",
      "🐐",
      "🐪",
      "🐫",
      "🦙",
      "🦒",
      "🐘",
      "🦣",
      "🦏",
      "🦛",
      "🐭",
      "🐁",
      "🐀",
      "🐹",
      "🐰",
      "🐇",
      "🦫",
      "🦔",
      "🦇",
      "🐻",
      "🐻",
      "🐨",
      "🐼",
      "🦥",
      "🦦",
      "🦨",
      "🦘",
      "🦡",
      "🐾",
      "🦃",
      "🐔",
      "🐓",
      "🐣",
      "🐤",
      "🐥",
      "🐦",
      "🐧",
      "🦅",
      "🦆",
      "🦢",
      "🦉",
      "🦤",
      "🪶",
      "🦩",
      "🦂",
      "🦟"
    ]
  }
];
const MessageSend_vue_vue_type_style_index_0_scoped_833d038a_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-833d038a"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "send-panel" };
const _hoisted_2$1 = { class: "toolbar" };
const _hoisted_3$1 = { class: "emoji-list" };
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "iconfont icon-folder" }, null, -1));
const _hoisted_6$1 = { class: "send-btn-panel" };
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "empty-msg" }, "不能发送空白信息", -1));
const fileLimit = 10;
const _sfc_main$1 = {
  __name: "MessageSend",
  props: {
    currentChatSession: {
      type: Object,
      default: {}
    }
  },
  emits: ["sendMessage4Local"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { proxy } = getCurrentInstance();
    const userInfoStore = useUserInfoStore();
    const sysSettingStore = useSysSettingStore();
    const props = __props;
    const cleanMessage = () => {
      msgContent.value = "";
    };
    __expose({
      cleanMessage
    });
    const activeEmoji = ref("笑脸");
    const msgContent = ref("");
    const emit = __emit;
    const sendMessage = async (e) => {
      if (e.shiftKey && e.keyCode === 13) {
        return;
      }
      e.preventDefault();
      const messageContent2 = msgContent.value ? msgContent.value.replace(/\s*$/g, "") : "";
      if (messageContent2 == "") {
        showSendMsgPopover.value = true;
        return;
      }
      sendMessageDo({ messageContent: messageContent2, messageType: 2 }, true);
    };
    const searchAddRef = ref();
    const addContact = (contactId, code) => {
      searchAddRef.value.show({
        contactId,
        contactType: code == 902 ? "USER" : "GROUP"
      });
    };
    const sendMessageDo = async (messageObj = {
      messageContent,
      messageType,
      localFilePath,
      fileSize,
      fileName,
      filePath,
      fileType
    }, cleanMsgContent) => {
      if (!checkFileSize(messageObj.fileType, messageObj.fileSize, messageObj.fileName)) {
        return;
      }
      if (messageObj.fileSize == 0) {
        proxy.Confirm({
          message: `"${messageObj.fileName}"是一个空文件无法发送，请重新选择`,
          showCancelBtn: false
        });
        return;
      }
      messageObj.sessionId = props.currentChatSession.sessionId;
      messageObj.sendUserId = userInfoStore.getInfo().userId;
      let result = await proxy.Request({
        url: proxy.Api.sendMessage,
        showLoading: false,
        params: {
          messageContent: messageObj.messageContent,
          contactId: props.currentChatSession.contactId,
          messageType: messageObj.messageType,
          fileSize: messageObj.fileSize,
          fileName: messageObj.fileName,
          fileType: messageObj.fileType
        },
        showError: false,
        errorCallback: (responseData) => {
          proxy.Confirm({
            message: responseData.info,
            okfun: () => {
              addContact(props.currentChatSession.contactId, responseData.code);
            },
            okText: "重新申请"
          });
        }
      });
      if (!result) {
        return;
      }
      if (cleanMsgContent) {
        msgContent.value = "";
      }
      Object.assign(messageObj, result.data);
      emit("sendMessage4Local", messageObj);
      window.ipcRenderer.send("addLocalMessage", messageObj);
    };
    const sendEmoji = (emoji) => {
      msgContent.value = msgContent.value + emoji;
      showEmojiPopover.value = false;
    };
    const showEmojiPopoverHandler = () => {
      showEmojiPopover.value = true;
    };
    const showSendMsgPopover = ref(false);
    const showEmojiPopover = ref(false);
    const hidePopover = () => {
      showSendMsgPopover.value = false;
      showEmojiPopover.value = false;
    };
    const openPopover = () => {
      document.addEventListener("click", hidePopover, false);
    };
    const closePopover = () => {
      document.removeEventListener("click", hidePopover, false);
    };
    const checkFileSize = (fileType2, fileSize2, fileName2) => {
      const SIZE_MB = 1024 * 1024;
      const settingArray = Object.values(sysSettingStore.getSetting());
      if (fileSize2 > settingArray[fileType2] * SIZE_MB) {
        proxy.Confirm({
          message: `文件${fileName2}超过大小${settingArray[fileType2]}MB限制`,
          showCancelBtn: false
        });
        return false;
      }
      return true;
    };
    const checkFileLimit = (files) => {
      if (files.length > fileLimit) {
        proxy.Confirm({
          message: `一次最多可以上传10个文件`,
          showCancelBtn: false
        });
        return;
      }
      return true;
    };
    const dragOverHandler = () => {
      event.preventDefault();
    };
    const dropHandler = (event2) => {
      event2.preventDefault();
      const files = event2.dataTransfer.files;
      if (!checkFileLimit(files)) {
        return;
      }
      for (let i = 0; i < files.length; i++) {
        uploadFileDo(files[i]);
      }
    };
    const uploadExceed = (files) => {
      checkFileLimit(files);
    };
    const uploadRef = ref();
    const uploadFile = (file) => {
      uploadFileDo(file.file);
      uploadRef.value.clearFiles();
    };
    const getFileTypeByName = (fileName2) => {
      const fileSuffix = fileName2.substr(fileName2.lastIndexOf(".") + 1);
      return getFileType(fileSuffix);
    };
    const uploadFileDo = (file) => {
      const fileType2 = getFileTypeByName(file.name);
      sendMessageDo(
        {
          messageContent: "[" + getFileType(fileType2) + "]",
          messageType: 5,
          fileSize: file.size,
          fileName: file.name,
          filePath: file.path,
          fileType: fileType2
        },
        false
      );
    };
    const pasteFile = async (event2) => {
      let items = event2.clipboardData && event2.clipboardData.items;
      const fileData = {};
      for (const item of items) {
        if (item.kind != "file") {
          break;
        }
        const file = await item.getAsFile();
        if (file.path != "") {
          uploadFileDo(file);
        } else {
          const imageFile = new File([file], "temp.jpg");
          let fileReader = new FileReader();
          fileReader.onloadend = function() {
            const byteArray = new Uint8Array(this.result);
            fileData.byteArray = byteArray;
            fileData.name = imageFile.name;
            window.ipcRenderer.send("saveClipBoardFile", fileData);
          };
          fileReader.readAsArrayBuffer(imageFile);
        }
      }
    };
    onMounted(() => {
      window.ipcRenderer.on("saveClipBoardFileCallback", (e, file) => {
        const fileType2 = 0;
        sendMessageDo(
          {
            messageContent: "[" + getFileType(fileType2) + "]",
            messageType: 5,
            fileSize: file.size,
            fileName: file.name,
            filePath: file.path,
            fileType: fileType2
          },
          false
        );
      });
    });
    onUnmounted(() => {
      window.ipcRenderer.removeAllListeners("saveClipBoardFileCallback");
    });
    return (_ctx, _cache) => {
      const _component_el_tab_pane = resolveComponent("el-tab-pane");
      const _component_el_tabs = resolveComponent("el-tabs");
      const _component_el_popover = resolveComponent("el-popover");
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_input = resolveComponent("el-input");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(_component_el_popover, {
            visible: showEmojiPopover.value,
            trigger: "click",
            placement: "top",
            teleported: false,
            onShow: openPopover,
            onHide: closePopover,
            "popper-style": {
              padding: "0px 10px 10px 10px",
              width: "490px"
            }
          }, {
            default: withCtx(() => [
              createVNode(_component_el_tabs, {
                modelValue: activeEmoji.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeEmoji.value = $event),
                onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                }, ["stop"]))
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(emojiList), (emoji) => {
                    return openBlock(), createBlock(_component_el_tab_pane, {
                      label: emoji.name,
                      name: emoji.name
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3$1, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(emoji.emojiList, (item) => {
                            return openBlock(), createElementBlock("div", {
                              class: "emoji-item",
                              onClick: ($event) => sendEmoji(item)
                            }, toDisplayString(item), 9, _hoisted_4$1);
                          }), 256))
                        ])
                      ]),
                      _: 2
                    }, 1032, ["label", "name"]);
                  }), 256))
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            reference: withCtx(() => [
              createBaseVNode("div", {
                class: "iconfont icon-emoji",
                onClick: showEmojiPopoverHandler
              })
            ]),
            _: 1
          }, 8, ["visible"]),
          createVNode(_component_el_upload, {
            ref_key: "uploadRef",
            ref: uploadRef,
            name: "file",
            "show-file-list": false,
            multiple: true,
            limit: fileLimit,
            "http-request": uploadFile,
            "on-exceed": uploadExceed
          }, {
            default: withCtx(() => [
              _hoisted_5$1
            ]),
            _: 1
          }, 512)
        ]),
        createBaseVNode("div", {
          class: "input-area",
          onDrop: dropHandler,
          onDragover: dragOverHandler
        }, [
          createVNode(_component_el_input, {
            rows: "5",
            modelValue: msgContent.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => msgContent.value = $event),
            type: "textarea",
            resize: "none",
            maxlength: "500",
            "show-word-limit": "",
            spellcheck: "false",
            "input-style": "background:#f5f5f5;border:none;",
            onKeydown: withKeys(sendMessage, ["enter"]),
            onPaste: pasteFile
          }, null, 8, ["modelValue"])
        ], 32),
        createBaseVNode("div", _hoisted_6$1, [
          createVNode(_component_el_popover, {
            trigger: "click",
            visible: showSendMsgPopover.value,
            "hide-after": 1500,
            placement: "top-end",
            teleported: false,
            onShow: openPopover,
            onHide: closePopover,
            "popper-style": {
              padding: "5px",
              "min-width": "0px",
              width: "120px"
            }
          }, {
            default: withCtx(() => [
              _hoisted_7$1
            ]),
            reference: withCtx(() => [
              createBaseVNode("span", {
                class: "send-btn",
                onClick: sendMessage
              }, "发送(S)")
            ]),
            _: 1
          }, 8, ["visible"])
        ]),
        createVNode(_sfc_main$c, {
          ref_key: "searchAddRef",
          ref: searchAddRef
        }, null, 512)
      ]);
    };
  }
};
const MessageSend = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-833d038a"]]);
const Chat_vue_vue_type_style_index_0_scoped_eb0f79f7_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-eb0f79f7"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "drag-panel drag" }, null, -1));
const _hoisted_2 = { class: "top-search" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "iconfont icon-search" }, null, -1));
const _hoisted_4 = { class: "chat-session-list" };
const _hoisted_5 = { class: "search-list" };
const _hoisted_6 = {
  key: 0,
  class: "title-panel drag"
};
const _hoisted_7 = { class: "title" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = { class: "chat-panel" };
const _hoisted_10 = {
  class: "message-panel",
  id: "message-panel"
};
const _hoisted_11 = ["id"];
const _hoisted_12 = { class: "chat-blank" };
const __default__ = {
  name: "chat"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const route = useRoute();
    const { proxy } = getCurrentInstance();
    const userInfoStore = useUserInfoStore();
    const messageCountStore = useMessageCountStore();
    const contactStateStore = useContactStateStore();
    const chatSessionList = ref([]);
    const loadChatSession = () => {
      window.ipcRenderer.send("loadSessionData");
    };
    const sortChatSessionList = (dataList) => {
      dataList.sort((a, b) => {
        const topTypeResult = b["topType"] - a["topType"];
        if (topTypeResult == 0) {
          return b["lastReceiveTime"] - a["lastReceiveTime"];
        }
        return topTypeResult;
      });
    };
    const delChatSessionList = (contactId) => {
      setTimeout(() => {
        chatSessionList.value = chatSessionList.value.filter((item) => {
          return item.contactId !== contactId;
        });
      }, 100);
    };
    const currentChatSession = ref({});
    const messageCountInfo = {
      totalPage: 0,
      pageNo: 0,
      maxMessageId: null,
      noData: false
    };
    const messageList = ref([]);
    let distanceBottom = 0;
    const messageSendRef = ref();
    const loadingMessage = ref(false);
    const chatSessionClickHandler = (item) => {
      distanceBottom = 0;
      currentChatSession.value = Object.assign({}, item);
      messageCountStore.setCount("chatCount", -item.noReadCount, false);
      item.noReadCount = 0;
      messageList.value = [];
      loadingMessage.value = false;
      messageCountInfo.pageNo = 0;
      messageCountInfo.totalPage = 1;
      messageCountInfo.maxMessageId = null;
      messageCountInfo.noData = false;
      loadChatMessage();
      setSessionSelect({ contactId: item.contactId, sessionId: item.sessionId });
      messageSendRef.value.cleanMessage();
    };
    const setSessionSelect = ({ contactId, sessionId }) => {
      window.ipcRenderer.send("setSessionSelect", {
        contactId,
        sessionId
      });
    };
    const loadChatMessage = () => {
      if (loadingMessage.value || messageCountInfo.noData) {
        return;
      }
      messageCountInfo.pageNo++;
      loadingMessage.value = true;
      window.ipcRenderer.send("loadChatMessage", {
        sessionId: currentChatSession.value.sessionId,
        pageNo: messageCountInfo.pageNo,
        maxMessageId: messageCountInfo.maxMessageId
      });
    };
    const onReciveMessage = () => {
      window.ipcRenderer.on("reciveMessage", (e, message) => {
        console.log("收到消息", message);
        if (message.messageType == 0) {
          return;
        }
        if (message.messageType == 4) {
          loadContactApply();
          return;
        }
        if (message.messageType == 7) {
          proxy.Confirm({
            message: `你已经被管理员强制下线`,
            okfun: () => {
              setTimeout(() => {
                window.ipcRenderer.send("reLogin");
              }, 200);
            },
            showCancelBtn: false
          });
          return;
        }
        if (message.messageType == 10) {
          let curSession2 = chatSessionList.value.find((item) => {
            return item.contactId == message.contactId;
          });
          curSession2.contactName = message.extendData;
          return;
        }
        if (message.messageType == 6) {
          const localMessage = messageList.value.find((item) => {
            if (item.messageId == message.messageId) {
              return item;
            }
          });
          if (localMessage != null) {
            localMessage.status = 1;
          }
          return;
        }
        if (message.messageType == 9 && message.extendData.userId == userInfoStore.getInfo().userId) {
          contactStateStore.setContactReload("GROUP");
        }
        let curSession = chatSessionList.value.find((item) => {
          return item.sessionId == message.sessionId;
        });
        if (curSession == null) {
          chatSessionList.value.push(message.extendData);
          curSession = message.extendData;
        } else {
          Object.assign(curSession, message.extendData);
        }
        sortChatSessionList(chatSessionList.value);
        if (message.sessionId !== currentChatSession.value.sessionId) {
          messageCountStore.setCount("chatCount", 1, false);
        } else {
          Object.assign(currentChatSession.value, message.extendData);
          messageList.value.push(message);
          gotoBottom();
        }
      });
    };
    const onLoadSessionData = () => {
      window.ipcRenderer.on("loadSessionDataCallback", (e, data) => {
        let noReadCount = 0;
        data.forEach((element) => {
          noReadCount = noReadCount + element.noReadCount;
        });
        messageCountStore.setCount("chatCount", noReadCount, true);
        sortChatSessionList(data);
        chatSessionList.value = data;
      });
    };
    const onLoadChatMessage = () => {
      window.ipcRenderer.on("loadChatMessage", (e, { dataList, pageTotal, pageNo }) => {
        if (pageNo == pageTotal) {
          messageCountInfo.noData = true;
        }
        loadingMessage.value = false;
        dataList.sort((a, b) => {
          return a.messageId - b.messageId;
        });
        const lastMessage = messageList.value[0];
        messageList.value = dataList.concat(messageList.value);
        messageCountInfo.pageTotal = pageTotal;
        messageCountInfo.pageNo = pageNo;
        if (pageNo == 1) {
          messageCountInfo.maxMessageId = dataList.length > 0 ? dataList[dataList.length - 1].messageId : null;
        }
        if (pageNo == 1) {
          gotoBottom();
        } else {
          nextTick(() => {
            document.querySelector("#message" + lastMessage.messageId).scrollIntoView();
          });
        }
      });
    };
    const onAddLocalMessage = () => {
      window.ipcRenderer.on("addLocalCallback", (e, { messageId, status }) => {
        const findMessage = messageList.value.find((item) => {
          if (item.messageId == messageId) {
            return item;
          }
        });
        if (findMessage != null) {
          findMessage.status = status;
        }
      });
    };
    const sendMessage4LocalHandler = (messageObj) => {
      messageList.value.push(messageObj);
      const chatSession = chatSessionList.value.find((item) => {
        return item.sessionId == messageObj.sessionId;
      });
      if (chatSession) {
        chatSession.lastMessage = messageObj.lastMessage;
        chatSession.lastReceiveTime = messageObj.sendTime;
      }
      sortChatSessionList(chatSessionList.value);
      gotoBottom();
    };
    const gotoBottom = () => {
      nextTick(() => {
        if (distanceBottom > 200) {
          return;
        }
        const feedItems = document.querySelectorAll(".message-item");
        if (feedItems.length > 0) {
          setTimeout(() => {
            feedItems[feedItems.length - 1].scrollIntoView();
          }, 100);
        }
      });
    };
    const loadContactApply = () => {
      window.ipcRenderer.send("loadContactApply");
    };
    const onLoadContactApply = () => {
      window.ipcRenderer.on("loadContactApplyCallback", (e, contactNoRead) => {
        messageCountStore.setCount("contactApplyCount", contactNoRead, true);
      });
    };
    const onReloadChatSession = () => {
      window.ipcRenderer.on("reloadChatSessionCallback", (e, { contactId, chatSessionDataList }) => {
        sortChatSessionList(chatSessionDataList);
        chatSessionList.value = chatSessionDataList;
        sendMessage(contactId);
      });
    };
    onMounted(() => {
      onReciveMessage();
      onLoadChatMessage();
      loadChatSession();
      onLoadSessionData();
      loadContactApply();
      onLoadContactApply();
      onAddLocalMessage();
      onReloadChatSession();
      nextTick(() => {
        const messagePanel = document.querySelector("#message-panel");
        messagePanel.addEventListener("scroll", (e) => {
          const scrollTop = e.target.scrollTop;
          distanceBottom = e.target.scrollHeight - e.target.clientHeight - scrollTop;
          if (scrollTop == 0 && messageList.value.length > 0) {
            loadChatMessage();
          }
        });
      });
      setSessionSelect({});
    });
    onUnmounted(() => {
      window.ipcRenderer.removeAllListeners("loadSessionDataCallback");
      window.ipcRenderer.removeAllListeners("reciveMessage");
      window.ipcRenderer.removeAllListeners("loadChatMessage");
      window.ipcRenderer.removeAllListeners("loadContactApply");
      window.ipcRenderer.removeAllListeners("addLocalCallback");
      window.ipcRenderer.removeAllListeners("reloadChatSessionCallback");
    });
    const setTop = (data) => {
      data.topType = data.topType == 0 ? 1 : 0;
      sortChatSessionList(chatSessionList.value);
      window.ipcRenderer.send("topChatSession", { contactId: data.contactId, topType: data.topType });
    };
    const delChatSession = (contactId) => {
      delChatSessionList(contactId);
      setSessionSelect({});
      currentChatSession.value = {};
      window.ipcRenderer.send("delChatSession", contactId);
    };
    const onContextMenu = (data, e) => {
      ContextMenu.showContextMenu({
        x: e.x,
        y: e.y,
        items: [
          {
            label: data.topType == 0 ? "置顶" : "取消置顶",
            onClick: () => {
              setTop(data);
            }
          },
          {
            label: "删除聊天",
            onClick: () => {
              proxy.Confirm({
                message: `确定要删除聊天【${data.contactName}】吗？`,
                okfun: () => {
                  delChatSession(data.contactId);
                }
              });
            }
          }
        ]
      });
    };
    const showMediaDetailHandler = (messageId) => {
      let showFileList = messageList.value.filter((item) => {
        return item.messageType == 5;
      });
      showFileList = showFileList.map((item) => {
        return {
          partType: "chat",
          fileId: item.messageId,
          fileType: item.fileType,
          fileName: item.fileName,
          fileSize: item.fileSize,
          forceGet: false
        };
      });
      window.ipcRenderer.send("newWindow", {
        windowId: "media",
        title: "图片查看",
        path: `/showMedia`,
        data: {
          currentFileId: messageId,
          fileList: showFileList
        }
      });
    };
    const chatGroupDetailRef = ref();
    const showGroupDetail = () => {
      chatGroupDetailRef.value.show(currentChatSession.value.contactId);
    };
    const sendMessage = (contactId) => {
      let curSession = chatSessionList.value.find((item) => {
        return item.contactId == contactId;
      });
      if (!curSession) {
        window.ipcRenderer.send("reloadChatSession", { contactId });
        return;
      } else {
        chatSessionClickHandler(curSession);
      }
    };
    watch(
      () => route.query.timestamp,
      (newVal, oldVal) => {
        if (newVal && route.query.chatId) {
          sendMessage(route.query.chatId);
        }
      },
      { immediate: true, deep: true }
    );
    const searchKey = ref();
    const searchList = ref([]);
    const search = () => {
      if (!searchKey.value) {
        return;
      }
      searchList.value = [];
      var regex = new RegExp("(" + searchKey.value + ")", "gi");
      chatSessionList.value.forEach((item) => {
        if (item.contactName.includes(searchKey.value) || item.lastMessage.includes(searchKey.value)) {
          let newData = Object.assign({}, item);
          newData.searchContactName = newData.contactName.replace(
            regex,
            "<span class='highlight'>$1</span>"
          );
          newData.searchLastMessage = newData.lastMessage.replace(
            regex,
            "<span class='highlight'>$1</span>"
          );
          searchList.value.push(newData);
        }
      });
    };
    const searchClickHandler = (data) => {
      searchKey.value = void 0;
      chatSessionClickHandler(data);
    };
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_Layout = resolveComponent("Layout");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_Layout, null, {
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
              (openBlock(true), createElementBlock(Fragment, null, renderList(chatSessionList.value, (data) => {
                return openBlock(), createBlock(ChatSession, {
                  onClick: ($event) => chatSessionClickHandler(data),
                  data,
                  currentSession: data.contactId == currentChatSession.value.contactId,
                  onContextmenu: withModifiers(($event) => onContextMenu(data, $event), ["stop"])
                }, null, 8, ["onClick", "data", "currentSession", "onContextmenu"]);
              }), 256))
            ], 512), [
              [vShow, !searchKey.value]
            ]),
            withDirectives(createBaseVNode("div", _hoisted_5, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(searchList.value, (item) => {
                return openBlock(), createBlock(SearchResult, {
                  onClick: ($event) => searchClickHandler(item),
                  data: item
                }, null, 8, ["onClick", "data"]);
              }), 256))
            ], 512), [
              [vShow, searchKey.value]
            ])
          ]),
          "right-content": withCtx(() => [
            Object.keys(currentChatSession.value).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("span", null, toDisplayString(currentChatSession.value.contactName), 1),
                currentChatSession.value.contactType == 1 ? (openBlock(), createElementBlock("span", _hoisted_8, "(" + toDisplayString(currentChatSession.value.memberCount) + ")", 1)) : createCommentVNode("", true)
              ])
            ])) : createCommentVNode("", true),
            currentChatSession.value.contactType == 1 ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "iconfont icon-more no-drag",
              onClick: showGroupDetail
            })) : createCommentVNode("", true),
            withDirectives(createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(messageList.value, (data, index) => {
                  return openBlock(), createElementBlock("div", {
                    class: "message-item",
                    id: "message" + data.messageId
                  }, [
                    index > 1 && data.sendTime - messageList.value[index - 1].sendTime >= 3e5 && (data.messageType == 2 || data.messageType == 5) ? (openBlock(), createBlock(ChatMessageTime, {
                      key: 0,
                      data
                    }, null, 8, ["data"])) : createCommentVNode("", true),
                    data.messageType == 3 || data.messageType == 1 || data.messageType == 9 || data.messageType == 8 || data.messageType == 11 || data.messageType == 12 ? (openBlock(), createBlock(ChatMessageSys, {
                      key: 1,
                      data
                    }, null, 8, ["data"])) : createCommentVNode("", true),
                    data.messageType == 1 || data.messageType == 2 || data.messageType == 5 ? (openBlock(), createBlock(ChatMessage, {
                      key: 2,
                      data,
                      currentChatSession: currentChatSession.value,
                      onShowMediaDetail: showMediaDetailHandler
                    }, null, 8, ["data", "currentChatSession"])) : createCommentVNode("", true)
                  ], 8, _hoisted_11);
                }), 256))
              ]),
              createVNode(MessageSend, {
                ref_key: "messageSendRef",
                ref: messageSendRef,
                currentChatSession: currentChatSession.value,
                onSendMessage4Local: sendMessage4LocalHandler
              }, null, 8, ["currentChatSession"])
            ], 512), [
              [vShow, Object.keys(currentChatSession.value).length > 0]
            ]),
            withDirectives(createBaseVNode("div", _hoisted_12, [
              createVNode(Blank)
            ], 512), [
              [vShow, Object.keys(currentChatSession.value).length == 0]
            ])
          ]),
          _: 1
        }),
        createVNode(ChatGroupDetail, {
          ref_key: "chatGroupDetailRef",
          ref: chatGroupDetailRef,
          onDelChatSessionCallback: delChatSession
        }, null, 512)
      ], 64);
    };
  }
});
const Chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eb0f79f7"]]);
export {
  Chat as default
};
