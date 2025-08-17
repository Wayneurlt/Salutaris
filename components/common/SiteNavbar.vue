<template>
  <header
    class="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-100 shadow-sm"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between gap-6">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="relative">
            <img
              src="/assets/images/log.png"
              alt="Salutaris logo"
              class="h-12 w-auto transition-transform group-hover:scale-105"
            />
            <div
              class="absolute -inset-1 bg-gradient-to-r from-navy-500 to-gold-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-sm"
            ></div>
          </div>
          <div>
            <!-- <span
              class="text-lg font-display font-bold tracking-tight text-navy-900"
              >Salutaris</span
            >
            <p class="text-xs text-gray-500 -mt-1">Love in Action & Truth</p> -->
          </div>
        </NuxtLink>
        <nav
          class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700"
        >
          <NuxtLink
            to="/about"
            class="hover:text-navy-700 transition-colors relative group"
          >
            About
            <div
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-navy-500 to-gold-500 group-hover:w-full transition-all duration-300"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/projects"
            class="hover:text-navy-700 transition-colors relative group"
          >
            Projects
            <div
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-navy-500 to-gold-500 group-hover:w-full transition-all duration-300"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/impact"
            class="hover:text-navy-700 transition-colors relative group"
          >
            Impact
            <div
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-navy-500 to-gold-500 group-hover:w-full transition-all duration-300"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/get-involved"
            class="hover:text-navy-700 transition-colors relative group"
          >
            Get Involved
            <div
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-navy-500 to-gold-500 group-hover:w-full transition-all duration-300"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/news"
            class="hover:text-navy-700 transition-colors relative group"
          >
            News
            <div
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-navy-500 to-gold-500 group-hover:w-full transition-all duration-300"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="hover:text-navy-700 transition-colors relative group"
          >
            Contact
            <div
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-navy-500 to-gold-500 group-hover:w-full transition-all duration-300"
            ></div>
          </NuxtLink>
        </nav>
        <div class="hidden md:flex items-center gap-3">
          <NuxtLink
            to="/donate"
            class="inline-flex items-center rounded-full bg-gradient-to-r from-navy-600 to-navy-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-navy-700 hover:to-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600 transition-all duration-200 hover:shadow-md"
          >
            <Icon name="heroicons:heart" class="h-4 w-4 mr-1" />
            Donate
          </NuxtLink>
          <NuxtLink
            to="/get-involved"
            class="inline-flex items-center rounded-full border border-navy-200 px-4 py-2 text-sm font-semibold text-navy-700 hover:bg-navy-50 hover:border-navy-300 transition-all duration-200"
          >
            <Icon name="heroicons:user-group" class="h-4 w-4 mr-1" />
            Volunteer
          </NuxtLink>
        </div>
        <button
          class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors"
          @click="isOpen = !isOpen"
          aria-label="Toggle menu"
        >
          <Icon v-if="!isOpen" name="heroicons:bars-3" class="h-6 w-6" />
          <Icon v-else name="heroicons:x-mark" class="h-6 w-6" />
        </button>
      </div>
    </div>
    <div
      v-if="isOpen"
      class="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur"
    >
      <nav
        class="mx-auto max-w-7xl px-6 lg:px-8 py-4 grid gap-3 text-sm font-medium"
      >
        <NuxtLink to="/about" class="py-2 hover:text-navy-700 transition-colors"
          >About</NuxtLink
        >
        <NuxtLink
          to="/projects"
          class="py-2 hover:text-navy-700 transition-colors"
          >Projects</NuxtLink
        >
        <NuxtLink
          to="/impact"
          class="py-2 hover:text-navy-700 transition-colors"
          >Impact</NuxtLink
        >
        <NuxtLink
          to="/get-involved"
          class="py-2 hover:text-navy-700 transition-colors"
          >Get Involved</NuxtLink
        >
        <NuxtLink to="/news" class="py-2 hover:text-navy-700 transition-colors"
          >News</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="py-2 hover:text-navy-700 transition-colors"
          >Contact</NuxtLink
        >
        <div class="mt-2 flex gap-3">
          <NuxtLink
            to="/donate"
            class="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-navy-600 to-navy-700 px-4 py-2 text-sm font-semibold text-white"
          >
            <Icon name="heroicons:heart" class="h-4 w-4 mr-1" />
            Donate
          </NuxtLink>
          <NuxtLink
            to="/get-involved"
            class="flex-1 inline-flex items-center justify-center rounded-full border border-navy-200 px-4 py-2 text-sm font-semibold text-navy-700"
          >
            <Icon name="heroicons:user-group" class="h-4 w-4 mr-1" />
            Volunteer
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isOpen = ref(false);
</script>
