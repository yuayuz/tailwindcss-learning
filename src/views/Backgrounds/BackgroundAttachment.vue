<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Background Attachment</header-h1>
  <!-- 用于控制背景图像滚动时如何表现的实用程序 -->
  <paragraph-h2>Fixed 固定相对于视口的背景图</paragraph-h2>
  <!-- 用于 bg-fixed 固定相对于视口的背景图像 -->
  <div
    class="mx-auto mt-5 h-96 max-w-lg overflow-y-auto overflow-x-hidden border bg-fixed shadow"
    style="
      background-image: url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80');
      background-position: center -80px;
    "
  >
    <div class="mt-40">
      <div class="space-y-5 bg-white/75 p-6 py-4">
        <div class="text-2xl text-3xl leading-10">
          牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
          pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico-
          表示“硅”，volcano 指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
        </div>
      </div>
    </div>
  </div>
  <paragraph-h2>Local 随容器和视口滚动背景图像</paragraph-h2>
  <!-- 使用 bg-local 随容器和视口滚动背景图像 -->
  <div
    class="mx-auto mt-5 h-96 max-w-lg overflow-y-auto overflow-x-hidden border bg-local shadow"
    style="
      background-image: url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80');
      background-position: center -80px;
    "
  >
    <div class="space-y-5 p-6 pt-10">
      <div class="text-3xl leading-10 text-white">
        牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
        pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico-
        表示“硅”，volcano 指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
      </div>
    </div>
  </div>
  <paragraph-h2>Scroll 随视口滚动背景图像，但不随容器滚动</paragraph-h2>
  <!-- 使用 bg-scroll 随视口滚动背景图像，但不随容器滚动。 -->
  <div
    class="mx-auto mt-5 h-96 max-w-lg overflow-y-auto overflow-x-hidden border bg-scroll shadow"
    style="
      background-image: url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80');
      background-position: center -80px;
    "
  >
    <div class="space-y-5 p-6 pt-10">
      <div class="text-3xl leading-10 text-white">
        牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
        pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico-
        表示“硅”，volcano 指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';

.bg {
  background-image: url(@/assets/photo.avif);
}
</style>
