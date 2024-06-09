import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//1.引入 "按需引入" 插件
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  //2.配置插件
  plugins: [vue(), Components()],
})
