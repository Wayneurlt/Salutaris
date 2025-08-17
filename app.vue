<template>
  <NuxtLayout>
    <NuxtPage />
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
  </NuxtLayout>
  
</template>
