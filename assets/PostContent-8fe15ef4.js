import{_ as j,o as n,d as a,e as s,G as v,U,u as Y,S as F,V as Q,k as W,l as X,c as M,f as P,N as R,C as d,g as I,O as K,P as Z,R as ee,E as r,D as te,L as u,A as oe,B as se,Q as le,W as ne}from"./index-bdb0179f.js";const ae={class:"video-container"},ie=["src"],ce={__name:"Video",props:{value:{type:String,required:!1,default:""},width:{type:String,required:!1,default:""},height:{type:String,required:!1,default:""}},setup(e){return(f,m)=>(n(),a("div",ae,[s("video",{controls:"",style:v({width:`${e.width}`,height:`${e.height}`})},[s("source",{src:e.value,type:"video/mp4"},null,8,ie)],4)]))}},re=j(ce,[["__scopeId","data-v-9111b010"]]);const ue={class:"card flex flex-column gap-3"},de={class:"flex flex-column gap-3"},ve={class:"flex justify-content-between"},fe={style:{"font-size":"0.9rem"},class:"text-700"},me={class:"dot-container relative"},he=["onClick"],ge=["innerHTML"],ke={class:"flex flex-column gap-3"},_e={key:0,class:"file-container w-full h-20rem overflow-hidden"},ye={key:0,class:"relative w-full h-full"},pe=["src"],we={class:"absolute top-0 w-full h-full overflow-hidden opacity-0"},xe=["src","onClick"],be={class:"text-600 flex justify-content-between align-items-end"},Ce={class:"flex gap-2 align-items-center"},$e={__name:"PostContent",props:{value:{type:Object,required:!1,default:()=>{}}},setup(e){const f=U(),m=Y(),{onActionGetListRoom:z}=F(),{onActionJoinRoom:B}=Q(),i=W(!1),q=X(()=>[{name:"Sao chép liên kết",code:"COPY"},{name:"Xóa bài viết",code:"DELETE"}]),N=c=>{B({account_id:u.value.account_id,room_id:c}).then(o=>{o.success&&(m.replace({name:"Message",params:{id:o.data}}),z(u.value.account_id))})},h=c=>{le.emit("like-posts",{posts_id:c,people_like:u.value.account_id})},G=(c,o)=>{switch(c){case"COPY":ne(`${window.location.host}/bai-viet/${o}`),f.success("Đã sao chép liên kết bài viết!")}i.value=!1};return(c,o)=>{var g,k,_,y,p,w,x,b,C,$,S,T,E,A,L,O,V;const H=M("Avatar"),J=M("Image");return n(),a("div",ue,[s("div",de,[s("div",ve,[P(H,{value:{image:"/images/image-1.webp",name:(k=(g=e.value)==null?void 0:g.poster)==null?void 0:k.user_name}},{default:R(()=>{var t;return[s("span",fe,d(I(K)((t=e.value)==null?void 0:t.createdAt,!0)),1)]}),_:1},8,["value"]),s("div",me,[s("i",{class:"dot pi pi-ellipsis-h w-2rem h-2rem border-circle flex justify-content-center align-items-center on-click",onMouseenter:o[0]||(o[0]=t=>i.value=!0),onMouseleave:o[1]||(o[1]=t=>i.value=!1)},null,32),i.value?(n(),a("div",{key:0,class:"z-5 box-shadow-1 right-0 bg-white border-round-lg py-1 absolute w-10rem flex flex-column overflow-hidden",onMouseenter:o[2]||(o[2]=t=>i.value=!0),onMouseleave:o[3]||(o[3]=t=>i.value=!1)},[(n(!0),a(Z,null,ee(q.value,(t,l)=>(n(),a("span",{key:l,style:v([{padding:"0.7rem"},{color:(t==null?void 0:t.code)==="DELETE"?"rgb(214, 26, 26)":"black"}]),class:"item-option on-click",onClick:Se=>{var D;return G(t==null?void 0:t.code,(D=e.value)==null?void 0:D._id)}},d(t==null?void 0:t.name),13,he))),128))],32)):r("",!0)])]),s("div",{innerHTML:(_=e.value)==null?void 0:_.content,style:{"word-wrap":"break-word"}},null,8,ge)]),s("div",ke,[(y=e.value)!=null&&y.file?(n(),a("div",_e,[((p=e.value)==null?void 0:p.type)==="image"?(n(),a("div",ye,[s("img",{style:{"background-color":"#f0f2f5"},class:"w-full h-full border-1 text-200 object-fit-cover",src:(w=e.value)==null?void 0:w.file,onerror:"this.onerror=null; this.src='/images/image-product-default.svg';"},null,8,pe),s("div",we,[P(J,{src:(x=e.value)==null?void 0:x.file,alt:"Image",preview:"",class:"w-full h-full"},{preview:R(t=>{var l;return[s("img",{src:(l=e.value)==null?void 0:l.file,alt:"preview",onerror:"this.onerror=null; this.src='/images/image-product-default.svg';",class:"preview-image bg-white",style:v(t.style),onClick:t.onClick},null,12,xe)]}),_:1},8,["src"])])])):r("",!0),((b=e.value)==null?void 0:b.type)==="video"?(n(),te(re,{key:1,value:(C=e.value)==null?void 0:C.file,height:"15rem"},null,8,["value"])):r("",!0)])):r("",!0),s("div",be,[s("div",Ce,[(T=($=e.value)==null?void 0:$.likes)!=null&&T.includes((S=I(u))==null?void 0:S.account_id)?(n(),a("i",{key:0,style:{"font-size":"1.3rem"},class:"pi pi-heart-fill text-main-color on-click-3",onClick:o[4]||(o[4]=t=>{var l;return h((l=e.value)==null?void 0:l._id)})})):(n(),a("i",{key:1,style:{"font-size":"1.3rem"},class:"pi pi-heart text-main-color on-click-3",onClick:o[5]||(o[5]=t=>{var l;return h((l=e.value)==null?void 0:l._id)})})),oe(s("span",{class:"text-main-color"},d((A=(E=e.value)==null?void 0:E.likes)==null?void 0:A.length)+" yêu thích ",513),[[se,(O=(L=e.value)==null?void 0:L.likes)==null?void 0:O.length]])]),(V=e.value)!=null&&V.room_id?(n(),a("div",{key:0,class:"bg-main-color py-2 px-3 border-round-2xl text-100 on-click",onClick:o[6]||(o[6]=t=>{var l;return N((l=e.value)==null?void 0:l.room_id)})}," Tham gia nhóm chat ")):r("",!0)])])])}}},Ee=j($e,[["__scopeId","data-v-b0431461"]]);export{Ee as P,re as V};
