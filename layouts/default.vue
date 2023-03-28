<script setup lang="ts">
// import types
import { usePrimeVue } from "primevue/config";
import { Locale } from "@/types/locale";
// import locales to change prime vue locale
import { es, en } from "~/utils/pmlang";
// import prime vue for fix directives
// import i18n composables
const { locale, locales, setLocale } = useI18n({
// eslint-disable-next-line no-unused-vars
}) as unknown as { t: (message: string) => void, locale: Ref<string>; locales: Ref<Locale[]>, setLocale: (code: string) => void };
// use as any for fix typescript error because usePrimeVue has missing types
const $primevue = usePrimeVue() as any;
defineExpose({
  $primevue
});
// active theme ref
const activeTheme = ref("lara-light-teal");
// change prime vue theme function
const changeTheme = () => {
  $primevue.changeTheme(activeTheme.value, activeTheme.value === "lara-light-teal" ? "lara-dark-teal" : "lara-light-teal", "theme-link", () => {});
  activeTheme.value = activeTheme.value === "lara-light-teal" ? "lara-dark-teal" : "lara-light-teal";
};
// list locales
const availableLocales = computed(() => {
  return locales.value
    .filter(i => i.code !== locale.value)
    .map(i => ({
      label: i.name,
      icon: "pi pi-language",
      command: () => {
        setLocale(i.code);
      }
    }));
});
// create menu ref
const menu = ref();
// create menu toggle function
const toggleMenu = () => {
  menu.value.toggle(event);
};
// watch locale change to change prime vue locale
watch(locale, (value) => {
  switch (value) {
  case "es":
    $primevue.config.locale = es;
    break;
  default:
    $primevue.config.locale = en;
    break;
  // add more locales if you need
  }
});

