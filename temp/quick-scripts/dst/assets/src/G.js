
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/G.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxHLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTtJQUFxQiwwQkFBYztJQUFuQztRQUFBLHFFQTJDQztRQXZDVSxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFDdEIsUUFBRSxHQUFrQixJQUFJLENBQUM7UUFFekIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUN2QixVQUFJLEdBQWMsSUFBSSxDQUFDOztJQWlDbEMsQ0FBQztJQS9CVSw0QkFBVyxHQUFsQixVQUFtQixRQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRU0sZ0NBQWUsR0FBdEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sK0JBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUN0QixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLGdDQUFlLEdBQXRCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLDJCQUFVLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLDRCQUFXLEdBQWxCLFVBQW1CLElBQUk7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLDJCQUFVLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXZDc0IsZUFBUSxHQUFVLElBQUksTUFBTSxFQUFFLENBQUM7SUF5QzFELGFBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ29CLEVBQUUsQ0FBQyxXQUFXLEdBMkNsQztBQUVZLFFBQUEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0U3RvcmUgfSBmcm9tIFwiLi91dGlscy9OZXh0U3RvcmVcIjtcbmltcG9ydCB7IE5leHRIdHRwIH0gZnJvbSBcIi4vdXRpbHMvTmV4dEh0dHBcIjtcbmltcG9ydCB7IE5leHRXZWJTb2NrZXQgfSBmcm9tIFwiLi91dGlscy9OZXh0V2ViU29ja2V0XCI7XG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvVXNlck1vZGVsXCI7XG5pbXBvcnQgeyBSb29tTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvUm9vbU1vZGVsXCI7XG5pbXBvcnQgeyBHYW1lUm9vdCB9IGZyb20gXCIuL3NjZW5lcy9HYW1lUm9vdFwiO1xuXG5jbGFzcyBHbG9iYWwgZXh0ZW5kcyBjYy5FdmVudFRhcmdldHtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSW5zdGFuY2U6R2xvYmFsID0gbmV3IEdsb2JhbCgpO1xuXG4gICAgcHVibGljIGdhbWVSb290OkdhbWVSb290ID0gbnVsbDtcbiAgICBcbiAgICBwdWJsaWMgaHR0cDogTmV4dEh0dHAgPSBudWxsO1xuICAgIHB1YmxpYyB3czogTmV4dFdlYlNvY2tldCA9IG51bGw7XG5cbiAgICBwdWJsaWMgdXNlcjogVXNlck1vZGVsID0gbnVsbDtcbiAgICBwdWJsaWMgcm9vbTogUm9vbU1vZGVsID0gbnVsbDtcblxuICAgIHB1YmxpYyBzZXRHYW1lUm9vdChnYW1lUm9vdDpHYW1lUm9vdCkge1xuICAgICAgICB0aGlzLmdhbWVSb290ID0gZ2FtZVJvb3Q7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9kaW5nU3VjY2VzcygpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9naW5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9naW5TdWNjZXNzKHVzZXIpIHtcbiAgICAgICAgY2MubG9nKHVzZXIpO1xuICAgICAgICB0aGlzLnVzZXIuc2V0VXNlcih1c2VyKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaGFsbFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25FbnRlclJlZ2lzdGVyKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyZWdpc3RlclwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25IYWxsRXhpdCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9naW5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRW50ZXJSb29tKGRhdGEpIHtcbiAgICAgICAgdGhpcy5yb29tLnNldFJvb20oZGF0YSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRXhpdFJvb20oKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImhhbGxcIik7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBHID0gR2xvYmFsLkluc3RhbmNlOyJdfQ==