<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Position</header-h1>
  <!-- 用于控制元素在 DOM 中定位方式 -->
  <p-h2
    >Statically positioning elements 使用 static 根据文档的正常流程定位元素。
    任何偏移都将被忽略，并且该元素将不会作为绝对定位子元素的位置参考
  </p-h2>
  <div class="m-5 mx-auto h-32 max-w-xl bg-slate-100">
    <div class="static h-20 bg-pink-300">
      <p>Static parent</p>
      <div class="absolute left-2 top-40 h-10 content-center bg-pink-500">
        <p>Absolute child: top-40 left-2</p>
      </div>
    </div>
  </div>
  <p-h2
    >Relatively positioning elements 使用 relative 根据文档的正常流程定位元素。
    任何偏移量都是相对于元素的正常位置计算的，并且该元素将作为绝对定位子元素的位置参考。
  </p-h2>
  <div class="m-5 mx-auto h-32 max-w-xl bg-slate-100">
    <div class="relative h-20 bg-sky-300">
      <p>Relative parent</p>
      <div class="absolute bottom-0 left-0 h-10 content-center bg-sky-500">
        <p>Absolute child: bottom-0 left-0</p>
      </div>
    </div>
  </div>
  <p-h2>
    Absolutely positioning elements 使用 absolute
    将元素定位在文档正常流之外，导致相邻元素表现得好像该元素不存在一样。 任何偏移量都是相对于具有除
    static 之外的位置的最近的父级来计算的， 并且该元素将作为其他绝对定位子级的位置参考。
  </p-h2>
  <div class="m-5 mx-auto max-w-xl bg-slate-100">
    <div class="static m-3 h-44 rounded-full bg-blue-400 bg-opacity-50 px-16">
      Static parent
      <div
        class="static mx-10 h-6 w-40 content-center rounded-full bg-blue-500 bg-opacity-60 text-center"
      >
        <p>Static child</p>
      </div>
      <div
        class="inline-block h-6 content-center rounded-full bg-blue-500 bg-opacity-60 text-center"
      >
        <p>Static sibling</p>
      </div>
      <!-- Static parent -->
      <div
        class="absolute left-2/3 h-6 content-center rounded-md bg-blue-600 bg-opacity-60 text-center"
      >
        <p>Absolute child: left-2/3</p>
      </div>
      <div
        class="inline-block h-10 content-center rounded-md bg-blue-600 bg-opacity-60 text-center"
      >
        <p>Static sibling</p>
      </div>
    </div>
  </div>
  <p-h2
    >Fixed positioning elements 使用 fixed 来定位相对于浏览器窗口的元素。
    任何偏移量都是相对于视口计算的，并且该元素将作为绝对定位子元素的位置参考
  </p-h2>
  <div class="relative mx-auto max-w-xs">
    <div class="h-64 overflow-auto">
      <div
        class="fixed left-0 right-0 top-0 h-10 w-auto content-center border bg-slate-50 bg-opacity-80 pl-1"
      >
        联系人 fixed
      </div>
      <div
        class="absolute left-0 right-0 top-0 h-10 w-auto content-center border bg-slate-50 bg-opacity-80 pl-1"
      >
        联系人 absolute
      </div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-sky-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">1</div>
      </div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-sky-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">1</div>
      </div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-sky-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">1</div>
      </div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-sky-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">1</div>
      </div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-sky-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">1</div>
      </div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-sky-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">1</div>
      </div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-sky-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">1</div>
      </div>
    </div>
  </div>

  <p-h2
    >Sticky positioning elements 使用 sticky 来定位一个元素，relative直到它超过指定的阈值，
    然后将其视为fixed直到其父元素离开屏幕。 任何偏移量都是相对于元素的正常位置计算的，
    并且该元素将作为绝对定位子元素的位置参考
  </p-h2>
  <div class="relative mx-auto h-64 max-w-xs overflow-auto">
    <div>
      <div
        class="sticky left-0 right-0 top-0 h-10 w-auto content-center border bg-slate-50 bg-opacity-80 pl-1"
      >
        联系人A sticky
      </div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-sky-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">1</div>
      </div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-sky-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">1</div>
      </div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-sky-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">1</div>
      </div>
    </div>
    <div
      class="sticky left-0 right-0 top-0 h-10 w-auto content-center border bg-slate-50 bg-opacity-80 pl-1"
    >
      联系人B sticky
    </div>
    <div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-pink-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">2</div>
      </div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-pink-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">2</div>
      </div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-pink-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">2</div>
      </div>
      <div class="flex items-center bg-white">
        <div class="aspect-square h-12 bg-pink-600"></div>
        <div class="ml-3 h-16 w-full content-center bg-white">2</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
