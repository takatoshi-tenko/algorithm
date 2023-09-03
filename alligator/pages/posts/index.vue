<script setup>
const {
  data: posts,
  error,
  refresh,
} = await useFetch("https://jsonplaceholder.typicode.com/posts/");
console.log(error.value, "error");
</script>

<template>
  <div>
    <h1>Posts一覧</h1>
    <button @click="refresh()">再取得</button>
    <p v-if="error">{{ error }}</p>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
