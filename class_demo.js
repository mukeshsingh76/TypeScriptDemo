var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer() {
        this.CustomerCode = "Default Customer";
    }
    return Customer;
}());
var GoldCustomer = /** @class */ (function (_super) {
    __extends(GoldCustomer, _super);
    function GoldCustomer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CustomerCode = "Gold Customer";
        return _this;
    }
    return GoldCustomer;
}(Customer));
var cust = new Customer();
console.log(cust.CustomerCode);
var goldcust = new GoldCustomer();
console.log(goldcust.CustomerCode);
