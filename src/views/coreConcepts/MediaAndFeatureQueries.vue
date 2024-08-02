<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>MediaAndFeatureQueries</header-h1>
  <!-- 响应断点: 要在特定断点处设置元素的样式，请使用响应式修饰符，如 md 和 lg -->
  <!-- 这将在移动设备上呈现 3 列网格，在中等宽度屏幕上呈现 4 列网格，在大宽度屏幕上呈现 6 列网格： -->

  <p-h2>
    在移动设备上呈现 3 列网格，在中等宽度屏幕上呈现 4 列网格，在大宽度屏幕上呈现 6 列网格
  </p-h2>
  <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
    <p class="bg-amber-500">1</p>
    <p class="bg-blue-500">2</p>
    <p class="bg-cyan-500">3</p>
    <p class="bg-emerald-500">4</p>
    <p class="bg-fuchsia-500">5</p>
    <p class="bg-gray-500">6</p>
  </div>

  <!--
  配色方案: 媒体 prefers-color-scheme 查询会告诉您用户选择浅色主题还是深色主题，
  并且通常在操作系统级别进行配置
  -->
  <!-- 使用没有修饰符的实用程序来定位亮模式，并使用 dark 修饰符为暗模式提供覆盖 -->
  <div
    class="mt-5 rounded-lg bg-white px-6 py-3 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-900"
  >
    <h3 class="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">
      暗黑模式
    </h3>
    <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
      使用没有修饰符的实用程序来定位亮模式，并使用 dark 修饰符为暗模式提供覆盖
    </p>
  </div>

  <!-- 视口方向: 当视口处于特定方向时，使用 portrait 和 landscape 修饰符有条件地添加样式 -->
  <p-h2>此体验设计为横向浏览。请旋转您的 设备以查看网站。</p-h2>
  <div>
    <div class="portrait:hidden"></div>
    <div class="landscape:hidden">
      <p>此体验设计为横向浏览。请旋转您的 设备以查看网站。</p>
    </div>
  </div>

  <!-- 打印样式: 使用 print 修饰符有条件地添加仅在打印文档时适用的样式 -->
  <p-h2>使用 print 修饰符有条件地添加仅在打印文档时适用的样式</p-h2>
  <div>
    <article class="print:hidden">
      <h1>你好!!</h1>
      <p>hello</p>
    </article>
    <div class="hidden print:block">Are you seriously trying to print this? It's secret!</div>
  </div>

  <!-- 支持规则: 根据用户浏览器是否支持某个功能，使用 supports-[...] 修饰符来设置样式。 -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
