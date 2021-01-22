
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/utils/NextHttp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0cafD+/9JBOo37YYc1vNvT', 'NextHttp');
// src/utils/NextHttp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextHttp = void 0;
var NextHttp = /** @class */ (function () {
    function NextHttp(serverAddress) {
        this.serverAddress = "https://127.0.0.1:1323/";
        this.token = '';
        if (serverAddress) {
            this.serverAddress = serverAddress;
        }
    }
    NextHttp.prototype.updateToken = function (token) {
        this.token = token;
    };
    NextHttp.prototype.get = function (name, params, successCb, errorCb) {
        this.action = 'get';
        this.api = name;
        this.apiParams = params;
        this.successCallback = successCb;
        this.errorCallback = errorCb;
        this.send();
    };
    NextHttp.prototype.post = function (name, params, successCb, errorCb) {
        this.action = 'post';
        this.api = name;
        this.apiParams = params;
        this.successCallback = successCb;
        this.errorCallback = errorCb;
        this.send();
    };
    NextHttp.prototype.dealWithMeta = function (meta) {
    };
    NextHttp.prototype.send = function () {
        var _this = this;
        // 参数检查
        if (!this.action)
            throw new Error('Api action is not given!');
        if (!this.api)
            throw new Error('Api name is not given!');
        var action = this.action;
        var api = this.api;
        var params = this.apiParams || {};
        var token = this.token;
        var url = this.serverAddress + api;
        if (token && !params.hasOwnProperty('token')) {
            // params["_token"] = token;
        }
        // 初始化XMLHttpRequest
        var xmlHttp = new XMLHttpRequest();
        var append = '';
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                if (append !== '') {
                    append += '&';
                }
                var param = params[key];
                param = typeof param === "object" ? JSON.stringify(param) : param;
                // URL发送数据时，+号和&号会丢失，因此应在发送前转换
                if (typeof param === "string") {
                    param = param.replace(/\+/g, '%2B');
                    param = param.replace(/&/g, '%26');
                    param = encodeURIComponent(param);
                }
                append += key + '=' + param;
            }
        }
        if (action === 'post') {
            xmlHttp.open(action, url);
        }
        else {
            if (append !== '') {
                xmlHttp.open(action, url + '?' + append);
            }
            else {
                xmlHttp.open(action, url);
            }
        }
        xmlHttp.setRequestHeader('Authorization', 'Bearer ' + token);
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    var strData = void 0;
                    // 若有返回结果
                    if (xmlHttp.responseText.length >= 0) {
                        try {
                            strData = JSON.parse(xmlHttp.responseText);
                        }
                        catch (e) {
                            cc.log('Response data is not in JSON format!');
                            // Helper.log(xmlHttp.responseText);
                        }
                        // 若成功解析返回的数据
                        if (strData) {
                            // data: api返回数据的主要内容
                            // meta: api返回的元数据，比如游戏状态改变，分页信息等等
                            // error: api返回的错误信息
                            var data = void 0, meta = void 0, error = void 0;
                            if (strData.hasOwnProperty('meta') && strData['meta'] !== null) {
                                meta = strData['meta'];
                                _this.dealWithMeta(meta);
                            }
                            if (strData.hasOwnProperty('data') && strData['data'] !== null) {
                                if (_this.successCallback) {
                                    _this.successCallback(strData['data']);
                                }
                            }
                            if (strData.hasOwnProperty('error') && strData['error'] !== null) {
                                error = strData['error'];
                                if (_this.errorCallback) {
                                    _this.errorCallback(error);
                                }
                                else {
                                    cc.log('Unhandled Api Error!');
                                }
                            }
                        }
                        else {
                            cc.log('Server Error!');
                        }
                    }
                    else {
                        cc.log('Can\'t get the response data.');
                        if (_this.errorCallback) {
                            _this.errorCallback();
                        }
                    }
                }
                else { //其它http状态码处理
                    cc.log(xmlHttp.responseText);
                }
            }
            else { //其它request状态处理
            }
        };
        if (action === 'post') {
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlHttp.send(append);
        }
        else {
            xmlHttp.send();
        }
    };
    return NextHttp;
}());
exports.NextHttp = NextHttp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx1dGlsc1xcTmV4dEh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFVSSxrQkFBbUIsYUFBcUI7UUFUaEMsa0JBQWEsR0FBRyx5QkFBeUIsQ0FBQztRQUkxQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBTXZCLElBQUcsYUFBYSxFQUFDO1lBQ2IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRU0sOEJBQVcsR0FBbEIsVUFBbUIsS0FBWTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sc0JBQUcsR0FBVixVQUFXLElBQVksRUFBRSxNQUFrQixFQUFFLFNBQStCLEVBQUUsT0FBMkI7UUFDckcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx1QkFBSSxHQUFYLFVBQVksSUFBWSxFQUFFLE1BQWtCLEVBQUUsU0FBK0IsRUFBRSxPQUEyQjtRQUN0RyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLCtCQUFZLEdB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d0JBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO3dCQUN4QyxJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUU7NEJBQ3BCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzt5QkFDeEI7cUJBQ0o7aUJBQ0o7cUJBQU0sRUFBRSxhQUFhO29CQUNsQixFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDaEM7YUFDSjtpQkFBTSxFQUFFLGVBQWU7YUFDdkI7UUFDTCxDQUFDLENBQUM7UUFDRixJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7WUFDbkIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNILE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FoSkEsQUFnSkMsSUFBQTtBQWhKWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOZXh0SHR0cCB7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJBZGRyZXNzID0gXCJodHRwczovLzEyNy4wLjAuMToxMzIzL1wiO1xuICAgIHByaXZhdGUgYWN0aW9uOiBJQXBpTWV0aG9kO1xuICAgIHByaXZhdGUgYXBpOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhcGlQYXJhbXM6IElBcGlQYXJhbXM7XG4gICAgcHJpdmF0ZSB0b2tlbjogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBzdWNjZXNzQ2FsbGJhY2s6IElBcGlTdWNjZXNzRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBlcnJvckNhbGxiYWNrOiBJQXBpRXJyb3JGdW5jdGlvbjtcbiAgICBwcml2YXRlIG1ldGFDYWxsYmFjazogSUFwaU1ldGFGdW5jdGlvbjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzZXJ2ZXJBZGRyZXNzPzpzdHJpbmcpIHtcbiAgICAgICAgaWYoc2VydmVyQWRkcmVzcyl7XG4gICAgICAgICAgICB0aGlzLnNlcnZlckFkZHJlc3MgPSBzZXJ2ZXJBZGRyZXNzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRva2VuKHRva2VuOnN0cmluZykge1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfVxuXG4gICAgcHVibGljIGdldChuYW1lOiBzdHJpbmcsIHBhcmFtczogSUFwaVBhcmFtcywgc3VjY2Vzc0NiPzogSUFwaVN1Y2Nlc3NGdW5jdGlvbiwgZXJyb3JDYj86IElBcGlFcnJvckZ1bmN0aW9uKXtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnZ2V0JztcbiAgICAgICAgdGhpcy5hcGkgPSBuYW1lO1xuICAgICAgICB0aGlzLmFwaVBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgdGhpcy5zdWNjZXNzQ2FsbGJhY2sgPSBzdWNjZXNzQ2I7XG4gICAgICAgIHRoaXMuZXJyb3JDYWxsYmFjayA9IGVycm9yQ2I7XG4gICAgICAgIHRoaXMuc2VuZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3N0KG5hbWU6IHN0cmluZywgcGFyYW1zOiBJQXBpUGFyYW1zLCBzdWNjZXNzQ2I/OiBJQXBpU3VjY2Vzc0Z1bmN0aW9uLCBlcnJvckNiPzogSUFwaUVycm9yRnVuY3Rpb24pe1xuICAgICAgICB0aGlzLmFjdGlvbiA9ICdwb3N0JztcbiAgICAgICAgdGhpcy5hcGkgPSBuYW1lO1xuICAgICAgICB0aGlzLmFwaVBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgdGhpcy5zdWNjZXNzQ2FsbGJhY2sgPSBzdWNjZXNzQ2I7XG4gICAgICAgIHRoaXMuZXJyb3JDYWxsYmFjayA9IGVycm9yQ2I7XG4gICAgICAgIHRoaXMuc2VuZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVhbFdpdGhNZXRhKG1ldGE6IE9iamVjdCkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kKCkge1xuICAgICAgICAvLyDlj4LmlbDmo4Dmn6VcbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbikgdGhyb3cgbmV3IEVycm9yKCdBcGkgYWN0aW9uIGlzIG5vdCBnaXZlbiEnKTtcbiAgICAgICAgaWYgKCF0aGlzLmFwaSkgdGhyb3cgbmV3IEVycm9yKCdBcGkgbmFtZSBpcyBub3QgZ2l2ZW4hJyk7XG4gICAgICAgIGxldCBhY3Rpb24gPSB0aGlzLmFjdGlvbjtcbiAgICAgICAgbGV0IGFwaSA9IHRoaXMuYXBpO1xuICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5hcGlQYXJhbXMgfHwge307XG4gICAgICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW47XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnNlcnZlckFkZHJlc3MgKyBhcGk7XG4gICAgICAgIGlmICh0b2tlbiAmJiAhcGFyYW1zLmhhc093blByb3BlcnR5KCd0b2tlbicpKSB7XG4gICAgICAgICAgICAvLyBwYXJhbXNbXCJfdG9rZW5cIl0gPSB0b2tlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWIneWni+WMllhNTEh0dHBSZXF1ZXN0XG4gICAgICAgIGxldCB4bWxIdHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGxldCBhcHBlbmQgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXBwZW5kICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmQgKz0gJyYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgcGFyYW0gPSBwYXJhbXNba2V5XTtcbiAgICAgICAgICAgICAgICBwYXJhbSA9IHR5cGVvZiBwYXJhbSA9PT0gXCJvYmplY3RcIiA/IEpTT04uc3RyaW5naWZ5KHBhcmFtKSA6IHBhcmFtO1xuICAgICAgICAgICAgICAgIC8vIFVSTOWPkemAgeaVsOaNruaXtu+8jCvlj7flkowm5Y+35Lya5Lii5aSx77yM5Zug5q2k5bqU5Zyo5Y+R6YCB5YmN6L2s5o2iXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbSA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnJTJCJyk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtID0gcGFyYW0ucmVwbGFjZSgvJi9nLCAnJTI2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtID0gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXBwZW5kICs9IGtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3Bvc3QnKSB7XG4gICAgICAgICAgICB4bWxIdHRwLm9wZW4oYWN0aW9uLCB1cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFwcGVuZCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICB4bWxIdHRwLm9wZW4oYWN0aW9uLCB1cmwgKyAnPycgKyBhcHBlbmQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4bWxIdHRwLm9wZW4oYWN0aW9uLCB1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHhtbEh0dHAuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcbiAgICAgICAgeG1sSHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoeG1sSHR0cC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHhtbEh0dHAuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ckRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vIOiLpeaciei/lOWbnue7k+aenFxuICAgICAgICAgICAgICAgICAgICBpZiAoeG1sSHR0cC5yZXNwb25zZVRleHQubGVuZ3RoID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyRGF0YSA9IEpTT04ucGFyc2UoeG1sSHR0cC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZygnUmVzcG9uc2UgZGF0YSBpcyBub3QgaW4gSlNPTiBmb3JtYXQhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGVscGVyLmxvZyh4bWxIdHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDoi6XmiJDlip/op6PmnpDov5Tlm57nmoTmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGF0YTogYXBp6L+U5Zue5pWw5o2u55qE5Li76KaB5YaF5a65XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWV0YTogYXBp6L+U5Zue55qE5YWD5pWw5o2u77yM5q+U5aaC5ri45oiP54q25oCB5pS55Y+Y77yM5YiG6aG15L+h5oGv562J562JXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3I6IGFwaei/lOWbnueahOmUmeivr+S/oeaBr1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhLCBtZXRhLCBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RyRGF0YS5oYXNPd25Qcm9wZXJ0eSgnbWV0YScpICYmIHN0ckRhdGFbJ21ldGEnXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhID0gc3RyRGF0YVsnbWV0YSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWxXaXRoTWV0YShtZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ckRhdGEuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSAmJiBzdHJEYXRhWydkYXRhJ10gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NDYWxsYmFjayhzdHJEYXRhWydkYXRhJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJEYXRhLmhhc093blByb3BlcnR5KCdlcnJvcicpICYmIHN0ckRhdGFbJ2Vycm9yJ10gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBzdHJEYXRhWydlcnJvciddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvckNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yQ2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKCdVbmhhbmRsZWQgQXBpIEVycm9yIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ1NlcnZlciBFcnJvciEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZygnQ2FuXFwndCBnZXQgdGhlIHJlc3BvbnNlIGRhdGEuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvckNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvL+WFtuWug2h0dHDnirbmgIHnoIHlpITnkIZcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKHhtbEh0dHAucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgeyAvL+WFtuWug3JlcXVlc3TnirbmgIHlpITnkIZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3Bvc3QnKSB7XG4gICAgICAgICAgICB4bWxIdHRwLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgICAgIHhtbEh0dHAuc2VuZChhcHBlbmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeG1sSHR0cC5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=