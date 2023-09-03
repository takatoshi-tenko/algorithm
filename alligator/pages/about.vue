<template>
  <div>
    <html lang="ja">
      <head>
        <title>Aboutページ</title>
        <meta name="description" content="Aboutページ" />
      </head>
    </html>
    <h1>About Page</h1>
  </div>
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
