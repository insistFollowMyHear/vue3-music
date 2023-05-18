import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 设置路径
      '~': path.resolve(__dirname, './'),
      // 设置别名 这里的 ./ 指的是 vite.config.js 的所载目录（根目录）下面的 src
      '@': path.resolve(__dirname, './src')
    }
  }
})
