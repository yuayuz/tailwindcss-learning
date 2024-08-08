<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Ring Width</header-h1>
  <!-- 用于创建带有框阴影的轮廓环的实用程序 -->
  <paragraph-h2>Adding a ring</paragraph-h2>
  <!--
  使用 ring-* 实用程序将特定厚度的实心框阴影应用于元素。
  默认情况下，环为半透明的蓝色，类似于许多系统中的默认焦点环样式
  -->
  <div
    class="mx-auto mt-4 flex max-w-xs place-content-around border bg-slate-50 p-4 shadow *:aspect-square *:h-14 *:content-center *:rounded-md *:border *:border-slate-200 *:text-center *:leading-10"
  >
    <div class="outline outline-2 outline-red-400/25 ring-0 ring-offset-2">01</div>
    <div class="outline-dashed outline-2 outline-green-400/50 ring-1 ring-offset-2">02</div>
    <div class="outline-dotted outline-2 outline-sky-400/75 ring-2 ring-offset-2">03</div>
    <div class="outline-double outline-2 outline-amber-400/75 ring-4 ring-offset-2">04</div>
  </div>
  <paragraph-h2>Focus rings</paragraph-h2>
  <!-- focus:通过将环宽度实用程序添加到任何实用程序的开头，可以轻松使用自定义焦点环 ring-* -->
  <div
    class="mx-auto mt-4 flex max-w-xs place-content-around border bg-slate-50 p-4 shadow *:aspect-square *:h-14 *:content-center *:rounded-md *:border *:border-slate-200 *:text-center *:leading-10"
  >
    <button class="outline outline-2 outline-red-400/25 ring-offset-2 focus:ring-0">01</button>
    <button class="outline-dashed outline-2 outline-green-400/50 ring-offset-2 focus:ring-1">
      02
    </button>
    <button class="outline-dotted outline-2 outline-sky-400/75 ring-offset-2 focus:ring-2">
      03
    </button>
    <button class="outline-double outline-2 outline-amber-400/75 ring-offset-2 focus:ring-4">
      04
    </button>
  </div>
  <!-- 该变体 focus 默认启用 ringColor、ringOpacity、ringOffsetWidth 和 ringOffsetColor 实用程序 -->
  <paragraph-h2>Inset rings</paragraph-h2>
  <!--
  使用该 ring-inset 实用程序强制将环渲染在元素的内部而不是外部。
  这对于位于屏幕边缘的元素非常有用，因为环的一部分不可见
  -->
  <div
    class="mx-auto mt-4 flex max-w-xs place-content-around border bg-slate-50 p-4 shadow *:aspect-square *:h-14 *:content-center *:rounded-md *:border *:border-slate-200 *:text-center *:leading-10"
  >
    <div class="outline outline-2 outline-red-400/25 ring-0 ring-inset ring-offset-2">01</div>
    <div class="outline-dashed outline-2 outline-green-400/50 ring-1 ring-inset ring-offset-2">
      02
    </div>
    <div class="outline-dotted outline-2 outline-sky-400/75 ring-2 ring-inset ring-offset-2">
      03
    </div>
    <div class="outline-double outline-2 outline-amber-400/75 ring-4 ring-inset ring-offset-2">
      04
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
