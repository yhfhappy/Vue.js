/* 引入组件 */
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'

/* 导出组件 */
export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/myresume',
        component:Resume
    },
    {path:'*', redirect:'/home'}
]