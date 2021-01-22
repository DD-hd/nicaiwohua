
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/utils/NextStore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4dc48XJ8MZEwowjLJmhkI3Z', 'NextStore');
// src/utils/NextStore.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextStore = void 0;
var NextStore = /** @class */ (function () {
    function NextStore() {
    }
    Object.defineProperty(NextStore.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (user) {
            this._user = user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NextStore.prototype, "room", {
        get: function () {
            return this._room;
        },
        set: function (room) {
            this._room = room;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NextStore.prototype, "token", {
        get: function () {
            return this.user ? this.user.token : "";
        },
        enumerable: false,
        configurable: true
    });
    return NextStore;
}());
exports.NextStore = NextStore;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx1dGlsc1xcTmV4dFN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFzQkEsQ0FBQztJQW5CRyxzQkFBVywyQkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFDRCxVQUFnQixJQUFJO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7OztPQUhBO0lBTUQsc0JBQVcsMkJBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBZ0IsSUFBSTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDOzs7T0FIQTtJQUtELHNCQUFXLDRCQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRUwsZ0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5leHRTdG9yZSB7XG5cbiAgICBwcml2YXRlIF91c2VyOiBhbnk7XG4gICAgcHVibGljIGdldCB1c2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlcjtcbiAgICB9XG4gICAgcHVibGljIHNldCB1c2VyKHVzZXIpIHtcbiAgICAgICAgdGhpcy5fdXNlciA9IHVzZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcm9vbTogYW55O1xuICAgIHB1YmxpYyBnZXQgcm9vbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb207XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgcm9vbShyb29tKSB7XG4gICAgICAgIHRoaXMuX3Jvb20gPSByb29tO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXIgPyB0aGlzLnVzZXIudG9rZW4gOiBcIlwiO1xuICAgIH1cblxufSJdfQ==