(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{55:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(20),s=t.n(c),o=(t(55),t(10)),i=t(73),l=t(7),b={getFlowers:function(){return fetch("".concat("https://yifeicua-imagequiz-backend.herokuapp.com","/flowers")).then((function(e){var a=e.json();return console.log(a),a}))}},h=t(1),j=function(e){var a=Object(r.useState)([]),t=Object(o.a)(a,2),n=t[0],c=t[1];Object(r.useEffect)((function(){n.length>0||b.getFlowers().then((function(e){return c(e)})).catch((function(e){return console.log(e)}))}),[]);for(var s=Object(r.useState)(0),j=(s.index,s.setNumber,Object(l.f)()),d=function(a){a.preventDefault(),e.getIndex(a.target.name),j.push("/question")},p=[],u=0;u<n.length;u++)p.push(Object(h.jsxs)(i.a,{children:[Object(h.jsx)(i.a.Link,{href:"#question",value:u,onClick:d,children:Object(h.jsx)(i.a.Img,{variant:"top",src:n[u].picture,name:u,onClick:d})}),Object(h.jsx)(i.a.Body,{children:Object(h.jsx)(i.a.Title,{children:n[u].name})})]}));return p},d=(t(27),t(69)),p=t(65),u=function(){return Object(h.jsxs)(d.a,{children:[Object(h.jsxs)(d.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(d.a.Label,{children:"Email address"}),Object(h.jsx)(d.a.Control,{type:"email",placeholder:"Enter email"}),Object(h.jsx)(d.a.Text,{className:"text-muted",children:"please enter your email address"})]}),Object(h.jsxs)(d.a.Group,{className:"mb-3",controlId:"formBasicText",children:[Object(h.jsx)(d.a.Label,{children:"User name"}),Object(h.jsx)(d.a.Control,{type:"text",placeholder:"Enter phone number"}),Object(h.jsx)(d.a.Text,{className:"text-muted",children:"please enter your username"})]}),Object(h.jsxs)(d.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(h.jsx)(d.a.Label,{children:"Password"}),Object(h.jsx)(d.a.Control,{type:"password",placeholder:"Password"})]}),Object(h.jsx)(d.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(h.jsx)(d.a.Check,{type:"checkbox",label:"save account number"})}),Object(h.jsx)(p.a,{variant:"primary",type:"submit",children:"Sign up"})]})},m=function(){return Object(h.jsxs)(d.a,{children:[Object(h.jsxs)(d.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(d.a.Label,{children:"Email address"}),Object(h.jsx)(d.a.Control,{type:"email",placeholder:"Enter email"}),Object(h.jsx)(d.a.Text,{className:"text-muted",children:"please enter your email address"})]}),Object(h.jsxs)(d.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(h.jsx)(d.a.Label,{children:"Password"}),Object(h.jsx)(d.a.Control,{type:"password",placeholder:"Password"})]}),Object(h.jsx)(d.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(h.jsx)(d.a.Check,{type:"checkbox",label:"save account number"})}),Object(h.jsx)(p.a,{variant:"primary",type:"submit",children:"Login"})]})},x=t(71),w=t(66),O=t(70),f=function(){return Object(h.jsx)(x.a,{variant:"pills",defaultActiveKey:"/",bg:"dark",children:Object(h.jsxs)(w.a,{children:[Object(h.jsx)(O.a.Item,{children:Object(h.jsx)(O.a.Link,{href:"#/",children:"Home"})}),Object(h.jsx)(x.a.Toggle,{}),Object(h.jsxs)(x.a.Collapse,{className:"justify-content-end",children:[Object(h.jsx)(O.a.Item,{children:Object(h.jsx)(O.a.Link,{href:"#login",children:"Login"})}),Object(h.jsx)(O.a.Item,{children:Object(h.jsx)(O.a.Link,{href:"#sign",children:"Signup"})})]})]})})},g=[{name:"Acacia",picture:"https://habahram.blob.core.windows.net/flowers/acacia.jpg"},{name:"Alyssum",picture:"https://habahram.blob.core.windows.net/flowers/alyssum.jpg"},{name:"Amaryllis",picture:"https://habahram.blob.core.windows.net/flowers/amaryllis.jpg"},{name:"Aster",picture:"https://habahram.blob.core.windows.net/flowers/aster.jpg"},{name:"Azalea",picture:"https://habahram.blob.core.windows.net/flowers/azalea.jpg"},{name:"Begonia",picture:"https://habahram.blob.core.windows.net/flowers/begonia.jpg"},{name:"Buttercup",picture:"https://habahram.blob.core.windows.net/flowers/buttercup.jpg"},{name:"Calluna",picture:"https://habahram.blob.core.windows.net/flowers/calluna.jpg"},{name:"Camellia",picture:"https://habahram.blob.core.windows.net/flowers/camellia.jpg"},{name:"Cardinal",picture:"https://habahram.blob.core.windows.net/flowers/cardinal.jpg"},{name:"Carnation",picture:"https://habahram.blob.core.windows.net/flowers/carnation.jpg"},{name:"Clover",picture:"https://habahram.blob.core.windows.net/flowers/clover.jpg"},{name:"Crown Imperial",picture:"https://habahram.blob.core.windows.net/flowers/crownimperial.jpg"},{name:"Daffodil",picture:"https://habahram.blob.core.windows.net/flowers/daffodil.jpg"},{name:"Dahlia",picture:"https://habahram.blob.core.windows.net/flowers/dahlia.jpg"},{name:"Daisy",picture:"https://habahram.blob.core.windows.net/flowers/daisy.jpg"},{name:"Gladiolus",picture:"https://habahram.blob.core.windows.net/flowers/gladiolus.jpg"},{name:"Lantana",picture:"https://habahram.blob.core.windows.net/flowers/lantana.jpg"},{name:"Lily",picture:"https://habahram.blob.core.windows.net/flowers/lily.jpg"},{name:"Lotus",picture:"https://habahram.blob.core.windows.net/flowers/lotus.jpg"},{name:"Marigold",picture:"https://habahram.blob.core.windows.net/flowers/Marigold.jpg"},{name:"Orchid",picture:"https://habahram.blob.core.windows.net/flowers/orchid.jpg"},{name:"Primrose",picture:"https://habahram.blob.core.windows.net/flowers/primrose.jpg"},{name:"Sunflower",picture:"https://habahram.blob.core.windows.net/flowers/sunflower.jpg"},{name:"Tickseed",picture:"https://habahram.blob.core.windows.net/flowers/tickseed.jpg"},{name:"Tulip",picture:"https://habahram.blob.core.windows.net/flowers/tulip.jpg"},{name:"Zinnia",picture:"https://habahram.blob.core.windows.net/flowers/zinnia.jpg"}],y=function(){for(var e=[],a=0,t=function(){for(var e=[],a=0,t=0;t<g.length;t++){(a=t)>g.length-4&&(a=t-2);var r={picture:g[t].picture,choices:[g[a].name,g[a+1].name,g[a+2].name],answer:g[t].name};e.push(r)}return e}(),r=0;r<t.length;r++){(a=r)>t.length-7&&(a=r-5);var n=[t[a],t[a+1],t[a+2],t[a+3],t[a+4],t[a+5]];e.push(n)}return e}(),v=t(72),C=t(67),k=t(46),P=t(68),L=function(e){for(var a=Object(r.useState)(0),t=(a.grade,a.setGrade,Object(l.f)(),function(a){a.target.id==a.target.value?e.getGrade(1):e.getGrade(0)}),n=[],c=0;c<y[e.indexProp].length;c++)n.push(Object(h.jsx)("div",{children:Object(h.jsx)(w.a,{fluid:!0,children:Object(h.jsxs)(C.a,{className:"justify-content-center \r align-items-center",children:[Object(h.jsx)(k.a,{children:Object(h.jsx)(P.a,{src:y[e.indexProp][c].picture,alt:y[e.indexProp][c].answer})}),Object(h.jsx)(k.a,{children:Object(h.jsx)("fieldset",{children:Object(h.jsx)(d.a,{children:Object(h.jsxs)(d.a.Group,{as:C.a,className:"mb-3",children:[Object(h.jsx)(d.a.Label,{as:"legend",column:!0,sm:2}),Object(h.jsxs)(k.a,{sm:10,children:[Object(h.jsx)(d.a.Check,{label:y[e.indexProp][c].choices[0],type:"radio",name:"group1",id:y[e.indexProp][c].choices[0],value:y[e.indexProp][c].answer,onClick:t}),Object(h.jsx)(d.a.Check,{label:y[e.indexProp][c].choices[1],type:"radio",name:"group1",id:y[e.indexProp][c].choices[1],value:y[e.indexProp][c].answer,onClick:t}),Object(h.jsx)(d.a.Check,{label:y[e.indexProp][c].choices[2],type:"radio",name:"group1",id:y[e.indexProp][c].choices[2],value:y[e.indexProp][c].answer,onClick:t}),Object(h.jsx)(d.a.Control.Feedback,{label:y[e.indexProp][c].answer,children:"You did it!"})]})]})})})})]})})}));return n.push(Object(h.jsx)(C.a,{children:Object(h.jsxs)(v.a,{children:["Your grade is ",e.gradeProp]},"info")})),n.push(Object(h.jsxs)(C.a,{children:[Object(h.jsx)(p.a,{href:"/question",variant:"primary",size:"lg",children:"Reapet same quiz"})," ",Object(h.jsx)(p.a,{href:"/",variant:"secondary",size:"lg",children:"Go Back to do Others"})," "]})),n},I=t(50);var G=function(){var e=Object(r.useState)(void 0),a=Object(o.a)(e,2),t=a[0],n=a[1],c=Object(r.useState)(0),s=Object(o.a)(c,2),i=s[0],b=s[1];return Object(h.jsx)(I.a,{children:Object(h.jsxs)(w.a,{children:[Object(h.jsx)(C.a,{children:Object(h.jsx)(k.a,{children:Object(h.jsx)(f,{})})}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/sign",children:Object(h.jsx)(u,{})}),Object(h.jsx)(l.a,{path:"/login",children:Object(h.jsx)(m,{})}),Object(h.jsx)(l.a,{path:"/question",children:Object(h.jsx)(L,{indexProp:t,getGrade:function(e){b(i+e)},gradeProp:i})}),Object(h.jsx)(l.a,{path:"/",children:Object(h.jsx)(j,{getIndex:function(e){n(e)}})})]})]})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,74)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),N()}},[[63,1,2]]]);
//# sourceMappingURL=main.ba55ba66.chunk.js.map