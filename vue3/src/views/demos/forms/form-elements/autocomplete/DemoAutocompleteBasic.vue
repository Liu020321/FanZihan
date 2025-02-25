<script setup lang="ts">
const items = ['就业', '学习', '生活', '其他']
</script>

<template>
  <AppAutocomplete
    label="意见类型"
    :items="items"
    placeholder="选择意见类型"
  />
</template>
