//写一个插件

import Toast from './WeToast'
 export default {
     install(Vue, options) {//Vue提供插件方法
         Vue.prototype.$toast = function (message) {
            let Constructor=Vue.extend(Toast);//构建实例
             let toast= new Constructor();
             toast.$mount();//将toast放到内存里
             document.body.appendChild(toast.$el)//将Toast组件放到内面里
         }
     }
 }




