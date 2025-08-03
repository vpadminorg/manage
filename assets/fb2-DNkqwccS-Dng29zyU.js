const B=p=>p?p.replace(/[\t\n\f\r ]+/g," ").replace(/^[\t\n\f\r ]+/,"").replace(/[\t\n\f\r ]+$/,""):"",u=p=>B(p==null?void 0:p.textContent),S={XLINK:"http://www.w3.org/1999/xlink",EPUB:"http://www.idpf.org/2007/ops"},T={XML:"application/xml",XHTML:"application/xhtml+xml"},l={strong:["strong","self"],emphasis:["em","self"],style:["span","self"],a:"anchor",strikethrough:["s","self"],sub:["sub","self"],sup:["sup","self"],code:["code","self"],image:"image"},E={tr:["tr",{th:["th",l,["colspan","rowspan","align","valign"]],td:["td",l,["colspan","rowspan","align","valign"]]},["align"]]},N={epigraph:["blockquote"],subtitle:["h2",l],"text-author":["p",l],date:["p",l],stanza:"stanza"},L={title:["header",{p:["h1",l],"empty-line":["br"]}],epigraph:["blockquote","self"],image:"image",annotation:["aside"],section:["section","self"],p:["p",l],poem:["blockquote",N],subtitle:["h2",l],cite:["blockquote","self"],"empty-line":["br"],table:["table",E],"text-author":["p",l]};N.epigraph.push(L);const D={image:"image",title:["section",{p:["h1",l],"empty-line":["br"]}],epigraph:["section",L],section:["section",L]};class ${constructor(t){this.fb2=t,this.doc=document.implementation.createDocument(S.XHTML,"html"),this.bins=new Map(Array.from(this.fb2.getElementsByTagName("binary"),n=>[n.id,n]))}getImageSrc(t){const n=t.getAttributeNS(S.XLINK,"href");if(!n)return"data:,";const[,a]=n.split("#");if(!a)return n;const s=this.bins.get(a);return s?`data:${s.getAttribute("content-type")};base64,${s.textContent}`:n}image(t){const n=this.doc.createElement("img");return n.alt=t.getAttribute("alt"),n.title=t.getAttribute("title"),n.setAttribute("src",this.getImageSrc(t)),n}anchor(t){const n=this.convert(t,{a:["a",l]});return n.setAttribute("href",t.getAttributeNS(S.XLINK,"href")),t.getAttribute("type")==="note"&&n.setAttributeNS(S.EPUB,"epub:type","noteref"),n}stanza(t){const n=this.convert(t,{stanza:["p",{title:["header",{p:["strong",l],"empty-line":["br"]}],subtitle:["p",l]}]});for(const a of t.children)a.nodeName==="v"&&(n.append(this.doc.createTextNode(a.textContent)),n.append(this.doc.createElement("br")));return n}convert(t,n){if(t.nodeType===3)return this.doc.createTextNode(t.textContent);if(t.nodeType===4)return this.doc.createCDATASection(t.textContent);if(t.nodeType===8)return this.doc.createComment(t.textContent);const a=n==null?void 0:n[t.nodeName];if(!a)return null;if(typeof a=="string")return this[a](t);const[s,d,m]=a,f=this.doc.createElement(s);if(t.id&&(f.id=t.id),f.classList.add(t.nodeName),Array.isArray(m))for(const h of m){const x=t.getAttribute(h);x&&f.setAttribute(h,x)}const A=d==="self"?n:d;let y=t.firstChild;for(;y;){const h=this.convert(y,A);h&&f.append(h),y=y.nextSibling}return f}}const O=async p=>{var t;const n=await p.arrayBuffer(),a=new TextDecoder("utf-8").decode(n),s=new DOMParser,d=s.parseFromString(a,T.XML),m=d.xmlEncoding||((t=a.match(/^<\?xml\s+version\s*=\s*["']1.\d+"\s+encoding\s*=\s*["']([A-Za-z0-9._-]*)["']/))==null?void 0:t[1]);if(m&&m.toLowerCase()!=="utf-8"){const f=new TextDecoder(m).decode(n);return s.parseFromString(f,T.XML)}return d},X=URL.createObjectURL(new Blob([`
@namespace epub "http://www.idpf.org/2007/ops";
body > img, section > img {
    display: block;
    margin: auto;
}
.title h1 {
    text-align: center;
}
body > section > .title, body.notesBodyType > .title {
    margin: 3em 0;
}
body.notesBodyType > section .title h1 {
    text-align: start;
}
body.notesBodyType > section .title {
    margin: 1em 0;
}
p {
    text-indent: 1em;
    margin: 0;
}
:not(p) + p, p:first-child {
    text-indent: 0;
}
.poem p {
    text-indent: 0;
    margin: 1em 0;
}
.text-author, .date {
    text-align: end;
}
.text-author:before {
    content: "—";
}
table {
    border-collapse: collapse;
}
td, th {
    padding: .25em;
}
a[epub|type~="noteref"] {
    font-size: .75em;
    vertical-align: super;
}
body:not(.notesBodyType) > .title, body:not(.notesBodyType) > .epigraph {
    margin: 3em 0;
}
`],{type:"text/css"})),z=p=>`<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head><link href="${X}" rel="stylesheet" type="text/css"/></head>
    <body>${p}</body>
</html>`,M="data-foliate-id",I=async p=>{const t={},n=await O(p),a=new $(n),s=e=>n.querySelector(e),d=e=>[...n.querySelectorAll(e)],m=e=>{const o=u(e.querySelector("nickname"));if(o)return o;const r=u(e.querySelector("first-name")),i=u(e.querySelector("middle-name")),c=u(e.querySelector("last-name")),b=[r,i,c].filter(g=>g).join(" "),v=c?[c,[r,i].filter(g=>g).join(" ")].join(", "):null;return{name:b,sortAs:v}},f=e=>(e==null?void 0:e.getAttribute("value"))??u(e),A=s("title-info annotation");if(t.metadata={title:u(s("title-info book-title")),identifier:u(s("document-info id")),language:u(s("title-info lang")),author:d("title-info author").map(m),translator:d("title-info translator").map(m),contributor:d("document-info author").map(m).concat(d("document-info program-used").map(u)).map(e=>Object.assign(typeof e=="string"?{name:e}:e,{role:"bkp"})),publisher:u(s("publish-info publisher")),published:f(s("title-info date")),modified:f(s("document-info date")),description:A?a.convert(A,{annotation:["div",L]}).innerHTML:null,subject:d("title-info genre").map(u)},s("coverpage image")){const e=a.getImageSrc(s("coverpage image"));t.getCover=()=>fetch(e).then(o=>o.blob())}else t.getCover=()=>null;const y=Array.from(n.querySelectorAll("body"),e=>{const o=a.convert(e,{body:["body",D]});return[Array.from(o.children,r=>{const i=[r,...r.querySelectorAll("[id]")].map(c=>c.id);return{el:r,ids:i}}),o]}),h=[],x=y[0][0].map(({el:e,ids:o})=>{const r=Array.from(e.querySelectorAll(":scope > section > .title"),(i,c)=>(i.setAttribute(M,c),{title:u(i),index:c}));return{ids:o,titles:r,el:e}}).concat(y.slice(1).map(([e,o])=>{const r=e.map(i=>i.ids).flat();return o.classList.add("notesBodyType"),{ids:r,el:o,linear:"no"}})).map(({ids:e,titles:o,el:r,linear:i})=>{var c;const b=z(r.outerHTML),v=new Blob([b],{type:T.XHTML}),g=URL.createObjectURL(v);h.push(g);const k=B(((c=r.querySelector(".title, .subtitle, p"))==null?void 0:c.textContent)??(r.classList.contains("title")?r.textContent:""));return{ids:e,title:k,titles:o,load:()=>g,createDocument:()=>new DOMParser().parseFromString(b,T.XHTML),size:v.size-Array.from(r.querySelectorAll("[src]"),C=>{var w;return((w=C.getAttribute("src"))==null?void 0:w.length)??0}).reduce((C,w)=>C+w,0),linear:i}}),q=new Map;return t.sections=x.map((e,o)=>{const{ids:r,load:i,createDocument:c,size:b,linear:v}=e;for(const g of r)g&&q.set(g,o);return{id:o,load:i,createDocument:c,size:b,linear:v}}),t.toc=x.map(({title:e,titles:o},r)=>{const i=r.toString();return{label:e,href:i,subitems:o!=null&&o.length?o.map(({title:c,index:b})=>({label:c,href:`${i}#${b}`})):null}}).filter(e=>e),t.resolveHref=e=>{const[o,r]=e.split("#");return o?{index:Number(o),anchor:i=>i.querySelector(`[${M}="${r}"]`)}:{index:q.get(r),anchor:i=>i.getElementById(r)}},t.splitTOCHref=e=>{var o;return((o=e==null?void 0:e.split("#"))==null?void 0:o.map(r=>Number(r)))??[]},t.getTOCFragment=(e,o)=>e.querySelector(`[${M}="${o}"]`),t.destroy=()=>{for(const e of h)URL.revokeObjectURL(e)},t};export{I as makeFB2};
