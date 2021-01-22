"use strict";
cc._RF.push(module, '404614DVrpDjZb7s5Bqm604', 'HeadSelect');
// src/scenes/register/HeadSelect.ts

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
exports.HeadSelect = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HeadSelect = /** @class */ (function (_super) {
    __extends(HeadSelect, _super);
    function HeadSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headSprite = null;
        _this.leftButton = null;
        _this.rightButton = null;
        _this.headList = null;
        _this.headId = 0;
        return _this;
    }
    HeadSelect.prototype.getHead = function () {
        return this.headId + "";
    };
    HeadSelect.prototype.start = function () {
        this.leftButton.on(cc.Node.EventType.TOUCH_END, this.onBtnLeft, this);
        this.rightButton.on(cc.Node.EventType.TOUCH_END, this.onBtnRight, this);
    };
    HeadSelect.prototype.onBtnLeft = function () {
        this.headId = this.headId === 0 ? 7 : (this.headId - 1);
        this.setHeadSprite();
    };
    HeadSelect.prototype.onBtnRight = function () {
        this.headId = this.headId === 7 ? 0 : (this.headId + 1);
        this.setHeadSprite();
    };
    HeadSelect.prototype.setHeadSprite = function () {
        this.headSprite.spriteFrame = this.headList.getSpriteFrame(this.headId + "");
    };
    __decorate([
        property(cc.Sprite)
    ], HeadSelect.prototype, "headSprite", void 0);
    __decorate([
        property(cc.Node)
    ], HeadSelect.prototype, "leftButton", void 0);
    __decorate([
        property(cc.Node)
    ], HeadSelect.prototype, "rightButton", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], HeadSelect.prototype, "headList", void 0);
    HeadSelect = __decorate([
        ccclass
    ], HeadSelect);
    return HeadSelect;
}(cc.Component));
exports.HeadSelect = HeadSelect;

cc._RF.pop();