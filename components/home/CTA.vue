<template>
  <section class="relative isolate overflow-hidden bg-gradient-to-r from-navy-700 via-navy-800 to-navy-900">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #fbbf24 1px, transparent 0); background-size: 60px 60px;"></div>
    </div>
    
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
      <div class="grid items-center gap-8 sm:grid-cols-2">
        <div class="animate-fade-in">
          <h2 class="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Your support powers our mission</h2>
          <p class="mt-4 text-lg text-navy-100 max-w-prose leading-relaxed">
            Donate or volunteer today to help bring clean water, healthcare, education and hope to communities across Africa.
          </p>
          <div class="mt-6 flex items-center gap-4 text-sm text-navy-200">
            <div class="flex items-center gap-2">
              <Icon name="heroicons:check-circle" class="h-5 w-5 text-gold-400" />
              <span>100% transparent</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="heroicons:check-circle" class="h-5 w-5 text-gold-400" />
              <span>Direct impact</span>
            </div>
          </div>
        </div>
        <div class="flex justify-start sm:justify-end gap-4 animate-slide-up">
          <NuxtLink to="/donate" class="group inline-flex items-center rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-4 text-base font-semibold text-navy-900 shadow-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
            <Icon name="heroicons:heart" class="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Donate Now
          </NuxtLink>
          <NuxtLink to="/get-involved" class="group inline-flex items-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-navy-900 transition-all duration-200 hover:-translate-y-0.5">
            <Icon name="heroicons:user-group" class="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Volunteer
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// CTA banner
</script>