</script>
<template>
  <div>
    <div class="min-h-screen flex relative lg:static surface-ground">
      <div id="app-sidebar" class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none app-sidebar">
        <div class="flex flex-column h-full">
          <div class="flex align-items-center px-5 flex-shrink-0 border-bottom-1 surface-border logo">
            <img src="https://www.verduzco.me/images/logo/logo.png" alt="Image" height="30">
          </div>
          <div class="overflow-y-auto">
            <ul class="list-none p-3 m-0">
              <li>
                <div
                  v-ripple
                  v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                  class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer border-2 border-transparent border-rounded p-ripple"
                >
                  <span class="font-medium">{{ $t('layout.application') }}</span>
                  <i class="pi pi-chevron-down" />
                </div>
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors text-indigo-500 p-ripple menu-item">
                      <i class="pi pi-home mr-2" />
                      <span class="font-medium">{{ $t('layout.dashboard') }}</span>
                    </a>
                  </li>
                  <li>
                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple menu-item">
                      <i class="pi pi-bookmark mr-2 text-blue-500" />
                      <span class="font-medium">{{ $t('layout.bookmarks') }}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}"
                      class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple menu-item"
                    >
                      <i class="pi pi-chart-line mr-2 text-purple-500" />
                      <span class="font-medium">{{ $t('layout.reports') }}</span>
                      <i class="pi pi-chevron-down ml-auto" />
                    </a>
                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                      <li>
                        <a
                          v-ripple
                          v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}"
                          class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple menu-item"
                        >
                          <i class="pi pi-chart-line mr-2 text-purple-500" />
                          <span class="font-medium">{{ $t('layout.revenue') }}</span>
                          <i class="pi pi-chevron-down ml-auto" />
                        </a>
                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          <li>
                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple menu-item">
                              <i class="pi pi-table text-purple-500 mr-2" />
                              <span class="font-medium">{{ $t('layout.view') }}</span>
                            </a>
                          </li>
                          <li>
                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple menu-item">
                              <i class="pi pi-search mr-2 text-purple-500" />
                              <span class="font-medium">{{ $t('layout.search') }}</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple menu-item">
                          <i class="pi pi-chart-line mr-2 text-purple-500" />
                          <span class="font-medium">{{ $t('layout.expenses') }}</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple menu-item">
                      <i class="pi pi-users mr-2 text-green-500" />
                      <span class="font-medium">{{ $t('layout.team') }}</span>
                    </a>
                  </li>
                  <li>
                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple menu-item">
                      <i class="pi pi-comments mr-2 text-cyan-500 " />
                      <span class="font-medium">{{ $t('layout.messages') }}</span>
                      <span class="inline-flex align-items-center justify-content-center ml-auto bg-indigo-500 text-0 border-circle menu-badge">3</span>
                    </a>
                  </li>
                  <li>
                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple menu-item">
                      <i class="pi pi-calendar mr-2 text-teal-500 " />
                      <span class="font-medium">{{ $t('layout.calendar') }}</span>
                    </a>
                  </li>
                  <li>
                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple menu-item">
                      <i class="pi pi-cog mr-2 text-pink-500 " />
                      <span class="font-medium">{{ $t('layout.settings') }}</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="list-none p-3 m-0">
              <li>
                <div
                  v-ripple
                  v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}"
                  class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                >
                  <span class="font-medium">{{ $t('layout.external') }}</span>
                  <i class="pi pi-chevron-down" />
                </div>
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors p-ripple menu-item">
                      <i class="pi pi-discord mr-2 text-cyan-500" />
                      <span class="font-medium">{{ $t('layout.discord') }}</span>
                    </a>
                  </li>
                  <li>
                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors p-ripple menu-item">
                      <i class="pi pi-slack mr-2 text-purple-500" />
                      <span class="font-medium">{{ $t('layout.slack') }}</span>
                    </a>
                  </li>
                  <li>
                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors p-ripple menu-item">
                      <i class="pi pi-github mr-2 text-blue-500" />
                      <span class="font-medium">{{ $t('layout.github') }}</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <hr class="mb-3 mx-3 border-top-1 border-none surface-border">
            <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple menu-item">
              <img src="https://randomuser.me/api/portraits/women/85.jpg" class="mr-2 border-circle user-avatar">
              <span class="font-medium">Amy Elsner</span>
            </a>
          </div>
        </div>
      </div>
      <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static app-navbar">
          <a
            v-ripple
            v-styleclass="{ selector: '#app-sidebar', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }"
            class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
          >
            <i class="pi pi-bars text-4xl" />
          </a>
          <a
            v-ripple
            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
            class="cursor-pointer block lg:hidden text-700 p-ripple"
          >
            <i class="pi pi-ellipsis-v text-2xl" />
          </a>
          <ul
            class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row w-auto lg:w-full
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static justify-content-end"
          >
            <li>
              <a
                v-ripple
                class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple"
              >
                <i v-badge.danger class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" />
                <span class="block lg:hidden font-medium">{{ $t('layout.notifications') }}</span>
              </a>
            </li>
            <li>
              <a
                v-ripple
                class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple"
                @click="toggleMenu"
              >
                <i class="pi pi-language text-base lg:text-2xl mr-2 lg:mr-0" />
                <span class="block lg:hidden font-medium">{{ $t('layout.language') }}</span>
              </a>
              <Menu id="overlay_menu" ref="menu" :model="availableLocales" :popup="true" />
            </li>
            <li>
              <a
                v-ripple
                class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple"
                @click="changeTheme"
              >
                <i class="pi text-base lg:text-2xl mr-2 lg:mr-0" :class="activeTheme === 'lara-light-teal' ? 'pi-moon' : 'pi-sun'" />
                <span class="block lg:hidden font-medium">{{ $t('layout.theme') }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
          <div class="border-2 border-dashed surface-border border-round flex-auto router-content">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .app-sidebar {
    width: 280px;
  }
  .logo {
    height: 60px;
  }
  .menu-item {
    border-radius: 12px;
  }
  .menu-badge {
    min-width: 1.5rem;
    height: 1.5rem;
  }
  .user-avatar {
    width: 28px;
    height: 28px;
  }
  .app-navbar {
    height: 60px;
  }
  .router-content {
    overflow-y: auto;
    max-height: calc(100vh - 60px);
  }
</style>
<i18n lang="json">
  {
    "en": {
      "favorites": "FAVORITES"
    },
    "es": {
      "favorites": "FAVORITOS"
    }
  }
  </i18n>
