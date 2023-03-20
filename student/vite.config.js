import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import * as path from 'path'
// 下面这三行是引入组件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      }),
      Components({
      resolvers: [ElementPlusResolver()],
      }),
  ],
  lintOnsave:false,
})
