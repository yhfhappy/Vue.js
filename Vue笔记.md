# Vue学习笔记

标签： Vue

---

## vue介绍

vue是一个mvvm框架(库)、和angular类似比较容易上手、小巧。

 1. 官网：http://cn.vuejs.org/
 2. 手册：http://cn.vuejs.org/api/

注意：Vue不兼容低版本IE。

vue基本模板：一片html代码配合上json，在new出来vue实例。

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Vue-模板</title>
<style>
    img {width: 300px;height: 150px;margin: 10px auto}
</style>
<script src="../libs/vue1.0.js"></script>
<script>
window.onload = function(){
    new Vue({
        el:'#box',
        data:{
            msg:''
        },
        methods:{}
    });
};
</script>
</head>
<body>

<div id="box">
    <input type="text" v-model="msg" />
    <br />
    {{msg}}
    <br />
    {{*msg}}
    <br />
    {{{msg}}}
</div>
</body>
</html>
```

1. 同步更新  ：v-model="msg" ——>{{msg}}
2. 不同步更新：v-model="msg" ——>{{*msg}}
3. 加个*表示数据只绑定一次；
4. 三个大括号{{{msg}}}：表示HTML转义输出；
5. v-model：一般用于表单元素(input)	双向数据绑定。

## Vue循环

### Vue1.0循环：不可以添加重复数据；

1. 直接循环：这样不能重复添加，只能添加一次；
```<li v-for="item in arr">{{item}}</li>```
2. 重复添加：这个方法可以提高循环性能，预先把ID提取了；
```<li v-for="item in arr" track-by="$index">{{item}}</li>```

### Vue2.0循环：可以直接添加重复数据；

1. 直接循环：这样就可以直接添加重复数据；
```<li v-for="item in arr">{{item}}</li>```
2. key,value形式的写法：
    - 之前：v-for="(index,val) in array"
    - 现在：v-for="(val,index) in array"
3. 去掉了一些隐式变量:如$index，$key
    - $index变成index
    - $key变成key，也就是index
4. track-by="$index"(可以用)，变成:key="index"
    - 用 :key="index"只是为了提高性能；
    - 写法：```<li v-for="(val,index) in list" :key="index">```

5. 循环例子：

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Vue-模板</title>
<style>
    img {width: 300px;height: 150px;margin: 10px auto}
</style>
<script src="../libs/vue.js"></script>
<script>

window.onload = function(){
    var vm = new Vue({
        el:'#box',
        data:{
            arr:['appale','pear','tomato'],
        },
        methods:{
            add:function(){
                this.arr.push('添加的水果');
            }
        }
    });

};

</script>
</head>
<body>

<div id="box">

    <input type="button" value="添加" @click="add" />
    <ul>
        <li v-for="item in arr" track-by="$index">{{item}}</li>
    </ul>

</div>

</body>
</html>
```

## Vue事件

1. 事件简写：
    - 原生："v-on:事件名"
    - 简写："@事件名"

2. 事件对象：
    - 语法：@click="show($event,参数)"
    - 可以在后面传递参数；

3. 事件冒泡：阻止冒泡的两种方法；
    - 原生方法：在当前事件函数里面加上
        ```ev.cancelBubble=true;```
    - Vue方法：@click.stop = "show($event)"

4. 默认行为：阻止默认行为的两种方法；
    - 原生方法：在当前事件函数里面加上```ev.preventDefault();```
    - Vue方法：```@contextmenu.prevent="show($event)"```

5. 键盘事件：
    - @keydown="show()"
    - @keyup="show()"

6. 常用按键：
    - 回车：@keyup.13="show()" 或 @keyup.enter="show()"
    - 上键：@keyup.up="show()"
    - 下键：@keyup.down="show()"
    - 左键：@keyup.left="show()"
    - 右键：@keyup.right="show()"

7. 事件例子：

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>事件</title>
<script src="../libs/vue.js"></script>
<script>

