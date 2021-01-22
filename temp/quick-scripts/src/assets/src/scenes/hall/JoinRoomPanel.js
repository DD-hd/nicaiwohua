"use strict";
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