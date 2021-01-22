
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/desk/GameSeat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb657zZFjxGdKGG4kK3r8sB', 'GameSeat');
// src/scenes/room/desk/GameSeat.ts

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
exports.GameSeat = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameSeat = /** @class */ (function (_super) {
    __extends(GameSeat, _super);
    function GameSeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.usernameLabel = null;
        _this.tipLabel = null;
        return _this;
    }
    GameSeat.prototype.init = function (user) {
        this.usernameLabel.string = user.username + "\n" + user.score;
    };
    GameSeat.prototype.showTip = function (tip) {
        this.tipLabel.node.active = true;
        this.tipLabel.string = tip;
    };
    GameSeat.prototype.hideTip = function () {
        this.tipLabel.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], GameSeat.prototype, "usernameLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameSeat.prototype, "tipLabel", void 0);
    GameSeat = __decorate([
        ccclass
    ], GameSeat);
    return GameSeat;
}(cc.Component));
exports.GameSeat = GameSeat;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXGRlc2tcXEdhbWVTZWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4Qiw0QkFBWTtJQUExQztRQUFBLHFFQW9CQztRQWpCVyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQWEsSUFBSSxDQUFDOztJQWV0QyxDQUFDO0lBYlUsdUJBQUksR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ2xFLENBQUM7SUFFTSwwQkFBTyxHQUFkLFVBQWUsR0FBVTtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUMvQixDQUFDO0lBRU0sMEJBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQWZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ29CO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ2U7SUFMekIsUUFBUTtRQURwQixPQUFPO09BQ0ssUUFBUSxDQW9CcEI7SUFBRCxlQUFDO0NBcEJELEFBb0JDLENBcEI2QixFQUFFLENBQUMsU0FBUyxHQW9CekM7QUFwQlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEdhbWVTZWF0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIHVzZXJuYW1lTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSB0aXBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHVibGljIGluaXQodXNlcikge1xuICAgICAgICB0aGlzLnVzZXJuYW1lTGFiZWwuc3RyaW5nID0gdXNlci51c2VybmFtZSArIFwiXFxuXCIgKyB1c2VyLnNjb3JlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93VGlwKHRpcDpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aXBMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudGlwTGFiZWwuc3RyaW5nID0gdGlwO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlVGlwKCkge1xuICAgICAgICB0aGlzLnRpcExhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG59Il19