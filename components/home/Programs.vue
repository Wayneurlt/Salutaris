<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading eyebrow="Our Programs" title="What we do" subtitle="Focused initiatives that deliver measurable impact across Africa." />

      <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="card in cards" :key="card.title" class="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="flex items-center gap-4 mb-6">
            <div class="h-12 w-12 rounded-xl bg-gradient-to-br from-navy-50 to-gold-50 text-navy-700 grid place-content-center group-hover:scale-110 transition-transform duration-300">
              <Icon :name="card.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-lg font-display font-semibold text-navy-900">{{ card.title }}</h3>
          </div>
          <p class="text-gray-600 leading-relaxed mb-6">{{ card.text }}</p>
          <NuxtLink to="/projects" class="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors group/link">
            Learn more
            <Icon name="heroicons:arrow-right" class="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/common/SectionHeading.vue'

type Card = { title: string; text: string; icon: string }
const cards: Card[] = [
  { 
    title: 'Clean Water Access', 
    text: 'Boreholes, water purification systems, and hygiene training for rural communities across Africa.', 
    icon: 'heroicons-solid:sparkles' 
  },
  { 
    title: 'Healthcare & Wellness', 
    text: 'Medical camps, maternal and child health programs, and disease prevention initiatives.', 
    icon: 'heroicons-solid:heart' 
  },
  { 
    title: 'Education & Skills', 
    text: 'Scholarships, digital literacy workshops, and vocational training for sustainable livelihoods.', 
    icon: 'heroicons-solid:academic-cap' 
  },
  { 
    title: 'Youth Empowerment', 
    text: 'Leadership development, entrepreneurship training, and mentorship programs for young Africans.', 
    icon: 'heroicons-solid:user-group' 
  },
  { 
    title: 'Environmental Stewardship', 
    text: 'Tree planting initiatives, climate resilience programs, and sustainable agriculture practices.', 
    icon: 'heroicons-solid:globe-alt' 
  },
  { 
    title: 'Community Development', 
    text: 'Infrastructure projects, economic empowerment, and social cohesion programs.', 
    icon: 'heroicons-solid:building-office' 
  },
]
</script>


