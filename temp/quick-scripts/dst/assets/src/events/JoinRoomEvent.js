
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/events/JoinRoomEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ee35ArJPtF6KpDiHW4Botq', 'JoinRoomEvent');
// src/events/JoinRoomEvent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinRoomEvent = void 0;
var JoinRoomEvent = /** @class */ (function (_super) {
    __extends(JoinRoomEvent, _super);
    function JoinRoomEvent(roomNum) {
        var _this = _super.call(this, JoinRoomEvent.NAME, true) || this;
        _this.roomNum = roomNum;
        return _this;
    }
    JoinRoomEvent.NAME = "JoinRoom";
    return JoinRoomEvent;
}(cc.Event.EventCustom));
exports.JoinRoomEvent = JoinRoomEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxldmVudHNcXEpvaW5Sb29tRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQW1DLGlDQUFvQjtJQUluRCx1QkFBbUIsT0FBYztRQUFqQyxZQUNJLGtCQUFNLGFBQWEsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBRWpDO1FBREcsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQzNCLENBQUM7SUFOc0Isa0JBQUksR0FBRyxVQUFVLENBQUM7SUFRN0Msb0JBQUM7Q0FURCxBQVNDLENBVGtDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQVN0RDtBQVRZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEpvaW5Sb29tRXZlbnQgZXh0ZW5kcyBjYy5FdmVudC5FdmVudEN1c3RvbSB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOQU1FID0gXCJKb2luUm9vbVwiO1xuICAgIHB1YmxpYyByb29tTnVtOm51bWJlcjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihyb29tTnVtOm51bWJlcikge1xuICAgICAgICBzdXBlcihKb2luUm9vbUV2ZW50Lk5BTUUsdHJ1ZSk7XG4gICAgICAgIHRoaXMucm9vbU51bSA9IHJvb21OdW07XG4gICAgfVxuICAgIFxufSJdfQ==