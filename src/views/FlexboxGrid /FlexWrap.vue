<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Flex Wrap</header-h1>
  <!-- 用于控制弹性项目如何换行 -->
  <p-h2>不要弹性项目包装</p-h2>
  <!-- 使用 flex-nowrap 防止弹性项目包装，必要时导致不弹性的项目溢出容器 -->
  <div class="mx-auto flex max-w-xl flex-nowrap overflow-auto *:m-3">
    <div class="aspect-video h-28 content-center bg-sky-600 text-center">1</div>
    <div class="aspect-video h-28 content-center bg-sky-600 text-center">2</div>
    <div class="aspect-video h-28 content-center bg-sky-600 text-center">3</div>
  </div>
  <p-h2>正常换行</p-h2>
  <!--使用 flex-wrap 允许弹性项目换行-->
  <div class="mx-auto flex max-w-xl flex-wrap overflow-auto *:m-3">
    <div class="aspect-video h-28 content-center bg-sky-600 text-center">1</div>
    <div class="aspect-video h-28 content-center bg-sky-600 text-center">2</div>
    <div class="aspect-video h-28 content-center bg-sky-600 text-center">3</div>
  </div>

  <p-h2>反向包装</p-h2>
  <!-- 使用 flex-wrap-reverse 以相反方向包装弹性项目 -->
  <div class="mx-auto flex max-w-xl flex-wrap-reverse overflow-auto *:m-3">
    <div class="aspect-video h-28 content-center bg-sky-600 text-center">1</div>
    <div class="aspect-video h-28 content-center bg-sky-600 text-center">2</div>
    <div class="aspect-video h-28 content-center bg-sky-600 text-center">3</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
