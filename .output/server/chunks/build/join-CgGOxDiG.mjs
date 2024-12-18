import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("team.Z2M6FQ-b.png");
const _imports_1 = "" + buildAssetsURL("logo.lzsXYdjA.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-900" }, _attrs))}><div class="flex justify-center h-screen"><div class="hidden lg:block lg:w-2/3 relative"><img${ssrRenderAttr("src", _imports_0)} alt="Join Us Background" class="absolute inset-0 object-cover w-full h-full"><div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-60 relative z-10"><div><h2 class="text-2xl font-bold text-white sm:text-3xl"> Join Our Mission </h2><p class="max-w-xl mt-3 text-white"> Be part of something impactful. Join our team to serve and uplift communities through action and love. </p></div></div></div><div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6"><div class="flex-1"><div class="text-center"><div class="flex justify-center mx-auto"><img class="w-auto h-7 sm:h-8"${ssrRenderAttr("src", _imports_1)} alt="Logo"></div><p class="mt-3 text-gray-500 dark:text-gray-300"> Fill in your details to join us </p></div><div class="mt-8"><form><div><label for="first-name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label><input type="text" name="first-name" id="first-name" placeholder="Your First Name" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"></div><div class="mt-4"><label for="last-name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label><input type="text" name="last-name" id="last-name" placeholder="Your Last Name" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"></div><div class="mt-4"><label for="phone" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone Number</label><input type="tel" name="phone" id="phone" placeholder="+234 123 456 7890" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"></div><div class="mt-4"><label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label><input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"></div><div class="mt-6"><button type="submit" class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"> Submit </button></div></form><div class="mt-6 flex items-center justify-center space-x-4"><a href="https://wa.me/1234567890" target="_blank" class="flex items-center px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-400 focus:ring focus:ring-green-300 focus:outline-none"><svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12c0 1.858.521 3.646 1.5 5.182L2 22l5.111-1.457A9.93 9.93 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm4.198 13.745l-.561 1.694a1.072 1.072 0 01-1.544.593c-1.14-.59-3.565-2.152-5.193-5.404a1.073 1.073 0 01.208-1.231l1.272-1.272a.804.804 0 011.132 0l.561 1.694a.803.803 0 01-.196.785l-.562.562a6.92 6.92 0 002.07 2.07l.562-.562a.803.803 0 01.785-.196z"></path></svg> WhatsApp </a><a href="https://instagram.com/yourhandle" target="_blank" class="flex items-center px-4 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-500 focus:ring focus:ring-pink-300 focus:outline-none"><svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zM12 7.75a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm5.25-.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 9.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"></path></svg> Instagram </a></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/join.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const join = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { join as default };
//# sourceMappingURL=join-CgGOxDiG.mjs.map
