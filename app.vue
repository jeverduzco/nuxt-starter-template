<script setup lang="ts">
// impor i18n composables
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true
});
</script>
<template>
  <div>
    <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
      <NuxtLayout>
        <NuxtPage />
        <AppNotifications />
      </NuxtLayout>
    </html>
  </div>
</template>
<style lang="css">
  *:focus {
    box-shadow: none !important;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    font-family: var(--font-family);
    background-color: var(--surface-ground);
    color: var(--text-color);
    padding: 0;
    margin: 0;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .content {
    max-width: 1441px;
    margin: 0 auto;
  }
</style>
