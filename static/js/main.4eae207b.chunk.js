(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{55:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(20),s=n.n(r),o=(n(55),n(2)),i=n(3),l=n(6),j=n(73),u=n(8),d="https://yifeicua-imagequiz-backend.herokuapp.com",b={getFlowers:function(){return fetch("".concat(d,"/flowers")).then((function(e){var t=e.json();return console.log(t),t}))},getQuiz:function(e){return fetch("".concat(d,"/quiz/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{picture:e.picture,choices:e.choices.split(","),answer:e.answer}}))}))},setUser:function(e,t,n){return fetch("".concat(d,"/register"),{method:"POST",withCredentials:!0,headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:n})}).then((function(e){return e.json()}))},getUser:function(e,t){return fetch("".concat(d,"/login"),{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()}))},verifyTwitter:function(e){return fetch("".concat(d,"/twitter/verify/").concat(e),{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0}}).then((function(e){return e.json()}))},logout:function(){return fetch("".concat(d,"/logout"),{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0}}).then((function(e){return e.json()}))}},h=n(1),O=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],r=n[1];Object(c.useEffect)((function(){a.length>0||b.getFlowers().then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]);for(var s=Object(c.useState)(0),o=(s.index,s.setNumber,Object(u.g)()),i=function(t){t.preventDefault(),e.getIndex(t.target.name),o.push("/question")},d=[],O=0;O<a.length;O++)d.push(Object(h.jsxs)(j.a,{children:[Object(h.jsx)(j.a.Link,{href:"#question",value:a[O].name,onClick:i,children:Object(h.jsx)(j.a.Img,{variant:"top",src:a[O].picture,name:a[O].name,onClick:i})}),Object(h.jsx)(j.a.Body,{children:Object(h.jsx)(j.a.Title,{children:a[O].name})})]}));return d},m=(n(27),n(69)),x=n(65),p=n(66),f=n(72),g=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(l.a)(r,2),o=s[0],i=s[1],j=Object(c.useState)(),u=Object(l.a)(j,2),d=u[0],O=u[1],g=Object(c.useState)(),v=Object(l.a)(g,2),w=v[0],y=v[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(m.a,{onSubmit:function(e){e.preventDefault(),console.log(o),console.log(d),console.log(w),n=b.setUser(d,o,w).then((function(e){console.log(e),a("       Sign up successfully\uff01\uff01\uff01")}))},children:[Object(h.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(m.a.Label,{children:"Email address"}),Object(h.jsx)(m.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return i(e.target.value)},required:!0}),Object(h.jsx)(m.a.Text,{className:"text-muted",children:"please enter your email address"})]}),Object(h.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicText",children:[Object(h.jsx)(m.a.Label,{children:"User name"}),Object(h.jsx)(m.a.Control,{type:"text",placeholder:"username",onChange:function(e){return O(e.target.value)},required:!0}),Object(h.jsx)(m.a.Text,{className:"text-muted",children:"please enter your username"})]}),Object(h.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(h.jsx)(m.a.Label,{children:"Password"}),Object(h.jsx)(m.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return y(e.target.value)},required:!0})]}),Object(h.jsx)(m.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(h.jsx)(m.a.Check,{type:"checkbox",label:"save account number"})}),Object(h.jsx)(x.a,{variant:"primary",type:"submit",children:"Sign up"})]}),Object(h.jsx)(p.a,{children:Object(h.jsxs)(f.a,{children:["Sign up with username(show in console): ",d,n]},"info")})]})},v=function(e){var t=Object(c.useState)(),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(),o=Object(l.a)(s,2),i=o[0],j=o[1],d=Object(c.useState)(),O=Object(l.a)(d,2),g=O[0],v=O[1],w=Object(u.g)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(m.a,{onSubmit:function(t){t.preventDefault(),console.log(i),console.log(g),b.getUser(i,g).then((function(t){console.log(t),1==t.done?(localStorage.setItem("customer",i),r("       Login successfully\uff01\uff01\uff01(check console)"),e.onAuthenticated(),w.push({pathname:"/"})):r("       Login faild(check console)")}))},children:[Object(h.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(m.a.Label,{children:"Email address"}),Object(h.jsx)(m.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return j(e.target.value)},required:!0}),Object(h.jsx)(m.a.Text,{className:"text-muted",children:"please enter your email address"})]}),Object(h.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(h.jsx)(m.a.Label,{children:"Password"}),Object(h.jsx)(m.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return v(e.target.value)},required:!0})]}),Object(h.jsx)(m.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(h.jsx)(m.a.Check,{type:"checkbox",label:"save account number"})}),Object(h.jsx)(x.a,{variant:"primary",type:"submit",children:"Login"})]}),Object(h.jsx)(p.a,{children:Object(h.jsxs)(f.a,{children:["Login with Email(show in console): ",i,a]},"info")})]})},w=n(71),y=n(67),C=n(70),S=function(){return Object(h.jsx)(w.a,{variant:"pills",defaultActiveKey:"/",bg:"dark",children:Object(h.jsxs)(y.a,{children:[Object(h.jsx)(C.a.Item,{children:Object(h.jsx)(C.a.Link,{href:"#/",children:"Home"})}),Object(h.jsx)(w.a.Toggle,{}),Object(h.jsxs)(w.a.Collapse,{className:"justify-content-end",children:[Object(h.jsx)(C.a.Item,{children:Object(h.jsx)(C.a.Link,{href:"#login",children:"Login"})}),Object(h.jsx)(C.a.Item,{children:Object(h.jsx)(C.a.Link,{href:"https://yifeicua-imagequiz-backend.herokuapp.com/login/twitter",children:"Sign In with Twitter"})}),Object(h.jsx)(C.a.Item,{children:Object(h.jsx)(C.a.Link,{href:"#sign",children:"Signup"})})]})]})})},k=n(47),I=n(68),T=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],r=n[1];Object(c.useEffect)((function(){console.log(e.indexProp),b.getQuiz(e.indexProp).then((function(e){if(console.log(e),void 0!=e)return r(e);console.log("ceshicuowu")}))}),[]);for(var s=Object(c.useState)(0),o=(s.grade,s.setGrade,Object(u.g)(),function(t){t.target.id==t.target.value?e.getGrade(1):e.getGrade(0)}),i=[],j=0;j<a.length;j++)i.push(Object(h.jsx)("div",{children:Object(h.jsx)(y.a,{fluid:!0,children:Object(h.jsxs)(p.a,{className:"justify-content-center \r align-items-center",children:[Object(h.jsx)(k.a,{children:Object(h.jsx)(I.a,{src:a[j].picture,alt:a[j].answer})}),Object(h.jsx)(k.a,{children:Object(h.jsx)("fieldset",{children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(m.a.Group,{as:p.a,className:"mb-3",children:[Object(h.jsx)(m.a.Label,{as:"legend",column:!0,sm:2}),Object(h.jsxs)(k.a,{sm:10,children:[Object(h.jsx)(m.a.Check,{label:a[j].choices[0],type:"radio",name:"group1",id:a[j].choices[0],value:a[j].answer,onClick:o}),Object(h.jsx)(m.a.Check,{label:a[j].choices[1],type:"radio",name:"group1",id:a[j].choices[1],value:a[j].answer,onClick:o}),Object(h.jsx)(m.a.Check,{label:a[j].choices[2],type:"radio",name:"group1",id:a[j].choices[2],value:a[j].answer,onClick:o}),Object(h.jsx)(m.a.Control.Feedback,{label:a[j].answer,children:"You did it!"})]})]})})})})]})})}));return i.push(Object(h.jsx)(p.a,{children:Object(h.jsxs)(f.a,{children:["Your grade is ",e.gradeProp]},"info")})),i.push(Object(h.jsxs)(p.a,{children:[Object(h.jsx)(x.a,{variant:"primary",size:"lg",children:"Reapet same quiz"})," ",Object(h.jsx)(x.a,{href:"#",variant:"secondary",size:"lg",children:"Go Back to do Others"})," "]})),i},L=n(37),N=["children"];var A=function(e){var t=e.children,n=Object(i.a)(e,N),c=localStorage.getItem("customer");return console.log("undefined"==c),Object(h.jsx)(u.b,Object(o.a)(Object(o.a)({},n),{},{render:function(e){var n=e.location;return"undefined"!=c?t:Object(h.jsx)(u.a,{to:{pathname:"/login",state:{from:n}}})}}))},G=function(e){var t=Object(u.h)(),n=t.username,a=t.name;Object(u.g)();return Object(c.useEffect)((function(){console.log("in Twitter ..."),b.verifyTwitter(n).then((function(t){console.log(t),t.done&&(localStorage.setItem("customer",a),e.onAuthenticated())}))})),Object(h.jsx)(O,{})},P=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],r=function(){a(!0)},s=Object(c.useState)(void 0),o=Object(l.a)(s,2),i=o[0],j=o[1],d=Object(c.useState)(0),b=Object(l.a)(d,2),m=b[0],x=b[1];return localStorage.setItem("customer",void 0),Object(h.jsx)(L.a,{children:Object(h.jsxs)(y.a,{children:[Object(h.jsx)(p.a,{children:Object(h.jsx)(k.a,{children:Object(h.jsx)(S,{customerAuthenticated:n})})}),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{exact:!0,path:"/twitter/:username/:name",children:Object(h.jsx)(G,{onAuthenticated:r})}),Object(h.jsx)(u.b,{path:"/sign",children:Object(h.jsx)(g,{})}),Object(h.jsx)(u.b,{path:"/login",children:Object(h.jsx)(v,{onAuthenticated:r})}),Object(h.jsx)(A,{path:"/question",children:Object(h.jsx)(T,{indexProp:i,getGrade:function(e){x(m+e)},gradeProp:m})}),Object(h.jsx)(u.b,{path:"/",children:Object(h.jsx)(O,{getIndex:function(e){j(e)}})})]})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root")),q()}},[[63,1,2]]]);
//# sourceMappingURL=main.4eae207b.chunk.js.map