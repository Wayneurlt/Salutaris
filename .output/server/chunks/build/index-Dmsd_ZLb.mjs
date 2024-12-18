import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CxTLrOlD.mjs';
import { defineComponent, createElementBlock, ref, provide, useSSRContext, mergeProps, unref, withCtx, createTextVNode, createVNode, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@prisma/client';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import 'notivue';

defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_1$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _imports_0$1 = "" + buildAssetsURL("log.CvYw3_r8.png");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "navbar",
  __ssrInlineRender: true,
  setup(__props) {
    let isScrolled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_1$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: [
          "px-8 py-3 xl:py-4 fixed top-0 w-full z-[1000] flex justify-between items-center",
          {
            "dark:bg-white bg-satinlinen": unref(isScrolled),
            "bg-transparent": !unref(isScrolled)
          }
        ]
      }, _attrs))} data-v-6125bcba><div class="flex items-center gap-6 font-semibold" data-v-6125bcba>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        style: { color: unref(isScrolled) ? "#003366" : "#d4af37" },
        class: "transition-transform transform hover:scale-105"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        style: { color: unref(isScrolled) ? "#003366" : "#d4af37" },
        class: "transition-transform transform hover:scale-105"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Us `);
          } else {
            return [
              createTextVNode(" About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        style: { color: unref(isScrolled) ? "#003366" : "#d4af37" },
        class: "transition-transform transform hover:scale-105"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Projects `);
          } else {
            return [
              createTextVNode(" Projects ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/impact",
        style: { color: unref(isScrolled) ? "#003366" : "#d4af37" },
        class: "transition-transform transform hover:scale-105"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Impact `);
          } else {
            return [
              createTextVNode(" Impact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="absolute left-1/2 transform -translate-x-1/2" data-v-6125bcba>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "h-18 lg:h-30 xl:h-36 w-auto",
                    src: _imports_0$1,
                    alt: "Salutaris Logo"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-4" data-v-6125bcba>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/join",
        style: { color: unref(isScrolled) ? "#003366" : "#d4af37" },
        class: "px-4 py-2 bg-navyblue text-white rounded-full focus:outline-none focus:ring-4 focus:ring-gold transition-transform transform hover:scale-105"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Join Us `);
          } else {
            return [
              createTextVNode(" Join Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/donate",
        style: { color: unref(isScrolled) ? "#003366" : "#d4af37" },
        class: "px-4 py-2 bg-gold text-navyblue border border-navyblue rounded-full focus:outline-none focus:ring-4 focus:ring-gold transition-transform transform hover:scale-105"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Donate `);
          } else {
            return [
              createTextVNode(" Donate ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/navbar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-6125bcba"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "bg",
  __ssrInlineRender: true,
  props: {
    color: { default: "#000000" },
    count: { default: 150 }
  },
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><canvas class="absolute inset-0 w-full h-full bg-white"></canvas></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/bg.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingBg = _sfc_main$5;
      const _component_FlipWords = resolveComponent("FlipWords");
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative flex min-h-screen w-full flex-col items-center justify-center" }, _attrs))} data-v-4818c55e>`);
      _push(ssrRenderComponent(_component_LandingBg, null, null, _parent));
      _push(`<div class="absolute inset-0 z-[1] bg-black opacity-50" data-v-4818c55e></div><header class="absolute top-0 z-[3] w-full" data-v-4818c55e>`);
      ssrRenderSlot(_ctx.$slots, "navbar", {}, null, _push, _parent);
      _push(`</header><div class="z-[2] flex max-w-3xl flex-col items-center gap-4 px-6 py-12" data-v-4818c55e><span class="flex flex-col items-center justify-center text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-yellow-300 md:text-6xl" data-v-4818c55e><span data-v-4818c55e> Empowering `);
      _push(ssrRenderComponent(_component_FlipWords, {
        words: ["communities", "change", "hope"],
        duration: 3e3,
        class: "w-56 bg-gradient-to-b from-white to-yellow-300 bg-clip-text text-transparent"
      }, null, _parent));
      _push(`</span> transformation through love and action </span><span class="text-center text-lg md:text-xl mt-4" data-v-4818c55e> At Salutaris, we are committed to making a lasting impact through truth, compassion, and community-driven action. </span><div class="my-4 flex flex-row items-center justify-center gap-6" data-v-4818c55e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/join",
        class: "px-6 py-3 text-lg font-semibold border-2 border-white bg-transparent text-white rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-500 hover:bg-yellow-500 hover:text-navyblue transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get Involved `);
          } else {
            return [
              createTextVNode(" Get Involved ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/donate",
        class: "px-6 py-3 text-lg font-semibold border-2 border-yellow-500 bg-yellow-500 text-navyblue rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-500 hover:bg-transparent hover:text-white transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Support Our Mission `);
          } else {
            return [
              createTextVNode(" Support Our Mission ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/hero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4818c55e"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-navy-800" }, _attrs))}><div class="container px-6 py-12 mx-auto"><div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"><div class="p-6 bg-gray-50 dark:bg-navy-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"><svg class="w-12 h-12 mx-auto text-navy-900 dark:text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s-1-.683-2.293-1.84C7.516 17.495 5 15.376 5 12.5 5 10.57 6.57 9 8.5 9 9.6 9 10.68 9.633 11 10.5 11.32 9.633 12.4 9 13.5 9 15.43 9 17 10.57 17 12.5c0 2.876-2.516 4.995-4.707 6.66C13 20.317 12 21 12 21z" fill="#F59E0B"></path></svg><h1 class="mt-6 text-center text-xl font-semibold text-navy-900 dark:text-black"> Philanthropy for Impact </h1><p class="mt-4 text-center text-gray-500 dark:text-gray-400"> Supporting communities with resources and care to uplift lives and foster meaningful development. </p></div><div class="p-6 bg-gray-50 dark:bg-navy-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"><svg class="w-12 h-12 mx-auto text-navy-900 dark:text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5a4 4 0 100 8 4 4 0 000-8zm-9 8.5a5 5 0 015-5h8a5 5 0 015 5v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" fill="#1E3A8A"></path></svg><h1 class="mt-6 text-center text-xl font-semibold text-navy-900 dark:text-black"> Collaboration in Action </h1><p class="mt-4 text-center text-gray-500 dark:text-gray-400"> Partnering with organizations and individuals to maximize effectiveness and drive impactful change. </p></div><div class="p-6 bg-gray-50 dark:bg-navy-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"><svg class="w-12 h-12 mx-auto text-navy-900 dark:text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-1 2H7a2 2 0 00-2 2v4h10v-4a2 2 0 00-2-2h-4zm8 6v-4a4 4 0 00-4-4h-2.172a6.965 6.965 0 01-2.828 0H9a4 4 0 00-4 4v4h14z" fill="#F59E0B"></path></svg><h1 class="mt-6 text-center text-xl font-semibold text-navy-900 dark:text-black"> Empowering Volunteers </h1><p class="mt-4 text-center text-gray-500 dark:text-gray-400"> Encouraging people to contribute their time and skills to serve and transform local communities. </p></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/feature.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + buildAssetsURL("cap.jDr3obz9.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[#ffffff]" }, _attrs))}><div class="container flex flex-col px-6 py-16 mx-auto"><div class="order-2 mt-8 lg:order-1 lg:mt-0 lg:flex lg:items-center lg:-mx-6"><img class="object-cover w-full lg:w-1/2 lg:mx-6 h-72 lg:h-96"${ssrRenderAttr("src", _imports_0)} alt="Salutaris Community Impact"><div class="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0"><h3 class="font-serif text-2xl text-black capitalize md:text-4xl lg:text-5xl"> Transforming Communities through Love in Action </h3><p class="mt-4 text-black"> At <span class="font-semibold">Salutaris</span>, we believe in creating lasting change by empowering communities through compassion and tangible actions. From educational programs to healthcare initiatives, we strive to improve lives and bring hope where it&#39;s needed most. </p><p class="mt-4 text-black"> Join us as we work together to build a brighter future, guided by the principles of love, truth, and action. </p></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/info.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/news.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingNavbar = __nuxt_component_0;
  const _component_LandingHero = __nuxt_component_1;
  const _component_LandingFeature = __nuxt_component_2;
  const _component_LandingInfo = __nuxt_component_3;
  const _component_LandingNews = __nuxt_component_4;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LandingNavbar, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingHero, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingFeature, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingInfo, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingNews, null, null, _parent));
  _push(`<p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About page`);
      } else {
        return [
          createTextVNode("About page")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/join" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Join Us`);
      } else {
        return [
          createTextVNode("Join Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Dmsd_ZLb.mjs.map
