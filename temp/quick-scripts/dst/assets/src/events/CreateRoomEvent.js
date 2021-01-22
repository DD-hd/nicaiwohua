
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/events/CreateRoomEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxldmVudHNcXENyZWF0ZVJvb21FdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBcUMsbUNBQW9CO0lBS3JELHlCQUFtQixPQUFjLEVBQUMsT0FBYztRQUFoRCxZQUNJLGtCQUFNLGVBQWUsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBR25DO1FBRkcsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQzNCLENBQUM7SUFSc0Isb0JBQUksR0FBRyxZQUFZLENBQUM7SUFVL0Msc0JBQUM7Q0FYRCxBQVdDLENBWG9DLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQVd4RDtBQVhZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENyZWF0ZVJvb21FdmVudCBleHRlbmRzIGNjLkV2ZW50LkV2ZW50Q3VzdG9tIHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5BTUUgPSBcIkNyZWF0ZVJvb21cIjtcbiAgICBwdWJsaWMgZ2FtZVN1bTogbnVtYmVyO1xuICAgIHB1YmxpYyBzZWF0U3VtOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2VhdFN1bTpudW1iZXIsZ2FtZVN1bTpudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoQ3JlYXRlUm9vbUV2ZW50Lk5BTUUsdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2VhdFN1bSA9IHNlYXRTdW07XG4gICAgICAgIHRoaXMuZ2FtZVN1bSA9IGdhbWVTdW07XG4gICAgfVxuICAgIFxufSJdfQ==