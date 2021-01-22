"use strict";
cc._RF.push(module, '6cf4ba1uexM+LxzOyDjW0cr', 'BulletMessage');
// src/scenes/room/message/BulletMessage.ts

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
exports.BulletMessage = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletMessage = /** @class */ (function (_super) {
    __extends(BulletMessage, _super);
    function BulletMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.messageBox = null;
        _this.messageLabel = null;
        return _this;
    }
    BulletMessage.prototype.show = function (message) {
        this.messageLabel.string = message;
    };
    __decorate([
        property(cc.Node)
    ], BulletMessage.prototype, "messageBox", void 0);
    __decorate([
        property(cc.Label)
    ], BulletMessage.prototype, "messageLabel", void 0);
    BulletMessage = __decorate([
        ccclass
    ], BulletMessage);
    return BulletMessage;
}(cc.Component));
exports.BulletMessage = BulletMessage;

cc._RF.pop();