import{d as y,ae as N,Q as C,r as c,o as I,m as R,k as l,j as e,e as a,y as s,G as U,I as q,T as v}from"./index-UXO82rnR.js";import{E as h,a as w}from"./el-form-item-DKWg1Omz.js";/* empty css                       *//* empty css                 */import{f as B}from"./index-2vxSN0GH.js";import{E as F,a as T}from"./index-Cmm1733V.js";const A=y({__name:"userInfo",props:{user:N.any.isRequired},setup(g){const p=g,t=C(()=>p.user),{proxy:n}=v(),i=c(),b=c({nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}),V=()=>{var m;(m=i.value)==null||m.validate(async o=>{o&&(await B(p.user),n==null||n.$modal.msgSuccess("修改成功"))})},k=()=>{n==null||n.$tab.closePage()};return(m,o)=>{const d=U,u=h,_=F,E=T,f=q,x=w;return I(),R(x,{ref_key:"userRef",ref:i,model:a(t),rules:a(b),"label-width":"80px"},{default:l(()=>[e(u,{label:"用户昵称",prop:"nickName"},{default:l(()=>[e(d,{modelValue:a(t).nickName,"onUpdate:modelValue":o[0]||(o[0]=r=>a(t).nickName=r),maxlength:"30"},null,8,["modelValue"])]),_:1}),e(u,{label:"手机号码",prop:"phonenumber"},{default:l(()=>[e(d,{modelValue:a(t).phonenumber,"onUpdate:modelValue":o[1]||(o[1]=r=>a(t).phonenumber=r),maxlength:"11"},null,8,["modelValue"])]),_:1}),e(u,{label:"邮箱",prop:"email"},{default:l(()=>[e(d,{modelValue:a(t).email,"onUpdate:modelValue":o[2]||(o[2]=r=>a(t).email=r),maxlength:"50"},null,8,["modelValue"])]),_:1}),e(u,{label:"性别"},{default:l(()=>[e(E,{modelValue:a(t).sex,"onUpdate:modelValue":o[3]||(o[3]=r=>a(t).sex=r)},{default:l(()=>[e(_,{value:"0"},{default:l(()=>[s("男")]),_:1}),e(_,{value:"1"},{default:l(()=>[s("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(u,null,{default:l(()=>[e(f,{type:"primary",onClick:V},{default:l(()=>[s("保存")]),_:1}),e(f,{type:"danger",onClick:k},{default:l(()=>[s("关闭")]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{A as _};
