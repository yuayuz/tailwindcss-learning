<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Text Decoration Color</header-h1>
  <!-- 用于控制文本装饰颜色 -->
  <p-h2>设置文本装饰颜色</p-h2>
  <!-- 使用 decoration-* 实用程序来改变元素文本装饰的颜色。 -->
  <div class="mx-auto my-5 max-w-xl border p-4 shadow-xl">
    <p class="*:text-lg">
      I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at
      <a class="underline decoration-sky-500">My Company, Inc</a>. Outside of work, I like to
      <a class="underline decoration-pink-500">watch pod-racing</a> and have
      <a class="underline decoration-indigo-500">light-saber</a> fights.
    </p>
  </div>
  <p-h2>改变不透明度</p-h2>
  <!-- 使用颜色不透明度修饰符来控制元素文本装饰颜色的不透明度。 -->
  <div class="mx-auto my-5 max-w-xl border p-4 shadow-xl">
    <p class="*:text-lg">
      I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at
      <a class="underline decoration-sky-500/30">My Company, Inc</a>. Outside of work, I like to
      <a class="underline decoration-pink-500/30">watch pod-racing</a> and have
      <a class="underline decoration-indigo-500/30">light-saber</a> fights.
    </p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
