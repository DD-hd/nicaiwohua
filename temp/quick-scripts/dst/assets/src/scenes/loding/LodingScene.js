
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/loding/LodingScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36e9685DxVJ1YuBtWSPuUJq', 'LodingScene');
// src/scenes/loding/LodingScene.ts

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
exports.LodingScene = void 0;
var G_1 = require("../../G");
var GameRoot_1 = require("../GameRoot");
var NextHttp_1 = require("../../utils/NextHttp");
var NextWebSocket_1 = require("../../utils/NextWebSocket");
var RoomModel_1 = require("../../models/RoomModel");
var UserModel_1 = require("../../models/UserModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LodingScene = /** @class */ (function (_super) {
    __extends(LodingScene, _super);
    function LodingScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameRoot = null;
        return _this;
    }
    LodingScene.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.gameRoot);
        this.initGlobal();
    };
    LodingScene.prototype.initGlobal = function () {
        G_1.G.http = new NextHttp_1.NextHttp();
        G_1.G.ws = new NextWebSocket_1.NextWebSocket();
        G_1.G.room = new RoomModel_1.RoomModel();
        G_1.G.user = new UserModel_1.UserModel();
        G_1.G.gameRoot = this.gameRoot.getComponent(GameRoot_1.GameRoot);
    };
    LodingScene.prototype.start = function () {
        cc.director.setDisplayStats(false);
        G_1.G.gameRoot.showMaskMessage("正在加载资源");
        setTimeout(function () {
            G_1.G.gameRoot.hideMaskMessage();
            G_1.G.onLodingSuccess();
        }, 2000);
    };
    __decorate([
        property(cc.Node)
    ], LodingScene.prototype, "gameRoot", void 0);
    LodingScene = __decorate([
        ccclass
    ], LodingScene);
    return LodingScene;
}(cc.Component));
exports.LodingScene = LodingScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXGxvZGluZ1xcTG9kaW5nU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE0QjtBQUM1Qix3Q0FBdUM7QUFDdkMsaURBQWdEO0FBQ2hELDJEQUEwRDtBQUMxRCxvREFBbUQ7QUFDbkQsb0RBQW1EO0FBRTdDLElBQUEsS0FBcUIsRUFBRSxDQUFDLFVBQVUsRUFBakMsT0FBTyxhQUFBLEVBQUMsUUFBUSxjQUFpQixDQUFDO0FBR3pDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBNEJDO1FBekJXLGNBQVEsR0FBVyxJQUFJLENBQUM7O0lBeUJwQyxDQUFDO0lBdkJHLDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSxLQUFDLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQ3hCLEtBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFFM0IsS0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUN6QixLQUFDLENBQUMsSUFBSSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBRXpCLEtBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsbUJBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsS0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsVUFBVSxDQUFDO1lBQ1AsS0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM3QixLQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFBO0lBQ1gsQ0FBQztJQXhCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNjO0lBSHZCLFdBQVc7UUFEdkIsT0FBTztPQUNLLFdBQVcsQ0E0QnZCO0lBQUQsa0JBQUM7Q0E1QkQsQUE0QkMsQ0E1QmdDLEVBQUUsQ0FBQyxTQUFTLEdBNEI1QztBQTVCWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcgfSBmcm9tIFwiLi4vLi4vR1wiO1xuaW1wb3J0IHsgR2FtZVJvb3QgfSBmcm9tIFwiLi4vR2FtZVJvb3RcIjtcbmltcG9ydCB7IE5leHRIdHRwIH0gZnJvbSBcIi4uLy4uL3V0aWxzL05leHRIdHRwXCI7XG5pbXBvcnQgeyBOZXh0V2ViU29ja2V0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL05leHRXZWJTb2NrZXRcIjtcbmltcG9ydCB7IFJvb21Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUm9vbU1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1VzZXJNb2RlbFwiO1xuXG5jb25zdCB7Y2NjbGFzcyxwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIExvZGluZ1NjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZ2FtZVJvb3Q6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMuZ2FtZVJvb3QpO1xuICAgICAgICB0aGlzLmluaXRHbG9iYWwoKTtcbiAgICB9XG5cbiAgICBpbml0R2xvYmFsKCkge1xuICAgICAgICBHLmh0dHAgPSBuZXcgTmV4dEh0dHAoKTtcbiAgICAgICAgRy53cyA9IG5ldyBOZXh0V2ViU29ja2V0KCk7XG4gICAgICAgIFxuICAgICAgICBHLnJvb20gPSBuZXcgUm9vbU1vZGVsKCk7XG4gICAgICAgIEcudXNlciA9IG5ldyBVc2VyTW9kZWwoKTtcblxuICAgICAgICBHLmdhbWVSb290ID0gdGhpcy5nYW1lUm9vdC5nZXRDb21wb25lbnQoR2FtZVJvb3QpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIuato+WcqOWKoOi9vei1hOa6kFwiKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgRy5nYW1lUm9vdC5oaWRlTWFza01lc3NhZ2UoKTtcbiAgICAgICAgICAgIEcub25Mb2RpbmdTdWNjZXNzKCk7XG4gICAgICAgIH0sMjAwMClcbiAgICB9XG59Il19