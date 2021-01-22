
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/register/RegisterScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJlZ2lzdGVyXFxSZWdpc3RlclNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBNEI7QUFDNUIsMkNBQTBDO0FBRXBDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLGlDQUFZO0lBQS9DO1FBQUEscUVBb0RDO1FBakRXLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWUsSUFBSSxDQUFDO1FBRWpDLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFFNUIscUJBQWUsR0FBZSxJQUFJLENBQUM7UUFFbkMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsdUJBQWlCLEdBQVksSUFBSSxDQUFDOztJQXVDOUMsQ0FBQztJQXJDRyw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxRQUFRLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUMvQyxLQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUN0QixLQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQyxJQUFJLE1BQU0sR0FBRztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLElBQUk7YUFDYixDQUFBO1lBQ0QsS0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVPLDJDQUFtQixHQUEzQjtRQUNJLEtBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTyx3Q0FBZ0IsR0FBeEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU8sb0NBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEYsS0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBL0NEO1FBREMsUUFBUSxDQUFDLHVCQUFVLENBQUM7cURBQ2lCO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0RBQ29CO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7bURBQ2U7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswREFDc0I7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDcUI7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFDd0I7SUFiakMsYUFBYTtRQUR6QixPQUFPO09BQ0ssYUFBYSxDQW9EekI7SUFBRCxvQkFBQztDQXBERCxBQW9EQyxDQXBEa0MsRUFBRSxDQUFDLFNBQVMsR0FvRDlDO0FBcERZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi9HXCI7XG5pbXBvcnQgeyBIZWFkU2VsZWN0IH0gZnJvbSBcIi4vSGVhZFNlbGVjdFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBSZWdpc3RlclNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShIZWFkU2VsZWN0KVxuICAgIHByaXZhdGUgaGVhZFNlbGVjdDogSGVhZFNlbGVjdCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSB1c2VybmFtZUlucHV0OiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIHB3ZElucHV0OiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIHB3ZENvbmZpcm1JbnB1dDogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSByZWdpc3RlckJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSByZXR1cm5Mb2dpbkJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBvbkJ0blJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgdXNlcm5hbWUgPSB0aGlzLnVzZXJuYW1lSW5wdXQuc3RyaW5nO1xuICAgICAgICBsZXQgcHdkMSA9IHRoaXMucHdkSW5wdXQuc3RyaW5nO1xuICAgICAgICBsZXQgcHdkMiA9IHRoaXMucHdkQ29uZmlybUlucHV0LnN0cmluZztcbiAgICAgICAgaWYgKHVzZXJuYW1lID09PSBcIlwiIHx8IHB3ZDEgPT09IFwiXCIgfHwgcHdkMiA9PT0gXCJcIikge1xuICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93VGlwKFwi55So5oi35ZCN5ZKM5a+G56CB5LiN6IO95Li656m677yBXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHB3ZDEgIT09IHB3ZDIpIHtcbiAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd1RpcChcIuS4pOasoeWvhueggeS4jeWQjO+8gVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBoZWFkID0gdGhpcy5oZWFkU2VsZWN0LmdldEhlYWQoKTtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwd2QxLFxuICAgICAgICAgICAgICAgIGhlYWQ6IGhlYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEcud3MuZW1pdChcInJlZ2lzdGVyXCIscGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Xc1JlZ2lzdGVyU3VjY2VzcygpIHtcbiAgICAgICAgRy5nYW1lUm9vdC5zaG93VGlwKFwi5rOo5YaM5oiQ5YqfXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG5SZXR1cm5Mb2dpbigpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9naW5cIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQnRuUmVnaXN0ZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLnJldHVybkxvZ2luQnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ0blJldHVybkxvZ2luLCB0aGlzKTtcbiAgICAgICAgRy53cy5vbihcInJlZ2lzdGVyXCIsIHRoaXMub25Xc1JlZ2lzdGVyU3VjY2VzcywgdGhpcyk7XG4gICAgfVxuXG59Il19