<template>
  <div>计数器</div>
  <el-button @click="countInc">{{ count }}</el-button>

  <Children :count="count"></Children>
</template>

<script setup>
  import Children from "./Children.vue";

  const count = ref(1)
  const countInc = () => count.value++
</script>
