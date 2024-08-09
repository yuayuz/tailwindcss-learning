<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Transition Property</header-h1>
  <!-- 用于控制哪些 CSS 属性转换的实用程序 -->
  <paragraph-h2>控制转换属性</paragraph-h2>
  <!-- 使用 transition-* 实用程序来指定哪些属性在发生变化时应该转换 -->
  <button
    class="mt-4 rounded-full bg-blue-500 px-3 py-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
  >
    SaveChanges
  </button>
  <paragraph-h2>Prefers-reduced-motion</paragraph-h2>
  <!-- 对于用户指定他们喜欢减少运动的情况，可以使用 motion-safe 和 motion-reduce 变体有条件地应用动画和过渡 -->
  <button
    class="mt-4 transform rounded-full bg-blue-500 px-3 py-2 transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
  >
    Hover me
  </button>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
