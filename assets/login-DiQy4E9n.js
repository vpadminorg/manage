import{d as D,h as T,r as d,i as H,b as j,o as c,c as _,j as t,k as a,e as s,m as V,F as J,p as O,q as E,t as U,x as v,y as $,z as P,A as Q,B as W,H as X,E as Y,C as Z,_ as ee,D as te,G as oe,I as ae,J as le,K as ne,L as se,a as re,M as ie,N as ue}from"./index-SwfHvmsR.js";import{E as de,a as ce}from"./el-form-item-BTGfmHo9.js";import{E as me}from"./el-checkbox-gjRiKN0S.js";import{a as pe}from"./auth-B-K-TnSK.js";import"./_baseClone-D_rg-wPN.js";import"./_initCloneObject-DuYGRlJO.js";const B=I=>(ne("data-v-4e00fc8b"),I=I(),se(),I),ge={class:"login"},fe=B(()=>v("h3",{class:"title"},"VPADMIN SSG Sites Administrator Management System",-1)),_e={class:"login-code"},ve=["src"],Ie={key:0},be={key:1},ye={key:0,style:{float:"right"}},Se=B(()=>v("div",{class:"el-login-footer"},[v("span",null,"Copyright © 2018-2024 疯狂的狮子Li All Rights Reserved.")],-1)),ke=D({__name:"login",setup(I){const N=T(),h=re(),o=d({tenantId:"000001",username:"",password:"",rememberMe:!1,code:"",uuid:""}),q={tenantId:[{required:!0,trigger:"blur",message:"请输入您的租户编号"}],username:[{required:!0,trigger:"blur",message:"请输入您的账号"}],password:[{required:!0,trigger:"blur",message:"请输入您的密码"}],code:[{required:!0,trigger:"change",message:"请输入验证码"}]},x=d(""),g=d(!1),b=d(!0),y=d(!0),F=d(!1),M=d("/"),L=d(),f=d([]);H(()=>h.currentRoute.value,r=>{M.value=r.query&&decodeURIComponent(r.query.redirect)},{immediate:!0});const S=()=>{var r;(r=L.value)==null||r.validate(async(e,m)=>{if(e){g.value=!0,o.value.rememberMe?(localStorage.setItem("tenantId",String(o.value.tenantId)),localStorage.setItem("username",String(o.value.username)),localStorage.setItem("password",String(o.value.password)),localStorage.setItem("rememberMe",String(o.value.rememberMe))):(localStorage.removeItem("tenantId"),localStorage.removeItem("username"),localStorage.removeItem("password"),localStorage.removeItem("rememberMe"));const[n]=await ie(N.login(o.value));if(n)g.value=!1,b.value&&await k();else{const w=M.value||"/";await h.push(w),g.value=!1}}else console.log("error submit!",m)})},k=async()=>{const r=await Q(),{data:e}=r;b.value=e.captchaEnabled===void 0?!0:e.captchaEnabled,b.value&&(x.value="data:image/gif;base64,"+e.img,o.value.uuid=e.uuid)},R=()=>{const r=localStorage.getItem("tenantId"),e=localStorage.getItem("username"),m=localStorage.getItem("password"),n=localStorage.getItem("rememberMe");o.value={tenantId:r===null?String(o.value.tenantId):r,username:e===null?String(o.value.username):e,password:String(m===null?o.value.password:m),rememberMe:n===null?!1:!!n}},A=async()=>{const{data:r}=await W();y.value=r.tenantEnabled===void 0?!0:r.tenantEnabled,y.value&&(f.value=r.voList,f.value!=null&&f.value.length!==0&&(o.value.tenantId=f.value[0].tenantId))},u=r=>{pe(r,o.value.tenantId).then(e=>{e.code===X.SUCCESS?window.location.href=e.data:Y.error(e.msg)})};return j(()=>{k(),A(),R()}),(r,e)=>{const m=Z,n=ee,w=te,p=de,C=oe,G=me,i=ae,z=le("router-link"),K=ce;return c(),_("div",ge,[t(K,{ref_key:"loginRef",ref:L,model:s(o),rules:q,class:"login-form"},{default:a(()=>[fe,s(y)?(c(),V(p,{key:0,prop:"tenantId"},{default:a(()=>[t(w,{modelValue:s(o).tenantId,"onUpdate:modelValue":e[0]||(e[0]=l=>s(o).tenantId=l),filterable:"",placeholder:"请选择/输入公司名称",style:{width:"100%"}},{prefix:a(()=>[t(n,{"icon-class":"company",class:"el-input__icon input-icon"})]),default:a(()=>[(c(!0),_(J,null,O(s(f),l=>(c(),V(m,{key:l.tenantId,label:l.companyName,value:l.tenantId},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):E("",!0),t(p,{prop:"username"},{default:a(()=>[t(C,{modelValue:s(o).username,"onUpdate:modelValue":e[1]||(e[1]=l=>s(o).username=l),type:"text",size:"large","auto-complete":"off",placeholder:"账号"},{prefix:a(()=>[t(n,{"icon-class":"user",class:"el-input__icon input-icon"})]),_:1},8,["modelValue"])]),_:1}),t(p,{prop:"password"},{default:a(()=>[t(C,{modelValue:s(o).password,"onUpdate:modelValue":e[2]||(e[2]=l=>s(o).password=l),type:"password",size:"large","auto-complete":"off",placeholder:"密码",onKeyup:U(S,["enter"])},{prefix:a(()=>[t(n,{"icon-class":"password",class:"el-input__icon input-icon"})]),_:1},8,["modelValue"])]),_:1}),s(b)?(c(),V(p,{key:1,prop:"code"},{default:a(()=>[t(C,{modelValue:s(o).code,"onUpdate:modelValue":e[3]||(e[3]=l=>s(o).code=l),size:"large","auto-complete":"off",placeholder:"验证码",style:{width:"63%"},onKeyup:U(S,["enter"])},{prefix:a(()=>[t(n,{"icon-class":"validCode",class:"el-input__icon input-icon"})]),_:1},8,["modelValue"]),v("div",_e,[v("img",{src:s(x),class:"login-code-img",onClick:k},null,8,ve)])]),_:1})):E("",!0),t(G,{modelValue:s(o).rememberMe,"onUpdate:modelValue":e[4]||(e[4]=l=>s(o).rememberMe=l),style:{margin:"0 0 25px 0"}},{default:a(()=>[$("记住密码")]),_:1},8,["modelValue"]),t(p,{style:{float:"right"}},{default:a(()=>[t(i,{circle:"",title:"微信登录",onClick:e[5]||(e[5]=l=>u("wechat_open"))},{default:a(()=>[t(n,{"icon-class":"wechat"})]),_:1}),t(i,{circle:"",title:"MaxKey登录",onClick:e[6]||(e[6]=l=>u("maxkey"))},{default:a(()=>[t(n,{"icon-class":"maxkey"})]),_:1}),t(i,{circle:"",title:"TopIam登录",onClick:e[7]||(e[7]=l=>u("topiam"))},{default:a(()=>[t(n,{"icon-class":"topiam"})]),_:1}),t(i,{circle:"",title:"Gitee登录",onClick:e[8]||(e[8]=l=>u("gitee"))},{default:a(()=>[t(n,{"icon-class":"gitee"})]),_:1}),t(i,{circle:"",title:"Github登录",onClick:e[9]||(e[9]=l=>u("github"))},{default:a(()=>[t(n,{"icon-class":"github"})]),_:1}),t(i,{circle:"",title:"Gitlab登录",onClick:e[10]||(e[10]=l=>u("gitlab"))},{default:a(()=>[t(n,{"icon-class":"gitlab"})]),_:1}),t(i,{circle:"",title:"AFDIAN登录",onClick:e[11]||(e[11]=l=>u("afdian"))},{default:a(()=>[t(n,{"icon-class":"afdian"})]),_:1}),t(i,{circle:"",title:"Google登录",onClick:e[12]||(e[12]=l=>u("google"))},{default:a(()=>[t(n,{"icon-class":"google"})]),_:1}),t(i,{circle:"",title:"Facebook登录",onClick:e[13]||(e[13]=l=>u("facebook"))},{default:a(()=>[t(n,{"icon-class":"facebook"})]),_:1})]),_:1}),t(p,{style:{width:"100%"}},{default:a(()=>[t(i,{loading:s(g),size:"large",type:"primary",style:{width:"100%"},onClick:P(S,["prevent"])},{default:a(()=>[s(g)?(c(),_("span",be,"登 录 中...")):(c(),_("span",Ie,"登 录"))]),_:1},8,["loading"]),s(F)?(c(),_("div",ye,[t(z,{class:"link-type",to:"/register"},{default:a(()=>[$("立即注册")]),_:1})])):E("",!0)]),_:1})]),_:1},8,["model"]),Se])}}}),Me=ue(ke,[["__scopeId","data-v-4e00fc8b"]]);export{Me as default};
