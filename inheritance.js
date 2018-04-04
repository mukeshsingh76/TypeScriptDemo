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
var Customer1 = /** @class */ (function () {
    function Customer1() {
        this.CustomerCode = "Default Customer";
    }
    return Customer1;
}());
var GoldCustomer1 = /** @class */ (function (_super) {
    __extends(GoldCustomer1, _super);
    function GoldCustomer1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CustomerCode = "Gold Customer";
        return _this;
    }
    return GoldCustomer1;
}(Customer1));
