<template>
    <div id="header">
        <!-- 页面头部 START -->
        <header class="header">
            <img src="../assets/images/logo.jpg" alt="LOGO" />
            
            <hgroup>
                <h1>个人简历</h1>
                <h2>追求卓越，成功就会在不经意间追上你！</h2>
            </hgroup>

            <!-- 导航 -->
            <ul class="introItem icon">
                <router-link tag="li" to="home" active-class="active">
                    <a href="javascript:;"><i class="iconfont icon-wo"></i>简介</a>
                </router-link>

                <router-link tag="li" to="myresume" active-calss="active">
                    <a href="javascript:;"><i class="iconfont icon-wenjianjia"></i>作品</a>
                </router-link>
            </ul>
            
            <!-- 移动端三条线导航 -->
            <!-- <label class="responsive-nav" v-show=false>
                <span></span>
                <span></span>
                <span></span>
            </label> -->
        </header>
        <!-- 页面头部 END -->
    </div>
</template>