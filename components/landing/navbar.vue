<template>
  <nav
    :class="[
      'fixed top-0 w-full z-[1000] px-4 sm:px-6 py-3 xl:py-4 transition-all duration-300 flex justify-between items-center',
      isScrolled ? 'bg-satinlinen dark:bg-white' : 'bg-transparent',
    ]"
  >
    <!-- Left: Logo (Mobile first) -->
    <NuxtLink to="/" class="flex items-center lg:hidden">
      <ClientOnly>
        <img
          class="h-12 w-auto"
          src="/assets/images/log.png"
          alt="Salutaris Logo"
        />
      </ClientOnly>
    </NuxtLink>

    <!-- Hamburger Menu (Mobile) -->
    <button
      @click="toggleMenu"
      class="lg:hidden text-[1.5rem] text-gold focus:outline-none"
    >
      <span v-if="!showMenu">☰</span>
      <span v-else>✕</span>
    </button>

    <!-- Center Logo (Desktop Only) -->
    <div class="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
      <NuxtLink to="/" class="flex items-center">
        <ClientOnly>
          <img
            class="h-12 lg:h-16 xl:h-20 w-auto mt-4 py-2"
            src="/assets/images/log.png"
            alt="Salutaris Logo"
          />
        </ClientOnly>
      </NuxtLink>
    </div>

    <!-- Links (Desktop) -->
    <div
      class="hidden lg:flex items-center gap-6 font-semibold"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.to"
        class="transition-transform transform hover:scale-105"
        :style="{ color: isScrolled ? '#003366' : '#d4af37' }"
      >
        {{ link.name }}
      </NuxtLink>
    </div>

    <!-- Buttons (Desktop) -->
    <div class="hidden lg:flex items-center gap-4">
      <NuxtLink
        to="/join"
        class="px-4 py-2 bg-blue-900 text-white rounded-full focus:outline-none focus:ring-4 focus:ring-gold transition-transform transform hover:scale-105"
      >
        Join Us
      </NuxtLink>
      <NuxtLink
        to="/donate"
        class="px-4 py-2 bg-yellow-500 text-blue-900 border border-navyblue rounded-full focus:outline-none focus:ring-4 focus:ring-gold transition-transform transform hover:scale-105"
      >
        Donate
      </NuxtLink>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-if="showMenu"
      class="absolute top-full left-0 w-full bg-satinlinen dark:bg-white px-6 py-4 flex flex-col gap-4 lg:hidden"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.name + '-mobile'"
        :to="link.to"
        @click="closeMenu"
        class="font-semibold transition-transform transform hover:scale-105"
        :style="{ color: isScrolled ? '#003366' : '#d4af37' }"
      >
        {{ link.name }}
      </NuxtLink>

      <NuxtLink
        to="/join"
        class="px-4 py-2 text-white text-center bg-blue-900 rounded-full focus:outline-none focus:ring-4 focus:ring-gold"
        @click="closeMenu"
      >
        Join Us
      </NuxtLink>
      <NuxtLink
        to="/donate"
        class="px-4 py-2 text-center bg-yellow-500 text-blue-900 border border-navyblue rounded-full focus:outline-none focus:ring-4 focus:ring-gold"
        @click="closeMenu"
      >
        Donate
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isScrolled = ref(false);
const showMenu = ref(false);

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Impact', to: '/impact' },
];

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const closeMenu = () => {
  showMenu.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 0;
  });
});
</script>

<style scoped>
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
.text-navyblue {
  color: var(--navyblue);
}
.text-gold {
  color: var(--gold);
}

a:hover {
  transition: transform 0.3s ease, color 0.3s ease;
}
</style>
