
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/TestGraphics');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/src/G');
require('./assets/src/events/CreateRoomEvent');
require('./assets/src/events/JoinRoomEvent');
require('./assets/src/events/SketchpadEvent');
require('./assets/src/models/RoomModel');
require('./assets/src/models/UserModel');
require('./assets/src/scenes/GameRoot');
require('./assets/src/scenes/hall/CreateRoomPanel');
require('./assets/src/scenes/hall/HallScene');
require('./assets/src/scenes/hall/JoinRoomPanel');
require('./assets/src/scenes/loding/LodingScene');
require('./assets/src/scenes/login/LoginScene');
require('./assets/src/scenes/register/HeadSelect');
require('./assets/src/scenes/register/RegisterScene');
require('./assets/src/scenes/room/RoomScene');
require('./assets/src/scenes/room/desk/AnswerPanel');
require('./assets/src/scenes/room/desk/Desk');
require('./assets/src/scenes/room/desk/GameSeat');
require('./assets/src/scenes/room/message/BulletMessage');
require('./assets/src/scenes/room/message/MessagePanel');
require('./assets/src/scenes/room/over/OverPanel');
require('./assets/src/scenes/room/prepare/PreparePanel');
require('./assets/src/scenes/room/prepare/PrepareSeat');
require('./assets/src/scenes/room/prepare/PrepareSeatLayout');
require('./assets/src/scenes/room/tool/ToolPanel');
require('./assets/src/scenes/room/topbar/TopBar');
require('./assets/src/scenes/share/Sketchpad');
require('./assets/src/utils/NextHttp');
require('./assets/src/utils/NextStore');
require('./assets/src/utils/NextWebSocket');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/tool/ToolPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49977mc21lNer7TAT+9Nnxr', 'ToolPanel');
// src/scenes/room/tool/ToolPanel.ts

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
exports.ToolPanel = void 0;
var G_1 = require("../../../G");
var SketchpadEvent_1 = require("../../../events/SketchpadEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ToolPanel = /** @class */ (function (_super) {
    __extends(ToolPanel, _super);
    function ToolPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.switchButton = null;
        _this.isOpen = false;
        return _this;
    }
    ToolPanel.prototype.open = function () {
        this.switchButton.getComponent(cc.Animation).play("tool_open");
        this.isOpen = true;
    };
    ToolPanel.prototype.close = function () {
        this.switchButton.getComponent(cc.Animation).play("tool_close");
        this.isOpen = false;
    };
    ToolPanel.prototype.switch = function () {
        this.isOpen ? this.close() : this.open();
    };
    ToolPanel.prototype.show = function () {
        this.node.active = true;
    };
    ToolPanel.prototype.hide = function () {
        this.node.active = false;
        this.close();
    };
    ToolPanel.prototype.onColorPick = function (toggle, colorHex) {
        var color = "#" + toggle.node.color.toHEX("#rrggbb");
        var event = new SketchpadEvent_1.SketchpadEvent(SketchpadEvent_1.SketchpadEvent.COLOR);
        event.hexColor = color;
        G_1.G.dispatchEvent(event);
    };
    ToolPanel.prototype.onClear = function () {
        var event = new SketchpadEvent_1.SketchpadEvent(SketchpadEvent_1.SketchpadEvent.CLEAR);
        G_1.G.dispatchEvent(event);
    };
    ToolPanel.prototype.onWidthPick = function (toggle, widthStr) {
        var event = new SketchpadEvent_1.SketchpadEvent(SketchpadEvent_1.SketchpadEvent.WIDTH);
        event.width = +widthStr;
        G_1.G.dispatchEvent(event);
    };
    __decorate([
        property(cc.Node)
    ], ToolPanel.prototype, "switchButton", void 0);
    ToolPanel = __decorate([
        ccclass
    ], ToolPanel);
    return ToolPanel;
}(cc.Component));
exports.ToolPanel = ToolPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXHRvb2xcXFRvb2xQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQStCO0FBQy9CLGlFQUFnRTtBQUUxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQWdEQztRQTdDVyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQUcsS0FBSyxDQUFDOztJQTJDM0IsQ0FBQztJQXpDVSx3QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRU0seUJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLDBCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLE1BQWlCLEVBQUUsUUFBZ0I7UUFDbEQsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLEtBQUssR0FBRyxJQUFJLCtCQUFjLENBQUMsK0JBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN2QixLQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSwrQkFBYyxDQUFDLCtCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsS0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsTUFBaUIsRUFBRSxRQUFnQjtRQUNsRCxJQUFJLEtBQUssR0FBRyxJQUFJLCtCQUFjLENBQUMsK0JBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3hCLEtBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQTNDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNtQjtJQUg1QixTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBZ0RyQjtJQUFELGdCQUFDO0NBaERELEFBZ0RDLENBaEQ4QixFQUFFLENBQUMsU0FBUyxHQWdEMUM7QUFoRFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHIH0gZnJvbSBcIi4uLy4uLy4uL0dcIjtcbmltcG9ydCB7IFNrZXRjaHBhZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2V2ZW50cy9Ta2V0Y2hwYWRFdmVudFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFRvb2xQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHN3aXRjaEJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGlzT3BlbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQnV0dG9uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ0b29sX29wZW5cIik7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQnV0dG9uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ0b29sX2Nsb3NlXCIpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzd2l0Y2goKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Db2xvclBpY2sodG9nZ2xlOiBjYy5Ub2dnbGUsIGNvbG9ySGV4OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gXCIjXCIgKyB0b2dnbGUubm9kZS5jb2xvci50b0hFWChcIiNycmdnYmJcIik7XG4gICAgICAgIGxldCBldmVudCA9IG5ldyBTa2V0Y2hwYWRFdmVudChTa2V0Y2hwYWRFdmVudC5DT0xPUik7XG4gICAgICAgIGV2ZW50LmhleENvbG9yID0gY29sb3I7XG4gICAgICAgIEcuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xlYXIoKSB7XG4gICAgICAgIGxldCBldmVudCA9IG5ldyBTa2V0Y2hwYWRFdmVudChTa2V0Y2hwYWRFdmVudC5DTEVBUik7XG4gICAgICAgIEcuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uV2lkdGhQaWNrKHRvZ2dsZTogY2MuVG9nZ2xlLCB3aWR0aFN0cjogc3RyaW5nKSB7XG4gICAgICAgIGxldCBldmVudCA9IG5ldyBTa2V0Y2hwYWRFdmVudChTa2V0Y2hwYWRFdmVudC5XSURUSCk7XG4gICAgICAgIGV2ZW50LndpZHRoID0gK3dpZHRoU3RyO1xuICAgICAgICBHLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/events/CreateRoomEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5be77u8OvxCTqCvtGNzJ4db', 'CreateRoomEvent');
// src/events/CreateRoomEvent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoomEvent = void 0;
var CreateRoomEvent = /** @class */ (function (_super) {
    __extends(CreateRoomEvent, _super);
    function CreateRoomEvent(seatSum, gameSum) {
        var _this = _super.call(this, CreateRoomEvent.NAME, true) || this;
        _this.seatSum = seatSum;
        _this.gameSum = gameSum;
        return _this;
    }
    CreateRoomEvent.NAME = "CreateRoom";
    return CreateRoomEvent;
}(cc.Event.EventCustom));
exports.CreateRoomEvent = CreateRoomEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxldmVudHNcXENyZWF0ZVJvb21FdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBcUMsbUNBQW9CO0lBS3JELHlCQUFtQixPQUFjLEVBQUMsT0FBYztRQUFoRCxZQUNJLGtCQUFNLGVBQWUsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBR25DO1FBRkcsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQzNCLENBQUM7SUFSc0Isb0JBQUksR0FBRyxZQUFZLENBQUM7SUFVL0Msc0JBQUM7Q0FYRCxBQVdDLENBWG9DLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQVd4RDtBQVhZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENyZWF0ZVJvb21FdmVudCBleHRlbmRzIGNjLkV2ZW50LkV2ZW50Q3VzdG9tIHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5BTUUgPSBcIkNyZWF0ZVJvb21cIjtcbiAgICBwdWJsaWMgZ2FtZVN1bTogbnVtYmVyO1xuICAgIHB1YmxpYyBzZWF0U3VtOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2VhdFN1bTpudW1iZXIsZ2FtZVN1bTpudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoQ3JlYXRlUm9vbUV2ZW50Lk5BTUUsdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2VhdFN1bSA9IHNlYXRTdW07XG4gICAgICAgIHRoaXMuZ2FtZVN1bSA9IGdhbWVTdW07XG4gICAgfVxuICAgIFxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/hall/HallScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ad25Q3l1ZOzpSrnaA04vE+', 'HallScene');
// src/scenes/hall/HallScene.ts

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
var G_1 = require("../../G");
var JoinRoomEvent_1 = require("../../events/JoinRoomEvent");
var JoinRoomPanel_1 = require("./JoinRoomPanel");
var CreateRoomPanel_1 = require("./CreateRoomPanel");
var CreateRoomEvent_1 = require("../../events/CreateRoomEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HallScene = /** @class */ (function (_super) {
    __extends(HallScene, _super);
    function HallScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.usernameLabel = null;
        _this.userHeadSprite = null;
        _this.messageLabel = null;
        _this.enterRoomInputBox = null;
        _this.enterRoomButton = null;
        _this.returnButton = null;
        _this.roomInfoLabel = null;
        _this.createRoomButton = null;
        _this.createRoomPanel = null;
        _this.joinRoomButton = null;
        _this.joinRoomPanel = null;
        _this.matchButton = null;
        return _this;
    }
    HallScene.prototype.start = function () {
        this.usernameLabel.string = G_1.G.user.getUsername();
        this.userHeadSprite.spriteFrame = G_1.G.user.getUserHead();
        this.addListeners();
        G_1.G.ws.emit("hall");
    };
    HallScene.prototype.onBtnCreateRoom = function () {
        this.createRoomPanel.show();
    };
    HallScene.prototype.onEventCreateRoom = function (event) {
        G_1.G.gameRoot.showMaskMessage("正在创建房间");
        G_1.G.ws.emit("create", { seatSum: event.seatSum, gameSum: event.gameSum });
    };
    HallScene.prototype.onWsCreateRoom = function (data) {
        G_1.G.gameRoot.showMaskMessage("创建房间成功，正在进入房间");
        G_1.G.ws.emit("enter", { rid: data.rid });
    };
    HallScene.prototype.onBtnJoinRoom = function () {
        this.joinRoomPanel.show();
    };
    HallScene.prototype.onEventJoinRoom = function (event) {
        G_1.G.gameRoot.showMaskMessage("正在进入房间");
        G_1.G.ws.emit("enter", { rid: event.roomNum });
    };
    HallScene.prototype.onWsEnterRoom = function (data) {
        G_1.G.gameRoot.hideMaskMessage();
        G_1.G.onEnterRoom(data);
    };
    HallScene.prototype.onBtnReturn = function () {
        G_1.G.onHallExit();
    };
    HallScene.prototype.onBtnEnterRoom = function () {
        var rid = +this.enterRoomInputBox.string;
        G_1.G.ws.emit("enter", { rid: rid });
    };
    HallScene.prototype.onBtnMatchRoom = function () {
        G_1.G.ws.emit("match");
    };
    HallScene.prototype.onWsHallMessage = function (data) {
        this.messageLabel.string = data;
    };
    // onWsHallInfo(data) {
    //     this.roomInfoLabel.string = "";
    //     data.roomlist.forEach((room, i) => {
    //         this.roomInfoLabel.string += `${room.rid} (${room.num}/${room.max})` + "\n";
    //     });
    // }
    HallScene.prototype.onWsError = function (data) {
        G_1.G.gameRoot.hideMaskMessage();
        G_1.G.gameRoot.showTip(data);
    };
    HallScene.prototype.onDestroy = function () {
        this.removeListeners();
    };
    HallScene.prototype.addListeners = function () {
        this.joinRoomButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnJoinRoom, this);
        this.createRoomButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnCreateRoom, this);
        this.matchButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnMatchRoom, this);
        G_1.G.on(JoinRoomEvent_1.JoinRoomEvent.NAME, this.onEventJoinRoom, this);
        G_1.G.on(CreateRoomEvent_1.CreateRoomEvent.NAME, this.onEventCreateRoom, this);
        this.returnButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnReturn, this);
        this.enterRoomButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnEnterRoom, this);
        G_1.G.ws.on("message", this.onWsHallMessage, this);
        // G.ws.on("hall", this.onWsHallInfo, this);
        G_1.G.ws.on("create", this.onWsCreateRoom, this);
        G_1.G.ws.on("enter", this.onWsEnterRoom, this);
        G_1.G.ws.on("error", this.onWsError, this);
    };
    HallScene.prototype.removeListeners = function () {
        G_1.G.ws.offTarget(this);
    };
    __decorate([
        property(cc.Label)
    ], HallScene.prototype, "usernameLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], HallScene.prototype, "userHeadSprite", void 0);
    __decorate([
        property(cc.Label)
    ], HallScene.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.EditBox)
    ], HallScene.prototype, "enterRoomInputBox", void 0);
    __decorate([
        property(cc.Button)
    ], HallScene.prototype, "enterRoomButton", void 0);
    __decorate([
        property(cc.Button)
    ], HallScene.prototype, "returnButton", void 0);
    __decorate([
        property(cc.Label)
    ], HallScene.prototype, "roomInfoLabel", void 0);
    __decorate([
        property(cc.Button)
    ], HallScene.prototype, "createRoomButton", void 0);
    __decorate([
        property(CreateRoomPanel_1.CreateRoomPanel)
    ], HallScene.prototype, "createRoomPanel", void 0);
    __decorate([
        property(cc.Button)
    ], HallScene.prototype, "joinRoomButton", void 0);
    __decorate([
        property(JoinRoomPanel_1.JoinRoomPanel)
    ], HallScene.prototype, "joinRoomPanel", void 0);
    __decorate([
        property(cc.Button)
    ], HallScene.prototype, "matchButton", void 0);
    HallScene = __decorate([
        ccclass
    ], HallScene);
    return HallScene;
}(cc.Component));
exports.default = HallScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXGhhbGxcXEhhbGxTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBNEI7QUFDNUIsNERBQTJEO0FBQzNELGlEQUFnRDtBQUNoRCxxREFBb0Q7QUFDcEQsZ0VBQStEO0FBRXpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBb0hDO1FBakhXLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLHVCQUFpQixHQUFlLElBQUksQ0FBQztRQUVyQyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUVsQyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUcvQixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFFbkMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBRXhDLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLG1CQUFhLEdBQWtCLElBQUksQ0FBQztRQUVwQyxpQkFBVyxHQUFjLElBQUksQ0FBQzs7SUEwRjFDLENBQUM7SUF4RmEseUJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsS0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsS0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELG1DQUFlLEdB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Q0FBQztvREFDb0I7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDcUI7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDbUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3REFDd0I7SUFFN0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDc0I7SUFFMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDbUI7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDb0I7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDdUI7SUFFM0M7UUFEQyxRQUFRLENBQUMsaUNBQWUsQ0FBQztzREFDc0I7SUFFaEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDcUI7SUFFekM7UUFEQyxRQUFRLENBQUMsNkJBQWEsQ0FBQztvREFDb0I7SUFFNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDa0I7SUExQnJCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FvSDdCO0lBQUQsZ0JBQUM7Q0FwSEQsQUFvSEMsQ0FwSHNDLEVBQUUsQ0FBQyxTQUFTLEdBb0hsRDtrQkFwSG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHIH0gZnJvbSBcIi4uLy4uL0dcIjtcbmltcG9ydCB7IEpvaW5Sb29tRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL0pvaW5Sb29tRXZlbnRcIjtcbmltcG9ydCB7IEpvaW5Sb29tUGFuZWwgfSBmcm9tIFwiLi9Kb2luUm9vbVBhbmVsXCI7XG5pbXBvcnQgeyBDcmVhdGVSb29tUGFuZWwgfSBmcm9tIFwiLi9DcmVhdGVSb29tUGFuZWxcIjtcbmltcG9ydCB7IENyZWF0ZVJvb21FdmVudCB9IGZyb20gXCIuLi8uLi9ldmVudHMvQ3JlYXRlUm9vbUV2ZW50XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgdXNlcm5hbWVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcHJpdmF0ZSB1c2VySGVhZFNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBtZXNzYWdlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIGVudGVyUm9vbUlucHV0Qm94OiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgZW50ZXJSb29tQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgcHJpdmF0ZSByZXR1cm5CdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgcm9vbUluZm9MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIGNyZWF0ZVJvb21CdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KENyZWF0ZVJvb21QYW5lbClcbiAgICBwcml2YXRlIGNyZWF0ZVJvb21QYW5lbDogQ3JlYXRlUm9vbVBhbmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgam9pblJvb21CdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KEpvaW5Sb29tUGFuZWwpXG4gICAgcHJpdmF0ZSBqb2luUm9vbVBhbmVsOiBKb2luUm9vbVBhbmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgbWF0Y2hCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMudXNlcm5hbWVMYWJlbC5zdHJpbmcgPSBHLnVzZXIuZ2V0VXNlcm5hbWUoKTtcbiAgICAgICAgdGhpcy51c2VySGVhZFNwcml0ZS5zcHJpdGVGcmFtZSA9IEcudXNlci5nZXRVc2VySGVhZCgpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgICAgICBHLndzLmVtaXQoXCJoYWxsXCIpO1xuICAgIH1cblxuICAgIG9uQnRuQ3JlYXRlUm9vbSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVSb29tUGFuZWwuc2hvdygpO1xuICAgIH1cblxuICAgIG9uRXZlbnRDcmVhdGVSb29tKGV2ZW50OiBDcmVhdGVSb29tRXZlbnQpIHtcbiAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLmraPlnKjliJvlu7rmiL/pl7RcIik7XG4gICAgICAgIEcud3MuZW1pdChcImNyZWF0ZVwiLCB7IHNlYXRTdW06IGV2ZW50LnNlYXRTdW0sIGdhbWVTdW06IGV2ZW50LmdhbWVTdW0gfSk7XG4gICAgfVxuXG4gICAgb25Xc0NyZWF0ZVJvb20oZGF0YSkge1xuICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIuWIm+W7uuaIv+mXtOaIkOWKn++8jOato+WcqOi/m+WFpeaIv+mXtFwiKTtcbiAgICAgICAgRy53cy5lbWl0KFwiZW50ZXJcIiwgeyByaWQ6IGRhdGEucmlkIH0pO1xuICAgIH1cblxuICAgIG9uQnRuSm9pblJvb20oKSB7XG4gICAgICAgIHRoaXMuam9pblJvb21QYW5lbC5zaG93KCk7XG4gICAgfVxuXG4gICAgb25FdmVudEpvaW5Sb29tKGV2ZW50OiBKb2luUm9vbUV2ZW50KSB7XG4gICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5q2j5Zyo6L+b5YWl5oi/6Ze0XCIpO1xuICAgICAgICBHLndzLmVtaXQoXCJlbnRlclwiLCB7IHJpZDogZXZlbnQucm9vbU51bSB9KTtcbiAgICB9XG5cbiAgICBvbldzRW50ZXJSb29tKGRhdGEpIHtcbiAgICAgICAgRy5nYW1lUm9vdC5oaWRlTWFza01lc3NhZ2UoKTtcbiAgICAgICAgRy5vbkVudGVyUm9vbShkYXRhKTtcbiAgICB9XG5cbiAgICBvbkJ0blJldHVybigpIHtcbiAgICAgICAgRy5vbkhhbGxFeGl0KCk7XG4gICAgfVxuXG4gICAgb25CdG5FbnRlclJvb20oKSB7XG4gICAgICAgIGxldCByaWQgPSArdGhpcy5lbnRlclJvb21JbnB1dEJveC5zdHJpbmc7XG4gICAgICAgIEcud3MuZW1pdChcImVudGVyXCIsIHsgcmlkOiByaWQgfSk7XG4gICAgfVxuXG4gICAgb25CdG5NYXRjaFJvb20oKSB7XG4gICAgICAgIEcud3MuZW1pdChcIm1hdGNoXCIpO1xuICAgIH1cblxuICAgIG9uV3NIYWxsTWVzc2FnZShkYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlTGFiZWwuc3RyaW5nID0gZGF0YTtcbiAgICB9XG5cbiAgICAvLyBvbldzSGFsbEluZm8oZGF0YSkge1xuICAgIC8vICAgICB0aGlzLnJvb21JbmZvTGFiZWwuc3RyaW5nID0gXCJcIjtcbiAgICAvLyAgICAgZGF0YS5yb29tbGlzdC5mb3JFYWNoKChyb29tLCBpKSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLnJvb21JbmZvTGFiZWwuc3RyaW5nICs9IGAke3Jvb20ucmlkfSAoJHtyb29tLm51bX0vJHtyb29tLm1heH0pYCArIFwiXFxuXCI7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIG9uV3NFcnJvcihkYXRhKSB7XG4gICAgICAgIEcuZ2FtZVJvb3QuaGlkZU1hc2tNZXNzYWdlKCk7XG4gICAgICAgIEcuZ2FtZVJvb3Quc2hvd1RpcChkYXRhKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmpvaW5Sb29tQnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQnRuSm9pblJvb20sIHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZVJvb21CdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CdG5DcmVhdGVSb29tLCB0aGlzKTtcbiAgICAgICAgdGhpcy5tYXRjaEJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ0bk1hdGNoUm9vbSwgdGhpcyk7XG4gICAgICAgIEcub24oSm9pblJvb21FdmVudC5OQU1FLCB0aGlzLm9uRXZlbnRKb2luUm9vbSwgdGhpcyk7XG4gICAgICAgIEcub24oQ3JlYXRlUm9vbUV2ZW50Lk5BTUUsIHRoaXMub25FdmVudENyZWF0ZVJvb20sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMucmV0dXJuQnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQnRuUmV0dXJuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5lbnRlclJvb21CdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CdG5FbnRlclJvb20sIHRoaXMpO1xuICAgICAgICBHLndzLm9uKFwibWVzc2FnZVwiLCB0aGlzLm9uV3NIYWxsTWVzc2FnZSwgdGhpcyk7XG4gICAgICAgIC8vIEcud3Mub24oXCJoYWxsXCIsIHRoaXMub25Xc0hhbGxJbmZvLCB0aGlzKTtcbiAgICAgICAgRy53cy5vbihcImNyZWF0ZVwiLCB0aGlzLm9uV3NDcmVhdGVSb29tLCB0aGlzKTtcbiAgICAgICAgRy53cy5vbihcImVudGVyXCIsIHRoaXMub25Xc0VudGVyUm9vbSwgdGhpcyk7XG4gICAgICAgIEcud3Mub24oXCJlcnJvclwiLCB0aGlzLm9uV3NFcnJvciwgdGhpcyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgICBHLndzLm9mZlRhcmdldCh0aGlzKTtcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/RoomScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89cdbk/niZH5JgejDwvSTfH', 'RoomScene');
// src/scenes/room/RoomScene.ts

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
var G_1 = require("../../G");
var Desk_1 = require("./desk/Desk");
var Sketchpad_1 = require("../share/Sketchpad");
var TopBar_1 = require("./topbar/TopBar");
var PreparePanel_1 = require("./prepare/PreparePanel");
var MessagePanel_1 = require("./message/MessagePanel");
var ToolPanel_1 = require("./tool/ToolPanel");
var SketchpadEvent_1 = require("../../events/SketchpadEvent");
var OverPanel_1 = require("./over/OverPanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RoomScene = /** @class */ (function (_super) {
    __extends(RoomScene, _super);
    function RoomScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topBar = null;
        _this.preparePanel = null;
        _this.board = null;
        _this.desk = null;
        _this.messagePanel = null;
        _this.toolPanel = null;
        _this.overPanel = null;
        _this.sketchpadPrefab = null;
        _this.sketchpad = null;
        return _this;
    }
    RoomScene.prototype.start = function () {
        this.topBar.showMessage("房间号：" + G_1.G.room.getRid());
        var sketchpadNode = cc.instantiate(this.sketchpadPrefab);
        this.board.addChild(sketchpadNode);
        this.sketchpad = sketchpadNode.getComponent(Sketchpad_1.Sketchpad);
        this.preparePanel.show();
        this.messagePanel.show();
        this.toolPanel.hide();
        this.overPanel.hide();
        this.addListeners();
    };
    // 同步绘画信息
    RoomScene.prototype.syncPath = function () {
        if (this.sketchpad.isDrawing && this.sketchpad.path.length > 0) {
            var path = this.sketchpad.popPath();
            G_1.G.ws.emit("draw", {
                type: "path",
                path: path,
            });
        }
    };
    RoomScene.prototype.onGameStart = function () {
        this.desk.show();
        this.desk.updateSeatsInfo(G_1.G.room.getSeatMap());
    };
    RoomScene.prototype.onWsStartMe = function (data) {
        if (data.gameNum === 1) {
            this.onGameStart();
        }
        this.sketchpad.clear();
        this.desk.hideAnswerButton();
        this.topBar.showMessage("\u4F60\u753B:" + data.word);
        this.topBar.showTicker(G_1.G.room.getGameTime());
        this.sketchpad.enableDraw();
        this.toolPanel.show();
        this.messagePanel.hide();
        this.desk.hideAllTip();
    };
    RoomScene.prototype.onWsStartOther = function (data) {
        if (data.gameNum === 1) {
            this.onGameStart();
        }
        this.sketchpad.clear();
        this.desk.showAnswerButton();
        this.topBar.showMessage("\u63D0\u793A:" + data.hint);
        this.topBar.showTicker(G_1.G.room.getGameTime());
        this.sketchpad.disableDraw();
        this.toolPanel.hide();
        this.messagePanel.show();
        this.desk.hideAllTip();
    };
    RoomScene.prototype.onWsDraw = function (data) {
        if (data.type === "path") {
            this.sketchpad.drawByPath(data.path);
        }
        else if (data.type === "color") {
            this.sketchpad.setPenColor(data.color);
        }
        else if (data.type === "width") {
            this.sketchpad.setLineWidth(data.width);
        }
        else if (data.type === "clear") {
            this.sketchpad.clear();
        }
    };
    RoomScene.prototype.onWsAnswer = function (data) {
        if (data.isRight) {
            for (var i in data.scores) {
                G_1.G.room.setScoreBySeat(+i, data.scores[i]);
                if (G_1.G.room.getUidBySeat(+i) === G_1.G.user.getUid()) {
                    this.desk.hideAnswerButton();
                }
                if (+i !== G_1.G.room.getPaintSeat()) {
                    this.desk.answerRight(+i, data.scores[i]);
                }
            }
            this.desk.updateSeatsInfo(G_1.G.room.getSeatMap());
        }
        else {
            this.desk.answerWrong(data.seat);
        }
    };
    RoomScene.prototype.onWsResult = function (data) {
        this.desk.hideAnswerButton();
        this.topBar.showMessage("答案:" + data);
        this.topBar.showTicker(G_1.G.room.getResultTime());
        this.sketchpad.disableDraw();
        this.messagePanel.show();
        this.toolPanel.hide();
    };
    RoomScene.prototype.onWsOver = function (data) {
        this.desk.hideAnswerButton();
        this.overPanel.show();
        this.topBar.showMessage("游戏结束，赶紧走吧");
        setTimeout(function () {
            G_1.G.onExitRoom();
        }, 10000);
    };
    RoomScene.prototype.onWsExit = function (data) {
        this.desk.leaveUser(data);
    };
    RoomScene.prototype.onSketchpadColor = function (event) {
        this.sketchpad.setPenColor(event.hexColor);
        G_1.G.ws.emit("draw", {
            type: "color",
            color: event.hexColor,
        });
    };
    RoomScene.prototype.onSketchpadWidth = function (event) {
        this.sketchpad.setLineWidth(event.width);
        G_1.G.ws.emit("draw", {
            type: "width",
            width: event.width,
        });
    };
    RoomScene.prototype.onSketchpadClear = function (event) {
        this.sketchpad.clear();
        G_1.G.ws.emit("draw", {
            type: "clear",
        });
    };
    RoomScene.prototype.addListeners = function () {
        var _this = this;
        // G.ws.on("message", this.onWsMessage, this);
        // G.ws.on("room", this.onWsRoomInfo, this);
        G_1.G.ws.on("draw", this.onWsDraw, this);
        // G.ws.on("ready", this.onWsReady, this);
        G_1.G.ws.on("startMe", this.onWsStartMe, this);
        G_1.G.ws.on("startOther", this.onWsStartOther, this);
        G_1.G.ws.on("answer", this.onWsAnswer, this);
        G_1.G.ws.on("result", this.onWsResult, this);
        G_1.G.ws.on("over", this.onWsOver, this);
        // G.ws.on("hint", this.onWsHint, this);
        // G.ws.on("tick", this.onWsTicker, this);
        // G.ws.on("score", this.onWsScore, this);
        G_1.G.ws.on("exit", this.onWsExit, this);
        G_1.G.on(SketchpadEvent_1.SketchpadEvent.COLOR, this.onSketchpadColor, this);
        G_1.G.on(SketchpadEvent_1.SketchpadEvent.WIDTH, this.onSketchpadWidth, this);
        G_1.G.on(SketchpadEvent_1.SketchpadEvent.CLEAR, this.onSketchpadClear, this);
        this.intervalId = setInterval(function () {
            _this.syncPath();
        }, 200);
    };
    RoomScene.prototype.removeListeners = function () {
        clearInterval(this.intervalId);
        G_1.G.ws.offTarget(this);
        G_1.G.targetOff(this);
    };
    RoomScene.prototype.onDestroy = function () {
        this.removeListeners();
    };
    __decorate([
        property(TopBar_1.TopBar)
    ], RoomScene.prototype, "topBar", void 0);
    __decorate([
        property(PreparePanel_1.PreparePanel)
    ], RoomScene.prototype, "preparePanel", void 0);
    __decorate([
        property(cc.Node)
    ], RoomScene.prototype, "board", void 0);
    __decorate([
        property(Desk_1.Desk)
    ], RoomScene.prototype, "desk", void 0);
    __decorate([
        property(MessagePanel_1.MessagePanel)
    ], RoomScene.prototype, "messagePanel", void 0);
    __decorate([
        property(ToolPanel_1.ToolPanel)
    ], RoomScene.prototype, "toolPanel", void 0);
    __decorate([
        property(OverPanel_1.OverPanel)
    ], RoomScene.prototype, "overPanel", void 0);
    __decorate([
        property(cc.Prefab)
    ], RoomScene.prototype, "sketchpadPrefab", void 0);
    RoomScene = __decorate([
        ccclass
    ], RoomScene);
    return RoomScene;
}(cc.Component));
exports.default = RoomScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXFJvb21TY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBNEI7QUFDNUIsb0NBQW1DO0FBQ25DLGdEQUErQztBQUMvQywwQ0FBeUM7QUFDekMsdURBQXNEO0FBQ3RELHVEQUFzRDtBQUN0RCw4Q0FBNkM7QUFDN0MsOERBQTZEO0FBQzdELDhDQUE2QztBQUV2QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTJMQztRQXhMVyxZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFVBQUksR0FBUyxJQUFJLENBQUM7UUFFbEIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFFcEIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBRWxDLGVBQVMsR0FBYyxJQUFJLENBQUM7O0lBd0t4QyxDQUFDO0lBcEtHLHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxxQkFBUyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFlBQVks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QUM7MkNBQ1c7SUFFMUI7UUFEQyxRQUFRLENBQUMsMkJBQVksQ0FBQzttREFDSztJQUU1QjtRQURDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDO2dEQUNnQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDO2dEQUNnQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNzQjtJQWpCekIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTJMN0I7SUFBRCxnQkFBQztDQTNMRCxBQTJMQyxDQTNMc0MsRUFBRSxDQUFDLFNBQVMsR0EyTGxEO2tCQTNMb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcgfSBmcm9tIFwiLi4vLi4vR1wiO1xuaW1wb3J0IHsgRGVzayB9IGZyb20gXCIuL2Rlc2svRGVza1wiO1xuaW1wb3J0IHsgU2tldGNocGFkIH0gZnJvbSBcIi4uL3NoYXJlL1NrZXRjaHBhZFwiO1xuaW1wb3J0IHsgVG9wQmFyIH0gZnJvbSBcIi4vdG9wYmFyL1RvcEJhclwiO1xuaW1wb3J0IHsgUHJlcGFyZVBhbmVsIH0gZnJvbSBcIi4vcHJlcGFyZS9QcmVwYXJlUGFuZWxcIjtcbmltcG9ydCB7IE1lc3NhZ2VQYW5lbCB9IGZyb20gXCIuL21lc3NhZ2UvTWVzc2FnZVBhbmVsXCI7XG5pbXBvcnQgeyBUb29sUGFuZWwgfSBmcm9tIFwiLi90b29sL1Rvb2xQYW5lbFwiO1xuaW1wb3J0IHsgU2tldGNocGFkRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL1NrZXRjaHBhZEV2ZW50XCI7XG5pbXBvcnQgeyBPdmVyUGFuZWwgfSBmcm9tIFwiLi9vdmVyL092ZXJQYW5lbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShUb3BCYXIpXG4gICAgcHJpdmF0ZSB0b3BCYXI6IFRvcEJhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KFByZXBhcmVQYW5lbClcbiAgICBwcml2YXRlIHByZXBhcmVQYW5lbDogUHJlcGFyZVBhbmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGJvYXJkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoRGVzaylcbiAgICBwcml2YXRlIGRlc2s6IERlc2sgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShNZXNzYWdlUGFuZWwpXG4gICAgcHJpdmF0ZSBtZXNzYWdlUGFuZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShUb29sUGFuZWwpXG4gICAgcHJpdmF0ZSB0b29sUGFuZWw6IFRvb2xQYW5lbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KE92ZXJQYW5lbClcbiAgICBwcml2YXRlIG92ZXJQYW5lbDogT3ZlclBhbmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgc2tldGNocGFkUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBza2V0Y2hwYWQ6IFNrZXRjaHBhZCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGludGVydmFsSWQ6IG51bWJlcjtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnRvcEJhci5zaG93TWVzc2FnZShcIuaIv+mXtOWPt++8mlwiICsgRy5yb29tLmdldFJpZCgpKTtcbiAgICAgICAgbGV0IHNrZXRjaHBhZE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNrZXRjaHBhZFByZWZhYik7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkQ2hpbGQoc2tldGNocGFkTm9kZSk7XG4gICAgICAgIHRoaXMuc2tldGNocGFkID0gc2tldGNocGFkTm9kZS5nZXRDb21wb25lbnQoU2tldGNocGFkKTtcbiAgICAgICAgdGhpcy5wcmVwYXJlUGFuZWwuc2hvdygpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VQYW5lbC5zaG93KCk7XG4gICAgICAgIHRoaXMudG9vbFBhbmVsLmhpZGUoKTtcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuaGlkZSgpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuXG4gICAgfVxuXG4gICAgLy8g5ZCM5q2l57uY55S75L+h5oGvXG4gICAgc3luY1BhdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLnNrZXRjaHBhZC5pc0RyYXdpbmcgJiYgdGhpcy5za2V0Y2hwYWQucGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IHRoaXMuc2tldGNocGFkLnBvcFBhdGgoKTtcbiAgICAgICAgICAgIEcud3MuZW1pdChcImRyYXdcIiwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwicGF0aFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uR2FtZVN0YXJ0KCkge1xuICAgICAgICB0aGlzLmRlc2suc2hvdygpO1xuICAgICAgICB0aGlzLmRlc2sudXBkYXRlU2VhdHNJbmZvKEcucm9vbS5nZXRTZWF0TWFwKCkpO1xuICAgIH1cblxuICAgIG9uV3NTdGFydE1lKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuZ2FtZU51bSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5vbkdhbWVTdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2tldGNocGFkLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZGVzay5oaWRlQW5zd2VyQnV0dG9uKCk7XG4gICAgICAgIHRoaXMudG9wQmFyLnNob3dNZXNzYWdlKGDkvaDnlLs6JHtkYXRhLndvcmR9YCk7XG4gICAgICAgIHRoaXMudG9wQmFyLnNob3dUaWNrZXIoRy5yb29tLmdldEdhbWVUaW1lKCkpO1xuICAgICAgICB0aGlzLnNrZXRjaHBhZC5lbmFibGVEcmF3KCk7XG4gICAgICAgIHRoaXMudG9vbFBhbmVsLnNob3coKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlUGFuZWwuaGlkZSgpO1xuICAgICAgICB0aGlzLmRlc2suaGlkZUFsbFRpcCgpO1xuICAgIH1cblxuICAgIG9uV3NTdGFydE90aGVyKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuZ2FtZU51bSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5vbkdhbWVTdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2tldGNocGFkLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZGVzay5zaG93QW5zd2VyQnV0dG9uKCk7XG4gICAgICAgIHRoaXMudG9wQmFyLnNob3dNZXNzYWdlKGDmj5DnpLo6JHtkYXRhLmhpbnR9YCk7XG4gICAgICAgIHRoaXMudG9wQmFyLnNob3dUaWNrZXIoRy5yb29tLmdldEdhbWVUaW1lKCkpO1xuICAgICAgICB0aGlzLnNrZXRjaHBhZC5kaXNhYmxlRHJhdygpO1xuICAgICAgICB0aGlzLnRvb2xQYW5lbC5oaWRlKCk7XG4gICAgICAgIHRoaXMubWVzc2FnZVBhbmVsLnNob3coKTtcbiAgICAgICAgdGhpcy5kZXNrLmhpZGVBbGxUaXAoKTtcbiAgICB9XG5cbiAgICBvbldzRHJhdyhkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09IFwicGF0aFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNrZXRjaHBhZC5kcmF3QnlQYXRoKGRhdGEucGF0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSBcImNvbG9yXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2tldGNocGFkLnNldFBlbkNvbG9yKGRhdGEuY29sb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gXCJ3aWR0aFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNrZXRjaHBhZC5zZXRMaW5lV2lkdGgoZGF0YS53aWR0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSBcImNsZWFyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2tldGNocGFkLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbldzQW5zd2VyKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuaXNSaWdodCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhLnNjb3Jlcykge1xuICAgICAgICAgICAgICAgIEcucm9vbS5zZXRTY29yZUJ5U2VhdCgraSwgZGF0YS5zY29yZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChHLnJvb20uZ2V0VWlkQnlTZWF0KCtpKSA9PT0gRy51c2VyLmdldFVpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzay5oaWRlQW5zd2VyQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCtpICE9PSBHLnJvb20uZ2V0UGFpbnRTZWF0KCkgKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrLmFuc3dlclJpZ2h0KCtpLGRhdGEuc2NvcmVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRlc2sudXBkYXRlU2VhdHNJbmZvKEcucm9vbS5nZXRTZWF0TWFwKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXNrLmFuc3dlcldyb25nKGRhdGEuc2VhdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbldzUmVzdWx0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5kZXNrLmhpZGVBbnN3ZXJCdXR0b24oKTtcbiAgICAgICAgdGhpcy50b3BCYXIuc2hvd01lc3NhZ2UoXCLnrZTmoYg6XCIgKyBkYXRhKTtcbiAgICAgICAgdGhpcy50b3BCYXIuc2hvd1RpY2tlcihHLnJvb20uZ2V0UmVzdWx0VGltZSgpKTtcbiAgICAgICAgdGhpcy5za2V0Y2hwYWQuZGlzYWJsZURyYXcoKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlUGFuZWwuc2hvdygpO1xuICAgICAgICB0aGlzLnRvb2xQYW5lbC5oaWRlKCk7XG4gICAgfVxuXG4gICAgb25Xc092ZXIoZGF0YSkge1xuICAgICAgICB0aGlzLmRlc2suaGlkZUFuc3dlckJ1dHRvbigpO1xuICAgICAgICB0aGlzLm92ZXJQYW5lbC5zaG93KCk7XG4gICAgICAgIHRoaXMudG9wQmFyLnNob3dNZXNzYWdlKFwi5ri45oiP57uT5p2f77yM6LW257Sn6LWw5ZCnXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIEcub25FeGl0Um9vbSgpO1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgfVxuXG4gICAgb25Xc0V4aXQoZGF0YSkge1xuICAgICAgICB0aGlzLmRlc2subGVhdmVVc2VyKGRhdGEpO1xuICAgIH1cblxuICAgIG9uU2tldGNocGFkQ29sb3IoZXZlbnQ6IFNrZXRjaHBhZEV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2tldGNocGFkLnNldFBlbkNvbG9yKGV2ZW50LmhleENvbG9yKTtcbiAgICAgICAgRy53cy5lbWl0KFwiZHJhd1wiLCB7XG4gICAgICAgICAgICB0eXBlOiBcImNvbG9yXCIsXG4gICAgICAgICAgICBjb2xvcjogZXZlbnQuaGV4Q29sb3IsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU2tldGNocGFkV2lkdGgoZXZlbnQ6IFNrZXRjaHBhZEV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2tldGNocGFkLnNldExpbmVXaWR0aChldmVudC53aWR0aCk7XG4gICAgICAgIEcud3MuZW1pdChcImRyYXdcIiwge1xuICAgICAgICAgICAgdHlwZTogXCJ3aWR0aFwiLFxuICAgICAgICAgICAgd2lkdGg6IGV2ZW50LndpZHRoLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblNrZXRjaHBhZENsZWFyKGV2ZW50OiBTa2V0Y2hwYWRFdmVudCkge1xuICAgICAgICB0aGlzLnNrZXRjaHBhZC5jbGVhcigpO1xuICAgICAgICBHLndzLmVtaXQoXCJkcmF3XCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwiY2xlYXJcIixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIC8vIEcud3Mub24oXCJtZXNzYWdlXCIsIHRoaXMub25Xc01lc3NhZ2UsIHRoaXMpO1xuICAgICAgICAvLyBHLndzLm9uKFwicm9vbVwiLCB0aGlzLm9uV3NSb29tSW5mbywgdGhpcyk7XG4gICAgICAgIEcud3Mub24oXCJkcmF3XCIsIHRoaXMub25Xc0RyYXcsIHRoaXMpO1xuICAgICAgICAvLyBHLndzLm9uKFwicmVhZHlcIiwgdGhpcy5vbldzUmVhZHksIHRoaXMpO1xuICAgICAgICBHLndzLm9uKFwic3RhcnRNZVwiLCB0aGlzLm9uV3NTdGFydE1lLCB0aGlzKTtcbiAgICAgICAgRy53cy5vbihcInN0YXJ0T3RoZXJcIiwgdGhpcy5vbldzU3RhcnRPdGhlciwgdGhpcyk7XG4gICAgICAgIEcud3Mub24oXCJhbnN3ZXJcIiwgdGhpcy5vbldzQW5zd2VyLCB0aGlzKTtcbiAgICAgICAgRy53cy5vbihcInJlc3VsdFwiLCB0aGlzLm9uV3NSZXN1bHQsIHRoaXMpO1xuICAgICAgICBHLndzLm9uKFwib3ZlclwiLCB0aGlzLm9uV3NPdmVyLCB0aGlzKTtcbiAgICAgICAgLy8gRy53cy5vbihcImhpbnRcIiwgdGhpcy5vbldzSGludCwgdGhpcyk7XG4gICAgICAgIC8vIEcud3Mub24oXCJ0aWNrXCIsIHRoaXMub25Xc1RpY2tlciwgdGhpcyk7XG4gICAgICAgIC8vIEcud3Mub24oXCJzY29yZVwiLCB0aGlzLm9uV3NTY29yZSwgdGhpcyk7XG4gICAgICAgIEcud3Mub24oXCJleGl0XCIsIHRoaXMub25Xc0V4aXQsIHRoaXMpO1xuICAgICAgICBHLm9uKFNrZXRjaHBhZEV2ZW50LkNPTE9SLCB0aGlzLm9uU2tldGNocGFkQ29sb3IsIHRoaXMpO1xuICAgICAgICBHLm9uKFNrZXRjaHBhZEV2ZW50LldJRFRILCB0aGlzLm9uU2tldGNocGFkV2lkdGgsIHRoaXMpO1xuICAgICAgICBHLm9uKFNrZXRjaHBhZEV2ZW50LkNMRUFSLCB0aGlzLm9uU2tldGNocGFkQ2xlYXIsIHRoaXMpO1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN5bmNQYXRoKCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgICAgIEcud3Mub2ZmVGFyZ2V0KHRoaXMpO1xuICAgICAgICBHLnRhcmdldE9mZih0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/prepare/PrepareSeatLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXHByZXBhcmVcXFByZXBhcmVTZWF0TGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFFdEMsSUFBQSxLQUFxQixFQUFFLENBQUMsVUFBVSxFQUFqQyxPQUFPLGFBQUEsRUFBQyxRQUFRLGNBQWlCLENBQUM7QUFHekM7SUFBdUMscUNBQVk7SUFBbkQ7UUFBQSxxRUE4QkM7UUEzQlcsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBRXBDLGFBQU8sR0FBRyxFQUFFLENBQUM7O0lBeUJ6QixDQUFDO0lBdkJVLG1DQUFPLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixJQUFJLFdBQVcsR0FBZSxRQUFRLENBQUMsWUFBWSxDQUFDLHlCQUFXLENBQUMsQ0FBQztRQUNqRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRU0scUNBQVMsR0FBaEIsVUFBaUIsR0FBRztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU0sdUNBQVcsR0FBbEIsVUFBbUIsR0FBRztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSx5Q0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBMUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0VBQ3dCO0lBSG5DLGlCQUFpQjtRQUQ3QixPQUFPO09BQ0ssaUJBQWlCLENBOEI3QjtJQUFELHdCQUFDO0NBOUJELEFBOEJDLENBOUJzQyxFQUFFLENBQUMsU0FBUyxHQThCbEQ7QUE5QlksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJlcGFyZVNlYXQgfSBmcm9tIFwiLi9QcmVwYXJlU2VhdFwiO1xuXG5jb25zdCB7Y2NjbGFzcyxwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFByZXBhcmVTZWF0TGF5b3V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgcHJlcGFyZVNlYXRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNlYXRNYXAgPSB7fTtcblxuICAgIHB1YmxpYyBhZGRVc2VyKHVzZXIpIHtcbiAgICAgICAgbGV0IHNlYXROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVwYXJlU2VhdFByZWZhYik7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChzZWF0Tm9kZSk7XG4gICAgICAgIGxldCBwcmVwYXJlU2VhdDpQcmVwYXJlU2VhdCA9IHNlYXROb2RlLmdldENvbXBvbmVudChQcmVwYXJlU2VhdCk7XG4gICAgICAgIHByZXBhcmVTZWF0LmluaXQodXNlcik7XG4gICAgICAgIGlmKHVzZXIuaXNSZWFkeSkge1xuICAgICAgICAgICAgcHJlcGFyZVNlYXQucHJlcGFyZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VhdE1hcFt1c2VyLnVpZF0gPSBwcmVwYXJlU2VhdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGVhdmVVc2VyKHVpZCkge1xuICAgICAgICB0aGlzLnNlYXRNYXBbdWlkXS5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJlcGFyZVVzZXIodWlkKSB7XG4gICAgICAgIHRoaXMuc2VhdE1hcFt1aWRdLnByZXBhcmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlQWxsVXNlcigpIHtcbiAgICAgICAgdGhpcy5zZWF0TWFwID0ge307XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80e79YU7CJPZ7A9fFjENm0G', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFJQSxFQUFFLENBQUNDLE1BQVAsRUFBZTtBQUNYO0FBQ0E7QUFDQUQsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLDJCQUFWLEdBQXdDLElBQXhDO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCDkuYvliY3niYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5pZiAoY2MuVG9nZ2xlKSB7XHJcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3osIPnlKggJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxyXG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayA9IHRydWU7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/models/UserModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99bc3cHK61GLaRChkFH1zsk', 'UserModel');
// src/models/UserModel.ts

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
exports.UserModel = void 0;
var G_1 = require("../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.user = {};
        _this.username = "";
        _this.head = "0";
        _this.uid = "";
        _this.rid = 0;
        return _this;
    }
    UserModel.prototype.setUser = function (userData) {
        this.user = userData;
    };
    UserModel.prototype.getUsername = function () {
        return this.user.username;
    };
    UserModel.prototype.getUserHead = function () {
        return G_1.G.gameRoot.getHeadSprite(this.user.head);
    };
    UserModel.prototype.setScore = function (score) {
        this.user.score = score;
    };
    UserModel.prototype.getScore = function () {
        return this.user.score;
    };
    UserModel.prototype.getUid = function () {
        return this.user.uid;
    };
    UserModel.prototype.getSeat = function () {
        return this.user.seat;
    };
    UserModel = __decorate([
        ccclass
    ], UserModel);
    return UserModel;
}(cc.Component));
exports.UserModel = UserModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxtb2RlbHNcXFVzZXJNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQXlCO0FBRW5CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBa0NDO1FBakNTLFVBQUksR0FBUSxFQUFFLENBQUM7UUFDZixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFVBQUksR0FBVyxHQUFHLENBQUM7UUFDbkIsU0FBRyxHQUFXLEVBQUUsQ0FBQztRQUNqQixTQUFHLEdBQVcsQ0FBQyxDQUFDOztJQTZCMUIsQ0FBQztJQTNCUSwyQkFBTyxHQUFkLFVBQWUsUUFBUTtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU0sK0JBQVcsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFFTSwrQkFBVyxHQUFsQjtRQUNFLE9BQU8sS0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sNEJBQVEsR0FBZixVQUFnQixLQUFhO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVNLDBCQUFNLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN4QixDQUFDO0lBakNVLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FrQ3JCO0lBQUQsZ0JBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQzhCLEVBQUUsQ0FBQyxTQUFTLEdBa0MxQztBQWxDWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcgfSBmcm9tIFwiLi4vR1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFVzZXJNb2RlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHByaXZhdGUgdXNlcjogYW55ID0ge307XG4gIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZyA9IFwiXCI7XG4gIHByaXZhdGUgaGVhZDogc3RyaW5nID0gXCIwXCI7XG4gIHByaXZhdGUgdWlkOiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIHJpZDogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgc2V0VXNlcih1c2VyRGF0YSkge1xuICAgIHRoaXMudXNlciA9IHVzZXJEYXRhO1xuICB9XG5cbiAgcHVibGljIGdldFVzZXJuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXNlci51c2VybmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVc2VySGVhZCgpOiBjYy5TcHJpdGVGcmFtZSB7XG4gICAgcmV0dXJuIEcuZ2FtZVJvb3QuZ2V0SGVhZFNwcml0ZSh0aGlzLnVzZXIuaGVhZCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2NvcmUoc2NvcmU6IG51bWJlcikge1xuICAgIHRoaXMudXNlci5zY29yZSA9IHNjb3JlO1xuICB9XG5cbiAgcHVibGljIGdldFNjb3JlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudXNlci5zY29yZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy51c2VyLnVpZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWF0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudXNlci5zZWF0O1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/register/HeadSelect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '404614DVrpDjZb7s5Bqm604', 'HeadSelect');
// src/scenes/register/HeadSelect.ts

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
exports.HeadSelect = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HeadSelect = /** @class */ (function (_super) {
    __extends(HeadSelect, _super);
    function HeadSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headSprite = null;
        _this.leftButton = null;
        _this.rightButton = null;
        _this.headList = null;
        _this.headId = 0;
        return _this;
    }
    HeadSelect.prototype.getHead = function () {
        return this.headId + "";
    };
    HeadSelect.prototype.start = function () {
        this.leftButton.on(cc.Node.EventType.TOUCH_END, this.onBtnLeft, this);
        this.rightButton.on(cc.Node.EventType.TOUCH_END, this.onBtnRight, this);
    };
    HeadSelect.prototype.onBtnLeft = function () {
        this.headId = this.headId === 0 ? 7 : (this.headId - 1);
        this.setHeadSprite();
    };
    HeadSelect.prototype.onBtnRight = function () {
        this.headId = this.headId === 7 ? 0 : (this.headId + 1);
        this.setHeadSprite();
    };
    HeadSelect.prototype.setHeadSprite = function () {
        this.headSprite.spriteFrame = this.headList.getSpriteFrame(this.headId + "");
    };
    __decorate([
        property(cc.Sprite)
    ], HeadSelect.prototype, "headSprite", void 0);
    __decorate([
        property(cc.Node)
    ], HeadSelect.prototype, "leftButton", void 0);
    __decorate([
        property(cc.Node)
    ], HeadSelect.prototype, "rightButton", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], HeadSelect.prototype, "headList", void 0);
    HeadSelect = __decorate([
        ccclass
    ], HeadSelect);
    return HeadSelect;
}(cc.Component));
exports.HeadSelect = HeadSelect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJlZ2lzdGVyXFxIZWFkU2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnQyw4QkFBWTtJQUE1QztRQUFBLHFFQW9DQztRQWpDVyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxZQUFNLEdBQUcsQ0FBQyxDQUFDOztJQXlCdkIsQ0FBQztJQXZCVSw0QkFBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTyw4QkFBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sK0JBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVPLGtDQUFhLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2lCO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ2U7SUFUL0IsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQW9DdEI7SUFBRCxpQkFBQztDQXBDRCxBQW9DQyxDQXBDK0IsRUFBRSxDQUFDLFNBQVMsR0FvQzNDO0FBcENZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgSGVhZFNlbGVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHByaXZhdGUgaGVhZFNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGxlZnRCdXR0b246IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgcmlnaHRCdXR0b246IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVBdGxhcylcbiAgICBwcml2YXRlIGhlYWRMaXN0OiBjYy5TcHJpdGVBdGxhcyA9IG51bGw7XG4gICAgXG4gICAgcHJpdmF0ZSBoZWFkSWQgPSAwO1xuXG4gICAgcHVibGljIGdldEhlYWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZElkICsgXCJcIjtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMubGVmdEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CdG5MZWZ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CdG5SaWdodCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJ0bkxlZnQoKSB7XG4gICAgICAgIHRoaXMuaGVhZElkID0gdGhpcy5oZWFkSWQgPT09IDAgPyA3IDogKHRoaXMuaGVhZElkIC0gMSk7XG4gICAgICAgIHRoaXMuc2V0SGVhZFNwcml0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG5SaWdodCgpIHtcbiAgICAgICAgdGhpcy5oZWFkSWQgPSB0aGlzLmhlYWRJZCA9PT0gNyA/IDAgOiAodGhpcy5oZWFkSWQgKyAxKTtcbiAgICAgICAgdGhpcy5zZXRIZWFkU3ByaXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRIZWFkU3ByaXRlKCkge1xuICAgICAgICB0aGlzLmhlYWRTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmhlYWRMaXN0LmdldFNwcml0ZUZyYW1lKHRoaXMuaGVhZElkICsgXCJcIik7XG4gICAgfVxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/login/LoginScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f87b5FbYiJD/by92bD82FtF', 'LoginScene');
// src/scenes/login/LoginScene.ts

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
var G_1 = require("../../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoginScene = /** @class */ (function (_super) {
    __extends(LoginScene, _super);
    function LoginScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.usernameInputBox = null;
        _this.passwordInputBox = null;
        _this.loginButton = null;
        _this.registerButton = null;
        return _this;
    }
    LoginScene.prototype.start = function () {
        this.addListeners();
        if (!G_1.G.ws.isOpen()) {
            G_1.G.gameRoot.showMaskMessage("正在连接服务器");
            G_1.G.ws.connect("ws://127.0.0.1:1323/ws");
            // G.ws.connect("ws://192.168.2.102:1323/ws");
            // G.ws.connect("ws://192.168.199.237:1323/ws");
            // G.ws.connect("ws://119.29.40.244:1323/ws");
        }
    };
    LoginScene.prototype.addListeners = function () {
        this.loginButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnLogin, this);
        this.registerButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnRegister, this);
        G_1.G.ws.on("ws_open", this.onWsOpenSuccess, this);
        G_1.G.ws.on("login", this.onWsLoginSuccess, this);
        G_1.G.ws.on("error", this.onWsError, this);
    };
    LoginScene.prototype.onBtnLogin = function () {
        G_1.G.gameRoot.showMaskMessage("正在登陆");
        var username = this.usernameInputBox.string;
        var password = this.passwordInputBox.string;
        var params = {
            username: username,
            password: password
        };
        G_1.G.ws.emit("login", params);
    };
    LoginScene.prototype.onBtnRegister = function () {
        G_1.G.onEnterRegister();
    };
    LoginScene.prototype.onWsOpenSuccess = function (data) {
        G_1.G.gameRoot.hideMaskMessage();
    };
    LoginScene.prototype.onWsLoginSuccess = function (data) {
        G_1.G.gameRoot.hideMaskMessage();
        G_1.G.onLoginSuccess(data);
    };
    LoginScene.prototype.onWsError = function (err) {
        G_1.G.gameRoot.hideMaskMessage();
        G_1.G.gameRoot.showTip(err.message);
        // G.gameRoot.showMaskMessage(err.message,1000);
    };
    LoginScene.prototype.onBtnTest1 = function () {
        G_1.G.gameRoot.showMaskMessage("正在登陆");
        var params = {
            username: "001",
            password: "001"
        };
        G_1.G.ws.emit("login", params);
    };
    LoginScene.prototype.onBtnTest2 = function () {
        G_1.G.gameRoot.showMaskMessage("正在登陆");
        var params = {
            username: "002",
            password: "002"
        };
        G_1.G.ws.emit("login", params);
    };
    LoginScene.prototype.onBtnTest3 = function () {
        G_1.G.gameRoot.showMaskMessage("正在登陆");
        var params = {
            username: "003",
            password: "003"
        };
        G_1.G.ws.emit("login", params);
    };
    LoginScene.prototype.onBtnTest4 = function () {
        G_1.G.gameRoot.showMaskMessage("正在登陆");
        var params = {
            username: "004",
            password: "004"
        };
        G_1.G.ws.emit("login", params);
    };
    __decorate([
        property(cc.EditBox)
    ], LoginScene.prototype, "usernameInputBox", void 0);
    __decorate([
        property(cc.EditBox)
    ], LoginScene.prototype, "passwordInputBox", void 0);
    __decorate([
        property(cc.Button)
    ], LoginScene.prototype, "loginButton", void 0);
    __decorate([
        property(cc.Button)
    ], LoginScene.prototype, "registerButton", void 0);
    LoginScene = __decorate([
        ccclass
    ], LoginScene);
    return LoginScene;
}(cc.Component));
exports.default = LoginScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXGxvZ2luXFxMb2dpblNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE0QjtBQUV0QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTZGQztRQTFGVyxzQkFBZ0IsR0FBZSxJQUFJLENBQUM7UUFFcEMsc0JBQWdCLEdBQWUsSUFBSSxDQUFDO1FBRXBDLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLG9CQUFjLEdBQWMsSUFBSSxDQUFDOztJQW9GN0MsQ0FBQztJQWxGVSwwQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUcsQ0FBQyxLQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2YsS0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEMsS0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN2Qyw4Q0FBOEM7WUFDOUMsZ0RBQWdEO1lBQ2hELDhDQUE4QztTQUNqRDtJQUNMLENBQUM7SUFFTSxpQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkYsS0FBQyxDQUFDLEVB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QXhGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3dEQUN1QjtJQUU1QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3dEQUN1QjtJQUU1QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNrQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNxQjtJQVR4QixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNkY5QjtJQUFELGlCQUFDO0NBN0ZELEFBNkZDLENBN0Z1QyxFQUFFLENBQUMsU0FBUyxHQTZGbkQ7a0JBN0ZvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi9HXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5TY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIHVzZXJuYW1lSW5wdXRCb3g6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIHByaXZhdGUgcGFzc3dvcmRJbnB1dEJveDogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIGxvZ2luQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgcHJpdmF0ZSByZWdpc3RlckJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgaWYoIUcud3MuaXNPcGVuKCkpIHtcbiAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5q2j5Zyo6L+e5o6l5pyN5Yqh5ZmoXCIpO1xuICAgICAgICAgICAgRy53cy5jb25uZWN0KFwid3M6Ly8xMjcuMC4wLjE6MTMyMy93c1wiKTtcbiAgICAgICAgICAgIC8vIEcud3MuY29ubmVjdChcIndzOi8vMTkyLjE2OC4yLjEwMjoxMzIzL3dzXCIpO1xuICAgICAgICAgICAgLy8gRy53cy5jb25uZWN0KFwid3M6Ly8xOTIuMTY4LjE5OS4yMzc6MTMyMy93c1wiKTtcbiAgICAgICAgICAgIC8vIEcud3MuY29ubmVjdChcIndzOi8vMTE5LjI5LjQwLjI0NDoxMzIzL3dzXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5sb2dpbkJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ0bkxvZ2luLCB0aGlzKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ0blJlZ2lzdGVyLCB0aGlzKTtcbiAgICAgICAgRy53cy5vbihcIndzX29wZW5cIix0aGlzLm9uV3NPcGVuU3VjY2Vzcyx0aGlzKTtcbiAgICAgICAgRy53cy5vbihcImxvZ2luXCIsdGhpcy5vbldzTG9naW5TdWNjZXNzLHRoaXMpO1xuICAgICAgICBHLndzLm9uKFwiZXJyb3JcIix0aGlzLm9uV3NFcnJvcix0aGlzKTtcbiAgICB9XG5cbiAgICBvbkJ0bkxvZ2luKCkge1xuICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIuato+WcqOeZu+mZhlwiKTtcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gdGhpcy51c2VybmFtZUlucHV0Qm94LnN0cmluZztcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gdGhpcy5wYXNzd29yZElucHV0Qm94LnN0cmluZztcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIEcud3MuZW1pdChcImxvZ2luXCIscGFyYW1zKTtcbiAgICB9XG5cbiAgICBvbkJ0blJlZ2lzdGVyKCkge1xuICAgICAgICBHLm9uRW50ZXJSZWdpc3RlcigpO1xuICAgIH1cblxuICAgIG9uV3NPcGVuU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIEcuZ2FtZVJvb3QuaGlkZU1hc2tNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgb25Xc0xvZ2luU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIEcuZ2FtZVJvb3QuaGlkZU1hc2tNZXNzYWdlKCk7XG4gICAgICAgIEcub25Mb2dpblN1Y2Nlc3MoZGF0YSk7XG4gICAgfVxuXG4gICAgb25Xc0Vycm9yKGVycikge1xuICAgICAgICBHLmdhbWVSb290LmhpZGVNYXNrTWVzc2FnZSgpO1xuICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAvLyBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShlcnIubWVzc2FnZSwxMDAwKTtcbiAgICB9XG5cbiAgICBvbkJ0blRlc3QxKCl7XG4gICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5q2j5Zyo55m76ZmGXCIpO1xuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IFwiMDAxXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCIwMDFcIlxuICAgICAgICB9XG4gICAgICAgIEcud3MuZW1pdChcImxvZ2luXCIscGFyYW1zKTtcbiAgICB9XG4gICAgb25CdG5UZXN0MigpIHtcbiAgICAgICAgRy5nYW1lUm9vdC5zaG93TWFza01lc3NhZ2UoXCLmraPlnKjnmbvpmYZcIik7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogXCIwMDJcIixcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIjAwMlwiXG4gICAgICAgIH1cbiAgICAgICAgRy53cy5lbWl0KFwibG9naW5cIixwYXJhbXMpO1xuICAgIH1cbiAgICBvbkJ0blRlc3QzKCkge1xuICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIuato+WcqOeZu+mZhlwiKTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIjAwM1wiLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiMDAzXCJcbiAgICAgICAgfVxuICAgICAgICBHLndzLmVtaXQoXCJsb2dpblwiLHBhcmFtcyk7XG4gICAgfVxuICAgIG9uQnRuVGVzdDQoKSB7XG4gICAgICAgIEcuZ2FtZVJvb3Quc2hvd01hc2tNZXNzYWdlKFwi5q2j5Zyo55m76ZmGXCIpO1xuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IFwiMDA0XCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCIwMDRcIlxuICAgICAgICB9XG4gICAgICAgIEcud3MuZW1pdChcImxvZ2luXCIscGFyYW1zKTtcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/loding/LodingScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36e9685DxVJ1YuBtWSPuUJq', 'LodingScene');
// src/scenes/loding/LodingScene.ts

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
exports.LodingScene = void 0;
var G_1 = require("../../G");
var GameRoot_1 = require("../GameRoot");
var NextHttp_1 = require("../../utils/NextHttp");
var NextWebSocket_1 = require("../../utils/NextWebSocket");
var RoomModel_1 = require("../../models/RoomModel");
var UserModel_1 = require("../../models/UserModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LodingScene = /** @class */ (function (_super) {
    __extends(LodingScene, _super);
    function LodingScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameRoot = null;
        return _this;
    }
    LodingScene.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.gameRoot);
        this.initGlobal();
    };
    LodingScene.prototype.initGlobal = function () {
        G_1.G.http = new NextHttp_1.NextHttp();
        G_1.G.ws = new NextWebSocket_1.NextWebSocket();
        G_1.G.room = new RoomModel_1.RoomModel();
        G_1.G.user = new UserModel_1.UserModel();
        G_1.G.gameRoot = this.gameRoot.getComponent(GameRoot_1.GameRoot);
    };
    LodingScene.prototype.start = function () {
        cc.director.setDisplayStats(false);
        G_1.G.gameRoot.showMaskMessage("正在加载资源");
        setTimeout(function () {
            G_1.G.gameRoot.hideMaskMessage();
            G_1.G.onLodingSuccess();
        }, 2000);
    };
    __decorate([
        property(cc.Node)
    ], LodingScene.prototype, "gameRoot", void 0);
    LodingScene = __decorate([
        ccclass
    ], LodingScene);
    return LodingScene;
}(cc.Component));
exports.LodingScene = LodingScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXGxvZGluZ1xcTG9kaW5nU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE0QjtBQUM1Qix3Q0FBdUM7QUFDdkMsaURBQWdEO0FBQ2hELDJEQUEwRDtBQUMxRCxvREFBbUQ7QUFDbkQsb0RBQW1EO0FBRTdDLElBQUEsS0FBcUIsRUFBRSxDQUFDLFVBQVUsRUFBakMsT0FBTyxhQUFBLEVBQUMsUUFBUSxjQUFpQixDQUFDO0FBR3pDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBNEJDO1FBekJXLGNBQVEsR0FBVyxJQUFJLENBQUM7O0lBeUJwQyxDQUFDO0lBdkJHLDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSxLQUFDLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQ3hCLEtBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFFM0IsS0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUN6QixLQUFDLENBQUMsSUFBSSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBRXpCLEtBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsbUJBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsS0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsVUFBVSxDQUFDO1lBQ1AsS0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM3QixLQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFBO0lBQ1gsQ0FBQztJQXhCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNjO0lBSHZCLFdBQVc7UUFEdkIsT0FBTztPQUNLLFdBQVcsQ0E0QnZCO0lBQUQsa0JBQUM7Q0E1QkQsQUE0QkMsQ0E1QmdDLEVBQUUsQ0FBQyxTQUFTLEdBNEI1QztBQTVCWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcgfSBmcm9tIFwiLi4vLi4vR1wiO1xuaW1wb3J0IHsgR2FtZVJvb3QgfSBmcm9tIFwiLi4vR2FtZVJvb3RcIjtcbmltcG9ydCB7IE5leHRIdHRwIH0gZnJvbSBcIi4uLy4uL3V0aWxzL05leHRIdHRwXCI7XG5pbXBvcnQgeyBOZXh0V2ViU29ja2V0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL05leHRXZWJTb2NrZXRcIjtcbmltcG9ydCB7IFJvb21Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUm9vbU1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1VzZXJNb2RlbFwiO1xuXG5jb25zdCB7Y2NjbGFzcyxwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIExvZGluZ1NjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZ2FtZVJvb3Q6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMuZ2FtZVJvb3QpO1xuICAgICAgICB0aGlzLmluaXRHbG9iYWwoKTtcbiAgICB9XG5cbiAgICBpbml0R2xvYmFsKCkge1xuICAgICAgICBHLmh0dHAgPSBuZXcgTmV4dEh0dHAoKTtcbiAgICAgICAgRy53cyA9IG5ldyBOZXh0V2ViU29ja2V0KCk7XG4gICAgICAgIFxuICAgICAgICBHLnJvb20gPSBuZXcgUm9vbU1vZGVsKCk7XG4gICAgICAgIEcudXNlciA9IG5ldyBVc2VyTW9kZWwoKTtcblxuICAgICAgICBHLmdhbWVSb290ID0gdGhpcy5nYW1lUm9vdC5nZXRDb21wb25lbnQoR2FtZVJvb3QpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgICAgICBHLmdhbWVSb290LnNob3dNYXNrTWVzc2FnZShcIuato+WcqOWKoOi9vei1hOa6kFwiKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgRy5nYW1lUm9vdC5oaWRlTWFza01lc3NhZ2UoKTtcbiAgICAgICAgICAgIEcub25Mb2RpbmdTdWNjZXNzKCk7XG4gICAgICAgIH0sMjAwMClcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/desk/GameSeat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb657zZFjxGdKGG4kK3r8sB', 'GameSeat');
// src/scenes/room/desk/GameSeat.ts

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
exports.GameSeat = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameSeat = /** @class */ (function (_super) {
    __extends(GameSeat, _super);
    function GameSeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.usernameLabel = null;
        _this.tipLabel = null;
        return _this;
    }
    GameSeat.prototype.init = function (user) {
        this.usernameLabel.string = user.username + "\n" + user.score;
    };
    GameSeat.prototype.showTip = function (tip) {
        this.tipLabel.node.active = true;
        this.tipLabel.string = tip;
    };
    GameSeat.prototype.hideTip = function () {
        this.tipLabel.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], GameSeat.prototype, "usernameLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameSeat.prototype, "tipLabel", void 0);
    GameSeat = __decorate([
        ccclass
    ], GameSeat);
    return GameSeat;
}(cc.Component));
exports.GameSeat = GameSeat;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXGRlc2tcXEdhbWVTZWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4Qiw0QkFBWTtJQUExQztRQUFBLHFFQW9CQztRQWpCVyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQWEsSUFBSSxDQUFDOztJQWV0QyxDQUFDO0lBYlUsdUJBQUksR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ2xFLENBQUM7SUFFTSwwQkFBTyxHQUFkLFVBQWUsR0FBVTtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUMvQixDQUFDO0lBRU0sMEJBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQWZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ29CO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ2U7SUFMekIsUUFBUTtRQURwQixPQUFPO09BQ0ssUUFBUSxDQW9CcEI7SUFBRCxlQUFDO0NBcEJELEFBb0JDLENBcEI2QixFQUFFLENBQUMsU0FBUyxHQW9CekM7QUFwQlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEdhbWVTZWF0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIHVzZXJuYW1lTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSB0aXBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHVibGljIGluaXQodXNlcikge1xuICAgICAgICB0aGlzLnVzZXJuYW1lTGFiZWwuc3RyaW5nID0gdXNlci51c2VybmFtZSArIFwiXFxuXCIgKyB1c2VyLnNjb3JlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93VGlwKHRpcDpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aXBMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudGlwTGFiZWwuc3RyaW5nID0gdGlwO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlVGlwKCkge1xuICAgICAgICB0aGlzLnRpcExhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/utils/NextStore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4dc48XJ8MZEwowjLJmhkI3Z', 'NextStore');
// src/utils/NextStore.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextStore = void 0;
var NextStore = /** @class */ (function () {
    function NextStore() {
    }
    Object.defineProperty(NextStore.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (user) {
            this._user = user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NextStore.prototype, "room", {
        get: function () {
            return this._room;
        },
        set: function (room) {
            this._room = room;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NextStore.prototype, "token", {
        get: function () {
            return this.user ? this.user.token : "";
        },
        enumerable: false,
        configurable: true
    });
    return NextStore;
}());
exports.NextStore = NextStore;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx1dGlsc1xcTmV4dFN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFzQkEsQ0FBQztJQW5CRyxzQkFBVywyQkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFDRCxVQUFnQixJQUFJO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7OztPQUhBO0lBTUQsc0JBQVcsMkJBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBZ0IsSUFBSTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDOzs7T0FIQTtJQUtELHNCQUFXLDRCQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRUwsZ0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5leHRTdG9yZSB7XG5cbiAgICBwcml2YXRlIF91c2VyOiBhbnk7XG4gICAgcHVibGljIGdldCB1c2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlcjtcbiAgICB9XG4gICAgcHVibGljIHNldCB1c2VyKHVzZXIpIHtcbiAgICAgICAgdGhpcy5fdXNlciA9IHVzZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcm9vbTogYW55O1xuICAgIHB1YmxpYyBnZXQgcm9vbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb207XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgcm9vbShyb29tKSB7XG4gICAgICAgIHRoaXMuX3Jvb20gPSByb29tO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXIgPyB0aGlzLnVzZXIudG9rZW4gOiBcIlwiO1xuICAgIH1cblxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/over/OverPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXG92ZXJcXE92ZXJQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQStCO0FBRXpCLElBQUEsS0FBcUIsRUFBRSxDQUFDLFVBQVUsRUFBakMsT0FBTyxhQUFBLEVBQUMsUUFBUSxjQUFpQixDQUFDO0FBR3pDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBZ0NDO1FBN0JXLGlCQUFXLEdBQWEsSUFBSSxDQUFDOztJQTZCekMsQ0FBQztJQTNCVSx3QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksT0FBTyxHQUFHLEtBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsS0FBSSxJQUFJLENBQUMsSUFBSSxPQUFPLEVBQUM7WUFDakIsSUFBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUM7Z0JBQ1YsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQjtTQUNKO1FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsRUFBQyxFQUFFO1lBQ2IsSUFBRyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLE9BQU8sQ0FBQyxDQUFDLENBQUE7YUFDWjtpQkFBSztnQkFDRixPQUFPLENBQUMsQ0FBQzthQUNaO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDN0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQU8sQ0FBQyxjQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLGVBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBSSxJQUFNLENBQUM7U0FDckY7SUFDTCxDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNrQjtJQUg1QixTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBZ0NyQjtJQUFELGdCQUFDO0NBaENELEFBZ0NDLENBaEM4QixFQUFFLENBQUMsU0FBUyxHQWdDMUM7QUFoQ1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHIH0gZnJvbSBcIi4uLy4uLy4uL0dcIjtcblxuY29uc3Qge2NjY2xhc3MscHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBPdmVyUGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgcmVzdWx0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHB1YmxpYyBzaG93KCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IHVzZXJzID0gW107XG4gICAgICAgIGxldCBzZWF0TWFwID0gRy5yb29tLmdldFNlYXRNYXAoKTtcbiAgICAgICAgZm9yKGxldCBpIGluIHNlYXRNYXApe1xuICAgICAgICAgICAgaWYoc2VhdE1hcFtpXSl7XG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaChzZWF0TWFwW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1c2Vycy5zb3J0KCh1MSx1Mik9PntcbiAgICAgICAgICAgIGlmKHUxLnNjb3JlID49IHUyLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlc3VsdExhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRMYWJlbC5zdHJpbmcgKz0gYCR7aX3jgJAke3VzZXJzW2ldLnVzZXJuYW1lfeOAkSAke3VzZXJzW2ldLnNjb3JlfeWIhiR7XCJcXG5cIn1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKSB7XG4gICAgICAgIGlmKHRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/events/SketchpadEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcf33WZYOREyZxnMdDnbJEL', 'SketchpadEvent');
// src/events/SketchpadEvent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SketchpadEvent = void 0;
var SketchpadEvent = /** @class */ (function (_super) {
    __extends(SketchpadEvent, _super);
    function SketchpadEvent(type) {
        return _super.call(this, type, true) || this;
    }
    SketchpadEvent.COLOR = "SketchpadColor";
    SketchpadEvent.WIDTH = "SketchpadWidth";
    SketchpadEvent.CLEAR = "SketchpadClear";
    return SketchpadEvent;
}(cc.Event.EventCustom));
exports.SketchpadEvent = SketchpadEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxldmVudHNcXFNrZXRjaHBhZEV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFvQyxrQ0FBb0I7SUFRcEQsd0JBQW1CLElBQVc7ZUFDMUIsa0JBQU0sSUFBSSxFQUFFLElBQUksQ0FBQztJQUNyQixDQUFDO0lBUnNCLG9CQUFLLEdBQUcsZ0JBQWdCLENBQUM7SUFDekIsb0JBQUssR0FBRyxnQkFBZ0IsQ0FBQztJQUN6QixvQkFBSyxHQUFHLGdCQUFnQixDQUFDO0lBUXBELHFCQUFDO0NBWkQsQUFZQyxDQVptQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FZdkQ7QUFaWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTa2V0Y2hwYWRFdmVudCBleHRlbmRzIGNjLkV2ZW50LkV2ZW50Q3VzdG9tIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09MT1IgPSBcIlNrZXRjaHBhZENvbG9yXCI7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBXSURUSCA9IFwiU2tldGNocGFkV2lkdGhcIjtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENMRUFSID0gXCJTa2V0Y2hwYWRDbGVhclwiO1xuICAgIHB1YmxpYyBoZXhDb2xvcjpzdHJpbmc7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IodHlwZTpzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIodHlwZSwgdHJ1ZSk7XG4gICAgfVxuICAgIFxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/events/JoinRoomEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ee35ArJPtF6KpDiHW4Botq', 'JoinRoomEvent');
// src/events/JoinRoomEvent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinRoomEvent = void 0;
var JoinRoomEvent = /** @class */ (function (_super) {
    __extends(JoinRoomEvent, _super);
    function JoinRoomEvent(roomNum) {
        var _this = _super.call(this, JoinRoomEvent.NAME, true) || this;
        _this.roomNum = roomNum;
        return _this;
    }
    JoinRoomEvent.NAME = "JoinRoom";
    return JoinRoomEvent;
}(cc.Event.EventCustom));
exports.JoinRoomEvent = JoinRoomEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxldmVudHNcXEpvaW5Sb29tRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQW1DLGlDQUFvQjtJQUluRCx1QkFBbUIsT0FBYztRQUFqQyxZQUNJLGtCQUFNLGFBQWEsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBRWpDO1FBREcsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQzNCLENBQUM7SUFOc0Isa0JBQUksR0FBRyxVQUFVLENBQUM7SUFRN0Msb0JBQUM7Q0FURCxBQVNDLENBVGtDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQVN0RDtBQVRZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEpvaW5Sb29tRXZlbnQgZXh0ZW5kcyBjYy5FdmVudC5FdmVudEN1c3RvbSB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOQU1FID0gXCJKb2luUm9vbVwiO1xuICAgIHB1YmxpYyByb29tTnVtOm51bWJlcjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihyb29tTnVtOm51bWJlcikge1xuICAgICAgICBzdXBlcihKb2luUm9vbUV2ZW50Lk5BTUUsdHJ1ZSk7XG4gICAgICAgIHRoaXMucm9vbU51bSA9IHJvb21OdW07XG4gICAgfVxuICAgIFxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/G.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd9bfmN5bBIMJl0qUodz0QE', 'G');
// src/G.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.G = void 0;
var Global = /** @class */ (function (_super) {
    __extends(Global, _super);
    function Global() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameRoot = null;
        _this.http = null;
        _this.ws = null;
        _this.user = null;
        _this.room = null;
        return _this;
    }
    Global.prototype.setGameRoot = function (gameRoot) {
        this.gameRoot = gameRoot;
    };
    Global.prototype.onLodingSuccess = function () {
        cc.director.loadScene("login");
    };
    Global.prototype.onLoginSuccess = function (user) {
        cc.log(user);
        this.user.setUser(user);
        cc.director.loadScene("hall");
    };
    Global.prototype.onEnterRegister = function () {
        cc.director.loadScene("register");
    };
    Global.prototype.onHallExit = function () {
        cc.director.loadScene("login");
    };
    Global.prototype.onEnterRoom = function (data) {
        this.room.setRoom(data);
        cc.director.loadScene("room");
    };
    Global.prototype.onExitRoom = function () {
        cc.director.loadScene("hall");
    };
    Global.Instance = new Global();
    return Global;
}(cc.EventTarget));
exports.G = Global.Instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxHLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTtJQUFxQiwwQkFBYztJQUFuQztRQUFBLHFFQTJDQztRQXZDVSxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFDdEIsUUFBRSxHQUFrQixJQUFJLENBQUM7UUFFekIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUN2QixVQUFJLEdBQWMsSUFBSSxDQUFDOztJQWlDbEMsQ0FBQztJQS9CVSw0QkFBVyxHQUFsQixVQUFtQixRQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRU0sZ0NBQWUsR0FBdEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sK0JBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUN0QixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLGdDQUFlLEdBQXRCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLDJCQUFVLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLDRCQUFXLEdBQWxCLFVBQW1CLElBQUk7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLDJCQUFVLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXZDc0IsZUFBUSxHQUFVLElBQUksTUFBTSxFQUFFLENBQUM7SUF5QzFELGFBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ29CLEVBQUUsQ0FBQyxXQUFXLEdBMkNsQztBQUVZLFFBQUEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0U3RvcmUgfSBmcm9tIFwiLi91dGlscy9OZXh0U3RvcmVcIjtcbmltcG9ydCB7IE5leHRIdHRwIH0gZnJvbSBcIi4vdXRpbHMvTmV4dEh0dHBcIjtcbmltcG9ydCB7IE5leHRXZWJTb2NrZXQgfSBmcm9tIFwiLi91dGlscy9OZXh0V2ViU29ja2V0XCI7XG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvVXNlck1vZGVsXCI7XG5pbXBvcnQgeyBSb29tTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvUm9vbU1vZGVsXCI7XG5pbXBvcnQgeyBHYW1lUm9vdCB9IGZyb20gXCIuL3NjZW5lcy9HYW1lUm9vdFwiO1xuXG5jbGFzcyBHbG9iYWwgZXh0ZW5kcyBjYy5FdmVudFRhcmdldHtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSW5zdGFuY2U6R2xvYmFsID0gbmV3IEdsb2JhbCgpO1xuXG4gICAgcHVibGljIGdhbWVSb290OkdhbWVSb290ID0gbnVsbDtcbiAgICBcbiAgICBwdWJsaWMgaHR0cDogTmV4dEh0dHAgPSBudWxsO1xuICAgIHB1YmxpYyB3czogTmV4dFdlYlNvY2tldCA9IG51bGw7XG5cbiAgICBwdWJsaWMgdXNlcjogVXNlck1vZGVsID0gbnVsbDtcbiAgICBwdWJsaWMgcm9vbTogUm9vbU1vZGVsID0gbnVsbDtcblxuICAgIHB1YmxpYyBzZXRHYW1lUm9vdChnYW1lUm9vdDpHYW1lUm9vdCkge1xuICAgICAgICB0aGlzLmdhbWVSb290ID0gZ2FtZVJvb3Q7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9kaW5nU3VjY2VzcygpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9naW5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9naW5TdWNjZXNzKHVzZXIpIHtcbiAgICAgICAgY2MubG9nKHVzZXIpO1xuICAgICAgICB0aGlzLnVzZXIuc2V0VXNlcih1c2VyKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaGFsbFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25FbnRlclJlZ2lzdGVyKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJyZWdpc3RlclwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25IYWxsRXhpdCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9naW5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRW50ZXJSb29tKGRhdGEpIHtcbiAgICAgICAgdGhpcy5yb29tLnNldFJvb20oZGF0YSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJvb21cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRXhpdFJvb20oKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImhhbGxcIik7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBHID0gR2xvYmFsLkluc3RhbmNlOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/models/RoomModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxtb2RlbHNcXFJvb21Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0IsNkJBQVk7SUFBM0M7UUFBQSxxRUFzREM7UUFyRFcsVUFBSSxHQUFRLEVBQUUsQ0FBQzs7SUFxRDNCLENBQUM7SUFuRFUsd0JBQUksR0FBWCxVQUFZLFFBQVE7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELDJCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDJCQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxrQ0FBYyxHQUFkLFVBQWUsSUFBWSxFQUFFLEtBQWE7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBRUQsa0NBQWMsR0FBZCxVQUFlLElBQVk7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUVELGdDQUFZLEdBQVosVUFBYSxJQUFZLEVBQUUsT0FBZ0I7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUM5QyxDQUFDO0lBRU0sMEJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDekIsQ0FBQztJQUVNLDJCQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFTSwrQkFBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVNLGlDQUFhLEdBQXBCO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sZ0NBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFyRFEsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQXNEckI7SUFBRCxnQkFBQztDQXRERCxBQXNEQyxDQXREOEIsRUFBRSxDQUFDLFNBQVMsR0FzRDFDO0FBdERZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBSb29tTW9kZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgcm9vbTogYW55ID0ge307XG5cbiAgICBwdWJsaWMgaW5pdChyb29tRGF0YSkge1xuICAgICAgICB0aGlzLnJvb20gPSByb29tRGF0YTtcbiAgICB9XG5cbiAgICBzZXRSb29tKHJvb20pIHtcbiAgICAgICAgdGhpcy5yb29tID0gcm9vbTtcbiAgICB9XG5cbiAgICBnZXRSb29tKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb29tO1xuICAgIH1cblxuICAgIGdldFNlYXRNYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb20uc2VhdE1hcDtcbiAgICB9XG5cbiAgICBnZXRVaWRCeVNlYXQoc2VhdCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb20uc2VhdE1hcFtzZWF0XS51aWQ7XG4gICAgfVxuXG4gICAgc2V0U2NvcmVCeVNlYXQoc2VhdDogbnVtYmVyLCBzY29yZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucm9vbS5zZWF0TWFwW3NlYXRdLnNjb3JlID0gc2NvcmU7XG4gICAgfVxuXG4gICAgZ2V0U2NvcmVCeVNlYXQoc2VhdDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vbS5zZWF0TWFwW3NlYXRdLnNjb3JlO1xuICAgIH1cblxuICAgIHNldFNlYXRSZWFkeShzZWF0OiBudW1iZXIsIGlzUmVhZHk6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5yb29tLnNlYXRNYXBbc2VhdF0uaXNSZWFkeSA9IGlzUmVhZHk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJpZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yb29tLnJpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SGludCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yb29tLmhpbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEdhbWVUaW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb20uZ2FtZVRpbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlc3VsdFRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vbS5yZXN1bHRUaW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQYWludFNlYXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vbS5wYWludDtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/GameRoot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c901dE8zAtBSKEafidliboX', 'GameRoot');
// src/scenes/GameRoot.ts

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
exports.GameRoot = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameRoot = /** @class */ (function (_super) {
    __extends(GameRoot, _super);
    function GameRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskPanel = null;
        _this.messageLabel = null;
        _this.tipPanel = null;
        _this.tipLabel = null;
        _this.headList = null;
        return _this;
    }
    GameRoot.prototype.showMaskMessage = function (message, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 0; }
        this.messageLabel.string = message;
        if (!this.maskPanel.active) {
            this.maskPanel.active = true;
        }
        if (timeout > 0) {
            setTimeout(function () { _this.hideMaskMessage(); }, timeout);
        }
    };
    GameRoot.prototype.hideMaskMessage = function () {
        this.maskPanel.active = false;
    };
    GameRoot.prototype.showTip = function (tip) {
        this.tipLabel.string = tip;
        this.tipPanel.getComponent(cc.Animation).play();
    };
    GameRoot.prototype.getHeadSprite = function (name) {
        return this.headList.getSpriteFrame(name);
    };
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "maskPanel", void 0);
    __decorate([
        property(cc.Label)
    ], GameRoot.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "tipPanel", void 0);
    __decorate([
        property(cc.Label)
    ], GameRoot.prototype, "tipLabel", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], GameRoot.prototype, "headList", void 0);
    GameRoot = __decorate([
        ccclass
    ], GameRoot);
    return GameRoot;
}(cc.Component));
exports.GameRoot = GameRoot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXEdhbWVSb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXFCLEVBQUUsQ0FBQyxVQUFVLEVBQWpDLE9BQU8sYUFBQSxFQUFDLFFBQVEsY0FBaUIsQ0FBQztBQUd6QztJQUE4Qiw0QkFBWTtJQUExQztRQUFBLHFFQW1DQztRQWhDVyxlQUFTLEdBQVcsSUFBSSxDQUFDO1FBRXpCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQW1CLElBQUksQ0FBQzs7SUF3QjVDLENBQUM7SUF0QlUsa0NBQWUsR0FBdEIsVUFBdUIsT0FBYyxFQUFDLE9BQWtCO1FBQXhELGlCQVFDO1FBUnFDLHdCQUFBLEVBQUEsV0FBa0I7UUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ25DLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDaEM7UUFDRCxJQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFDWixVQUFVLENBQUMsY0FBSyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUEsQ0FBQSxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEQ7SUFDTCxDQUFDO0lBRU0sa0NBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVNLDBCQUFPLEdBQWQsVUFBZSxHQUFVO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVNLGdDQUFhLEdBQXBCLFVBQXFCLElBQVk7UUFDN0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDbUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNlO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQ2U7SUFYL0IsUUFBUTtRQURwQixPQUFPO09BQ0ssUUFBUSxDQW1DcEI7SUFBRCxlQUFDO0NBbkNELEFBbUNDLENBbkM2QixFQUFFLENBQUMsU0FBUyxHQW1DekM7QUFuQ1ksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcyxwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEdhbWVSb290IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbWFza1BhbmVsOmNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIG1lc3NhZ2VMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgdGlwUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIHRpcExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxuICAgIHByaXZhdGUgaGVhZExpc3Q6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcblxuICAgIHB1YmxpYyBzaG93TWFza01lc3NhZ2UobWVzc2FnZTpzdHJpbmcsdGltZW91dDpudW1iZXIgPSAwKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUxhYmVsLnN0cmluZyA9IG1lc3NhZ2U7XG4gICAgICAgIGlmKCF0aGlzLm1hc2tQYW5lbC5hY3RpdmUpe1xuICAgICAgICAgICAgdGhpcy5tYXNrUGFuZWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e3RoaXMuaGlkZU1hc2tNZXNzYWdlKCl9LHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGVNYXNrTWVzc2FnZSgpIHtcbiAgICAgICAgdGhpcy5tYXNrUGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dUaXAodGlwOnN0cmluZykge1xuICAgICAgICB0aGlzLnRpcExhYmVsLnN0cmluZyA9IHRpcDtcbiAgICAgICAgdGhpcy50aXBQYW5lbC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXRIZWFkU3ByaXRlKG5hbWU6IHN0cmluZyk6IGNjLlNwcml0ZUZyYW1lIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZExpc3QuZ2V0U3ByaXRlRnJhbWUobmFtZSk7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/hall/JoinRoomPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ca3dWOCE5KEIsWWgBuTutO', 'JoinRoomPanel');
// src/scenes/hall/JoinRoomPanel.ts

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
exports.JoinRoomPanel = void 0;
var G_1 = require("../../G");
var JoinRoomEvent_1 = require("../../events/JoinRoomEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var JoinRoomPanel = /** @class */ (function (_super) {
    __extends(JoinRoomPanel, _super);
    function JoinRoomPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.confirmButton = null;
        _this.closeButton = null;
        _this.inputBox = null;
        return _this;
    }
    JoinRoomPanel.prototype.onLoad = function () {
        this.confirmButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnConfirm, this);
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnClose, this);
    };
    JoinRoomPanel.prototype.show = function () {
        this.node.active = true;
    };
    JoinRoomPanel.prototype.hide = function () {
        this.node.active = false;
    };
    JoinRoomPanel.prototype.onBtnConfirm = function () {
        var roomNum;
        if (this.inputBox.string === "") {
            roomNum = 1;
        }
        else {
            roomNum = +this.inputBox.string;
        }
        G_1.G.dispatchEvent(new JoinRoomEvent_1.JoinRoomEvent(roomNum));
    };
    JoinRoomPanel.prototype.onBtnClose = function () {
        this.hide();
    };
    __decorate([
        property(cc.Button)
    ], JoinRoomPanel.prototype, "confirmButton", void 0);
    __decorate([
        property(cc.Button)
    ], JoinRoomPanel.prototype, "closeButton", void 0);
    __decorate([
        property(cc.EditBox)
    ], JoinRoomPanel.prototype, "inputBox", void 0);
    JoinRoomPanel = __decorate([
        ccclass
    ], JoinRoomPanel);
    return JoinRoomPanel;
}(cc.Component));
exports.JoinRoomPanel = JoinRoomPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXGhhbGxcXEpvaW5Sb29tUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE0QjtBQUM1Qiw0REFBMkQ7QUFFckQsSUFBQSxLQUFxQixFQUFFLENBQUMsVUFBVSxFQUFqQyxPQUFPLGFBQUEsRUFBQyxRQUFRLGNBQWlCLENBQUM7QUFHekM7SUFBbUMsaUNBQVk7SUFBL0M7UUFBQSxxRUFvQ0M7UUFsQ1csbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFlLElBQUksQ0FBQzs7SUE4QnhDLENBQUM7SUE1QmEsOEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFTSw0QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFTSw0QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTyxvQ0FBWSxHQUFwQjtRQUNJLElBQUksT0FBTyxDQUFDO1FBQ1osSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUM7WUFDM0IsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNmO2FBQUk7WUFDRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUNuQztRQUNELEtBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLGtDQUFVLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUEvQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDb0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDa0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzttREFDZTtJQU4zQixhQUFhO1FBRHpCLE9BQU87T0FDSyxhQUFhLENBb0N6QjtJQUFELG9CQUFDO0NBcENELEFBb0NDLENBcENrQyxFQUFFLENBQUMsU0FBUyxHQW9DOUM7QUFwQ1ksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHIH0gZnJvbSBcIi4uLy4uL0dcIjtcbmltcG9ydCB7IEpvaW5Sb29tRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL0pvaW5Sb29tRXZlbnRcIjtcblxuY29uc3Qge2NjY2xhc3MscHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBKb2luUm9vbVBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgY29uZmlybUJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgY2xvc2VCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSBpbnB1dEJveDogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvbmZpcm1CdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5vbkJ0bkNvbmZpcm0sdGhpcyk7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5vbkJ0bkNsb3NlLHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG5Db25maXJtKCkge1xuICAgICAgICBsZXQgcm9vbU51bTtcbiAgICAgICAgaWYodGhpcy5pbnB1dEJveC5zdHJpbmcgPT09IFwiXCIpe1xuICAgICAgICAgICAgcm9vbU51bSA9IDE7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcm9vbU51bSA9ICt0aGlzLmlucHV0Qm94LnN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBHLmRpc3BhdGNoRXZlbnQobmV3IEpvaW5Sb29tRXZlbnQocm9vbU51bSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG5DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG5cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/hall/CreateRoomPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXGhhbGxcXENyZWF0ZVJvb21QYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQTRCO0FBQzVCLGdFQUErRDtBQUV6RCxJQUFBLEtBQXFCLEVBQUUsQ0FBQyxVQUFVLEVBQWpDLE9BQU8sYUFBQSxFQUFDLFFBQVEsY0FBaUIsQ0FBQztBQUd6QztJQUFxQyxtQ0FBWTtJQUFqRDtRQUFBLHFFQThDQztRQTVDVyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixxQkFBZSxHQUFlLElBQUksQ0FBQztRQUVuQyxxQkFBZSxHQUFlLElBQUksQ0FBQzs7SUFzQy9DLENBQUM7SUFyQ2EsZ0NBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFTSw4QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFTSw4QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTyxzQ0FBWSxHQUFwQjtRQUNJLElBQUksT0FBTyxFQUFDLE9BQU8sQ0FBQztRQUNwQixJQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUNuQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO1NBQ2Q7YUFBSztZQUNGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1NBQzFDO1FBQ0QsSUFBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUM7WUFDbEMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNmO2FBQUk7WUFDRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztTQUMxQztRQUNELElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFDM0MsS0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7YUFBSztZQUNGLEtBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxpQ0FBZSxDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0wsQ0FBQztJQUVPLG9DQUFVLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUF6Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDb0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDa0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0REFDc0I7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0REFDc0I7SUFSbEMsZUFBZTtRQUQzQixPQUFPO09BQ0ssZUFBZSxDQThDM0I7SUFBRCxzQkFBQztDQTlDRCxBQThDQyxDQTlDb0MsRUFBRSxDQUFDLFNBQVMsR0E4Q2hEO0FBOUNZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi9HXCI7XG5pbXBvcnQgeyBDcmVhdGVSb29tRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL0NyZWF0ZVJvb21FdmVudFwiO1xuXG5jb25zdCB7Y2NjbGFzcyxwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIENyZWF0ZVJvb21QYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIGNvbmZpcm1CdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIGNsb3NlQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIHByaXZhdGUgc2VhdFN1bUlucHV0Qm94OiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIGdhbWVTdW1JbnB1dEJveDogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5jb25maXJtQnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMub25CdG5Db25maXJtLHRoaXMpO1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMub25CdG5DbG9zZSx0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRuQ29uZmlybSgpIHtcbiAgICAgICAgbGV0IGdhbWVTdW0sc2VhdFN1bTtcbiAgICAgICAgaWYodGhpcy5zZWF0U3VtSW5wdXRCb3guc3RyaW5nID09PSBcIlwiKSB7XG4gICAgICAgICAgICBzZWF0U3VtID0gMFxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBzZWF0U3VtID0gK3RoaXMuc2VhdFN1bUlucHV0Qm94LnN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmdhbWVTdW1JbnB1dEJveC5zdHJpbmcgPT09IFwiXCIpe1xuICAgICAgICAgICAgZ2FtZVN1bSA9IDA7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZ2FtZVN1bSA9ICt0aGlzLmdhbWVTdW1JbnB1dEJveC5zdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlYXRTdW0gPCAyIHx8IHNlYXRTdW0gPiA2IHx8IGdhbWVTdW0gPCAxKSB7XG4gICAgICAgICAgICBHLmdhbWVSb290LnNob3dUaXAoXCLovpPlhaXlj4LmlbDkuI3lkIjms5VcIik7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIEcuZGlzcGF0Y2hFdmVudChuZXcgQ3JlYXRlUm9vbUV2ZW50KHNlYXRTdW0sZ2FtZVN1bSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJ0bkNsb3NlKCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cblxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/message/BulletMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6cf4ba1uexM+LxzOyDjW0cr', 'BulletMessage');
// src/scenes/room/message/BulletMessage.ts

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
exports.BulletMessage = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletMessage = /** @class */ (function (_super) {
    __extends(BulletMessage, _super);
    function BulletMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.messageBox = null;
        _this.messageLabel = null;
        return _this;
    }
    BulletMessage.prototype.show = function (message) {
        this.messageLabel.string = message;
    };
    __decorate([
        property(cc.Node)
    ], BulletMessage.prototype, "messageBox", void 0);
    __decorate([
        property(cc.Label)
    ], BulletMessage.prototype, "messageLabel", void 0);
    BulletMessage = __decorate([
        ccclass
    ], BulletMessage);
    return BulletMessage;
}(cc.Component));
exports.BulletMessage = BulletMessage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXG1lc3NhZ2VcXEJ1bGxldE1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLGlDQUFZO0lBQS9DO1FBQUEscUVBV0M7UUFSVyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixrQkFBWSxHQUFhLElBQUksQ0FBQzs7SUFNMUMsQ0FBQztJQUpVLDRCQUFJLEdBQVgsVUFBWSxPQUFjO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUN2QyxDQUFDO0lBTkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDbUI7SUFMN0IsYUFBYTtRQUR6QixPQUFPO09BQ0ssYUFBYSxDQVd6QjtJQUFELG9CQUFDO0NBWEQsQUFXQyxDQVhrQyxFQUFFLENBQUMsU0FBUyxHQVc5QztBQVhZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQnVsbGV0TWVzc2FnZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIG1lc3NhZ2VCb3g6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIG1lc3NhZ2VMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHVibGljIHNob3cobWVzc2FnZTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlTGFiZWwuc3RyaW5nID0gbWVzc2FnZTtcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/register/RegisterScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15d7cJ0n7ZIFqvq8XoeSRtL', 'RegisterScene');
// src/scenes/register/RegisterScene.ts

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
exports.RegisterScene = void 0;
var G_1 = require("../../G");
var HeadSelect_1 = require("./HeadSelect");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RegisterScene = /** @class */ (function (_super) {
    __extends(RegisterScene, _super);
    function RegisterScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headSelect = null;
        _this.usernameInput = null;
        _this.pwdInput = null;
        _this.pwdConfirmInput = null;
        _this.registerButton = null;
        _this.returnLoginButton = null;
        return _this;
    }
    RegisterScene.prototype.start = function () {
        this.addListeners();
    };
    RegisterScene.prototype.onBtnRegister = function () {
        var username = this.usernameInput.string;
        var pwd1 = this.pwdInput.string;
        var pwd2 = this.pwdConfirmInput.string;
        if (username === "" || pwd1 === "" || pwd2 === "") {
            G_1.G.gameRoot.showTip("用户名和密码不能为空！");
        }
        else if (pwd1 !== pwd2) {
            G_1.G.gameRoot.showTip("两次密码不同！");
        }
        else {
            var head = this.headSelect.getHead();
            var params = {
                username: username,
                password: pwd1,
                head: head
            };
            G_1.G.ws.emit("register", params);
        }
    };
    RegisterScene.prototype.onWsRegisterSuccess = function () {
        G_1.G.gameRoot.showTip("注册成功");
    };
    RegisterScene.prototype.onBtnReturnLogin = function () {
        cc.director.loadScene("login");
    };
    RegisterScene.prototype.addListeners = function () {
        this.registerButton.on(cc.Node.EventType.TOUCH_END, this.onBtnRegister, this);
        this.returnLoginButton.on(cc.Node.EventType.TOUCH_END, this.onBtnReturnLogin, this);
        G_1.G.ws.on("register", this.onWsRegisterSuccess, this);
    };
    __decorate([
        property(HeadSelect_1.HeadSelect)
    ], RegisterScene.prototype, "headSelect", void 0);
    __decorate([
        property(cc.EditBox)
    ], RegisterScene.prototype, "usernameInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], RegisterScene.prototype, "pwdInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], RegisterScene.prototype, "pwdConfirmInput", void 0);
    __decorate([
        property(cc.Node)
    ], RegisterScene.prototype, "registerButton", void 0);
    __decorate([
        property(cc.Node)
    ], RegisterScene.prototype, "returnLoginButton", void 0);
    RegisterScene = __decorate([
        ccclass
    ], RegisterScene);
    return RegisterScene;
}(cc.Component));
exports.RegisterScene = RegisterScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJlZ2lzdGVyXFxSZWdpc3RlclNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBNEI7QUFDNUIsMkNBQTBDO0FBRXBDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLGlDQUFZO0lBQS9DO1FBQUEscUVBb0RDO1FBakRXLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWUsSUFBSSxDQUFDO1FBRWpDLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFFNUIscUJBQWUsR0FBZSxJQUFJLENBQUM7UUFFbkMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsdUJBQWlCLEdBQVksSUFBSSxDQUFDOztJQXVDOUMsQ0FBQztJQXJDRyw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxRQUFRLEtBQUssRUFBRSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUMvQyxLQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUN0QixLQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQyxJQUFJLE1BQU0sR0FBRztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLElBQUk7YUFDYixDQUFBO1lBQ0QsS0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVPLDJDQUFtQixHQUEzQjtRQUNJLEtBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTyx3Q0FBZ0IsR0FBeEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU8sb0NBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEYsS0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBL0NEO1FBREMsUUFBUSxDQUFDLHVCQUFVLENBQUM7cURBQ2lCO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0RBQ29CO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7bURBQ2U7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswREFDc0I7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDcUI7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFDd0I7SUFiakMsYUFBYTtRQUR6QixPQUFPO09BQ0ssYUFBYSxDQW9EekI7SUFBRCxvQkFBQztDQXBERCxBQW9EQyxDQXBEa0MsRUFBRSxDQUFDLFNBQVMsR0FvRDlDO0FBcERZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi9HXCI7XG5pbXBvcnQgeyBIZWFkU2VsZWN0IH0gZnJvbSBcIi4vSGVhZFNlbGVjdFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBSZWdpc3RlclNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShIZWFkU2VsZWN0KVxuICAgIHByaXZhdGUgaGVhZFNlbGVjdDogSGVhZFNlbGVjdCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSB1c2VybmFtZUlucHV0OiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIHB3ZElucHV0OiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIHB3ZENvbmZpcm1JbnB1dDogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSByZWdpc3RlckJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSByZXR1cm5Mb2dpbkJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBvbkJ0blJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgdXNlcm5hbWUgPSB0aGlzLnVzZXJuYW1lSW5wdXQuc3RyaW5nO1xuICAgICAgICBsZXQgcHdkMSA9IHRoaXMucHdkSW5wdXQuc3RyaW5nO1xuICAgICAgICBsZXQgcHdkMiA9IHRoaXMucHdkQ29uZmlybUlucHV0LnN0cmluZztcbiAgICAgICAgaWYgKHVzZXJuYW1lID09PSBcIlwiIHx8IHB3ZDEgPT09IFwiXCIgfHwgcHdkMiA9PT0gXCJcIikge1xuICAgICAgICAgICAgRy5nYW1lUm9vdC5zaG93VGlwKFwi55So5oi35ZCN5ZKM5a+G56CB5LiN6IO95Li656m677yBXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHB3ZDEgIT09IHB3ZDIpIHtcbiAgICAgICAgICAgIEcuZ2FtZVJvb3Quc2hvd1RpcChcIuS4pOasoeWvhueggeS4jeWQjO+8gVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBoZWFkID0gdGhpcy5oZWFkU2VsZWN0LmdldEhlYWQoKTtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwd2QxLFxuICAgICAgICAgICAgICAgIGhlYWQ6IGhlYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEcud3MuZW1pdChcInJlZ2lzdGVyXCIscGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Xc1JlZ2lzdGVyU3VjY2VzcygpIHtcbiAgICAgICAgRy5nYW1lUm9vdC5zaG93VGlwKFwi5rOo5YaM5oiQ5YqfXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG5SZXR1cm5Mb2dpbigpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9naW5cIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQnRuUmVnaXN0ZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLnJldHVybkxvZ2luQnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ0blJldHVybkxvZ2luLCB0aGlzKTtcbiAgICAgICAgRy53cy5vbihcInJlZ2lzdGVyXCIsIHRoaXMub25Xc1JlZ2lzdGVyU3VjY2VzcywgdGhpcyk7XG4gICAgfVxuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/prepare/PrepareSeat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5e69ngmwdHPYTxDucvcbhW', 'PrepareSeat');
// src/scenes/room/prepare/PrepareSeat.ts

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
exports.PrepareSeat = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PrepareSeat = /** @class */ (function (_super) {
    __extends(PrepareSeat, _super);
    function PrepareSeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.usernameLabel = null;
        _this.prepareIcon = null;
        return _this;
    }
    PrepareSeat.prototype.init = function (user) {
        this.usernameLabel.string = user.username;
    };
    PrepareSeat.prototype.prepare = function () {
        this.prepareIcon.active = true;
    };
    __decorate([
        property(cc.Label)
    ], PrepareSeat.prototype, "usernameLabel", void 0);
    __decorate([
        property(cc.Node)
    ], PrepareSeat.prototype, "prepareIcon", void 0);
    PrepareSeat = __decorate([
        ccclass
    ], PrepareSeat);
    return PrepareSeat;
}(cc.Component));
exports.PrepareSeat = PrepareSeat;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXHByZXBhcmVcXFByZXBhcmVTZWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXFCLEVBQUUsQ0FBQyxVQUFVLEVBQWpDLE9BQU8sYUFBQSxFQUFDLFFBQVEsY0FBaUIsQ0FBQztBQUd6QztJQUFpQywrQkFBWTtJQUE3QztRQUFBLHFFQWVDO1FBWlcsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBVyxJQUFJLENBQUM7O0lBVXZDLENBQUM7SUFSVSwwQkFBSSxHQUFYLFVBQVksSUFBSTtRQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDN0MsQ0FBQztJQUVNLDZCQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQVZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ21CO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ2lCO0lBTDFCLFdBQVc7UUFEdkIsT0FBTztPQUNLLFdBQVcsQ0FldkI7SUFBRCxrQkFBQztDQWZELEFBZUMsQ0FmZ0MsRUFBRSxDQUFDLFNBQVMsR0FlNUM7QUFmWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUHJlcGFyZVNlYXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgdXNlcm5hbWVMYWJlbDpjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBwcmVwYXJlSWNvbjpjYy5Ob2RlID0gbnVsbDtcblxuICAgIHB1YmxpYyBpbml0KHVzZXIpIHtcbiAgICAgICB0aGlzLnVzZXJuYW1lTGFiZWwuc3RyaW5nID0gdXNlci51c2VybmFtZTsgXG4gICAgfVxuXG4gICAgcHVibGljIHByZXBhcmUoKSB7XG4gICAgICAgIHRoaXMucHJlcGFyZUljb24uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/desk/Desk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXGRlc2tcXERlc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFzQztBQUN0Qyw2Q0FBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEIsd0JBQVk7SUFBdEM7UUFBQSxxRUFrRkM7UUEvRVcsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBRWhDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBUSxFQUFFLENBQUM7O0lBdUU5QixDQUFDO0lBckVhLHFCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxtQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFTSxtQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTSwrQkFBZ0IsR0FBdkI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUFFTSwrQkFBZ0IsR0FBdkI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLDBCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sOEJBQWUsR0FBdEIsVUFBdUIsT0FBTztRQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsS0FBSSxJQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7WUFDbEIsSUFBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7SUFDTCxDQUFDO0lBRU0sMEJBQVcsR0FBbEIsVUFBbUIsSUFBSSxFQUFDLEtBQUs7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSwwQkFBVyxHQUFsQixVQUFtQixJQUFJO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSx5QkFBVSxHQUFqQjtRQUNJLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBQztZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVNLHNCQUFPLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQVksUUFBUSxDQUFDLFlBQVksQ0FBQyxtQkFBUSxDQUFDLENBQUM7UUFDeEQsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUVNLHdCQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLDRCQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTywyQkFBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBN0VEO1FBREMsUUFBUSxDQUFDLHlCQUFXLENBQUM7NkNBQ2tCO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ21CO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ3FCO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ2lCO0lBVDFCLElBQUk7UUFEaEIsT0FBTztPQUNLLElBQUksQ0FrRmhCO0lBQUQsV0FBQztDQWxGRCxBQWtGQyxDQWxGeUIsRUFBRSxDQUFDLFNBQVMsR0FrRnJDO0FBbEZZLG9CQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZVNlYXQgfSBmcm9tIFwiLi9HYW1lU2VhdFwiO1xuaW1wb3J0IHsgQW5zd2VyUGFuZWwgfSBmcm9tIFwiLi9BbnN3ZXJQYW5lbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIERlc2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KEFuc3dlclBhbmVsKVxuICAgIHByaXZhdGUgYW5zd2VyUGFuZWw6IEFuc3dlclBhbmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgYW5zd2VyQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBnYW1lU2VhdFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHNlYXRMYXlvdXQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBzZWF0TWFwOiBhbnkgPSB7fTtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzaG93KCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93QW5zd2VyQnV0dG9uKCkge1xuICAgICAgICB0aGlzLmFuc3dlckJ1dHRvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGVBbnN3ZXJCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYW5zd2VyQnV0dG9uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5zd2VyUGFuZWwuaGlkZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkJ0bkFuc3dlcigpIHtcbiAgICAgICAgdGhpcy5hbnN3ZXJQYW5lbC5zaG93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVNlYXRzSW5mbyhzZWF0TWFwKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsVXNlcigpO1xuICAgICAgICBmb3IobGV0IGkgaW4gc2VhdE1hcCkge1xuICAgICAgICAgICAgaWYoc2VhdE1hcFtpXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVXNlcihzZWF0TWFwW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhbnN3ZXJSaWdodChzZWF0LHNjb3JlKSB7XG4gICAgICAgIHRoaXMuc2VhdE1hcFtzZWF0XS5zaG93VGlwKFwi562U5a+5K1wiK3Njb3JlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYW5zd2VyV3Jvbmcoc2VhdCkge1xuICAgICAgICB0aGlzLnNlYXRNYXBbc2VhdF0uc2hvd1RpcChcIuetlOmUmVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZUFsbFRpcCgpIHtcbiAgICAgICAgZm9yKGxldCBpIGluIHRoaXMuc2VhdE1hcCl7XG4gICAgICAgICAgICB0aGlzLnNlYXRNYXBbaV0uaGlkZVRpcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFVzZXIodXNlcikge1xuICAgICAgICBsZXQgc2VhdE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdhbWVTZWF0UHJlZmFiKTtcbiAgICAgICAgdGhpcy5zZWF0TGF5b3V0LmFkZENoaWxkKHNlYXROb2RlKTtcbiAgICAgICAgbGV0IGdhbWVTZWF0OkdhbWVTZWF0ID0gc2VhdE5vZGUuZ2V0Q29tcG9uZW50KEdhbWVTZWF0KTtcbiAgICAgICAgZ2FtZVNlYXQuaW5pdCh1c2VyKTtcbiAgICAgICAgdGhpcy5zZWF0TWFwW3VzZXIuc2VhdF0gPSBnYW1lU2VhdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGVhdmVVc2VyKHNlYXQpIHtcbiAgICAgICAgdGhpcy5zZWF0TWFwW3NlYXRdLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVBbGxVc2VyKCkge1xuICAgICAgICB0aGlzLnNlYXRNYXAgPSB7fTtcbiAgICAgICAgdGhpcy5zZWF0TGF5b3V0LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuYW5zd2VyQnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQnRuQW5zd2VyLCB0aGlzKTtcbiAgICB9XG5cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/topbar/TopBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'edc2endFO9A4rdw5VupHBIg', 'TopBar');
// src/scenes/room/topbar/TopBar.ts

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
exports.TopBar = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TopBar = /** @class */ (function (_super) {
    __extends(TopBar, _super);
    function TopBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.centerLabel = null;
        _this.tickerLabel = null;
        _this.tickNumber = 0;
        _this.intervalId = -1;
        return _this;
    }
    TopBar.prototype.showMessage = function (message) {
        this.centerLabel.string = message;
    };
    TopBar.prototype.showTicker = function (n) {
        var _this = this;
        clearInterval(this.intervalId);
        this.tickNumber = n;
        this.tickerLabel.string = this.tickNumber + "";
        this.intervalId = setInterval(function () {
            _this.tickNumber--;
            _this.tickerLabel.string = _this.tickNumber + "";
            if (_this.tickNumber <= 0) {
                clearInterval(_this.intervalId);
            }
        }, 1000);
    };
    TopBar.prototype.hideTicker = function () {
        this.tickerLabel.string = "-";
    };
    __decorate([
        property(cc.Label)
    ], TopBar.prototype, "centerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], TopBar.prototype, "tickerLabel", void 0);
    TopBar = __decorate([
        ccclass
    ], TopBar);
    return TopBar;
}(cc.Component));
exports.TopBar = TopBar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXHRvcGJhclxcVG9wQmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQWdDQztRQTdCVSxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFVLENBQUMsQ0FBQztRQUV0QixnQkFBVSxHQUFVLENBQUMsQ0FBQyxDQUFDOztJQXVCbkMsQ0FBQztJQXJCVSw0QkFBVyxHQUFsQixVQUFtQixPQUFjO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBRU0sMkJBQVUsR0FBakIsVUFBa0IsQ0FBUTtRQUExQixpQkFXQztRQVZHLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBQyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7WUFDMUIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxVQUFVLEdBQUMsRUFBRSxDQUFDO1lBQzdDLElBQUcsS0FBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JCLGFBQWEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDbEM7UUFDTCxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDWixDQUFDO0lBRU0sMkJBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDbEMsQ0FBQztJQTNCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNnQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNrQjtJQUw1QixNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBZ0NsQjtJQUFELGFBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQzJCLEVBQUUsQ0FBQyxTQUFTLEdBZ0N2QztBQWhDWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFRvcEJhciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGNlbnRlckxhYmVsOmNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSB0aWNrZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSB0aWNrTnVtYmVyOm51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIGludGVydmFsSWQ6bnVtYmVyID0gLTE7XG5cbiAgICBwdWJsaWMgc2hvd01lc3NhZ2UobWVzc2FnZTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jZW50ZXJMYWJlbC5zdHJpbmcgPSBtZXNzYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93VGlja2VyKG46bnVtYmVyKXtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICB0aGlzLnRpY2tOdW1iZXIgPSBuO1xuICAgICAgICB0aGlzLnRpY2tlckxhYmVsLnN0cmluZyA9IHRoaXMudGlja051bWJlcitcIlwiO1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy50aWNrTnVtYmVyLS07XG4gICAgICAgICAgICB0aGlzLnRpY2tlckxhYmVsLnN0cmluZyA9IHRoaXMudGlja051bWJlcitcIlwiO1xuICAgICAgICAgICAgaWYodGhpcy50aWNrTnVtYmVyIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sMTAwMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGVUaWNrZXIoKSB7XG4gICAgICAgIHRoaXMudGlja2VyTGFiZWwuc3RyaW5nID0gXCItXCI7XG4gICAgfVxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/desk/AnswerPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9504dTZZftG3rwjG4bYKSgu', 'AnswerPanel');
// src/scenes/room/desk/AnswerPanel.ts

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
exports.AnswerPanel = void 0;
var G_1 = require("../../../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AnswerPanel = /** @class */ (function (_super) {
    __extends(AnswerPanel, _super);
    function AnswerPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hintLabel = null;
        _this.input = null;
        _this.confirmButton = null;
        _this.closeButton = null;
        return _this;
    }
    AnswerPanel.prototype.onLoad = function () {
        this.addListeners();
    };
    AnswerPanel.prototype.show = function () {
        this.node.active = true;
        this.hintLabel.string = G_1.G.room.getHint();
    };
    AnswerPanel.prototype.hide = function () {
        this.node.active = false;
    };
    AnswerPanel.prototype.onBtnConfirm = function () {
        var answer = this.input.string;
        if (answer !== "") {
            G_1.G.ws.emit("answer", answer);
            this.input.string = "";
            this.hide();
        }
    };
    AnswerPanel.prototype.onBtnClose = function () {
        this.hide();
    };
    AnswerPanel.prototype.addListeners = function () {
        this.confirmButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnConfirm, this);
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, this.onBtnClose, this);
    };
    __decorate([
        property(cc.Label)
    ], AnswerPanel.prototype, "hintLabel", void 0);
    __decorate([
        property(cc.EditBox)
    ], AnswerPanel.prototype, "input", void 0);
    __decorate([
        property(cc.Button)
    ], AnswerPanel.prototype, "confirmButton", void 0);
    __decorate([
        property(cc.Button)
    ], AnswerPanel.prototype, "closeButton", void 0);
    AnswerPanel = __decorate([
        ccclass
    ], AnswerPanel);
    return AnswerPanel;
}(cc.Component));
exports.AnswerPanel = AnswerPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXGRlc2tcXEFuc3dlclBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQ0FBK0I7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUMsK0JBQVk7SUFBN0M7UUFBQSxxRUF5Q0M7UUF0Q1csZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixXQUFLLEdBQWUsSUFBSSxDQUFDO1FBRXpCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLGlCQUFXLEdBQWMsSUFBSSxDQUFDOztJQWdDMUMsQ0FBQztJQTlCYSw0QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sMEJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFTSwwQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTyxrQ0FBWSxHQUFwQjtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUcsTUFBTSxLQUFLLEVBQUUsRUFBQztZQUNiLEtBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRU8sZ0NBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLGtDQUFZLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBckNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ2dCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7OENBQ1k7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDb0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDa0I7SUFUN0IsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQXlDdkI7SUFBRCxrQkFBQztDQXpDRCxBQXlDQyxDQXpDZ0MsRUFBRSxDQUFDLFNBQVMsR0F5QzVDO0FBekNZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRyB9IGZyb20gXCIuLi8uLi8uLi9HXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQW5zd2VyUGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgaGludExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSBpbnB1dDogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIGNvbmZpcm1CdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIGNsb3NlQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaGludExhYmVsLnN0cmluZyA9IEcucm9vbS5nZXRIaW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRuQ29uZmlybSgpIHtcbiAgICAgICAgbGV0IGFuc3dlciA9IHRoaXMuaW5wdXQuc3RyaW5nO1xuICAgICAgICBpZihhbnN3ZXIgIT09IFwiXCIpe1xuICAgICAgICAgICAgRy53cy5lbWl0KFwiYW5zd2VyXCIsYW5zd2VyKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJ0bkNsb3NlKCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5jb25maXJtQnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQnRuQ29uZmlybSwgdGhpcyk7XG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CdG5DbG9zZSwgdGhpcyk7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/prepare/PreparePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXHByZXBhcmVcXFByZXBhcmVQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQStCO0FBQy9CLHlEQUF3RDtBQUVsRCxJQUFBLEtBQXFCLEVBQUUsQ0FBQyxVQUFVLEVBQWpDLE9BQU8sYUFBQSxFQUFDLFFBQVEsY0FBaUIsQ0FBQztBQUd6QztJQUFrQyxnQ0FBWTtJQUE5QztRQUFBLHFFQWdFQztRQTdEVyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyx1QkFBaUIsR0FBc0IsSUFBSSxDQUFDOztJQXlEeEQsQ0FBQztJQXZEYSw2QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sMkJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsSUFBSSxPQUFPLEdBQUcsS0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxLQUFJLElBQUksQ0FBQyxJQUFJLE9BQU8sRUFBRztZQUNuQixJQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQztnQkFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1NBQ0o7SUFDTCxDQUFDO0lBRU0sMkJBQUksR0FBWDtRQUNJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFTyxtQ0FBWSxHQUFwQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN2QyxLQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU8sK0JBQVEsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixLQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsSUFBSSxPQUFPLEdBQUcsS0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxLQUFJLElBQUksQ0FBQyxJQUFJLE9BQU8sRUFBRztZQUNuQixJQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQztnQkFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixLQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsS0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQUVPLG1DQUFZLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9FLEtBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLEtBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLEtBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLEtBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxzQ0FBZSxHQUF2QjtRQUNJLEtBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUE1REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDb0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDcUI7SUFFekM7UUFEQyxRQUFRLENBQUMscUNBQWlCLENBQUM7MkRBQ3dCO0lBUDNDLFlBQVk7UUFEeEIsT0FBTztPQUNLLFlBQVksQ0FnRXhCO0lBQUQsbUJBQUM7Q0FoRUQsQUFnRUMsQ0FoRWlDLEVBQUUsQ0FBQyxTQUFTLEdBZ0U3QztBQWhFWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcgfSBmcm9tIFwiLi4vLi4vLi4vR1wiO1xuaW1wb3J0IHsgUHJlcGFyZVNlYXRMYXlvdXQgfSBmcm9tIFwiLi9QcmVwYXJlU2VhdExheW91dFwiO1xuXG5jb25zdCB7Y2NjbGFzcyxwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFByZXBhcmVQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgcHJlcGFyZUJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgcHJlcGFyZWRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KFByZXBhcmVTZWF0TGF5b3V0KVxuICAgIHByaXZhdGUgcHJlcGFyZVNlYXRMYXlvdXQ6IFByZXBhcmVTZWF0TGF5b3V0ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnByZXBhcmVTZWF0TGF5b3V0LnJlbW92ZUFsbFVzZXIoKTtcbiAgICAgICAgbGV0IHNlYXRNYXAgPSBHLnJvb20uZ2V0U2VhdE1hcCgpO1xuICAgICAgICBmb3IobGV0IGkgaW4gc2VhdE1hcCkgIHtcbiAgICAgICAgICAgIGlmKHNlYXRNYXBbaV0pe1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZVNlYXRMYXlvdXQuYWRkVXNlcihzZWF0TWFwW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKCkge1xuICAgICAgICBpZih0aGlzLm5vZGUuYWN0aXZlKXtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRuUHJlcGFyZSgpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlQnV0dG9uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJlcGFyZWRCdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBHLndzLmVtaXQoXCJyZWFkeVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uV3NSb29tKHJvb20pIHtcbiAgICAgICAgRy5yb29tLnNldFJvb20ocm9vbSk7XG4gICAgICAgIHRoaXMucHJlcGFyZVNlYXRMYXlvdXQucmVtb3ZlQWxsVXNlcigpO1xuICAgICAgICBsZXQgc2VhdE1hcCA9IEcucm9vbS5nZXRTZWF0TWFwKCk7XG4gICAgICAgIGZvcihsZXQgaSBpbiBzZWF0TWFwKSAge1xuICAgICAgICAgICAgaWYoc2VhdE1hcFtpXSl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlU2VhdExheW91dC5hZGRVc2VyKHNlYXRNYXBbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Xc1JlYWR5KGRhdGEpIHtcbiAgICAgICAgRy5yb29tLnNldFNlYXRSZWFkeShkYXRhLnNlYXQsdHJ1ZSk7XG4gICAgICAgIHRoaXMucHJlcGFyZVNlYXRMYXlvdXQucHJlcGFyZVVzZXIoRy5yb29tLmdldFNlYXRNYXAoKVtkYXRhLnNlYXRdLnVpZClcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlQnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMub25CdG5QcmVwYXJlLHRoaXMpO1xuICAgICAgICBHLndzLm9uKFwicm9vbVwiLHRoaXMub25Xc1Jvb20sdGhpcyk7XG4gICAgICAgIEcud3Mub24oXCJyZWFkeVwiLHRoaXMub25Xc1JlYWR5LHRoaXMpO1xuICAgICAgICBHLndzLm9uKFwic3RhcnRNZVwiLCB0aGlzLmhpZGUsIHRoaXMpO1xuICAgICAgICBHLndzLm9uKFwic3RhcnRPdGhlclwiLCB0aGlzLmhpZGUsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgICBHLndzLm9mZlRhcmdldCh0aGlzKTtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/utils/NextHttp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0cafD+/9JBOo37YYc1vNvT', 'NextHttp');
// src/utils/NextHttp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextHttp = void 0;
var NextHttp = /** @class */ (function () {
    function NextHttp(serverAddress) {
        this.serverAddress = "https://127.0.0.1:1323/";
        this.token = '';
        if (serverAddress) {
            this.serverAddress = serverAddress;
        }
    }
    NextHttp.prototype.updateToken = function (token) {
        this.token = token;
    };
    NextHttp.prototype.get = function (name, params, successCb, errorCb) {
        this.action = 'get';
        this.api = name;
        this.apiParams = params;
        this.successCallback = successCb;
        this.errorCallback = errorCb;
        this.send();
    };
    NextHttp.prototype.post = function (name, params, successCb, errorCb) {
        this.action = 'post';
        this.api = name;
        this.apiParams = params;
        this.successCallback = successCb;
        this.errorCallback = errorCb;
        this.send();
    };
    NextHttp.prototype.dealWithMeta = function (meta) {
    };
    NextHttp.prototype.send = function () {
        var _this = this;
        // 参数检查
        if (!this.action)
            throw new Error('Api action is not given!');
        if (!this.api)
            throw new Error('Api name is not given!');
        var action = this.action;
        var api = this.api;
        var params = this.apiParams || {};
        var token = this.token;
        var url = this.serverAddress + api;
        if (token && !params.hasOwnProperty('token')) {
            // params["_token"] = token;
        }
        // 初始化XMLHttpRequest
        var xmlHttp = new XMLHttpRequest();
        var append = '';
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                if (append !== '') {
                    append += '&';
                }
                var param = params[key];
                param = typeof param === "object" ? JSON.stringify(param) : param;
                // URL发送数据时，+号和&号会丢失，因此应在发送前转换
                if (typeof param === "string") {
                    param = param.replace(/\+/g, '%2B');
                    param = param.replace(/&/g, '%26');
                    param = encodeURIComponent(param);
                }
                append += key + '=' + param;
            }
        }
        if (action === 'post') {
            xmlHttp.open(action, url);
        }
        else {
            if (append !== '') {
                xmlHttp.open(action, url + '?' + append);
            }
            else {
                xmlHttp.open(action, url);
            }
        }
        xmlHttp.setRequestHeader('Authorization', 'Bearer ' + token);
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    var strData = void 0;
                    // 若有返回结果
                    if (xmlHttp.responseText.length >= 0) {
                        try {
                            strData = JSON.parse(xmlHttp.responseText);
                        }
                        catch (e) {
                            cc.log('Response data is not in JSON format!');
                            // Helper.log(xmlHttp.responseText);
                        }
                        // 若成功解析返回的数据
                        if (strData) {
                            // data: api返回数据的主要内容
                            // meta: api返回的元数据，比如游戏状态改变，分页信息等等
                            // error: api返回的错误信息
                            var data = void 0, meta = void 0, error = void 0;
                            if (strData.hasOwnProperty('meta') && strData['meta'] !== null) {
                                meta = strData['meta'];
                                _this.dealWithMeta(meta);
                            }
                            if (strData.hasOwnProperty('data') && strData['data'] !== null) {
                                if (_this.successCallback) {
                                    _this.successCallback(strData['data']);
                                }
                            }
                            if (strData.hasOwnProperty('error') && strData['error'] !== null) {
                                error = strData['error'];
                                if (_this.errorCallback) {
                                    _this.errorCallback(error);
                                }
                                else {
                                    cc.log('Unhandled Api Error!');
                                }
                            }
                        }
                        else {
                            cc.log('Server Error!');
                        }
                    }
                    else {
                        cc.log('Can\'t get the response data.');
                        if (_this.errorCallback) {
                            _this.errorCallback();
                        }
                    }
                }
                else { //其它http状态码处理
                    cc.log(xmlHttp.responseText);
                }
            }
            else { //其它request状态处理
            }
        };
        if (action === 'post') {
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlHttp.send(append);
        }
        else {
            xmlHttp.send();
        }
    };
    return NextHttp;
}());
exports.NextHttp = NextHttp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx1dGlsc1xcTmV4dEh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFVSSxrQkFBbUIsYUFBcUI7UUFUaEMsa0JBQWEsR0FBRyx5QkFBeUIsQ0FBQztRQUkxQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBTXZCLElBQUcsYUFBYSxFQUFDO1lBQ2IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRU0sOEJBQVcsR0FBbEIsVUFBbUIsS0FBWTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sc0JBQUcsR0FBVixVQUFXLElBQVksRUFBRSxNQUFrQixFQUFFLFNBQStCLEVBQUUsT0FBMkI7UUFDckcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx1QkFBSSxHQUFYLFVBQVksSUFBWSxFQUFFLE1BQWtCLEVBQUUsU0FBK0IsRUFBRSxPQUEyQjtRQUN0RyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLCtCQUFZLEdB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d0JBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO3dCQUN4QyxJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUU7NEJBQ3BCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzt5QkFDeEI7cUJBQ0o7aUJBQ0o7cUJBQU0sRUFBRSxhQUFhO29CQUNsQixFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDaEM7YUFDSjtpQkFBTSxFQUFFLGVBQWU7YUFDdkI7UUFDTCxDQUFDLENBQUM7UUFDRixJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7WUFDbkIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNILE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FoSkEsQUFnSkMsSUFBQTtBQWhKWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOZXh0SHR0cCB7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJBZGRyZXNzID0gXCJodHRwczovLzEyNy4wLjAuMToxMzIzL1wiO1xuICAgIHByaXZhdGUgYWN0aW9uOiBJQXBpTWV0aG9kO1xuICAgIHByaXZhdGUgYXBpOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhcGlQYXJhbXM6IElBcGlQYXJhbXM7XG4gICAgcHJpdmF0ZSB0b2tlbjogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBzdWNjZXNzQ2FsbGJhY2s6IElBcGlTdWNjZXNzRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBlcnJvckNhbGxiYWNrOiBJQXBpRXJyb3JGdW5jdGlvbjtcbiAgICBwcml2YXRlIG1ldGFDYWxsYmFjazogSUFwaU1ldGFGdW5jdGlvbjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzZXJ2ZXJBZGRyZXNzPzpzdHJpbmcpIHtcbiAgICAgICAgaWYoc2VydmVyQWRkcmVzcyl7XG4gICAgICAgICAgICB0aGlzLnNlcnZlckFkZHJlc3MgPSBzZXJ2ZXJBZGRyZXNzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRva2VuKHRva2VuOnN0cmluZykge1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfVxuXG4gICAgcHVibGljIGdldChuYW1lOiBzdHJpbmcsIHBhcmFtczogSUFwaVBhcmFtcywgc3VjY2Vzc0NiPzogSUFwaVN1Y2Nlc3NGdW5jdGlvbiwgZXJyb3JDYj86IElBcGlFcnJvckZ1bmN0aW9uKXtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnZ2V0JztcbiAgICAgICAgdGhpcy5hcGkgPSBuYW1lO1xuICAgICAgICB0aGlzLmFwaVBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgdGhpcy5zdWNjZXNzQ2FsbGJhY2sgPSBzdWNjZXNzQ2I7XG4gICAgICAgIHRoaXMuZXJyb3JDYWxsYmFjayA9IGVycm9yQ2I7XG4gICAgICAgIHRoaXMuc2VuZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3N0KG5hbWU6IHN0cmluZywgcGFyYW1zOiBJQXBpUGFyYW1zLCBzdWNjZXNzQ2I/OiBJQXBpU3VjY2Vzc0Z1bmN0aW9uLCBlcnJvckNiPzogSUFwaUVycm9yRnVuY3Rpb24pe1xuICAgICAgICB0aGlzLmFjdGlvbiA9ICdwb3N0JztcbiAgICAgICAgdGhpcy5hcGkgPSBuYW1lO1xuICAgICAgICB0aGlzLmFwaVBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgdGhpcy5zdWNjZXNzQ2FsbGJhY2sgPSBzdWNjZXNzQ2I7XG4gICAgICAgIHRoaXMuZXJyb3JDYWxsYmFjayA9IGVycm9yQ2I7XG4gICAgICAgIHRoaXMuc2VuZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVhbFdpdGhNZXRhKG1ldGE6IE9iamVjdCkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kKCkge1xuICAgICAgICAvLyDlj4LmlbDmo4Dmn6VcbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbikgdGhyb3cgbmV3IEVycm9yKCdBcGkgYWN0aW9uIGlzIG5vdCBnaXZlbiEnKTtcbiAgICAgICAgaWYgKCF0aGlzLmFwaSkgdGhyb3cgbmV3IEVycm9yKCdBcGkgbmFtZSBpcyBub3QgZ2l2ZW4hJyk7XG4gICAgICAgIGxldCBhY3Rpb24gPSB0aGlzLmFjdGlvbjtcbiAgICAgICAgbGV0IGFwaSA9IHRoaXMuYXBpO1xuICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5hcGlQYXJhbXMgfHwge307XG4gICAgICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW47XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnNlcnZlckFkZHJlc3MgKyBhcGk7XG4gICAgICAgIGlmICh0b2tlbiAmJiAhcGFyYW1zLmhhc093blByb3BlcnR5KCd0b2tlbicpKSB7XG4gICAgICAgICAgICAvLyBwYXJhbXNbXCJfdG9rZW5cIl0gPSB0b2tlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWIneWni+WMllhNTEh0dHBSZXF1ZXN0XG4gICAgICAgIGxldCB4bWxIdHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGxldCBhcHBlbmQgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXBwZW5kICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmQgKz0gJyYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgcGFyYW0gPSBwYXJhbXNba2V5XTtcbiAgICAgICAgICAgICAgICBwYXJhbSA9IHR5cGVvZiBwYXJhbSA9PT0gXCJvYmplY3RcIiA/IEpTT04uc3RyaW5naWZ5KHBhcmFtKSA6IHBhcmFtO1xuICAgICAgICAgICAgICAgIC8vIFVSTOWPkemAgeaVsOaNruaXtu+8jCvlj7flkowm5Y+35Lya5Lii5aSx77yM5Zug5q2k5bqU5Zyo5Y+R6YCB5YmN6L2s5o2iXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbSA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnJTJCJyk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtID0gcGFyYW0ucmVwbGFjZSgvJi9nLCAnJTI2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtID0gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXBwZW5kICs9IGtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3Bvc3QnKSB7XG4gICAgICAgICAgICB4bWxIdHRwLm9wZW4oYWN0aW9uLCB1cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFwcGVuZCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICB4bWxIdHRwLm9wZW4oYWN0aW9uLCB1cmwgKyAnPycgKyBhcHBlbmQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4bWxIdHRwLm9wZW4oYWN0aW9uLCB1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHhtbEh0dHAuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcbiAgICAgICAgeG1sSHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoeG1sSHR0cC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHhtbEh0dHAuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ckRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vIOiLpeaciei/lOWbnue7k+aenFxuICAgICAgICAgICAgICAgICAgICBpZiAoeG1sSHR0cC5yZXNwb25zZVRleHQubGVuZ3RoID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyRGF0YSA9IEpTT04ucGFyc2UoeG1sSHR0cC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZygnUmVzcG9uc2UgZGF0YSBpcyBub3QgaW4gSlNPTiBmb3JtYXQhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGVscGVyLmxvZyh4bWxIdHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDoi6XmiJDlip/op6PmnpDov5Tlm57nmoTmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGF0YTogYXBp6L+U5Zue5pWw5o2u55qE5Li76KaB5YaF5a65XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWV0YTogYXBp6L+U5Zue55qE5YWD5pWw5o2u77yM5q+U5aaC5ri45oiP54q25oCB5pS55Y+Y77yM5YiG6aG15L+h5oGv562J562JXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3I6IGFwaei/lOWbnueahOmUmeivr+S/oeaBr1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhLCBtZXRhLCBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RyRGF0YS5oYXNPd25Qcm9wZXJ0eSgnbWV0YScpICYmIHN0ckRhdGFbJ21ldGEnXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhID0gc3RyRGF0YVsnbWV0YSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWxXaXRoTWV0YShtZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ckRhdGEuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSAmJiBzdHJEYXRhWydkYXRhJ10gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NDYWxsYmFjayhzdHJEYXRhWydkYXRhJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJEYXRhLmhhc093blByb3BlcnR5KCdlcnJvcicpICYmIHN0ckRhdGFbJ2Vycm9yJ10gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBzdHJEYXRhWydlcnJvciddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvckNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKCdVbmhhbmRsZWQgQXBpIEVycm9yIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ1NlcnZlciBFcnJvciEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZygnQ2FuXFwndCBnZXQgdGhlIHJlc3BvbnNlIGRhdGEuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvckNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+WFtuWug2h0dHDnirbmgIHnoIHlpITnkIZcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKHhtbEh0dHAucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgeyAvL+WFtuWug3JlcXVlc3TnirbmgIHlpITnkIZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3Bvc3QnKSB7XG4gICAgICAgICAgICB4bWxIdHRwLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgICAgIHhtbEh0dHAuc2VuZChhcHBlbmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeG1sSHR0cC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/utils/NextWebSocket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5d72V2gv9Ou4rL3jzB/7/k', 'NextWebSocket');
// src/utils/NextWebSocket.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextWebSocket = void 0;
var NextWebSocket = /** @class */ (function () {
    function NextWebSocket() {
        this.eventTarget = null;
        this.ws = null;
        this.eventTarget = new cc.EventTarget();
    }
    NextWebSocket.prototype.isOpen = function () {
        return this.ws && this.ws.readyState === WebSocket.OPEN;
    };
    NextWebSocket.prototype.connect = function (serverAddress, token) {
        var _this = this;
        var addr = serverAddress + (token ? "?token=" + token : "");
        this.ws = new WebSocket(addr);
        this.ws.onopen = function (event) {
            cc.log("连接成功");
            _this.eventTarget.emit("ws_open");
        };
        this.ws.onmessage = function (event) {
            // try {
            var data = JSON.parse(event.data);
            cc.log("获取消息");
            cc.log(data);
            if (data.name && data.value) {
                _this.eventTarget.emit(data.name, data.value);
            }
            // } catch{
            //     cc.error("接受消息错误");
            //     cc.error(event.data);
            // }
        };
        this.ws.onclose = function (event) {
            _this.eventTarget.emit("ws_close");
        };
    };
    NextWebSocket.prototype.emit = function (name, value) {
        var data = {
            name: name,
            value: value
        };
        var jsonStr = JSON.stringify(data);
        this.ws.send(jsonStr);
    };
    NextWebSocket.prototype.on = function (name, cb, target) {
        this.eventTarget.on(name, function (event) {
            cb.apply(target, [event.detail]);
        }, target);
    };
    NextWebSocket.prototype.once = function (name, cb, target) {
        this.eventTarget.once(name, function (event) {
            cb.apply(target, event.detail);
        }, target);
    };
    NextWebSocket.prototype.offTarget = function (target) {
        this.eventTarget.targetOff(target);
    };
    return NextWebSocket;
}());
exports.NextWebSocket = NextWebSocket;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx1dGlsc1xcTmV4dFdlYlNvY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUdJO1FBRlEsZ0JBQVcsR0FBbUIsSUFBSSxDQUFDO1FBQ25DLE9BQUUsR0FBYyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFBO0lBQzNELENBQUM7SUFFTSwrQkFBTyxHQUFkLFVBQWUsYUFBcUIsRUFBRSxLQUFjO1FBQXBELGlCQXVCQztRQXRCRyxJQUFJLElBQUksR0FBRyxhQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVUsS0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLFVBQUEsS0FBSztZQUNsQixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2YsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsVUFBQSxLQUFLO1lBQ3JCLFFBQVE7WUFDSixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2YsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNiLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUN6QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoRDtZQUNMLFdBQVc7WUFDWCwwQkFBMEI7WUFDMUIsNEJBQTRCO1lBQzVCLElBQUk7UUFDUixDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFBLEtBQUs7WUFDbkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVNLDRCQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsS0FBVztRQUNqQyxJQUFJLElBQUksR0FBRztZQUNQLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDO1FBQ0YsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sMEJBQUUsR0FBVCxVQUFVLElBQVksRUFBRSxFQUFZLEVBQUUsTUFBWTtRQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsVUFBQyxLQUFLO1lBQzVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVNLDRCQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsRUFBWSxFQUFFLE1BQVk7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUMsS0FBSztZQUM5QixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVNLGlDQUFTLEdBQWhCLFVBQWlCLE1BQU07UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0E1REEsQUE0REMsSUFBQTtBQTVEWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOZXh0V2ViU29ja2V0IHtcbiAgICBwcml2YXRlIGV2ZW50VGFyZ2V0OiBjYy5FdmVudFRhcmdldCA9IG51bGw7XG4gICAgcHJpdmF0ZSB3czogV2ViU29ja2V0ID0gbnVsbDtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRUYXJnZXQgPSBuZXcgY2MuRXZlbnRUYXJnZXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53cyAmJiB0aGlzLndzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOXG4gICAgfVxuXG4gICAgcHVibGljIGNvbm5lY3Qoc2VydmVyQWRkcmVzczogc3RyaW5nLCB0b2tlbj86IHN0cmluZykge1xuICAgICAgICBsZXQgYWRkciA9IHNlcnZlckFkZHJlc3MgKyAodG9rZW4gPyBgP3Rva2VuPSR7dG9rZW59YCA6IFwiXCIpO1xuICAgICAgICB0aGlzLndzID0gbmV3IFdlYlNvY2tldChhZGRyKTtcbiAgICAgICAgdGhpcy53cy5vbm9wZW4gPSBldmVudCA9PiB7XG4gICAgICAgICAgICBjYy5sb2coXCLov57mjqXmiJDlip9cIik7XG4gICAgICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0LmVtaXQoXCJ3c19vcGVuXCIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLndzLm9ubWVzc2FnZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuiOt+WPlua2iOaBr1wiKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubmFtZSAmJiBkYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRUYXJnZXQuZW1pdChkYXRhLm5hbWUsIGRhdGEudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIH0gY2F0Y2h7XG4gICAgICAgICAgICAvLyAgICAgY2MuZXJyb3IoXCLmjqXlj5fmtojmga/plJnor69cIik7XG4gICAgICAgICAgICAvLyAgICAgY2MuZXJyb3IoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMud3Mub25jbG9zZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUYXJnZXQuZW1pdChcIndzX2Nsb3NlXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBlbWl0KG5hbWU6IHN0cmluZywgdmFsdWU/OiBhbnkpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIGxldCBqc29uU3RyID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIHRoaXMud3Muc2VuZChqc29uU3RyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb24obmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIHRhcmdldD86IGFueSkge1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0Lm9uKG5hbWUsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY2IuYXBwbHkodGFyZ2V0LCBbZXZlbnQuZGV0YWlsXSk7XG4gICAgICAgIH0sIHRhcmdldCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uY2UobmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIHRhcmdldD86IGFueSkge1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0Lm9uY2UobmFtZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjYi5hcHBseSh0YXJnZXQsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sIHRhcmdldCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9mZlRhcmdldCh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldC50YXJnZXRPZmYodGFyZ2V0KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/message/MessagePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'add02hsK19MOYvz4GmEamgf', 'MessagePanel');
// src/scenes/room/message/MessagePanel.ts

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
exports.MessagePanel = void 0;
var G_1 = require("../../../G");
var BulletMessage_1 = require("./BulletMessage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MessagePanel = /** @class */ (function (_super) {
    __extends(MessagePanel, _super);
    function MessagePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.messageLabel = null;
        _this.sendButton = null;
        _this.inputBox = null;
        _this.switchButton = null;
        _this.content = null;
        _this.bulletContainer = null;
        _this.bulletMessagePrefab = null;
        _this.isOpen = false;
        return _this;
    }
    MessagePanel.prototype.onLoad = function () {
        this.addListeners();
    };
    MessagePanel.prototype.show = function () {
        this.switchButton.node.active = true;
    };
    MessagePanel.prototype.hide = function () {
        this.switchButton.node.active = false;
        this.close();
    };
    MessagePanel.prototype.switch = function () {
        this.isOpen ? this.close() : this.open();
    };
    MessagePanel.prototype.open = function () {
        this.switchButton.getComponent(cc.Animation).play("message_open");
        this.isOpen = true;
    };
    MessagePanel.prototype.close = function () {
        this.switchButton.getComponent(cc.Animation).play("message_close");
        this.isOpen = false;
    };
    MessagePanel.prototype.onBtnSend = function () {
        if (G_1.G.ws.isOpen) {
            var inputStr = this.inputBox.string;
            G_1.G.ws.emit("message", inputStr);
            this.inputBox.string = "";
        }
        else {
            this.pushMessage("ws没有连接...");
        }
    };
    MessagePanel.prototype.onWsMessage = function (data) {
        this.pushMessage(data);
    };
    MessagePanel.prototype.pushMessage = function (newMessage) {
        this.messageLabel.string += '\n' + newMessage;
        this.pushBulletMessage(newMessage);
    };
    MessagePanel.prototype.pushBulletMessage = function (message) {
        var bulletNode = cc.instantiate(this.bulletMessagePrefab);
        var bulletMessage = bulletNode.getComponent(BulletMessage_1.BulletMessage);
        bulletMessage.show(message);
        this.bulletContainer.addChild(bulletNode);
        var h = this.bulletContainer.height * Math.random();
        bulletNode.x = cc.director.getWinSize().width / 2 + 200;
        bulletNode.y = -this.bulletContainer.height / 2 + h;
        bulletNode.runAction(cc.moveTo(6, cc.p(-cc.director.getWinSize().width, bulletNode.y)));
    };
    MessagePanel.prototype.addListeners = function () {
        G_1.G.ws.on("message", this.onWsMessage, this);
    };
    __decorate([
        property(cc.Label)
    ], MessagePanel.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Button)
    ], MessagePanel.prototype, "sendButton", void 0);
    __decorate([
        property(cc.EditBox)
    ], MessagePanel.prototype, "inputBox", void 0);
    __decorate([
        property(cc.Button)
    ], MessagePanel.prototype, "switchButton", void 0);
    __decorate([
        property(cc.Node)
    ], MessagePanel.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], MessagePanel.prototype, "bulletContainer", void 0);
    __decorate([
        property(cc.Prefab)
    ], MessagePanel.prototype, "bulletMessagePrefab", void 0);
    MessagePanel = __decorate([
        ccclass
    ], MessagePanel);
    return MessagePanel;
}(cc.Component));
exports.MessagePanel = MessagePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXG1lc3NhZ2VcXE1lc3NhZ2VQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQStCO0FBQy9CLGlEQUFnRDtBQUUxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyxnQ0FBWTtJQUE5QztRQUFBLHFFQStFQztRQTdFVyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBRXRDLFlBQU0sR0FBRyxLQUFLLENBQUM7O0lBK0QzQixDQUFDO0lBN0RhLDZCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSwyQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN6QyxDQUFDO0lBRU0sMkJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSw2QkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVNLDJCQUFJLEdBQVg7UUFDSSxJQUFJLENB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QyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNzQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUMwQjtJQWRyQyxZQUFZO1FBRHhCLE9BQU87T0FDSyxZQUFZLENBK0V4QjtJQUFELG1CQUFDO0NBL0VELEFBK0VDLENBL0VpQyxFQUFFLENBQUMsU0FBUyxHQStFN0M7QUEvRVksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHIH0gZnJvbSBcIi4uLy4uLy4uL0dcIjtcbmltcG9ydCB7IEJ1bGxldE1lc3NhZ2UgfSBmcm9tIFwiLi9CdWxsZXRNZXNzYWdlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgTWVzc2FnZVBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBtZXNzYWdlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgc2VuZEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIGlucHV0Qm94OiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgc3dpdGNoQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBidWxsZXRDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBidWxsZXRNZXNzYWdlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBpc09wZW4gPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hCdXR0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzd2l0Y2goKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuP3RoaXMuY2xvc2UoKTp0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQnV0dG9uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtZXNzYWdlX29wZW5cIik7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQnV0dG9uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtZXNzYWdlX2Nsb3NlXCIpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG5TZW5kKCkge1xuICAgICAgICBpZiAoRy53cy5pc09wZW4pIHtcbiAgICAgICAgICAgIGxldCBpbnB1dFN0ciA9IHRoaXMuaW5wdXRCb3guc3RyaW5nO1xuICAgICAgICAgICAgRy53cy5lbWl0KFwibWVzc2FnZVwiLCBpbnB1dFN0cik7XG4gICAgICAgICAgICB0aGlzLmlucHV0Qm94LnN0cmluZyA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKFwid3PmsqHmnInov57mjqUuLi5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uV3NNZXNzYWdlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5wdXNoTWVzc2FnZShkYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHVzaE1lc3NhZ2UobmV3TWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUxhYmVsLnN0cmluZyArPSAnXFxuJyArIG5ld01lc3NhZ2U7XG4gICAgICAgIHRoaXMucHVzaEJ1bGxldE1lc3NhZ2UobmV3TWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHB1c2hCdWxsZXRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBsZXQgYnVsbGV0Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0TWVzc2FnZVByZWZhYik7XG4gICAgICAgIGxldCBidWxsZXRNZXNzYWdlOiBCdWxsZXRNZXNzYWdlID0gYnVsbGV0Tm9kZS5nZXRDb21wb25lbnQoQnVsbGV0TWVzc2FnZSk7XG4gICAgICAgIGJ1bGxldE1lc3NhZ2Uuc2hvdyhtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5idWxsZXRDb250YWluZXIuYWRkQ2hpbGQoYnVsbGV0Tm9kZSk7XG4gICAgICAgIGxldCBoID0gdGhpcy5idWxsZXRDb250YWluZXIuaGVpZ2h0Kk1hdGgucmFuZG9tKCk7XG4gICAgICAgIGJ1bGxldE5vZGUueCA9IGNjLmRpcmVjdG9yLmdldFdpblNpemUoKS53aWR0aC8yICsgMjAwO1xuICAgICAgICBidWxsZXROb2RlLnkgPSAtdGhpcy5idWxsZXRDb250YWluZXIuaGVpZ2h0LzIraDtcbiAgICAgICAgYnVsbGV0Tm9kZS5ydW5BY3Rpb24oY2MubW92ZVRvKDYsY2MucCgtY2MuZGlyZWN0b3IuZ2V0V2luU2l6ZSgpLndpZHRoLGJ1bGxldE5vZGUueSkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgRy53cy5vbihcIm1lc3NhZ2VcIiwgdGhpcy5vbldzTWVzc2FnZSwgdGhpcyk7XG4gICAgfVxuXG59Il19
//------QC-SOURCE-SPLIT------
