/* empty css              *//* empty css              *//* empty css              */import{i as t}from"./main-1ad2265a.js";import{i as s}from"./ipcRenderer-5e19eaee.js";import{a as e}from"./index-e3ca8852.js";import{s as r}from"./store2-3c7f06c6.js";import{_ as i,o as a,b as n,i as o,a as d,w as l,t as p,l as u,g as c,p as h,h as m,B as v}from"./index-824bee01.js";const f={data:()=>({currentStatus:"关闭",servicAddress:"无"}),mounted(){this.init()},methods:{init(){s.invoke(t.checkHttpServer,{}).then((t=>{t.enable&&(this.currentStatus="开启",this.servicAddress=t.server,r.set("httpServiceConfig",t))}))},sendRequest(s){"关闭"!=this.currentStatus?this.requestHttp(t.doHttpRequest,{id:s}).then((t=>{})):this.$message.error("http服务未开启")},requestHttp(t,s){const i=r.get("httpServiceConfig").server||"http://localhost:7071";let a=t.split(".").join("/");return a=i+"/"+a,e({url:a,method:"post",data:s,timeout:6e4})}}},j=t=>(h("data-v-6dd41d1e"),t=t(),m(),t),b={id:"app-base-httpserver"},k=j((()=>o("div",{class:"one-block-1"},[o("span",null," 1. 使用http与主进程通信 ")],-1))),x={class:"one-block-2"},S=j((()=>o("div",{class:"one-block-1"},[o("span",null," 2. 发送请求 ")],-1))),_={class:"one-block-2"};const g=i(f,[["render",function(t,s,e,r,i,h){const m=u,f=v;return a(),n("div",b,[k,o("div",x,[d(m,null,{default:l((()=>[o("p",null,"* 状态："+p(i.currentStatus),1)])),_:1}),o("p",null,"* 地址："+p(i.servicAddress),1)]),S,o("div",_,[d(m,null,{default:l((()=>[d(f,{onClick:s[0]||(s[0]=t=>h.sendRequest("pictures"))},{default:l((()=>[c(" 打开【我的图片】 ")])),_:1})])),_:1})])])}],["__scopeId","data-v-6dd41d1e"]]);export{g as default};
