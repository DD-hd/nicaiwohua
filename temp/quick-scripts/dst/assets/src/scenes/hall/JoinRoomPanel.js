
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/hall/JoinRoomPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ca3dWOCE5KEIsWWgBuTutO', 'JoinRoomPanel');
// src/scenes/hall/JoinRoomPanel.ts

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
exports.JoinRoomPanel = void 0;
var G_1 = require("../../G");
var JoinRoomEvent_1 = require("../../events/JoinRoomEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JoinRoomPanel = /** @class */ (function (_super) {
    __extends(JoinRoomPanel, _super);
    function JoinRoomPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.confirmButton = null;
        _this.closeButton = null;
        _this.inputBox = null;
        return _this;
    }
    JoinRoomPanel.prototype.onLoad = function () {
        this.confirmButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnConfirm, this);
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnClose, this);
    };
    JoinRoomPanel.prototype.show = function () {
        this.node.active = true;
    };
    JoinRoomPanel.prototype.hide = function () {
        this.node.active = false;
    };
    JoinRoomPanel.prototype.onBtnConfirm = function () {
        var roomNum;
        if (this.inputBox.string === "") {
            roomNum = 1;
        }
        else {
            roomNum = +this.inputBox.string;
        }
        G_1.G.dispatchEvent(new JoinRoomEvent_1.JoinRoomEvent(roomNum));
    };
    JoinRoomPanel.prototype.onBtnClose = function () {
        this.hide();
    };
    __decorate([
        property(cc.Button)
    ], JoinRoomPanel.prototype, "confirmButton", void 0);
    __decorate([
        property(cc.Button)
    ], JoinRoomPanel.prototype, "closeButton", void 0);
    __decorate([
        property(cc.EditBox)
    ], JoinRoomPanel.prototype, "inputBox", void 0);
    JoinRoomPanel = __decorate([
        ccclass
    ], JoinRoomPanel);
    return JoinRoomPanel;
}(cc.Component));
exports.JoinRoomPanel = JoinRoomPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXGhhbGxcXEpvaW5Sb29tUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE0QjtBQUM1Qiw0REFBMkQ7QUFFckQsSUFBQSxLQUFxQixFQUFFLENBQUMsVUFBVSxFQUFqQyxPQUFPLGFBQUEsRUFBQyxRQUFRLGNBQWlCLENBQUM7QUFHekM7SUFBbUMsaUNBQVk7SUFBL0M7UUFBQSxxRUFvQ0M7UUFsQ1csbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFlLElBQUksQ0FBQzs7SUE4QnhDLENBQUM7SUE1QmEsOEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFTSw0QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFTSw0QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTyxvQ0FBWSxHQUFwQjtRQUNJLElBQUksT0FBTyxDQUFDO1FBQ1osSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUM7WUFDM0IsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNmO2FBQUk7WUFDRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUNuQztRQUNELEtBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLGtDQUFVLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUEvQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDb0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDa0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzttREFDZTtJQU4zQixhQUFhO1FBRHpCLE9BQU87T0FDSyxhQUFhLENBb0N6QjtJQUFELG9CQUFDO0NBcENELEFBb0NDLENBcENrQyxFQUFFLENBQUMsU0FBUyxHQW9DOUM7QUFwQ1ksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHIH0gZnJvbSBcIi4uLy4uL0dcIjtcbmltcG9ydCB7IEpvaW5Sb29tRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL0pvaW5Sb29tRXZlbnRcIjtcblxuY29uc3Qge2NjY2xhc3MscHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBKb2luUm9vbVBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgY29uZmlybUJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgY2xvc2VCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSBpbnB1dEJveDogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvbmZpcm1CdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5vbkJ0bkNvbmZpcm0sdGhpcyk7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5vbkJ0bkNsb3NlLHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG5Db25maXJtKCkge1xuICAgICAgICBsZXQgcm9vbU51bTtcbiAgICAgICAgaWYodGhpcy5pbnB1dEJveC5zdHJpbmcgPT09IFwiXCIpe1xuICAgICAgICAgICAgcm9vbU51bSA9IDE7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcm9vbU51bSA9ICt0aGlzLmlucHV0Qm94LnN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBHLmRpc3BhdGNoRXZlbnQobmV3IEpvaW5Sb29tRXZlbnQocm9vbU51bSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG5DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG5cbn0iXX0=