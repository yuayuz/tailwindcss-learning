<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Flex Direction</header-h1>
  <!-- 用于控制弹性项目方向 -->
  <p-h2>行： 使用 flex-row 将弹性项目水平定位在与文本相同的方向</p-h2>
  <div
    class="mx-auto flex max-w-xs flex-row border shadow *:m-3 *:aspect-square *:h-12 *:content-center *:bg-pink-300 *:text-center"
  >
    <div class="basis-1/4">1</div>
    <div class="basis-1/4">2</div>
    <div class="basis-1/2">3</div>
  </div>

  <p-h2>行反转： 使用 flex-row-reverse 将弹性项目水平定位在相反的方向</p-h2>
  <div
    class="mx-auto flex max-w-xs flex-row-reverse border shadow *:m-3 *:aspect-square *:h-12 *:content-center *:bg-pink-300 *:text-center"
  >
    <div class="basis-1/4">1</div>
    <div class="basis-1/4">2</div>
    <div class="basis-1/2">3</div>
  </div>

  <p-h2>列： 使用 flex-col 垂直定位弹性项目</p-h2>
  <div
    class="mx-auto flex max-w-xs flex-col border shadow *:m-3 *:h-10 *:content-center *:bg-pink-300 *:text-center"
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <p-h2>列反转： 使用 flex-col-reverse 将弹性项目垂直定位在相反的方向</p-h2>
  <div
    class="mx-auto flex max-w-xs flex-col-reverse border shadow *:m-3 *:h-10 *:content-center *:bg-pink-300 *:text-center"
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
