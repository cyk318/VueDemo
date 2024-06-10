<template>
  <div>父组件传入的数据: {{count}}</div>
  <n-button @click="incr">{{count}}</n-button>

</template>

<script setup>
  defineProps({
    count: {
      type: Number,
      default: NaN
    }
  })

  const emit = defineEmits(['countIncr'])
  const incr = () => {
    //emit(父组件中的自定义方法, 参数1, 参数2....)
    emit("countIncr")
  }

</script>
