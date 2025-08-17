<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading eyebrow="Projects" title="Our programs and projects" subtitle="Explore ongoing and recent initiatives across focus areas in Africa." />
      <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink v-for="p in projects" :key="p.slug" :to="`/projects/${p.slug}`" class="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="relative overflow-hidden rounded-xl mb-4">
            <img :src="p.image" :alt="p.title" class="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div class="absolute top-4 left-4">
              <span class="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-navy-700 ring-1 ring-inset ring-navy-100">
                {{ p.category }}
              </span>
            </div>
          </div>
          <h3 class="text-lg font-display font-semibold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">{{ p.title }}</h3>
          <p class="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">{{ p.excerpt }}</p>
          <div class="flex items-center justify-between">
            <span class="text-xs text-gold-600 font-medium">{{ p.location }}</span>
            <Icon name="heroicons:arrow-right" class="h-4 w-4 text-navy-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/common/SectionHeading.vue'

type Project = { slug: string; title: string; excerpt: string; image: string; category: string; location: string }
const projects: Project[] = [
  { 
    slug: 'clean-water-kiambu', 
    title: 'Clean Water Access in Kiambu', 
    excerpt: 'Boreholes and hygiene training for rural villages, providing clean water to over 500 families.', 
    image: 'https://images.unsplash.com/photo-1611146189390-d07c44b16175?auto=format&fit=crop&w=900&q=60',
    category: 'Clean Water',
    location: 'Kenya'
  },
  { 
    slug: 'medical-camp-children', 
    title: 'Children Medical Camp', 
    excerpt: 'Comprehensive health screenings, vaccinations, and care for children in underserved communities.', 
    image: 'https://images.unsplash.com/photo-1588776814546-ec7ec9a42e29?auto=format&fit=crop&w=900&q=60',
    category: 'Healthcare',
    location: 'Uganda'
  },
  { 
    slug: 'youth-empowerment', 
    title: 'Youth Empowerment Workshop', 
    excerpt: 'Digital skills, entrepreneurship and leadership training for young Africans.', 
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=900&q=60',
    category: 'Youth',
    location: 'Tanzania'
  },
]
</script>


