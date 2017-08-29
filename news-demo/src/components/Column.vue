<template>
    <div id="column">
        <div class="content mt50">
            <div class="newsList">
              <ul>
                    <li v-for="(item,index) in arrList">
                        <a href="conText.html">
                            <h2>{{index + '.' + item.title}}</h2>
                            <p>{{item.detail}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            arrList:[]
        }
    },
    mounted(){
        // 获取数据
        this.fetchData();
    },
    methods:{
        fetchData(){
            var _this = this;

            this.$http.get('src/data/follow.data').then(function(res){
                _this.arrList = res.data;
            }).catch(function(err){
                console.log('Follow',err)
            });
        }
    }
}
</script>

<style scoped>
.mt50 {
    margin-top: 100px;
}
</style>