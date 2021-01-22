
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/tool/ToolPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXHRvb2xcXFRvb2xQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQStCO0FBQy9CLGlFQUFnRTtBQUUxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQWdEQztRQTdDVyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQUcsS0FBSyxDQUFDOztJQTJDM0IsQ0FBQztJQXpDVSx3QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRU0seUJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLDBCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLE1BQWlCLEVBQUUsUUFBZ0I7UUFDbEQsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLEtBQUssR0FBRyxJQUFJLCtCQUFjLENBQUMsK0JBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN2QixLQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSwrQkFBYyxDQUFDLCtCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsS0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsTUFBaUIsRUFBRSxRQUFnQjtRQUNsRCxJQUFJLEtBQUssR0FBRyxJQUFJLCtCQUFjLENBQUMsK0JBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3hCLEtBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQTNDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNtQjtJQUg1QixTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBZ0RyQjtJQUFELGdCQUFDO0NBaERELEFBZ0RDLENBaEQ4QixFQUFFLENBQUMsU0FBUyxHQWdEMUM7QUFoRFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHIH0gZnJvbSBcIi4uLy4uLy4uL0dcIjtcbmltcG9ydCB7IFNrZXRjaHBhZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2V2ZW50cy9Ta2V0Y2hwYWRFdmVudFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFRvb2xQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHN3aXRjaEJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGlzT3BlbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIG9wZW4oKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQnV0dG9uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ0b29sX29wZW5cIik7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQnV0dG9uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJ0b29sX2Nsb3NlXCIpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzd2l0Y2goKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Db2xvclBpY2sodG9nZ2xlOiBjYy5Ub2dnbGUsIGNvbG9ySGV4OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gXCIjXCIgKyB0b2dnbGUubm9kZS5jb2xvci50b0hFWChcIiNycmdnYmJcIik7XG4gICAgICAgIGxldCBldmVudCA9IG5ldyBTa2V0Y2hwYWRFdmVudChTa2V0Y2hwYWRFdmVudC5DT0xPUik7XG4gICAgICAgIGV2ZW50LmhleENvbG9yID0gY29sb3I7XG4gICAgICAgIEcuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xlYXIoKSB7XG4gICAgICAgIGxldCBldmVudCA9IG5ldyBTa2V0Y2hwYWRFdmVudChTa2V0Y2hwYWRFdmVudC5DTEVBUik7XG4gICAgICAgIEcuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uV2lkdGhQaWNrKHRvZ2dsZTogY2MuVG9nZ2xlLCB3aWR0aFN0cjogc3RyaW5nKSB7XG4gICAgICAgIGxldCBldmVudCA9IG5ldyBTa2V0Y2hwYWRFdmVudChTa2V0Y2hwYWRFdmVudC5XSURUSCk7XG4gICAgICAgIGV2ZW50LndpZHRoID0gK3dpZHRoU3RyO1xuICAgICAgICBHLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxufSJdfQ==