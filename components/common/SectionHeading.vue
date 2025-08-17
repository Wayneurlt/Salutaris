<template>
  <div :class="['text-center', align === 'left' && 'text-left']">
    <p v-if="eyebrow" class="text-sm font-semibold tracking-wide text-gold-600 uppercase">{{ eyebrow }}</p>
    <h2 class="mt-2 text-3xl font-display font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">{{ title }}</h2>
    <p v-if="subtitle" class="mt-4 text-base leading-7 text-gray-600 max-w-2xl mx-auto">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}>(), {
  align: 'center',
})
</script>


