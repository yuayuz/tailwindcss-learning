<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Transition Delay</header-h1>
  <!-- 用于控制 CSS 转换延迟的实用程序 -->
  <paragraph-h2>延迟过渡</paragraph-h2>
  <!-- 使用 delay-* 实用程序来控制元素的转换延迟 -->
  <div class="mx-auto flex max-w-xl place-content-around border py-3 shadow">
    <div>
      <p class="text-center">delay-150</p>
      <button
        class="rounded-full bg-sky-500 px-3 py-1 text-white transition delay-150 duration-300 ease-in-out hover:scale-125"
      >
        Button A
      </button>
    </div>
    <div>
      <p class="text-center">delay-300</p>
      <button
        class="rounded-full bg-sky-500 px-3 py-1 text-white transition delay-300 duration-300 ease-in-out hover:scale-125"
      >
        Button B
      </button>
    </div>
    <div>
      <p class="text-center">delay-700</p>
      <button
        class="rounded-full bg-sky-500 px-3 py-1 text-white transition delay-700 duration-300 ease-in-out hover:scale-125"
      >
        Button C
      </button>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
