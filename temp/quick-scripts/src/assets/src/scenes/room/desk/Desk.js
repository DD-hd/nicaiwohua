"use strict";
cc._RF.push(module, 'd11b7mEAYhBZ5oF1kq74ikR', 'Desk');
// src/scenes/room/desk/Desk.ts

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
exports.Desk = void 0;
var GameSeat_1 = require("./GameSeat");
var AnswerPanel_1 = require("./AnswerPanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Desk = /** @class */ (function (_super) {
    __extends(Desk, _super);
    function Desk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.answerPanel = null;
        _this.answerButton = null;
        _this.gameSeatPrefab = null;
        _this.seatLayout = null;
        _this.seatMap = {};
        return _this;
    }
    Desk.prototype.onLoad = function () {
        this.addListeners();
    };
    Desk.prototype.show = function () {
        this.node.active = true;
    };
    Desk.prototype.hide = function () {
        this.node.active = false;
    };
    Desk.prototype.showAnswerButton = function () {
        this.answerButton.node.active = true;
    };
    Desk.prototype.hideAnswerButton = function () {
        this.answerButton.node.active = false;
        this.answerPanel.hide();
    };
    Desk.prototype.onBtnAnswer = function () {
        this.answerPanel.show();
    };
    Desk.prototype.updateSeatsInfo = function (seatMap) {
        this.removeAllUser();
        for (var i in seatMap) {
            if (seatMap[i] !== null) {
                this.addUser(seatMap[i]);
            }
        }
    };
    Desk.prototype.answerRight = function (seat, score) {
        this.seatMap[seat].showTip("答对+" + score);
    };
    Desk.prototype.answerWrong = function (seat) {
        this.seatMap[seat].showTip("答错");
    };
    Desk.prototype.hideAllTip = function () {
        for (var i in this.seatMap) {
            this.seatMap[i].hideTip();
        }
    };
    Desk.prototype.addUser = function (user) {
        var seatNode = cc.instantiate(this.gameSeatPrefab);
        this.seatLayout.addChild(seatNode);
        var gameSeat = seatNode.getComponent(GameSeat_1.GameSeat);
        gameSeat.init(user);
        this.seatMap[user.seat] = gameSeat;
    };
    Desk.prototype.leaveUser = function (seat) {
        this.seatMap[seat].node.destroy();
    };
    Desk.prototype.removeAllUser = function () {
        this.seatMap = {};
        this.seatLayout.removeAllChildren();
    };
    Desk.prototype.addListeners = function () {
        this.answerButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnAnswer, this);
    };
    __decorate([
        property(AnswerPanel_1.AnswerPanel)
    ], Desk.prototype, "answerPanel", void 0);
    __decorate([
        property(cc.Button)
    ], Desk.prototype, "answerButton", void 0);
    __decorate([
        property(cc.Prefab)
    ], Desk.prototype, "gameSeatPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], Desk.prototype, "seatLayout", void 0);
    Desk = __decorate([
        ccclass
    ], Desk);
    return Desk;
}(cc.Component));
exports.Desk = Desk;

cc._RF.pop();