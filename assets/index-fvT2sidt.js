import{aw as c,d as n,aE as p,O as a,ba as f,o as y,p as g,k as d,aP as m,a2 as w,e as o,ae as _,aM as v,aR as b,aV as R}from"./index-D4nD6lq3.js";const C=Symbol("rowContextKey"),S=["start","center","end","space-around","space-between","space-evenly"],x=["top","middle","bottom"],h=c({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:S,default:"start"},align:{type:String,values:x}}),j=n({name:"ElRow"}),E=n({...j,props:h,setup(r){const t=r,s=p("row"),l=a(()=>t.gutter);f(C,{gutter:l});const i=a(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),u=a(()=>[s.b(),s.is(`justify-${t.justify}`,t.justify!=="start"),s.is(`align-${t.align}`,!!t.align)]);return(e,k)=>(y(),g(v(e.tag),{class:w(o(u)),style:_(o(i))},{default:d(()=>[m(e.$slots,"default")]),_:3},8,["class","style"]))}});var $=b(E,[["__file","row.vue"]]);const P=R($);export{P as E,C as r};
