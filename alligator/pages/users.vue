<template>
  <div>
    <h1>Usersページ</h1>
    <NuxtErrorBoundary>
      <NuxtPage />
      <template>
        <p>{{ error }}</p>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
