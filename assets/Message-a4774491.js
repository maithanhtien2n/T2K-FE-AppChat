import{_ as q,I as X,u as Y,J as Z,i as m,l as w,m as ee,K as f,L as l,c as h,d as r,e as t,h as o,f as v,M as te,N as se,O as oe,C as ne,y as b,P as le,w as ae,o as i,A as k,D as H,z as K,Q as ce,F as re,G as ie}from"./index-61383201.js";import{u as de}from"./index-77405caf.js";const L="/assets/image-1-380e6bf8.webp";const g=u=>(re("data-v-699334ca"),u=u(),ie(),u),ue={style:{padding:"4rem 0 5rem 0"},class:"relative h-full"},_e={style:{"border-bottom":"1px solid #f1f1f1"},class:"absolute z-5 top-0 right-0 left-0 w-full h-4rem bg-white flex justify-content-between align-items-center px-3"},pe={class:"flex gap-3 align-items-center"},me={style:{"font-size":"0.9rem"},class:"text-700"},fe={key:0,class:"w-full chat-container flex flex-column gap-3 justify-content-end",style:{"min-height":"100%"}},he=g(()=>t("div",{class:"w-full text-center text-2xl font-bold py-8"}," Bắt đầu cuộc trò chuyện ",-1)),ve={class:"flex gap-1"},ge={src:L,alt:"Lỗi ảnh",class:"object-fit-cover",style:{width:"1.5rem",height:"1.5rem"}},xe={class:"flex flex-column gap-1"},ye={key:0,class:"w-full flex"},we={class:"flex gap-2"},be=g(()=>t("img",{src:L,alt:"Lỗi ảnh",class:"object-fit-cover",style:{width:"1.5rem",height:"1.5rem"}},null,-1)),ke={class:"flex flex-column gap-1"},Se=g(()=>t("span",{style:{"font-size":"0.8rem"},class:"text-800"},"Đang nhập tin nhắn ",-1)),Me={key:1,class:"w-full chat-container flex justify-content-center align-items-center",style:{"min-height":"100%"}},Ce={class:"flex flex-column justify-content-center gap-3"},Be=g(()=>t("span",{class:"text-800"},"Đang tải tin nhắn . . .",-1)),je={style:{"border-top":"1px solid #f1f1f1"},class:"absolute z-5 bottom-0 right-0 left-0 w-full h-5rem bg-white flex align-items-center"},ze={class:"chat-container w-full"},Fe={class:"w-full flex gap-2 align-items-center"},Ge={style:{"background-color":"#f1f1f1"},class:"w-full p-3 border-round-3xl"},Te=["onKeypress"],De={__name:"Message",setup(u){const V=X(),x=Y(),{onGetterGroupMessage:c,onActionGetGroupMessage:E}=Z(),a=de("id","",{transform:String}),_=m(""),y=m(!1),d=m(null),S=m(null),M=()=>{var s;V.name==="Message"&&E({account_id:(s=l.value)==null?void 0:s.account_id,room_id:a.value}).then(n=>{n.success||x.replace({name:"NotFound"})})},O=()=>{var s;f.emit("chat-message",{room_id:a.value,sender:(s=l.value)==null?void 0:s.account_id,content:"focus"})},U=()=>{var s;f.emit("chat-message",{room_id:a.value,sender:(s=l.value)==null?void 0:s.account_id,content:"unfocus"})},C=async()=>{var s;f.emit("chat-message",{room_id:a.value,sender:(s=l.value)==null?void 0:s.account_id,content:_.value}),_.value="",S.value.blur()};return w(()=>c.value,()=>{setTimeout(()=>{d.value.scrollTop=d.value.scrollHeight},1)}),w(()=>y.value,()=>{setTimeout(()=>{d.value.scrollTop=d.value.scrollHeight},1)}),w(()=>a.value,()=>{M()}),ee(()=>{f.on(`chat-message-${a.value}`,s=>{var n;if((s==null?void 0:s.type)==="sending"){y.value=s.active&&(s==null?void 0:s.sender)!==((n=l.value)==null?void 0:n.account_id);return}c.value=s}),M()}),(s,n)=>{var B,j,z,F;const $=h("Avatar"),J=h("Skeleton"),Q=h("ProgressSpinner"),W=h("Button");return i(),r("div",ue,[t("div",_e,[t("div",pe,[t("i",{class:"icon-back pi pi-arrow-left on-click font-bold",onClick:n[0]||(n[0]=e=>o(x).push({name:"Home"}))}),v($,{value:{image:"",name:(B=o(c))==null?void 0:B.room_name}},{default:te(()=>{var e,p;return[t("span",me,k((p=(e=o(c))==null?void 0:e.members)==null?void 0:p.length)+" thành viên ",1)]}),_:1},8,["value"])]),t("div",null,[t("i",{class:"pi pi-spin pi-cog text-2xl on-click",onClick:n[1]||(n[1]=e=>o(x).push({name:"SettingMessage",params:{id:o(a)}}))})])]),t("div",{style:{"overflow-y":"auto"},class:"w-full h-full",ref_key:"scrollContainer",ref:d},[(z=(j=o(c))==null?void 0:j.messages)!=null&&z.length?(i(),r("div",fe,[he,(i(!0),r(se,null,oe((F=o(c))==null?void 0:F.messages,(e,p)=>{var G,T,D,I,N,R,A,P;return i(),r("div",{key:p,class:H(["w-full flex align-items-center",{"justify-content-end":((G=e==null?void 0:e.sender)==null?void 0:G._id)===((T=o(l))==null?void 0:T.account_id)}])},[t("div",ve,[b(t("img",ge,null,512),[[K,((D=e==null?void 0:e.sender)==null?void 0:D._id)!==((I=o(l))==null?void 0:I.account_id)]]),t("div",xe,[b(t("span",{style:{"font-size":"0.8rem"},class:"text-800"},k(o(ce)(e==null?void 0:e.createdAt,!0)),513),[[K,((N=e==null?void 0:e.sender)==null?void 0:N._id)!==((R=o(l))==null?void 0:R.account_id)]]),t("span",{class:H([[((A=e==null?void 0:e.sender)==null?void 0:A._id)===((P=o(l))==null?void 0:P.account_id)?"bg-main-color-opacity":"bg-color-ddd"],"border-round-3xl text-900 max-w-18rem line-height-2"]),style:{padding:"0.5rem 0.8rem","word-wrap":"break-word"}},k(e==null?void 0:e.content),3)])])],2)}),128)),y.value?(i(),r("div",ye,[t("div",we,[be,t("div",ke,[Se,v(J,{width:"10rem",height:"2rem",class:"border-round-3xl"})])])])):ne("",!0)])):(i(),r("div",Me,[t("div",Ce,[v(Q,{style:{width:"50px",height:"50px"},strokeWidth:"3",animationDuration:".5s","aria-label":"Custom ProgressSpinner"}),Be])]))],512),t("div",je,[t("div",ze,[t("div",Fe,[t("div",Ge,[b(t("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>_.value=e),type:"text",ref_key:"inputField",ref:S,placeholder:"Nhập tin nhắn",class:"w-full border-none outline-none bg-transparent",onFocus:O,onBlur:U,onKeypress:ae(C,["enter"])},null,40,Te),[[le,_.value]])]),v(W,{icon:"pi pi-send",style:{padding:"0.6rem 1rem"},onClick:C})])])])])}}},Re=q(De,[["__scopeId","data-v-699334ca"]]);export{Re as default};
