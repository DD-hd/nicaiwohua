
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXG1lc3NhZ2VcXE1lc3NhZ2VQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQStCO0FBQy9CLGlEQUFnRDtBQUUxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyxnQ0FBWTtJQUE5QztRQUFBLHFFQStFQztRQTdFVyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBRXRDLFlBQU0sR0FBRyxLQUFLLENBQUM7O0lBK0QzQixDQUFDO0lBN0RhLDZCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSwyQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN6QyxDQUFDO0lBRU0sMkJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSw2QkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVNLDJCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSw0QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRU8sZ0NBQVMsR0FBakI7UUFDSSxJQUFJLEtBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEMsS0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUM3QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFFTyxrQ0FBVyxHQUFuQixVQUFvQixJQUFJO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLGtDQUFXLEdBQWxCLFVBQW1CLFVBQWtCO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLElBQUksR0FBRyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSx3Q0FBaUIsR0FBeEIsVUFBeUIsT0FBZTtRQUNwQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzFELElBQUksYUFBYSxHQUFrQixVQUFVLENBQUMsWUFBWSxDQUFDLDZCQUFhLENBQUMsQ0FBQztRQUMxRSxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsRCxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdEQsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDaEQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRU8sbUNBQVksR0FBcEI7UUFDSSxLQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBM0VEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ21CO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ2lCO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7a0RBQ2U7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDbUI7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNzQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUMwQjtJQWRyQyxZQUFZO1FBRHhCLE9BQU87T0FDSyxZQUFZLENBK0V4QjtJQUFELG1CQUFDO0NBL0VELEFBK0VDLENBL0VpQyxFQUFFLENBQUMsU0FBUyxHQStFN0M7QUEvRVksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHIH0gZnJvbSBcIi4uLy4uLy4uL0dcIjtcbmltcG9ydCB7IEJ1bGxldE1lc3NhZ2UgfSBmcm9tIFwiLi9CdWxsZXRNZXNzYWdlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgTWVzc2FnZVBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBtZXNzYWdlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgc2VuZEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIGlucHV0Qm94OiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgc3dpdGNoQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBidWxsZXRDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBidWxsZXRNZXNzYWdlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBpc09wZW4gPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hCdXR0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzd2l0Y2goKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuP3RoaXMuY2xvc2UoKTp0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQnV0dG9uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtZXNzYWdlX29wZW5cIik7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQnV0dG9uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtZXNzYWdlX2Nsb3NlXCIpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG5TZW5kKCkge1xuICAgICAgICBpZiAoRy53cy5pc09wZW4pIHtcbiAgICAgICAgICAgIGxldCBpbnB1dFN0ciA9IHRoaXMuaW5wdXRCb3guc3RyaW5nO1xuICAgICAgICAgICAgRy53cy5lbWl0KFwibWVzc2FnZVwiLCBpbnB1dFN0cik7XG4gICAgICAgICAgICB0aGlzLmlucHV0Qm94LnN0cmluZyA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hNZXNzYWdlKFwid3PmsqHmnInov57mjqUuLi5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uV3NNZXNzYWdlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5wdXNoTWVzc2FnZShkYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHVzaE1lc3NhZ2UobmV3TWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUxhYmVsLnN0cmluZyArPSAnXFxuJyArIG5ld01lc3NhZ2U7XG4gICAgICAgIHRoaXMucHVzaEJ1bGxldE1lc3NhZ2UobmV3TWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHB1c2hCdWxsZXRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBsZXQgYnVsbGV0Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0TWVzc2FnZVByZWZhYik7XG4gICAgICAgIGxldCBidWxsZXRNZXNzYWdlOiBCdWxsZXRNZXNzYWdlID0gYnVsbGV0Tm9kZS5nZXRDb21wb25lbnQoQnVsbGV0TWVzc2FnZSk7XG4gICAgICAgIGJ1bGxldE1lc3NhZ2Uuc2hvdyhtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5idWxsZXRDb250YWluZXIuYWRkQ2hpbGQoYnVsbGV0Tm9kZSk7XG4gICAgICAgIGxldCBoID0gdGhpcy5idWxsZXRDb250YWluZXIuaGVpZ2h0Kk1hdGgucmFuZG9tKCk7XG4gICAgICAgIGJ1bGxldE5vZGUueCA9IGNjLmRpcmVjdG9yLmdldFdpblNpemUoKS53aWR0aC8yICsgMjAwO1xuICAgICAgICBidWxsZXROb2RlLnkgPSAtdGhpcy5idWxsZXRDb250YWluZXIuaGVpZ2h0LzIraDtcbiAgICAgICAgYnVsbGV0Tm9kZS5ydW5BY3Rpb24oY2MubW92ZVRvKDYsY2MucCgtY2MuZGlyZWN0b3IuZ2V0V2luU2l6ZSgpLndpZHRoLGJ1bGxldE5vZGUueSkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgRy53cy5vbihcIm1lc3NhZ2VcIiwgdGhpcy5vbldzTWVzc2FnZSwgdGhpcyk7XG4gICAgfVxuXG59Il19