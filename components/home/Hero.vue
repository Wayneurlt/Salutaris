<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-navy-50"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 1px 1px,
            #001f3f 1px,
            transparent 0
          );
          background-size: 60px 60px;
        "
      ></div>
    </div>

    <div
      class="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24"
    >
      <div class="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
        <div class="lg:col-span-6 animate-fade-in">
          <p
            class="text-sm font-semibold tracking-wide text-gold-600 uppercase mb-4"
          >
            Love in Action and Truth
          </p>
          <h1
            class="text-4xl font-display font-bold tracking-tight text-navy-900 sm:text-6xl lg:text-7xl leading-tight"
          >
            Building healthier, stronger
            <span
              class="bg-gradient-to-r from-navy-600 to-gold-600 bg-clip-text text-transparent"
              >communities</span
            >
            across Africa
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
            Salutaris is a community-based organization focused on delivering
            clean water, healthcare, education, and empowerment programs where
            they are needed most across the African continent.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <NuxtLink
              to="/donate"
              class="group inline-flex items-center rounded-full bg-gradient-to-r from-navy-600 to-navy-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-navy-700 hover:to-navy-800 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Icon
                name="heroicons:heart"
                class="h-5 w-5 mr-2 group-hover:scale-110 transition-transform"
              />
              Donate Now
            </NuxtLink>
            <NuxtLink
              to="/get-involved"
              class="group inline-flex items-center rounded-full border-2 border-navy-200 px-6 py-3 text-sm font-semibold text-navy-700 hover:bg-navy-50 hover:border-navy-300 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon
                name="heroicons:user-group"
                class="h-5 w-5 mr-2 group-hover:scale-110 transition-transform"
              />
              Volunteer
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div
            class="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
          >
            <div class="text-center">
              <p class="text-2xl font-display font-bold text-navy-900">15+</p>
              <p class="text-sm text-gray-600">Countries</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-display font-bold text-navy-900">50K+</p>
              <p class="text-sm text-gray-600">Lives Impacted</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-display font-bold text-navy-900">200+</p>
              <p class="text-sm text-gray-600">Projects</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 animate-slide-up">
          <div class="relative">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-navy-500 to-gold-500 rounded-3xl opacity-20 blur-xl"
            ></div>
            <img
              :src="hopeImg"
              alt="Community support across Africa"
              class="relative rounded-3xl shadow-2xl ring-1 ring-gray-200/60"
            />
            <!-- <div
              class="absolute -bottom-6 -left-6 hidden sm:block animate-scale-in"
            >
              <div class="relative">
                <div
                  class="absolute -inset-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl opacity-20 blur-lg"
                ></div>
                <img
                  :src="capImg"
                  alt="Education support"
                  class="relative h-28 w-auto rounded-xl shadow-lg ring-1 ring-gray-200/60"
                />
              </div>
            </div> -->
            <!-- <div
              class="absolute -top-4 -right-4 hidden sm:block animate-scale-in"
              style="animation-delay: 0.2s"
            >
              <div class="relative">
                <div
                  class="absolute -inset-2 bg-gradient-to-r from-navy-400 to-navy-600 rounded-xl opacity-20 blur-lg"
                ></div>
                <img
                  :src="teamImg"
                  alt="Team collaboration"
                  class="relative h-24 w-auto rounded-xl shadow-lg ring-1 ring-gray-200/60"
                />
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import hopeImg from "~/assets/images/hope.png";
import capImg from "~/assets/images/cap.png";
import teamImg from "~/assets/images/team.png";
</script>
