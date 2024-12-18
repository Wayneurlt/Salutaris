<template>
    <!-- Hero Section -->
    <section class="relative flex min-h-screen w-full flex-col items-center justify-center">
      <!-- Animated Background -->
      <div>
      <canvas
        ref="starsCanvas"
        class="absolute inset-0 w-full h-full bg-white"
      ></canvas>
    </div>
      
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
  import { onMounted, ref } from "vue";
  
  interface Star {
    x: number;
    y: number;
    z: number;
    speed: number;
  }
  
  const props = withDefaults(
    defineProps<{
      color?: string;
      count?: number;
    }>(),
    {
      color: "#000000",
      count: 150,
    }
  );
  
  const starsCanvas = ref<HTMLCanvasElement | null>(null);
  let perspective: number = 0;
  let stars: Star[] = [];
  let ctx: CanvasRenderingContext2D | null = null;
  
  onMounted(() => {
    const canvas = starsCanvas.value;
    if (!canvas) return;
  
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
  
    perspective = canvas.width / 2;
  
    // Initialize stars
    stars = Array.from({ length: props.count }, () => createStar(canvas));
  
    animate();
  });
  
  function createStar(canvas: HTMLCanvasElement): Star {
    return {
      x: (Math.random() - 0.5) * 2 * canvas.width,
      y: (Math.random() - 0.5) * 2 * canvas.height,
      z: Math.random() * canvas.width,
      speed: Math.random() * 5 + 2, // Star speed
    };
  }
  
  function hexToRgb() {
    let hex = props.color.replace(/^#/, "");
    if (hex.length === 3) hex = hex.split("").map((char) => char + char).join("");
  
    const bigint = parseInt(hex, 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  }
  
  function drawStar(star: Star) {
    const canvas = starsCanvas.value;
    if (!canvas || !ctx) return;
  
    const scale = perspective / (perspective + star.z);
    const x2d = canvas.width / 2 + star.x * scale;
    const y2d = canvas.height / 2 + star.y * scale;
    const size = Math.max(scale * 2, 0.5);
  
    // Star trail (previous position before moving closer)
    const prevScale = perspective / (perspective + star.z + star.speed * 10);
    const xPrev = canvas.width / 2 + star.x * prevScale;
    const yPrev = canvas.height / 2 + star.y * prevScale;
  
    const { r, g, b } = hexToRgb();
  
    // Draw star trail as a line
    ctx.save();
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.7)`;
    ctx.lineWidth = size;
    ctx.shadowBlur = 20;
    ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.8)`;
  
    ctx.beginPath();
    ctx.moveTo(x2d, y2d);
    ctx.lineTo(xPrev, yPrev);
    ctx.stroke();
    ctx.restore();
  }
  
  function animate() {
    const canvas = starsCanvas.value;
    if (!canvas) return;
  
    ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    stars.forEach((star) => {
      drawStar(star);
  
      // Move stars toward the viewer (decrease z)
      star.z -= star.speed;
  
      // Reset stars when they get too close
      if (star.z < 1) {
        star.z = canvas.width; // Push back to the far edge
        star.x = (Math.random() - 0.5) * 2 * canvas.width;
        star.y = (Math.random() - 0.5) * 2 * canvas.height;
      }
    });
  
    requestAnimationFrame(animate);
  }
  
  function resizeCanvas() {
    const canvas = starsCanvas.value;
    if (!canvas) return;
  
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }
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
  