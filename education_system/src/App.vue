<script setup>
import {ElMessage} from "element-plus";

const openMsg = () => {
  ElMessage.success("lyj: 成功!")
  ElMessage.error("lyj: 失败!")
}
</script>

<template>
  <el-button type="primary" @click="openMsg">我是一个按钮 lyj</el-button>
</template>

<style scoped>

</style>
