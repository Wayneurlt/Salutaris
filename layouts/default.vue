<template>
  <div class="min-h-dvh flex flex-col bg-white text-gray-900">
    <SiteNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteNavbar from '~/components/common/SiteNavbar.vue'
import SiteFooter from '~/components/common/SiteFooter.vue'
</script>


