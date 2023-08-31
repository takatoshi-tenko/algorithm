// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/style.css"],
  app: {
    head: {
      title: "Nuxt 3 basic from Takatoshi Tenko",
      meta: [{ name: "description", content: "Nuxt 3 for beginners" }],
      link: [{ rel: "icon", href: "/public/favicon.ico" }],
    },
  },
  components: [
    {
      path: "~/components",
    },
  ],
});
