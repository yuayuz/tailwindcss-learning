<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>MaxWidth</header-h1>
  <!-- 用于设置元素最大宽度 -->
  <p-h2>设置最大宽度</p-h2>
  <!-- 使用 max-w-* 设置元素的最大宽度 -->
  <div
    class="m-4 mx-auto max-w-xl shrink space-y-3 border p-4 *:h-9 *:w-full *:shrink *:content-center *:rounded-full *:border *:bg-violet-400 *:text-center"
  >
    <div class="max-w-80">max-w-80</div>
    <div class="max-w-64">max-w-64</div>
    <div class="max-w-48">max-w-48</div>
    <div class="max-w-40">max-w-40</div>
    <div class="max-w-32">max-w-32</div>
    <div class="max-w-24">max-w-24</div>
    <div class="max-w-full">max-w-full</div>
  </div>
  <!-- 调整大型元素的尺寸: max-w-* 使用命名比例（如： max-w-md）而不是数字比例，以使值更容易猜测。 -->
  <p-h2>Reading width</p-h2>
  <!-- max-w-prose 为元素提供了针对可读性进行优化的最大宽度，并根据字体大小进行调整 -->
  <div class="m-4 space-y-3 *:m-3">
    <div class="mx-auto max-w-prose shrink border text-sm">
      <p>
        Oh yeah. It's the best part. It's crunchy, it's explosive, it's where the muffin breaks free
        of the pan and sort of does it's own thing. I'll tell you. That's a million dollar idea
        right there. Just sell the tops.
      </p>
    </div>

    <div class="mx-auto max-w-prose shrink border text-base">
      <p>
        Oh yeah. It's the best part. It's crunchy, it's explosive, it's where the muffin breaks free
        of the pan and sort of does it's own thing. I'll tell you. That's a million dollar idea
        right there. Just sell the tops.
      </p>
    </div>

    <div class="mx-auto max-w-prose shrink border text-xl">
      <p>
        Oh yeah. It's the best part. It's crunchy, it's explosive, it's where the muffin breaks free
        of the pan and sort of does it's own thing. I'll tell you. That's a million dollar idea
        right there. Just sell the tops.
      </p>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
