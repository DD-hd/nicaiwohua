
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