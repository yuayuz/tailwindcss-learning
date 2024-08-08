<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Ring Offset Color</header-h1>
  <!-- 用于设置轮廓环偏移颜色的实用程序 -->
  <paragraph-h2>设置环偏移颜色</paragraph-h2>
  <!--
  实际上，无法在 CSS 中偏移 box-shadow，因此我们必须使用与父背景颜色匹配的纯色阴影来伪造它
  使用 ring-offset-* 实用程序更改环偏移的颜色
  为了尝试将偏移与父背景颜色匹配，因为真正的框阴影偏移在 CSS 中实际上是不可能的
  -->
  <div
    class="mx-auto mt-4 flex max-w-xs place-content-around border bg-slate-50 p-4 shadow *:aspect-square *:h-14 *:content-center *:rounded-md *:border *:border-slate-200 *:text-center *:leading-10"
  >
    <div class="outline outline-2 outline-red-400/25 ring-0 ring-offset-0 ring-offset-slate-50">
      01
    </div>
    <div
      class="outline-dashed outline-2 outline-green-400/50 ring-1 ring-offset-1 ring-offset-slate-50"
    >
      02
    </div>
    <div
      class="outline-dotted outline-2 outline-sky-400/75 ring-2 ring-offset-2 ring-offset-slate-50"
    >
      03
    </div>
    <div
      class="outline-double outline-2 outline-amber-400/75 ring-4 ring-offset-4 ring-offset-slate-50"
    >
      04
    </div>
  </div>
  <!-- 改变不透明度：使用颜色不透明度修改器来控制元素环偏移颜色的不透明度 -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
