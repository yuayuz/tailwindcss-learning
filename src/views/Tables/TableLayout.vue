<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Table Layout</header-h1>
  <!-- 用于控制表格布局算法的实用程序 -->
  <paragraph-h2>Auto</paragraph-h2>
  <!-- 用于 table-auto 允许表格自动调整列大小以适合单元格的内容 -->
  <table class="table-auto">
    <thead>
      <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td>Malcolm Lockyer</td>
        <td>1961</td>
      </tr>
      <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>
        <td>1972</td>
      </tr>
      <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>
        <td>1975</td>
      </tr>
    </tbody>
  </table>
  <paragraph-h2>Fixed</paragraph-h2>
  <!--
  用于 table-fixed 允许表格忽略内容并使用固定列宽。第一行的宽度将设置整个表格的列宽。
  可以手动设置某些列的宽度，其余可用宽度将在没有明确宽度的列之间平均分配
  -->
  <table class="table-fixed">
    <thead>
      <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td>Malcolm Lockyer</td>
        <td>1961</td>
      </tr>
      <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>
        <td>1972</td>
      </tr>
      <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>
        <td>1975</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
