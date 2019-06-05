//写一个插件

import Toast from './WeToast'

function createToast({Vue,message,propsData}){
    let Constructor=Vue.extend(Toast);//构建实例
    let toast= new Constructor(
        {propsData}
    );
    toast.$slots.default=[message];//将用户传的值放到slot里面,注Message是个数组
    toast.$mount();//将toast放到内存里
    document.body.appendChild(toast.$el);//将Toast组件放到内面里
    return toast

}
let currentToast;
 export default {
     install(Vue, options) {//Vue提供插件方法
         Vue.prototype.$toast = function (message,toastOptions) {
             if (currentToast){//判断页面当前是否存在Toast不存在则创建，如果有则自动关闭
                 currentToast.close()
             }
            currentToast=createToast({Vue,message,propsData:toastOptions})

         }
     }
 }




