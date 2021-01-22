"use strict";
cc._RF.push(module, 'edc2endFO9A4rdw5VupHBIg', 'TopBar');
// src/scenes/room/topbar/TopBar.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBar = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TopBar = /** @class */ (function (_super) {
    __extends(TopBar, _super);
    function TopBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.centerLabel = null;
        _this.tickerLabel = null;
        _this.tickNumber = 0;
        _this.intervalId = -1;
        return _this;
    }
    TopBar.prototype.showMessage = function (message) {
        this.centerLabel.string = message;
    };
    TopBar.prototype.showTicker = function (n) {
        var _this = this;
        clearInterval(this.intervalId);
        this.tickNumber = n;
        this.tickerLabel.string = this.tickNumber + "";
        this.intervalId = setInterval(function () {
            _this.tickNumber--;
            _this.tickerLabel.string = _this.tickNumber + "";
            if (_this.tickNumber <= 0) {
                clearInterval(_this.intervalId);
            }
        }, 1000);
    };
    TopBar.prototype.hideTicker = function () {
        this.tickerLabel.string = "-";
    };
    __decorate([
        property(cc.Label)
    ], TopBar.prototype, "centerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], TopBar.prototype, "tickerLabel", void 0);
    TopBar = __decorate([
        ccclass
    ], TopBar);
    return TopBar;
}(cc.Component));
exports.TopBar = TopBar;

cc._RF.pop();