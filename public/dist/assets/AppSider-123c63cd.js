/* empty css              *//* empty css              *//* empty css              */import{_ as e,r as a,o as t,c as n,w as s,L as i,a as l,b as o,d as r,F as c,M as m,e as u,f as d,g as p,t as g,p as h,h as f,i as _,j as y}from"./index-824bee01.js";const b=""+new URL("logo-abcaf0c2.png",import.meta.url).href,x={name:"AppSider",data:()=>({collapsed:!0,current:"menu_1",menu:{menu_1:{icon:"icon-fengche",title:"框架",pageName:"Framework",params:{}},menu_2:{icon:"icon-niudan",title:"系统",pageName:"Os",params:{}},menu_3:{icon:"icon-xiangji",title:"硬件",pageName:"Hardware",params:{}},menu_4:{icon:"icon-liuxing",title:"特效",pageName:"Effect",params:{}}}}),created(){},mounted(){this.menuHandle()},methods:{menuHandle(e){this.current=e?e.key:this.current;const a=this.menu[this.current];this.$router.push({name:a.pageName,params:a.params})},changeMenu(e){}}},j=(e=>(h("data-v-3beb995b"),e=e(),f(),e))((()=>_("div",{class:"logo"},[_("img",{class:"pic-logo",src:b})],-1)));const w=e(x,[["render",function(e,h,f,_,b,x){const w=a("icon-font"),k=y,N=m,v=u,H=a("router-view"),V=d,C=i;return t(),n(C,{id:"app-layout-sider"},{default:s((()=>[l(v,{modelValue:b.collapsed,"onUpdate:modelValue":h[0]||(h[0]=e=>b.collapsed=e),theme:"light",class:"layout-sider",width:"100"},{default:s((()=>[j,l(N,{class:"menu-item",theme:"light",mode:"inline",selectedKeys:[b.current],onClick:x.menuHandle},{default:s((()=>[(t(!0),o(c,null,r(b.menu,((e,a)=>(t(),n(k,{key:a},{default:s((()=>[l(w,{type:e.icon},null,8,["type"]),p(" "+g(e.title),1)])),_:2},1024)))),128))])),_:1},8,["selectedKeys","onClick"])])),_:1},8,["modelValue"]),l(C,null,{default:s((()=>[l(V,{class:"layout-content"},{default:s((()=>[l(H)])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-3beb995b"]]);export{w as default};
