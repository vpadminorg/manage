import{d as T,u as P,r as i,b as q,o as C,c as z,m as r,j as l,k as s,e as t,w as S,p as G,Q as V,V as M,W as Q,X as h,y as w,n as x,G as W,I as X,v as H,R as J}from"./index-D4nD6lq3.js";import{_ as Y}from"./index-BH-aX6uU.js";import{E as Z,a as ee}from"./el-table-column-Nw9CsZCh.js";import"./el-checkbox-DpS0yAA0.js";import{E as te,a as le}from"./el-form-item-oceQVxPu.js";/* empty css               *//* empty css               */import{u as ae,a as oe}from"./index-BOrFPrtb.js";import{E as ne}from"./index-I5OlcPyW.js";import{E as se}from"./index-fvT2sidt.js";import"./_initCloneObject-Cyh6om-O.js";import"./_baseClone-zQQn4kcl.js";const ie={class:"p-2"},re={class:"panel"},ue={class:"panel"},me={style:{"text-align":"center","margin-left":"-120px","margin-top":"30px"}},de=T({name:"AuthRole"}),Ce=T({...de,setup(pe){const k=P(),{proxy:d}=J(),v=i(!0),b=i(0),p=i(1),c=i(10),E=i([]),I=i([]),g=i([]),m=i({nickName:void 0,userName:"",userId:void 0}),_=i(),j=a=>{var e;a.flag=!a.flag,(e=_.value)==null||e.toggleRowSelection(a,a.flag)},B=a=>{E.value=a.map(e=>e.roleId)},O=a=>String(a.roleId),R=()=>{const a={fullPath:"",hash:"",matched:[],meta:void 0,name:void 0,params:void 0,query:void 0,redirectedFrom:void 0,path:"/vpadmin/system/user"};d==null||d.$tab.closeOpenPage(a)},$=async()=>{const a=m.value.userId,e=E.value.join(",");await ae({userId:a,roleIds:e}).then(()=>{d==null||d.$modal.msgSuccess("授权成功"),R()}).catch(()=>{x(()=>{I.value.forEach(n=>{var u;n!=null&&n.flag&&((u=_.value)==null||u.toggleRowSelection(n,!0))})})})},F=async()=>{const a=k.params&&k.params.userId;if(a){v.value=!0;const e=await oe(a);Object.assign(m.value,e.data.user),Object.assign(g.value,e.data.roles),b.value=g.value.length,Object.assign(I,g),await x(()=>{g.value.forEach(n=>{var u;n!=null&&n.flag&&((u=_.value)==null||u.toggleRowSelection(n,!0))})}),v.value=!1}};return q(()=>{F()}),(a,e)=>{const n=W,u=te,N=ne,U=se,A=le,f=Z,D=ee,K=Y,y=X,L=H;return C(),z("div",ie,[r("div",re,[e[6]||(e[6]=r("h4",{class:"panel-title"},"基本信息",-1)),l(A,{model:t(m),inline:!0},{default:s(()=>[l(U,{gutter:10},{default:s(()=>[l(N,{span:2.5},{default:s(()=>[l(u,{label:"用户昵称",prop:"nickName"},{default:s(()=>[l(n,{modelValue:t(m).nickName,"onUpdate:modelValue":e[0]||(e[0]=o=>t(m).nickName=o),disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),l(N,{span:2.5},{default:s(()=>[l(u,{label:"登录账号",prop:"userName"},{default:s(()=>[l(n,{modelValue:t(m).userName,"onUpdate:modelValue":e[1]||(e[1]=o=>t(m).userName=o),disabled:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),r("div",ue,[e[10]||(e[10]=r("h4",{class:"panel-title"},"角色信息",-1)),r("div",null,[S((C(),G(D,{ref_key:"tableRef",ref:_,"row-key":O,data:t(g).slice((t(p)-1)*t(c),t(p)*t(c)),onRowClick:j,onSelectionChange:B},{default:s(()=>[l(f,{label:"序号",width:"55",type:"index",align:"center"},{default:s(o=>[r("span",null,V((t(p)-1)*t(c)+o.$index+1),1)]),_:1}),l(f,{type:"selection","reserve-selection":!0,width:"55"}),l(f,{label:"角色编号",align:"center",prop:"roleId"}),l(f,{label:"角色名称",align:"center",prop:"roleName"}),l(f,{label:"权限字符",align:"center",prop:"roleKey"}),l(f,{label:"创建时间",align:"center",prop:"createTime",width:"180"},{default:s(o=>[r("span",null,V(t(M)(o.row.createTime)),1)]),_:1})]),_:1},8,["data"])),[[L,t(v)]]),S(l(K,{page:t(p),"onUpdate:page":e[2]||(e[2]=o=>h(p)?p.value=o:null),limit:t(c),"onUpdate:limit":e[3]||(e[3]=o=>h(c)?c.value=o:null),total:t(b)},null,8,["page","limit","total"]),[[Q,t(b)>0]]),r("div",me,[l(y,{type:"primary",onClick:e[4]||(e[4]=o=>$())},{default:s(()=>e[7]||(e[7]=[w("提交")])),_:1}),l(y,{onClick:e[5]||(e[5]=o=>R())},{default:s(()=>e[8]||(e[8]=[w("返回")])),_:1})]),e[9]||(e[9]=r("div",null,null,-1))])])])}}});export{Ce as default};
