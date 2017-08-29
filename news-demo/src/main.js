import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 引入路由配置文件
import routerConfig from './routerConfig.js'

// 引入路由
import VueRouter from 'vue-router'

// 使用路由
Vue.use(VueRouter);

// 实例化一个路由
const router = new VueRouter({
    mode:'history',  /*去掉栏目名称前面的#号*/
    routes:routerConfig
});

/* 注意：require引入都为全局引入； */
require('./assets/css/base.css');

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})