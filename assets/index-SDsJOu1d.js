import{d as te,u as Ce,r as d,Z as Ne,dc as ke,b as Ee,$ as x,o as p,c as D,j as t,k as n,w as m,m as $,e as o,F as W,q as X,p as f,x as Z,X as H,y as b,W as J,a0 as he,Q as ee,R as Ve,dd as Se,C as Ie,D as Te,G as De,I as $e,a1 as Re,U as Ue,v as qe}from"./index-D4nD6lq3.js";import{E as Fe,a as Pe}from"./el-tab-pane-xdTQeNFk.js";import{E as Le}from"./el-link-BLiuvJwr.js";import{_ as ze}from"./index-BH-aX6uU.js";import{E as Oe,a as Be}from"./el-table-column-Nw9CsZCh.js";import"./el-checkbox-DpS0yAA0.js";/* empty css               */import{_ as Ge}from"./index-CeC1FWzw.js";/* empty css               *//* empty css                */import{E as Qe,a as Ye}from"./el-form-item-oceQVxPu.js";import{E as je}from"./el-date-picker-Bpr8CaQ-.js";import{b as Ae,a as Ke,c as Me,s as xe,p as We,d as Xe}from"./index-C4Nts5I9.js";import{_ as Ze}from"./importTable.vue_vue_type_script_setup_true_lang-DKz2q9cA.js";import{E as He}from"./index-DWSlLEJi.js";import{E as Je}from"./index-I5OlcPyW.js";import{E as et}from"./index-fvT2sidt.js";import"./_initCloneObject-Cyh6om-O.js";/* empty css                */import"./index-CsUbaV0a.js";import"./_baseClone-zQQn4kcl.js";import"./index-DfYNOEwA.js";const tt={class:"p-2"},at={class:"mb-[10px]"},lt=te({name:"Gen"}),St=te({...lt,setup(nt){const R=Ce(),{proxy:s}=Ve(),U=d([]),S=d(!0),k=d(!0),E=d([]),q=d(!0),F=d(!0),I=d(0),v=d(["",""]),P=d(""),L=d([]),T=d(),z=d(),i=d({pageNum:1,pageSize:10,tableName:"",tableComment:"",dataName:""}),y=d({data:{},activeName:"domain.java"}),h=Ne({visible:!1,title:"代码预览"});ke(()=>{var e;const a=R.query.t;a!=null&&a!=P.value&&(P.value=a,i.value.pageNum=Number(R.query.pageNum),v.value=["",""],(e=T.value)==null||e.resetFields(),g())});const ae=async()=>{const a=await Ke();L.value=a.data},g=async()=>{S.value=!0;const a=await Ae(s==null?void 0:s.addDateRange(i.value,v.value));U.value=a.rows,I.value=a.total,S.value=!1},w=()=>{i.value.pageNum=1,g()},O=async a=>{const e=(a==null?void 0:a.tableId)||E.value;if(e==""){s==null||s.$modal.msgError("请选择要生成的数据");return}(a==null?void 0:a.genType)==="1"?(await Me(a.tableId),s==null||s.$modal.msgSuccess("成功生成到自定义路径："+a.genPath)):s==null||s.$download.zip("/tool/gen/batchGenCode?tableIdStr="+e,"ruoyi.zip")},le=async a=>{const e=a.tableId;await(s==null?void 0:s.$modal.confirm('确认要强制同步"'+a.tableName+'"表结构吗？')),await xe(e),s==null||s.$modal.msgSuccess("同步成功")},ne=()=>{var a;(a=z.value)==null||a.show(i.value.dataName)},oe=()=>{var a;v.value=["",""],(a=T.value)==null||a.resetFields(),w()},se=async a=>{const e=await We(a.tableId);y.value.data=e.data,h.visible=!0,y.value.activeName="domain.java"},ie=()=>{s==null||s.$modal.msgSuccess("复制成功")},de=a=>{E.value=a.map(e=>e.tableId),q.value=a.length!=1,F.value=!a.length},B=a=>{const e=(a==null?void 0:a.tableId)||E.value[0];Se.push({path:"/tool/gen-edit/index/"+e,query:{pageNum:i.value.pageNum}})},G=async a=>{const e=(a==null?void 0:a.tableId)||E.value;await(s==null?void 0:s.$modal.confirm('是否确认删除表编号为"'+e+'"的数据项？')),await Xe(e),await g(),s==null||s.$modal.msgSuccess("删除成功")};return Ee(()=>{g(),ae()}),(a,e)=>{var K,M;const Q=Ie,me=Te,C=Qe,Y=De,re=je,r=$e,ue=Ye,j=He,V=Je,pe=Ge,ce=et,c=Oe,N=Re,_e=Be,fe=ze,be=Le,ve=Fe,ge=Pe,ye=Ue,_=x("hasPermi"),we=qe,A=x("copyText");return p(),D("div",tt,[t(he,{"enter-active-class":(K=o(s))==null?void 0:K.animate.searchAnimate.enter,"leave-active-class":(M=o(s))==null?void 0:M.animate.searchAnimate.leave},{default:n(()=>[m($("div",at,[t(j,{shadow:"hover"},{default:n(()=>[t(ue,{ref_key:"queryFormRef",ref:T,model:o(i),inline:!0},{default:n(()=>[t(C,{label:"数据源",prop:"dataName"},{default:n(()=>[t(me,{modelValue:o(i).dataName,"onUpdate:modelValue":e[0]||(e[0]=l=>o(i).dataName=l),filterable:"",clearable:"",placeholder:"请选择/输入数据源名称"},{default:n(()=>[t(Q,{key:"",label:"全部",value:""}),(p(!0),D(W,null,X(o(L),l=>(p(),f(Q,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(C,{label:"表名称",prop:"tableName"},{default:n(()=>[t(Y,{modelValue:o(i).tableName,"onUpdate:modelValue":e[1]||(e[1]=l=>o(i).tableName=l),placeholder:"请输入表名称",clearable:"",onKeyup:Z(w,["enter"])},null,8,["modelValue"])]),_:1}),t(C,{label:"表描述",prop:"tableComment"},{default:n(()=>[t(Y,{modelValue:o(i).tableComment,"onUpdate:modelValue":e[2]||(e[2]=l=>o(i).tableComment=l),placeholder:"请输入表描述",clearable:"",onKeyup:Z(w,["enter"])},null,8,["modelValue"])]),_:1}),t(C,{label:"创建时间",style:{width:"308px"}},{default:n(()=>[t(re,{modelValue:o(v),"onUpdate:modelValue":e[3]||(e[3]=l=>H(v)?v.value=l:null),"value-format":"YYYY-MM-DD",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),_:1}),t(C,null,{default:n(()=>[t(r,{type:"primary",icon:"Search",onClick:w},{default:n(()=>e[12]||(e[12]=[b("搜索")])),_:1}),t(r,{icon:"Refresh",onClick:oe},{default:n(()=>e[13]||(e[13]=[b("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[J,o(k)]])]),_:1},8,["enter-active-class","leave-active-class"]),t(j,{shadow:"hover"},{header:n(()=>[t(ce,{gutter:10,class:"mb8"},{default:n(()=>[t(V,{span:1.5},{default:n(()=>[m((p(),f(r,{type:"primary",plain:"",icon:"Download",onClick:e[4]||(e[4]=l=>O())},{default:n(()=>e[14]||(e[14]=[b("生成")])),_:1})),[[_,["tool:gen:code"]]])]),_:1}),t(V,{span:1.5},{default:n(()=>[m((p(),f(r,{type:"info",plain:"",icon:"Upload",onClick:ne},{default:n(()=>e[15]||(e[15]=[b("导入")])),_:1})),[[_,["tool:gen:import"]]])]),_:1}),t(V,{span:1.5},{default:n(()=>[m((p(),f(r,{type:"success",plain:"",icon:"Edit",disabled:o(q),onClick:e[5]||(e[5]=l=>B())},{default:n(()=>e[16]||(e[16]=[b("修改")])),_:1},8,["disabled"])),[[_,["tool:gen:edit"]]])]),_:1}),t(V,{span:1.5},{default:n(()=>[m((p(),f(r,{type:"danger",plain:"",icon:"Delete",disabled:o(F),onClick:e[6]||(e[6]=l=>G())},{default:n(()=>e[17]||(e[17]=[b(" 删除 ")])),_:1},8,["disabled"])),[[_,["tool:gen:remove"]]])]),_:1}),t(pe,{showSearch:o(k),"onUpdate:showSearch":e[7]||(e[7]=l=>H(k)?k.value=l:null),onQueryTable:g},null,8,["showSearch"])]),_:1})]),default:n(()=>[m((p(),f(_e,{data:o(U),onSelectionChange:de},{default:n(()=>[t(c,{type:"selection",align:"center",width:"55"}),t(c,{label:"序号",type:"index",width:"50",align:"center"},{default:n(l=>[$("span",null,ee((o(i).pageNum-1)*o(i).pageSize+l.$index+1),1)]),_:1}),t(c,{label:"数据源",align:"center",prop:"dataName","show-overflow-tooltip":!0}),t(c,{label:"表名称",align:"center",prop:"tableName","show-overflow-tooltip":!0}),t(c,{label:"表描述",align:"center",prop:"tableComment","show-overflow-tooltip":!0}),t(c,{label:"实体",align:"center",prop:"className","show-overflow-tooltip":!0}),t(c,{label:"创建时间",align:"center",prop:"createTime",width:"160"}),t(c,{label:"更新时间",align:"center",prop:"updateTime",width:"160"}),t(c,{label:"操作",align:"center",width:"330","class-name":"small-padding fixed-width"},{default:n(l=>[t(N,{content:"预览",placement:"top"},{default:n(()=>[m(t(r,{link:"",type:"primary",icon:"View",onClick:u=>se(l.row)},null,8,["onClick"]),[[_,["tool:gen:preview"]]])]),_:2},1024),t(N,{content:"编辑",placement:"top"},{default:n(()=>[m(t(r,{link:"",type:"primary",icon:"Edit",onClick:u=>B(l.row)},null,8,["onClick"]),[[_,["tool:gen:edit"]]])]),_:2},1024),t(N,{content:"删除",placement:"top"},{default:n(()=>[m(t(r,{link:"",type:"primary",icon:"Delete",onClick:u=>G(l.row)},null,8,["onClick"]),[[_,["tool:gen:remove"]]])]),_:2},1024),t(N,{content:"同步",placement:"top"},{default:n(()=>[m(t(r,{link:"",type:"primary",icon:"Refresh",onClick:u=>le(l.row)},null,8,["onClick"]),[[_,["tool:gen:edit"]]])]),_:2},1024),t(N,{content:"生成代码",placement:"top"},{default:n(()=>[m(t(r,{link:"",type:"primary",icon:"Download",onClick:u=>O(l.row)},null,8,["onClick"]),[[_,["tool:gen:code"]]])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[we,o(S)]]),m(t(fe,{page:o(i).pageNum,"onUpdate:page":e[8]||(e[8]=l=>o(i).pageNum=l),limit:o(i).pageSize,"onUpdate:limit":e[9]||(e[9]=l=>o(i).pageSize=l),total:o(I),onPagination:g},null,8,["page","limit","total"]),[[J,o(I)>0]])]),_:1}),t(ye,{modelValue:o(h).visible,"onUpdate:modelValue":e[11]||(e[11]=l=>o(h).visible=l),title:o(h).title,width:"80%",top:"5vh","append-to-body":"",class:"scrollbar"},{default:n(()=>[t(ge,{modelValue:o(y).activeName,"onUpdate:modelValue":e[10]||(e[10]=l=>o(y).activeName=l)},{default:n(()=>[(p(!0),D(W,null,X(o(y).data,(l,u)=>(p(),f(ve,{key:l,label:u.substring(u.lastIndexOf("/")+1,u.indexOf(".vm")),name:u.substring(u.lastIndexOf("/")+1,u.indexOf(".vm"))},{default:n(()=>[m((p(),f(be,{underline:!1,icon:"DocumentCopy",style:{float:"right"}},{default:n(()=>e[18]||(e[18]=[b("  复制 ")])),_:2},1024)),[[A,l],[A,ie,"callback"]]),$("pre",null,ee(l),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue","title"]),t(Ze,{ref_key:"importRef",ref:z,onOk:w},null,512)])}}});export{St as default};
