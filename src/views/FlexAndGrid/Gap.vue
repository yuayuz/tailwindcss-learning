<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Gap</header-h1>
  <!-- 用于控制网格和弹性框项目之间的间距 -->
  <p-h2>设置元素之间的间隙</p-h2>
  <!-- 使用 gap-* 实用程序来更改网格和弹性框布局中行和列之间的间隙 -->
  <div
    class="m-5 mx-auto grid max-w-xl shrink grid-cols-3 grid-rows-3 gap-5 border bg-slate-50 p-4 *:h-10 *:content-center *:rounded-full *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
    <div>07</div>
    <div>08</div>
    <div>09</div>
  </div>
  <p-h2>独立更改行距和列距</p-h2>
  <!-- 使用 gap-x-* 和 gap-y-* 实用程序独立更改列和行之间的间隙 -->
  <div
    class="m-5 mx-auto grid max-w-xl shrink grid-cols-3 grid-rows-3 gap-x-10 gap-y-2 border bg-slate-50 p-4 *:h-10 *:content-center *:rounded-full *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
    <div>07</div>
    <div>08</div>
    <div>09</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
