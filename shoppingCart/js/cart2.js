/**
 * Created by YHF on 2017/3/11.
 */
new Vue({
    // el为Vue实例的监听范围；
    el: "#app",

    // 数据模型；
    data: {
        totalMoney: 0,
        productList: [],
        checkAllFlag: false,
        delFlag: false,
        curProduct: ''
    },

    // 局部过滤器；
    filters: {
        formatMoney: function (value) {
            return "￥ " + value.toFixed(2);
        }
    },

    // 生命周期：mounted为模板编译之后，代替之前ready；
    mounted: function () {
        this.$nextTick(function () {
            this.cartView();
        })
    },

    // 方法：用来定义事件绑定的方法；
    methods: {
        cartView: function () {
            var _this = this;
            this.$http.get("data/cart.json").then(function (res) {
                _this.productList = res.body.result.productList;
            });
        },
        changeMoney: function (product, way) {
            if (way > 0) {
                product.productQuentity++;
            } else {
                product.productQuentity--;
                if (product.productQuentity < 1) {
                    product.productQuentity = 1;
                }
            }
            this.calcTotalPrice();
        },
        selectedProduct: function (item) {
            if (typeof item.checked == 'undefined') {
                this.$set(item, "checked", true)
            } else {
                item.checked = !item.checked;
            }
            this.calcTotalPrice();
        },
        checkAll: function (flag) {
            this.checkAllFlag = flag;
            var _this = this;
            this.productList.forEach(function (item, index) {
                if (typeof item.checked == 'undefined') {
                    _this.$set(item, "checked", _this.checkAllFlag)
                } else {
                    item.checked = _this.checkAllFlag;
                }
            });
            this.calcTotalPrice();
        },
        calcTotalPrice: function () {
            var _this = this;
            _this.totalMoney = 0;
            this.productList.forEach(function (item, index) {
                if (item.checked) {
                    _this.totalMoney += item.productPrice * item.productQuentity;
                }
            });
        },
        delConfirm: function (item) {
            this.delFlag = true;
            this.curProduct = item;
        },
        delProduct: function () {
            var index = this.productList.indexOf(this.curProduct);
            this.productList.splice(index, 1);
            this.delFlag = false;
        }
    }
});

// 全局过滤器；
Vue.filter("money", function (value, type) {
    return "￥ " + value.toFixed(2) + type;
})