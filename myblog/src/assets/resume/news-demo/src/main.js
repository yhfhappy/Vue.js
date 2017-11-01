import Vue from 'vue'
import App from './App.vue'

// 引入过滤器
import filters from './filters'

import store from './store/'
// 引入路由配置文件
import routerConfig from './routerConfig.js'

// 引入路由
import VueRouter from 'vue-router'

// axios不能直接use
import axios from 'axios'
import Loading from './components/loading'

// 循环遍历所有过滤器
Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]))

// 使用路由
Vue.use(VueRouter);

// 使用Loading
Vue.use(Loading);

// 实例化一个路由
const router = new VueRouter({
    /*去掉栏目名称前面的#号*/
    mode:'history',

    /*滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置*/
    scrollBehavior:() => ({ y:0 }),
    routes:routerConfig
});

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) { //配置发送请求的信息
  store.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});

//配置请求的根路径；
/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);

// 设置（POST）头部信息；
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://localhost:8082/';

//把axios对象挂载到Vue的原型上，其他页面在使用axios的时候直接  this.$http就可以了
Vue.prototype.$http = axios

/* 注意：require引入都为全局引入； */
require('./assets/css/base.css');

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})