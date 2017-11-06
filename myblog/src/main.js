import Vue from 'vue'
import App from './App.vue'

/**************************************/
// 1.引入路由配置文件
import routerConfig from './routerConfig.js'

// 2.引入路由
import VueRouter from 'vue-router'

// 3.使用路由
Vue.use(VueRouter);

// 4.实例化一个路由
const router = new VueRouter({
    /*去掉栏目名称前面的#号*/
    // mode:'history',
    // mode:'hash',

    routes:routerConfig
});

/**************************************/
// axios不能直接use
import axios from 'axios'

//把axios对象挂载到Vue的原型上，其他页面在使用axios的时候直接  this.$http就可以了
Vue.prototype.$http = axios

/**************************************/
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})