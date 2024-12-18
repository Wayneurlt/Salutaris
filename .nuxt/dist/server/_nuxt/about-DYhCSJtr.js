import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "@prisma/client";
import "devalue";
import "@vueuse/core";
import "klona";
import "tailwind-merge";
import "@iconify/vue";
import "notivue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<p${ssrRenderAttrs(_attrs)}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illo numquam, magni nulla aut aperiam! Cupiditate veniam, in minima alias aliquam eligendi cumque facere impedit quod pariatur necessitatibus commodi nam, exercitationem sunt suscipit quisquam omnis, laboriosam iste deleniti illo illum. Sapiente velit eligendi quam eius dolor cumque ipsum aut obcaecati, perferendis ullam doloribus maiores quae nobis quis autem architecto voluptates corrupti recusandae! Perspiciatis cum, quam quidem eveniet iure odio tempora eaque magnam, odit fugit asperiores minima? Est praesentium expedita suscipit alias harum ea voluptatem architecto. Delectus ea, architecto accusamus deleniti suscipit excepturi voluptas provident dolor temporibus incidunt asperiores! Aliquid, delectus. </p>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about as default
};
//# sourceMappingURL=about-DYhCSJtr.js.map