window.onload = function(){
    new Vue({
        el:'#box',
        data:{
            a:1498915722115
        },
        methods:{
            show:function(ev){
                alert(ev.keyCode);
                //alert(1);
            },

            show2:function(ev){
                alert(2);
                // ev.preventDefault();
            }
        }
    });
};

</script>
</head>
<body>

<div id="box">
    <!-- <input type="button" value="按钮" @click="show($event,12)" /> -->

    <!--
    <div @click="show2()">
        <input type="button" value="按钮" @click="show()" />
    </div>
    -->

    <!--<input type="button" class="btn btn-danger" value="按钮" @contextmenu.prevent="show2($event)">-->

    <input type="text" @keydown="show($event)" />
</div>

</body>
</html>
```

## Vue属性

1. 属性绑定：v-bind
    - 在VueJS中属性用v-bind:src="url"
    - v-bind:src="url" 可以简写为 :src="url"
    - 所有属性都可以用两种方法绑定：v-bind:属性="" 或 :属性=""

2. 特殊属性：class
    - :class="[数据1，数据2...]"
    - :class="{数据1:true,数据2:false...}"
    - :class="json" ，全部数据写在json中，如{red:true,blue:false...}

3. 特殊样式：style
    - :style="[c]" ，这里的c是个json，如 c:{color:'red'...}
    - :style="[c,b]" ，如 c:{color:'red'...},b{backgroundColor:blue}
    - :style="{json}" 数据json:{color:red,backgroundColor:blue......}
    - VueJS中复合样式采用驼峰命名法；

4. Vue属性例子

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>事件</title>
<style>
    img {width: 300px;height: 150px;margin: 10px auto}
</style>
<script src="../libs/vue.js"></script>
<script>
window.onload = function(){
    new Vue({
        el:'#box',
        data:{
            url:'img/2.jpg',
            w:'200px',
            h:'150px'
        },
        methods:{
            show:function(ev){
                alert(ev.keyCode);
                //alert(1);
            },

            show2:function(ev){
                alert(2);
                // ev.preventDefault();
            }
        }
    });
};
</script>
</head>
<body>
<div id="box">
    <!-- 第一张会报错，能出效果，但不推荐使用 -->
    <img src="{{url}}" class="img-thumbnail center-block">
    <img v-bind:src="url"  class="img-circle center-block">
    <img :src="url" class="img-circle center-block">
    <img :src="url" :width="w" :height="h" class="img-rounded center-block">
</div>
</body>
</html>
```

## Vue模板

1. {{msg}}：数据更新模板变化，同步更新。
    - v-model="msg" ——>{{msg}}
2. {{*msg}}：数据只绑定一次，不同步更新。
    - v-model="msg" ——>{{*msg}}
3. {{{msg}}}：HTML转意输出。
4. Vue模板例子：

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Vue-模板</title>
<style>
    img {width: 300px;height: 150px;margin: 10px auto}
</style>
<script src="../libs/vue1.0.js"></script>
<script>
window.onload = function(){
    new Vue({
        el:'#box',
        data:{
            msg:'<h1>Welcome Vue</h1>'
        },
        methods:{}
    });
};
</script>
</head>
<body>

<div id="box">   
    <input type="text" v-model="msg" />
    <br />
    {{msg}}
    <br />
    {{*msg}}
    <br />
    {{{msg}}}
