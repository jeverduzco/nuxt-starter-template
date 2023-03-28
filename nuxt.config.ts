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
      // <link id="theme-link" rel="stylesheet" href="/themes/lara-light-teal/theme.css">
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
  // modules
  modules: [
    "@nuxtjs/i18n",
    "@vite-pwa/nuxt"
  ],
  // i18n module configuration
  i18n: {
    locales: [
      {
        code: "es",
        iso: "es-MX",
        name: "Español",
        file: "es-MX.json"
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.json"
      }
    ],
    defaultLocale: "es",
    strategy: "no_prefix",
    langDir: "lang",
    vueI18n: {
      legacy: false
    }
  },
  // vite-pwa module configuration
  pwa: {
    workbox: {
      navigateFallback: null
    },
    manifest: {
      name: "Nuxt 3 Template",
      short_name: "Nuxt 3"
    }
  },
  // build settings
  build: {
    transpile: ["primevue"]
  },
  // nitro server settings
  nitro: {
    preset: "azure"
  }
});
