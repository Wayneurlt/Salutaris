<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading eyebrow="Partnerships" title="Our partners" subtitle="Collaborating with organizations and communities across Africa to create lasting impact." />

      <div class="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h3 class="text-2xl font-display font-bold text-navy-900 mb-6">Why Partner With Us?</h3>
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-navy-50 to-gold-50 flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:globe-alt" class="h-5 w-5 text-navy-700" />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-navy-900 mb-2">Pan-African Reach</h4>
                <p class="text-gray-600">Access to communities across 15+ African countries with established local networks and trust.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-navy-50 to-gold-50 flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:chart-bar" class="h-5 w-5 text-navy-700" />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-navy-900 mb-2">Proven Impact</h4>
                <p class="text-gray-600">Track record of delivering measurable results with transparent reporting and accountability.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-navy-50 to-gold-50 flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:user-group" class="h-5 w-5 text-navy-700" />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-navy-900 mb-2">Community-Led Approach</h4>
                <p class="text-gray-600">Programs designed and implemented with local communities, ensuring sustainability and relevance.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl bg-gradient-to-br from-navy-50 to-gold-50 p-8">
          <h3 class="text-xl font-display font-bold text-navy-900 mb-6">Become a Partner</h3>
          <form @submit.prevent="submitPartnership" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
              <input v-model="form.organization" required class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
              <input v-model="form.contact" required class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input v-model="form.email" type="email" required class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Partnership Interest</label>
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
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea v-model="form.message" rows="4" class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500"></textarea>
            </div>
            <button type="submit" class="w-full rounded-lg bg-gradient-to-r from-navy-600 to-navy-700 px-6 py-3 text-sm font-semibold text-white hover:from-navy-700 hover:to-navy-800 transition-all duration-200 shadow-sm hover:shadow-md">
              Submit Partnership Request
            </button>
          </form>
        </div>
      </div>

      <div class="mt-20">
        <SectionHeading eyebrow="Current Partners" title="Organizations we work with" />
        <div class="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div v-for="partner in partners" :key="partner.name" class="group text-center">
            <div class="relative mb-4">
              <div class="h-24 w-24 mx-auto rounded-2xl bg-gradient-to-br from-navy-50 to-gold-50 flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all duration-300">
                <Icon :name="partner.icon" class="h-12 w-12 text-navy-700" />
              </div>
            </div>
            <h3 class="text-sm font-semibold text-navy-900 mb-1">{{ partner.name }}</h3>
            <p class="text-xs text-gray-600">{{ partner.type }}</p>
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
  organization: '',
  contact: '',
  email: '',
  interest: '',
  message: ''
})

function submitPartnership() {
  console.log('Partnership request:', { ...form })
  alert('Thank you for your partnership interest! We will get back to you soon.')
  // Reset form
  Object.keys(form).forEach(key => form[key] = '')
}

type Partner = { name: string; type: string; icon: string }
const partners: Partner[] = [
  { name: 'UNICEF', type: 'International NGO', icon: 'heroicons:globe-alt' },
  { name: 'WHO', type: 'Health Organization', icon: 'heroicons:heart' },
  { name: 'World Bank', type: 'Development Bank', icon: 'heroicons:building-office' },
  { name: 'African Union', type: 'Regional Body', icon: 'heroicons:map' },
  { name: 'Red Cross', type: 'Humanitarian', icon: 'heroicons:plus-circle' },
  { name: 'Save the Children', type: 'Child Welfare', icon: 'heroicons:academic-cap' },
  { name: 'WaterAid', type: 'Water NGO', icon: 'heroicons:droplet' },
  { name: 'Local Communities', type: 'Grassroots', icon: 'heroicons:user-group' },
]
</script>