</div>
</body>
</html>
```

## 过滤器

### Vue1.0过滤器：

- 过滤器语法：
    1. 单个：{{msg|filterA}}
    2. 多个：{{msg|filterA|filterB...}}
    3. 传参：{{msg|currency '￥'}}

- 常见过滤器：
    1. 大写：{{msg|uppercase}}
    2. 小写：{{msg|lowercase}}
    3. 首字母大写：{{msg|capitalize}}
    4. 货币标志:{{msg|currency}}
    5. 时间过滤器：

- 系统提供过滤器：
    1. 延迟执行过滤器：debounce
        - 系统自动提供；
        - 需要配合事件，最好是键盘事件一起使用比较好；
        - 语法：@keyup="事件名 | debounce 时间"

    2. 数据配合使用过滤器：limitBy
        - 限制几个：limitBy
        - 语法：limitBy 取的个数 从第几个开始
        - 如果只有一个参数，表示取几个；

    3. 过滤用的过滤器：filterBy
        - 语法：filterBy: 要过滤的东西；
        - 字符串千万不要忘了单引号；

    4. 排序用的过滤器：orderBy
        - 语法：orderBy 1或-1
        - 正常情况下会按正序排或倒序排；
        - 参数也可以是其它条件；

- 自定义过滤器：
```
Vue.filter('名字',function(参数){
    return 要处理的事;
});
```

- 拓展：
    1. Vue：可以认为是一个类，也可以认为是一个构造函数；
    2. 获取现在的时间戳：Date.now() 或 new Date().getTime();

- 过滤器例子：

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>过滤器总结</title>
<style>
    img {width: 300px;height: 150px;margin: 10px auto}
</style>
<script src="../libs/vue.js"></script>
<script>
window.onload = function(){
    var vm = new Vue({
        el:'#box',
        data:{
            name:'YHF'
        },
        methods:{
            show:function(){
                alert(this.name);
            }
        }
    });

};
</script>
</head>
<body>
<div id="box">
    <input type="text" @keyup="show|debounce 2000" />
</div>
</body>
</html>
```

### Vue2.0过滤器：

1. Vue2.0内置过滤器已经删除，通过JS自己实现；
2. json在2.0里面是直接转的；
3. 自定义过滤器传参变化：由空格变为逗号，用了函数的写法；
> 之前：{{msg | toDou '12' '5'}}
> 现在：{{msg | toDou('12','5')}}

4. 在Vue2.0中：debounce已经废弃；
    - 可以用lodash里面的一个方法代替：_.debounce(fn,时间)
    - 有时间研究一下lodash，这是一个非常好的工具库；

### 常见的自定义过滤器：

1. 时间过滤器：date

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>自定义：date</title>
<script src="../libs/vue.js"></script>
<script>
window.onload = function(){
    Vue.filter('date',function(input){
        var oDate = new Date(input);
        
    return oDate.getFullYear() + '-' + (oDate.getMonth()+1) + '-' + oDate.getDate() + ' ' + oDate.getHours() + ':' + oDate.getMinutes() + ':' + oDate.getSeconds();

    });


    new Vue({
        el:'#box',
        data:{
            a:Date.now()
        }
    });
};
</script>
</head>
<body>
<div id="box">
    <ul>
        <li>{{a | date}}</li>
    </ul>
</div>
</body>
</html>
```

2. 双数转换过滤器：toDou

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>自定义：toDou</title>
<script src="../libs/vue.js"></script>
<script>
window.onload = function(){
    Vue.filter('toDou',function(input,a,b){
        alert(a+','+b); //a,b为其它一些参数；
        return input<10?'0'+input:''+input;
    });

    new Vue({
        el:'#box',
        data:{
            name:9
        },
        methods:{
            show:function(){
                alert(this.name);
            }
        }
    });
};
</script>
</head>
<body>
<div id="box">
    <ul>
        <li>{{name | toDou}}</li>
    </ul>
</div>
</body>
</html>
```

3. HTML过滤器：filterHtml

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>自定义：filterHtml</title>
<script src="../libs/vue.js"></script>
<script>
//<h2>welcome</h2>
Vue.filter('filterHtml',{
    read:function(input){ //model-view
        alert(1);
        return input.replace(/<[^<]+>/g,'');
    },
    write:function(val){ //view -> model
        console.log(val);
        return val;
    }
});
window.onload=function(){
    var vm=new Vue({
        data:{
            msg:'<strong>welcome</strong>'
        }
    }).$mount('#box');
};
</script>
</head>
<body>
<div id="box">
    <input type="text" v-model="msg | filterHtml">
    <br>
    {{{msg}}}
