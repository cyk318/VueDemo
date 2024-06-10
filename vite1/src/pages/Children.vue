<template>
  <div>父组件传入的数据: {{count}}</div>

</template>

<script setup>
  defineProps({
    count: {
      type: Number,
      default: NaN
    }
  })
</script>
