
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/prepare/PrepareSeat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5e69ngmwdHPYTxDucvcbhW', 'PrepareSeat');
// src/scenes/room/prepare/PrepareSeat.ts

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
exports.PrepareSeat = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PrepareSeat = /** @class */ (function (_super) {
    __extends(PrepareSeat, _super);
    function PrepareSeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.usernameLabel = null;
        _this.prepareIcon = null;
        return _this;
    }
    PrepareSeat.prototype.init = function (user) {
        this.usernameLabel.string = user.username;
    };
    PrepareSeat.prototype.prepare = function () {
        this.prepareIcon.active = true;
    };
    __decorate([
        property(cc.Label)
    ], PrepareSeat.prototype, "usernameLabel", void 0);
    __decorate([
        property(cc.Node)
    ], PrepareSeat.prototype, "prepareIcon", void 0);
    PrepareSeat = __decorate([
        ccclass
    ], PrepareSeat);
    return PrepareSeat;
}(cc.Component));
exports.PrepareSeat = PrepareSeat;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXHByZXBhcmVcXFByZXBhcmVTZWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXFCLEVBQUUsQ0FBQyxVQUFVLEVBQWpDLE9BQU8sYUFBQSxFQUFDLFFBQVEsY0FBaUIsQ0FBQztBQUd6QztJQUFpQywrQkFBWTtJQUE3QztRQUFBLHFFQWVDO1FBWlcsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBVyxJQUFJLENBQUM7O0lBVXZDLENBQUM7SUFSVSwwQkFBSSxHQUFYLFVBQVksSUFBSTtRQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDN0MsQ0FBQztJQUVNLDZCQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQVZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ21CO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ2lCO0lBTDFCLFdBQVc7UUFEdkIsT0FBTztPQUNLLFdBQVcsQ0FldkI7SUFBRCxrQkFBQztDQWZELEFBZUMsQ0FmZ0MsRUFBRSxDQUFDLFNBQVMsR0FlNUM7QUFmWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUHJlcGFyZVNlYXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgdXNlcm5hbWVMYWJlbDpjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBwcmVwYXJlSWNvbjpjYy5Ob2RlID0gbnVsbDtcblxuICAgIHB1YmxpYyBpbml0KHVzZXIpIHtcbiAgICAgICB0aGlzLnVzZXJuYW1lTGFiZWwuc3RyaW5nID0gdXNlci51c2VybmFtZTsgXG4gICAgfVxuXG4gICAgcHVibGljIHByZXBhcmUoKSB7XG4gICAgICAgIHRoaXMucHJlcGFyZUljb24uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgXG59Il19