</div>
</body>
</html>
```

## Vue交互

> 说明：vue本身不支持交互，如果要用，需要引入模块[vue-resource](https://github.com/pagekit/vue-resource)

- GET:
```
1.获取一个普通文本数据:
this.$http.get('aa.txt').then(function(res){
    alert(res.data);
},function(res){
    alert(res.status);
});

2.给服务发送数据:
this.$http.get('get.php',{
    a:1,
    b:2
}).then(function(res){
    alert(res.data);
},function(res){
    alert(res.status);
});
```

- POST:
```
this.$http.post('post.php',{
    a:1,
    b:20
},{
    emulateJSON:true
}).then(function(res){
    alert(res.data);
},function(res){
    alert(res.status);
});
```

- jsonp:走GET模式

```
https://sug.so.360.cn/suggest?callback=suggest_so&word=a
https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=jshow

this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
    wd:'a'
},{
    jsonp:'cb'  //callback名字，默认名字就是"callback"
}).then(function(res){
    alert(res.data.s);
},function(res){
    alert(res.status);
});
```

- 交互的第四种写法：this.$http({}).then(fuSucc,fnFailed);

```
this.$http({ //这里的http默认的就是一个GET；
    url:地址,
    data:{ //这里的data是给后台提交的数据,
        act:
        content:
    },
    method:
    jsonp:'cb' //cbName（这一项只有jsonp有）
}).then(fuSucc,fnFailed);
```

- 总结：
    1. Vue本身不支持交互，想实现需要引入官方库：vue-resouce.js；
    2. 三种交互模式：GET、POST、jsonp；
    3. HTTP重点包括request和response；

## Vue自定义键盘信息

- 自定义键盘信息：
    1. @keydown.enter
    2. @keydown.a/b/c~~~~~~
    3. 绑定键盘信息：Vue.directive('on').keyCodes.ctrl=17;

- Vue2.0自定义键盘指令的变化
    1. 之前：Vue.directive('on').keyCodes.ctrl=17;  
    2. 现在：Vue.config.keyCodes.ctrl=17;

- Vue自定义键盘信息

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>自定义键盘信息</title>
<script src="../libs/vue.js"></script>
<script>
window.onload = function(){
    Vue.directive('on').keyCodes.ctrl=17;
    var vm = new Vue({
        el:'#box',
        data:{
            name:'YHF',
        },
        methods:{
            show:function(){
                alert(this.name);
            }
        }
    });
};
</script>
</head>
<body>
<div id="box">  
    <!-- <input type="text" @keydown.enter="show" /> -->
    <!-- <input type="text" @keydown.a="show" /> -->
    <!-- <input type="text" @keydown.17="show" /> CTRL键-->
    <input type="text" @keydown.ctrl="show" />
</div>
</body>
</html>
```

## Vue自定义指令

- 自定义属性指令：
    - 语法：Vue.directive(指令名称,function(){});
    - 自定义指令时名字不带V，但是使用的时候要带；
    - 可以传递参数，但参数需要在数据中定义；
    - 指令的作用：扩展了 HTML 的语法；
    - 其中 this.el 表示当前节点，和 $el不一样；
    - 例子：拖拽；
    - 可以认为它是属性的指令；
    - 自定义属性方法默认就是使用的自定义元素的方法；

- 自定义元素指令：
    - 语法：
        Vue.elementDirective('yhf',{
            bind:function(){
                this.el.style.background = 'blue';
            }
        });

    - 元素指令用处不大；

- 自定义指令的例子：

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>自定义指令</title>
<style>
    yhf {width: 300px;height: 150px; background:gray; margin: 10px auto;display: block;line-height: 150px;text-align: center;}
</style>
<script src="../libs/vue1.0.js"></script>
<script>

