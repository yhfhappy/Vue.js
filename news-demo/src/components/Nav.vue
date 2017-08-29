<template>
    <div id="nav">
        <div class="nav">
          <ul>
              <!-- <li class="active"><a href="javascript:;">首页</a></li>
              <li><a href="javascript:;">关注</a></li>
              <li><a href="javascript:;">栏目</a></li> -->
              <router-link tag="li" to="home" active-class="active">
                <a href="javascript:;">首页</a>
              </router-link>
              <router-link tag="li" to="follow" active-class="active">
                <a href="javascript:;">关注</a>
              </router-link>
              <router-link tag="li" to="column" active-class="active">
                <a href="javascript:;">栏目</a>
              </router-link>
            </ul>
        </div>
    </div>
</template>