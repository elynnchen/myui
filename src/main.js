import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
import router from "./routes"
import '../src/assets/css/index.css'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');



