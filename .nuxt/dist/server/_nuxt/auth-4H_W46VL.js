import { f as defineNuxtRouteMiddleware, g as useUserSession, b as navigateTo } from "../server.mjs";
import "vue";
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
import "vue/server-renderer";
import "notivue";
const auth = defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession();
  if (!loggedIn.value) {
    return navigateTo("/auth/login");
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth-4H_W46VL.js.map
