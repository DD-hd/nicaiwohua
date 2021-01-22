"use strict";
cc._RF.push(module, '438fblb/3xAAKld1F60MmA3', 'PreparePanel');
// src/scenes/room/prepare/PreparePanel.ts

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
exports.PreparePanel = void 0;
var G_1 = require("../../../G");
var PrepareSeatLayout_1 = require("./PrepareSeatLayout");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PreparePanel = /** @class */ (function (_super) {
    __extends(PreparePanel, _super);
    function PreparePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prepareButton = null;
        _this.preparedButton = null;
        _this.prepareSeatLayout = null;
        return _this;
    }
    PreparePanel.prototype.onLoad = function () {
        this.addListeners();
    };
    PreparePanel.prototype.show = function () {
        this.node.active = true;
        this.prepareSeatLayout.removeAllUser();
        var seatMap = G_1.G.room.getSeatMap();
        for (var i in seatMap) {
            if (seatMap[i]) {
                this.prepareSeatLayout.addUser(seatMap[i]);
            }
        }
    };
    PreparePanel.prototype.hide = function () {
        if (this.node.active) {
            this.node.active = false;
            this.removeListeners();
        }
    };
    PreparePanel.prototype.onBtnPrepare = function () {
        this.prepareButton.node.active = false;
        this.preparedButton.node.active = true;
        G_1.G.ws.emit("ready");
    };
    PreparePanel.prototype.onWsRoom = function (room) {
        G_1.G.room.setRoom(room);
        this.prepareSeatLayout.removeAllUser();
        var seatMap = G_1.G.room.getSeatMap();
        for (var i in seatMap) {
            if (seatMap[i]) {
                this.prepareSeatLayout.addUser(seatMap[i]);
            }
        }
    };
    PreparePanel.prototype.onWsReady = function (data) {
        G_1.G.room.setSeatReady(data.seat, true);
        this.prepareSeatLayout.prepareUser(G_1.G.room.getSeatMap()[data.seat].uid);
    };
    PreparePanel.prototype.addListeners = function () {
        this.prepareButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnPrepare, this);
        G_1.G.ws.on("room", this.onWsRoom, this);
        G_1.G.ws.on("ready", this.onWsReady, this);
        G_1.G.ws.on("startMe", this.hide, this);
        G_1.G.ws.on("startOther", this.hide, this);
    };
    PreparePanel.prototype.removeListeners = function () {
        G_1.G.ws.offTarget(this);
    };
    __decorate([
        property(cc.Button)
    ], PreparePanel.prototype, "prepareButton", void 0);
    __decorate([
        property(cc.Button)
    ], PreparePanel.prototype, "preparedButton", void 0);
    __decorate([
        property(PrepareSeatLayout_1.PrepareSeatLayout)
    ], PreparePanel.prototype, "prepareSeatLayout", void 0);
    PreparePanel = __decorate([
        ccclass
    ], PreparePanel);
    return PreparePanel;
}(cc.Component));
exports.PreparePanel = PreparePanel;

cc._RF.pop();