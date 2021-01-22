
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/desk/AnswerPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9504dTZZftG3rwjG4bYKSgu', 'AnswerPanel');
// src/scenes/room/desk/AnswerPanel.ts

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
exports.AnswerPanel = void 0;
var G_1 = require("../../../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AnswerPanel = /** @class */ (function (_super) {
    __extends(AnswerPanel, _super);
    function AnswerPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hintLabel = null;
        _this.input = null;
        _this.confirmButton = null;
        _this.closeButton = null;
        return _this;
    }
    AnswerPanel.prototype.onLoad = function () {
        this.addListeners();
    };
    AnswerPanel.prototype.show = function () {
        this.node.active = true;
        this.hintLabel.string = G_1.G.room.getHint();
    };
    AnswerPanel.prototype.hide = function () {
        this.node.active = false;
    };
    AnswerPanel.prototype.onBtnConfirm = function () {
        var answer = this.input.string;
        if (answer !== "") {
            G_1.G.ws.emit("answer", answer);
            this.input.string = "";
            this.hide();
        }
    };
    AnswerPanel.prototype.onBtnClose = function () {
        this.hide();
    };
    AnswerPanel.prototype.addListeners = function () {
        this.confirmButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnConfirm, this);
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnClose, this);
    };
    __decorate([
        property(cc.Label)
    ], AnswerPanel.prototype, "hintLabel", void 0);
    __decorate([
        property(cc.EditBox)
    ], AnswerPanel.prototype, "input", void 0);
    __decorate([
        property(cc.Button)
    ], AnswerPanel.prototype, "confirmButton", void 0);
    __decorate([
        property(cc.Button)
    ], AnswerPanel.prototype, "closeButton", void 0);
    AnswerPanel = __decorate([
        ccclass
    ], AnswerPanel);
    return AnswerPanel;
}(cc.Component));
exports.AnswerPanel = AnswerPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXGRlc2tcXEFuc3dlclBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQ0FBK0I7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUMsK0JBQVk7SUFBN0M7UUFBQSxxRUF5Q0M7UUF0Q1csZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixXQUFLLEdBQWUsSUFBSSxDQUFDO1FBRXpCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLGlCQUFXLEdBQWMsSUFBSSxDQUFDOztJQWdDMUMsQ0FBQztJQTlCYSw0QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sMEJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFTSwwQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTyxrQ0FBWSxHQUFwQjtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUcsTUFBTSxLQUFLLEVBQUUsRUFBQztZQUNiLEtBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRU8sZ0NBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLGtDQUFZLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBckNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ2dCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7OENBQ1k7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDb0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDa0I7SUFUN0IsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQXlDdkI7SUFBRCxrQkFBQztDQXpDRCxBQXlDQyxDQXpDZ0MsRUFBRSxDQUFDLFNBQVMsR0F5QzVDO0FBekNZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi8uLi9HXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQW5zd2VyUGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgaGludExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSBpbnB1dDogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIGNvbmZpcm1CdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIGNsb3NlQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaGludExhYmVsLnN0cmluZyA9IEcucm9vbS5nZXRIaW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRuQ29uZmlybSgpIHtcbiAgICAgICAgbGV0IGFuc3dlciA9IHRoaXMuaW5wdXQuc3RyaW5nO1xuICAgICAgICBpZihhbnN3ZXIgIT09IFwiXCIpe1xuICAgICAgICAgICAgRy53cy5lbWl0KFwiYW5zd2VyXCIsYW5zd2VyKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJ0bkNsb3NlKCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5jb25maXJtQnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQnRuQ29uZmlybSwgdGhpcyk7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CdG5DbG9zZSwgdGhpcyk7XG4gICAgfVxufSJdfQ==