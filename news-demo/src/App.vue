<template>
  <div id="app">
    <NavView v-show="true"></NavView>
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script>
// 引入组件
import NavView from './components/Nav.vue'
import FooterView from './components/Footer.vue'
import {mapGetters,mapActions} from 'vuex'

export default {
//   computed:mapGetters([
//     'headerShow'
//   ]),

  /* 监听路由变化 */
  // watch:{
  //   $route(to,from){
  //     // console.log(to,from);
  //     if(to.path=='/mydoc'){
  //       this.$store.dispatch('hideHeader');
  //     }else{
  //       this.$store.dispatch('showHeader');
  //     }
  //   }
  // },
  components:{
    NavView,
    FooterView
  },
  mounted(){
    this.slider();
  },
  methods:{
    slider(){
      $(function (){
        var mySwipe=Swipe($('.banner')[0],{
          auto:2000,
          continuous:true,
          stopPropation:true,
          callback:function (index,element){
            $('.banner ol li').removeClass('active');
            $('.banner ol li').eq(index).addClass('active');
          }
        });
      });
    }
  }
}
</script>

<style>
  @import './assets/css/index.css';
</style>
