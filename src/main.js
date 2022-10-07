import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
//导入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入vant
import Vant from 'vant';
import 'vant/lib/index.css';


//引入全局样式
import '@/assets/css/index.css'
//引入淘宝自适应文件
import '@/assets/js/flexible'
// 引入ly-tab组件
import LyTab from "ly-tab";

Vue.use(LyTab);
Vue.use(less)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
