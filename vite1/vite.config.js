import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
//1.引入 ElementPlus 解析器
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
      vue(),
    //2.配置到 "按需引入" 中
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
})
