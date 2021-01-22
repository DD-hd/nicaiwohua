
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/TestGraphics');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/src/G');
require('./assets/src/events/CreateRoomEvent');
require('./assets/src/events/JoinRoomEvent');
require('./assets/src/events/SketchpadEvent');
require('./assets/src/models/RoomModel');
require('./assets/src/models/UserModel');
require('./assets/src/scenes/GameRoot');
require('./assets/src/scenes/hall/CreateRoomPanel');
require('./assets/src/scenes/hall/HallScene');
require('./assets/src/scenes/hall/JoinRoomPanel');
require('./assets/src/scenes/loding/LodingScene');
require('./assets/src/scenes/login/LoginScene');
require('./assets/src/scenes/register/HeadSelect');
require('./assets/src/scenes/register/RegisterScene');
require('./assets/src/scenes/room/RoomScene');
require('./assets/src/scenes/room/desk/AnswerPanel');
require('./assets/src/scenes/room/desk/Desk');
require('./assets/src/scenes/room/desk/GameSeat');
require('./assets/src/scenes/room/message/BulletMessage');
require('./assets/src/scenes/room/message/MessagePanel');
require('./assets/src/scenes/room/over/OverPanel');
require('./assets/src/scenes/room/prepare/PreparePanel');
require('./assets/src/scenes/room/prepare/PrepareSeat');
require('./assets/src/scenes/room/prepare/PrepareSeatLayout');
require('./assets/src/scenes/room/tool/ToolPanel');
require('./assets/src/scenes/room/topbar/TopBar');
require('./assets/src/scenes/share/Sketchpad');
require('./assets/src/utils/NextHttp');
require('./assets/src/utils/NextStore');
require('./assets/src/utils/NextWebSocket');

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