"use strict";
cc._RF.push(module, 'fd6c1lvIVBPUoEgZEPWq5UX', 'CreateRoomPanel');
// src/scenes/hall/CreateRoomPanel.ts

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
exports.CreateRoomPanel = void 0;
var G_1 = require("../../G");
var CreateRoomEvent_1 = require("../../events/CreateRoomEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CreateRoomPanel = /** @class */ (function (_super) {
    __extends(CreateRoomPanel, _super);
    function CreateRoomPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.confirmButton = null;
        _this.closeButton = null;
        _this.seatSumInputBox = null;
        _this.gameSumInputBox = null;
        return _this;
    }
    CreateRoomPanel.prototype.onLoad = function () {
        this.confirmButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnConfirm, this);
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnClose, this);
    };
    CreateRoomPanel.prototype.show = function () {
        this.node.active = true;
    };
    CreateRoomPanel.prototype.hide = function () {
        this.node.active = false;
    };
    CreateRoomPanel.prototype.onBtnConfirm = function () {
        var gameSum, seatSum;
        if (this.seatSumInputBox.string === "") {
            seatSum = 0;
        }
        else {
            seatSum = +this.seatSumInputBox.string;
        }
        if (this.gameSumInputBox.string === "") {
            gameSum = 0;
        }
        else {
            gameSum = +this.gameSumInputBox.string;
        }
        if (seatSum < 2 || seatSum > 6 || gameSum < 1) {
            G_1.G.gameRoot.showTip("输入参数不合法");
        }
        else {
            G_1.G.dispatchEvent(new CreateRoomEvent_1.CreateRoomEvent(seatSum, gameSum));
        }
    };
    CreateRoomPanel.prototype.onBtnClose = function () {
        this.hide();
    };
    __decorate([
        property(cc.Button)
    ], CreateRoomPanel.prototype, "confirmButton", void 0);
    __decorate([
        property(cc.Button)
    ], CreateRoomPanel.prototype, "closeButton", void 0);
    __decorate([
        property(cc.EditBox)
    ], CreateRoomPanel.prototype, "seatSumInputBox", void 0);
    __decorate([
        property(cc.EditBox)
    ], CreateRoomPanel.prototype, "gameSumInputBox", void 0);
    CreateRoomPanel = __decorate([
        ccclass
    ], CreateRoomPanel);
    return CreateRoomPanel;
}(cc.Component));
exports.CreateRoomPanel = CreateRoomPanel;

cc._RF.pop();