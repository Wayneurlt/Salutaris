<template>
  <footer
    class="bg-gradient-to-br from-gray-50 to-navy-50 border-t border-gray-100"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div class="md:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <div class="relative">
              <img src="/assets/images/log.png" alt="Salutaris logo" class="h-10 w-auto" />
              <div
                class="absolute -inset-1 bg-gradient-to-r from-navy-500 to-gold-500 rounded-full opacity-20 blur-sm"
              ></div>
            </div>
            <!-- <div>
              <span
                class="text-lg font-display font-bold tracking-tight text-navy-900"
                >Salutaris</span
              >
              <p class="text-xs text-gray-500 -mt-1">Love in Action & Truth</p>
            </div> -->
          </div>
          <p class="text-sm text-gray-600 max-w-xs leading-relaxed">
            We work with communities across Africa to create lasting change
            through clean water, healthcare, education, and youth empowerment
            programs.
          </p>
          <div class="mt-4 flex gap-3">
            <a
              href="#"
              class="text-gray-400 hover:text-navy-600 transition-colors"
              aria-label="Twitter"
            >
              <Icon name="heroicons:globe-alt" class="h-5 w-5" />
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-navy-600 transition-colors"
              aria-label="Instagram"
            >
              <Icon name="heroicons:photo" class="h-5 w-5" />
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-navy-600 transition-colors"
              aria-label="Facebook"
            >
              <Icon name="heroicons:user-group" class="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-navy-900 mb-4">Quick Links</h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li>
              <NuxtLink
                to="/about"
                class="hover:text-navy-700 transition-colors"
                >About Us</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/projects"
                class="hover:text-navy-700 transition-colors"
                >Our Projects</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/impact"
                class="hover:text-navy-700 transition-colors"
                >Impact Stories</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/news" class="hover:text-navy-700 transition-colors"
                >Latest News</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-navy-900 mb-4">Get Involved</h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li>
              <NuxtLink
                to="/get-involved"
                class="hover:text-navy-700 transition-colors"
                >Volunteer</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/donate"
                class="hover:text-navy-700 transition-colors"
                >Donate</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="hover:text-navy-700 transition-colors"
                >Contact Us</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/partners"
                class="hover:text-navy-700 transition-colors"
                >Partnerships</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-navy-900 mb-4">
            Stay Connected
          </h3>
          <form class="mb-4" @submit.prevent="subscribe">
            <div class="flex gap-2">
              <input
                v-model="email"
                type="email"
                required
                placeholder="Your email"
                class="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500"
              />
              <button
                type="submit"
                class="rounded-lg bg-gradient-to-r from-navy-600 to-navy-700 px-4 py-2 text-sm font-semibold text-white hover:from-navy-700 hover:to-navy-800 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Icon name="heroicons:paper-airplane" class="h-4 w-4" />
              </button>
            </div>
          </form>
          <p class="text-xs text-gray-500">
            Get updates on our work across Africa
          </p>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-200 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-sm text-gray-500">
            © {{ new Date().getFullYear() }} Salutaris. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm text-gray-500">
            <NuxtLink
              to="/privacy"
              class="hover:text-navy-700 transition-colors"
              >Privacy Policy</NuxtLink
            >
            <NuxtLink to="/terms" class="hover:text-navy-700 transition-colors"
              >Terms of Service</NuxtLink
            >
            <NuxtLink
              to="/accessibility"
              class="hover:text-navy-700 transition-colors"
              >Accessibility</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");

function subscribe() {
  // Handle newsletter subscription
  console.log("Newsletter subscription:", email.value);
  alert(
    "Thank you for subscribing! We'll keep you updated on our work across Africa."
  );
  email.value = "";
}
</script>
