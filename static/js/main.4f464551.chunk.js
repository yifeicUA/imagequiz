(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{55:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(20),s=c.n(r),i=(c(55),c(2)),o=c(3),l=c(6),j=c(73),u=c(8),b="https://yifeicua-imagequiz-backend.herokuapp.com",d={getFlowers:function(){return fetch("".concat(b,"/flowers")).then((function(e){var t=e.json();return console.log(t),t}))},getQuiz:function(e){return fetch("".concat(b,"/quiz/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{picture:e.picture,choices:e.choices.split(","),answer:e.answer}}))}))},setUser:function(e,t,c){return fetch("".concat(b,"/register"),{method:"POST",body:JSON.stringify({name:e,email:t,password:c}),headers:{"Content-Type":"application/json"}})},getUser:function(e,t){return fetch("".concat(b,"/login"),{method:"POST",body:JSON.stringify({email:e,password:t}),headers:{"Content-Type":"application/json"}})}},h=c(1),O=function(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],r=c[1];Object(n.useEffect)((function(){a.length>0||d.getFlowers().then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]);for(var s=Object(n.useState)(0),i=(s.index,s.setNumber,Object(u.g)()),o=function(t){t.preventDefault(),e.getIndex(t.target.name),i.push("/question")},b=[],O=0;O<a.length;O++)b.push(Object(h.jsxs)(j.a,{children:[Object(h.jsx)(j.a.Link,{href:"#question",value:a[O].name,onClick:o,children:Object(h.jsx)(j.a.Img,{variant:"top",src:a[O].picture,name:a[O].name,onClick:o})}),Object(h.jsx)(j.a.Body,{children:Object(h.jsx)(j.a.Title,{children:a[O].name})})]}));return b},x=(c(27),c(69)),m=c(65),p=c(66),g=c(72),f=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(),s=Object(l.a)(r,2),i=s[0],o=s[1],j=Object(n.useState)(),u=Object(l.a)(j,2),b=u[0],O=u[1],f=Object(n.useState)(),v=Object(l.a)(f,2),y=v[0],C=v[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(x.a,{onSubmit:function(e){e.preventDefault(),console.log(i),console.log(b),console.log(y),c=d.setUser(b,i,y).then((function(e){console.log(e),a("       Sign up successfully\uff01\uff01\uff01")}))},children:[Object(h.jsxs)(x.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Email address"}),Object(h.jsx)(x.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return o(e.target.value)},required:!0}),Object(h.jsx)(x.a.Text,{className:"text-muted",children:"please enter your email address"})]}),Object(h.jsxs)(x.a.Group,{className:"mb-3",controlId:"formBasicText",children:[Object(h.jsx)(x.a.Label,{children:"User name"}),Object(h.jsx)(x.a.Control,{type:"text",placeholder:"username",onChange:function(e){return O(e.target.value)},required:!0}),Object(h.jsx)(x.a.Text,{className:"text-muted",children:"please enter your username"})]}),Object(h.jsxs)(x.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(h.jsx)(x.a.Label,{children:"Password"}),Object(h.jsx)(x.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return C(e.target.value)},required:!0})]}),Object(h.jsx)(x.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(h.jsx)(x.a.Check,{type:"checkbox",label:"save account number"})}),Object(h.jsx)(m.a,{variant:"primary",type:"submit",children:"Sign up"})]}),Object(h.jsx)(p.a,{children:Object(h.jsxs)(g.a,{children:["Sign up with username(show in console): ",b,c]},"info")})]})},v=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(),s=Object(l.a)(r,2),i=s[0],o=s[1],j=Object(n.useState)(),u=Object(l.a)(j,2),b=u[0],O=u[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(x.a,{onSubmit:function(e){e.preventDefault(),console.log(i),console.log(b),d.getUser(i,b).then((function(e){console.log(e.json()),a("       Login successfully\uff01\uff01\uff01(check console, there is a problem on isvalid)")}))},children:[Object(h.jsxs)(x.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(x.a.Label,{children:"Email address"}),Object(h.jsx)(x.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return o(e.target.value)},required:!0}),Object(h.jsx)(x.a.Text,{className:"text-muted",children:"please enter your email address"})]}),Object(h.jsxs)(x.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(h.jsx)(x.a.Label,{children:"Password"}),Object(h.jsx)(x.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return O(e.target.value)},required:!0})]}),Object(h.jsx)(x.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(h.jsx)(x.a.Check,{type:"checkbox",label:"save account number"})}),Object(h.jsx)(m.a,{variant:"primary",type:"submit",children:"Login"})]}),Object(h.jsx)(p.a,{children:Object(h.jsxs)(g.a,{children:["Login with Email(show in console): ",i,c]},"info")})]})},y=c(71),C=c(67),k=c(70),w=function(){return Object(h.jsx)(y.a,{variant:"pills",defaultActiveKey:"/",bg:"dark",children:Object(h.jsxs)(C.a,{children:[Object(h.jsx)(k.a.Item,{children:Object(h.jsx)(k.a.Link,{href:"#/",children:"Home"})}),Object(h.jsx)(y.a.Toggle,{}),Object(h.jsxs)(y.a.Collapse,{className:"justify-content-end",children:[Object(h.jsx)(k.a.Item,{children:Object(h.jsx)(k.a.Link,{href:"#login",children:"Login"})}),Object(h.jsx)(k.a.Item,{children:Object(h.jsx)(k.a.Link,{href:"#sign",children:"Signup"})})]})]})})},S=c(46),I=c(68),L=function(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],r=c[1];Object(n.useEffect)((function(){console.log(e.indexProp),d.getQuiz(e.indexProp).then((function(e){return r(e)}))}),[]);for(var s=Object(n.useState)(0),i=(s.grade,s.setGrade,Object(u.g)(),function(t){t.target.id==t.target.value?e.getGrade(1):e.getGrade(0)}),o=[],j=0;j<a.length;j++)o.push(Object(h.jsx)("div",{children:Object(h.jsx)(C.a,{fluid:!0,children:Object(h.jsxs)(p.a,{className:"justify-content-center \r align-items-center",children:[Object(h.jsx)(S.a,{children:Object(h.jsx)(I.a,{src:a[j].picture,alt:a[j].answer})}),Object(h.jsx)(S.a,{children:Object(h.jsx)("fieldset",{children:Object(h.jsx)(x.a,{children:Object(h.jsxs)(x.a.Group,{as:p.a,className:"mb-3",children:[Object(h.jsx)(x.a.Label,{as:"legend",column:!0,sm:2}),Object(h.jsxs)(S.a,{sm:10,children:[Object(h.jsx)(x.a.Check,{label:a[j].choices[0],type:"radio",name:"group1",id:a[j].choices[0],value:a[j].answer,onClick:i}),Object(h.jsx)(x.a.Check,{label:a[j].choices[1],type:"radio",name:"group1",id:a[j].choices[1],value:a[j].answer,onClick:i}),Object(h.jsx)(x.a.Check,{label:a[j].choices[2],type:"radio",name:"group1",id:a[j].choices[2],value:a[j].answer,onClick:i}),Object(h.jsx)(x.a.Control.Feedback,{label:a[j].answer,children:"You did it!"})]})]})})})})]})})}));return o.push(Object(h.jsx)(p.a,{children:Object(h.jsxs)(g.a,{children:["Your grade is ",e.gradeProp]},"info")})),o.push(Object(h.jsxs)(p.a,{children:[Object(h.jsx)(m.a,{variant:"primary",size:"lg",children:"Reapet same quiz"})," ",Object(h.jsx)(m.a,{href:"#",variant:"secondary",size:"lg",children:"Go Back to do Others"})," "]})),o},N=c(50),P=["children"];var q=function(e){var t=e.children,c=Object(o.a)(e,P),n=localStorage.getItem("customer");return Object(h.jsx)(u.b,Object(i.a)(Object(i.a)({},c),{},{render:function(e){var c=e.location;return n?t:Object(h.jsx)(u.a,{to:{pathname:"/login",state:{from:c}}})}}))},G=function(){var e=Object(n.useState)(void 0),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),s=Object(l.a)(r,2),i=s[0],o=s[1];return Object(h.jsx)(N.a,{children:Object(h.jsxs)(C.a,{children:[Object(h.jsx)(p.a,{children:Object(h.jsx)(S.a,{children:Object(h.jsx)(w,{})})}),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{path:"/sign",children:Object(h.jsx)(f,{})}),Object(h.jsx)(u.b,{path:"/login",children:Object(h.jsx)(v,{})}),Object(h.jsx)(q,{path:"/question",children:Object(h.jsx)(L,{indexProp:c,getGrade:function(e){o(i+e)},gradeProp:i})}),Object(h.jsx)(u.b,{path:"/",children:Object(h.jsx)(O,{getIndex:function(e){a(e)}})})]})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),T()}},[[63,1,2]]]);
//# sourceMappingURL=main.4f464551.chunk.js.map