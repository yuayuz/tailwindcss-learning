<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Border Collapse</header-h1>
  <!-- 用于控制表格边框是否折叠或分离的实用程序 -->
  <paragraph-h2>Collapse 尽可能将 border-collapse 相邻单元格边框合并为单个边框</paragraph-h2>
  <!-- 尽可能将 border-collapse 相邻单元格边框合并为单个边框，这包括顶级<table>标签上的折叠边框 -->
  <table class="border-collapse border border-slate-400">
    <thead>
      <tr>
        <th class="border border-slate-300">State</th>
        <th class="border border-slate-300">City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-slate-300">Indiana</td>
        <td class="border border-slate-300">Indianapolis</td>
      </tr>
      <tr>
        <td class="border border-slate-300">Ohio</td>
        <td class="border border-slate-300">Columbus</td>
      </tr>
      <tr>
        <td class="border border-slate-300">Michigan</td>
        <td class="border border-slate-300">Detroit</td>
      </tr>
    </tbody>
  </table>
  <paragraph-h2>Separate 强制每个单元格显示其自己单独的边框</paragraph-h2>
  <!-- 使用 border-separate 强制每个单元格显示其自己单独的边框 -->
  <table class="border-separate border border-slate-400">
    <thead>
      <tr>
        <th class="border border-slate-300">State</th>
        <th class="border border-slate-300">City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-slate-300">Indiana</td>
        <td class="border border-slate-300">Indianapolis</td>
      </tr>
      <tr>
        <td class="border border-slate-300">Ohio</td>
        <td class="border border-slate-300">Columbus</td>
      </tr>
      <tr>
        <td class="border border-slate-300">Michigan</td>
        <td class="border border-slate-300">Detroit</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
