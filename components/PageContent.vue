<template>
  <div>
    <div class="surface-ground px-4 py-4">
      <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
          <div class="surface-card shadow-2 p-3 border-round">
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">{{ $t('pageContent.orders') }}</span>
                <div class="text-900 font-medium text-xl">
                  152
                </div>
              </div>
              <div class="flex align-items-center justify-content-center bg-blue-100 border-round custom-card-icon">
                <i class="pi pi-shopping-cart text-blue-500 text-xl" />
              </div>
            </div>
            <span class="text-green-500 font-medium">24 {{ $t('pageContent.new') }} </span>
            <span class="text-500">{{ $t('pageContent.today') }}</span>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <div class="surface-card shadow-2 p-3 border-round">
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">{{ $t('pageContent.revenue') }}</span>
                <div class="text-900 font-medium text-xl">
                  $2.100
                </div>
              </div>
              <div class="flex align-items-center justify-content-center bg-orange-100 border-round custom-card-icon">
                <i class="pi pi-map-marker text-orange-500 text-xl" />
              </div>
            </div>
            <span class="text-green-500 font-medium">%10+ </span>
            <span class="text-500">{{ $t('pageContent.moreThanYesterday') }}</span>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <div class="surface-card shadow-2 p-3 border-round">
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">{{ $t('pageContent.customers') }}</span>
                <div class="text-900 font-medium text-xl">
                  28441
                </div>
              </div>
              <div class="flex align-items-center justify-content-center bg-cyan-100 border-round custom-card-icon">
                <i class="pi pi-inbox text-cyan-500 text-xl" />
              </div>
            </div>
            <span class="text-green-500 font-medium">520  </span>
            <span class="text-500">{{ $t('pageContent.today') }}</span>
          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <div class="surface-card shadow-2 p-3 border-round">
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">{{ $t('pageContent.comments') }}</span>
                <div class="text-900 font-medium text-xl">
                  152 {{ $t('pageContent.unread') }}
                </div>
              </div>
              <div class="flex align-items-center justify-content-center bg-purple-100 border-round custom-card-icon">
                <i class="pi pi-comment text-purple-500 text-xl" />
              </div>
            </div>
            <span class="text-green-500 font-medium">85 </span>
            <span class="text-500">{{ $t('pageContent.today') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .custom-card-icon {
    width: 2.5rem;
    height: 2.5rem;
  }
</style>
