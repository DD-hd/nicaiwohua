
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/scenes/room/over/OverPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a50aa7l6XFEoK/mn2RpYL/S', 'OverPanel');
// src/scenes/room/over/OverPanel.ts

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
exports.OverPanel = void 0;
var G_1 = require("../../../G");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OverPanel = /** @class */ (function (_super) {
    __extends(OverPanel, _super);
    function OverPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resultLabel = null;
        return _this;
    }
    OverPanel.prototype.show = function () {
        this.node.active = true;
        var users = [];
        var seatMap = G_1.G.room.getSeatMap();
        for (var i in seatMap) {
            if (seatMap[i]) {
                users.push(seatMap[i]);
            }
        }
        users.sort(function (u1, u2) {
            if (u1.score >= u2.score) {
                return -1;
            }
            else {
                return 1;
            }
        });
        this.resultLabel.string = "";
        for (var i = 0; i < users.length; i++) {
            this.resultLabel.string += i + "\u3010" + users[i].username + "\u3011 " + users[i].score + "\u5206" + "\n";
        }
    };
    OverPanel.prototype.hide = function () {
        if (this.node.active) {
            this.node.active = false;
        }
    };
    __decorate([
        property(cc.Label)
    ], OverPanel.prototype, "resultLabel", void 0);
    OverPanel = __decorate([
        ccclass
    ], OverPanel);
    return OverPanel;
}(cc.Component));
exports.OverPanel = OverPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzY2VuZXNcXHJvb21cXG92ZXJcXE92ZXJQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQStCO0FBRXpCLElBQUEsS0FBcUIsRUFBRSxDQUFDLFVBQVUsRUFBakMsT0FBTyxhQUFBLEVBQUMsUUFBUSxjQUFpQixDQUFDO0FBR3pDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBZ0NDO1FBN0JXLGlCQUFXLEdBQWEsSUFBSSxDQUFDOztJQTZCekMsQ0FBQztJQTNCVSx3QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksT0FBTyxHQUFHLEtBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsS0FBSSxJQUFJLENBQUMsSUFBSSxPQUFPLEVBQUM7WUFDakIsSUFBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUM7Z0JBQ1YsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQjtTQUNKO1FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsRUFBQyxFQUFFO1lBQ2IsSUFBRyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLE9BQU8sQ0FBQyxDQUFDLENBQUE7YUFDWjtpQkFBSztnQkFDRixPQUFPLENBQUMsQ0FBQzthQUNaO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDN0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQU8sQ0FBQyxjQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLGVBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBSSxJQUFNLENBQUM7U0FDckY7SUFDTCxDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNrQjtJQUg1QixTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBZ0NyQjtJQUFELGdCQUFDO0NBaENELEFBZ0NDLENBaEM4QixFQUFFLENBQUMsU0FBUyxHQWdDMUM7QUFoQ1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHIH0gZnJvbSBcIi4uLy4uLy4uL0dcIjtcblxuY29uc3Qge2NjY2xhc3MscHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBPdmVyUGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgcmVzdWx0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHB1YmxpYyBzaG93KCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IHVzZXJzID0gW107XG4gICAgICAgIGxldCBzZWF0TWFwID0gRy5yb29tLmdldFNlYXRNYXAoKTtcbiAgICAgICAgZm9yKGxldCBpIGluIHNlYXRNYXApe1xuICAgICAgICAgICAgaWYoc2VhdE1hcFtpXSl7XG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaChzZWF0TWFwW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1c2Vycy5zb3J0KCh1MSx1Mik9PntcbiAgICAgICAgICAgIGlmKHUxLnNjb3JlID49IHUyLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlc3VsdExhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRMYWJlbC5zdHJpbmcgKz0gYCR7aX3jgJAke3VzZXJzW2ldLnVzZXJuYW1lfeOAkSAke3VzZXJzW2ldLnNjb3JlfeWIhiR7XCJcXG5cIn1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKSB7XG4gICAgICAgIGlmKHRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=