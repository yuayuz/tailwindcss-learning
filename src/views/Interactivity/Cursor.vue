<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Cursor</header-h1>
  <!-- 用于控制鼠标悬停在元素上时的光标样式的实用程序 -->
  <paragraph-h2>设置光标样式</paragraph-h2>
  <!-- 使用 cursor-* 实用程序来控制将鼠标悬停在元素上时显示的光标 -->
  <div
    class="*:text-g mx-auto mt-4 flex max-w-xl place-content-evenly bg-slate-50 py-3 shadow *:px-3 *:py-2"
  >
    <button type="button" class="cursor-pointer rounded-full bg-indigo-700 text-white">
      Submit
    </button>
    <button type="button" class="cursor-progress rounded-full bg-indigo-700 text-white">
      Saving...
    </button>
    <button type="button" disabled class="cursor-not-allowed rounded-full bg-indigo-700 text-white">
      Confirm
    </button>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
