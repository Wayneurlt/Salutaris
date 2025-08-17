<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-3xl px-6 lg:px-8">
      <NuxtLink to="/news" class="text-sm text-emerald-700">← Back to news</NuxtLink>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900">{{ post.title }}</h1>
      <img :src="post.image" :alt="post.title" class="mt-6 h-72 w-full rounded-2xl object-cover" />
      <div class="prose prose-gray mt-6 max-w-none">
        <p>{{ post.body }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
type Post = { title: string; image: string; body: string }
const postMap: Record<string, Post> = {
  'clean-water-brings-new-hope': { title: 'Clean Water Brings New Hope', image: 'https://images.unsplash.com/photo-1611146189390-d07c44b16175?auto=format&fit=crop&w=1200&q=60', body: 'Story details coming soon.' },
}
const slug = String(route.params.slug)
const post = postMap[slug] ?? { title: 'Update', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=60', body: 'Content coming soon.' }
</script>


