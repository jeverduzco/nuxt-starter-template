<script lang="ts" setup>
// import toast component
import { useToast } from "primevue/usetoast";
// import notification composable
const notification = useNotification();
// import toast composable
const toast = useToast();
// watch notification state
watch(() => notification.value.show, (value) => {
  if (value) {
    showToast();
    notification.value.show = false;
  }
});
// show toast notification
const showToast = () => {
  toast.add({ severity: notification.value.severity, summary: notification.value.summary, detail: notification.value.detail, life: notification.value.life });
};
</script>
<template>
  <div>
    <ClientOnly>
      <Toast :breakpoints="{'920px': {width: '100%', right: '0', left: '0'}}" />
    </ClientOnly>
  </div>
</template>
