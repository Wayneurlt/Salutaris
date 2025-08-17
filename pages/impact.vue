<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading eyebrow="Impact" title="Our impact" subtitle="Stories and numbers that reflect lives changed across Africa." />
      <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div class="lg:col-span-1">
          <div class="rounded-2xl bg-gradient-to-br from-navy-50 to-gold-50 p-8 ring-1 ring-gray-200/60">
            <h3 class="text-xl font-display font-bold text-navy-900 mb-6">By the numbers</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-700">Lives Impacted</span>
                <span class="text-2xl font-display font-bold text-navy-900">50K+</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">Communities Reached</span>
                <span class="text-2xl font-display font-bold text-navy-900">200+</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">Volunteers Mobilized</span>
                <span class="text-2xl font-display font-bold text-navy-900">1K+</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">Projects Delivered</span>
                <span class="text-2xl font-display font-bold text-navy-900">500+</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-white rounded-xl">
              <p class="text-sm text-gray-600">
                <strong>Transparency:</strong> We provide detailed reports on how your support creates real change in communities across Africa.
              </p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <article v-for="s in stories" :key="s.title" class="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative overflow-hidden rounded-xl mb-4">
              <img :src="s.image" :alt="s.title" class="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div class="absolute top-4 left-4">
                <span class="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-navy-700 ring-1 ring-inset ring-navy-100">
                  {{ s.category }}
                </span>
              </div>
            </div>
            <h3 class="text-lg font-display font-semibold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">{{ s.title }}</h3>
            <p class="text-sm text-gray-600 mb-3 leading-relaxed">{{ s.excerpt }}</p>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gold-600 font-medium">{{ s.location }}</span>
              <span class="text-xs text-gray-500">{{ s.date }}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/common/SectionHeading.vue'

type Story = { title: string; excerpt: string; image: string; category: string; location: string; date: string }
const stories: Story[] = [
  { 
    title: 'Safe Water for All', 
    excerpt: 'A new borehole means children spend more time in school and less time fetching water. Education outcomes have improved by 40%.', 
    image: 'https://images.unsplash.com/photo-1611146189390-d07c44b16175?auto=format&fit=crop&w=900&q=60',
    category: 'Clean Water',
    location: 'Kenya',
    date: '2025'
  },
  { 
    title: 'Health Camp Success', 
    excerpt: 'Parents grateful as 500+ children receive care and vaccinations. Community health awareness increased significantly.', 
    image: 'https://images.unsplash.com/photo-1588776814546-ec7ec9a42e29?auto=format&fit=crop&w=900&q=60',
    category: 'Healthcare',
    location: 'Uganda',
    date: '2025'
  },
  { 
    title: 'Youth Skills for Life', 
    excerpt: 'Digital literacy and entrepreneurship unlock new opportunities. 80% of participants started small businesses.', 
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=900&q=60',
    category: 'Youth',
    location: 'Tanzania',
    date: '2025'
  },
  { 
    title: 'Planting for the Future', 
    excerpt: 'Community tree-planting day boosts local climate resilience. 10,000 trees planted across 5 communities.', 
    image: 'https://images.unsplash.com/photo-1606760227099-3c2dcd54283c?auto=format&fit=crop&w=900&q=60',
    category: 'Environment',
    location: 'Rwanda',
    date: '2025'
  },
]
</script>


