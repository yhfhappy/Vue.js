<template>
  <div id="app">
      <div class="main_wrap">
            <HeaderView></HeaderView>
            <router-view></router-view>
      </div>
  </div>
</template>

<script>
    // 引入组件
    import HeaderView from './components/Header.vue';

    export default {
        // 导出组件
        components:{
            HeaderView
        }
    }
</script>

<style>
  /* 导入全局的CSS样式 */
  @import './assets/css/main.css';
</style>