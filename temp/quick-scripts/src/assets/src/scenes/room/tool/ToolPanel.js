"use strict";
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