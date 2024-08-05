<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Margin</header-h1>
  <!-- 用于控制元素边距 -->
  <p-h2>在单侧添加边距</p-h2>
  <!-- 使用 mt-*、mr-*、mb-* 和 ml-* 来控制元素一侧的边距 -->
  <div class="mx-auto grid h-40 w-40 shrink grid-cols-2 gap-3 border">
    <div class="flex shrink border bg-green-400">
      <div class="mt-6 h-12 w-12 bg-pink-400"></div>
    </div>
    <div class="flex shrink justify-end border bg-green-400">
      <div class="mr-6 h-12 w-12 bg-pink-400"></div>
    </div>
    <div class="flex shrink content-end border bg-green-400">
      <div class="mb-6 h-12 w-12 bg-pink-400"></div>
    </div>
    <div class="flex shrink border bg-green-400">
      <div class="ml-6 h-12 w-12 bg-pink-400"></div>
    </div>
  </div>
  <p-h2>添加水平和垂直间距</p-h2>
  <!-- 使用 mx-* 来控制元素的水平边距,使用 my-* 来控制元素的垂直边距 -->
  <div class="flex h-20 w-20 shrink border">
    <div class="mx-4 my-4 h-12 w-12 content-center bg-violet-400 text-center">01</div>
  </div>
  <p-h2>给所有边添加边距</p-h2>
  <!-- 使用 m-* 来控制元素四周的边距 -->
  <div class="flex h-24 w-24 shrink border">
    <div class="m-6 h-12 w-12 content-center bg-violet-400 text-center">02</div>
  </div>
  <p-h2>使用负值</p-h2>
  <!-- 要使用负边距值，请在类名前加上破折号以将其转换为负值 -->
  <div class="m-12 flex h-24 w-24 shrink items-center justify-center border">
    <div class="-mb-24 h-12 w-12 content-center bg-violet-400 text-center">02</div>
  </div>
  <p-h2>使用逻辑属性</p-h2>
  <!--
   使用 ms-* 和 me-* 设置 margin-inline-start 和 margin-inline-end 逻辑属性，
   它们根据文本方向映射到左侧或右侧
  -->
  <div class="mx-auto my-5 flex max-w-xs shrink border">
    <div class="mx-auto flex">
      <div class="m-5">
        <div dir="ltr" class="flex h-20 w-24 shrink border">
          <div class="my-4 ms-4 h-12 w-12 content-center bg-violet-400 text-center">01</div>
        </div>
        <div dir="ltr" class="flex h-20 w-24 shrink justify-end border">
          <div class="my-4 me-4 h-12 w-12 content-center bg-violet-400 text-center">01</div>
        </div>
      </div>
      <div class="m-5">
        <div dir="rtl" class="flex h-20 w-24 shrink border">
          <div class="my-4 ms-4 h-12 w-12 content-center bg-sky-400 text-center">01</div>
        </div>
        <div dir="rtl" class="flex h-20 w-24 shrink justify-end border">
          <div class="my-4 me-4 h-12 w-12 content-center bg-sky-400 text-center">01</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
