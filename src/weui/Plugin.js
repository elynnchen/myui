//写一个插件

import Toast from './WeToast'
 export default {
     install(Vue, options) {//Vue提供插件方法
         Vue.prototype.$toast = function (message,toastOptions) {
            let Constructor=Vue.extend(Toast);//构建实例
             let toast= new Constructor(
                 {
                     propsData:{
                         closeButton:toastOptions.closeButton,//接受用户传值
                         autoClose:toastOptions.autoClose,
                         autoCloseDelay:toastOptions.autoCloseDelay,
                     }
                 }

             );
             toast.$slots.default=[message];//将用户传的值放到slot里面,注Message是个数组
             toast.$mount();//将toast放到内存里
             document.body.appendChild(toast.$el)//将Toast组件放到内面里
         }
     }
 }




