<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-3xl px-6 lg:px-8">
      <SectionHeading eyebrow="Donate" title="Support our mission" subtitle="Your gift powers clean water, healthcare, education, and more." />
      <form class="mt-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" @submit.prevent="submit">
        <div class="grid grid-cols-1 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Amount (NGN)</label>
            <input v-model.number="amount" type="number" min="500" step="100" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600/30" />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Name</label>
              <input v-model="name" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600/30" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <input v-model="email" type="email" required class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-600/30" />
            </div>
          </div>
          <button type="submit" class="mt-2 inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">Proceed (Demo)</button>
        </div>
      </form>
      <p class="mt-4 text-sm text-gray-600">Payment gateway integration coming soon.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/common/SectionHeading.vue'
import { ref } from 'vue'
const amount = ref<number>(1000)
const name = ref('')
const email = ref('')
function submit() {
  console.log('Donation (dummy):', { amount: amount.value, name: name.value, email: email.value })
  alert('Thank you for your generosity! Demo only for now.')
}
</script>


