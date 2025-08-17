<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-3xl px-6 lg:px-8">
      <NuxtLink to="/projects" class="text-sm text-emerald-700">← Back to projects</NuxtLink>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900">{{ project.title }}</h1>
      <img :src="project.image" :alt="project.title" class="mt-6 h-72 w-full rounded-2xl object-cover" />
      <div class="prose prose-gray mt-6 max-w-none">
        <p>{{ project.body }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
type Project = { title: string; image: string; body: string }
const projectMap: Record<string, Project> = {
  'clean-water-kiambu': { title: 'Clean Water Access', image: 'https://images.unsplash.com/photo-1611146189390-d07c44b16175?auto=format&fit=crop&w=1200&q=60', body: 'Details about clean water project.' },
  'medical-camp-children': { title: 'Children Medical Camp', image: 'https://images.unsplash.com/photo-1588776814546-ec7ec9a42e29?auto=format&fit=crop&w=1200&q=60', body: 'Details about the medical camp.' },
  'youth-empowerment': { title: 'Youth Empowerment', image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1200&q=60', body: 'Details about the empowerment workshop.' },
}
const slug = String(route.params.slug)
const project = projectMap[slug] ?? { title: 'Project', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=60', body: 'Project details coming soon.' }
</script>


