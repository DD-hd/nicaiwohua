
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXFJvb21TY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBNEI7QUFDNUIsb0NBQW1DO0FBQ25DLGdEQUErQztBQUMvQywwQ0FBeUM7QUFDekMsdURBQXNEO0FBQ3RELHVEQUFzRDtBQUN0RCw4Q0FBNkM7QUFDN0MsOERBQTZEO0FBQzdELDhDQUE2QztBQUV2QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTJMQztRQXhMVyxZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFVBQUksR0FBUyxJQUFJLENBQUM7UUFFbEIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFFcEIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBRWxDLGVBQVMsR0FBYyxJQUFJLENBQUM7O0lBd0t4QyxDQUFDO0lBcEtHLHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxxQkFBUyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFeEIsQ0FBQztJQUVELFNBQVM7SUFDVCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEMsS0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNkLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxJQUFJO2FBQ2IsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQVksSUFBSTtRQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0JBQU0sSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQ0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0JBQU0sSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCw0QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUM7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQzthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCw4QkFBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsS0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLEtBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2lCQUNoQztnQkFDRCxJQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDNUM7YUFDSjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsVUFBVSxDQUFDO1lBQ1AsS0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRCw0QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxvQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBcUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLEtBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBcUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLEtBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBcUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixLQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxJQUFJLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0QsZ0NBQVksR0FBWjtRQUFBLGlCQW9CQztRQW5CRyw4Q0FBOEM7UUFDOUMsNENBQTRDO1FBQzVDLEtBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JDLDBDQUEwQztRQUMxQyxLQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxLQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxLQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxLQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxLQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyx3Q0FBd0M7UUFDeEMsMENBQTBDO1FBQzFDLDBDQUEwQztRQUMxQyxLQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxLQUFDLENBQUMsRUFBRSxDQUFDLCtCQUFjLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxLQUFDLENBQUMsRUFBRSxDQUFDLCtCQUFjLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxLQUFDLENBQUMsRUFBRSxDQUFDLCtCQUFjLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUMxQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELG1DQUFlLEdBQWY7UUFDSSxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLEtBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLEtBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQXRMRDtRQURDLFFBQVEsQ0FBQyxlQUFNLENBQUM7NkNBQ2E7SUFFOUI7UUFEQyxRQUFRLENBQUMsMkJBQVksQ0FBQzttREFDbUI7SUFFMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxXQUFJLENBQUM7MkNBQ1c7SUFFMUI7UUFEQyxRQUFRLENBQUMsMkJBQVksQ0FBQzttREFDSztJQUU1QjtRQURDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDO2dEQUNnQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDO2dEQUNnQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNzQjtJQWpCekIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTJMN0I7SUFBRCxnQkFBQztDQTNMRCxBQTJMQyxDQTNMc0MsRUFBRSxDQUFDLFNBQVMsR0EyTGxEO2tCQTNMb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEcgfSBmcm9tIFwiLi4vLi4vR1wiO1xuaW1wb3J0IHsgRGVzayB9IGZyb20gXCIuL2Rlc2svRGVza1wiO1xuaW1wb3J0IHsgU2tldGNocGFkIH0gZnJvbSBcIi4uL3NoYXJlL1NrZXRjaHBhZFwiO1xuaW1wb3J0IHsgVG9wQmFyIH0gZnJvbSBcIi4vdG9wYmFyL1RvcEJhclwiO1xuaW1wb3J0IHsgUHJlcGFyZVBhbmVsIH0gZnJvbSBcIi4vcHJlcGFyZS9QcmVwYXJlUGFuZWxcIjtcbmltcG9ydCB7IE1lc3NhZ2VQYW5lbCB9IGZyb20gXCIuL21lc3NhZ2UvTWVzc2FnZVBhbmVsXCI7XG5pbXBvcnQgeyBUb29sUGFuZWwgfSBmcm9tIFwiLi90b29sL1Rvb2xQYW5lbFwiO1xuaW1wb3J0IHsgU2tldGNocGFkRXZlbnQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzL1NrZXRjaHBhZEV2ZW50XCI7XG5pbXBvcnQgeyBPdmVyUGFuZWwgfSBmcm9tIFwiLi9vdmVyL092ZXJQYW5lbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShUb3BCYXIpXG4gICAgcHJpdmF0ZSB0b3BCYXI6IFRvcEJhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KFByZXBhcmVQYW5lbClcbiAgICBwcml2YXRlIHByZXBhcmVQYW5lbDogUHJlcGFyZVBhbmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGJvYXJkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoRGVzaylcbiAgICBwcml2YXRlIGRlc2s6IERlc2sgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShNZXNzYWdlUGFuZWwpXG4gICAgcHJpdmF0ZSBtZXNzYWdlUGFuZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShUb29sUGFuZWwpXG4gICAgcHJpdmF0ZSB0b29sUGFuZWw6IFRvb2xQYW5lbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KE92ZXJQYW5lbClcbiAgICBwcml2YXRlIG92ZXJQYW5lbDogT3ZlclBhbmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgc2tldGNocGFkUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBza2V0Y2hwYWQ6IFNrZXRjaHBhZCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGludGVydmFsSWQ6IG51bWJlcjtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnRvcEJhci5zaG93TWVzc2FnZShcIuaIv+mXtOWPt++8mlwiICsgRy5yb29tLmdldFJpZCgpKTtcbiAgICAgICAgbGV0IHNrZXRjaHBhZE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNrZXRjaHBhZFByZWZhYik7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkQ2hpbGQoc2tldGNocGFkTm9kZSk7XG4gICAgICAgIHRoaXMuc2tldGNocGFkID0gc2tldGNocGFkTm9kZS5nZXRDb21wb25lbnQoU2tldGNocGFkKTtcbiAgICAgICAgdGhpcy5wcmVwYXJlUGFuZWwuc2hvdygpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VQYW5lbC5zaG93KCk7XG4gICAgICAgIHRoaXMudG9vbFBhbmVsLmhpZGUoKTtcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuaGlkZSgpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuXG4gICAgfVxuXG4gICAgLy8g5ZCM5q2l57uY55S75L+h5oGvXG4gICAgc3luY1BhdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLnNrZXRjaHBhZC5pc0RyYXdpbmcgJiYgdGhpcy5za2V0Y2hwYWQucGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgcGF0aCA9IHRoaXMuc2tldGNocGFkLnBvcFBhdGgoKTtcbiAgICAgICAgICAgIEcud3MuZW1pdChcImRyYXdcIiwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwicGF0aFwiLFxuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uR2FtZVN0YXJ0KCkge1xuICAgICAgICB0aGlzLmRlc2suc2hvdygpO1xuICAgICAgICB0aGlzLmRlc2sudXBkYXRlU2VhdHNJbmZvKEcucm9vbS5nZXRTZWF0TWFwKCkpO1xuICAgIH1cblxuICAgIG9uV3NTdGFydE1lKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuZ2FtZU51bSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5vbkdhbWVTdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2tldGNocGFkLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZGVzay5oaWRlQW5zd2VyQnV0dG9uKCk7XG4gICAgICAgIHRoaXMudG9wQmFyLnNob3dNZXNzYWdlKGDkvaDnlLs6JHtkYXRhLndvcmR9YCk7XG4gICAgICAgIHRoaXMudG9wQmFyLnNob3dUaWNrZXIoRy5yb29tLmdldEdhbWVUaW1lKCkpO1xuICAgICAgICB0aGlzLnNrZXRjaHBhZC5lbmFibGVEcmF3KCk7XG4gICAgICAgIHRoaXMudG9vbFBhbmVsLnNob3coKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlUGFuZWwuaGlkZSgpO1xuICAgICAgICB0aGlzLmRlc2suaGlkZUFsbFRpcCgpO1xuICAgIH1cblxuICAgIG9uV3NTdGFydE90aGVyKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuZ2FtZU51bSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5vbkdhbWVTdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2tldGNocGFkLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZGVzay5zaG93QW5zd2VyQnV0dG9uKCk7XG4gICAgICAgIHRoaXMudG9wQmFyLnNob3dNZXNzYWdlKGDmj5DnpLo6JHtkYXRhLmhpbnR9YCk7XG4gICAgICAgIHRoaXMudG9wQmFyLnNob3dUaWNrZXIoRy5yb29tLmdldEdhbWVUaW1lKCkpO1xuICAgICAgICB0aGlzLnNrZXRjaHBhZC5kaXNhYmxlRHJhdygpO1xuICAgICAgICB0aGlzLnRvb2xQYW5lbC5oaWRlKCk7XG4gICAgICAgIHRoaXMubWVzc2FnZVBhbmVsLnNob3coKTtcbiAgICAgICAgdGhpcy5kZXNrLmhpZGVBbGxUaXAoKTtcbiAgICB9XG5cbiAgICBvbldzRHJhdyhkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09IFwicGF0aFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNrZXRjaHBhZC5kcmF3QnlQYXRoKGRhdGEucGF0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSBcImNvbG9yXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2tldGNocGFkLnNldFBlbkNvbG9yKGRhdGEuY29sb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gXCJ3aWR0aFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNrZXRjaHBhZC5zZXRMaW5lV2lkdGgoZGF0YS53aWR0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSBcImNsZWFyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2tldGNocGFkLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbldzQW5zd2VyKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuaXNSaWdodCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhLnNjb3Jlcykge1xuICAgICAgICAgICAgICAgIEcucm9vbS5zZXRTY29yZUJ5U2VhdCgraSwgZGF0YS5zY29yZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChHLnJvb20uZ2V0VWlkQnlTZWF0KCtpKSA9PT0gRy51c2VyLmdldFVpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzay5oaWRlQW5zd2VyQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCtpICE9PSBHLnJvb20uZ2V0UGFpbnRTZWF0KCkgKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrLmFuc3dlclJpZ2h0KCtpLGRhdGEuc2NvcmVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRlc2sudXBkYXRlU2VhdHNJbmZvKEcucm9vbS5nZXRTZWF0TWFwKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXNrLmFuc3dlcldyb25nKGRhdGEuc2VhdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbldzUmVzdWx0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5kZXNrLmhpZGVBbnN3ZXJCdXR0b24oKTtcbiAgICAgICAgdGhpcy50b3BCYXIuc2hvd01lc3NhZ2UoXCLnrZTmoYg6XCIgKyBkYXRhKTtcbiAgICAgICAgdGhpcy50b3BCYXIuc2hvd1RpY2tlcihHLnJvb20uZ2V0UmVzdWx0VGltZSgpKTtcbiAgICAgICAgdGhpcy5za2V0Y2hwYWQuZGlzYWJsZURyYXcoKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlUGFuZWwuc2hvdygpO1xuICAgICAgICB0aGlzLnRvb2xQYW5lbC5oaWRlKCk7XG4gICAgfVxuXG4gICAgb25Xc092ZXIoZGF0YSkge1xuICAgICAgICB0aGlzLmRlc2suaGlkZUFuc3dlckJ1dHRvbigpO1xuICAgICAgICB0aGlzLm92ZXJQYW5lbC5zaG93KCk7XG4gICAgICAgIHRoaXMudG9wQmFyLnNob3dNZXNzYWdlKFwi5ri45oiP57uT5p2f77yM6LW257Sn6LWw5ZCnXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIEcub25FeGl0Um9vbSgpO1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgfVxuXG4gICAgb25Xc0V4aXQoZGF0YSkge1xuICAgICAgICB0aGlzLmRlc2subGVhdmVVc2VyKGRhdGEpO1xuICAgIH1cblxuICAgIG9uU2tldGNocGFkQ29sb3IoZXZlbnQ6IFNrZXRjaHBhZEV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2tldGNocGFkLnNldFBlbkNvbG9yKGV2ZW50LmhleENvbG9yKTtcbiAgICAgICAgRy53cy5lbWl0KFwiZHJhd1wiLCB7XG4gICAgICAgICAgICB0eXBlOiBcImNvbG9yXCIsXG4gICAgICAgICAgICBjb2xvcjogZXZlbnQuaGV4Q29sb3IsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU2tldGNocGFkV2lkdGgoZXZlbnQ6IFNrZXRjaHBhZEV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2tldGNocGFkLnNldExpbmVXaWR0aChldmVudC53aWR0aCk7XG4gICAgICAgIEcud3MuZW1pdChcImRyYXdcIiwge1xuICAgICAgICAgICAgdHlwZTogXCJ3aWR0aFwiLFxuICAgICAgICAgICAgd2lkdGg6IGV2ZW50LndpZHRoLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblNrZXRjaHBhZENsZWFyKGV2ZW50OiBTa2V0Y2hwYWRFdmVudCkge1xuICAgICAgICB0aGlzLnNrZXRjaHBhZC5jbGVhcigpO1xuICAgICAgICBHLndzLmVtaXQoXCJkcmF3XCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwiY2xlYXJcIixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIC8vIEcud3Mub24oXCJtZXNzYWdlXCIsIHRoaXMub25Xc01lc3NhZ2UsIHRoaXMpO1xuICAgICAgICAvLyBHLndzLm9uKFwicm9vbVwiLCB0aGlzLm9uV3NSb29tSW5mbywgdGhpcyk7XG4gICAgICAgIEcud3Mub24oXCJkcmF3XCIsIHRoaXMub25Xc0RyYXcsIHRoaXMpO1xuICAgICAgICAvLyBHLndzLm9uKFwicmVhZHlcIiwgdGhpcy5vbldzUmVhZHksIHRoaXMpO1xuICAgICAgICBHLndzLm9uKFwic3RhcnRNZVwiLCB0aGlzLm9uV3NTdGFydE1lLCB0aGlzKTtcbiAgICAgICAgRy53cy5vbihcInN0YXJ0T3RoZXJcIiwgdGhpcy5vbldzU3RhcnRPdGhlciwgdGhpcyk7XG4gICAgICAgIEcud3Mub24oXCJhbnN3ZXJcIiwgdGhpcy5vbldzQW5zd2VyLCB0aGlzKTtcbiAgICAgICAgRy53cy5vbihcInJlc3VsdFwiLCB0aGlzLm9uV3NSZXN1bHQsIHRoaXMpO1xuICAgICAgICBHLndzLm9uKFwib3ZlclwiLCB0aGlzLm9uV3NPdmVyLCB0aGlzKTtcbiAgICAgICAgLy8gRy53cy5vbihcImhpbnRcIiwgdGhpcy5vbldzSGludCwgdGhpcyk7XG4gICAgICAgIC8vIEcud3Mub24oXCJ0aWNrXCIsIHRoaXMub25Xc1RpY2tlciwgdGhpcyk7XG4gICAgICAgIC8vIEcud3Mub24oXCJzY29yZVwiLCB0aGlzLm9uV3NTY29yZSwgdGhpcyk7XG4gICAgICAgIEcud3Mub24oXCJleGl0XCIsIHRoaXMub25Xc0V4aXQsIHRoaXMpO1xuICAgICAgICBHLm9uKFNrZXRjaHBhZEV2ZW50LkNPTE9SLCB0aGlzLm9uU2tldGNocGFkQ29sb3IsIHRoaXMpO1xuICAgICAgICBHLm9uKFNrZXRjaHBhZEV2ZW50LldJRFRILCB0aGlzLm9uU2tldGNocGFkV2lkdGgsIHRoaXMpO1xuICAgICAgICBHLm9uKFNrZXRjaHBhZEV2ZW50LkNMRUFSLCB0aGlzLm9uU2tldGNocGFkQ2xlYXIsIHRoaXMpO1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN5bmNQYXRoKCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgICAgIEcud3Mub2ZmVGFyZ2V0KHRoaXMpO1xuICAgICAgICBHLnRhcmdldE9mZih0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuXG59XG4iXX0=