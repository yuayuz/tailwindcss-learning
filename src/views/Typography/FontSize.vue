<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Font Size</header-h1>
  <!-- 用于控制元素字体大小 -->
  <p-h2>设置字体大小</p-h2>
  <!-- 使用 text-* 来控制元素的字体大小 -->
  <div class="m-4 mx-auto max-w-xl space-y-3 border-dashed p-4 shadow *:text-lg">
    <div class="bg-blue-400">
      <p>text-sm</p>
      <p class="text-sm">The quick brown fox ...</p>
    </div>
    <div class="bg-pink-400">
      <p>text-base</p>
      <p class="text-base">The quick brown fox ...</p>
    </div>
    <div class="bg-green-400">
      <p>text-lg</p>
      <p class="text-lg">The quick brown fox ...</p>
    </div>
    <div class="bg-amber-400">
      <p>text-xl</p>
      <p class="text-xl">The quick brown fox ...</p>
    </div>
  </div>
  <p-h2>设置行高</p-h2>
  <!-- 通过向任何字体大小实用程序添加行高修饰符，可以在设置字体大小的同时设置元素的行高。 -->
  <div class="m-4 mx-auto max-w-xl space-y-3 border-dashed p-4 shadow *:text-lg">
    <div class="bg-pink-400">
      <p>text-base</p>
      <p class="text-base/6">The quick brown fox ...</p>
    </div>
    <div class="bg-green-400">
      <p>text-lg</p>
      <p class="text-lg/7">The quick brown fox ...</p>
    </div>
    <div class="bg-amber-400">
      <p>text-xl</p>
      <p class="text-xl/loose">The quick brown fox ...</p>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
