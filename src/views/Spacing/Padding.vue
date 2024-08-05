<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Padding</header-h1>
  <!-- 用于控制元素填充 -->
  <p-h2>在侧边添加填充</p-h2>
  <!-- 使用 pt-*、 pr-* 、pb-* 和 pl-* 实用程序来控制元素一侧的填充 -->
  <div class="mx-auto grid h-20 max-w-xl shrink grid-cols-4 gap-5 border *:bg-pink-400">
    <div class="pt-6">
      <div class="h-12 w-12 content-center bg-violet-400 text-center">1</div>
    </div>
    <div class="flex justify-end pr-6">
      <div class="h-12 w-12 content-center bg-violet-400 text-center">2</div>
    </div>
    <div class="content-end pb-6">
      <div class="h-12 w-12 content-center bg-violet-400 text-center">3</div>
    </div>
    <div class="pl-6">
      <div class="h-12 w-12 content-center bg-violet-400 text-center">4</div>
    </div>
  </div>
  <p-h2>添加水平填充和垂直填充</p-h2>
  <!-- 使用 px-* 来控制元素的水平填充,使用 py-* 来控制元素的垂直填充 -->
  <div class="flex h-20 w-20 shrink border px-4 py-4">
    <div class="h-12 w-12 content-center bg-violet-400 text-center">01</div>
  </div>
  <p-h2>给所有边添加填充</p-h2>
  <!-- 使用 p-* 来控制元素所有边的填充 -->
  <div class="flex h-24 w-24 shrink border p-6">
    <div class="h-12 w-12 content-center bg-violet-400 text-center">02</div>
  </div>
  <p-h2>使用逻辑属性</p-h2>
  <!--
  使用 ps-* 和 pe-* 设置 padding-inline-start 和 padding-inline-end 逻辑属性，
  它们根据文本方向映射到左侧或右侧
  -->
  <div class="mx-auto my-5 flex max-w-xs shrink border">
    <div class="mx-auto flex">
      <div class="m-5">
        <div dir="ltr" class="flex h-20 w-24 shrink border py-4 ps-4">
          <div class="h-12 w-12 content-center bg-violet-400 text-center">01</div>
        </div>
        <div dir="ltr" class="flex h-20 w-24 shrink justify-end border py-4 pe-4">
          <div class="h-12 w-12 content-center bg-violet-400 text-center">01</div>
        </div>
      </div>
      <div class="m-5">
        <div dir="rtl" class="flex h-20 w-24 shrink border py-4 ps-4">
          <div class="h-12 w-12 content-center bg-sky-400 text-center">01</div>
        </div>
        <div dir="rtl" class="flex h-20 w-24 shrink justify-end border py-4 pe-4">
          <div class="h-12 w-12 content-center bg-sky-400 text-center">01</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
