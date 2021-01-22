
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/share/Sketchpad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHNoYXJlXFxTa2V0Y2hwYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBbUhDO1FBakhVLGVBQVMsR0FBVyxLQUFLLENBQUM7UUFFekIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixPQUFDLEdBQWdCLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQXVDLEVBQUUsQ0FBQzs7SUEyR3pELENBQUM7SUF6R1UsZ0NBQVksR0FBbkIsVUFBb0IsQ0FBUTtRQUN4QixJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUNqRCxDQUFDO0lBRU0sZ0NBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFFTSwrQkFBVyxHQUFsQixVQUFtQixHQUFVO1FBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtB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QyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTyw4QkFBVSxHQUFsQixVQUFtQixDQUFzQjtRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVPLGlDQUFhLEdBQXJCLFVBQXNCLENBQXNCO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBOUdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3Q0FDUTtJQU5yQixTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBbUhyQjtJQUFELGdCQUFDO0NBbkhELEFBbUhDLENBbkg4QixFQUFFLENBQUMsU0FBUyxHQW1IMUM7QUFuSFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFNrZXRjaHBhZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgaXNEcmF3aW5nOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHBlbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxuICAgIHByaXZhdGUgZzogY2MuR3JhcGhpY3MgPSBudWxsO1xuXG4gICAgcHVibGljIHBhdGg6IEFycmF5PHtwOmNjLlZlYzIsaXNTdGFydDpib29sZWFufT4gPSBbXTtcblxuICAgIHB1YmxpYyBzZXRMaW5lV2lkdGgodzpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5nLmxpbmVXaWR0aCA9IHc7XG4gICAgICAgIHRoaXMuZy5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcbiAgICAgICAgdGhpcy5nLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExpbmVXaWR0aCgpOm51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuZy5saW5lV2lkdGg7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBlbkNvbG9yKGhleDpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5nLnN0cm9rZUNvbG9yID0gY2MuaGV4VG9Db2xvcihoZXgpO1xuICAgICAgICB0aGlzLmcubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XG4gICAgICAgIHRoaXMuZy5saW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luLlJPVU5EO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQZW5Db2xvcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIiNcIit0aGlzLmcuc3Ryb2tlQ29sb3IudG9IRVgoXCIjcnJnZ2JiXCIpO1xuICAgIH1cblxuXG4gICAgcHVibGljIGVuYWJsZURyYXcoKSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hDYW5jZWwsIHRoaXMpO1xuICAgICAgICB0aGlzLmlzRHJhd2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMucGVuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZy5saW5lV2lkdGggPSAxMDtcbiAgICAgICAgdGhpcy5nLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XG4gICAgICAgIHRoaXMuZy5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcbiAgICAgICAgdGhpcy5nLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc2FibGVEcmF3KCkge1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaENhbmNlbCwgdGhpcyk7XG4gICAgICAgIHRoaXMuaXNEcmF3aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGVuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmcubGluZVdpZHRoID0gMTA7XG4gICAgICAgIHRoaXMuZy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xuICAgICAgICB0aGlzLmcubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XG4gICAgICAgIHRoaXMuZy5saW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luLlJPVU5EO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5nLmxpbmVXaWR0aDtcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5nLnN0cm9rZUNvbG9yO1xuICAgICAgICB0aGlzLmcuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5nLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xuICAgICAgICB0aGlzLmcubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcbiAgICAgICAgdGhpcy5nLmxpbmVXaWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmcuc3Ryb2tlQ29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZVBvaW50KHA6Y2MuVmVjMixpc1N0YXJ0OmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wYXRoLnB1c2goe3A6cCxpc1N0YXJ0OmlzU3RhcnR9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wUGF0aCgpOkFycmF5PHtwOmNjLlZlYzIsaXNTdGFydDpib29sZWFufT4ge1xuICAgICAgICBsZXQgcGF0aCA9IHRoaXMucGF0aC5zbGljZSgpO1xuICAgICAgICB0aGlzLnBhdGggPSBbXTtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuXG4gICAgcHVibGljIGRyYXdCeVBhdGgocGF0aDogQXJyYXk8e3A6Y2MuVmVjMixpc1N0YXJ0OmJvb2xlYW59Pikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB7cCxpc1N0YXJ0fSA9IHBhdGhbaV07XG4gICAgICAgICAgICBpZihpc1N0YXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nLm1vdmVUbyhwLngscC55KTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuZy5saW5lVG8ocC54LCBwLnkpXG4gICAgICAgICAgICAgICAgdGhpcy5nLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZy5tb3ZlVG8ocC54LHAueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgbGV0IGxvY2FsUG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoZS5nZXRMb2NhdGlvbigpKSk7XG4gICAgICAgIHRoaXMucGVuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucGVuLnBvc2l0aW9uID0gbG9jYWxQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5nLm1vdmVUbyhsb2NhbFBvc2l0aW9uLngsIGxvY2FsUG9zaXRpb24ueSk7XG4gICAgICAgIHRoaXMuc2F2ZVBvaW50KGNjLnYyKGxvY2FsUG9zaXRpb24ueCwgbG9jYWxQb3NpdGlvbi55KSx0cnVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hNb3ZlKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgbGV0IGxvY2FsUG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoZS5nZXRMb2NhdGlvbigpKSk7XG4gICAgICAgIHRoaXMucGVuLnBvc2l0aW9uID0gbG9jYWxQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5nLmxpbmVUbyhsb2NhbFBvc2l0aW9uLngsIGxvY2FsUG9zaXRpb24ueSk7XG4gICAgICAgIHRoaXMuZy5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5nLm1vdmVUbyhsb2NhbFBvc2l0aW9uLngsIGxvY2FsUG9zaXRpb24ueSk7XG4gICAgICAgIHRoaXMuc2F2ZVBvaW50KGNjLnYyKGxvY2FsUG9zaXRpb24ueCxsb2NhbFBvc2l0aW9uLnkpLGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICB0aGlzLnBlbi5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hDYW5jZWwoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICB0aGlzLnBlbi5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG59Il19