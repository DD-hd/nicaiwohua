
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/message/BulletMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6cf4ba1uexM+LxzOyDjW0cr', 'BulletMessage');
// src/scenes/room/message/BulletMessage.ts

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
exports.BulletMessage = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletMessage = /** @class */ (function (_super) {
    __extends(BulletMessage, _super);
    function BulletMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.messageBox = null;
        _this.messageLabel = null;
        return _this;
    }
    BulletMessage.prototype.show = function (message) {
        this.messageLabel.string = message;
    };
    __decorate([
        property(cc.Node)
    ], BulletMessage.prototype, "messageBox", void 0);
    __decorate([
        property(cc.Label)
    ], BulletMessage.prototype, "messageLabel", void 0);
    BulletMessage = __decorate([
        ccclass
    ], BulletMessage);
    return BulletMessage;
}(cc.Component));
exports.BulletMessage = BulletMessage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXG1lc3NhZ2VcXEJ1bGxldE1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLGlDQUFZO0lBQS9DO1FBQUEscUVBV0M7UUFSVyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixrQkFBWSxHQUFhLElBQUksQ0FBQzs7SUFNMUMsQ0FBQztJQUpVLDRCQUFJLEdBQVgsVUFBWSxPQUFjO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUN2QyxDQUFDO0lBTkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDbUI7SUFMN0IsYUFBYTtRQUR6QixPQUFPO09BQ0ssYUFBYSxDQVd6QjtJQUFELG9CQUFDO0NBWEQsQUFXQyxDQVhrQyxFQUFFLENBQUMsU0FBUyxHQVc5QztBQVhZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQnVsbGV0TWVzc2FnZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIG1lc3NhZ2VCb3g6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIG1lc3NhZ2VMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHVibGljIHNob3cobWVzc2FnZTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlTGFiZWwuc3RyaW5nID0gbWVzc2FnZTtcbiAgICB9XG5cbn1cbiJdfQ==