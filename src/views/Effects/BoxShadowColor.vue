<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Box Shadow Color</header-h1>
  <!-- 用于控制盒子阴影颜色的实用程序 -->
  <paragraph-h2>设置框阴影颜色</paragraph-h2>
  <!--
  使用 shadow-* 实用程序更改现有框阴影的颜色。默认情况下，彩色阴影的不透明度为 100%，
  但可以使用不透明度修改器进行调整
  -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border bg-slate-50 p-4 shadow *:space-y-3"
  >
    <div class="aspect-square h-14 bg-pink-400 shadow-lg shadow-pink-400/50"></div>
    <div class="aspect-square h-14 bg-cyan-400 shadow-lg shadow-cyan-400/75"></div>
    <div class="aspect-square h-14 bg-amber-400 shadow-lg shadow-amber-400/80"></div>
    <div class="aspect-square h-14 bg-green-400 shadow-lg shadow-green-400/90"></div>
  </div>
  <paragraph-h2>在彩色背景上使用阴影</paragraph-h2>
  <!-- 在彩色背景上使用阴影时，彩色阴影通常看起来比默认的黑色阴影更自然，而默认的黑色阴影往往显得灰色和褪色 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border bg-indigo-300 p-4 shadow *:space-y-3"
  >
    <button class="rounded-full bg-white px-3 py-2 text-violet-600 shadow-lg">默认阴影</button>
    <button class="rounded-full bg-white px-3 py-2 text-violet-600 shadow-lg shadow-indigo-500/75">
      彩色阴影
    </button>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
