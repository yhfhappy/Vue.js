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