import Vue from 'vue'
import App from './App.vue'

import VueHighlightJS from 'vue-highlightjs'
// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS);
import 'highlight.js/styles/xcode.css'

Vue.config.productionTip = false;
import router from "./routes"
import './assets/css/index.css'
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'
import WeButton from "./weui/WeButton";

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

//单元测试
import chai from 'chai'

const expect= chai.expect;
{
 const Constructor=Vue.extend(WeButton);
  const vm=new Constructor({
    propsData:{
      btnStyle: 'primary',
      iconName:'icon-loding'
    }
  });
  vm.$mount();//挂载
  let useElement=vm.$el.querySelector('use');
  console.log(useElement);
  expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loding');//我期望xlink:href最后得到的值是#icon-loding
    vm.$el.remove();//清除战场 清内存
    vm.$destroy()
}
