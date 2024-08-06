<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Align Content</header-h1>
  <!-- 用于控制行在多行弹性容器和网格容器中的位置 -->
  <p-h2>Start</p-h2>
  <!-- 使用 content-start将行打包到容器中，以抵住交叉轴的起点 -->
  <div
    class="m-3 mx-auto grid h-64 max-w-xl shrink grid-cols-3 content-start gap-4 border *:m-3 *:h-10 *:content-center *:rounded-full *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
  </div>
  <p-h2>Center</p-h2>
  <!-- 使用 content-center将行打包到交叉轴中心的容器中 -->
  <div
    class="m-3 mx-auto grid h-64 max-w-xl shrink grid-cols-3 content-center gap-4 border *:m-3 *:h-10 *:content-center *:rounded-full *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
  </div>
  <p-h2>End</p-h2>
  <!-- 使用 content-end 将行打包到容器中，靠着横轴的末端 -->
  <div
    class="m-3 mx-auto grid h-64 max-w-xl shrink grid-cols-3 content-end gap-4 border *:m-3 *:h-10 *:content-center *:rounded-full *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
  </div>
  <p-h2>Space Between</p-h2>
  <!-- 使用 content-between 分配容器中的行，使得每行之间有相等的空间 -->
  <div
    class="m-3 mx-auto grid h-64 max-w-xl shrink grid-cols-3 content-between gap-4 border *:m-3 *:h-10 *:content-center *:rounded-full *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
  </div>
  <p-h2>Space around</p-h2>
  <!-- 使用 content-around 分布容器中的行，使得每行周围有相等的空间 -->
  <div
    class="m-3 mx-auto grid h-64 max-w-xl shrink grid-cols-3 content-around gap-4 border *:m-3 *:h-10 *:content-center *:rounded-full *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
  </div>
  <p-h2>Space evenly</p-h2>
  <!--
  使用 content-evenly 分配容器中的行，使得每个项目周围有相等的空间，
  但也考虑到使用 content-around 时每个项目之间通常看到的空间加倍
  -->
  <div
    class="m-3 mx-auto grid h-64 max-w-xl shrink grid-cols-3 content-evenly gap-4 border *:m-3 *:h-10 *:content-center *:rounded-full *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
  </div>
  <p-h2>Stretch</p-h2>
  <!-- 使用 content-stretch 允许内容项填充容器横轴上的可用空间 -->
  <div
    class="m-3 mx-auto grid h-64 max-w-xl shrink grid-cols-3 content-stretch gap-4 border *:m-3 *:content-center *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
  </div>
  <p-h2>Normal</p-h2>
  <!--  content-normal 将内容项打包在其默认位置，就好像 align-content 未设置任何值一样 -->
  <div
    class="m-3 mx-auto grid h-64 max-w-xl shrink grid-cols-3 content-normal gap-4 border *:m-3 *:h-10 *:content-center *:rounded-full *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
