// https://nuxt.com/docs/api/configuration/nuxt-config
const baseUrl = "/";
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      // <link rel="icon" type="shortcut icon" href="/icon-128.png">
      // <link rel="apple-touch-icon" type="image/x-icon" href="/icon-192.png">
      link: [
        {
          rel: "icon",
          type: "shortcut icon",
          href: "/icon-128.png"
        },
        {
          rel: "apple-touch-icon",
          type: "image/x-icon",
          href: "/icon-192.png"
        },
        {
          id: "theme-link",
          rel: "stylesheet",
          href: baseUrl + "themes/lara-light-teal/theme.css"
        }
      ]
    }
  },
  // import PrimeVue, PrimeFlex and PrimeIcons css
  css: [
    // "primevue/resources/themes/lara-dark-teal/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css"
  ],
  // build settings
  build: {
    transpile: ["primevue"]
  },
  // nitro server settings
  nitro: {
    preset: "azure"
  }
});
