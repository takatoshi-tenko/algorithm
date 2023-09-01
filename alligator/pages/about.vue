<template>
  <div>about page</div>
</template>

<script setup>
const title = ref("Aboutページ!!!");
const description = ref("Aboutページですよ。");
definePageMeta({
  // layout: false,
  middleware: false,
});
useHead({
  title,
  meta: [{ name: "description", content: description }],
});
</script>
