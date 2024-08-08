<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Ring Color</header-h1>
  <!-- 用于设置轮廓环颜色的实用程序 -->
  <paragraph-h2>设置环的颜色和透明度</paragraph-h2>
  <!-- 使用 ring-* 实用程序设置环的颜色 -->
  <div
    class="mx-auto mt-4 flex max-w-xs place-content-around border bg-slate-50 p-4 shadow *:aspect-square *:h-14 *:content-center *:rounded-md *:border *:border-slate-200 *:text-center *:leading-10"
  >
    <div class="outline outline-2 outline-red-400/25 ring-0 ring-red-400/25 ring-offset-2">01</div>
    <div
      class="outline-dashed outline-2 outline-green-400/50 ring-1 ring-green-400/50 ring-offset-2"
    >
      02
    </div>
    <div class="outline-dotted outline-2 outline-sky-400/75 ring-2 ring-sky-400/75 ring-offset-2">
      03
    </div>
    <div
      class="outline-double outline-2 outline-amber-400/75 ring-4 ring-amber-400/75 ring-offset-2"
    >
      04
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
