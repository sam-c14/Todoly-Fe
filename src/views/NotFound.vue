<!-- NotFound.vue -->

<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800">404 - Not Found</h1>
      <p class="mt-2 text-gray-600"
        >The page you are looking for does not exist.</p
      >
      <router-link
        to="/"
        class="mt-4 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >Go to Home</router-link
      >
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Add any additional styling here */
</style>