window.onload = function(){
    /*
    Vue.directive('red',function(){
        this.el.style.background = 'red';
    });
    */
   
    /* 也可以传参；
    Vue.directive('red',function(red){
        this.el.style.background = red;
    });
    */
   
    Vue.elementDirective('yhf',{
        bind:function(){
            this.el.style.background = 'blue';
        }
    });

    var vm = new Vue({
        el:'#box',
        data:{
            msg:'YHF',
            red:'red'
        },
        methods:{
            show:function(){
                alert(this.name);
            }
        }
    });

};

</script>
</head>
<body>

<div id="box">
    
    <!-- <span v-red>{{msg}}</span> -->
    <!-- <span v-red="red">{{msg}}</span> -->

    <yhf>YHF</yhf>

</div>

</body>
</html>
```

## Vue自定义组件

### Vue1.0自定义组件：

1. 定义组件的第一种方式：全局组件：
```
    var Aaa = Vue.extend({
        template:'<h3>我是标题3</h3>'
    });

    Vue.component('aaa',Aaa);
```

2. 定义组件的第二种方式：也是全局组件；
```
    Vue.component('aaa',{
        template:'<h3>我是标题3</h3>'
    });
```

3. 局部组件：此处的自定义组件只能在特定范围内生效；

    - 第一种：
    ```
    var Aaa = Vue.extend({template:'<h3>我是标题3</h3>'});
    Vue.component('aaa',Aaa);

    new Vue({
        el:'#box',
        components:{'aaa':Aaa}
    });
    ```

    - 第二种：这种方式直接就替代了自定义组件方法了；
    ```
    new Vue({
        el:'#box',
        components:{'aaa':{
            template:'<h3>我是标题3</h3>'
        }}
    });
    ```

4. 配合模板：一般组件都会配合模板；

    - template:```'<h3>我是标题3</h3>'```
    - 推荐方法：
    ```
    <template id="tem">
        <h3>我是标题3</h3>
    </template>

    template:'#tem'
    ```

5. 动态组件：<component :is="a"></component>

    ```
    <div id="box">
        <input type="button" @click="a='aaa'" value="aaa组件">
        <input type="button" @click="a='bbb'" value="bbb组件">
        <component :is="a"></component>
    </div>

    <script>
        var vm=new Vue({
            el:'#box',
            data:{
                a:'aaa'
            },
            components:{
                'aaa':{
                    template:'<h2>我是aaa组件</h2>'
                },
                'bbb':{
                    template:'<h2>我是bbb组件</h2>'
                }
            }
        });

    </script>
    ```

6. 父子组件：

    - 子组件获取父组件的数据；
        - 在组件上面绑定一个自定义属性：```<bbb :m="msg"></bbb>```
        - 在相应的组件上面添加props属性：props:['m']
        - 在相应的模板中输出这个自定义属性的名字：```template:'<h1>Welcome BBB——>{{m}}</h1>'```
        - 绑定多个属性：```<bbb :m1="msg" :m2="msg2"></bbb>```
        - 注意：如果在HTML中用“-”，在调用的模板中就要用驼峰；
        - 第二步也可以写成：```props:{'m1':String,'m2':Number}```

    - 父级获取子级的数据：
        - vm.$emit(事件名,数据);
        - @事件名="" ，放在调用子组件的地方；
        - @ ===> v-on:

7. 以下属性在Vue 2.0 中已经删除：

    - vm.$dispatch(事件名,数据)  ：子级向父级发送数据
    - vm.$broadcast(事件名,数据) ：父级向子级广播数据
    - 要配合event:{}使用；

8. slot：占位置用的：
    - 相当于angular里面的translate
    - 语法：```<slot name="a1">这是默认情况</slot>```
    - 在向对应的节点中加 solt="a1" 这样的属性；
    - 如果页面中还有其它内容不想被覆盖；

9. 注意：
    - 自定义组件里面的数据为函数形式，且返回的是json，其它和原生的一样；
    - 动态组件可以制作选项卡；

10. Vue1.0自定义组件例子：

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>组件</title>
<script src="bower_components/vue/dist/vue.js"></script>
<style>
    #box {width: 600px;height: 600px; margin: 50px auto;}
    #div1 {width: 100px;height: 100px;background: red;}
</style>
<script>

window.onload = function(){

    /*var Aaa = Vue.extend({
        template:'<h3>我是标题3</h3>'
    });

    Vue.component('aaa',Aaa);*/

    Vue.component('aaa',{
        // data为函数形式，且千万记住后面是逗号；
        data(){
            return {
                msg:'我是标题3'
            };
        },

        template:'<h3>{{msg}}</h3>'
    });
    
    new Vue({
        el:'#box',
        data:{}
    });
};

</script>
</head>
<body>
    <div id="box">
        
        <aaa></aaa>

    </div>
</body>
</html>
```
11. 自定义全局组件：

