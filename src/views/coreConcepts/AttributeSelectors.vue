<script setup lang="ts"></script>

<template>
  <header class="flex w-full items-center justify-center">
    <h1 class="m-2 w-min bg-violet-900 p-2 text-slate-100">MediaAndFeatureQueries</h1>
  </header>

  <p class="m-1 bg-violet-300 p-1">使用aria-*修饰符根据ARIA 属性有条件地设置样式</p>
  <!-- ARIA 状态: 使用aria-*修饰符根据ARIA 属性有条件地设置样式 -->
  <!-- bg-sky-700当aria-checked属性设置为时应用类true，请使用该类aria-checked:bg-sky-700 -->
  <div aria-checked="true" class="bg-gray-600 aria-checked:bg-pink-400">
    <p class="m-1 p-1">bg-pink-400</p>
  </div>

  <p class="m-1 bg-violet-300 p-1">使用data-*修饰符根据数据属性有条件地应用样式</p>
  <!-- 数据属性: 使用data-*修饰符根据数据属性有条件地应用样式 -->
  <!-- Will apply -->
  <div data-size="large" class="data-[size=large]:bg-pink-500">
    <p class="m-1 p-1">large</p>
  </div>

  <!-- Will not apply -->
  <div data-size="medium" class="data-[size=large]:bg-pink-500">
    <p class="m-1 p-1">medium</p>
  </div>
  <!--
  RTL 支持: 在构建多方向布局时，
  使用rtl和ltr修饰符分别有条件地以从右到左和从左到右模式添加样式
  -->
  <p class="m-1 bg-violet-300 p-1">
    在构建多方向布局时， 使用rtl和ltr修饰符分别有条件地以从右到左和从左到右模式添加样式
  </p>
  <div class="mx-auto mt-4 flex max-w-3xl justify-items-center">
    <div dir="ltr" class="shadow-2 mx-auto max-w-xs border pl-2 pr-16">
      <p>从左到右</p>
      <div class="flex">
        <p class="h-10 w-10 bg-pink-400"></p>
        <div class="ml-3">
          <p class="text-2 font-medium text-slate-300 hover:text-black group-hover:text-white">
            小红
          </p>
          <p class="text-2 font-medium text-slate-500 group-hover:text-slate-300">女</p>
        </div>
      </div>
    </div>
    <div dir="rtl" class="shadow-2 mx-auto max-w-xs border bg-white pl-16 pr-2">
      <p>从右到左</p>
      <div class="flex">
        <p class="h-10 w-10 bg-sky-400"></p>
        <div class="ml-3 mr-3">
          <p class="text-2 font-medium text-slate-300 hover:text-black group-hover:text-white">
            小明
          </p>
          <p class="text-2 font-medium text-slate-500 group-hover:text-slate-300">男</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 开启/关闭状态: 当 <details>或<dialog> 元素处于打开状态时，使用open修饰符有条件地添加样式：-->
  <p class="m-1 bg-violet-300 p-1">
    当 details 或 dialog 元素处于打开状态时，使用open修饰符有条件地添加样式
  </p>
  <div class="mx-auto max-w-lg p-8">
    <details
      class="rounded-lg p-6 open:bg-white open:shadow-lg open:ring-1 open:ring-black/5 dark:bg-slate-900 dark:ring-white/10 dark:open:bg-slate-900 dark:open:ring-white/10"
      open
    >
      <summary class="select-none text-sm font-semibold leading-6 text-slate-900 dark:text-white">
        点击查看
      </summary>
      <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        <p>hello,world!!</p>
      </div>
    </details>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
