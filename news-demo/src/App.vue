<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <NavView v-show="headerShow"></NavView>
    <transition name="slide-down">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <FooterView></FooterView>
  </div>
</template>

<script>
// 引入组件
import NavView from './components/Nav.vue'
import FooterView from './components/Footer.vue'
import {mapGetters,mapActions} from 'vuex'

export default {
  computed:mapGetters([
    'headerShow',
    'loading'
  ]),

  /* 监听路由变化 */
  watch:{
    $route(to,from){
      // console.log(to,from);
      if(to.path=='/mydoc'){
        this.$store.dispatch('hideHeader');
      }else{
        this.$store.dispatch('showHeader');
      }
    }
  },
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

  .slide-down-enter-active,
  .slide-down-leave-active{
    transition: .4s all ease;
    opacity: 0.7;
    transform: translate3d(0,6em,0);
  }

   .slide-down-enter,
   .slide-down-leave{
      opacity: 0.2;
  }
</style>