- 使用别人的组件：Vue.use(组件名);
    - 组件不能用use，因为没有install；
    - custom：自定义；

- 自定义Vue全局组件：在入口文件中引入；

- 文件目录：
    |-index.js      导出组件，并且install
    |-Loading.vue   Loading组件

- 主要文件index.js代码：
```
import LoadingComponent from './Loading.vue'
//Loading上面有一个默认的方法：install，外面use的时候就会调用install本身的方法；
const Loading = {
    install:function(Vue){
        //Loading这个名字就是外界使用的名字；
        Vue.component('Loading',LoadingComponent)
    }
};

export default Loading
```
12. 子组件使用父组件的数据1

```
<!DOCTYPE html>
<html>
<head>
    <title>子组件使用父组件的数据</title>
    <script src="../libs/vue.js"></script>

<script>

window.onload = function(){
    new Vue({
        el:'#box',
        data:{
            msg:'Welcome'
        },

        components:{
            'aaa':{
                data(){
                    return {
                        msg:'Welcome'
                    }
                },

                template:'<h1>Welcome AAA</h1><bbb></bbb>',

                components:{
                    'bbb':{
                        template:'<h2>我是BBB</h2>'
                    }
                }
            }
        }
    });
};
        
</script>
</head>
<body>
<div id="box">

    <aaa>
        <bbb></bbb>
    </aaa>

    <hr>

    <bbb></bbb>

</div   
</body>
</html>
```
13. 子组件使用父组件的数据2

```
<!DOCTYPE html>
<html>
<head>
    <title>子组件使用父组件的数据</title>
    <script src="../libs/vue.js"></script>

<script>

window.onload = function(){
    new Vue({
        el:'#box',
        data:{
            msg:'Welcome'
        },

        components:{
            'aaa':{
                data(){
                    return {
                        msg:'Welcome'
                    }
                },

                template:'#aaa',

                components:{
                    'bbb':{
                        props:{
                            'm':String
                        },
                        template:'<h1>Welcome BBB——》{{m}}</h1>'
                    }
                }
            }
        }
    });
};
        
</script>
</head>
<body>

<template id="aaa">
    <h1>Welcome AAA——》{{msg}}</h1>
    <bbb :m="msg"></bbb>
</template>

<div id="box">

    <hr>

    <aaa></aaa>
 
</div   
</body>
</html>
```
14. 父级获取子级的数据

```
<!DOCTYPE html>
<html>
<head>
    <title>子组件使用父组件的数据</title>
    <script src="../libs/vue.js"></script>

<script>
window.onload = function(){
    new Vue({
        el:'#box',
        data:{
            a:'我是根组件的数据'
        },

        components:{
            'aaa':{

                data(){
                    return {
                        msg:''
                    }
                },

                template:'#aaa',

                methods:{
                    get(value){
                        this.msg = value;
                    }
                },

                components:{
                    'bbb':{
                        data(){
                            return {
                                b:'我是组件B的数据！'
                            }
                        },

                        template:'#bbb',

                        methods:{
                            send(){
                                this.$emit('child-msg',this.b);
                            }
                        }
                    }
                }
            }
        }
    });
};      
</script>
</head>
<body>

<template id="aaa">
    <h1>我是组件A：{{msg}}</h1>
    <hr>
    <bbb @child-msg="get"></bbb>
</template>

<template id="bbb">
    <h1>我是组件B:{{b}}</h1>
    <input type="button" value="点击" @click="send" >
</template>

<div id="box">
    <aaa></aaa>
</div   

</body>
</html>
```

