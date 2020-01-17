import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import 'normalize.css'

import "@/element"; //导入全局组件
import "@/components"; //导入全局组件
import "@/style/index.scss";

import { hideTableHeader } from "./util/hideTableHeader";
Vue.prototype.$hideTableHeader = hideTableHeader; //添加隐藏表头的方法

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
