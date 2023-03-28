<script setup lang="ts">
// impor i18n composables
const { t } = useI18n();
// define computed properties for returning translated strings
const title = computed(() => t("pages.index.title"));
const description = computed(() => t("pages.index.description"));
</script>
<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta
        name="description"
        :content="description"
      />
      <Link rel="canonical" href="https://www.verduzco.me/" />
      <Meta property="og:title" :content="title" />
      <Meta property="og:description" :content="description" />
      <Meta property="og:url" content="https://www.verduzco.me/" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://raw.githubusercontent.com/jeverduzco/nuxt-starter-template/main/public/capture.jpeg" />
      <Meta property="og:image:secure_url" content="https://raw.githubusercontent.com/jeverduzco/nuxt-starter-template/main/public/capture.jpeg" />
      <Meta property="og:image:type" content="image/jpeg" />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:image:alt" :content="title" />
      <Meta property="og:site_name" content="Nuxt 3 - Starter Template" />
      <Meta property="og:locale" content="en-us" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" :content="title" />
      <Meta name="twitter:description" :content="description" />
      <Meta name="twitter:image" content="https://raw.githubusercontent.com/jeverduzco/nuxt-starter-template/main/public/capture.jpeg" />
    </Head>
    <PageContent />
  </div>
</template>
