<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <head>
    <title>ResponsiveDesign</title>
    <!-- 确保将 viewport meta tag 已被加入文档的 <head> 中  -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <header-h1>ResponsiveDesign</header-h1>
  <!-- 使用响应式实用程序变体来构建自适应用户界面 -->
  <!--
  Tailwind 中的每个实用程序类都可以在不同的断点有条件地应用，
  这使得构建复杂的响应式界面变得轻而易举，而无需离开 HTML
  -->
  <p-h2>使用响应式实用程序变体来构建自适应用户界面</p-h2>
  <!--
  要添加一个实用程序，但只让它在某个断点生效，
  需要做的就是在实用程序前面加上断点名称，后跟字符':'
  -->
  <!--
  断点前缀	最小宽度	 CSS
  sm	    640像素	 @media (min-width: 640px) { ... }
  md	    768像素	 @media (min-width: 768px) { ... }
  lg	    1024像素	 @media (min-width: 1024px) { ... }
  xl	    1280像素	 @media (min-width: 1280px) { ... }
  2xl	    1536像素	 @media (min-width: 1536px) { ... }
  -->
  <div class="bg-pink-400 sm:w-11/12 lg:w-1/3 2xl:w-2/4">640px:11/12 1024px:1/3 1535px:1/2</div>

  <!-- 移动优先: 默认情况下，Tailwind 使用移动优先断点系统 -->
  <!--
  这意味着不带前缀的实用程序（如uppercase）在所有屏幕尺寸上都会生效，
  而带前缀的实用程序仅在指定的断点(如 md:uppercase) 及以上生效
  -->

  <!-- 定位断点范围: 默认情况下，规则所应用的样式 md:flex 将应用于该断点，并在更大的断点保持应用 -->
  <!--
  如果只想在特定断点范围处于活动状态时应用实用程序，
  请将响应式修饰符 md 与 max-* 修饰符堆叠在一起，以将该样式限制在特定范围内
   -->
  <p-h2>在 768px 和 1280px 之间采用弹性布局</p-h2>
  <div class="md:max-xl:flex">
    <p class="m-1 p-1">你好,</p>
    <p class="m-1 p-1">世界!</p>
  </div>
  <!--
  修饰符	  媒体查询
  max-sm	@media not all and (min-width: 640px) { ... }
  max-md	@media not all and (min-width: 768px) { ... }
  max-lg	@media not all and (min-width: 1024px) { ... }
  max-xl	@media not all and (min-width: 1280px) { ... }
  max-2xl	@media not all and (min-width: 1536px) { ... }
  -->

  <!--
  针对单个断点: 要定位单个断点，
  请通过将响应式修饰符 md 与 max-* 下一个断点的修饰符堆叠在一起来定位该断点的范围
  -->

  <!-- 需要使用没有意义的一次性断点包含在主题中，可以使用min或max修饰符以任意值动态生成自定义断点 -->
  <div class="bg-sky-400 min-[600px]:bg-pink-400 min-[1000px]:bg-violet-400">1</div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
