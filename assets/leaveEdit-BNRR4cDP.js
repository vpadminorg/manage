import{d as O,ac as G,r as d,o as c,c as q,j as a,k as l,e as o,X as U,w as Q,p as k,m as x,y as g,Q as H,t as T,n as A,a9 as se,I as X,ad as re,U as ne,v as Y,R as Z,L as ie,Z as ue,Y as de,O as K,b as pe,F as me,q as ve,C as ce,D as fe,G as be}from"./index-DDAliqzK.js";import{E as _e,a as ge}from"./el-form-item-Dtm-Ic1o.js";import{E as ye}from"./el-date-picker-DZLvxWBh.js";/* empty css                */import{g as we,u as ke,a as De}from"./index-DQUQ1Qj6.js";import{s as Ve}from"./index-DXcrzSX8.js";import{_ as he}from"./submitVerify.vue_vue_type_script_setup_true_lang-BaohV1ZH.js";import{E as Ee,a as Te}from"./el-tab-pane-BF-bEAi9.js";import{E as $e,a as Le}from"./el-table-column-DxCuKUMo.js";import"./el-checkbox-BucE91Wb.js";import{B as Ce}from"./index-65j6vwFJ.js";import{p as Re}from"./index-DCwUpbkk.js";import{E as Fe}from"./index-x58AzXEe.js";import"./_baseClone-1ZiivbqZ.js";import"./_initCloneObject-B4dgLBrf.js";import"./index-BV8nIMlh.js";import"./index-td8Fc3i2.js";import"./el-link-CQyR00ym.js";import"./el-upload-gtPj48F2.js";import"./index-DHwca6ts.js";/* empty css                    */import"./index.vue_vue_type_script_setup_true_lang-CXuny4tW.js";/* empty css               */import"./index-RdVOGMqm.js";import"./index-cbmq-Xhe.js";/* empty css               *//* empty css                */import"./index-CmqILhzb.js";import"./index-CSfZWYHi.js";import"./index-CokWeuRK.js";import"./index-D7RFStbC.js";import"./multiInstanceUser.vue_vue_type_script_setup_true_name_User_lang-Bhd14q-N.js";import"./index-2eSzZeHe.js";import"./Viewer-BT6O8ele.js";const Ne={class:"container"},xe=O({__name:"approvalRecord",props:{width:G.string.def("70%"),height:G.string.def("100%")},setup(j,{expose:s}){const{proxy:u}=Z(),y=j,r=d(!1),n=d(!1),V=d([]),f=d("bpmn"),h=d(),E=async b=>{n.value=!0,r.value=!0,f.value="bpmn",V.value=[],Re.getHistoryRecord(b).then(p=>{V.value=p.data,r.value=!1}),await A(()=>{h.value.init(b)})},D=b=>{u==null||u.$download.oss(b)};return s({init:E}),(b,p)=>{const $=Ee,e=$e,L=se,C=X,R=Le,B=re,F=Te,I=ne,P=Y;return c(),q("div",Ne,[a(I,{modelValue:o(n),"onUpdate:modelValue":p[1]||(p[1]=m=>U(n)?n.value=m:null),draggable:"",title:"审批记录",width:y.width,height:y.height,"close-on-click-modal":!1},{default:l(()=>[a(F,{modelValue:o(f),"onUpdate:modelValue":p[0]||(p[0]=m=>U(f)?f.value=m:null),class:"demo-tabs"},{default:l(()=>[a($,{label:"流程图",name:"bpmn"},{default:l(()=>[a(Ce,{ref_key:"bpmnViewRef",ref:h},null,512)]),_:1}),Q((c(),k($,{label:"审批信息",name:"info"},{default:l(()=>[x("div",null,[a(R,{data:o(V),style:{width:"100%"},border:"",fit:""},{default:l(()=>[a(e,{type:"index",label:"序号",align:"center",width:"60"}),a(e,{prop:"name",label:"任务名称",sortable:"",align:"center"}),a(e,{prop:"nickName","show-overflow-tooltip":!0,label:"办理人",sortable:"",align:"center"},{default:l(m=>[a(L,{type:"success"},{default:l(()=>[g(H(m.row.nickName||"无"),1)]),_:2},1024)]),_:1}),a(e,{label:"状态",sortable:"",align:"center"},{default:l(m=>[a(L,{type:"success"},{default:l(()=>[g(H(m.row.statusName),1)]),_:2},1024)]),_:1}),a(e,{prop:"comment",label:"审批意见",sortable:"",align:"center"}),a(e,{prop:"startTime",label:"开始时间",sortable:"",align:"center"}),a(e,{prop:"endTime",label:"结束时间",sortable:"",align:"center"}),a(e,{prop:"runDuration",label:"运行时长",sortable:"",align:"center"}),a(e,{prop:"attachmentList",label:"附件",sortable:"",align:"center"},{default:l(m=>[m.row.attachmentList&&m.row.attachmentList.length>0?(c(),k(B,{key:0,placement:"right",width:310,trigger:"click"},{reference:l(()=>[a(C,{style:{"margin-right":"16px"}},{default:l(()=>p[2]||(p[2]=[g("附件")])),_:1})]),default:l(()=>[a(R,{border:"",data:m.row.attachmentList},{default:l(()=>[a(e,{prop:"name",width:"202","show-overflow-tooltip":!0,label:"附件名称"}),a(e,{prop:"name",width:"80",align:"center","show-overflow-tooltip":!0,label:"操作"},{default:l(S=>[a(C,{type:"text",onClick:M=>D(S.row.contentId)},{default:l(()=>p[3]||(p[3]=[g("下载")])),_:2},1032,["onClick"])]),_:1})]),_:2},1032,["data"])]),_:2},1024)):T("",!0)]),_:1})]),_:1},8,["data"])])]),_:1})),[[P,o(r)]])]),_:1},8,["modelValue"])]),_:1},8,["modelValue","width","height"])])}}}),Be=ie(xe,[["__scopeId","data-v-2e9af920"]]),Ie={class:"p-2"},Pe={style:{display:"flex","justify-content":"space-between"}},Se=O({name:"Leave"}),ga=O({...Se,setup(j){const{proxy:s}=Z(),u=d(!1),y=d(!0),r=d([]),n=d({}),V=[{value:"1",label:"事假"},{value:"2",label:"调休"},{value:"3",label:"病假"},{value:"4",label:"婚假"}],f=d(),h=d(),E=d(),D=d({businessKey:"",tableName:"",variables:{}}),b=d({}),p={id:void 0,leaveType:void 0,startDate:void 0,endDate:void 0,leaveDays:void 0,remark:void 0,status:void 0},$=ue({form:{...p},queryParams:{pageNum:1,pageSize:10,startLeaveDays:void 0,endLeaveDays:void 0},rules:{id:[{required:!0,message:"主键不能为空",trigger:"blur"}],leaveType:[{required:!0,message:"请假类型不能为空",trigger:"blur"}],leaveTime:[{required:!0,message:"请假时间不能为空",trigger:"blur"}],leaveDays:[{required:!0,message:"请假天数不能为空",trigger:"blur"}]}}),{form:e,rules:L}=de($),C=()=>{var v;e.value={...p},r.value=[],(v=E.value)==null||v.resetFields()},R=()=>{const v=new Date(r.value[0]).getTime(),_=new Date(r.value[1]).getTime()-v;e.value.leaveDays=Math.floor(_/(1e3*60*60*24))+1},B=()=>{y.value=!0,u.value=!1,A(async()=>{const v=await we(n.value.id);Object.assign(e.value,v.data),r.value=[],r.value.push(e.value.startDate),r.value.push(e.value.endDate),y.value=!1,u.value=!1})},F=v=>{var t;if(r.value.length===0){s==null||s.$modal.msgError("请假时间不能为空");return}try{(t=E.value)==null||t.validate(async _=>{if(e.value.startDate=r.value[0],e.value.endDate=r.value[1],_){u.value=!0;let w;e.value.id?w=await ke(e.value):w=await De(e.value),e.value=w.data,v==="draft"?(u.value=!1,s==null||s.$modal.msgSuccess("暂存成功"),s.$tab.closePage(s.$route),s.$router.go(-1)):await I(w.data)}})}finally{u.value=!1}},I=async v=>{try{D.value.tableName="test_leave",D.value.businessKey=v.id,b.value={entity:v,leaveDays:v.leaveDays,userList:[1,3],userList2:[1,3]},D.value.variables=b.value;const t=await Ve(D.value);f.value&&(u.value=!1,f.value.openDialog(t.data.taskId))}finally{u.value=!1}},P=()=>{h.value.init(e.value.id)},m=async()=>{await s.$tab.closePage(s.$route),s.$router.go(-1)},S=()=>{s.$tab.closePage(s.$route),s.$router.go(-1)},M=async()=>{f.value.openDialog(n.value.taskId)},W=K(()=>n.value.type==="add"||n.value.type==="update"&&e.value.status&&(e.value.status==="draft"||e.value.status==="cancel"||e.value.status==="back")),J=K(()=>n.value.type==="approval"&&e.value.status&&e.value.status==="waiting");return pe(()=>{A(async()=>{n.value=s.$route.query,C(),y.value=!1,(n.value.type==="update"||n.value.type==="view"||n.value.type==="approval")&&B()})}),(v,t)=>{const _=X,w=Fe,ee=ce,ae=fe,N=_e,te=ye,z=be,le=ge,oe=Y;return c(),q("div",Ie,[a(w,{shadow:"never"},{default:l(()=>[x("div",Pe,[x("div",null,[o(W)?(c(),k(_,{key:0,loading:o(u),type:"info",onClick:t[0]||(t[0]=i=>F("draft"))},{default:l(()=>t[8]||(t[8]=[g("暂存")])),_:1},8,["loading"])):T("",!0),o(W)?(c(),k(_,{key:1,loading:o(u),type:"primary",onClick:t[1]||(t[1]=i=>F("submit"))},{default:l(()=>t[9]||(t[9]=[g("提 交")])),_:1},8,["loading"])):T("",!0),o(J)?(c(),k(_,{key:2,loading:o(u),type:"primary",onClick:M},{default:l(()=>t[10]||(t[10]=[g("审批")])),_:1},8,["loading"])):T("",!0),o(e)&&o(e).id&&o(e).status!=="draft"?(c(),k(_,{key:3,type:"primary",onClick:P},{default:l(()=>t[11]||(t[11]=[g("流程进度")])),_:1})):T("",!0)]),x("div",null,[a(_,{style:{float:"right"},onClick:t[2]||(t[2]=i=>S())},{default:l(()=>t[12]||(t[12]=[g("返回")])),_:1})])])]),_:1}),a(w,{shadow:"never",style:{height:"78vh","overflow-y":"auto"}},{default:l(()=>[Q((c(),k(le,{ref_key:"leaveFormRef",ref:E,disabled:o(n).type==="view",model:o(e),rules:o(L),"label-width":"80px"},{default:l(()=>[a(N,{label:"请假类型",prop:"leaveType"},{default:l(()=>[a(ae,{modelValue:o(e).leaveType,"onUpdate:modelValue":t[3]||(t[3]=i=>o(e).leaveType=i),placeholder:"请选择请假类型",style:{width:"100%"}},{default:l(()=>[(c(),q(me,null,ve(V,i=>a(ee,{key:i.value,label:i.label,value:i.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(N,{label:"请假时间"},{default:l(()=>[a(te,{modelValue:o(r),"onUpdate:modelValue":t[4]||(t[4]=i=>U(r)?r.value=i:null),type:"daterange","range-separator":"To","start-placeholder":"开始时间","end-placeholder":"结束时间",onChange:t[5]||(t[5]=i=>R())},null,8,["modelValue"])]),_:1}),a(N,{label:"请假天数",prop:"leaveDays"},{default:l(()=>[a(z,{modelValue:o(e).leaveDays,"onUpdate:modelValue":t[6]||(t[6]=i=>o(e).leaveDays=i),disabled:"",type:"number",placeholder:"请输入请假天数"},null,8,["modelValue"])]),_:1}),a(N,{label:"请假原因",prop:"remark"},{default:l(()=>[a(z,{modelValue:o(e).remark,"onUpdate:modelValue":t[7]||(t[7]=i=>o(e).remark=i),type:"textarea",rows:3,placeholder:"请输入请假原因"},null,8,["modelValue"])]),_:1})]),_:1},8,["disabled","model","rules"])),[[oe,o(y)]])]),_:1}),a(he,{ref_key:"submitVerifyRef",ref:f,"task-variables":o(b),onSubmitCallback:m},null,8,["task-variables"]),a(Be,{ref_key:"approvalRecordRef",ref:h},null,512)])}}});export{ga as default};
