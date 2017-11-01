<template>
    <div id="resume">
        <!-- 主体部分 START -->
        <section class="container">
            <figure v-for="item in resumeData">
                <h4>{{item.title}}</h4>
                <img :src="item.imgAddr" alt="" />

                <div class="itemAddr">
                    <a :href="item.demoAddr" target="_balnk">演示地址</a>
                    <a :href="item.codeAddr" target="_balnk">源码地址</a>
                </div>

                <figcaption>{{item.content}}</figcaption>
            </figure>
        </section>
        <!-- 主体部分 END -->
    </div>
</template>

<script>
    export default {
        mounted(){
            this.fetchData();
        },

        data(){
            return {
                resumeData : {}
            }
        },

        methods:{
            fetchData(){
                var _this=this;
                this.$http.get('../src/data/dataResume.data').then(function(res){
                    _this.resumeData = res.data.result;
                },function(err){
                    console.log('个人简介页面:',err);
                });
            }
        }
    }
</script>