import{d as x,u as K,r as i,b as L,o as y,c as P,m as s,j as l,k as n,e as t,w,p as q,Q as C,V as z,W as G,X as V,y as S,n as M,G as Q,I as W,v as X,R as H}from"./index-D4nD6lq3.js";import{_ as J}from"./index-BH-aX6uU.js";import{E as Y,a as Z}from"./el-table-column-Nw9CsZCh.js";import"./el-checkbox-DpS0yAA0.js";import{E as ee,a as te}from"./el-form-item-oceQVxPu.js";/* empty css               *//* empty css               */import{u as le,a as oe}from"./index-BOrFPrtb.js";import{E as ae}from"./index-I5OlcPyW.js";import{E as ne}from"./index-fvT2sidt.js";import"./_initCloneObject-Cyh6om-O.js";import"./_baseClone-zQQn4kcl.js";const se={class:"p-2"},ie={class:"panel"},re={class:"panel"},ue={style:{"text-align":"center","margin-left":"-120px","margin-top":"30px"}},me=x({name:"AuthRole"}),ye=x({...me,setup(de){const k=K(),{proxy:m}=H(),g=i(!0),v=i(0),d=i(1),p=i(10),I=i([]),f=i([]),r=i({nickName:void 0,userName:"",userId:void 0}),b=i(),T=o=>{var e;o.flag=!o.flag,(e=b.value)==null||e.toggleRowSelection(o,o.flag)},j=o=>{I.value=o.map(e=>e.roleId)},B=o=>String(o.roleId),E=()=>{const o={fullPath:"",hash:"",matched:[],meta:void 0,name:void 0,params:void 0,query:void 0,redirectedFrom:void 0,path:"/system/user"};m==null||m.$tab.closeOpenPage(o)},$=async()=>{const o=r.value.userId,e=I.value.join(",");await le({userId:o,roleIds:e}),m==null||m.$modal.msgSuccess("授权成功"),E()},h=async()=>{const o=k.params&&k.params.userId;if(o){g.value=!0;const e=await oe(o);Object.assign(r.value,e.data.user),Object.assign(f.value,e.data.roles),v.value=f.value.length,await M(()=>{f.value.forEach(u=>{var _;u!=null&&u.flag&&((_=b.value)==null||_.toggleRowSelection(u,!0))})}),g.value=!1}};return L(()=>{h()}),(o,e)=>{const u=Q,_=ee,R=ae,F=ne,U=te,c=Y,A=Z,O=J,N=W,D=X;return y(),P("div",se,[s("div",ie,[e[6]||(e[6]=s("h4",{class:"panel-title"},"基本信息",-1)),l(U,{model:t(r),inline:!0},{default:n(()=>[l(F,{gutter:10},{default:n(()=>[l(R,{span:2.5},{default:n(()=>[l(_,{label:"用户昵称",prop:"nickName"},{default:n(()=>[l(u,{modelValue:t(r).nickName,"onUpdate:modelValue":e[0]||(e[0]=a=>t(r).nickName=a),disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),l(R,{span:2.5},{default:n(()=>[l(_,{label:"登录账号",prop:"userName"},{default:n(()=>[l(u,{modelValue:t(r).userName,"onUpdate:modelValue":e[1]||(e[1]=a=>t(r).userName=a),disabled:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),s("div",re,[e[10]||(e[10]=s("h4",{class:"panel-title"},"角色信息",-1)),s("div",null,[w((y(),q(A,{ref_key:"tableRef",ref:b,"row-key":B,data:t(f).slice((t(d)-1)*t(p),t(d)*t(p)),onRowClick:T,onSelectionChange:j},{default:n(()=>[l(c,{label:"序号",width:"55",type:"index",align:"center"},{default:n(a=>[s("span",null,C((t(d)-1)*t(p)+a.$index+1),1)]),_:1}),l(c,{type:"selection","reserve-selection":!0,width:"55"}),l(c,{label:"角色编号",align:"center",prop:"roleId"}),l(c,{label:"角色名称",align:"center",prop:"roleName"}),l(c,{label:"权限字符",align:"center",prop:"roleKey"}),l(c,{label:"创建时间",align:"center",prop:"createTime",width:"180"},{default:n(a=>[s("span",null,C(t(z)(a.row.createTime)),1)]),_:1})]),_:1},8,["data"])),[[D,t(g)]]),w(l(O,{page:t(d),"onUpdate:page":e[2]||(e[2]=a=>V(d)?d.value=a:null),limit:t(p),"onUpdate:limit":e[3]||(e[3]=a=>V(p)?p.value=a:null),total:t(v)},null,8,["page","limit","total"]),[[G,t(v)>0]]),s("div",ue,[l(N,{type:"primary",onClick:e[4]||(e[4]=a=>$())},{default:n(()=>e[7]||(e[7]=[S("提交")])),_:1}),l(N,{onClick:e[5]||(e[5]=a=>E())},{default:n(()=>e[8]||(e[8]=[S("返回")])),_:1})]),e[9]||(e[9]=s("div",null,null,-1))])])])}}});export{ye as default};
