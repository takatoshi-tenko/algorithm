<script setup>
  const {
    data: posts,
    error,
    pending,
  } = await useLazyAsyncData('posts', () =>
    $fetch('https://jsonplaceholder.typicode.com/posts/')
  );
</script>
<template>
  <div>
    <h1>Posts一覧</h1>
    <p v-if="error">{{ error }}</p>
    <p v-if="pending">Loading...</p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
