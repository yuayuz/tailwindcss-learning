<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>元素背景颜色</header-h1>
  <!-- 用于控制元素背景颜色 -->
  <paragraph-h2>设置背景颜色</paragraph-h2>
  <!-- 使用诸如 bg-white、bg-indigo-500 和 bg-transparent 之类的实用程序来控制元素的背景颜色 -->
  <button class="m-4 rounded-full border bg-indigo-500 p-3 text-lg leading-6 text-white shadow">
    背景颜色
  </button>
  <paragraph-h2>改变不透明度</paragraph-h2>
  <!-- 使用颜色不透明度修饰符来控制元素背景颜色的不透明度 -->
  <div class="mx-auto flex max-w-xl space-x-5 border shadow">
    <button class="m-4 rounded-full border bg-sky-600/90 p-3 text-lg leading-6 text-white shadow">
      透明度
    </button>
    <button class="m-4 rounded-full border bg-sky-600/75 p-3 text-lg leading-6 text-white shadow">
      透明度
    </button>
    <button class="m-4 rounded-full border bg-sky-600/50 p-3 text-lg leading-6 text-white shadow">
      透明度
    </button>
    <button
      class="m-4 rounded-full border bg-sky-600/[.25] p-3 text-lg leading-6 text-white shadow"
    >
      透明度
    </button>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
