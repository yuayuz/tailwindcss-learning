<script setup lang="ts">
import { ref } from 'vue'

const usrName = ref('')
</script>

<template>
  <header class="flex w-full items-center justify-center">
    <h1 class="m-2 w-min bg-violet-900 p-2 text-slate-100">HoverFocusAndOtherStates</h1>
  </header>
  <!--
  使用实用程序来设置悬停、聚焦等元素的样式。
  Tailwind 中的每个实用程序类都可以通过在类名开头添加修饰符来有条件地应用，
  该修饰符描述你想要针对的条件。
  -->
  <p class="m-1 bg-violet-300 p-1">将鼠标悬浮在按钮上可以看到背景颜色变化</p>
  <button class="m-1 rounded-md bg-violet-300 p-1 hover:bg-violet-700">悬浮</button>
  <!--
  Tailwind 几乎涵盖了您需要的一切修饰符，其中包括：
  伪类，如:hover、:focus、:first-child和:required
  伪元素，如::before、::after、::placeholder和::selection
  媒体和功能查询，例如响应断点、暗模式和prefers-reduced-motion
  属性选择器，例如[dir="rtl"]和[open]
  这些修饰符甚至可以堆叠以针对更具体的情况，例如在暗模式下、在中等断点处、在悬停时更改背景颜色
  -->
  <p class="m-1 bg-violet-800 p-1 text-slate-100">Pseudo-classes</p>
  <p class="m-1 bg-violet-300 p-1">Hover, focus, and active</p>
  <button
    class="m-1 rounded-md bg-violet-300 p-1 ring-1 hover:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-200 active:bg-violet-700"
  >
    Save changes
  </button>
  <!--
  第一个、最后一个、奇数和偶数
  当元素是第一个子元素或最后一个子元素时，使用first和last修饰符设置元素的样式
  -->

  <p class="m-1 bg-violet-800 p-1 text-slate-100">表单状态</p>
  <!-- 使用诸如 required、invalid 和 disabled 之类的修饰符来设置不同状态下的表单元素的样式 -->
  <form>
    <label class="block">
      <span class="block text-sm font-medium text-slate-700">Username</span>
      <!-- Using form state modifiers, the classes can be identical for every input -->
      <input
        type="text"
        placeholder="请输入姓名"
        v-model="usrName"
        class="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
      />
    </label>
  </form>

  <p class="m-1 bg-violet-800 p-1 text-slate-100">根据父状态进行样式设置(group- {modifier} )</p>
  <!--
  当您需要根据某些父元素的状态来设置元素的样式时，
  请使用类标记父元素group，并使用group-*修饰符group-hover来设置目标元素的样式
  -->
  <a
    href="#"
    class="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-violet-500 hover:ring-sky-500"
  >
    <div class="flex items-center space-x-3">
      <h3 class="text-sm font-semibold text-slate-900 group-hover:text-white">打招呼</h3>
    </div>
    <p class="text-sm text-slate-500 group-hover:text-white">你好!!</p>
  </a>
  <!-- 此模式适用于每个伪类修饰符，例如group-focus，，group-active甚至group-odd。 -->
  <!--
  区分嵌套组
  嵌套组时，您可以根据特定父组的状态设置样式，
  方法是使用类为该父组赋予唯一的组名group/{name}，
  并使用如下类在修饰符中包含该名称group-hover/{name}
  -->

  <p class="m-1 bg-violet-800 p-1 text-slate-100">根据同级状态进行样式设置(peer- {modifier} )</p>
  <!-- 需要根据同级元素的状态来设置元素的样式时，请使用类标记同级元素peer，并使用peer-*修饰符peer-invalid来设置目标元素的样式 -->
  <form class="">
    <label>
      <span class="text-sm font-medium text-slate-500">姓名</span>
      <input
        placeholder="请输入姓名"
        v-model="usrName"
        class="peer w-full rounded-md border border-slate-300 placeholder-slate-500 focus:border-sky-300 focus:outline-none focus:ring-1 focus:ring-sky-500"
      />
      <p class="invisible text-sm font-medium text-slate-500 peer-focus:visible">已选中输入框</p>
    </label>
  </form>
  <!-- 只有之前的兄弟姐妹才能被标记为同辈 -->
  <!-- 此模式适用于每个伪类修饰符，例如peer-focus，peer-required和peer-disabled -->
  <!-- 
  区分同辈
  当使用多个对等体时，你可以在特定对等体的状态上设置某些样式，
  方法是使用类为该对等体赋予一个唯一的名称peer/{name}，
  并使用如下类在修饰符中包含该名称peer-checked/{name}
  -->

  <p class="m-1 bg-violet-300 p-1">区别同辈</p>
  <fieldset
    class="mx-auto max-w-xs rounded-lg border border-violet-600 bg-white p-6 shadow-2xl ring-1 ring-slate-900/5"
  >
    <legend>已发布状态</legend>

    <input id="draft" class="peer/draft" type="radio" name="status" checked />
    <label for="draft" class="peer-checked/draft:text-sky-500">草稿</label>

    <input id="published" class="peer/published" type="radio" name="status" />
    <label for="published" class="peer-checked/published:text-sky-500">发布</label>

    <div class="hidden peer-checked/draft:block">草稿仅管理员可见</div>
    <div class="hidden peer-checked/published:block">帖子将在您的网站上公开显示。</div>
  </fieldset>
  <!-- 
  任意同行
  您可以通过在方括号之间提供自己的选择器作为任意值来peer-*动态创建一次性修饰符 
  -->

  <!--
  设置直接子元素的样式(*- {modifier} )
  虽然通常最好将实用程序类直接放在子元素上，但是*在需要设置您无法控制的直接子元素的样式的情况下可以使用修饰符。 
  -->
  <p class="m-1 bg-violet-300 p-1">设置直接子元素样式</p>
  <div>
    <h2>Categories</h2>
    <div
      class="flex *:mx-auto *:max-w-min *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10"
    >
      <p>Sales</p>
      <p>Marketing</p>
      <p>SEO</p>
    </div>
  </div>

  <!--
  根据后代进行样式设置(has- {modifier} )
  使用has-*修饰符根据元素后代的状态或内容来设置元素的样式。 
  -->
  <p class="m-1 bg-violet-300 p-1">根据后代进行样式设置</p>
  <div
    class="lock mx-auto max-w-xs rounded-md bg-white p-6 shadow-lg ring-1 ring-slate-900/5 peer-checked/draft:block"
  >
    <p class="w-full p-2">请选择</p>
    <label
      class="has-[:checked]:bg-violet-10 p-2 has-[:checked]:text-violet-900 has-[:checked]:ring-violet-200"
      >你好!!
      <input type="radio" name="status" checked />
    </label>
    <label
      class="has-[:checked]:bg-violet-10 p-2 has-[:checked]:text-violet-900 has-[:checked]:ring-violet-200"
      >hello
      <input type="radio" name="status" />
    </label>
  </div>
  <!--
  根据组的后代进行样式设置(group-has- {modifier} )
  如果需要根据父元素的后代来设置元素的样式，
  则可以用类标记父元素group并使用group-has-*修饰符来设置目标元素的样式。
  -->

  <!--
  根据同辈的后代进行造型(peer-has- {modifier} )
  如果需要根据同级元素的后代来设置元素的样式，
  则可以用类标记同级元素peer，并使用peer-has-*修饰符来设置目标元素的样式。
  -->

  <p class="m-1 bg-violet-300 p-1">根据同辈后代进行样式设置</p>
  <div class="peer-checked mx-auto max-w-xs p-3 shadow-lg ring-1 ring-slate-900/5">
    <p class="py-3">今日计划</p>

    <div class="flex items-center space-x-20">
      <label class="peer text-base">
        <input type="checkbox" name="todo[1]" class="peer accent-pink-400" />
        <span class="peer-checked:text-slate-500 peer-checked:line-through">吃饭</span>
      </label>
      <svg
        class="h-4 peer-has-[:checked]:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </div>
    <div class="flex items-center space-x-20">
      <label class="peer text-base">
        <input type="checkbox" name="todo[1]" class="peer accent-pink-400" />
        <span class="peer-checked:text-slate-500 peer-checked:line-through">睡觉</span>
      </label>
      <svg
        class="h-4 peer-has-[:checked]:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
