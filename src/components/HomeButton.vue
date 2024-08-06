<script setup lang="ts">
import router from '@/router'

const handleRouter = function (page: string) {
  router.push({ name: page })
}
const props = defineProps(['page'])
</script>

<template>
  <button
    @click="handleRouter(props.page)"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    {{ props.page }}
  </button>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
