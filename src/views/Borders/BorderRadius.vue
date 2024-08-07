<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Border Radius</header-h1>
  <!-- 用于控制元素边框半径的实用程序 -->
  <paragraph-h2>圆角</paragraph-h2>
  <!-- 使用 rounded-sm、rounded 或 rounded-lg 等实用程序将不同的边框半径大小应用于元素 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border p-4 shadow *:space-y-3"
  >
    <div>
      <p>rounded</p>
      <div class="aspect-square h-14 rounded bg-sky-600"></div>
    </div>
    <div>
      <p>rounded-md</p>
      <div class="aspect-square h-14 rounded-md bg-sky-600"></div>
    </div>
    <div>
      <p>rounded-lg</p>
      <div class="aspect-square h-14 rounded-lg bg-sky-600"></div>
    </div>
    <div>
      <p>rounded-full</p>
      <div class="aspect-square h-14 rounded-full bg-sky-600"></div>
    </div>
  </div>
  <paragraph-h2>药丸按钮</paragraph-h2>
  <!-- 使用 rounded-full 实用程序创建药丸按钮 -->
  <button class="my-2 rounded-full bg-pink-400">药丸按钮</button>
  <paragraph-h2>No rounding</paragraph-h2>
  <!-- 使用 rounded-none 从元素中删除现有的边框半径 -->
  <button class="my-2 rounded-none bg-pink-400">药丸按钮</button>
  <paragraph-h2>分别对边进行圆角处理</paragraph-h2>
  <!-- 使用 rounded-t-*、rounded-r-*、rounded-b-* 和 rounded-l-* 实用程序仅对元素的一侧进行圆化 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border p-4 shadow *:space-y-3"
  >
    <div>
      <p>rounded</p>
      <div class="aspect-square h-14 rounded-t-lg bg-sky-600"></div>
    </div>
    <div>
      <p>rounded-md</p>
      <div class="aspect-square h-14 rounded-r-lg bg-sky-600"></div>
    </div>
    <div>
      <p>rounded-lg</p>
      <div class="aspect-square h-14 rounded-b-lg bg-sky-600"></div>
    </div>
    <div>
      <p>rounded-full</p>
      <div class="aspect-square h-14 rounded-l-lg bg-sky-600"></div>
    </div>
  </div>
  <paragraph-h2>分别对角线进行圆角处理</paragraph-h2>
  <!-- 使用 rounded-tl-*、rounded-tr-*、rounded-br-* 和 rounded-bl-* 实用程序仅将元素的一个角弄圆 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border p-4 shadow *:space-y-3"
  >
    <div>
      <div class="aspect-square h-14 rounded-tl-lg bg-sky-600"></div>
    </div>
    <div>
      <div class="aspect-square h-14 rounded-tr-lg bg-sky-600"></div>
    </div>
    <div>
      <div class="aspect-square h-14 rounded-br-lg bg-sky-600"></div>
    </div>
    <div>
      <div class="aspect-square h-14 rounded-bl-lg bg-sky-600"></div>
    </div>
  </div>
  <paragraph-h2>使用逻辑属性</paragraph-h2>
  <div dir="ltr" class="mx-auto my-5 max-w-xl space-y-3 border p-4 shadow">
    <p>从左到右</p>
    <div class="flex place-content-around">
      <div class="aspect-square h-14 rounded-ss-lg bg-sky-600">ss-lg</div>
      <div class="aspect-square h-14 rounded-se-lg bg-sky-600">se-lg</div>
      <div class="aspect-square h-14 rounded-ee-lg bg-sky-600">ee-lg</div>
      <div class="aspect-square h-14 rounded-es-lg bg-sky-600">es-lg</div>
    </div>
  </div>
  <div dir="rtl" class="mx-auto my-5 max-w-xl space-y-3 border p-4 shadow">
    <p>从右到左</p>
    <div class="flex place-content-around">
      <div class="aspect-square h-14 rounded-ss-lg bg-sky-600">ss-lg</div>
      <div class="aspect-square h-14 rounded-se-lg bg-sky-600">se-lg</div>
      <div class="aspect-square h-14 rounded-ee-lg bg-sky-600">ee-lg</div>
      <div class="aspect-square h-14 rounded-es-lg bg-sky-600">es-lg</div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
