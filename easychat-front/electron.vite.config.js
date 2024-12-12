// frontend/electron.vite.config.js
import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src/renderer/src')
      }
    },
    plugins: [vue()],
    server: {
      hmr: true,
      port: 5000,
      proxy: {
        "/api": {
          target: "http://www.guoohhh.site:5050/",
          changeOrigin: true,
          pathRewrite: {
            "^/api": "/api" // 确保路径重写规则正确
          }
        }
      }
    },
    build: {
      outDir: 'dist', // 确保输出目录为 'dist'
      // 其他构建配置...
    }
  }
})
