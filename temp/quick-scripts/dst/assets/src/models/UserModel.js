
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/models/UserModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99bc3cHK61GLaRChkFH1zsk', 'UserModel');
// src/models/UserModel.ts

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
exports.UserModel = void 0;
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.user = {};
        _this.username = "";
        _this.head = "0";
        _this.uid = "";
        _this.rid = 0;
        return _this;
    }
    UserModel.prototype.setUser = function (userData) {
        this.user = userData;
    };
    UserModel.prototype.getUsername = function () {
        return this.user.username;
    };
    UserModel.prototype.getUserHead = function () {
        return G_1.G.gameRoot.getHeadSprite(this.user.head);
    };
    UserModel.prototype.setScore = function (score) {
        this.user.score = score;
    };
    UserModel.prototype.getScore = function () {
        return this.user.score;
    };
    UserModel.prototype.getUid = function () {
        return this.user.uid;
    };
    UserModel.prototype.getSeat = function () {
        return this.user.seat;
    };
    UserModel = __decorate([
        ccclass
    ], UserModel);
    return UserModel;
}(cc.Component));
exports.UserModel = UserModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxtb2RlbHNcXFVzZXJNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQXlCO0FBRW5CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBa0NDO1FBakNTLFVBQUksR0FBUSxFQUFFLENBQUM7UUFDZixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFVBQUksR0FBVyxHQUFHLENBQUM7UUFDbkIsU0FBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixTQUFHLEdBQVcsQ0FBQyxDQUFDOztJQTZCMUIsQ0FBQztJQTNCUSwyQkFBTyxHQUFkLFVBQWUsUUFBUTtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU0sK0JBQVcsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFFTSwrQkFBVyxHQUFsQjtRQUNFLE9BQU8sS0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sNEJBQVEsR0FBZixVQUFnQixLQUFhO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVNLDBCQUFNLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN4QixDQUFDO0lBakNVLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FrQ3JCO0lBQUQsZ0JBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQzhCLEVBQUUsQ0FBQyxTQUFTLEdBa0MxQztBQWxDWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFVzZXJNb2RlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHByaXZhdGUgdXNlcjogYW55ID0ge307XG4gIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZyA9IFwiXCI7XG4gIHByaXZhdGUgaGVhZDogc3RyaW5nID0gXCIwXCI7XG4gIHByaXZhdGUgdWlkOiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIHJpZDogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgc2V0VXNlcih1c2VyRGF0YSkge1xuICAgIHRoaXMudXNlciA9IHVzZXJEYXRhO1xuICB9XG5cbiAgcHVibGljIGdldFVzZXJuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXNlci51c2VybmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVc2VySGVhZCgpOiBjYy5TcHJpdGVGcmFtZSB7XG4gICAgcmV0dXJuIEcuZ2FtZVJvb3QuZ2V0SGVhZFNwcml0ZSh0aGlzLnVzZXIuaGVhZCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2NvcmUoc2NvcmU6IG51bWJlcikge1xuICAgIHRoaXMudXNlci5zY29yZSA9IHNjb3JlO1xuICB9XG5cbiAgcHVibGljIGdldFNjb3JlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudXNlci5zY29yZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy51c2VyLnVpZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWF0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudXNlci5zZWF0O1xuICB9XG59XG4iXX0=