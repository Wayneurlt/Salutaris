<template>
  <div class="bg-white py-24 sm:py-32 overflow-hidden">
    <div class="mx-auto max-w-full px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Stay Updated with Salutaris
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Get the latest news and updates from our community impact efforts.
        </p>
      </div>

      <!-- Auto-scrolling Carousel Section -->
      <div class="mt-16 overflow-hidden relative">
        <div class="whitespace-nowrap flex animate-scroll">
          <!-- Repeat the list twice for infinite illusion -->
          <div class="flex gap-x-8">
            <article
              v-for="update in updates"
              :key="`first-${update.id}`"
              class="flex-shrink-0 w-[320px] flex flex-col items-start justify-between border border-gray-100 rounded-2xl shadow-sm bg-white overflow-hidden"
            >
              <div class="relative w-full">
                <img
                  :src="update.imageUrl"
                  alt=""
                  class="aspect-[16/9] w-full rounded-t-2xl bg-gray-100 object-cover"
                />
              </div>
              <div class="p-6 flex flex-col h-full">
                <div class="flex items-center gap-x-4 text-xs">
                  <time :datetime="update.datetime" class="text-gray-500">
                    {{ update.date }}
                  </time>
                  <span
                    class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                  >
                    {{ update.tag }}
                  </span>
                </div>
                <div class="group relative flex-grow">
                  <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                    {{ update.title }}
                  </h3>
                  <p class="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">
                    {{ update.description }}
                  </p>
                </div>
                <div class="relative mt-6 flex items-center gap-x-4">
                  <img
                    :src="update.author.imageUrl"
                    alt=""
                    class="h-10 w-10 rounded-full bg-gray-100 object-cover"
                  />
                  <div class="text-sm leading-6 truncate">
                    <p class="font-semibold text-gray-900 truncate">
                      {{ update.author.name }}
                    </p>
                    <p class="text-gray-600 truncate">{{ update.author.role }}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <!-- Cloned for infinite scroll -->
          <div class="flex gap-x-8">
            <article
              v-for="update in updates"
              :key="`second-${update.id}`"
              class="flex-shrink-0 w-[320px] flex flex-col items-start justify-between border border-gray-100 rounded-2xl shadow-sm bg-white overflow-hidden"
            >
              <div class="relative w-full">
                <img
                  :src="update.imageUrl"
                  alt=""
                  class="aspect-[16/9] w-full rounded-t-2xl bg-gray-100 object-cover"
                />
              </div>
              <div class="p-6 flex flex-col h-full">
                <div class="flex items-center gap-x-4 text-xs">
                  <time :datetime="update.datetime" class="text-gray-500">
                    {{ update.date }}
                  </time>
                  <span
                    class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                  >
                    {{ update.tag }}
                  </span>
                </div>
                <div class="group relative flex-grow">
                  <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                    {{ update.title }}
                  </h3>
                  <p class="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">
                    {{ update.description }}
                  </p>
                </div>
                <div class="relative mt-6 flex items-center gap-x-4">
                  <img
                    :src="update.author.imageUrl"
                    alt=""
                    class="h-10 w-10 rounded-full bg-gray-100 object-cover"
                  />
                  <div class="text-sm leading-6 truncate">
                    <p class="font-semibold text-gray-900 truncate">
                      {{ update.author.name }}
                    </p>
                    <p class="text-gray-600 truncate">{{ update.author.role }}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const updates = [
  {
    id: 1,
    title: 'Salutaris Launches Clean Water Project',
    description:
      'We have started a new project in rural communities to provide access to clean and safe drinking water.',
    imageUrl:
      'https://images.unsplash.com/photo-1611146189390-d07c44b16175?auto=format&fit=crop&w=1350&q=80',
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
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 60s linear infinite;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
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