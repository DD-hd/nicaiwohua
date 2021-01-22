"use strict";
cc._RF.push(module, 'a50aa7l6XFEoK/mn2RpYL/S', 'OverPanel');
// src/scenes/room/over/OverPanel.ts

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
exports.OverPanel = void 0;
var G_1 = require("../../../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OverPanel = /** @class */ (function (_super) {
    __extends(OverPanel, _super);
    function OverPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resultLabel = null;
        return _this;
    }
    OverPanel.prototype.show = function () {
        this.node.active = true;
        var users = [];
        var seatMap = G_1.G.room.getSeatMap();
        for (var i in seatMap) {
            if (seatMap[i]) {
                users.push(seatMap[i]);
            }
        }
        users.sort(function (u1, u2) {
            if (u1.score >= u2.score) {
                return -1;
            }
            else {
                return 1;
            }
        });
        this.resultLabel.string = "";
        for (var i = 0; i < users.length; i++) {
            this.resultLabel.string += i + "\u3010" + users[i].username + "\u3011 " + users[i].score + "\u5206" + "\n";
        }
    };
    OverPanel.prototype.hide = function () {
        if (this.node.active) {
            this.node.active = false;
        }
    };
    __decorate([
        property(cc.Label)
    ], OverPanel.prototype, "resultLabel", void 0);
    OverPanel = __decorate([
        ccclass
    ], OverPanel);
    return OverPanel;
}(cc.Component));
exports.OverPanel = OverPanel;

cc._RF.pop();