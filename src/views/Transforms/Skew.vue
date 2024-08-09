<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Skew</header-h1>
  <!-- 使用变换来拉伸元素的实用程序 -->
  <paragraph-h2>拉伸元素</paragraph-h2>
  <!-- 使用 skew-x-* 和 skew-y-* 实用程序来拉伸元素 -->
  <div class="mx-auto mt-4 flex h-44 max-w-xl place-content-evenly items-center p-6 shadow">
    <div class="border">
      <p class="text-center">skew-y-6</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="absolute h-24 w-24 border object-contain opacity-75"
        alt="photo"
      />
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="relative h-24 w-24 skew-y-6 scale-75 border object-contain"
        alt="photo"
      />
    </div>
    <div class="border">
      <p class="text-center">skew-x-0</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="absolute h-24 w-24 border object-contain opacity-50"
        alt="photo"
      />
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="relative h-24 w-24 skew-x-0 scale-75 border object-contain"
        alt="photo"
      />
    </div>
    <div class="border">
      <p class="text-center">skew-x-6</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="absolute h-24 w-24 border object-contain opacity-50"
        alt="photo"
      />
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="relative h-24 w-24 skew-x-6 scale-75 border object-contain"
        alt="photo"
      />
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
