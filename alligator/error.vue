<template>
  <NuxtLayout>
    <p>{{ error }}</p>
  </NuxtLayout>
</template>
<script setup>
const error = useError();
</script>
