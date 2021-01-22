"use strict";
cc._RF.push(module, '15d7cJ0n7ZIFqvq8XoeSRtL', 'RegisterScene');
// src/scenes/register/RegisterScene.ts

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
exports.RegisterScene = void 0;
var G_1 = require("../../G");
var HeadSelect_1 = require("./HeadSelect");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RegisterScene = /** @class */ (function (_super) {
    __extends(RegisterScene, _super);
    function RegisterScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headSelect = null;
        _this.usernameInput = null;
        _this.pwdInput = null;
        _this.pwdConfirmInput = null;
        _this.registerButton = null;
        _this.returnLoginButton = null;
        return _this;
    }
    RegisterScene.prototype.start = function () {
        this.addListeners();
    };
    RegisterScene.prototype.onBtnRegister = function () {
        var username = this.usernameInput.string;
        var pwd1 = this.pwdInput.string;
        var pwd2 = this.pwdConfirmInput.string;
        if (username === "" || pwd1 === "" || pwd2 === "") {
            G_1.G.gameRoot.showTip("用户名和密码不能为空！");
        }
        else if (pwd1 !== pwd2) {
            G_1.G.gameRoot.showTip("两次密码不同！");
        }
        else {
            var head = this.headSelect.getHead();
            var params = {
                username: username,
                password: pwd1,
                head: head
            };
            G_1.G.ws.emit("register", params);
        }
    };
    RegisterScene.prototype.onWsRegisterSuccess = function () {
        G_1.G.gameRoot.showTip("注册成功");
    };
    RegisterScene.prototype.onBtnReturnLogin = function () {
        cc.director.loadScene("login");
    };
    RegisterScene.prototype.addListeners = function () {
        this.registerButton.on(cc.Node.EventType.TOUCH_END, this.onBtnRegister, this);
        this.returnLoginButton.on(cc.Node.EventType.TOUCH_END, this.onBtnReturnLogin, this);
        G_1.G.ws.on("register", this.onWsRegisterSuccess, this);
    };
    __decorate([
        property(HeadSelect_1.HeadSelect)
    ], RegisterScene.prototype, "headSelect", void 0);
    __decorate([
        property(cc.EditBox)
    ], RegisterScene.prototype, "usernameInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], RegisterScene.prototype, "pwdInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], RegisterScene.prototype, "pwdConfirmInput", void 0);
    __decorate([
        property(cc.Node)
    ], RegisterScene.prototype, "registerButton", void 0);
    __decorate([
        property(cc.Node)
    ], RegisterScene.prototype, "returnLoginButton", void 0);
    RegisterScene = __decorate([
        ccclass
    ], RegisterScene);
    return RegisterScene;
}(cc.Component));
exports.RegisterScene = RegisterScene;

cc._RF.pop();