import{d as we,r as i,Y as be,b as ye,o as m,c as R,m as E,j as t,k as a,e as n,X as $,y as r,w as h,x as z,W as A,a0 as ke,p,Q as v,cX as Ve,F as Z,q as H,t as N,R as Ce,Z as Ee,G as he,I as Ne,a9 as De,U as Se,v as Ie}from"./index-D4nD6lq3.js";import{_ as Ke}from"./index-BH-aX6uU.js";import{E as Re,a as Ue}from"./el-table-column-Nw9CsZCh.js";import"./el-checkbox-DpS0yAA0.js";import{_ as Le}from"./index-Cu5tDpmP.js";/* empty css               */import{_ as Te}from"./index-CeC1FWzw.js";/* empty css               */import{E as Be,a as Fe}from"./el-form-item-oceQVxPu.js";/* empty css                *//* empty css                       *//* empty css                        */import{k as $e,l as ze,u as Ae,m as Pe}from"./index-B-G_MFQm.js";import{_ as We}from"./multiInstanceUser.vue_vue_type_script_setup_true_name_User_lang-DrW4tg51.js";import{_ as xe}from"./index.vue_vue_type_script_setup_true_lang-D7mrRZGd.js";import{w as Me}from"./index-BWlz0r_B.js";import{b as qe,a as Qe}from"./index-BaDxqmMz.js";import{E as Ye}from"./index-DWSlLEJi.js";import{E as Xe}from"./index-I5OlcPyW.js";import{E as Ge}from"./index-fvT2sidt.js";import"./_initCloneObject-Cyh6om-O.js";/* empty css                */import"./index-CsUbaV0a.js";import"./_baseClone-zQQn4kcl.js";import"./index-BOrFPrtb.js";const Je={class:"p-2"},Oe={class:"mb-[10px]"},je={class:"mb-[10px]"},Ze={class:"clearfix"},ht=we({__name:"allTaskWaiting",setup(He){const b=i(),P=i(),W=i(),{proxy:u}=Ce(),{wf_business_status:ee}=be(u==null?void 0:u.useDict("wf_business_status")),w=i(!0),x=i([]),te=i(!0),M=i(!0),y=i(!0),D=i(0),S=i([]),U=i(""),I=i(!1),L=i(!0),q=i({key:"",value:""}),Q=i(),s=i({pageNum:1,pageSize:10,name:void 0,processDefinitionName:void 0,processDefinitionKey:void 0}),d=i("waiting"),ae=o=>{b.value&&(U.value="加签人员",b.value.getAddMultiInstanceList(o.id,[]))},le=o=>{b.value&&(U.value="减签人员",b.value.getDeleteMultiInstanceList(o.id))},c=()=>{d.value==="waiting"?T():Y()},ne=()=>{var o;(o=W.value)==null||o.resetFields(),s.value.pageNum=1,s.value.pageSize=10,c()},oe=o=>{x.value=o.map(e=>e.id),te.value=o.length!==1,M.value=!o.length},ie=async o=>{S.value=[],s.value.pageNum=1,o==="waiting"?T():Y()},T=()=>{w.value=!0,$e(s.value).then(o=>{S.value=o.rows,D.value=o.total,w.value=!1})},Y=()=>{w.value=!0,ze(s.value).then(o=>{S.value=o.rows,D.value=o.total,w.value=!1})},se=()=>{P.value.open()},re=async o=>{o&&o.length>0?(await(u==null?void 0:u.$modal.confirm("是否确认提交？")),w.value=!0,await Ae(x.value,o[0].userId),c(),u==null||u.$modal.msgSuccess("操作成功")):u==null||u.$modal.msgWarning("请选择用户！")},ue=async o=>{L.value=!0,I.value=!0,Q.value=o.processDefinitionName;let e=await Pe(o.id);q.value=e.data,L.value=!1},me=o=>{const e=Ee({wfDefinitionConfigVo:o.wfDefinitionConfigVo,wfNodeConfigVo:o.wfNodeConfigVo,businessKey:o.businessKey,taskId:o.id,type:"view"});Me.routerJump(e,u)};return ye(()=>{T()}),(o,e)=>{var O,j;const X=qe,de=Qe,K=Ye,B=he,k=Be,_=Ne,G=Fe,V=Xe,pe=Te,F=Ge,f=Re,C=De,fe=Le,ce=Ue,_e=Ke,ge=Se,J=Ie;return m(),R("div",Je,[E("div",Oe,[t(K,{shadow:"hover",class:"text-center"},{default:a(()=>[t(de,{modelValue:n(d),"onUpdate:modelValue":e[0]||(e[0]=l=>$(d)?d.value=l:null),onChange:e[1]||(e[1]=l=>ie(n(d)))},{default:a(()=>[t(X,{value:"waiting"},{default:a(()=>e[9]||(e[9]=[r("待办任务")])),_:1}),t(X,{value:"finish"},{default:a(()=>e[10]||(e[10]=[r("已办任务")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),t(ke,{"enter-active-class":(O=n(u))==null?void 0:O.animate.searchAnimate.enter,"leave-active-class":(j=n(u))==null?void 0:j.animate.searchAnimate.leave},{default:a(()=>[h(E("div",je,[t(K,{shadow:"hover"},{default:a(()=>[h(t(G,{ref_key:"queryFormRef",ref:W,model:n(s),inline:!0},{default:a(()=>[t(k,{label:"任务名称",prop:"name"},{default:a(()=>[t(B,{modelValue:n(s).name,"onUpdate:modelValue":e[2]||(e[2]=l=>n(s).name=l),placeholder:"请输入任务名称",onKeyup:z(c,["enter"])},null,8,["modelValue"])]),_:1}),t(k,{label:"流程定义名称","label-width":"100",prop:"processDefinitionName"},{default:a(()=>[t(B,{modelValue:n(s).processDefinitionName,"onUpdate:modelValue":e[3]||(e[3]=l=>n(s).processDefinitionName=l),placeholder:"请输入流程定义名称",onKeyup:z(c,["enter"])},null,8,["modelValue"])]),_:1}),t(k,{label:"流程定义KEY","label-width":"100",prop:"processDefinitionKey"},{default:a(()=>[t(B,{modelValue:n(s).processDefinitionKey,"onUpdate:modelValue":e[4]||(e[4]=l=>n(s).processDefinitionKey=l),placeholder:"请输入流程定义KEY",onKeyup:z(c,["enter"])},null,8,["modelValue"])]),_:1}),t(k,null,{default:a(()=>[t(_,{type:"primary",icon:"Search",onClick:c},{default:a(()=>e[11]||(e[11]=[r("搜索")])),_:1}),t(_,{icon:"Refresh",onClick:ne},{default:a(()=>e[12]||(e[12]=[r("重置")])),_:1})]),_:1})]),_:1},8,["model"]),[[A,n(y)]])]),_:1})],512),[[A,n(y)]])]),_:1},8,["enter-active-class","leave-active-class"]),t(K,{shadow:"hover"},{header:a(()=>[t(F,{gutter:10,class:"mb8"},{default:a(()=>[t(V,{span:1.5},{default:a(()=>[t(_,{type:"primary",plain:"",icon:"Edit",disabled:n(M),onClick:se},{default:a(()=>e[13]||(e[13]=[r("修改办理人")])),_:1},8,["disabled"])]),_:1}),t(pe,{showSearch:n(y),"onUpdate:showSearch":e[5]||(e[5]=l=>$(y)?y.value=l:null),onQueryTable:c},null,8,["showSearch"])]),_:1})]),default:a(()=>[h((m(),p(ce,{border:"",data:n(S),onSelectionChange:oe},{default:a(()=>[t(f,{type:"selection",width:"55",align:"center"}),t(f,{align:"center",type:"index",label:"序号",width:"60"}),t(f,{"show-overflow-tooltip":!0,align:"center",label:"流程定义名称"},{default:a(l=>[E("span",null,v(l.row.processDefinitionName)+"v"+v(l.row.processDefinitionVersion)+".0",1)]),_:1}),t(f,{align:"center",prop:"processDefinitionKey",label:"流程定义KEY"}),t(f,{align:"center",prop:"name",label:"任务名称"}),t(f,{align:"center",prop:"assigneeName",label:"办理人"},Ve({_:2},[n(d)==="waiting"?{name:"default",fn:a(l=>[l.row.participantVo&&l.row.assignee===null?(m(!0),R(Z,{key:0},H(l.row.participantVo.candidateName,(g,ve)=>(m(),p(C,{key:ve,type:"success"},{default:a(()=>[r(v(g),1)]),_:2},1024))),128)):(m(),p(C,{key:1,type:"success"},{default:a(()=>[r(v(l.row.assigneeName||"无"),1)]),_:2},1024))]),key:"0"}:n(d)==="finish"?{name:"default",fn:a(l=>[t(C,{type:"success"},{default:a(()=>[r(v(l.row.assigneeName||"无"),1)]),_:2},1024)]),key:"1"}:void 0]),1024),t(f,{align:"center",label:"流程状态","min-width":"70"},{default:a(l=>[n(d)==="waiting"?(m(),p(fe,{key:0,options:n(ee),value:l.row.businessStatus},null,8,["options","value"])):(m(),p(C,{key:1,type:"success"},{default:a(()=>e[14]||(e[14]=[r("已完成")])),_:1}))]),_:1}),n(d)==="waiting"?(m(),p(f,{key:0,align:"center",prop:"createTime",label:"创建时间",width:"160"})):N("",!0),n(d)==="finish"?(m(),p(f,{key:1,align:"center",prop:"startTime",label:"创建时间",width:"160"})):N("",!0),t(f,{label:"操作",align:"center",width:n(d)==="finish"?"80":"151"},{default:a(l=>[t(F,{gutter:10,class:"mb8"},{default:a(()=>[t(V,{span:1.5},{default:a(()=>[t(_,{link:"",type:"primary",size:"small",icon:"View",onClick:g=>me(l.row)},{default:a(()=>e[15]||(e[15]=[r("查看")])),_:2},1032,["onClick"])]),_:2},1024),n(d)==="waiting"?(m(),p(V,{key:0,span:1.5},{default:a(()=>[t(_,{link:"",type:"primary",size:"small",icon:"Document",onClick:g=>ue(l.row)},{default:a(()=>e[16]||(e[16]=[r("流程变量")])),_:2},1032,["onClick"])]),_:2},1024)):N("",!0)]),_:2},1024),l.row.multiInstance?(m(),p(F,{key:0,gutter:10,class:"mb8"},{default:a(()=>[t(V,{span:1.5},{default:a(()=>[t(_,{link:"",type:"primary",size:"small",icon:"Remove",onClick:g=>le(l.row)},{default:a(()=>e[17]||(e[17]=[r("减签")])),_:2},1032,["onClick"])]),_:2},1024),t(V,{span:1.5},{default:a(()=>[t(_,{link:"",type:"primary",size:"small",icon:"CirclePlus",onClick:g=>ae(l.row)},{default:a(()=>e[18]||(e[18]=[r("加签")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)):N("",!0)]),_:1},8,["width"])]),_:1},8,["data"])),[[J,n(w)]]),h(t(_e,{page:n(s).pageNum,"onUpdate:page":e[6]||(e[6]=l=>n(s).pageNum=l),limit:n(s).pageSize,"onUpdate:limit":e[7]||(e[7]=l=>n(s).pageSize=l),total:n(D),onPagination:c},null,8,["page","limit","total"]),[[A,n(D)>0]])]),_:1}),t(We,{ref_key:"multiInstanceUserRef",ref:b,title:n(U),onSubmitCallback:c},null,8,["title"]),t(n(xe),{ref_key:"userSelectRef",ref:P,multiple:!1,onConfirmCallBack:re},null,512),t(ge,{modelValue:n(I),"onUpdate:modelValue":e[8]||(e[8]=l=>$(I)?I.value=l:null),draggable:"",title:"流程变量",width:"60%","close-on-click-modal":!1},{default:a(()=>[h((m(),p(K,{class:"box-card"},{header:a(()=>[E("div",Ze,[E("span",null,[e[19]||(e[19]=r("流程定义名称：")),t(C,null,{default:a(()=>[r(v(n(Q)),1)]),_:1})])])]),default:a(()=>[(m(!0),R(Z,null,H(n(q),(l,g)=>(m(),R("div",{key:g},[l.key!=="_FLOWABLE_SKIP_EXPRESSION_ENABLED"?(m(),p(G,{key:0,"label-position":"right","label-width":"150px"},{default:a(()=>[t(k,{label:l.key+"："},{default:a(()=>[r(v(l.value),1)]),_:2},1032,["label"])]),_:2},1024)):N("",!0)]))),128))]),_:1})),[[J,n(L)]])]),_:1},8,["modelValue"])])}}});export{ht as default};
