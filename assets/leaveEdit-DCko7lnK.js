import{d as j,ae as G,r as d,o as v,c as q,j as a,k as t,e as l,Z as U,w as Q,m as k,x,y as g,R as H,q as T,n as A,ab as se,I as Z,af as re,W as ne,v as J,T as X,N as ie,a0 as ue,$ as de,Q as K,b as pe,F as me,p as ve,C as ce,D as fe,G as _e}from"./index-UXO82rnR.js";import{E as be,a as ge}from"./el-form-item-DKWg1Omz.js";import{E as ye}from"./el-date-picker-gg6014bb.js";/* empty css                */import{g as we,u as ke,a as he}from"./index-q3xwF_v5.js";import{s as De}from"./index-BkTfjeod.js";import{_ as Ve}from"./submitVerify.vue_vue_type_script_setup_true_lang-Cmi1JuDn.js";import{E as Ee,a as Te}from"./el-tab-pane-WVgyF43F.js";import{E as $e,a as Ce}from"./el-table-column-MKEZIRY_.js";import"./el-checkbox-DqrEs51o.js";import{B as Le}from"./index-DDiieUI2.js";import{p as Re}from"./index-BmvAirlU.js";import{E as Fe}from"./index-BTmQHi_c.js";import"./_baseClone-CaGvglyq.js";import"./_initCloneObject-Dmlh6vfv.js";import"./index-ImNdux79.js";import"./index-CEDyo0Ng.js";import"./el-link-DYQJOGED.js";import"./el-upload-XJG8wUGz.js";import"./index-IwqdL5S4.js";/* empty css                    */import"./index.vue_vue_type_script_setup_true_lang-CSl3R7vq.js";/* empty css               */import"./index-C2npmcbn.js";import"./index-Cjgvf-op.js";/* empty css               *//* empty css                */import"./index-2vxSN0GH.js";import"./index-613SZYvd.js";import"./index-BwbVV6-O.js";import"./index-ennNA2X2.js";import"./multiInstanceUser.vue_vue_type_script_setup_true_name_User_lang-D-fuKXHF.js";import"./index-N3xDeOIY.js";import"./Viewer-aphDqur2.js";const Ne={class:"container"},xe=j({__name:"approvalRecord",props:{width:G.string.def("70%"),height:G.string.def("100%")},setup(M,{expose:s}){const{proxy:u}=X(),y=M,r=d(!1),n=d(!1),D=d([]),c=d("bpmn"),V=d(),E=async f=>{n.value=!0,r.value=!0,c.value="bpmn",D.value=[],Re.getHistoryRecord(f).then(_=>{D.value=_.data,r.value=!1}),await A(()=>{V.value.init(f)})},h=f=>{u==null||u.$download.oss(f)};return s({init:E}),(f,_)=>{const $=Ee,e=$e,C=se,L=Z,R=Ce,B=re,F=Te,I=ne,P=J;return v(),q("div",Ne,[a(I,{modelValue:l(n),"onUpdate:modelValue":_[1]||(_[1]=p=>U(n)?n.value=p:null),draggable:"",title:"审批记录",width:y.width,height:y.height,"close-on-click-modal":!1},{default:t(()=>[a(F,{modelValue:l(c),"onUpdate:modelValue":_[0]||(_[0]=p=>U(c)?c.value=p:null),class:"demo-tabs"},{default:t(()=>[a($,{label:"流程图",name:"bpmn"},{default:t(()=>[a(Le,{ref_key:"bpmnViewRef",ref:V},null,512)]),_:1}),Q((v(),k($,{label:"审批信息",name:"info"},{default:t(()=>[x("div",null,[a(R,{data:l(D),style:{width:"100%"},border:"",fit:""},{default:t(()=>[a(e,{type:"index",label:"序号",align:"center",width:"60"}),a(e,{prop:"name",label:"任务名称",sortable:"",align:"center"}),a(e,{prop:"nickName","show-overflow-tooltip":!0,label:"办理人",sortable:"",align:"center"},{default:t(p=>[a(C,{type:"success"},{default:t(()=>[g(H(p.row.nickName||"无"),1)]),_:2},1024)]),_:1}),a(e,{label:"状态",sortable:"",align:"center"},{default:t(p=>[a(C,{type:"success"},{default:t(()=>[g(H(p.row.statusName),1)]),_:2},1024)]),_:1}),a(e,{prop:"comment",label:"审批意见",sortable:"",align:"center"}),a(e,{prop:"startTime",label:"开始时间",sortable:"",align:"center"}),a(e,{prop:"endTime",label:"结束时间",sortable:"",align:"center"}),a(e,{prop:"runDuration",label:"运行时长",sortable:"",align:"center"}),a(e,{prop:"attachmentList",label:"附件",sortable:"",align:"center"},{default:t(p=>[p.row.attachmentList&&p.row.attachmentList.length>0?(v(),k(B,{key:0,placement:"right",width:310,trigger:"click"},{reference:t(()=>[a(L,{style:{"margin-right":"16px"}},{default:t(()=>[g("附件")]),_:1})]),default:t(()=>[a(R,{border:"",data:p.row.attachmentList},{default:t(()=>[a(e,{prop:"name",width:"202","show-overflow-tooltip":!0,label:"附件名称"}),a(e,{prop:"name",width:"80",align:"center","show-overflow-tooltip":!0,label:"操作"},{default:t(S=>[a(L,{type:"text",onClick:O=>h(S.row.contentId)},{default:t(()=>[g("下载")]),_:2},1032,["onClick"])]),_:1})]),_:2},1032,["data"])]),_:2},1024)):T("",!0)]),_:1})]),_:1},8,["data"])])]),_:1})),[[P,l(r)]])]),_:1},8,["modelValue"])]),_:1},8,["modelValue","width","height"])])}}}),Be=ie(xe,[["__scopeId","data-v-2e9af920"]]),Ie={class:"p-2"},Pe={style:{display:"flex","justify-content":"space-between"}},Se=j({name:"Leave"}),ga=j({...Se,setup(M){const{proxy:s}=X(),u=d(!1),y=d(!0),r=d([]),n=d({}),D=[{value:"1",label:"事假"},{value:"2",label:"调休"},{value:"3",label:"病假"},{value:"4",label:"婚假"}],c=d(),V=d(),E=d(),h=d({businessKey:"",tableName:"",variables:{}}),f=d({}),_={id:void 0,leaveType:void 0,startDate:void 0,endDate:void 0,leaveDays:void 0,remark:void 0,status:void 0},$=ue({form:{..._},queryParams:{pageNum:1,pageSize:10,startLeaveDays:void 0,endLeaveDays:void 0},rules:{id:[{required:!0,message:"主键不能为空",trigger:"blur"}],leaveType:[{required:!0,message:"请假类型不能为空",trigger:"blur"}],leaveTime:[{required:!0,message:"请假时间不能为空",trigger:"blur"}],leaveDays:[{required:!0,message:"请假天数不能为空",trigger:"blur"}]}}),{form:e,rules:C}=de($),L=()=>{var m;e.value={..._},r.value=[],(m=E.value)==null||m.resetFields()},R=()=>{const m=new Date(r.value[0]).getTime(),b=new Date(r.value[1]).getTime()-m;e.value.leaveDays=Math.floor(b/(1e3*60*60*24))+1},B=()=>{y.value=!0,u.value=!1,A(async()=>{const m=await we(n.value.id);Object.assign(e.value,m.data),r.value=[],r.value.push(e.value.startDate),r.value.push(e.value.endDate),y.value=!1,u.value=!1})},F=m=>{var o;if(r.value.length===0){s==null||s.$modal.msgError("请假时间不能为空");return}try{(o=E.value)==null||o.validate(async b=>{if(e.value.startDate=r.value[0],e.value.endDate=r.value[1],b){u.value=!0;let w;e.value.id?w=await ke(e.value):w=await he(e.value),e.value=w.data,m==="draft"?(u.value=!1,s==null||s.$modal.msgSuccess("暂存成功"),s.$tab.closePage(s.$route),s.$router.go(-1)):await I(w.data)}})}finally{u.value=!1}},I=async m=>{try{h.value.tableName="test_leave",h.value.businessKey=m.id,f.value={entity:m,leaveDays:m.leaveDays,userList:[1,3],userList2:[1,3]},h.value.variables=f.value;const o=await De(h.value);c.value&&(u.value=!1,c.value.openDialog(o.data.taskId))}finally{u.value=!1}},P=()=>{V.value.init(e.value.id)},p=async()=>{await s.$tab.closePage(s.$route),s.$router.go(-1)},S=()=>{s.$tab.closePage(s.$route),s.$router.go(-1)},O=async()=>{c.value.openDialog(n.value.taskId)},W=K(()=>n.value.type==="add"||n.value.type==="update"&&e.value.status&&(e.value.status==="draft"||e.value.status==="cancel"||e.value.status==="back")),Y=K(()=>n.value.type==="approval"&&e.value.status&&e.value.status==="waiting");return pe(()=>{A(async()=>{n.value=s.$route.query,L(),y.value=!1,(n.value.type==="update"||n.value.type==="view"||n.value.type==="approval")&&B()})}),(m,o)=>{const b=Z,w=Fe,ee=ce,ae=fe,N=be,te=ye,z=_e,le=ge,oe=J;return v(),q("div",Ie,[a(w,{shadow:"never"},{default:t(()=>[x("div",Pe,[x("div",null,[l(W)?(v(),k(b,{key:0,loading:l(u),type:"info",onClick:o[0]||(o[0]=i=>F("draft"))},{default:t(()=>[g("暂存")]),_:1},8,["loading"])):T("",!0),l(W)?(v(),k(b,{key:1,loading:l(u),type:"primary",onClick:o[1]||(o[1]=i=>F("submit"))},{default:t(()=>[g("提 交")]),_:1},8,["loading"])):T("",!0),l(Y)?(v(),k(b,{key:2,loading:l(u),type:"primary",onClick:O},{default:t(()=>[g("审批")]),_:1},8,["loading"])):T("",!0),l(e)&&l(e).id&&l(e).status!=="draft"?(v(),k(b,{key:3,type:"primary",onClick:P},{default:t(()=>[g("流程进度")]),_:1})):T("",!0)]),x("div",null,[a(b,{style:{float:"right"},onClick:o[2]||(o[2]=i=>S())},{default:t(()=>[g("返回")]),_:1})])])]),_:1}),a(w,{shadow:"never",style:{height:"78vh","overflow-y":"auto"}},{default:t(()=>[Q((v(),k(le,{ref_key:"leaveFormRef",ref:E,disabled:l(n).type==="view",model:l(e),rules:l(C),"label-width":"80px"},{default:t(()=>[a(N,{label:"请假类型",prop:"leaveType"},{default:t(()=>[a(ae,{modelValue:l(e).leaveType,"onUpdate:modelValue":o[3]||(o[3]=i=>l(e).leaveType=i),placeholder:"请选择请假类型",style:{width:"100%"}},{default:t(()=>[(v(),q(me,null,ve(D,i=>a(ee,{key:i.value,label:i.label,value:i.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(N,{label:"请假时间"},{default:t(()=>[a(te,{modelValue:l(r),"onUpdate:modelValue":o[4]||(o[4]=i=>U(r)?r.value=i:null),type:"daterange","range-separator":"To","start-placeholder":"开始时间","end-placeholder":"结束时间",onChange:o[5]||(o[5]=i=>R())},null,8,["modelValue"])]),_:1}),a(N,{label:"请假天数",prop:"leaveDays"},{default:t(()=>[a(z,{modelValue:l(e).leaveDays,"onUpdate:modelValue":o[6]||(o[6]=i=>l(e).leaveDays=i),disabled:"",type:"number",placeholder:"请输入请假天数"},null,8,["modelValue"])]),_:1}),a(N,{label:"请假原因",prop:"remark"},{default:t(()=>[a(z,{modelValue:l(e).remark,"onUpdate:modelValue":o[7]||(o[7]=i=>l(e).remark=i),type:"textarea",rows:3,placeholder:"请输入请假原因"},null,8,["modelValue"])]),_:1})]),_:1},8,["disabled","model","rules"])),[[oe,l(y)]])]),_:1}),a(Ve,{ref_key:"submitVerifyRef",ref:c,"task-variables":l(f),onSubmitCallback:p},null,8,["task-variables"]),a(Be,{ref_key:"approvalRecordRef",ref:V},null,512)])}}});export{ga as default};
