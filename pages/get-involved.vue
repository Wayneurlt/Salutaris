<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading eyebrow="Get Involved" title="Volunteer with us" subtitle="Join our mission—your time and skills make a difference across Africa." />

      <div class="mt-12 grid items-start gap-8 lg:grid-cols-2">
        <form class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm" @submit.prevent="submit">
          <h3 class="text-xl font-display font-bold text-navy-900 mb-6">Volunteer Application</h3>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">First name</label>
              <input v-model="form.firstName" required class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Last name</label>
              <input v-model="form.lastName" required class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500" />
            </div>
            <div class="sm:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input v-model="form.email" type="email" required class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500" />
            </div>
            <div class="sm:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input v-model="form.phone" type="tel" class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500" />
            </div>
            <div class="sm:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
              <select v-model="form.interest" required class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500">
                <option value="">Select an area</option>
                <option value="clean-water">Clean Water & Sanitation</option>
                <option value="healthcare">Healthcare & Wellness</option>
                <option value="education">Education & Skills</option>
                <option value="youth">Youth Empowerment</option>
                <option value="environment">Environmental Stewardship</option>
                <option value="community">Community Development</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea v-model="form.message" rows="4" placeholder="Tell us about your skills, experience, and why you'd like to volunteer..." class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500"></textarea>
            </div>
          </div>
          <button type="submit" class="mt-6 w-full rounded-lg bg-gradient-to-r from-navy-600 to-navy-700 px-6 py-3 text-sm font-semibold text-white hover:from-navy-700 hover:to-navy-800 transition-all duration-200 shadow-sm hover:shadow-md">
            Submit Application
          </button>
        </form>

        <div class="space-y-6">
          <div class="rounded-2xl bg-gradient-to-br from-navy-50 to-gold-50 p-8 ring-1 ring-gray-200/60">
            <h3 class="text-xl font-display font-bold text-navy-900 mb-6">Why volunteer?</h3>
            <ul class="space-y-4 text-gray-700">
              <li class="flex items-start gap-3">
                <Icon name="heroicons:heart" class="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                <span>Make a tangible impact in underserved communities across Africa</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:academic-cap" class="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                <span>Grow your skills and gain valuable experience</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:user-group" class="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                <span>Be part of a passionate team making real change</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:globe-alt" class="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                <span>Connect with communities across the African continent</span>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl bg-gradient-to-br from-gold-50 to-navy-50 p-8 ring-1 ring-gray-200/60">
            <h3 class="text-xl font-display font-bold text-navy-900 mb-6">Volunteer Opportunities</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="h-8 w-8 rounded-lg bg-navy-100 flex items-center justify-center">
                  <Icon name="heroicons:map-pin" class="h-4 w-4 text-navy-700" />
                </div>
                <div>
                  <p class="font-medium text-navy-900">Field Work</p>
                  <p class="text-sm text-gray-600">Direct community engagement</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="h-8 w-8 rounded-lg bg-navy-100 flex items-center justify-center">
                  <Icon name="heroicons:computer-desktop" class="h-4 w-4 text-navy-700" />
                </div>
                <div>
                  <p class="font-medium text-navy-900">Remote Support</p>
                  <p class="text-sm text-gray-600">Digital and administrative tasks</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="h-8 w-8 rounded-lg bg-navy-100 flex items-center justify-center">
                  <Icon name="heroicons:academic-cap" class="h-4 w-4 text-navy-700" />
                </div>
                <div>
                  <p class="font-medium text-navy-900">Skills Training</p>
                  <p class="text-sm text-gray-600">Share your expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/common/SectionHeading.vue'
import { reactive } from 'vue'

const form = reactive({ 
  firstName: '', 
  lastName: '', 
  email: '', 
  phone: '',
  interest: '',
  message: '' 
})

function submit() {
  console.log('Volunteer form submitted', { ...form })
  alert('Thank you for your interest in volunteering! We will get back to you soon.')
  // Reset form
  Object.keys(form).forEach(key => form[key] = '')
}
</script>


