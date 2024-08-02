<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>PseudoElements</header-h1>
  <!-- 使用"before"和"after"修饰符来设置"::before"和"::after"伪元素的样式 -->
  <p-h2> 使用"before"和"after"修饰符来设置"::before"和"::after"伪元素的样式 </p-h2>
  <label class="mx-auto block max-w-xl">
    <span
      class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
    >
      Email
    </span>
    <!-- 占位符文本: 使用修饰符为任何输入或文本区域的占位符文本设置样式 placeholder -->
    <input
      type="email"
      name="email"
      class="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
      placeholder="you@example.com"
    />
  </label>
  <!-- 当使用这些修饰符时，Tailwind 会自动content: ''默认添加，因此您不必指定它，除非您想要不同的值 -->
  <blockquote class="text-center text-2xl font-semibold italic text-slate-900">
    When you look
    <span
      class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500"
    >
      <span class="relative text-white">annoyed</span>
    </span>
    all the time, people think that you're busy.
  </blockquote>
  <!-- 
  值得注意的是，在 Tailwind 项目中，大多数情况下并不需要伪::before元素::after
  —— 使用真正的 HTML 元素通常更简单。
  例如，这里是与上面相同的设计，但使用伪元素<span>代替::before，
  这样更容易阅读，而且代码实际上更少
  -->
  <blockquote class="text-center text-2xl font-semibold italic text-slate-900">
    When you look
    <span class="relative">
      <span class="absolute -inset-1 block -skew-y-3 bg-pink-500" aria-hidden="true"></span>
      <span class="relative text-white">annoyed</span>
    </span>
    all the time, people think that you're busy.
  </blockquote>
  <!-- before 和 after 用于伪元素的内容,实际上不在 DOM 中且用户无法选择 -->

  <!-- 文件输入按钮: 使用修饰符 file 来设置文件输入中的按钮样式 -->
  <p-h2>使用修饰符 file 来设置文件输入中的按钮样式</p-h2>
  <form class="mx-auto flex max-w-xs items-center space-x-6 shadow-md">
    <div class="shrink-0">
      <img
        class="h-16 w-16 rounded-full object-cover"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
        alt="Current profile photo"
      />
    </div>
    <label class="block">
      <span class="sr-only">Choose profile photo</span>
      <!-- Tailwind 的边框重置不适用于文件输入按钮。这意味着要为文件输入按钮添加边框，需要使用类明确设置边框样式，file:border-solid就像任何边框宽度实用程序一样 -->
      <input
        type="file"
        class="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border file:border-sky-300 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
      />
    </label>
  </form>

  <!-- 列表标记: 使用修饰符 marker 来设置列表中的计数器或项目符号的样式 -->
  <p-h2>使用修饰符 marker 来设置列表中的计数器或项目符号的样式</p-h2>
  <div>
    <p class="m-1 p-1 text-pink-400">今日计划</p>
    <!-- 将marker修饰符设计为可继承的，因此虽然可以直接在元素上使用它<li>，但也可以将其用于父元素，以避免重复 -->
    <ul role="list" class="list-disc space-y-3 pl-5 text-slate-500 marker:text-violet-400">
      <li>吃饭</li>
      <li>学习</li>
      <li>睡觉</li>
    </ul>
  </div>

  <!-- 突出显示的文本: 使用修饰符 selection 设置活动文本选择的样式 -->
  <p-h2>使用修饰符 selection 设置活动文本选择的样式</p-h2>
  <!-- selection修饰符设计为可继承的，因此可以将其添加到树中的任何位置，并且它将应用于所有后代元素。 -->
  <div class="mx-auto max-w-xl selection:bg-pink-300 selection:text-slate-50">
    <p>
      如果在这个世界上必须有苦难存在，那就让它存在吧。但总应该留下一线光明。
      至少留下一点希望的闪光，以促使人类中较高尚的部分，怀着希望，不停地奋斗，以减轻这种苦难。
    </p>
  </div>
  <!--
  首行和首字母: 使用修饰符 first-line 为内容块的第一行设置样式，
  并使用修饰符 first-letter 为第一个字母设置样式
  -->
  <p-h2>
    使用修饰符 first-line 为内容块的第一行设置样式， 并使用修饰符 first-letter 为第一个字母设置样式
  </p-h2>
  <p class="mx-auto max-w-xl first-letter:text-7xl first-line:text-pink-400">
    谁没倒霉过呢？没人会一直顺利，每个人都曾咬着牙撑过低谷期，只跟最亲近的几个人诉说崩溃大哭，
    外人看到的还是春风满面事事称心。只有你成功时，你才可以坦然谈论失败，
    而且失败会成为成功的一部分。愿你更加强大，然后终于有一天，
    可以笑着讲述那些曾经让你哭的瞬间，那时你应该是真正放下了。
  </p>

  <!-- 对话框: 使用修饰符 backdrop 来设置原生<dialog>元素的背景样式 -->
  <p-h2> 使用修饰符 backdrop 来设置原生 dialog 元素的背景样式(样式未渲染) </p-h2>
  <dialog class="backdrop:bg-violet-500" open>
    <form method="dialog">你好!!!</form>
  </dialog>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
