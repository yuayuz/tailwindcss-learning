<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Object Fit</header-h1>
  <!-- 用于控制如何调整替换元素内容大小的实用程序 -->
  <p-h2>使用 object-cover 调整元素内容的大小以覆盖其容器</p-h2>
  <div class="mx-auto aspect-square max-w-xs border bg-pink-400 shadow">
    <img class="h-48 w-96 border border-black object-cover" src="@/assets/photo.avif" alt="photo" />
  </div>
  <p-h2>使用 object-contain 调整元素内容的大小以使其保持在容器内</p-h2>
  <div class="mx-auto aspect-square max-w-xs border bg-violet-400 shadow">
    <img
      class="h-48 w-96 border border-black object-contain"
      src="@/assets/photo.avif"
      alt="photo"
    />
  </div>
  <p-h2>使用 object-fill 拉伸元素的内容以适合其容器</p-h2>
  <div class="mx-auto aspect-square max-w-xs border bg-sky-400 shadow">
    <img class="h-48 w-96 border border-black object-fill" src="@/assets/photo.avif" alt="photo" />
  </div>
  <p-h2
    >使用 object-scale-down
    以元素的原始大小显示其内容，但如果有必要，可以缩小其大小以适合其容器</p-h2
  >
  <div class="mx-auto aspect-square max-w-xs border bg-green-400 shadow">
    <img
      class="h-48 w-96 border border-black object-scale-down"
      src="@/assets/photo.avif"
      alt="photo"
    />
  </div>
  <p-h2>使用 object-none 以元素的原始大小显示其内容，而忽略容器大小</p-h2>
  <div class="mx-auto aspect-square max-w-xs border bg-yellow-400 shadow">
    <img
      class="h-48 w-96 border border-black bg-sky-600 object-none"
      src="@/assets/photo.avif"
      alt="photo"
    />
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
