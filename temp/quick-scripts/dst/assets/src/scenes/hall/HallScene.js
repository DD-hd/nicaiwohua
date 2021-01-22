
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