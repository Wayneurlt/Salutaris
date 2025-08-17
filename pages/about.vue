<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading eyebrow="About Us" title="Who we are" subtitle="Salutaris is a community-based organization committed to love in action and truth across Africa." align="left" />

      <div class="mt-16 grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <div class="prose prose-gray max-w-none">
            <p class="text-lg leading-relaxed text-gray-700 mb-6">
              We partner with communities across Africa to address pressing needs in clean water, healthcare, education, youth empowerment, environmental stewardship, and community development. Our approach is collaborative, sustainable, and rooted in local leadership.
            </p>
            <p class="text-lg leading-relaxed text-gray-700 mb-6">
              Through our network of volunteers, partners, and donors, we create programs that are locally led and responsive to real community needs. Transparency, accountability, and measurable impact guide every aspect of our work.
            </p>
            <p class="text-lg leading-relaxed text-gray-700">
              From rural villages to urban centers, we believe that every community has the potential to thrive when given the right resources, support, and opportunities.
            </p>
          </div>
        </div>
        <div class="lg:col-span-5">
          <div class="rounded-3xl bg-gradient-to-br from-navy-50 to-gold-50 p-8 ring-1 ring-gray-200/60">
            <h3 class="text-xl font-display font-bold text-navy-900 mb-6">Our Mission & Values</h3>
            
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-semibold text-navy-900 mb-2">Mission</h4>
                <p class="text-gray-700">To demonstrate love in action and truth by empowering communities across Africa to thrive and reach their full potential.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-navy-900 mb-2">Vision</h4>
                <p class="text-gray-700">Healthy, educated, and resilient communities across Africa, where every person has access to basic needs and opportunities for growth.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-navy-900 mb-3">Core Values</h4>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <Icon name="heroicons:heart" class="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span>Compassion and dignity for all</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <Icon name="heroicons:shield-check" class="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span>Transparency and accountability</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <Icon name="heroicons:user-group" class="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span>Community-led impact</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <Icon name="heroicons:academic-cap" class="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span>Collaboration and learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20">
        <SectionHeading eyebrow="Our Team" title="Leadership" subtitle="Meet the dedicated team driving our mission across Africa." />
        <div class="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div v-for="m in team" :key="m.name" class="group text-center">
            <div class="relative mb-4">
              <img :src="m.avatar" :alt="m.name" class="mx-auto h-32 w-32 rounded-2xl object-cover shadow-lg ring-1 ring-gray-200/60 group-hover:shadow-xl transition-all duration-300" />
              <div class="absolute -inset-2 bg-gradient-to-r from-navy-500 to-gold-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-lg"></div>
            </div>
            <h3 class="text-lg font-display font-semibold text-navy-900 mb-1">{{ m.name }}</h3>
            <p class="text-sm text-gray-600 mb-2">{{ m.role }}</p>
            <p class="text-xs text-gold-600 font-medium">{{ m.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '~/components/common/SectionHeading.vue'

type Member = { name: string; role: string; avatar: string; location: string }
const team: Member[] = [
  { name: 'Dr. Sarah A.', role: 'Executive Director', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=facearea&facepad=2', location: 'Kenya' },
  { name: 'Michael O.', role: 'Programs Director', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=256&h=256&fit=facearea&facepad=2', location: 'Uganda' },
  { name: 'Dr. James K.', role: 'Health Programs Lead', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=256&h=256&fit=facearea&facepad=2', location: 'Tanzania' },
  { name: 'Grace M.', role: 'Community Outreach', avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328f6d4c?w=256&h=256&fit=facearea&facepad=2', location: 'Rwanda' },
]
</script>
