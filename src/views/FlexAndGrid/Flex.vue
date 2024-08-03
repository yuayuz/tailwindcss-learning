<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Flex</header-h1>
  <!-- 用于控制弹性项目如何增大和缩小 -->
  <p-h2>Initial 允许弹性项目收缩但不能增大，同时考虑其初始大</p-h2>
  <!-- 使用 flex-initial 允许弹性项目收缩但不能增大，同时考虑其初始大小 -->
  <div class="mx-auto flex max-w-xl *:m-3 *:h-12 *:content-center *:bg-pink-400 *:text-center">
    <div class="w-12 flex-none">1</div>
    <div class="w-12 flex-initial">2</div>
    <div class="w-48 flex-initial">3</div>
  </div>
  <p-h2>Flex 1 允许弹性项目根据需要增大或缩小，忽略其初始大小</p-h2>
  <!-- 使用 flex-1 允许弹性项目根据需要增大或缩小，忽略其初始大小 -->
  <div class="mx-auto flex max-w-xl *:m-3 *:h-12 *:content-center *:bg-pink-400 *:text-center">
    <div class="w-12 flex-none">1</div>
    <div class="w-12 flex-1">2</div>
    <div class="w-48 flex-1">3</div>
  </div>
  <p-h2>Auto 允许弹性项目增大或缩小，同时考虑其初始大小</p-h2>
  <!-- 使用 flex-auto 允许弹性项目增大或缩小，同时考虑其初始大小 -->
  <div class="mx-auto flex max-w-xl *:m-3 *:h-12 *:content-center *:bg-pink-400 *:text-center">
    <div class="w-12 flex-none">1</div>
    <div class="w-12 flex-auto">2</div>
    <div class="w-48 flex-auto">3</div>
  </div>
  <p-h2>None 防止弹性项目增大或缩小</p-h2>
  <!-- 使用 flex-none 防止弹性项目增大或缩小 -->
  <div class="mx-auto flex max-w-xl *:m-3 *:h-12 *:content-center *:bg-pink-400 *:text-center">
    <div class="w-12 flex-none">1</div>
    <div class="w-12 flex-none">2</div>
    <div class="w-48 flex-none">3</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
