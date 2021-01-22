
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/GameRoot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c901dE8zAtBSKEafidliboX', 'GameRoot');
// src/scenes/GameRoot.ts

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
exports.GameRoot = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameRoot = /** @class */ (function (_super) {
    __extends(GameRoot, _super);
    function GameRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskPanel = null;
        _this.messageLabel = null;
        _this.tipPanel = null;
        _this.tipLabel = null;
        _this.headList = null;
        return _this;
    }
    GameRoot.prototype.showMaskMessage = function (message, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 0; }
        this.messageLabel.string = message;
        if (!this.maskPanel.active) {
            this.maskPanel.active = true;
        }
        if (timeout > 0) {
            setTimeout(function () { _this.hideMaskMessage(); }, timeout);
        }
    };
    GameRoot.prototype.hideMaskMessage = function () {
        this.maskPanel.active = false;
    };
    GameRoot.prototype.showTip = function (tip) {
        this.tipLabel.string = tip;
        this.tipPanel.getComponent(cc.Animation).play();
    };
    GameRoot.prototype.getHeadSprite = function (name) {
        return this.headList.getSpriteFrame(name);
    };
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "maskPanel", void 0);
    __decorate([
        property(cc.Label)
    ], GameRoot.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "tipPanel", void 0);
    __decorate([
        property(cc.Label)
    ], GameRoot.prototype, "tipLabel", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], GameRoot.prototype, "headList", void 0);
    GameRoot = __decorate([
        ccclass
    ], GameRoot);
    return GameRoot;
}(cc.Component));
exports.GameRoot = GameRoot;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXEdhbWVSb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXFCLEVBQUUsQ0FBQyxVQUFVLEVBQWpDLE9BQU8sYUFBQSxFQUFDLFFBQVEsY0FBaUIsQ0FBQztBQUd6QztJQUE4Qiw0QkFBWTtJQUExQztRQUFBLHFFQW1DQztRQWhDVyxlQUFTLEdBQVcsSUFBSSxDQUFDO1FBRXpCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQW1CLElBQUksQ0FBQzs7SUF3QjVDLENBQUM7SUF0QlUsa0NBQWUsR0FBdEIsVUFBdUIsT0FBYyxFQUFDLE9BQWtCO1FBQXhELGlCQVFDO1FBUnFDLHdCQUFBLEVBQUEsV0FBa0I7UUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ25DLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDaEM7UUFDRCxJQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFDWixVQUFVLENBQUMsY0FBSyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUEsQ0FBQSxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEQ7SUFDTCxDQUFDO0lBRU0sa0NBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVNLDBCQUFPLEdBQWQsVUFBZSxHQUFVO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVNLGdDQUFhLEdBQXBCLFVBQXFCLElBQVk7UUFDN0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDbUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNlO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQ2U7SUFYL0IsUUFBUTtRQURwQixPQUFPO09BQ0ssUUFBUSxDQW1DcEI7SUFBRCxlQUFDO0NBbkNELEFBbUNDLENBbkM2QixFQUFFLENBQUMsU0FBUyxHQW1DekM7QUFuQ1ksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcyxwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEdhbWVSb290IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbWFza1BhbmVsOmNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIG1lc3NhZ2VMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgdGlwUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIHRpcExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxuICAgIHByaXZhdGUgaGVhZExpc3Q6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcblxuICAgIHB1YmxpYyBzaG93TWFza01lc3NhZ2UobWVzc2FnZTpzdHJpbmcsdGltZW91dDpudW1iZXIgPSAwKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUxhYmVsLnN0cmluZyA9IG1lc3NhZ2U7XG4gICAgICAgIGlmKCF0aGlzLm1hc2tQYW5lbC5hY3RpdmUpe1xuICAgICAgICAgICAgdGhpcy5tYXNrUGFuZWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e3RoaXMuaGlkZU1hc2tNZXNzYWdlKCl9LHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGVNYXNrTWVzc2FnZSgpIHtcbiAgICAgICAgdGhpcy5tYXNrUGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dUaXAodGlwOnN0cmluZykge1xuICAgICAgICB0aGlzLnRpcExhYmVsLnN0cmluZyA9IHRpcDtcbiAgICAgICAgdGhpcy50aXBQYW5lbC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXRIZWFkU3ByaXRlKG5hbWU6IHN0cmluZyk6IGNjLlNwcml0ZUZyYW1lIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZExpc3QuZ2V0U3ByaXRlRnJhbWUobmFtZSk7XG4gICAgfVxufSJdfQ==