
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/utils/NextWebSocket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5d72V2gv9Ou4rL3jzB/7/k', 'NextWebSocket');
// src/utils/NextWebSocket.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextWebSocket = void 0;
var NextWebSocket = /** @class */ (function () {
    function NextWebSocket() {
        this.eventTarget = null;
        this.ws = null;
        this.eventTarget = new cc.EventTarget();
    }
    NextWebSocket.prototype.isOpen = function () {
        return this.ws && this.ws.readyState === WebSocket.OPEN;
    };
    NextWebSocket.prototype.connect = function (serverAddress, token) {
        var _this = this;
        var addr = serverAddress + (token ? "?token=" + token : "");
        this.ws = new WebSocket(addr);
        this.ws.onopen = function (event) {
            cc.log("连接成功");
            _this.eventTarget.emit("ws_open");
        };
        this.ws.onmessage = function (event) {
            // try {
            var data = JSON.parse(event.data);
            cc.log("获取消息");
            cc.log(data);
            if (data.name && data.value) {
                _this.eventTarget.emit(data.name, data.value);
            }
            // } catch{
            //     cc.error("接受消息错误");
            //     cc.error(event.data);
            // }
        };
        this.ws.onclose = function (event) {
            _this.eventTarget.emit("ws_close");
        };
    };
    NextWebSocket.prototype.emit = function (name, value) {
        var data = {
            name: name,
            value: value
        };
        var jsonStr = JSON.stringify(data);
        this.ws.send(jsonStr);
    };
    NextWebSocket.prototype.on = function (name, cb, target) {
        this.eventTarget.on(name, function (detail) {
            cb.apply(target, [detail]);
        }, target);
    };
    NextWebSocket.prototype.once = function (name, cb, target) {
        this.eventTarget.once(name, function (detail) {
            cb.apply(target, [detail]);
        }, target);
    };
    NextWebSocket.prototype.offTarget = function (target) {
        this.eventTarget.targetOff(target);
    };
    return NextWebSocket;
}());
exports.NextWebSocket = NextWebSocket;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx1dGlsc1xcTmV4dFdlYlNvY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUdJO1FBRlEsZ0JBQVcsR0FBbUIsSUFBSSxDQUFDO1FBQ25DLE9BQUUsR0FBYyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFBO0lBQzNELENBQUM7SUFFTSwrQkFBTyxHQUFkLFVBQWUsYUFBcUIsRUFBRSxLQUFjO1FBQXBELGlCQXVCQztRQXRCRyxJQUFJLElBQUksR0FBRyxhQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVUsS0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLFVBQUEsS0FBSztZQUNsQixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2YsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsVUFBQSxLQUFLO1lBQ3JCLFFBQVE7WUFDSixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2YsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNiLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUN6QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoRDtZQUNMLFdBQVc7WUFDWCwwQkFBMEI7WUFDMUIsNEJBQTRCO1lBQzVCLElBQUk7UUFDUixDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFBLEtBQUs7WUFDbkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVNLDRCQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsS0FBVztRQUNqQyxJQUFJLElBQUksR0FBRztZQUNQLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDO1FBQ0YsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sMEJBQUUsR0FBVCxVQUFVLElBQVksRUFBRSxFQUFZLEVBQUUsTUFBWTtRQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsVUFBQyxNQUFNO1lBQzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDZixDQUFDO0lBRU0sNEJBQUksR0FBWCxVQUFZLElBQVksRUFBRSxFQUFZLEVBQUUsTUFBWTtRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxNQUFNO1lBQy9CLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDZixDQUFDO0lBRU0saUNBQVMsR0FBaEIsVUFBaUIsTUFBTTtRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQTVEQSxBQTREQyxJQUFBO0FBNURZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5leHRXZWJTb2NrZXQge1xuICAgIHByaXZhdGUgZXZlbnRUYXJnZXQ6IGNjLkV2ZW50VGFyZ2V0ID0gbnVsbDtcbiAgICBwcml2YXRlIHdzOiBXZWJTb2NrZXQgPSBudWxsO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldCA9IG5ldyBjYy5FdmVudFRhcmdldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndzICYmIHRoaXMud3MucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU5cbiAgICB9XG5cbiAgICBwdWJsaWMgY29ubmVjdChzZXJ2ZXJBZGRyZXNzOiBzdHJpbmcsIHRva2VuPzogc3RyaW5nKSB7XG4gICAgICAgIGxldCBhZGRyID0gc2VydmVyQWRkcmVzcyArICh0b2tlbiA/IGA/dG9rZW49JHt0b2tlbn1gIDogXCJcIik7XG4gICAgICAgIHRoaXMud3MgPSBuZXcgV2ViU29ja2V0KGFkZHIpO1xuICAgICAgICB0aGlzLndzLm9ub3BlbiA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNjLmxvZyhcIui/nuaOpeaIkOWKn1wiKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUYXJnZXQuZW1pdChcIndzX29wZW5cIik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMud3Mub25tZXNzYWdlID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwi6I635Y+W5raI5oGvXCIpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5uYW1lICYmIGRhdGEudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudFRhcmdldC5lbWl0KGRhdGEubmFtZSwgZGF0YS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gfSBjYXRjaHtcbiAgICAgICAgICAgIC8vICAgICBjYy5lcnJvcihcIuaOpeWPl+a2iOaBr+mUmeivr1wiKTtcbiAgICAgICAgICAgIC8vICAgICBjYy5lcnJvcihldmVudC5kYXRhKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy53cy5vbmNsb3NlID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudFRhcmdldC5lbWl0KFwid3NfY2xvc2VcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGVtaXQobmFtZTogc3RyaW5nLCB2YWx1ZT86IGFueSkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGpzb25TdHIgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgdGhpcy53cy5zZW5kKGpzb25TdHIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbihuYW1lOiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KSB7XG4gICAgICAgIHRoaXMuZXZlbnRUYXJnZXQub24obmFtZSwgKGRldGFpbCkgPT4ge1xuICAgICAgICAgICAgY2IuYXBwbHkodGFyZ2V0LCBbZGV0YWlsXSk7XG4gICAgICAgIH0sIHRhcmdldCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uY2UobmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIHRhcmdldD86IGFueSkge1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0Lm9uY2UobmFtZSwgKGRldGFpbCkgPT4ge1xuICAgICAgICAgICAgY2IuYXBwbHkodGFyZ2V0LCBbZGV0YWlsXSk7XG4gICAgICAgIH0sIHRhcmdldCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9mZlRhcmdldCh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldC50YXJnZXRPZmYodGFyZ2V0KTtcbiAgICB9XG59XG4iXX0=