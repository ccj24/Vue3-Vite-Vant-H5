/*
 * @description: 
 * @param: params
 * @return: 
 */
import { createApp } from 'vue'
// import './style.css'//全局样式
import App from './App.vue'
import "amfe-flexible"//引进浏览器自适应js

//引用组件
import { Button, Field, CellGroup, Tabbar, TabbarItem, Search, Grid, GridItem, List } from "vant"
//引入样式
import "vant/lib/index.css"

import router from "@/router/index.js"

const app = createApp(App);
//注册使用
app.use(Button)
app.use(Field)
app.use(CellGroup)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.use(Grid)
app.use(GridItem)
app.use(List)
app.use(router)
app.mount('#app')

