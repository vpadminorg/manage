import{d as be,$ as ve,r as g,a0 as q,i as fe,b as He,a1 as Me,o as f,c as N,j as e,k as t,w as h,x as E,e as o,t as Y,F as U,p as F,m as k,y as m,Y as ge,a2 as We,dh as G,q as Je,R as y,a4 as Xe,T as el,di as _e,G as ll,C as al,D as tl,I as ol,a3 as sl,W as rl,v as nl,K as dl,L as il,N as ul}from"./index-UXO82rnR.js";import{E as pl}from"./el-checkbox-DqrEs51o.js";import{E as ml,a as cl}from"./el-descriptions-item-JPGxbIyD.js";/* empty css                       *//* empty css                 */import{_ as vl}from"./index-C2npmcbn.js";import{E as fl,a as gl}from"./el-table-column-MKEZIRY_.js";import{_ as _l}from"./index-Cjgvf-op.js";/* empty css               */import{_ as bl}from"./index-N3xDeOIY.js";/* empty css               *//* empty css                */import{E as yl,a as Vl}from"./el-form-item-DKWg1Omz.js";import{B as wl,U as kl,l as El,g as Al,u as Nl,a as hl,d as Tl}from"./UpgradeProDialog-Cn0DQiQv.js";import{E as Cl}from"./index-BTmQHi_c.js";import{E as jl}from"./index-BwbVV6-O.js";import{E as Ul}from"./index-ennNA2X2.js";import{E as Fl,a as Pl}from"./index-Cmm1733V.js";import"./_initCloneObject-Dmlh6vfv.js";/* empty css                */import"./index-613SZYvd.js";import"./_baseClone-CaGvglyq.js";/* empty css                    */import"./index-IwqdL5S4.js";import"./index-COneqk6M.js";const Rl=I=>(dl("data-v-d3d60bb9"),I=I(),il(),I),Sl={class:"p-2"},Dl={class:"mb-[10px]"},$l={class:"action-button-group"},ql={class:"dialog-footer"},Il={style:{"word-break":"break-all"}},Ll={class:"dialog-footer"},zl=Rl(()=>E("span",{class:"text-red-500"},"是否删除你的远程仓库和网站",-1)),Bl={class:"dialog-footer"},xl=be({name:"Project"}),Kl=be({...xl,setup(I){const{proxy:i}=el(),{vpa_repo_type:P,sys_yes_no:A}=ve(i==null?void 0:i.useDict("vpa_repo_type","sys_yes_no")),re=g([]),T=g(!1),O=g(!0),Z=g(!0),Q=g([]),ye=g(!0),Ve=g(!0),H=g(0),M=g(!1),ne=g(),W=g(),we=/^(https?:\/\/)([a-zA-Z0-9.-]+)(:[0-9]+)?$/,R=g(!0),ke=(s,a,n)=>{if(!a)n(new Error("请输入仓库地址"));else{const d=/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;if(!d.test(a))n(new Error("请输入有效的仓库地址"));else{const D=/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\.git$/,$=/^https:\/\/gitlab\.com\/[\w.-]+\/[\w.-]+\.git$/;switch(r.value.repType){case"1":D.test(a)||n(new Error("GitHub 仓库地址格式不正确"));break;case"2":$.test(a)||n(new Error("GitLab 仓库地址格式不正确"));break;case"3":d.test(a)||n(new Error("请输入有效的仓库地址"));break;default:d.test(a)||n(new Error("请输入有效的仓库地址"))}n()}}},L=(s,a,n)=>{r.value.isAdmin==="Y"&&!a?n(new Error("域名不能为空")):a&&!we.test(a)?n(new Error("域名格式不正确，应为 http(s)://domain:port")):n()},z=q({visible:!1,title:"修改项目配置"}),c=g({id:"",projectName:"",repType:"",userName:"",repositoryAddress:"",accessToken:"",isFullControl:"",domain:""}),Ee={accessToken:[{required:!0,message:"AccessToken不能为空",trigger:"blur"}],isFullControl:[{required:!0,message:"完全控制不能为空",trigger:"change"}],domain:[{validator:L,trigger:"blur"}]},J=g(),_=q({visible:!1,data:{}}),u=q({visible:!1,isEdit:!1,title:""}),v=q({visible:!1,ids:"",deleteRemote:!1,buttonLoading:!1}),de={id:void 0,projectName:void 0,repType:void 0,userName:void 0,repositoryAddress:void 0,accessToken:void 0,isFullControl:"Y",isAdmin:"N",domain:void 0},Ae=q({form:{...de},queryParams:{pageNum:1,pageSize:10,projectName:void 0,deptId:void 0,userId:void 0,repType:void 0,userName:void 0,repositoryAddress:void 0,domain:void 0,params:{}},rules:{id:[{required:!0,message:"主键不能为空",trigger:"blur"}],projectName:[{required:!0,message:"项目名称不能为空",trigger:"blur"}],repType:[{required:!0,message:"仓库类型不能为空",trigger:"change"}],userName:[{required:!0,message:"用户名不能为空",trigger:"blur"}],repositoryAddress:[{required:!0,message:"仓库地址不能为空",trigger:"blur"},{validator:ke,trigger:"blur"}],accessToken:[{required:!0,message:"AccessToken不能为空",trigger:"blur"}],isFullControl:[{required:!0,message:"完全控制不能为空",trigger:"change"}],isAdmin:[{required:!0,message:"管理后台不能为空",trigger:"change"}],domain:[{validator:L,trigger:"blur"}]}}),{queryParams:p,form:r,rules:X}=ve(Ae),ee=s=>{s==="Y"?X.value.domain=[{validator:L,trigger:"blur"}]:X.value.domain=[{validator:L,trigger:"blur"}]};fe(()=>r.value.isAdmin,s=>{ee(s)});const C=async()=>{O.value=!0;try{const s=await El(p.value);re.value=s.rows,H.value=s.total}finally{O.value=!1}},B=async()=>{await C(),await Ne()},Ne=async()=>{const s=await Al();if(s.code===200&&s.data){let a=g(null);a.value=s.data,_e("/prod-api/resource/sse"),M.value=!0,G.value=a.value.projectProgress}else M.value=!1};He(async()=>{await B()});const he=()=>{le(),u.visible=!1},le=()=>{var s;r.value={...de},(s=W.value)==null||s.resetFields(),R.value=!0,u.isEdit=!1,ee(r.value.isAdmin)},S=()=>{p.value.pageNum=1,B()},Te=()=>{var s;(s=ne.value)==null||s.resetFields(),B()},Ce=s=>{Q.value=s.map(a=>a.id),ye.value=s.length!=1,Ve.value=!s.length},je=()=>{le(),u.visible=!0,u.title="添加项目配置",u.isEdit=!1,R.value=!0},Ue=s=>{le();const a=s.id||Q.value[0];getProject(a).then(n=>{Object.assign(r.value,n.data),u.visible=!0,u.title="修改项目配置",u.isEdit=!0,R.value=!1})},Fe=()=>{var s;z.visible=!1,(s=J.value)==null||s.resetFields()},Pe=()=>{var s;(s=J.value)==null||s.validate(async a=>{if(a){T.value=!0;try{await Nl(c.value),i==null||i.$modal.msgSuccess("修改成功"),z.visible=!1,await C()}catch{i==null||i.$modal.msgError("修改失败")}finally{T.value=!1}}})},Re=s=>{_.data={...s},_.visible=!0},Se=()=>{var s;(s=W.value)==null||s.validate(async a=>{if(a){T.value=!0,_e("/prod-api/resource/sse");try{await hl(r.value),i==null||i.$modal.msgSuccess("操作成功"),u.visible=!1,await C()}catch{i==null||i.$modal.msgError("操作失败")}finally{T.value=!1}}})},De=async s=>{const a=(s==null?void 0:s.id)||Q.value;v.ids=a.toString(),v.visible=!0},$e=()=>{v.deleteRemote=!1,v.buttonLoading=!1},qe=async()=>{try{v.buttonLoading=!0,await Tl(v.ids,v.deleteRemote),i==null||i.$modal.msgSuccess("删除成功"),v.visible=!1,await C()}catch{i==null||i.$modal.msgError("删除失败")}finally{v.buttonLoading=!1}},Ie=()=>{if(r.value.projectName&&r.value.userName&&r.value.repType&&R.value){const s={1:"https://github.com",2:"https://gitlab.com",3:"https://other.com"}[r.value.repType]||"";s?r.value.repositoryAddress=`${s}/${r.value.userName}/${r.value.projectName}.git`:console.warn(`未知的仓库类型: ${r.value.repType}`)}};fe(()=>[r.value.projectName,r.value.userName,r.value.repType],()=>{u.isEdit||Ie()},{deep:!0});const Le=()=>{R.value=!1},ze=()=>{C()},Be=()=>{};return(s,a)=>{var pe,me;const n=ll,d=yl,D=al,$=tl,b=ol,ae=Vl,ie=Cl,ue=jl,xe=bl,Ke=Ul,V=fl,j=_l,te=sl,Ye=gl,Ge=vl,oe=Fl,se=Pl,x=rl,w=ml,Oe=cl,Ze=pl,K=Me("hasPermi"),Qe=nl;return f(),N("div",Sl,[e(We,{"enter-active-class":(pe=o(i))==null?void 0:pe.animate.searchAnimate.enter,"leave-active-class":(me=o(i))==null?void 0:me.animate.searchAnimate.leave},{default:t(()=>[h(E("div",Dl,[e(ie,{shadow:"hover"},{default:t(()=>[e(ae,{ref_key:"queryFormRef",ref:ne,model:o(p),inline:!0},{default:t(()=>[e(d,{label:"项目名称",prop:"projectName"},{default:t(()=>[e(n,{modelValue:o(p).projectName,"onUpdate:modelValue":a[0]||(a[0]=l=>o(p).projectName=l),placeholder:"请输入项目名称",clearable:"",onKeyup:Y(S,["enter"])},null,8,["modelValue"])]),_:1}),e(d,{label:"仓库类型",prop:"repType"},{default:t(()=>[e($,{modelValue:o(p).repType,"onUpdate:modelValue":a[1]||(a[1]=l=>o(p).repType=l),placeholder:"请选择仓库类型",clearable:""},{default:t(()=>[(f(!0),N(U,null,F(o(P),l=>(f(),k(D,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"用户名",prop:"userName"},{default:t(()=>[e(n,{modelValue:o(p).userName,"onUpdate:modelValue":a[2]||(a[2]=l=>o(p).userName=l),placeholder:"请输入用户名",clearable:"",onKeyup:Y(S,["enter"])},null,8,["modelValue"])]),_:1}),e(d,{label:"仓库地址",prop:"repositoryAddress"},{default:t(()=>[e(n,{modelValue:o(p).repositoryAddress,"onUpdate:modelValue":a[3]||(a[3]=l=>o(p).repositoryAddress=l),placeholder:"请输入仓库地址",clearable:"",onKeyup:Y(S,["enter"])},null,8,["modelValue"])]),_:1}),e(d,{label:"域名",prop:"domain"},{default:t(()=>[e(n,{modelValue:o(p).domain,"onUpdate:modelValue":a[4]||(a[4]=l=>o(p).domain=l),placeholder:"请输入域名",clearable:"",onKeyup:Y(S,["enter"])},null,8,["modelValue"])]),_:1}),e(d,null,{default:t(()=>[e(b,{type:"primary",icon:"Search",onClick:S},{default:t(()=>[m("搜索")]),_:1}),e(b,{icon:"Refresh",onClick:Te},{default:t(()=>[m("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[ge,Z.value]])]),_:1},8,["enter-active-class","leave-active-class"]),e(ie,{shadow:"never"},{header:t(()=>[e(Ke,{gutter:10,class:"mb8"},{default:t(()=>[e(ue,{span:1.5},{default:t(()=>[h((f(),k(b,{type:"primary",plain:"",icon:"Plus",onClick:je},{default:t(()=>[m("新增")]),_:1})),[[K,["vpadmin:project:add"]]])]),_:1}),e(ue,{span:8},{default:t(()=>[M.value&&o(G)?(f(),k(wl,{key:0,percent:o(G).percent,message:o(G).message},null,8,["percent","message"])):Je("",!0)]),_:1}),e(xe,{showSearch:Z.value,"onUpdate:showSearch":a[5]||(a[5]=l=>Z.value=l),onQueryTable:B},null,8,["showSearch"])]),_:1})]),default:t(()=>[h((f(),k(Ye,{data:re.value,onSelectionChange:Ce},{default:t(()=>[e(V,{type:"selection",width:"55",align:"center"}),e(V,{label:"项目名称",align:"center",prop:"projectName"}),e(V,{label:"仓库类型",align:"center",prop:"repType"},{default:t(l=>[e(j,{options:o(P),value:l.row.repType},null,8,["options","value"])]),_:1}),e(V,{label:"用户名",align:"center",prop:"userName"}),e(V,{label:"仓库地址",align:"center",prop:"repositoryAddress"}),e(V,{label:"管理后台",align:"center",prop:"isAdmin"},{default:t(l=>[e(j,{options:o(A),value:l.row.isAdmin},null,8,["options","value"])]),_:1}),e(V,{label:"完全控制",align:"center",prop:"isFullControl"},{default:t(l=>[e(j,{options:o(A),value:l.row.isFullControl},null,8,["options","value"])]),_:1}),e(V,{label:"域名",align:"center",prop:"domain"}),e(V,{label:"操作",align:"center","class-name":"small-padding fixed-width action-cell",width:"160px"},{default:t(l=>[E("div",$l,[e(te,{content:"详情",placement:"top"},{default:t(()=>[h(e(b,{link:"",type:"primary",icon:"View",onClick:ce=>Re(l.row)},null,8,["onClick"]),[[K,["vpadmin:project:query"]]])]),_:2},1024),e(te,{content:"修改",placement:"top"},{default:t(()=>[h(e(b,{link:"",type:"primary",icon:"Edit",onClick:ce=>Ue(l.row)},null,8,["onClick"]),[[K,["vpadmin:project:edit"]]])]),_:2},1024),e(te,{content:"删除",placement:"top"},{default:t(()=>[h(e(b,{link:"",type:"primary",icon:"Delete",onClick:ce=>De(l.row)},null,8,["onClick"]),[[K,["vpadmin:project:remove"]]])]),_:2},1024),e(kl,{"payment-platform":"ko-fi","payment-type":"upgrade","iframe-url":"https://ko-fi.com/vpadmin/?hidefeed=true&widget=true&embed=true&preview=true","payment-name":l.row.projectName,"project-id":l.row.id,size:"small",onPaymentSuccess:ze,onPaymentCancelled:Be},null,8,["payment-name","project-id"])])]),_:1})]),_:1},8,["data"])),[[Qe,O.value]]),h(e(Ge,{page:o(p).pageNum,"onUpdate:page":a[6]||(a[6]=l=>o(p).pageNum=l),limit:o(p).pageSize,"onUpdate:limit":a[7]||(a[7]=l=>o(p).pageSize=l),total:H.value,onPagination:C},null,8,["page","limit","total"]),[[ge,H.value>0]])]),_:1}),e(x,{modelValue:u.visible,"onUpdate:modelValue":a[16]||(a[16]=l=>u.visible=l),title:u.title,width:"500px","append-to-body":""},{footer:t(()=>[E("div",ql,[e(b,{loading:T.value,type:"primary",onClick:Se},{default:t(()=>[m("确 定")]),_:1},8,["loading"]),e(b,{onClick:he},{default:t(()=>[m("取 消")]),_:1})])]),default:t(()=>[e(ae,{ref_key:"projectFormRef",ref:W,model:o(r),rules:o(X),"label-width":"100px"},{default:t(()=>[e(d,{label:"项目名称",prop:"projectName"},{default:t(()=>[e(n,{modelValue:o(r).projectName,"onUpdate:modelValue":a[8]||(a[8]=l=>o(r).projectName=l),placeholder:"请输入项目名称",disabled:u.isEdit},null,8,["modelValue","disabled"])]),_:1}),e(d,{label:"仓库类型",prop:"repType"},{default:t(()=>[e($,{modelValue:o(r).repType,"onUpdate:modelValue":a[9]||(a[9]=l=>o(r).repType=l),placeholder:"请选择仓库类型",disabled:u.isEdit},{default:t(()=>[(f(!0),N(U,null,F(o(P),l=>(f(),k(D,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),e(d,{label:"用户名",prop:"userName"},{default:t(()=>[e(n,{modelValue:o(r).userName,"onUpdate:modelValue":a[10]||(a[10]=l=>o(r).userName=l),placeholder:"请输入用户名",disabled:u.isEdit},null,8,["modelValue","disabled"])]),_:1}),e(d,{label:"仓库地址",prop:"repositoryAddress"},{default:t(()=>[e(n,{modelValue:o(r).repositoryAddress,"onUpdate:modelValue":a[11]||(a[11]=l=>o(r).repositoryAddress=l),placeholder:"请输入仓库地址",disabled:u.isEdit,onInput:Le},null,8,["modelValue","disabled"])]),_:1}),e(d,{label:"AccessToken",prop:"accessToken"},{default:t(()=>[e(n,{modelValue:o(r).accessToken,"onUpdate:modelValue":a[12]||(a[12]=l=>o(r).accessToken=l),placeholder:"请输入AccessToken"},null,8,["modelValue"])]),_:1}),e(d,{label:"完全控制",prop:"isFullControl"},{default:t(()=>[e(se,{modelValue:o(r).isFullControl,"onUpdate:modelValue":a[13]||(a[13]=l=>o(r).isFullControl=l)},{default:t(()=>[(f(!0),N(U,null,F(o(A),l=>(f(),k(oe,{key:l.value,value:l.value},{default:t(()=>[m(y(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"管理后台",prop:"isAdmin"},{default:t(()=>[e(se,{modelValue:o(r).isAdmin,"onUpdate:modelValue":a[14]||(a[14]=l=>o(r).isAdmin=l),onChange:ee},{default:t(()=>[(f(!0),N(U,null,F(o(A),l=>(f(),k(oe,{key:l.value,value:l.value},{default:t(()=>[m(y(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"域名",prop:"domain",class:Xe({"required-field":o(r).isAdmin==="Y","optional-field":o(r).isAdmin==="N"})},{default:t(()=>[e(n,{modelValue:o(r).domain,"onUpdate:modelValue":a[15]||(a[15]=l=>o(r).domain=l),placeholder:o(r).isAdmin==="Y"?"http(s)://domain:port（必填）":"http(s)://domain:port（选填）"},null,8,["modelValue","placeholder"])]),_:1},8,["class"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),e(x,{modelValue:_.visible,"onUpdate:modelValue":a[17]||(a[17]=l=>_.visible=l),title:"项目详情",width:"500px","append-to-body":""},{default:t(()=>[e(Oe,{column:1,border:""},{default:t(()=>[e(w,{label:"项目名称"},{default:t(()=>[m(y(_.data.projectName),1)]),_:1}),e(w,{label:"仓库类型"},{default:t(()=>[e(j,{options:o(P),value:_.data.repType},null,8,["options","value"])]),_:1}),e(w,{label:"用户名"},{default:t(()=>[m(y(_.data.userName),1)]),_:1}),e(w,{label:"仓库地址"},{default:t(()=>[m(y(_.data.repositoryAddress),1)]),_:1}),e(w,{label:"AccessToken"},{default:t(()=>[E("div",Il,y(_.data.accessToken),1)]),_:1}),e(w,{label:"完全控制"},{default:t(()=>[e(j,{options:o(A),value:_.data.isFullControl},null,8,["options","value"])]),_:1}),e(w,{label:"管理后台"},{default:t(()=>[e(j,{options:o(A),value:_.data.isAdmin},null,8,["options","value"])]),_:1}),e(w,{label:"域名"},{default:t(()=>[m(y(_.data.domain),1)]),_:1}),e(w,{label:"客户端ID"},{default:t(()=>[m(y(_.data.clientId),1)]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(x,{modelValue:z.visible,"onUpdate:modelValue":a[25]||(a[25]=l=>z.visible=l),title:"修改项目配置",width:"500px","append-to-body":""},{footer:t(()=>[E("div",Ll,[e(b,{loading:T.value,type:"primary",onClick:Pe},{default:t(()=>[m("确 定")]),_:1},8,["loading"]),e(b,{onClick:Fe},{default:t(()=>[m("取 消")]),_:1})])]),default:t(()=>[e(ae,{ref_key:"editFormRef",ref:J,model:c.value,rules:Ee,"label-width":"100px"},{default:t(()=>[e(d,{label:"项目名称",prop:"projectName"},{default:t(()=>[e(n,{modelValue:c.value.projectName,"onUpdate:modelValue":a[18]||(a[18]=l=>c.value.projectName=l),disabled:""},null,8,["modelValue"])]),_:1}),e(d,{label:"仓库类型",prop:"repType"},{default:t(()=>[e($,{modelValue:c.value.repType,"onUpdate:modelValue":a[19]||(a[19]=l=>c.value.repType=l),disabled:""},{default:t(()=>[(f(!0),N(U,null,F(o(P),l=>(f(),k(D,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"用户名",prop:"userName"},{default:t(()=>[e(n,{modelValue:c.value.userName,"onUpdate:modelValue":a[20]||(a[20]=l=>c.value.userName=l),disabled:""},null,8,["modelValue"])]),_:1}),e(d,{label:"仓库地址",prop:"repositoryAddress"},{default:t(()=>[e(n,{modelValue:c.value.repositoryAddress,"onUpdate:modelValue":a[21]||(a[21]=l=>c.value.repositoryAddress=l),disabled:""},null,8,["modelValue"])]),_:1}),e(d,{label:"AccessToken",prop:"accessToken"},{default:t(()=>[e(n,{modelValue:c.value.accessToken,"onUpdate:modelValue":a[22]||(a[22]=l=>c.value.accessToken=l),placeholder:"请输入AccessToken"},null,8,["modelValue"])]),_:1}),e(d,{label:"完全控制",prop:"isFullControl"},{default:t(()=>[e(se,{modelValue:c.value.isFullControl,"onUpdate:modelValue":a[23]||(a[23]=l=>c.value.isFullControl=l)},{default:t(()=>[(f(!0),N(U,null,F(o(A),l=>(f(),k(oe,{key:l.value,value:l.value},{default:t(()=>[m(y(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"域名",prop:"domain"},{default:t(()=>[e(n,{modelValue:c.value.domain,"onUpdate:modelValue":a[24]||(a[24]=l=>c.value.domain=l),placeholder:"请输入域名"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(x,{modelValue:v.visible,"onUpdate:modelValue":a[28]||(a[28]=l=>v.visible=l),title:"确认删除",width:"300px",onOpen:$e},{footer:t(()=>[E("div",Bl,[e(b,{onClick:a[27]||(a[27]=l=>v.visible=!1)},{default:t(()=>[m("取 消")]),_:1}),e(b,{loading:v.buttonLoading,type:"primary",onClick:qe},{default:t(()=>[m("确 定")]),_:1},8,["loading"])])]),default:t(()=>[E("div",null,'是否确认删除项目配置编号为"'+y(v.ids)+'"的数据项？',1),e(Ze,{modelValue:v.deleteRemote,"onUpdate:modelValue":a[26]||(a[26]=l=>v.deleteRemote=l),class:"mt-3"},{default:t(()=>[zl]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}}),fa=ul(Kl,[["__scopeId","data-v-d3d60bb9"]]);export{fa as default};
