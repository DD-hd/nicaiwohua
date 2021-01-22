
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TestGraphics.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGVzdEdyYXBoaWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0MsRUFBRSxDQUFDLFVBQVUsRUFBcEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUMsaUJBQWlCLHVCQUFpQixDQUFDO0FBSTVEO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBcURDO1FBbERXLE9BQUMsR0FBZSxJQUFJLENBQUM7O0lBa0RqQyxDQUFDO0lBaERHLDZCQUFNLEdBQU47UUFBQSxpQkF5QkM7UUF4QkcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWhCLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBRVIsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDWixDQUFDO0lBRU8sbUNBQVksR0FBcEIsVUFBcUIsQ0FBc0I7UUFDdkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNWLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTyxrQ0FBVyxHQUFuQixVQUFvQixDQUFzQjtRQUN0QyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8saUNBQVUsR0FBbEIsVUFBbUIsQ0FBc0I7UUFDckMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFTyxvQ0FBYSxHQUFyQixVQUFzQixDQUFzQjtRQUN4QyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQWpERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzJDQUNPO0lBSFosWUFBWTtRQUZoQyxPQUFPO1FBQ1AsaUJBQWlCO09BQ0csWUFBWSxDQXFEaEM7SUFBRCxtQkFBQztDQXJERCxBQXFEQyxDQXJEeUMsRUFBRSxDQUFDLFNBQVMsR0FxRHJEO2tCQXJEb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSxleGVjdXRlSW5FZGl0TW9kZX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0R3JhcGhpY3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxuICAgIHByaXZhdGUgZzpjYy5HcmFwaGljcyA9IG51bGw7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjYy5sb2coMTIzNCk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hDYW5jZWwsIHRoaXMpO1xuICAgICAgICB0aGlzLmcubW92ZVRvKDAsMCk7XG4gICAgICAgIHRoaXMuZy5saW5lVG8oMCwxMDApO1xuICAgICAgICB0aGlzLmcuc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuZy5tb3ZlVG8oMCwxMDApO1xuICAgICAgICB0aGlzLmcubGluZVRvKDEwMCwxMDApO1xuICAgICAgICB0aGlzLmcuc3Ryb2tlKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5nLmNsZWFyKCk7XG4gICAgICAgIH0sMTAwMCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5nLm1vdmVUbygwLDApO1xuICAgICAgICAgICAgdGhpcy5nLmxpbmVUbygwLDEwMCk7XG4gICAgICAgICAgICB0aGlzLmcuc3Ryb2tlKCk7XG4gICAgICAgICAgICB0aGlzLmcubW92ZVRvKDAsMTAwKTtcbiAgICAgICAgICAgIHRoaXMuZy5saW5lVG8oMTAwLDEwMCk7XG4gICAgICAgICAgICB0aGlzLmcuc3Ryb2tlKCk7XG4gICAgICAgIH0sMjAwMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBjYy5sb2coMSk7XG4gICAgICAgIGxldCBsb2NhbFBvc2l0aW9uID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKGUuZ2V0TG9jYXRpb24oKSkpO1xuICAgICAgICB0aGlzLmcubW92ZVRvKGxvY2FsUG9zaXRpb24ueCwgbG9jYWxQb3NpdGlvbi55KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hNb3ZlKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgY2MubG9nKDIpO1xuICAgICAgICBsZXQgbG9jYWxQb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MihlLmdldExvY2F0aW9uKCkpKTtcbiAgICAgICAgdGhpcy5nLmxpbmVUbyhsb2NhbFBvc2l0aW9uLngsIGxvY2FsUG9zaXRpb24ueSk7XG4gICAgICAgIHRoaXMuZy5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5nLm1vdmVUbyhsb2NhbFBvc2l0aW9uLngsIGxvY2FsUG9zaXRpb24ueSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgY2MubG9nKDMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaENhbmNlbChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGNjLmxvZyg0KTtcbiAgICB9XG59XG4iXX0=