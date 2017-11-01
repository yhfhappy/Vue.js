<template>
    <div id="mainBody">
        <!-- 主体部分 START -->
        <section class="container resume evaluation">
            <dl class="icon">
                <dt><i class="iconfont icon-mingpian"></i>{{homeData.basicInformation}}</dt>
                <dd><span>个人信息：</span>{{homeData.personalInformation}}</dd>
                <dd><span>毕业院校：</span>{{homeData.graduatedSchool}}</dd>
                <dd><span>个人专业：</span>{{homeData.personalProfessional}}</dd>
                <dd><span>应聘岗位：</span>{{homeData.postInfo}}</dd>
                <dd><span>现居住地：</span>{{homeData.currAddress}}</dd>
                <dd><span>目前情况：</span>{{homeData.currSituation}}</dd>
            </dl>
            
            <dl class="icon">
                <dt><i class="iconfont icon-zuoji"></i>{{homeData.contactNumber}}</dt>
                <dd><span><i class="iconfont icon-shouji"></i>联系电话：</span>{{homeData.tel}}</dd>
                <dd><span><i class="iconfont icon-weixin"></i>联系微信：</span>{{homeData.wechat}}</dd>
                <dd><span><i class="iconfont icon-QQ"></i>联系&nbsp;&nbsp;QQ：</span>{{homeData.QQ}}</dd>
                <dd><span><i class="iconfont icon-youjian"></i>联系邮箱：</span>{{homeData.email}}</dd>
                <dd><span><i class="iconfont icon-github"></i>Github&nbsp;&nbsp;&nbsp;&nbsp;：</span><a href="https://github.com/yhfhappy" target="_balnk">{{homeData.Github}}</a></dd>
            </dl>
            
            <dl class="icon">
                <dt><i class="iconfont icon-zixuan"></i>{{homeData.mainSkills}}</dt>
                <dd>
                    <em v-for="item in homeData.skillList">{{item}}</em>
                </dd>
            </dl>
            
            <dl class="icon">
                <dt><i class="iconfont icon-zixuan"></i>{{homeData.skillsDetail}}</dt>
                <dd v-for="item in homeData.skillContent">
                    <h4><i class="iconfont icon-yuan"></i>{{item.title}}</h4>
                    <p>{{item.content}}</p>
                </dd>
            </dl>
            
            <dl class="icon">
                <dt><i class="iconfont icon-mingpian"></i>{{homeData.selfTitle}}</dt>
                <dd v-html="homeData.selfEvaluation"></dd>
            </dl>
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
                homeData : {}
            }
        },

        methods:{
            fetchData(){
                var _this=this;
                this.$http.get('../src/data/dataIndex.data').then(function(res){
                    _this.homeData = res.data.result;
                },function(err){
                    console.log('个人简介页面:',err);
                });
            }
        }
    }
</script>