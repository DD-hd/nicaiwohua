"use strict";
cc._RF.push(module, '454adNuCuNOKYubB84Kx86a', 'Sketchpad');
// src/scenes/share/Sketchpad.ts

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
exports.Sketchpad = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Sketchpad = /** @class */ (function (_super) {
    __extends(Sketchpad, _super);
    function Sketchpad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDrawing = false;
        _this.pen = null;
        _this.g = null;
        _this.path = [];
        return _this;
    }
    Sketchpad.prototype.setLineWidth = function (w) {
        this.g.lineWidth = w;
        this.g.lineCap = cc.Graphics.LineCap.ROUND;
        this.g.lineJoin = cc.Graphics.LineJoin.ROUND;
    };
    Sketchpad.prototype.getLineWidth = function () {
        return this.g.lineWidth;
    };
    Sketchpad.prototype.setPenColor = function (hex) {
        this.g.strokeColor = cc.hexToColor(hex);
        this.g.lineCap = cc.Graphics.LineCap.ROUND;
        this.g.lineJoin = cc.Graphics.LineJoin.ROUND;
    };
    Sketchpad.prototype.getPenColor = function () {
        return "#" + this.g.strokeColor.toHEX("#rrggbb");
    };
    Sketchpad.prototype.enableDraw = function () {
        this.node.parent.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.isDrawing = true;
        this.pen.active = true;
        this.g.lineWidth = 10;
        this.g.strokeColor = cc.Color.BLACK;
        this.g.lineCap = cc.Graphics.LineCap.ROUND;
        this.g.lineJoin = cc.Graphics.LineJoin.ROUND;
    };
    Sketchpad.prototype.disableDraw = function () {
        this.node.parent.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.parent.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.parent.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.parent.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.isDrawing = false;
        this.pen.active = false;
        this.g.lineWidth = 10;
        this.g.strokeColor = cc.Color.BLACK;
        this.g.lineCap = cc.Graphics.LineCap.ROUND;
        this.g.lineJoin = cc.Graphics.LineJoin.ROUND;
    };
    Sketchpad.prototype.clear = function () {
        var width = this.g.lineWidth;
        var color = this.g.strokeColor;
        this.g.clear();
        this.g.lineCap = cc.Graphics.LineCap.ROUND;
        this.g.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.g.lineWidth = width;
        this.g.strokeColor = color;
    };
    Sketchpad.prototype.savePoint = function (p, isStart) {
        this.path.push({ p: p, isStart: isStart });
    };
    Sketchpad.prototype.popPath = function () {
        var path = this.path.slice();
        this.path = [];
        return path;
    };
    Sketchpad.prototype.drawByPath = function (path) {
        for (var i = 0; i < path.length; i++) {
            var _a = path[i], p = _a.p, isStart = _a.isStart;
            if (isStart) {
                this.g.moveTo(p.x, p.y);
            }
            else {
                this.g.lineTo(p.x, p.y);
                this.g.stroke();
                this.g.moveTo(p.x, p.y);
            }
        }
    };
    Sketchpad.prototype.onTouchStart = function (e) {
        var localPosition = this.node.convertToNodeSpaceAR(cc.v2(e.getLocation()));
        this.pen.active = true;
        this.pen.position = localPosition;
        this.g.moveTo(localPosition.x, localPosition.y);
        this.savePoint(cc.v2(localPosition.x, localPosition.y), true);
    };
    Sketchpad.prototype.onTouchMove = function (e) {
        var localPosition = this.node.convertToNodeSpaceAR(cc.v2(e.getLocation()));
        this.pen.position = localPosition;
        this.g.lineTo(localPosition.x, localPosition.y);
        this.g.stroke();
        this.g.moveTo(localPosition.x, localPosition.y);
        this.savePoint(cc.v2(localPosition.x, localPosition.y), false);
    };
    Sketchpad.prototype.onTouchEnd = function (e) {
        this.pen.active = false;
    };
    Sketchpad.prototype.onTouchCancel = function (e) {
        this.pen.active = false;
    };
    __decorate([
        property(cc.Node)
    ], Sketchpad.prototype, "pen", void 0);
    __decorate([
        property(cc.Graphics)
    ], Sketchpad.prototype, "g", void 0);
    Sketchpad = __decorate([
        ccclass
    ], Sketchpad);
    return Sketchpad;
}(cc.Component));
exports.Sketchpad = Sketchpad;

cc._RF.pop();