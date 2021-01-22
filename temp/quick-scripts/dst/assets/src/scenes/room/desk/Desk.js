
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