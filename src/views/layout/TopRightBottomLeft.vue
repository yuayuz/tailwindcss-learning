<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>TopRightBottomLeft</header-h1>
  <!-- 用于控制定位元素位置的实用程序 -->
  <!-- Pin to top left corner -->
  <p-h2
    >放置定位元素： 使用 top-*、right-*、bottom-*、left-* 和 inset-*
    实用程序设置定位元素的水平或垂直位置。
  </p-h2>
  <div
    class="mx-auto grid max-w-xl grid-cols-3 grid-rows-3 gap-3 *:aspect-square *:w-full *:bg-sky-300 *:bg-opacity-60"
  >
    <div class="relative">
      <div class="absolute left-0 top-0 h-1/3 w-1/3 content-center bg-pink-400 text-center">01</div>
    </div>

    <!-- Span top edge -->
    <div class="relative">
      <div class="absolute inset-x-0 top-0 h-16 content-center bg-pink-400 text-center">02</div>
    </div>

    <!-- Pin to top right corner -->
    <div class="relative">
      <div class="absolute right-0 top-0 h-16 w-16 content-center bg-pink-400 text-center">03</div>
    </div>

    <!-- Span left edge -->
    <div class="relative">
      <div class="absolute inset-y-0 left-0 w-16 content-center bg-pink-400 text-center">04</div>
    </div>

    <!-- Fill entire parent -->
    <div class="relative">
      <div class="absolute inset-0 content-center bg-pink-400 text-center">05</div>
    </div>

    <!-- Span right edge -->
    <div class="relative">
      <div class="absolute inset-y-0 right-0 w-16 content-center bg-pink-400 text-center">06</div>
    </div>

    <!-- Pin to bottom left corner -->
    <div class="relative">
      <div class="absolute bottom-0 left-0 h-16 w-16 content-center bg-pink-400 text-center">
        07
      </div>
    </div>

    <!-- Span bottom edge -->
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-16 content-center bg-pink-400 text-center">08</div>
    </div>

    <!-- Pin to bottom right corner -->
    <div class="relative">
      <div class="absolute bottom-0 right-0 h-16 w-16 content-center bg-pink-400 text-center">
        09
      </div>
    </div>
  </div>

  <p-h2>使用负值: 要使用负的顶部/右侧/底部/左侧值，请在类名前加上破折号以将其转换为负值</p-h2>
  <div
    class="mx-auto grid w-44 grid-cols-1 grid-rows-1 gap-3 *:aspect-square *:w-full *:bg-sky-300 *:bg-opacity-60"
  >
    <div class="relative">
      <div class="absolute -left-4 -top-4 h-1/3 w-1/3 content-center bg-pink-400 text-center">
        01
      </div>
    </div>
  </div>

  <p-h2
    >使用逻辑属性 使用 start-* 和 end-* 设置 inset-inline-start 和 inset-inline-end
    逻辑属性，它们根据文本方向映射到左侧或右侧
  </p-h2>
  <div class="flex">
    <div
      class="mx-auto grid w-44 grid-cols-1 grid-rows-1 gap-3 border shadow *:aspect-square *:w-full *:bg-sky-300 *:bg-opacity-60"
      dir="ltr"
    >
      <div class="relative">
        <div class="absolute start-0 top-0 h-1/3 w-1/3 content-center bg-pink-400 text-center">
          01
        </div>
      </div>
    </div>
    <div
      class="mx-auto grid w-44 grid-cols-1 grid-rows-1 gap-3 border shadow *:aspect-square *:w-full *:bg-sky-300 *:bg-opacity-60"
      dir="rtl"
    >
      <div class="relative">
        <div class="absolute start-0 top-0 h-1/3 w-1/3 content-center bg-pink-400 text-center">
          01
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
