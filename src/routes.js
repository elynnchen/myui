
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
//引入相关组件
import MyButton from './components/button'
import MyInput from './components/input'
import MyToast from './components/Toast'
import MyGrid from './components/grid'
//配置路由实例 路由表
const routes=[
    {name:"button", path:"/button", component:MyButton},
    {name:"input", path:"/input", component:MyInput},
    {name:"grid", path:"/grid", component:MyGrid},
    {name:"toast", path:"/toast", component:MyToast}
];
export  default  new VueRouter({
    routes
})



