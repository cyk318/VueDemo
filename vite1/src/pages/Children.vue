<template>
  <n-button @click="childrenIncr">点我 +1: {{num}}</n-button>

</template>

<script setup>
  let num = ref(100)
  function childrenIncr() {
    num.value++
  }
  //暴露子组件中的属性
  defineExpose({
    num
  })
</script>
