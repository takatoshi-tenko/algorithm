<template>
  <nav>
    <NuxtLink href="/">Home</NuxtLink>
    <NuxtLink href="/about">About</NuxtLink>
    <NuxtLink to="https://google.com" target="_blank"> Google </NuxtLink>
    <NuxtLink :to="{ name: 'users-list' }">User List</NuxtLink>
    <NuxtLink to="/posts">Post List</NuxtLink>
  </nav>
</template>
