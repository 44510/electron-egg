(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9234b1da"],{"03e3":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app-base-notification"}},[e._m(0),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:function(t){return e.sendNotification(0)}}},[e._v("默认")]),o("a-button",{on:{click:function(t){return e.sendNotification(1)}}},[e._v("发出提示音")]),o("a-button",{on:{click:function(t){return e.sendNotification(2)}}},[e._v("点击通知触发事件")]),o("a-button",{on:{click:function(t){return e.sendNotification(3)}}},[e._v("关闭通知触发事件")])],1)],1)])},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 1. 弹出桌面通知 ")])])}],l=(o("d3b7"),o("a358")),a={data:function(){return{views:[{type:"main",title:"通知标题",subtitle:"副标题",body:"这是通知内容-默认",silent:!0,icon:"/asset/images/tray_logo.png"},{type:"main",title:"提示音",subtitle:"副标题-提示音",body:"这是通知内容-提示音",silent:!1},{type:"main",title:"点击通知事件",subtitle:"副标题-点击通知事件",body:"这是通知内容-点击通知事件",clickEvent:!0},{type:"main",title:"关闭通知事件",subtitle:"副标题-关闭通知事件",body:"这是通知内容-点击通知事件",closeEvent:!0}]}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.$ipc.removeAllListeners(l["a"].sendNotification),this.$ipc.on(l["a"].sendNotification,(function(t,o){"[object Object]"==Object.prototype.toString.call(o)&&e.$message.info(o.msg)}))},sendNotification:function(e){this.$ipc.send(l["a"].sendNotification,this.views[e])}}},r=a,c=(o("a437"),o("2877")),s=Object(c["a"])(r,n,i,!1,null,"eb783aa2",null);t["default"]=s.exports},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return i}));o("b775");var n={messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",socketMessageStart:"controller.example.socketMessageStart",socketMessageStop:"controller.example.socketMessageStop",hello:"controller.example.hello",executeJS:"controller.example.executeJS",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",uploadFile:"controller.example.uploadFile"},i={appUpdater:"app.updater"}},a437:function(e,t,o){"use strict";o("c737")},c737:function(e,t,o){}}]);
//# sourceMappingURL=chunk-9234b1da.374ed212.js.map