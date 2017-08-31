/**
 * Created by 王立强 on 2017/2/24.
 */
new Vue({
    el: "#app",
    data: {
        totalMoney: 0,
        productList: [],
        checkAllFlag: false,
        delFlag: false,
        curProduct: ''
    },
    filters: {
        formatMoney: function (value) {
            return "￥ " + value.toFixed(2);
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.cartView();
        })
    },
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
Vue.filter("money", function (value, type) {
    return "￥ " + value.toFixed(2) + type;
})