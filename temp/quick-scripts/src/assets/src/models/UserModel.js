"use strict";
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