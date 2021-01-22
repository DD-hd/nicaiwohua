"use strict";
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