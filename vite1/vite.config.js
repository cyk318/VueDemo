import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, NaiveUiResolver } from 'unplugin-vue-components/resolvers'
//1.引入 AutoImport
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
      vue(),
    //2.配置到插件中
      AutoImport({
        //3.配置需要自动导入的 API 库
        imports: ['vue', 'vue-router']
      }),
    Components({
      resolvers: [ElementPlusResolver(), NaiveUiResolver()]
    })
  ],
})
