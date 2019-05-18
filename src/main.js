import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
import router from "./routes"
import './assets/css/index.css'
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');



