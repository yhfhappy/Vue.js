import {normalTime} from './normalTime'

/*
注意：
    原因：webpack 2中不允许混用import和module.exports
    解决方法：统一改成ES6的方式编写。
*/

/*module.exports = {
    normalTime
};*/

export default {
    normalTime
}