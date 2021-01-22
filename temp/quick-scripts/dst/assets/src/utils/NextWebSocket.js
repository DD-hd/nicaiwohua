
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
        this.eventTarget.on(name, function (event) {
            cb.apply(target, [event.detail]);
        }, target);
    };
    NextWebSocket.prototype.once = function (name, cb, target) {
        this.eventTarget.once(name, function (event) {
            cb.apply(target, event.detail);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx1dGlsc1xcTmV4dFdlYlNvY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUdJO1FBRlEsZ0JBQVcsR0FBbUIsSUFBSSxDQUFDO1FBQ25DLE9BQUUsR0FBYyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFBO0lBQzNELENBQUM7SUFFTSwrQkFBTyxHQUFkLFVBQWUsYUFBcUIsRUFBRSxLQUFjO1FBQXBELGlCQXVCQztRQXRCRyxJQUFJLElBQUksR0FBRyxhQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVUsS0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLFVBQUEsS0FBSztZQUNsQixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2YsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsVUFBQSxLQUFLO1lBQ3JCLFFBQVE7WUFDSixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2YsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNiLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUN6QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoRDtZQUNMLFdBQVc7WUFDWCwwQkFBMEI7WUFDMUIsNEJBQTRCO1lBQzVCLElBQUk7UUFDUixDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFBLEtBQUs7WUFDbkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVNLDRCQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsS0FBVztRQUNqQyxJQUFJLElBQUksR0FBRztZQUNQLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDO1FBQ0YsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sMEJBQUUsR0FBVCxVQUFVLElBQVksRUFBRSxFQUFZLEVBQUUsTUFBWTtRQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsVUFBQyxLQUFLO1lBQzVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVNLDRCQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsRUFBWSxFQUFFLE1BQVk7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUMsS0FBSztZQUM5QixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVNLGlDQUFTLEdBQWhCLFVBQWlCLE1BQU07UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0E1REEsQUE0REMsSUFBQTtBQTVEWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOZXh0V2ViU29ja2V0IHtcbiAgICBwcml2YXRlIGV2ZW50VGFyZ2V0OiBjYy5FdmVudFRhcmdldCA9IG51bGw7XG4gICAgcHJpdmF0ZSB3czogV2ViU29ja2V0ID0gbnVsbDtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRUYXJnZXQgPSBuZXcgY2MuRXZlbnRUYXJnZXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53cyAmJiB0aGlzLndzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOXG4gICAgfVxuXG4gICAgcHVibGljIGNvbm5lY3Qoc2VydmVyQWRkcmVzczogc3RyaW5nLCB0b2tlbj86IHN0cmluZykge1xuICAgICAgICBsZXQgYWRkciA9IHNlcnZlckFkZHJlc3MgKyAodG9rZW4gPyBgP3Rva2VuPSR7dG9rZW59YCA6IFwiXCIpO1xuICAgICAgICB0aGlzLndzID0gbmV3IFdlYlNvY2tldChhZGRyKTtcbiAgICAgICAgdGhpcy53cy5vbm9wZW4gPSBldmVudCA9PiB7XG4gICAgICAgICAgICBjYy5sb2coXCLov57mjqXmiJDlip9cIik7XG4gICAgICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0LmVtaXQoXCJ3c19vcGVuXCIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLndzLm9ubWVzc2FnZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuiOt+WPlua2iOaBr1wiKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubmFtZSAmJiBkYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRUYXJnZXQuZW1pdChkYXRhLm5hbWUsIGRhdGEudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIH0gY2F0Y2h7XG4gICAgICAgICAgICAvLyAgICAgY2MuZXJyb3IoXCLmjqXlj5fmtojmga/plJnor69cIik7XG4gICAgICAgICAgICAvLyAgICAgY2MuZXJyb3IoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMud3Mub25jbG9zZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUYXJnZXQuZW1pdChcIndzX2Nsb3NlXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBlbWl0KG5hbWU6IHN0cmluZywgdmFsdWU/OiBhbnkpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIGxldCBqc29uU3RyID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIHRoaXMud3Muc2VuZChqc29uU3RyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb24obmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIHRhcmdldD86IGFueSkge1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0Lm9uKG5hbWUsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY2IuYXBwbHkodGFyZ2V0LCBbZXZlbnQuZGV0YWlsXSk7XG4gICAgICAgIH0sIHRhcmdldCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uY2UobmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIHRhcmdldD86IGFueSkge1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0Lm9uY2UobmFtZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjYi5hcHBseSh0YXJnZXQsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sIHRhcmdldCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9mZlRhcmdldCh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldC50YXJnZXRPZmYodGFyZ2V0KTtcbiAgICB9XG59XG4iXX0=