"use strict";
cc._RF.push(module, 'c2feanMuXxPiLtfNHb3LC3d', 'RoomModel');
// src/models/RoomModel.ts

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
exports.RoomModel = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RoomModel = /** @class */ (function (_super) {
    __extends(RoomModel, _super);
    function RoomModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.room = {};
        return _this;
    }
    RoomModel.prototype.init = function (roomData) {
        this.room = roomData;
    };
    RoomModel.prototype.setRoom = function (room) {
        this.room = room;
    };
    RoomModel.prototype.getRoom = function () {
        return this.room;
    };
    RoomModel.prototype.getSeatMap = function () {
        return this.room.seatMap;
    };
    RoomModel.prototype.getUidBySeat = function (seat) {
        return this.room.seatMap[seat].uid;
    };
    RoomModel.prototype.setScoreBySeat = function (seat, score) {
        this.room.seatMap[seat].score = score;
    };
    RoomModel.prototype.getScoreBySeat = function (seat) {
        return this.room.seatMap[seat].score;
    };
    RoomModel.prototype.setSeatReady = function (seat, isReady) {
        this.room.seatMap[seat].isReady = isReady;
    };
    RoomModel.prototype.getRid = function () {
        return this.room.rid;
    };
    RoomModel.prototype.getHint = function () {
        return this.room.hint;
    };
    RoomModel.prototype.getGameTime = function () {
        return this.room.gameTime;
    };
    RoomModel.prototype.getResultTime = function () {
        return this.room.resultTime;
    };
    RoomModel.prototype.getPaintSeat = function () {
        return this.room.paint;
    };
    RoomModel = __decorate([
        ccclass
    ], RoomModel);
    return RoomModel;
}(cc.Component));
exports.RoomModel = RoomModel;

cc._RF.pop();