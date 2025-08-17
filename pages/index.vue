<template>
  <div>
    <HomeHero />
    <HomePrograms />
    <HomeImpact />
    <LandingUpdates />
    <HomeCTA />
    <HomeTestimonials />
    <HomeBlogPreview />
  </div>
</template>

<script setup lang="ts">
import HomeHero from '~/components/home/Hero.vue'
import HomePrograms from '~/components/home/Programs.vue'
import HomeImpact from '~/components/home/Impact.vue'
import HomeCTA from '~/components/home/CTA.vue'
import HomeTestimonials from '~/components/home/Testimonials.vue'
import HomeBlogPreview from '~/components/home/BlogPreview.vue'
// Reuse updated LandingUpdates component
</script>
