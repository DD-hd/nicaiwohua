
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/register/HeadSelect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '404614DVrpDjZb7s5Bqm604', 'HeadSelect');
// src/scenes/register/HeadSelect.ts

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
exports.HeadSelect = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HeadSelect = /** @class */ (function (_super) {
    __extends(HeadSelect, _super);
    function HeadSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headSprite = null;
        _this.leftButton = null;
        _this.rightButton = null;
        _this.headList = null;
        _this.headId = 0;
        return _this;
    }
    HeadSelect.prototype.getHead = function () {
        return this.headId + "";
    };
    HeadSelect.prototype.start = function () {
        this.leftButton.on(cc.Node.EventType.TOUCH_END, this.onBtnLeft, this);
        this.rightButton.on(cc.Node.EventType.TOUCH_END, this.onBtnRight, this);
    };
    HeadSelect.prototype.onBtnLeft = function () {
        this.headId = this.headId === 0 ? 7 : (this.headId - 1);
        this.setHeadSprite();
    };
    HeadSelect.prototype.onBtnRight = function () {
        this.headId = this.headId === 7 ? 0 : (this.headId + 1);
        this.setHeadSprite();
    };
    HeadSelect.prototype.setHeadSprite = function () {
        this.headSprite.spriteFrame = this.headList.getSpriteFrame(this.headId + "");
    };
    __decorate([
        property(cc.Sprite)
    ], HeadSelect.prototype, "headSprite", void 0);
    __decorate([
        property(cc.Node)
    ], HeadSelect.prototype, "leftButton", void 0);
    __decorate([
        property(cc.Node)
    ], HeadSelect.prototype, "rightButton", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], HeadSelect.prototype, "headList", void 0);
    HeadSelect = __decorate([
        ccclass
    ], HeadSelect);
    return HeadSelect;
}(cc.Component));
exports.HeadSelect = HeadSelect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJlZ2lzdGVyXFxIZWFkU2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnQyw4QkFBWTtJQUE1QztRQUFBLHFFQW9DQztRQWpDVyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxZQUFNLEdBQUcsQ0FBQyxDQUFDOztJQXlCdkIsQ0FBQztJQXZCVSw0QkFBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTyw4QkFBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sK0JBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVPLGtDQUFhLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2lCO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ2U7SUFUL0IsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQW9DdEI7SUFBRCxpQkFBQztDQXBDRCxBQW9DQyxDQXBDK0IsRUFBRSxDQUFDLFNBQVMsR0FvQzNDO0FBcENZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgSGVhZFNlbGVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHByaXZhdGUgaGVhZFNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGxlZnRCdXR0b246IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgcmlnaHRCdXR0b246IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVBdGxhcylcbiAgICBwcml2YXRlIGhlYWRMaXN0OiBjYy5TcHJpdGVBdGxhcyA9IG51bGw7XG4gICAgXG4gICAgcHJpdmF0ZSBoZWFkSWQgPSAwO1xuXG4gICAgcHVibGljIGdldEhlYWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZElkICsgXCJcIjtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMubGVmdEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CdG5MZWZ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CdG5SaWdodCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJ0bkxlZnQoKSB7XG4gICAgICAgIHRoaXMuaGVhZElkID0gdGhpcy5oZWFkSWQgPT09IDAgPyA3IDogKHRoaXMuaGVhZElkIC0gMSk7XG4gICAgICAgIHRoaXMuc2V0SGVhZFNwcml0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG5SaWdodCgpIHtcbiAgICAgICAgdGhpcy5oZWFkSWQgPSB0aGlzLmhlYWRJZCA9PT0gNyA/IDAgOiAodGhpcy5oZWFkSWQgKyAxKTtcbiAgICAgICAgdGhpcy5zZXRIZWFkU3ByaXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRIZWFkU3ByaXRlKCkge1xuICAgICAgICB0aGlzLmhlYWRTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmhlYWRMaXN0LmdldFNwcml0ZUZyYW1lKHRoaXMuaGVhZElkICsgXCJcIik7XG4gICAgfVxuXG59XG4iXX0=