(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{45:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(18),s=t.n(c),i=(t(45),t(11)),o=t(62),l=[{name:"Acacia",picture:"https://habahram.blob.core.windows.net/flowers/acacia.jpg"},{name:"Alyssum",picture:"https://habahram.blob.core.windows.net/flowers/alyssum.jpg"},{name:"Amaryllis",picture:"https://habahram.blob.core.windows.net/flowers/amaryllis.jpg"},{name:"Aster",picture:"https://habahram.blob.core.windows.net/flowers/aster.jpg"},{name:"Azalea",picture:"https://habahram.blob.core.windows.net/flowers/azalea.jpg"},{name:"Begonia",picture:"https://habahram.blob.core.windows.net/flowers/begonia.jpg"},{name:"Buttercup",picture:"https://habahram.blob.core.windows.net/flowers/buttercup.jpg"},{name:"Calluna",picture:"https://habahram.blob.core.windows.net/flowers/calluna.jpg"},{name:"Camellia",picture:"https://habahram.blob.core.windows.net/flowers/camellia.jpg"},{name:"Cardinal",picture:"https://habahram.blob.core.windows.net/flowers/cardinal.jpg"},{name:"Carnation",picture:"https://habahram.blob.core.windows.net/flowers/carnation.jpg"},{name:"Clover",picture:"https://habahram.blob.core.windows.net/flowers/clover.jpg"},{name:"Crown Imperial",picture:"https://habahram.blob.core.windows.net/flowers/crownimperial.jpg"},{name:"Daffodil",picture:"https://habahram.blob.core.windows.net/flowers/daffodil.jpg"},{name:"Dahlia",picture:"https://habahram.blob.core.windows.net/flowers/dahlia.jpg"},{name:"Daisy",picture:"https://habahram.blob.core.windows.net/flowers/daisy.jpg"},{name:"Gladiolus",picture:"https://habahram.blob.core.windows.net/flowers/gladiolus.jpg"},{name:"Lantana",picture:"https://habahram.blob.core.windows.net/flowers/lantana.jpg"},{name:"Lily",picture:"https://habahram.blob.core.windows.net/flowers/lily.jpg"},{name:"Lotus",picture:"https://habahram.blob.core.windows.net/flowers/lotus.jpg"},{name:"Marigold",picture:"https://habahram.blob.core.windows.net/flowers/Marigold.jpg"},{name:"Orchid",picture:"https://habahram.blob.core.windows.net/flowers/orchid.jpg"},{name:"Primrose",picture:"https://habahram.blob.core.windows.net/flowers/primrose.jpg"},{name:"Sunflower",picture:"https://habahram.blob.core.windows.net/flowers/sunflower.jpg"},{name:"Tickseed",picture:"https://habahram.blob.core.windows.net/flowers/tickseed.jpg"},{name:"Tulip",picture:"https://habahram.blob.core.windows.net/flowers/tulip.jpg"},{name:"Zinnia",picture:"https://habahram.blob.core.windows.net/flowers/zinnia.jpg"}],b=t(7),h=t(1),j=function(e){for(var a=Object(r.useState)(0),t=(a.index,a.setNumber,Object(b.f)()),n=function(a){a.preventDefault(),e.getIndex(a.target.name),t.push("/question")},c=[],s=0;s<l.length;s++)c.push(Object(h.jsxs)(o.a,{children:[Object(h.jsx)(o.a.Link,{href:"#question",value:s,onClick:n,children:Object(h.jsx)(o.a.Img,{variant:"top",src:l[s].picture,name:s,onClick:n})}),Object(h.jsx)(o.a.Body,{children:Object(h.jsx)(o.a.Title,{children:l[s].name})})]}));return c},d=(t(21),t(61)),p=t(55),m=function(){return Object(h.jsxs)(d.a,{children:[Object(h.jsxs)(d.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(d.a.Label,{children:"Email address"}),Object(h.jsx)(d.a.Control,{type:"email",placeholder:"Enter email"}),Object(h.jsx)(d.a.Text,{className:"text-muted",children:"please enter your email address"})]}),Object(h.jsxs)(d.a.Group,{className:"mb-3",controlId:"formBasicText",children:[Object(h.jsx)(d.a.Label,{children:"Phone"}),Object(h.jsx)(d.a.Control,{type:"text",placeholder:"Enter phone number"}),Object(h.jsx)(d.a.Text,{className:"text-muted",children:"please enter your phone number"})]}),Object(h.jsxs)(d.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(h.jsx)(d.a.Label,{children:"Password"}),Object(h.jsx)(d.a.Control,{type:"password",placeholder:"Password"})]}),Object(h.jsx)(d.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(h.jsx)(d.a.Check,{type:"checkbox",label:"save account number"})}),Object(h.jsx)(p.a,{variant:"primary",type:"submit",children:"Sign up"})]})},u=function(){return Object(h.jsxs)(o.a,{className:"text-center",children:[Object(h.jsx)(o.a.Header,{children:"Login"}),Object(h.jsxs)(o.a.Body,{children:[Object(h.jsx)(o.a.Title,{children:"Enter your name"}),Object(h.jsx)(o.a.Text,{children:"Yifei Chen"}),Object(h.jsx)(p.a,{variant:"primary",children:"Login"})]}),Object(h.jsx)(o.a.Footer,{className:"text-muted",children:"you already login as Yifei"})]})},w=t(59),x=t(56),O=t(60),f=function(){return Object(h.jsx)(w.a,{variant:"pills",defaultActiveKey:"/",bg:"dark",children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)(O.a.Item,{children:Object(h.jsx)(O.a.Link,{href:"#/",children:"Home"})}),Object(h.jsx)(w.a.Toggle,{}),Object(h.jsxs)(w.a.Collapse,{className:"justify-content-end",children:[Object(h.jsx)(O.a.Item,{children:Object(h.jsx)(O.a.Link,{href:"#login",children:"Login"})}),Object(h.jsx)(O.a.Item,{children:Object(h.jsx)(O.a.Link,{href:"#sign",children:"Signup"})})]})]})})},g=function(){for(var e=[],a=0,t=function(){for(var e=[],a=0,t=0;t<l.length;t++){(a=t)>l.length-4&&(a=t-2);var r={picture:l[t].picture,choices:[l[a].name,l[a+1].name,l[a+2].name],answer:l[t].name};e.push(r)}return e}(),r=0;r<t.length;r++){(a=r)>t.length-7&&(a=r-5);var n=[t[a],t[a+1],t[a+2],t[a+3],t[a+4],t[a+5]];e.push(n)}return e}(),y=t(57),v=t(36),C=t(58),k=function(e){for(var a=Object(r.useState)(0),t=(a.grade,a.setGrade,function(){}),n=[],c=0;c<g[e.indexProp].length;c++)n.push(Object(h.jsx)("div",{children:Object(h.jsx)(x.a,{fluid:!0,children:Object(h.jsxs)(y.a,{className:"justify-content-center \r align-items-center",children:[Object(h.jsx)(v.a,{children:Object(h.jsx)(C.a,{src:g[e.indexProp][c].picture,alt:g[e.indexProp][c].answer})}),Object(h.jsx)(v.a,{children:Object(h.jsx)("fieldset",{children:Object(h.jsx)(d.a,{onSubmit:t,children:Object(h.jsxs)(d.a.Group,{as:y.a,className:"mb-3",children:[Object(h.jsx)(d.a.Label,{as:"legend",column:!0,sm:2}),Object(h.jsxs)(v.a,{sm:10,children:[Object(h.jsx)(d.a.Check,{label:g[e.indexProp][c].choices[0]}),Object(h.jsx)(d.a.Check,{label:g[e.indexProp][c].choices[1]}),Object(h.jsx)(d.a.Check,{label:g[e.indexProp][c].choices[2]})]})]})})})})]})})}));return n},L=t(40);var P=function(){var e=Object(r.useState)(void 0),a=Object(i.a)(e,2),t=a[0],n=a[1];return Object(h.jsx)(L.a,{children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)(y.a,{children:Object(h.jsx)(v.a,{children:Object(h.jsx)(f,{})})}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/sign",children:Object(h.jsx)(m,{})}),Object(h.jsx)(b.a,{path:"/login",children:Object(h.jsx)(u,{})}),Object(h.jsx)(b.a,{path:"/question",children:Object(h.jsx)(k,{indexProp:t})}),Object(h.jsx)(b.a,{path:"/",children:Object(h.jsx)(j,{getIndex:function(e){n(e)}})})]})]})})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root")),I()}},[[53,1,2]]]);
//# sourceMappingURL=main.efcb1b56.chunk.js.map