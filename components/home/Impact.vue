<template>
  <section class="bg-gradient-to-br from-gray-50 to-navy-50 py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading eyebrow="Our Impact" title="Impact in numbers" subtitle="Real change measured in people, places, and progress across Africa." />
      <div class="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="group rounded-2xl bg-white p-8 text-center ring-1 ring-gray-200/60 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div class="mb-4 mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-navy-50 to-gold-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon :name="stat.icon" class="h-6 w-6 text-navy-700" />
          </div>
          <p class="text-3xl font-display font-bold text-navy-900 mb-2">
            <span class="bg-gradient-to-r from-navy-600 to-gold-600 bg-clip-text text-transparent">{{ stat.value }}</span>+
          </p>
          <p class="text-sm text-gray-600 font-medium">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/common/SectionHeading.vue'

type Stat = { label: string; value: string; icon: string }
const stats: Stat[] = [
  { label: 'Lives Impacted', value: '50K', icon: 'heroicons:users' },
  { label: 'Communities Reached', value: '200', icon: 'heroicons:map-pin' },
  { label: 'Volunteers Mobilized', value: '1K', icon: 'heroicons:user-group' },
  { label: 'Projects Delivered', value: '500', icon: 'heroicons:check-circle' },
]
</script>


