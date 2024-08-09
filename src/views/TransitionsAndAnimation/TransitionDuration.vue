<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Transition Duration</header-h1>
  <!-- 用于控制 CSS 转换持续时间的实用程序 -->
  <paragraph-h2>更改过渡持续时间</paragraph-h2>
  <!-- 使用 duration-* 实用程序来控制元素的转换持续时间 -->
  <div
    class="mx-auto flex max-w-xl place-content-around border py-3 shadow *:rounded-full *:bg-sky-500 *:px-3 *:py-1 *:text-white"
  >
    <button class="transition duration-150 ease-in-out hover:scale-125">Button A</button>
    <button class="transition duration-300 ease-in-out hover:scale-125">Button B</button>
    <button class="transition duration-700 ease-in-out hover:scale-125">Button C</button>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
