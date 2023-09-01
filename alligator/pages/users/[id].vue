<template>
  <div>
    <p>ユーザーID：{{ $route.params.id }}</p>
    <p>ユーザーID：{{ $route.params }}</p>
    <p>ユーザーID：{{ $route }}</p>
  </div>
</template>

<script setup>
const router = useRoute()
console.log(router.params.id)
</script>
