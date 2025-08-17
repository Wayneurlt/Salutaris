// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "nuxt-auth-utils",
    "notivue/nuxt",
    "@nuxt/image",
  ],
  devtools: { enabled: true },
  css: [
    "~/assets/style.css",
    "notivue/notification.css",
    "notivue/animations.css",
  ],
  runtimeConfig: {
    oauth: {
      google: {
        clientId: "",
        clientSecret: "",
      },
      facebook: {
        clientId: "",
        clientSecret: "",
      },
      instagram: {
        clientId: "",
        clientSecret: "",
      },
    },
  },
  app: {
    head: {
      title: "Salutaris - Love in Action and Truth",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { name: "description", content: "Salutaris is a community-based organization focused on making impactful changes across Africa through love in action and truth." },
        { name: "keywords", content: "Africa, community, development, clean water, healthcare, education, youth empowerment" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/logo.png",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap",
        },
      ],
    },
  },
  notivue: {
    limit: 3,
    avoidDuplicates: true,
    notifications: {
      global: {
        duration: 5000,
      },
    },
  },
  
});
