
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/login/LoginScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXGxvZ2luXFxMb2dpblNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE0QjtBQUV0QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTZGQztRQTFGVyxzQkFBZ0IsR0FBZSxJQUFJLENBQUM7UUFFcEMsc0JBQWdCLEdBQWUsSUFBSSxDQUFDO1FBRXBDLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLG9CQUFjLEdBQWMsSUFBSSxDQUFDOztJQW9GN0MsQ0FBQztJQWxGVSwwQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUcsQ0FBQyxLQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2YsS0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEMsS0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN2Qyw4Q0FBOEM7WUFDOUMsZ0RBQWdEO1lBQ2hELDhDQUE4QztTQUNqRDtJQUNMLENBQUM7SUFFTSxpQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkYsS0FBQyxDQUFDLEVB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QXhGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3dEQUN1QjtJQUU1QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3dEQUN1QjtJQUU1QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNrQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNxQjtJQVR4QixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNkY5QjtJQUFELGlCQUFDO0NBN0ZELEFBNkZDLENBN0Z1QyxFQUFFLENBQUMsU0FBUyxHQTZGbkQ7a0JBN0ZvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi9HXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5TY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIHVzZXJuYW1lSW5wdXRCb3g6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIHByaXZhdGUgcGFzc3dvcmRJbnB1dEJveDogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIGxvZ2luQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgcHJpdmF0ZSByZWdpc3RlckJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgaWYoIUcud3MuaXNPcGVuKCkpIHtcbiAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5q2j5Zyo6L+e5o6l5pyN5Yqh5ZmoXCIpO1xuICAgICAgICAgICAgRy53cy5jb25uZWN0KFwid3M6Ly8xMjcuMC4wLjE6MTMyMy93c1wiKTtcbiAgICAgICAgICAgIC8vIEcud3MuY29ubmVjdChcIndzOi8vMTkyLjE2OC4yLjEwMjoxMzIzL3dzXCIpO1xuICAgICAgICAgICAgLy8gRy53cy5jb25uZWN0KFwid3M6Ly8xOTIuMTY4LjE5OS4yMzc6MTMyMy93c1wiKTtcbiAgICAgICAgICAgIC8vIEcud3MuY29ubmVjdChcIndzOi8vMTE5LjI5LjQwLjI0NDoxMzIzL3dzXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5sb2dpbkJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ0bkxvZ2luLCB0aGlzKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ0blJlZ2lzdGVyLCB0aGlzKTtcbiAgICAgICAgRy53cy5vbihcIndzX29wZW5cIix0aGlzLm9uV3NPcGVuU3VjY2Vzcyx0aGlzKTtcbiAgICAgICAgRy53cy5vbihcImxvZ2luXCIsdGhpcy5vbldzTG9naW5TdWNjZXNzLHRoaXMpO1xuICAgICAgICBHLndzLm9uKFwiZXJyb3JcIix0aGlzLm9uV3NFcnJvcix0aGlzKTtcbiAgICB9XG5cbiAgICBvbkJ0bkxvZ2luKCkge1xuICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIuato+WcqOeZu+mZhlwiKTtcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gdGhpcy51c2VybmFtZUlucHV0Qm94LnN0cmluZztcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gdGhpcy5wYXNzd29yZElucHV0Qm94LnN0cmluZztcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIEcud3MuZW1pdChcImxvZ2luXCIscGFyYW1zKTtcbiAgICB9XG5cbiAgICBvbkJ0blJlZ2lzdGVyKCkge1xuICAgICAgICBHLm9uRW50ZXJSZWdpc3RlcigpO1xuICAgIH1cblxuICAgIG9uV3NPcGVuU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIEcuZ2FtZVJvb3QuaGlkZU1hc2tNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgb25Xc0xvZ2luU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIEcuZ2FtZVJvb3QuaGlkZU1hc2tNZXNzYWdlKCk7XG4gICAgICAgIEcub25Mb2dpblN1Y2Nlc3MoZGF0YSk7XG4gICAgfVxuXG4gICAgb25Xc0Vycm9yKGVycikge1xuICAgICAgICBHLmdhbWVSb290LmhpZGVNYXNrTWVzc2FnZSgpO1xuICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAvLyBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShlcnIubWVzc2FnZSwxMDAwKTtcbiAgICB9XG5cbiAgICBvbkJ0blRlc3QxKCl7XG4gICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5q2j5Zyo55m76ZmGXCIpO1xuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IFwiMDAxXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCIwMDFcIlxuICAgICAgICB9XG4gICAgICAgIEcud3MuZW1pdChcImxvZ2luXCIscGFyYW1zKTtcbiAgICB9XG4gICAgb25CdG5UZXN0MigpIHtcbiAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLmraPlnKjnmbvpmYZcIik7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogXCIwMDJcIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIjAwMlwiXG4gICAgICAgIH1cbiAgICAgICAgRy53cy5lbWl0KFwibG9naW5cIixwYXJhbXMpO1xuICAgIH1cbiAgICBvbkJ0blRlc3QzKCkge1xuICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIuato+WcqOeZu+mZhlwiKTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIjAwM1wiLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiMDAzXCJcbiAgICAgICAgfVxuICAgICAgICBHLndzLmVtaXQoXCJsb2dpblwiLHBhcmFtcyk7XG4gICAgfVxuICAgIG9uQnRuVGVzdDQoKSB7XG4gICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5q2j5Zyo55m76ZmGXCIpO1xuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IFwiMDA0XCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCIwMDRcIlxuICAgICAgICB9XG4gICAgICAgIEcud3MuZW1pdChcImxvZ2luXCIscGFyYW1zKTtcbiAgICB9XG5cbn1cbiJdfQ==