"use strict";
cc._RF.push(module, 'f87b5FbYiJD/by92bD82FtF', 'LoginScene');
// src/scenes/login/LoginScene.ts

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
var G_1 = require("../../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoginScene = /** @class */ (function (_super) {
    __extends(LoginScene, _super);
    function LoginScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.usernameInputBox = null;
        _this.passwordInputBox = null;
        _this.loginButton = null;
        _this.registerButton = null;
        return _this;
    }
    LoginScene.prototype.start = function () {
        this.addListeners();
        if (!G_1.G.ws.isOpen()) {
            G_1.G.gameRoot.showMaskMessage("正在连接服务器");
            G_1.G.ws.connect("ws://127.0.0.1:1323/ws");
            // G.ws.connect("ws://192.168.2.102:1323/ws");
            // G.ws.connect("ws://192.168.199.237:1323/ws");
            // G.ws.connect("ws://119.29.40.244:1323/ws");
        }
    };
    LoginScene.prototype.addListeners = function () {
        this.loginButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnLogin, this);
        this.registerButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnRegister, this);
        G_1.G.ws.on("ws_open", this.onWsOpenSuccess, this);
        G_1.G.ws.on("login", this.onWsLoginSuccess, this);
        G_1.G.ws.on("error", this.onWsError, this);
    };
    LoginScene.prototype.onBtnLogin = function () {
        G_1.G.gameRoot.showMaskMessage("正在登陆");
        var username = this.usernameInputBox.string;
        var password = this.passwordInputBox.string;
        var params = {
            username: username,
            password: password
        };
        G_1.G.ws.emit("login", params);
    };
    LoginScene.prototype.onBtnRegister = function () {
        G_1.G.onEnterRegister();
    };
    LoginScene.prototype.onWsOpenSuccess = function (data) {
        G_1.G.gameRoot.hideMaskMessage();
    };
    LoginScene.prototype.onWsLoginSuccess = function (data) {
        G_1.G.gameRoot.hideMaskMessage();
        G_1.G.onLoginSuccess(data);
    };
    LoginScene.prototype.onWsError = function (err) {
        G_1.G.gameRoot.hideMaskMessage();
        G_1.G.gameRoot.showTip(err.message);
        // G.gameRoot.showMaskMessage(err.message,1000);
    };
    LoginScene.prototype.onBtnTest1 = function () {
        G_1.G.gameRoot.showMaskMessage("正在登陆");
        var params = {
            username: "001",
            password: "001"
        };
        G_1.G.ws.emit("login", params);
    };
    LoginScene.prototype.onBtnTest2 = function () {
        G_1.G.gameRoot.showMaskMessage("正在登陆");
        var params = {
            username: "002",
            password: "002"
        };
        G_1.G.ws.emit("login", params);
    };
    LoginScene.prototype.onBtnTest3 = function () {
        G_1.G.gameRoot.showMaskMessage("正在登陆");
        var params = {
            username: "003",
            password: "003"
        };
        G_1.G.ws.emit("login", params);
    };
    LoginScene.prototype.onBtnTest4 = function () {
        G_1.G.gameRoot.showMaskMessage("正在登陆");
        var params = {
            username: "004",
            password: "004"
        };
        G_1.G.ws.emit("login", params);
    };
    __decorate([
        property(cc.EditBox)
    ], LoginScene.prototype, "usernameInputBox", void 0);
    __decorate([
        property(cc.EditBox)
    ], LoginScene.prototype, "passwordInputBox", void 0);
    __decorate([
        property(cc.Button)
    ], LoginScene.prototype, "loginButton", void 0);
    __decorate([
        property(cc.Button)
    ], LoginScene.prototype, "registerButton", void 0);
    LoginScene = __decorate([
        ccclass
    ], LoginScene);
    return LoginScene;
}(cc.Component));
exports.default = LoginScene;

cc._RF.pop();