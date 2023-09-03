<template>
  <div>
    <h1>Usersページ</h1>
    <p>Count: {{ counter }}</p>
    <NuxtPage />
  </div>
</template>

<script setup>
const counter = useCounter();
</script>