### Vue2.0自定义组件：变得更为简洁

1. 局部组件：
```
    var Home = {
        template:'#Home'
    }
    Vue.component('aaa',Home);
```

2. 子组件写法： 
```       
    new Vue({
        el:'#box',
        data:{
            msg:'Welcome Vue2.0'
        },
        components:{
            'aaa':{
                template:'#Home'
            }
        }
    });
```

## Vue实例的简单方法

1. ```vm.$el```
2. ```vm.$data```
3. 手动挂载：```vm.$mount('#box')```，相当于 ```el:'#box'```
    ```new Vue({
        data:{a:1}
    }).$mount('#box');```
4. 获取自定义属性的配置方法：
        ```vm.$options.aa;```
5. 用来查看目前的一些数据状态：
    ```vm.$log();```
6. Vue实例的例子：
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Vue-模板</title>
<style>
    img {width: 300px;height: 150px;margin: 10px auto}
</style>
<script src="../libs/vue.js"></script>
<script>

window.onload = function(){
    var vm = new Vue({
        el:'#box',
        data:{
            a:1
        },
        aa:'这是自定义属性'
    });

    //alert(vm.$el); ——>[object HTMLDivElement]，获取的这个就是元素；
    //vm.$el.style.background = 'red';

    //alert(vm.$data.a);  ——>本身所带的数据对象；
    
    alert(vm.$options.aa);

};

</script>
</head>
<body>

<div id="box">

    <span>{{a}}</span>

</div>

</body>
</html>
```

## Vue生命周期

1. Vue1.0的生命周期(参考lifecycle.png)：VueJS在2.0以后对下面的东西有过修改；
    - 钩子函数：
        - created：实例已经创建；
        - beforeCompile：编译之前（实例创建完之后，编译之前会触发的东西）；
        - compiled：编译之后；
        - ready：将一些DOM节点等插入到文档中了；

        - 销毁：
            - beforeDestroy：销毁之前；
            - destroy：销毁之后；

2. Vue2.0的生命周期：
    - beforeCreate(){}：组件实例刚刚被创建，属性都没有
    - created(){}：实例已经创建完成，属性已经绑定
    - beforeMount(){}：模板编译之前
    - mounted(){}：模板编译之后，代替之前ready（*）
    - beforeUpdate(){}：组件更新之前
    - updated(){}：组件更新完毕（*）
    - beforeDestroy(){}：组件销毁前
    - destroyed(){}：组件销毁后

3.Vue1.0生命例子：
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Vue-生命周期</title>
<style>
    img {width: 300px;height: 150px;margin: 10px auto}
</style>
<script src="../libs/vue.js"></script>
<script>

window.onload = function(){
    var vm = new Vue({
        el:'#box',
        data:{
            msg:'Welcome'
        },
        
        // 1.创建好Vue这个实例后自动执行；
        created:function(){
            alert('实例已经创建');
        },

        // 2.实例创建完了，在编译之前会触发的东西；
        // 编译完之后数据模板{{}}里面的内容就会在内存中被替换；
        beforeCompile:function(){
            alert('编译之前');
        },

        // 3.编译之后；
        compiled:function(){
            alert('编译之后');
        },

        // 4.将一些DOM节点等插入到文档中了;
        ready:function(){
            alert('将一些DOM节点等插入到文档中了');
        },

        // 销毁之前；
        beforeDestroy:function(){
            alert('销毁之前');
        },

        // 销毁之后：已经销毁了；
        destroyed:function(){
            alert('已经销毁了');
        }

    });

    // 点击页面销毁Vue这个对象（或组件）；
    document.onclick = function(){
        vm.$destroy();
    };

};
```