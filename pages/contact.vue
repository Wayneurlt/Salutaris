<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-5xl px-6 lg:px-8">
      <SectionHeading eyebrow="Contact" title="Get in touch" subtitle="We’d love to hear from you." />
      <div class="mt-10 grid gap-8 lg:grid-cols-2">
        <form class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" @submit.prevent="submit">
          <div class="grid grid-cols-1 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Name</label>
              <input v-model="name" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600/30" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <input v-model="email" type="email" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600/30" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Message</label>
              <textarea v-model="message" rows="4" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600/30"></textarea>
            </div>
          </div>
          <button type="submit" class="mt-6 inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">Send</button>
        </form>

        <div class="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200/60">
          <h3 class="text-base font-semibold text-gray-900">Contact Info</h3>
          <ul class="mt-3 text-sm text-gray-700 space-y-2">
            <li>Email: hello@salutaris.ng</li>
            <li>Phone: +234 000 000 0000</li>
            <li>Address: Lagos, Nigeria</li>
          </ul>
          <div class="mt-6">
            <div class="aspect-[16/9] w-full rounded-xl bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/common/SectionHeading.vue'
import { ref } from 'vue'
const name = ref('');
const email = ref('');
const message = ref('');
function submit() {
  console.log('Contact form (dummy):', { name: name.value, email: email.value, message: message.value })
  alert('Thanks for reaching out! We will respond soon.')
}
</script>


