<template>
  <section class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="flex items-end justify-between gap-6">
          <div>
            <p class="text-sm font-semibold tracking-wide text-emerald-600">News & Updates</p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stay updated with Salutaris
            </h2>
            <p class="mt-2 text-base leading-7 text-gray-600">
              Stories from our programs, partners, and communities we serve.
            </p>
          </div>
          <div class="hidden sm:block shrink-0">
            <a href="#" class="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30">
              View all updates
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </a>
          </div>
        </div>

        <!-- Mobile: horizontal scroll -->
        <div class="mt-10 -mx-6 overflow-x-auto pb-6 sm:-mx-8 lg:hidden">
          <div class="px-6 sm:px-8 inline-flex gap-6 snap-x snap-mandatory">
            <article
              v-for="item in items"
              :key="`mobile-${item.id}`"
              class="snap-start w-80 shrink-0 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <a href="#" class="block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30 rounded-2xl">
                <div class="relative">
                  <img :src="item.imageUrl" :alt="item.title" class="aspect-[16/9] w-full rounded-t-2xl object-cover" />
                  <span class="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-100">
                    {{ item.tag }}
                  </span>
                </div>
                <div class="p-5">
                  <div class="flex items-center gap-3 text-xs text-gray-500">
                    <time :datetime="item.datetime">{{ item.date }}</time>
                    <span class="h-1 w-1 rounded-full bg-gray-300"></span>
                    <span class="truncate">{{ item.author.name }}</span>
                  </div>
                  <h3 class="mt-2 text-lg font-semibold text-gray-900 line-clamp-2">{{ item.title }}</h3>
                  <p class="mt-2 text-sm text-gray-600 line-clamp-3">{{ item.description }}</p>
                </div>
              </a>
            </article>
          </div>
        </div>

        <!-- Desktop: featured + grid -->
        <div class="mt-12 hidden lg:grid lg:grid-cols-12 lg:gap-8">
          <!-- Featured -->
          <article v-if="featuredUpdate" class="relative col-span-5 xl:col-span-6 overflow-hidden rounded-3xl shadow-sm ring-1 ring-gray-200/60 bg-gray-900">
            <a href="#" class="block focus:outline-none">
              <div class="relative">
                <img :src="featuredUpdate.imageUrl" :alt="featuredUpdate.title" class="h-80 w-full object-cover opacity-90" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div class="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div class="flex items-center gap-3 text-xs text-white/80">
                    <time :datetime="featuredUpdate.datetime">{{ featuredUpdate.date }}</time>
                    <span class="h-1 w-1 rounded-full bg-white/50"></span>
                    <span class="inline-flex items-center rounded-full bg-white/10 px-3 py-1 ring-1 ring-inset ring-white/20">{{ featuredUpdate.tag }}</span>
                  </div>
                  <h3 class="mt-3 text-2xl font-bold leading-snug line-clamp-2">{{ featuredUpdate.title }}</h3>
                  <p class="mt-2 text-sm text-white/90 line-clamp-3">{{ featuredUpdate.description }}</p>
                  <div class="mt-4 flex items-center gap-3">
                    <img :src="featuredUpdate.author.imageUrl" :alt="featuredUpdate.author.name" class="h-9 w-9 rounded-full object-cover ring-2 ring-white/50" />
                    <div class="text-sm">
                      <p class="font-semibold">{{ featuredUpdate.author.name }}</p>
                      <p class="text-white/80">{{ featuredUpdate.author.role }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </article>

          <!-- Others -->
          <div class="col-span-7 xl:col-span-6 grid grid-cols-2 gap-8">
            <article
              v-for="item in otherUpdates"
              :key="`grid-${item.id}`"
              class="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <a href="#" class="block focus:outline-none">
                <div class="relative">
                  <img :src="item.imageUrl" :alt="item.title" class="h-44 w-full object-cover" />
                  <span class="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-100">
                    {{ item.tag }}
                  </span>
                </div>
                <div class="p-5">
                  <div class="flex items-center gap-3 text-xs text-gray-500">
                    <time :datetime="item.datetime">{{ item.date }}</time>
                    <span class="h-1 w-1 rounded-full bg-gray-300"></span>
                    <span class="truncate">{{ item.author.name }}</span>
                  </div>
                  <h3 class="mt-2 text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-gray-700">{{ item.title }}</h3>
                  <p class="mt-2 text-sm text-gray-600 line-clamp-3">{{ item.description }}</p>
                </div>
              </a>
            </article>
          </div>
        </div>

        <div class="mt-8 sm:hidden">
          <a href="#" class="inline-flex items-center justify-center gap-2 w-full rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30">
            View all updates
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Author = {
  name: string
  role: string
  imageUrl: string
}

type Update = {
  id: number
  title: string
  description: string
  imageUrl: string
  date: string
  datetime: string
  tag: string
  author: Author
}

const props = defineProps<{
  updates?: Update[]
}>()

const defaultUpdates: Update[] = [
  {
    id: 1,
    title: 'Salutaris Launches Clean Water Project',
    description:
      'We have started a new project in rural communities to provide access to clean and safe drinking water.',
    imageUrl:
      'https://images.pexels.com/photos/15204095/pexels-photo-15204095.jpeg',
    date: 'July 5, 2025',
    datetime: '2025-07-05',
    tag: 'Community',
    author: {
      name: 'Grace Odhiambo',
      role: 'Program Coordinator',
      imageUrl:
        'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Free Medical Camp for Children',
    description:
      'Over 500 children received free checkups, medication, and vaccinations through our latest outreach.',
    imageUrl:
      'https://images.unsplash.com/photo-1588776814546-ec7ec9a42e29?auto=format&fit=crop&w=1350&q=80',
    date: 'June 20, 2025',
    datetime: '2025-06-20',
    tag: 'Health',
    author: {
      name: 'Dr. Kevin Muriuki',
      role: 'Volunteer Doctor',
      imageUrl:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Youth Empowerment Workshop',
    description:
      'We held a 3-day training for youths focused on entrepreneurship, digital skills, and leadership.',
    imageUrl:
      'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1350&q=80',
    date: 'June 12, 2025',
    datetime: '2025-06-12',
    tag: 'Empowerment',
    author: {
      name: 'Lilian Achieng',
      role: 'Facilitator',
      imageUrl:
        'https://images.unsplash.com/photo-1603415526960-f7e0328f6d4c?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: 'Tree Planting Day in Kiambu',
    description:
      'Salutaris mobilized over 300 volunteers to plant trees in schools and community lands across Kiambu.',
    imageUrl:
      'https://images.unsplash.com/photo-1606760227099-3c2dcd54283c?auto=format&fit=crop&w=1350&q=80',
    date: 'May 25, 2025',
    datetime: '2025-05-25',
    tag: 'Environment',
    author: {
      name: 'Peter Mwangi',
      role: 'Sustainability Lead',
      imageUrl:
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    title: 'Back-to-School Donation Drive',
    description:
      'Essential school supplies and uniforms were donated to over 200 children in underserved areas.',
    imageUrl:
      'https://images.unsplash.com/photo-1602168293917-b4e8356e1425?auto=format&fit=crop&w=1350&q=80',
    date: 'May 10, 2025',
    datetime: '2025-05-10',
    tag: 'Education',
    author: {
      name: 'Beatrice Wanja',
      role: 'Community Outreach',
      imageUrl:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    },
  },
  {
    id: 6,
    title: 'Mental Health Awareness Walk',
    description:
      'We organized a 5km awareness walk and counseling sessions to support mental health in youths.',
    imageUrl:
      'https://images.unsplash.com/photo-1608226337222-4c841021b048?auto=format&fit=crop&w=1350&q=80',
    date: 'April 30, 2025',
    datetime: '2025-04-30',
    tag: 'Wellness',
    author: {
      name: 'Faith Kamau',
      role: 'Wellbeing Advocate',
      imageUrl:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    },
  },
  {
    id: 7,
    title: 'Women in Leadership Panel',
    description:
      'A live panel event was held to spotlight women leaders and inspire young girls to dream big.',
    imageUrl:
      'https://images.unsplash.com/photo-1532635246-bdb4f3b4f342?auto=format&fit=crop&w=1350&q=80',
    date: 'April 12, 2025',
    datetime: '2025-04-12',
    tag: 'Inspiration',
    author: {
      name: 'Naomi Chepkorir',
      role: 'Event Host',
      imageUrl:
        'https://images.unsplash.com/photo-1603415526983-11d616f62a34?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    },
  },
]

const items = computed<Update[]>(() => props.updates?.length ? props.updates : defaultUpdates)
const featuredUpdate = computed<Update | undefined>(() => items.value[0])
const otherUpdates = computed<Update[]>(() => items.value.slice(1))
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>