import { f as defineNuxtRouteMiddleware, g as useUserSession, b as navigateTo } from './server.mjs';
import 'vue';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@prisma/client';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import 'notivue';

const auth = defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession();
  if (!loggedIn.value) {
    return navigateTo("/auth/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-4H_W46VL.mjs.map
