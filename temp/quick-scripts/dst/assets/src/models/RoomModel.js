
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