<template>
    <!-- Hero Section -->
    <section class="relative flex min-h-screen w-full flex-col items-center justify-center">
      <!-- Animated Background -->
      <LandingBg class="absolute inset-0 " />
      
      <!-- Overlay for darker background -->
      <div class="absolute inset-0 z-[1] bg-black opacity-50"></div>
  
      <!-- Navbar Layer -->
      <header class="absolute top-0 z-[3] w-full">
        <slot name="navbar" />
      </header>
  
      <!-- Hero Content -->
      <div class="z-[2] flex max-w-3xl flex-col items-center gap-4 px-6 py-12">
        <!-- Heading with dynamic words -->
        <span
          class="flex flex-col items-center justify-center text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-yellow-300 md:text-6xl"
        >
          <span>
            Empowering
            <FlipWords
              :words="['communities', 'change', 'hope']"
              :duration="3000"
              class="w-56 bg-gradient-to-b from-white to-yellow-300 bg-clip-text text-transparent"
            />
          </span>
          transformation through love and action
        </span>
  
        <!-- Subheading -->
        <span class="text-center text-lg md:text-xl mt-4">
          At Salutaris, we are committed to making a lasting impact through truth, compassion, and community-driven action.
        </span>
  
        <!-- Action Buttons -->
        <div class="my-4 flex flex-row items-center justify-center gap-6">
          <NuxtLink
            to="/join"
            class="px-6 py-3 text-lg font-semibold border-2 border-white bg-transparent text-white rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-500 hover:bg-yellow-500 hover:text-navyblue transition-all"
          >
            Get Involved
          </NuxtLink>
          <NuxtLink
            to="/donate"
            class="px-6 py-3 text-lg font-semibold border-2 border-yellow-500 bg-yellow-500 text-navyblue rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-500 hover:bg-transparent hover:text-white transition-all"
          >
            Support Our Mission
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No changes to the script logic
  </script>
  
  <style scoped>
  /* Custom Gradient Backgrounds */
  .bg-navyblue {
    background-color: #003366;
  }
  
  .bg-gold {
    background-color: #d4af37;
  }
  
  .text-navyblue {
    color: #003366;
  }
  
  .text-gold {
    color: #d4af37;
  }
  
  /* Button Hover Effects */
  a:hover {
    transition: transform 0.3s ease, color 0.3s ease;
  }
  </style>
  