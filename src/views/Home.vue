<script setup lang="ts">
import router from '@/router'

const handleRouter = function (page: string) {
  router.push({ name: page })
}
</script>

<template>
  <h1 class="bg-sky-400">Home</h1>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
