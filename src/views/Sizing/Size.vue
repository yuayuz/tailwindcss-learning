<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
</script>

<template>
  <header-h1>Size</header-h1>
  <!-- 用于同时设置元素宽度和高度 -->
  <div
    class="m-3 mx-auto flex max-w-xl items-center space-x-3 border p-4 shadow *:content-center *:rounded-md *:bg-blue-400 *:text-center"
  >
    <div class="size-16">size-16</div>
    <div class="size-20">size-20</div>
    <div class="size-24">size-24</div>
    <div class="size-32">size-32</div>
    <div class="size-40">size-40</div>
  </div>
  <!-- 百分比大小： 使用 size-full 将元素的宽度和高度设置为父容器宽度和高度的 100％。 -->
  <!--
  重置尺寸: size-auto 如果需要在特定条件下（例如在特定断点处）删除元素的指定宽度和高度，
  则该实用程序会很有用
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
