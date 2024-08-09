<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Transform Origin</header-h1>
  <!-- 用于指定元素转换的原点的实用程序 -->
  <paragraph-h2>改变变换原点</paragraph-h2>
  <!-- 使用实用程序指定元素的变换原点 origin-* -->
  <div class="mx-auto mt-4 flex h-44 max-w-xl place-content-evenly items-center p-6 shadow">
    <div class="border">
      <p class="text-center">origin-center</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="absolute h-24 w-24 border object-contain opacity-75"
        alt="photo"
      />
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="relative h-24 w-24 origin-center rotate-45 skew-y-6 scale-75 border object-contain"
        alt="photo"
      />
    </div>
    <div class="border">
      <p class="text-center">origin-top-left</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="absolute h-24 w-24 border object-contain opacity-50"
        alt="photo"
      />
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="relative h-24 w-24 origin-top-left rotate-45 skew-x-0 scale-75 border object-contain"
        alt="photo"
      />
    </div>
    <div class="border">
      <p class="text-center">origin-bottom</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="absolute h-24 w-24 border object-contain opacity-50"
        alt="photo"
      />
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="relative h-24 w-24 origin-bottom rotate-45 scale-75 border object-contain"
        alt="photo"
      />
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
