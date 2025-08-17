<template>
  <section class="bg-gradient-to-br from-gray-50 to-navy-50 py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading eyebrow="From the Blog" title="Latest news and stories" subtitle="Updates from our work across Africa." />
      <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="post in posts" :key="post.id" class="group rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="relative overflow-hidden">
            <img :src="post.image" :alt="post.title" class="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div class="absolute top-4 left-4">
              <span class="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-navy-700 ring-1 ring-inset ring-navy-100">
                {{ post.tag }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
              <time :datetime="post.datetime">{{ post.date }}</time>
              <span class="h-1 w-1 rounded-full bg-gray-300"></span>
              <span class="text-gold-600 font-medium">{{ post.location }}</span>
            </div>
            <h3 class="text-lg font-display font-semibold text-navy-900 line-clamp-2 mb-3 group-hover:text-navy-700 transition-colors">{{ post.title }}</h3>
            <p class="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">{{ post.excerpt }}</p>
            <NuxtLink to="/news" class="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors group/link">
              Read more
              <Icon name="heroicons:arrow-right" class="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/common/SectionHeading.vue'

type Post = { id: number; title: string; excerpt: string; date: string; datetime: string; tag: string; image: string; location: string }
const posts: Post[] = [
  { 
    id: 1, 
    title: 'Clean Water Brings New Hope to Rural Kenya', 
    excerpt: 'Our latest borehole project transformed daily life in a rural community, providing clean water to over 500 families.', 
    date: 'Jul 5, 2025', 
    datetime: '2025-07-05', 
    tag: 'Clean Water', 
    image: 'https://images.unsplash.com/photo-1611146189390-d07c44b16175?auto=format&fit=crop&w=900&q=60',
    location: 'Kenya'
  },
  { 
    id: 2, 
    title: 'Medical Camp Serves 500+ Children in Uganda', 
    excerpt: 'A comprehensive day of health screenings, vaccinations, and care thanks to our dedicated volunteer medical team.', 
    date: 'Jun 20, 2025', 
    datetime: '2025-06-20', 
    tag: 'Healthcare', 
    image: 'https://images.unsplash.com/photo-1588776814546-ec7ec9a42e29?auto=format&fit=crop&w=900&q=60',
    location: 'Uganda'
  },
  { 
    id: 3, 
    title: 'Youth Empowerment Workshop in Tanzania', 
    excerpt: 'Entrepreneurship and leadership skills training empowering the next generation of African leaders.', 
    date: 'Jun 12, 2025', 
    datetime: '2025-06-12', 
    tag: 'Youth', 
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=900&q=60',
    location: 'Tanzania'
  },
]
</script>


