"use strict";
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