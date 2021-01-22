"use strict";
cc._RF.push(module, 'fd9bfmN5bBIMJl0qUodz0QE', 'G');
// src/G.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.G = void 0;
var Global = /** @class */ (function (_super) {
    __extends(Global, _super);
    function Global() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameRoot = null;
        _this.http = null;
        _this.ws = null;
        _this.user = null;
        _this.room = null;
        return _this;
    }
    Global.prototype.setGameRoot = function (gameRoot) {
        this.gameRoot = gameRoot;
    };
    Global.prototype.onLodingSuccess = function () {
        cc.director.loadScene("login");
    };
    Global.prototype.onLoginSuccess = function (user) {
        cc.log(user);
        this.user.setUser(user);
        cc.director.loadScene("hall");
    };
    Global.prototype.onEnterRegister = function () {
        cc.director.loadScene("register");
    };
    Global.prototype.onHallExit = function () {
        cc.director.loadScene("login");
    };
    Global.prototype.onEnterRoom = function (data) {
        this.room.setRoom(data);
        cc.director.loadScene("room");
    };
    Global.prototype.onExitRoom = function () {
        cc.director.loadScene("hall");
    };
    Global.Instance = new Global();
    return Global;
}(cc.EventTarget));
exports.G = Global.Instance;

cc._RF.pop();