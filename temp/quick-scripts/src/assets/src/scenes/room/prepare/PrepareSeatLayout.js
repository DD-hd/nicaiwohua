"use strict";
cc._RF.push(module, '97b5c4GuqxFPbivHtWMEEFz', 'PrepareSeatLayout');
// src/scenes/room/prepare/PrepareSeatLayout.ts

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
exports.PrepareSeatLayout = void 0;
var PrepareSeat_1 = require("./PrepareSeat");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PrepareSeatLayout = /** @class */ (function (_super) {
    __extends(PrepareSeatLayout, _super);
    function PrepareSeatLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prepareSeatPrefab = null;
        _this.seatMap = {};
        return _this;
    }
    PrepareSeatLayout.prototype.addUser = function (user) {
        var seatNode = cc.instantiate(this.prepareSeatPrefab);
        this.node.addChild(seatNode);
        var prepareSeat = seatNode.getComponent(PrepareSeat_1.PrepareSeat);
        prepareSeat.init(user);
        if (user.isReady) {
            prepareSeat.prepare();
        }
        this.seatMap[user.uid] = prepareSeat;
    };
    PrepareSeatLayout.prototype.leaveUser = function (uid) {
        this.seatMap[uid].node.destroy();
    };
    PrepareSeatLayout.prototype.prepareUser = function (uid) {
        this.seatMap[uid].prepare();
    };
    PrepareSeatLayout.prototype.removeAllUser = function () {
        this.seatMap = {};
        this.node.removeAllChildren();
    };
    __decorate([
        property(cc.Prefab)
    ], PrepareSeatLayout.prototype, "prepareSeatPrefab", void 0);
    PrepareSeatLayout = __decorate([
        ccclass
    ], PrepareSeatLayout);
    return PrepareSeatLayout;
}(cc.Component));
exports.PrepareSeatLayout = PrepareSeatLayout;

cc._RF.pop();