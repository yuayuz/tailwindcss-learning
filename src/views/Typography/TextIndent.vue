<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Text Indent</header-h1>
  <!-- 用于控制块中文本前显示的空白空间量 -->
  <paragraph-h2>添加文本缩进</paragraph-h2>
  <!-- 使用 indent-* 实用程序设置块中文本前显示的空白空间（缩进）量 -->
  <div class="mx-auto my-5 max-w-xl border p-4 shadow">
    <p class="indent-8 *:text-lg">
      So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed
      on, and as I made my way past the breakers a strange calm came over me. I don't know if it was
      divine intervention or the kinship of all living things but I tell you Jerry at that moment, I
      <em>was</em> a marine biologist.
    </p>
  </div>
  <paragraph-h2>使用负值</paragraph-h2>
  <!-- 要使用负的文本缩进值，请在类名前加上破折号以将其转换为负值 -->
  <div class="mx-auto my-5 max-w-xl border p-4 shadow">
    <p class="-indent-8 *:text-lg">
      So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed
      on, and as I made my way past the breakers a strange calm came over me. I don't know if it was
      divine intervention or the kinship of all living things but I tell you Jerry at that moment, I
      <em>was</em> a marine biologist.
    </p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
