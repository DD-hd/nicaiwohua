"use strict";
cc._RF.push(module, '5be77u8OvxCTqCvtGNzJ4db', 'CreateRoomEvent');
// src/events/CreateRoomEvent.ts

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
exports.CreateRoomEvent = void 0;
var CreateRoomEvent = /** @class */ (function (_super) {
    __extends(CreateRoomEvent, _super);
    function CreateRoomEvent(seatSum, gameSum) {
        var _this = _super.call(this, CreateRoomEvent.NAME, true) || this;
        _this.seatSum = seatSum;
        _this.gameSum = gameSum;
        return _this;
    }
    CreateRoomEvent.NAME = "CreateRoom";
    return CreateRoomEvent;
}(cc.Event.EventCustom));
exports.CreateRoomEvent = CreateRoomEvent;

cc._RF.pop();