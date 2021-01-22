
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/events/SketchpadEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxldmVudHNcXFNrZXRjaHBhZEV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFvQyxrQ0FBb0I7SUFRcEQsd0JBQW1CLElBQVc7ZUFDMUIsa0JBQU0sSUFBSSxFQUFFLElBQUksQ0FBQztJQUNyQixDQUFDO0lBUnNCLG9CQUFLLEdBQUcsZ0JBQWdCLENBQUM7SUFDekIsb0JBQUssR0FBRyxnQkFBZ0IsQ0FBQztJQUN6QixvQkFBSyxHQUFHLGdCQUFnQixDQUFDO0lBUXBELHFCQUFDO0NBWkQsQUFZQyxDQVptQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FZdkQ7QUFaWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTa2V0Y2hwYWRFdmVudCBleHRlbmRzIGNjLkV2ZW50LkV2ZW50Q3VzdG9tIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09MT1IgPSBcIlNrZXRjaHBhZENvbG9yXCI7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBXSURUSCA9IFwiU2tldGNocGFkV2lkdGhcIjtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENMRUFSID0gXCJTa2V0Y2hwYWRDbGVhclwiO1xuICAgIHB1YmxpYyBoZXhDb2xvcjpzdHJpbmc7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IodHlwZTpzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIodHlwZSwgdHJ1ZSk7XG4gICAgfVxuICAgIFxufSJdfQ==