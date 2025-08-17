<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading eyebrow="Voices" title="What our community says" subtitle="Stories from the people we serve across Africa." />
      <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <figure v-for="t in testimonials" :key="t.name" class="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="mb-6">
            <div class="flex items-center gap-1 mb-4">
              <Icon v-for="i in 5" :key="i" name="heroicons:star" class="h-5 w-5 text-gold-400" />
            </div>
            <blockquote class="text-gray-700 leading-relaxed italic">"{{ t.quote }}"</blockquote>
          </div>
          <figcaption class="flex items-center gap-4">
            <div class="relative">
              <img :src="t.avatar" :alt="t.name" class="h-12 w-12 rounded-full object-cover ring-2 ring-navy-100" />
              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-navy-500 to-gold-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <p class="text-sm font-semibold text-navy-900">{{ t.name }}</p>
              <p class="text-xs text-gray-600">{{ t.role }}</p>
              <p class="text-xs text-gold-600 font-medium">{{ t.location }}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/common/SectionHeading.vue'

type Testimonial = { name: string; role: string; quote: string; avatar: string; location: string }
const testimonials: Testimonial[] = [
  { 
    name: 'Grace O.', 
    role: 'Community Leader', 
    quote: 'The new borehole changed everything for our village. Women and children no longer spend hours fetching water, and our children can focus on their education.', 
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=64&h=64&fit=facearea&facepad=2',
    location: 'Kenya'
  },
  { 
    name: 'Dr. Kevin M.', 
    role: 'Volunteer Doctor', 
    quote: 'I have seen firsthand the difference this team makes. The medical camps we run are bringing healthcare to communities that have never had access before.', 
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=facearea&facepad=2',
    location: 'Uganda'
  },
  { 
    name: 'Lilian A.', 
    role: 'Youth Facilitator', 
    quote: 'The youth empowerment programs are transforming lives. Young people are gaining skills, confidence, and hope for a better future.', 
    avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328f6d4c?w=64&h=64&fit=facearea&facepad=2',
    location: 'Tanzania'
  },
]
</script>


