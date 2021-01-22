"use strict";
cc._RF.push(module, 'd5e69ngmwdHPYTxDucvcbhW', 'PrepareSeat');
// src/scenes/room/prepare/PrepareSeat.ts

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
exports.PrepareSeat = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PrepareSeat = /** @class */ (function (_super) {
    __extends(PrepareSeat, _super);
    function PrepareSeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.usernameLabel = null;
        _this.prepareIcon = null;
        return _this;
    }
    PrepareSeat.prototype.init = function (user) {
        this.usernameLabel.string = user.username;
    };
    PrepareSeat.prototype.prepare = function () {
        this.prepareIcon.active = true;
    };
    __decorate([
        property(cc.Label)
    ], PrepareSeat.prototype, "usernameLabel", void 0);
    __decorate([
        property(cc.Node)
    ], PrepareSeat.prototype, "prepareIcon", void 0);
    PrepareSeat = __decorate([
        ccclass
    ], PrepareSeat);
    return PrepareSeat;
}(cc.Component));
exports.PrepareSeat = PrepareSeat;

cc._RF.pop();