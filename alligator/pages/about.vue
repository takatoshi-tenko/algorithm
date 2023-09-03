<template>
  <div>
    <html lang="ja">
      <head>
        <title>Aboutページ</title>
        <meta name="description" content="Aboutページ" />
      </head>
    </html>
    <h1>About Page</h1>
    <h2>Counter</h2>
    <p>Count: {{ counter }}</p>
    <div>
      <button @click="counter++">+</button>
    </div>
  </div>
</template>

<script setup>
const title = ref("Aboutページ!!!");
const description = ref("Aboutページですよ。");
const counter = useCounter()
definePageMeta({
  // layout: false,
  middleware: false,
});
useHead({
  title,
  meta: [{ name: "description", content: description }],
});
</script>
