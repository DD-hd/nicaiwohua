
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/prepare/PrepareSeatLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97b5c4GuqxFPbivHtWMEEFz', 'PrepareSeatLayout');
// src/scenes/room/prepare/PrepareSeatLayout.ts

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
exports.PrepareSeatLayout = void 0;
var PrepareSeat_1 = require("./PrepareSeat");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PrepareSeatLayout = /** @class */ (function (_super) {
    __extends(PrepareSeatLayout, _super);
    function PrepareSeatLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prepareSeatPrefab = null;
        _this.seatMap = {};
        return _this;
    }
    PrepareSeatLayout.prototype.addUser = function (user) {
        var seatNode = cc.instantiate(this.prepareSeatPrefab);
        this.node.addChild(seatNode);
        var prepareSeat = seatNode.getComponent(PrepareSeat_1.PrepareSeat);
        prepareSeat.init(user);
        if (user.isReady) {
            prepareSeat.prepare();
        }
        this.seatMap[user.uid] = prepareSeat;
    };
    PrepareSeatLayout.prototype.leaveUser = function (uid) {
        this.seatMap[uid].node.destroy();
    };
    PrepareSeatLayout.prototype.prepareUser = function (uid) {
        this.seatMap[uid].prepare();
    };
    PrepareSeatLayout.prototype.removeAllUser = function () {
        this.seatMap = {};
        this.node.removeAllChildren();
    };
    __decorate([
        property(cc.Prefab)
    ], PrepareSeatLayout.prototype, "prepareSeatPrefab", void 0);
    PrepareSeatLayout = __decorate([
        ccclass
    ], PrepareSeatLayout);
    return PrepareSeatLayout;
}(cc.Component));
exports.PrepareSeatLayout = PrepareSeatLayout;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXHByZXBhcmVcXFByZXBhcmVTZWF0TGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFFdEMsSUFBQSxLQUFxQixFQUFFLENBQUMsVUFBVSxFQUFqQyxPQUFPLGFBQUEsRUFBQyxRQUFRLGNBQWlCLENBQUM7QUFHekM7SUFBdUMscUNBQVk7SUFBbkQ7UUFBQSxxRUE4QkM7UUEzQlcsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBRXBDLGFBQU8sR0FBRyxFQUFFLENBQUM7O0lBeUJ6QixDQUFDO0lBdkJVLG1DQUFPLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixJQUFJLFdBQVcsR0FBZSxRQUFRLENBQUMsWUFBWSxDQUFDLHlCQUFXLENBQUMsQ0FBQztRQUNqRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRU0scUNBQVMsR0FBaEIsVUFBaUIsR0FBRztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU0sdUNBQVcsR0FBbEIsVUFBbUIsR0FBRztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSx5Q0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBMUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0VBQ3dCO0lBSG5DLGlCQUFpQjtRQUQ3QixPQUFPO09BQ0ssaUJBQWlCLENBOEI3QjtJQUFELHdCQUFDO0NBOUJELEFBOEJDLENBOUJzQyxFQUFFLENBQUMsU0FBUyxHQThCbEQ7QUE5QlksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJlcGFyZVNlYXQgfSBmcm9tIFwiLi9QcmVwYXJlU2VhdFwiO1xuXG5jb25zdCB7Y2NjbGFzcyxwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFByZXBhcmVTZWF0TGF5b3V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgcHJlcGFyZVNlYXRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNlYXRNYXAgPSB7fTtcblxuICAgIHB1YmxpYyBhZGRVc2VyKHVzZXIpIHtcbiAgICAgICAgbGV0IHNlYXROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVwYXJlU2VhdFByZWZhYik7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChzZWF0Tm9kZSk7XG4gICAgICAgIGxldCBwcmVwYXJlU2VhdDpQcmVwYXJlU2VhdCA9IHNlYXROb2RlLmdldENvbXBvbmVudChQcmVwYXJlU2VhdCk7XG4gICAgICAgIHByZXBhcmVTZWF0LmluaXQodXNlcik7XG4gICAgICAgIGlmKHVzZXIuaXNSZWFkeSkge1xuICAgICAgICAgICAgcHJlcGFyZVNlYXQucHJlcGFyZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VhdE1hcFt1c2VyLnVpZF0gPSBwcmVwYXJlU2VhdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGVhdmVVc2VyKHVpZCkge1xuICAgICAgICB0aGlzLnNlYXRNYXBbdWlkXS5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJlcGFyZVVzZXIodWlkKSB7XG4gICAgICAgIHRoaXMuc2VhdE1hcFt1aWRdLnByZXBhcmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlQWxsVXNlcigpIHtcbiAgICAgICAgdGhpcy5zZWF0TWFwID0ge307XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIH1cbn0iXX0=