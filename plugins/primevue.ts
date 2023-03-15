// import define nuxt plugin function
import { defineNuxtPlugin } from "#app";
// import primevue plugin function
import PrimeVue from "primevue/config";
// import prime vue directives
import StyleClass from "primevue/styleclass";
import Ripple from "primevue/ripple";
import BadgeDirective from "primevue/badgedirective";
// import prime vue components
import Toast from "primevue/toast";
// import prime vue services
import ToastService from "primevue/toastservice";
// import language translation
// import { lang } from "../../utils/lang"; // uncomment this line if you need language translation, the translation file is in the same folder and have spanish translation

// export prime vue plugin
export default defineNuxtPlugin((nuxtApp) => {
  // initialice prime vue
  nuxtApp.vueApp.use(PrimeVue, {
    ripple: true,
    StyleClass
  // locale: lang // uncomment this line if you need language translation, the translation file is in the same folder and have spanish translation
  });
  // initialice prime vue services
  nuxtApp.vueApp.use(ToastService);
  // load prime vue directives
  nuxtApp.vueApp.directive("styleclass", StyleClass);
  nuxtApp.vueApp.directive("ripple", Ripple);
  nuxtApp.vueApp.directive("badge", BadgeDirective);
  // load prime vue components
  nuxtApp.vueApp.component("Toast", Toast);
  // other components that you need
});
