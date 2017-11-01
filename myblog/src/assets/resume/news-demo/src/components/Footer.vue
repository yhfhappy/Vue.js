<template>
    <div id="footer">
        <div class="foot-btn">
          <ul>
                <!--
                <li class="home"><a href="index.html"></a></li>
                <li class="write"><a href="javascript:;"></a></li>
                <li class="my"><a href="mydoc.html"></a></li>
                -->
                <router-link to="/home" tag="li" class="home">
                    <a href="index.html"></a>
                </router-link>

                <router-link to="/mydoc" tag="li" class="write">
                    <a href="javascript:;"></a>
                </router-link>

                <router-link to="/user-info" tag="li" class="my">
                    <a href="mydoc.html"></a>
                </router-link>
            </ul>
        </div>
    </div>
</template>