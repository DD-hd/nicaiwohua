"use strict";
cc._RF.push(module, '1bb45WQYytErq1GmQGUIzKS', 'TestGraphics');
// TestGraphics.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var TestGraphics = /** @class */ (function (_super) {
    __extends(TestGraphics, _super);
    function TestGraphics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.g = null;
        return _this;
    }
    TestGraphics.prototype.onLoad = function () {
        var _this = this;
        cc.log(1234);
        this.node.parent.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this.g.moveTo(0, 0);
        this.g.lineTo(0, 100);
        this.g.stroke();
        this.g.moveTo(0, 100);
        this.g.lineTo(100, 100);
        this.g.stroke();
        setTimeout(function () {
            _this.g.clear();
        }, 1000);
        setTimeout(function () {
            _this.g.moveTo(0, 0);
            _this.g.lineTo(0, 100);
            _this.g.stroke();
            _this.g.moveTo(0, 100);
            _this.g.lineTo(100, 100);
            _this.g.stroke();
        }, 2000);
    };
    TestGraphics.prototype.onTouchStart = function (e) {
        cc.log(1);
        var localPosition = this.node.convertToNodeSpaceAR(cc.v2(e.getLocation()));
        this.g.moveTo(localPosition.x, localPosition.y);
    };
    TestGraphics.prototype.onTouchMove = function (e) {
        cc.log(2);
        var localPosition = this.node.convertToNodeSpaceAR(cc.v2(e.getLocation()));
        this.g.lineTo(localPosition.x, localPosition.y);
        this.g.stroke();
        this.g.moveTo(localPosition.x, localPosition.y);
    };
    TestGraphics.prototype.onTouchEnd = function (e) {
        cc.log(3);
    };
    TestGraphics.prototype.onTouchCancel = function (e) {
        cc.log(4);
    };
    __decorate([
        property(cc.Graphics)
    ], TestGraphics.prototype, "g", void 0);
    TestGraphics = __decorate([
        ccclass,
        executeInEditMode
    ], TestGraphics);
    return TestGraphics;
}(cc.Component));
exports.default = TestGraphics;

cc._RF.pop();