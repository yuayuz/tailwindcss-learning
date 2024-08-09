<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Transition Timing Function</header-h1>
  <!-- 用于控制 CSS 过渡缓和的实用程序 -->
  <paragraph-h2>Controlling the easing curve</paragraph-h2>
  <!-- 使用 ease-* 实用程序来控制元素的缓和曲线 -->
  <div class="mx-auto flex max-w-xl place-content-around border py-3 shadow">
    <div>
      <p class="text-center">缓入</p>
      <button
        class="rounded-full bg-sky-500 px-3 py-1 text-white transition duration-300 ease-in hover:scale-125"
      >
        Button A
      </button>
    </div>
    <div>
      <p class="text-center">缓出</p>
      <button
        class="rounded-full bg-sky-500 px-3 py-1 text-white transition duration-300 ease-out hover:scale-125"
      >
        Button B
      </button>
    </div>
    <div>
      <p class="text-center">缓入缓出</p>
      <button
        class="rounded-full bg-sky-500 px-3 py-1 text-white transition duration-300 ease-in-out hover:scale-125"
      >
        Button C
      </button>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
