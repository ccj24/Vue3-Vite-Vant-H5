import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//1、引入resolve，设置路径别名
import { resolve } from "path"
const pathResolve = (dir) => resolve(__dirname, ".", dir);


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //配置服务，使得可以在手机中浏览
  server: {
    host: "172.20.10.6",
    port: "8080"
  },

  // 2、配置路径别名
  resolve: {
    alias: [{ find: "@", replacement: pathResolve("src") }]
  }
})
