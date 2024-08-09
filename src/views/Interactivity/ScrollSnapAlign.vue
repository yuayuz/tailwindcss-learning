<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Scroll Snap Align</header-h1>
  <!-- 用于控制元素的滚动捕捉对齐的实用程序 -->
  <paragraph-h2>捕捉到中心</paragraph-h2>
  <!-- 当在捕捉容器内滚动时，使用该 snap-center 实用程序将元素捕捉到其中心 -->
  <div
    class="not-prose relative mx-auto max-w-xl overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25"
  >
    <div
      class="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
      style="background-position: 10px 10px"
    ></div>
    <div class="relative overflow-auto rounded-xl">
      <div class="relative">
        <!-- Snap Point -->
        <div class="mb-6 ml-[50%] flex items-end justify-start pt-10">
          <div
            class="dark:highlight-white/10 ml-2 rounded bg-indigo-50 px-1.5 font-mono text-[0.625rem] leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600 dark:bg-indigo-500 dark:text-white dark:ring-0"
          >
            <font style="vertical-align: inherit"
              ><font style="vertical-align: inherit">捕捉点</font></font
            >
          </div>
          <div class="absolute bottom-0 left-1/2 top-0 border-l border-indigo-500"></div>
        </div>
        <!-- Contents -->
        <div class="relative flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-14">
          <div class="shrink-0 snap-center">
            <div class="w-4 shrink-0 sm:w-48"></div>
          </div>
          <div class="shrink-0 snap-center">
            <img
              class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
              src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
            />
          </div>
          <div class="shrink-0 snap-center">
            <img
              class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
              src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
            />
          </div>
          <div class="shrink-0 snap-center">
            <img
              class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
              src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
            />
          </div>
          <div class="shrink-0 snap-center">
            <img
              class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
            />
          </div>
          <div class="shrink-0 snap-center">
            <img
              class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
              src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
            />
          </div>
          <div class="shrink-0 snap-center">
            <img
              class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
              src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
            />
          </div>
          <div class="shrink-0 snap-center">
            <div class="w-4 shrink-0 sm:w-48"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"
    ></div>
  </div>
  <!-- 回到起点: 当元素在捕捉容器内滚动时，使用该snap-start实用程序将元素捕捉到其开始位置。 -->
  <!-- 快进到最后：当元素在捕捉容器内滚动时，使用该snap-end实用程序将元素捕捉到其末尾 -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
