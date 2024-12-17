<template>
    <nav
      :class="[ 
        'px-8 py-3 xl:py-4 fixed top-0 w-full z-[1000] flex justify-between items-center',
        {
          'dark:bg-white bg-satinlinen': isScrolled,
          'bg-transparent': !isScrolled,
        },
      ]"
    >
      <!-- Left: Menu Links -->
      <div class="flex items-center gap-6 font-semibold">
        <NuxtLink
          to="/"
          :style="{ color: isScrolled ? '#003366' : '#d4af37' }"
          class="transition-transform transform hover:scale-105"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          :style="{ color: isScrolled ? '#003366' : '#d4af37' }"
          class="transition-transform transform hover:scale-105"
        >
          About Us
        </NuxtLink>
        <NuxtLink
          to="/projects"
          :style="{ color: isScrolled ? '#003366' : '#d4af37' }"
          class="transition-transform transform hover:scale-105"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          to="/impact"
          :style="{ color: isScrolled ? '#003366' : '#d4af37' }"
          class="transition-transform transform hover:scale-105"
        >
          Impact
        </NuxtLink>
      </div>
  
      <!-- Center: Logo -->
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <NuxtLink to="/" class="flex items-center">
          <ClientOnly>
            <img
              class="h-18 lg:h-30 xl:h-36 w-auto"
              src="/assets/images/log.png"
              alt="Salutaris Logo"
            />
          </ClientOnly>
        </NuxtLink>
      </div>
  
      <!-- Right: Join Us & Donate Buttons -->
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/join"
          :style="{ color: isScrolled ? '#003366' : '#d4af37' }"
          class="px-4 py-2 bg-navyblue text-white rounded-full focus:outline-none focus:ring-4 focus:ring-gold transition-transform transform hover:scale-105"
        >
          Join Us
        </NuxtLink>
        <NuxtLink
          to="/donate"
          :style="{ color: isScrolled ? '#003366' : '#d4af37' }"
          class="px-4 py-2 bg-gold text-navyblue border border-navyblue rounded-full focus:outline-none focus:ring-4 focus:ring-gold transition-transform transform hover:scale-105"
        >
          Donate
        </NuxtLink>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  let isScrolled = ref(false);
  
  onMounted(() => {
    window.addEventListener("scroll", () => {
      isScrolled.value = window.scrollY > 0;
    });
  });
  </script>
  
  <style scoped>
  /* Hover Effect */
  a:hover {
    transition: transform 0.3s ease, color 0.3s ease;
  }
  
  /* Custom Colors */
  :root {
    --navyblue: #003366;
    --gold: #d4af37;
  }
  
  .bg-navyblue {
    background-color: var(--navyblue);
  }
  
  .bg-gold {
    background-color: var(--gold);
  }
  </style>
  