
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