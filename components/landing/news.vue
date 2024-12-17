<template>
    <div
      ref="sliderRef"
      tabindex="0"
      class="flex items-stretch justify-center overflow-hidden focus:outline-none focus:ring-1"
      @mouseenter="pauseAutoplay"
      @mouseleave="startAutoplay"
      style="height: 400px"
    >
      <!-- Left Side: Image Slider -->
      <div class="relative w-1/2 h-full overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="carouselStyle"
        >
          <div
            v-for="(item, index) in slides"
            :key="index"
            class="shrink-0 w-full h-full"
          >
            <!-- Image -->
            <img
              :src="item.image"
              class="w-full h-full object-cover"
              alt="Slider Image"
            />
          </div>
        </div>
  
        <!-- Navigation Buttons -->
        <button
          @click="onPrev"
          class="absolute left-4 top-1/2 z-10 -translate-y-1/2 p-2 text-white bg-black/50 rounded-full"
        >
          <!-- Arrow Icon -->
          <span class="inline-block text-2xl transform rotate-180">➤</span>
        </button>
        <button
          @click="onNext"
          class="absolute right-4 top-1/2 z-10 -translate-y-1/2 p-2 text-white bg-black/50 rounded-full"
        >
          <span class="inline-block text-2xl">➤</span>
        </button>
      </div>
  
      <!-- Right Side: Information Content -->
      <div class="w-1/2 h-full flex items-center justify-center p-6 bg-gray-100">
        <div class="text-left">
          <h2 class="text-3xl font-bold mb-4 text-gray-800">
            {{ currentSlide.title }}
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            {{ currentSlide.description }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted, onBeforeUnmount } from "vue";
  
  // Use local or external images
  const slides = ref([
    {
      image:  new URL("@/assets/images/hope.png", import.meta.url).href,
      title: "Transforming Lives Through Action",
      description:
        "At Salutaris, we are committed to transforming lives through love in action, providing sustainable solutions for community empowerment.",
    },
    {
      image:  new URL("@/assets/images/team.png", import.meta.url).href,
      title: "Promoting Community Wellbeing",
      description:
        "We focus on healthcare, education, and support systems that ensure a better quality of life for vulnerable groups.",
    },
    {
      image:  new URL("@/assets/images/hope.png", import.meta.url).href,
      title: "Shaping Future Generations",
      description:
        "Through youth-focused programs, we nurture leadership, innovation, and knowledge for the future.",
    },
    {
      image:  new URL("@/assets/images/cap.png", import.meta.url).href,
      title: "United for Lasting Impact",
      description:
        "Together with our partners and supporters, Salutaris builds impactful programs for a brighter tomorrow.",
    },
  ]);
  
  const currentIndex = ref(0);
  let autoplayTimer: number | null = null;
  
  const currentSlide = computed(() => slides.value[currentIndex.value]);
  
  // Style for carousel sliding
  const carouselStyle = computed(() => ({
    transform: `translateX(-${currentIndex.value * 100}%)`,
  }));
  
  function onPrev() {
    currentIndex.value =
      (currentIndex.value - 1 + slides.value.length) % slides.value.length;
  }
  
  function onNext() {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  }
  
  // Autoplay
  function startAutoplay() {
    if (autoplayTimer === null) {
      autoplayTimer = setInterval(onNext, 3000);
    }
  }
  
  function pauseAutoplay() {
    if (autoplayTimer !== null) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }
  
  onMounted(() => startAutoplay());
  onBeforeUnmount(() => pauseAutoplay());
  </script>
  
  <style scoped>
  /* Ensures the container takes full height for equal sections */
  div[ref="sliderRef"] {
    width: 100%;
    height: 400px; /* Set fixed height */
  }
  
  /* Removes hover effects */
  button {
    transition: none;
  }
  
  button:hover {
    transform: none;
    background: none;
  }
  </style>
  