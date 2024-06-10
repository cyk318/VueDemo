<template>
  <Children ref="children"></Children>
  <el-button :plain="true" @click="getChildrenNum">获取子组件中暴露的值</el-button>
</template>

<script setup>
  import Children from "./Children.vue";
  import {ElMessage} from "element-plus";

  //注册 ref，获取组件(这里的变量名必须和 上面引入子组件时的 ref 中的值一样)
  let children = ref()
  const getChildrenNum = () => {
    ElMessage({
      message: `子组件的值为: ${children.value.num}`,
      type: 'success',
    })
  }


</script>
