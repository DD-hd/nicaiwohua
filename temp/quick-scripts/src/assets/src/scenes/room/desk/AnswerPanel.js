"use strict";
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