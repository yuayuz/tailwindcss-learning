<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Border Spacing</header-h1>
  <!-- 用于控制表格边框之间间距的实用程序 -->
  <paragraph-h2>设置边框间距</paragraph-h2>
  <!--
  使用 border-spacing-*、border-spacing-x-* 和 border-spacing-y-* 实用程序，
  使用单独的边框来控制表格单元格边框之间的空间
  -->
  <table class="... border-separate border-spacing-2 border border-slate-400">
    <thead>
      <tr>
        <th class="... border border-slate-300">State</th>
        <th class="... border border-slate-300">City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="... border border-slate-300">Indiana</td>
        <td class="... border border-slate-300">Indianapolis</td>
      </tr>
      <tr>
        <td class="... border border-slate-300">Ohio</td>
        <td class="... border border-slate-300">Columbus</td>
      </tr>
      <tr>
        <td class="... border border-slate-300">Michigan</td>
        <td class="... border border-slate-300">Detroit</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
