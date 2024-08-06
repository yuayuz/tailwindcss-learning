<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Display</header-h1>
  <p-h2>块和内联</p-h2>
  <div class="mx-auto my-10 max-w-xl border p-6 shadow">
    控制文本流时，使用 CSS 属性
    <span class="inline bg-sky-400">display:inline</span>
    将导致元素内的文本正常换行。 使用属性
    <span class="inline-block bg-pink-400">display:inline-block</span>
    将包裹元素，以防止内部文本超出其父元素。 最后使用属性
    <span class="block bg-violet-400">display:block</span>
    将会把元素放在它自己的行上并填充其父级。
  </div>

  <p-h2>Flow Root: 使用 flow-root 实用程序创建具有其自己的块格式化上下文的块级元素。</p-h2>
  <div class="mx-auto my-10 max-w-xl border p-6 shadow">
    <div class="mx-auto my-10 flow-root max-w-xs bg-sky-400 py-6">1</div>
    <div class="mx-auto my-10 flow-root max-w-xs bg-pink-400 py-6">2</div>
  </div>

  <p-h2>flex: 使用flex实用程序创建块级弹性容器。</p-h2>
  <div class="shadow-2 mx-auto my-5 flex max-w-52 border p-6">
    <div class="aspect-square w-10 bg-pink-400"></div>
    <div class="px-5">
      <div>小红</div>
      <div>女</div>
    </div>
  </div>

  <p-h2> 内联弹性: 使用 inline-flex 实用程序创建随文本流动的内联弹性容器</p-h2>
  <div class="mx-auto my-5 flex max-w-xs items-center border p-6">
    你好,
    <div class="shadow-2 mx-auto my-5 flex max-w-52 border p-6">
      <div class="aspect-square w-10 bg-pink-400"></div>
      <div class="px-5">
        <div>小红</div>
        <div>女</div>
      </div>
    </div>
  </div>

  <p-h2>网格: 使用 grid 实用程序创建网格容器</p-h2>
  <div class="mx-auto grid max-w-xl grid-cols-4 grid-rows-2 gap-4 *:h-24 *:w-auto *:bg-green-400">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <!--
    使用 hidden 实用程序设置元素 display: none
    并将其从页面布局中删除（与 invisible 可见性文档进行比较）
    -->
    <div class="hidden"></div>
  </div>
  <p-h2>内联网格: 使用 inline-grid 实用程序创建内联网格容器。</p-h2>
  <div class="mx-auto flex max-w-xl justify-center">
    <div
      class="inline-grid grid-cols-3 gap-4 *:h-16 *:w-24 *:content-center *:bg-sky-400 *:text-center"
    >
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
      <div>05</div>
      <div>06</div>
    </div>
  </div>

  <p-h2
    >Contents: 使用 contents 实用程序创建一个“幻影”容器，其子容器就像父容器的直接子容器一样。
  </p-h2>
  <div class="flex gap-2 *:bg-amber-500">
    <div class="flex-1">01</div>
    <div class="contents *:bg-emerald-500">
      <div class="flex-1">02</div>
      <div class="flex-1">03</div>
    </div>
    <div class="flex-1">04</div>
  </div>

  <p-h2>table</p-h2>
  <!--
  使用table、table-row、table-cell、table-caption、table-column、
  table-column-group、table-header-group、table-row-group 和
  table-footer-group 用程序来创建行为类似于其各自表元素的元素
  -->
  <div class="mx-auto table border p-6 shadow">
    <div class="table-header-group">
      <div class="table-row gap-5 *:bg-sky-400 *:p-4">
        <div class="table-cell text-left">A</div>
        <div class="table-cell text-left">B</div>
        <div class="table-cell text-left">C</div>
      </div>
    </div>
    <div class="table-row-group *:bg-amber-500 *:p-4">
      <div class="table-cell">a</div>
      <div class="table-cell">b</div>
      <div class="table-cell">c</div>
    </div>
    <div class="table-row-group *:bg-pink-400 *:p-4">
      <div class="table-cell">1</div>
      <div class="table-cell">2</div>
      <div class="table-cell">3</div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
