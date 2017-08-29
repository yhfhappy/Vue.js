# Vue小项目（一）

> 学习Vue之后的第一个实战小项目。

## 准备工作

### 环境准备

1. 运行：vue init webpack-simple news-demo
2. 进入：news-demo，运行：cnpm install
3. 执行：npm run dev，程序就开始运行起来了。

### 文件准备

1. 将静态文件（如：CSS JS img等）存放入 src 下面的 assets 文件夹下；
2. 新建一个components文件夹，用来存放各种组件；
3. 将title、meta等标签复制进index.html文件中；
4. 下载：style-loader和css-loader
5. 配置loader：在webpack.config.js文件中加入以下代码
```
{
test: /\.css$/,
loader: 'style-loader!css-loader',
exclude: /node_modules/
},
```
6. 将全局CSS文件引入main.js文件中：
> require('./assets/css/base.css');

7. 将JS文件放入index.html文件中
> <script src="./src/assets/js/font.js"></script>
    <script src="./src/assets/js/jquery-1.7.2.js"></script>
    <script src="./src/assets/js/swipe.js"></script>

8. 在components文件夹下新建各种组件；
9. 编写路由:
    - main.js文件：
```
// 引入路由配置文件
import routerConfig from './routerConfig.js'

// 引入路由
import VueRouter from 'vue-router'

// 使用路由
Vue.use(VueRouter);

// 实例化一个路由
const router = new VueRouter({
    routes:routerConfig
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```

    - routerConfig.js文件
    
```
/* 引入组件 */
import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import userInfo from './components/User.vue'
import Mydoc from './components/Mydoc.vue'

/* 导出组件 */
export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/follow',
        component:Follow
    },
    {
        path:'/column',
        component:Column
    },
    {
        path:'/user-info',
        component:userInfo
    },
    {
        path:'/mydoc',
        component:Mydoc
    },
    {path:'*', redirect:'/home'}
]
```

## 状态管理：vuex
1. 新建一个store文件：
> actions.js
getters.js
index.js
mutations.js
types.js

2. 下载vuex：cnpm install vuex -D
3. 引入Vuex：import Vuex from 'vuex'
4. 使用Vuex：Vue.use(Vuex);