/**
 * Created by YHF on 2017/3/11.
 */
var vm = new Vue({
    // el为Vue实例的监听范围；
    el: "#app",

    // 数据模型；
    data: {
        totalMoney: 0,
        productList: []
    },

    // 局部过滤器；
    filters: {
        
    },

    // 生命周期：mounted为模板编译之后，代替之前ready；
    mounted: function () {
        this.$nextTick(function () {
            this.cartView();
        })
    },

    // 方法：用来定义事件绑定的方法；
    methods: {
        cartView: function() {
	        var _this = this;
	        this.$http.get("data/cartData.json", {"id": 123}).then(function(res) {
	          _this.productList = res.body.result.list;
	          _this.totalMoney =  res.body.result.totalMoney;
	        });
	    }
    }
});

// 全局过滤器；
Vue.filter("money", function (value, type) {
    return "￥ " + value.toFixed(2) + type;
})