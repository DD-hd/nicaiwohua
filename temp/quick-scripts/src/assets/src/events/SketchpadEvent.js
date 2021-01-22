"use strict";
cc._RF.push(module, 'dcf33WZYOREyZxnMdDnbJEL', 'SketchpadEvent');
// src/events/SketchpadEvent.ts

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
exports.SketchpadEvent = void 0;
var SketchpadEvent = /** @class */ (function (_super) {
    __extends(SketchpadEvent, _super);
    function SketchpadEvent(type) {
        return _super.call(this, type, true) || this;
    }
    SketchpadEvent.COLOR = "SketchpadColor";
    SketchpadEvent.WIDTH = "SketchpadWidth";
    SketchpadEvent.CLEAR = "SketchpadClear";
    return SketchpadEvent;
}(cc.Event.EventCustom));
exports.SketchpadEvent = SketchpadEvent;

cc._RF.pop();