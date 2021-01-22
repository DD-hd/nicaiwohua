
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