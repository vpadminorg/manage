import{d as Z,r as i,$ as H,b as O,o as c,c as R,j as e,k as a,w as f,x,e as o,t as b,y as d,Y as V,a2 as W,Z as X,m as C,R as g,F as ee,p as te,T as oe,a0 as ae,G as ne,I as le,ab as se,v as ie}from"./index-UXO82rnR.js";import{_ as re}from"./index-C2npmcbn.js";import{E as pe,a as ue}from"./el-table-column-MKEZIRY_.js";import"./el-checkbox-DqrEs51o.js";import{_ as me}from"./index-Cjgvf-op.js";/* empty css               */import{_ as ce}from"./index-N3xDeOIY.js";/* empty css                */import{E as de,a as _e}from"./el-form-item-DKWg1Omz.js";import{n as fe}from"./index-BkTfjeod.js";import{w as ge}from"./index-BWlz0r_B.js";import{E as we}from"./index-BTmQHi_c.js";import{E as ve}from"./index-ennNA2X2.js";import"./_initCloneObject-Dmlh6vfv.js";/* empty css                */import"./index-613SZYvd.js";import"./_baseClone-CaGvglyq.js";const ye={class:"p-2"},he={class:"mb-[10px]"},Ye=Z({__name:"taskCopyList",setup(be){const k=i(),{proxy:u}=oe(),{wf_business_status:B}=H(u==null?void 0:u.useDict("wf_business_status")),w=i(!0),U=i([]),z=i(!0),I=i(!0),m=i(!0),v=i(0),E=i([]),s=i({pageNum:1,pageSize:10,name:void 0,processDefinitionName:void 0,processDefinitionKey:void 0}),p=()=>{N()},L=()=>{var l;(l=k.value)==null||l.resetFields(),s.value.pageNum=1,s.value.pageSize=10,p()},Y=l=>{U.value=l.map(n=>n.id),z.value=l.length!==1,I.value=!l.length},N=()=>{w.value=!0,fe(s.value).then(l=>{E.value=l.rows,v.value=l.total,w.value=!1})},q=l=>{const n=ae({wfDefinitionConfigVo:l.wfDefinitionConfigVo,wfNodeConfigVo:l.wfNodeConfigVo,businessKey:l.businessKey,taskId:l.id,type:"view"});ge.routerJump(n,u)};return O(()=>{N()}),(l,n)=>{var S,T;const y=ne,_=de,h=le,P=_e,D=we,Q=ce,A=ve,r=pe,K=se,J=me,$=ue,j=re,G=ie;return c(),R("div",ye,[e(W,{"enter-active-class":(S=o(u))==null?void 0:S.animate.searchAnimate.enter,"leave-active-class":(T=o(u))==null?void 0:T.animate.searchAnimate.leave},{default:a(()=>[f(x("div",he,[e(D,{shadow:"hover"},{default:a(()=>[f(e(P,{ref_key:"queryFormRef",ref:k,model:o(s),inline:!0},{default:a(()=>[e(_,{label:"任务名称",prop:"name"},{default:a(()=>[e(y,{modelValue:o(s).name,"onUpdate:modelValue":n[0]||(n[0]=t=>o(s).name=t),placeholder:"请输入任务名称",onKeyup:b(p,["enter"])},null,8,["modelValue"])]),_:1}),e(_,{label:"流程定义名称","label-width":"100",prop:"processDefinitionName"},{default:a(()=>[e(y,{modelValue:o(s).processDefinitionName,"onUpdate:modelValue":n[1]||(n[1]=t=>o(s).processDefinitionName=t),placeholder:"请输入流程定义名称",onKeyup:b(p,["enter"])},null,8,["modelValue"])]),_:1}),e(_,{label:"流程定义KEY","label-width":"100",prop:"processDefinitionKey"},{default:a(()=>[e(y,{modelValue:o(s).processDefinitionKey,"onUpdate:modelValue":n[2]||(n[2]=t=>o(s).processDefinitionKey=t),placeholder:"请输入流程定义KEY",onKeyup:b(p,["enter"])},null,8,["modelValue"])]),_:1}),e(_,null,{default:a(()=>[e(h,{type:"primary",icon:"Search",onClick:p},{default:a(()=>[d("搜索")]),_:1}),e(h,{icon:"Refresh",onClick:L},{default:a(()=>[d("重置")]),_:1})]),_:1})]),_:1},8,["model"]),[[V,o(m)]])]),_:1})],512),[[V,o(m)]])]),_:1},8,["enter-active-class","leave-active-class"]),e(D,{shadow:"hover"},{header:a(()=>[e(A,{gutter:10,class:"mb8"},{default:a(()=>[e(Q,{showSearch:o(m),"onUpdate:showSearch":n[3]||(n[3]=t=>X(m)?m.value=t:null),onQueryTable:p},null,8,["showSearch"])]),_:1})]),default:a(()=>[f((c(),C($,{border:"",data:o(E),onSelectionChange:Y},{default:a(()=>[e(r,{type:"selection",width:"55",align:"center"}),e(r,{align:"center",type:"index",label:"序号",width:"60"}),e(r,{"show-overflow-tooltip":!0,align:"center",label:"流程定义名称"},{default:a(t=>[x("span",null,g(t.row.processDefinitionName)+"v"+g(t.row.processDefinitionVersion)+".0",1)]),_:1}),e(r,{align:"center",prop:"processDefinitionKey",label:"流程定义KEY"}),e(r,{align:"center",prop:"name",label:"任务名称"}),e(r,{align:"center",prop:"assigneeName",label:"办理人"},{default:a(t=>[t.row.participantVo&&t.row.assignee===null?(c(!0),R(ee,{key:0},te(t.row.participantVo.candidateName,(F,M)=>(c(),C(K,{key:M,type:"success"},{default:a(()=>[d(g(F),1)]),_:2},1024))),128)):(c(),C(K,{key:1,type:"success"},{default:a(()=>[d(g(t.row.assigneeName||"无"),1)]),_:2},1024))]),_:1}),e(r,{align:"center",label:"流程状态","min-width":"70"},{default:a(t=>[e(J,{options:o(B),value:t.row.businessStatus},null,8,["options","value"])]),_:1}),e(r,{label:"操作",align:"center",width:"200"},{default:a(t=>[e(h,{type:"primary",size:"small",icon:"View",onClick:F=>q(t.row)},{default:a(()=>[d("查看")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[G,o(w)]]),f(e(j,{page:o(s).pageNum,"onUpdate:page":n[4]||(n[4]=t=>o(s).pageNum=t),limit:o(s).pageSize,"onUpdate:limit":n[5]||(n[5]=t=>o(s).pageSize=t),total:o(v),onPagination:p},null,8,["page","limit","total"]),[[V,o(v)>0]])]),_:1})])}}});export{Ye as default};
