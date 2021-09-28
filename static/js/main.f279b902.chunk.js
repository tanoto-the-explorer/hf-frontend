(this["webpackJsonphf-frontend"]=this["webpackJsonphf-frontend"]||[]).push([[0],{88:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(22),c=n.n(a),i=n(52),o=n(50),u=n(7),s=n(4),p=n.n(s),j=n(9),d=n(12),l=n(107),h=n(109),f=n(110),b=n(114),O=n(111),x=n(112),v=n(45),m=n.n(v),w=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_URL,g=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,y=function(){var e=Object(j.a)(p.a.mark((function e(t,n){var r,a,c,i,o,u,s,j=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=j.length>2&&void 0!==j[2]?j[2]:{},a=j.length>3?j[3]:void 0,c=j.length>4?j[4]:void 0,i={"Content-Type":"application/json"},a&&(i.authorization="Bearer ".concat(localStorage.getItem("hf-frontend@token"))),e.prev=5,e.next=8,m()({method:t,url:"".concat(w).concat(n),data:r,headers:i});case 8:(o=e.sent)&&c(o.data),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(5),window.alert((null===(u=e.t0.response)||void 0===u||null===(s=u.data)||void 0===s?void 0:s.message)||"Something wrong"),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("GET","/v1/recipe",t,!0,n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(p.a.mark((function e(t,n,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("GET","/v1/recipe/".concat(n),t,!0,r);case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("POST","/v1/recipe",t,!0,n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(p.a.mark((function e(t,n,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("PUT","/v1/recipe/".concat(n),t,!0,r);case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(p.a.mark((function e(t,n,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("DELETE","/v1/recipe/".concat(n),t,!0,r);case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),T=n(2),P=Object(l.a)({root:{marginBottom:30},title:{fontSize:14},pos:{marginBottom:12}}),D=function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)([]),o=Object(d.a)(i,2),u=o[0],s=o[1],l=Object(r.useState)(1),v=Object(d.a)(l,2),m=v[0],w=v[1],g=P();Object(r.useEffect)((function(){y()}),[]);var y=function(){var e=Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k({},(function(e){c(e.recipes),s(e.recipes.slice(10*m,10*(m+1)))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({},t,(function(e){var n=a.filter((function(e){return e._id!=t}));c(n)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)(h.a,{variant:"contained",color:"primary",onClick:function(){return e.history.push("/recipe/create/new")},children:"Create Recipe"}),Object(T.jsx)(f.a,{children:"Recipes List"}),u&&Object(T.jsx)(x.a,{count:a.length%10===0?a.length/10:a.length/10+1,page:m,onChange:function(e,t){return function(e){w(e);var t=a.slice(10*(e-1),10*e);s(t)}(t)}}),u&&u.map((function(t){return Object(T.jsx)(b.a,{className:g.root,children:Object(T.jsxs)(O.a,{children:[Object(T.jsxs)(f.a,{children:[Object(T.jsx)("b",{children:"Name "}),t.name]}),Object(T.jsxs)(f.a,{children:[Object(T.jsx)("b",{children:"Description "}),t.description]}),Object(T.jsxs)(f.a,{children:[Object(T.jsx)("b",{children:"Prep Time "}),t.prep_time_minutes||"unknown"]}),Object(T.jsxs)(f.a,{children:[Object(T.jsx)("b",{children:"Cook Time "}),t.cook_time_minutes||"unknown"]}),Object(T.jsx)(h.a,{variant:"contained",onClick:function(){return e.history.push("/recipe/edit/".concat(t._id))},children:Object(T.jsx)("p",{children:"Update"})}),Object(T.jsx)(h.a,{variant:"contained",onClick:function(){return S(t._id)},children:Object(T.jsx)("p",{children:"Delete"})})]})})}))]})},R=n(113),A=function(){var e=Object(j.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("POST","/auth/signup",t,!0,n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("POST","/auth/login",t,!0,n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(""),o=Object(d.a)(i,2),u=o[0],s=o[1],l=function(){var t=Object(j.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),g.test(a)){t.next=4;break}return window.alert("Invalid email!"),t.abrupt("return");case 4:I({email:a,password:u},(function(t){localStorage.setItem("hf-frontend@token",t.token),e.history.push("/recipe")}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)(f.a,{children:"Email"}),Object(T.jsx)(R.a,{type:"text",name:"email",value:a,required:!0,onChange:function(e){return c(e.target.value)}}),Object(T.jsx)(f.a,{children:"Password"}),Object(T.jsx)(R.a,{type:"password",name:"password",value:u,required:!0,onChange:function(e){return s(e.target.value)}}),Object(T.jsx)("br",{}),Object(T.jsx)(h.a,{variant:"contained",color:"primary",onClick:l,children:"Submit"}),Object(T.jsx)(h.a,{variant:"contained",color:"secondary",onClick:function(){return e.history.push("/register")},children:"Register"})]})};var L=[{exact:!0,path:"/register",component:function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(""),o=Object(d.a)(i,2),u=o[0],s=o[1],p=Object(r.useState)(""),j=Object(d.a)(p,2),l=j[0],b=j[1];return Object(T.jsxs)("div",{children:[Object(T.jsx)(f.a,{children:"Email"}),Object(T.jsx)(R.a,{type:"text",name:"email",value:a,required:!0,onChange:function(e){return c(e.target.value)}}),Object(T.jsx)(f.a,{children:"Password"}),Object(T.jsx)(R.a,{type:"password",name:"password",value:u,required:!0,onChange:function(e){return s(e.target.value)}}),Object(T.jsx)(f.a,{children:"Confirm Password"}),Object(T.jsx)(R.a,{type:"password",name:"new_password",value:l,required:!0,onChange:function(e){return b(e.target.value)}}),Object(T.jsx)("br",{}),Object(T.jsx)(h.a,{variant:"contained",color:"primary",onClick:function(t){t.preventDefault(),g.test(a)?u.length<8?window.alert("Password must be more than 8 characters!"):u==l?A({email:a,password:u},(function(t){localStorage.setItem("hf-frontend@token",t.token),e.history.push("/recipe")})):window.alert("Password doesn't match!"):window.alert("Invalid email!")},children:"Submit"}),Object(T.jsx)(h.a,{variant:"contained",color:"secondary",onClick:function(){return e.history.push("/login")},children:"Login"})]})},needAuth:!1},{exact:!0,path:"/recipe",component:D,needAuth:!0},{exact:!0,path:"/recipe/:type/:id",component:function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(""),o=Object(d.a)(i,2),u=o[0],s=o[1],l=Object(r.useState)(""),b=Object(d.a)(l,2),O=b[0],x=b[1],v=Object(r.useState)(""),m=Object(d.a)(v,2),w=m[0],g=m[1],y=e.match.params,k=y.id,E=y.type;Object(r.useEffect)((function(){k&&"edit"==E&&P(k)}),[]);var P=function(){var e=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S({},t,(function(e){c(e.recipe.name),s(e.recipe.description),x(e.recipe.prep_time_minutes),g(e.recipe.cook_time_minutes)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var t=Object(j.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={name:a,description:u,prep_time_minutes:O,cook_time_minutes:w},t.next=3,_(n,(function(){e.history.push("/recipe")}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=Object(j.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={name:a,description:u,prep_time_minutes:O,cook_time_minutes:w},t.next=3,C(n,k,(function(){e.history.push("/recipe")}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)(f.a,{children:"Name"}),Object(T.jsx)(R.a,{type:"text",value:a,required:!0,onChange:function(e){return c(e.target.value)}}),Object(T.jsx)(f.a,{children:"Description"}),Object(T.jsx)(R.a,{type:"text",value:u,required:!0,onChange:function(e){return s(e.target.value)}}),Object(T.jsx)(f.a,{children:"Prep Time"}),Object(T.jsx)(R.a,{type:"text",value:O,onChange:function(e){return x(e.target.value)}}),Object(T.jsx)(f.a,{children:"Cook Time"}),Object(T.jsx)(R.a,{type:"text",value:w,onChange:function(e){return g(e.target.value)}}),Object(T.jsx)("br",{}),"edit"==E?Object(T.jsx)(h.a,{onClick:A,variant:"contained",color:"secondary",children:Object(T.jsx)(f.a,{children:"Update"})}):"create"==E?Object(T.jsx)(h.a,{onClick:D,variant:"contained",color:"secondary",children:Object(T.jsx)(f.a,{children:"Create"})}):Object(T.jsx)(T.Fragment,{})]})},needAuth:!0}],U=function(){var e=localStorage.getItem("hf-frontend@token");return Object(T.jsx)(o.a,{children:Object(T.jsxs)(u.d,{children:[Object(T.jsx)(u.b,{exact:!0,path:"/login",component:q}),L.map((function(t,n){var r=t.component;return Object(T.jsx)(u.b,{path:t.path,exact:t.exact,render:function(n){return e||!t.needAuth?Object(T.jsx)(r,Object(i.a)({},n)):Object(T.jsx)(u.a,{to:"/login"})}},"router".concat(n))}))]})})};c.a.render(Object(T.jsx)(U,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.f279b902.chunk.js.map