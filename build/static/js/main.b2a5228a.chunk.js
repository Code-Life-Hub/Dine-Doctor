(this["webpackJsonpstarter-restaurant-reservation-front-end"]=this["webpackJsonpstarter-restaurant-reservation-front-end"]||[]).push([[0],{18:function(e,t,r){},26:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(19),s=r.n(c),i=r(4),l=(r(26),r(9)),o=(r(18),r(0));var b=function(){return Object(o.jsx)("nav",{className:"navbar navbar-dark align-items-start p-0",children:Object(o.jsxs)("div",{className:"container-fluid d-flex flex-column flex-sm-row p-0",children:[Object(o.jsx)(l.b,{className:"navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0",to:"/",children:Object(o.jsx)("div",{className:"sidebar-brand-text mx-3",id:"top",children:Object(o.jsx)("span",{children:"Periodic Tables"})})}),Object(o.jsx)("hr",{className:"sidebar-divider my-0"}),Object(o.jsxs)("ul",{className:"nav navbar-nav text-light flex-row flex-sm-column",id:"accordionSidebar",children:[Object(o.jsx)("li",{className:"nav-item  ",children:Object(o.jsxs)(l.b,{className:"nav-link",to:"/dashboard",children:[Object(o.jsx)("span",{className:"oi oi-dashboard"}),"\xa0Dashboard"]})}),Object(o.jsx)("li",{className:"nav-item pl-2",children:Object(o.jsxs)(l.b,{className:"nav-link",to:"/search",children:[Object(o.jsx)("span",{className:"oi oi-magnifying-glass"}),"\xa0Search"]})}),Object(o.jsx)("li",{className:"nav-item pl-2",children:Object(o.jsxs)(l.b,{className:"nav-link",to:"/reservations/new",children:[Object(o.jsx)("span",{className:"oi oi-plus"}),"\xa0New Reservation"]})}),Object(o.jsx)("li",{className:"nav-item pl-2",children:Object(o.jsxs)(l.b,{className:"nav-link",to:"/tables/new",children:[Object(o.jsx)("span",{className:"oi oi-layers"}),"\xa0New Table"]})})]})]})})},u=r(3),d=r(2),j=r.n(d),h=r(5),m=/\d\d\d\d-\d\d-\d\d/;function p(e){return"".concat(e.getFullYear().toString(10),"-").concat((e.getMonth()+1).toString(10).padStart(2,"0"),"-").concat(e.getDate().toString(10).padStart(2,"0"))}function O(e){return e.match(m)[0]}function x(){return p(new Date)}function v(e){var t=e.split("-"),r=Object(u.a)(t,3),n=r[0],a=r[1],c=r[2],s=new Date(n,a-=1,c);return s.setMonth(s.getMonth()),s.setDate(s.getDate()-1),p(s)}function f(e){var t=e.split("-"),r=Object(u.a)(t,3),n=r[0],a=r[1],c=r[2],s=new Date(n,a-=1,c);return s.setMonth(s.getMonth()),s.setDate(s.getDate()+1),p(s)}function N(e){return e.reservation_date=O(e.reservation_date),e}function y(e){return Array.isArray(e)?e.map(N):N(e)}var g="http://localhost:5001",w=new Headers;function _(e,t,r){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(j.a.mark((function e(t,r,n){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,r);case 3:if(204!==(a=e.sent).status){e.next=6;break}return e.abrupt("return",null);case 6:return e.next=8,a.json();case 8:if(!(c=e.sent).error){e.next=11;break}return e.abrupt("return",Promise.reject({message:c.error}));case 11:return e.abrupt("return",c.data);case 14:if(e.prev=14,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=19;break}throw console.error(e.t0.stack),e.t0;case 19:return e.abrupt("return",Promise.resolve(n));case 20:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function S(e,t){return C.apply(this,arguments)}function C(){return(C=Object(h.a)(j.a.mark((function e(t,r){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(g,"/reservations")),Object.entries(t).forEach((function(e){var t=Object(u.a)(e,2),r=t[0],a=t[1];return n.searchParams.append(r,a.toString())})),e.next=4,_(n,{headers:w,signal:r},[]).then(y).then(y);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return E.apply(this,arguments)}function E(){return(E=Object(h.a)(j.a.mark((function e(t,r){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(g,"/reservations")),a={method:"POST",headers:w,body:JSON.stringify({data:t}),signal:r},e.next=4,_(n,a,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t){return F.apply(this,arguments)}function F(){return(F=Object(h.a)(j.a.mark((function e(t,r){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(g,"/reservations/").concat(t)),e.next=3,_(n,{signal:r},{}).then(y).then(y);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return T.apply(this,arguments)}function T(){return(T=Object(h.a)(j.a.mark((function e(t,r){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(g,"/reservations/").concat(t.reservation_id)),a={method:"PUT",headers:w,body:JSON.stringify({data:t})},e.next=4,_(n,a,t).then(y).then(y);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return R.apply(this,arguments)}function R(){return(R=Object(h.a)(j.a.mark((function e(t,r){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(g,"/tables")),a={method:"POST",headers:w,body:JSON.stringify({data:t}),signal:r},e.next=4,_(n,a,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return P.apply(this,arguments)}function P(){return(P=Object(h.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URL("".concat(g,"/tables")),n={headers:w,signal:t},e.next=4,_(r,n,[]);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t,r){return q.apply(this,arguments)}function q(){return(q=Object(h.a)(j.a.mark((function e(t,r,n){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URL("".concat(g,"/tables/").concat(t,"/seat/")),c={method:"PUT",headers:w,body:JSON.stringify({data:{reservation_id:r}}),signal:n},e.next=4,_(a,c,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return B.apply(this,arguments)}function B(){return(B=Object(h.a)(j.a.mark((function e(t,r){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(g,"/reservations/").concat(t,"/status")),a={method:"PUT",headers:w,body:JSON.stringify({data:{status:"cancelled"}}),signal:r},e.next=4,_(n,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=Object(h.a)(j.a.mark((function e(t,r){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(g,"/tables/").concat(t,"/seat/")),a={method:"DELETE",headers:w,body:JSON.stringify({data:t}),signal:r},e.next=4,_(n,a,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return W.apply(this,arguments)}function W(){return(W=Object(h.a)(j.a.mark((function e(t,r){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(g,"/reservations?mobile_number=").concat(t)),e.next=3,_(n,{signal:r}).then(y).then(y);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}w.append("Content-Type","application/json");var z=function(){return new URLSearchParams(Object(i.h)().search)};var G=function(e){var t=e.error;return t&&Object(o.jsxs)("div",{className:"alert alert-danger m-2",children:["Error: ",t.message]})},K=function(e){var t=e.reservation_id,r=Object(n.useState)(null),a=Object(u.a)(r,2),c=a[0],s=a[1],i=function(){var e=Object(h.a)(j.a.mark((function e(r){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),s(null),n=new AbortController,!window.confirm("Do you want to cancel this reservation? This cannot be undone.")){e.next=14;break}return e.prev=5,e.next=8,J(t,n.signal);case 8:window.location.reload(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),"AbortError"!==e.t0.name&&s(e.t0);case 14:return e.abrupt("return",(function(){return n.abort()}));case 15:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)(G,{error:c}),Object(o.jsx)("button",{className:"btn btn-secondary","data-reservation-id-cancel":t,onClick:i,children:"Cancel"})]})},Q=function(e){var t=e.reservations,r=e.date,n=t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:e.reservation_id}),Object(o.jsx)("td",{children:e.first_name}),Object(o.jsx)("td",{children:e.last_name}),Object(o.jsx)("td",{children:e.mobile_number}),Object(o.jsx)("td",{children:e.reservation_date}),Object(o.jsx)("td",{children:e.reservation_time}),Object(o.jsx)("td",{children:e.people}),Object(o.jsx)("td",{"data-reservation-id-status":e.reservation_id,children:e.status}),Object(o.jsx)("td",{children:"booked"===e.status&&Object(o.jsx)("a",{className:"btn btn-success",href:"/reservations/".concat(e.reservation_id,"/seat"),children:"Seat"})}),"booked"===e.status||"seated"===e.status?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{className:"btn btn-primary",href:"/reservations/".concat(e.reservation_id,"/edit"),children:"Edit"})}),Object(o.jsx)("td",{children:Object(o.jsx)(K,{reservation_id:e.reservation_id})})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("td",{}),Object(o.jsx)("td",{})]})]},e.reservation_id)}));return t.length>0?Object(o.jsx)("div",{className:"table table-striped table-responsive table-sm",children:Object(o.jsxs)("table",{className:"table table-hover",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"#"}),Object(o.jsx)("th",{scope:"col",children:"First Name"}),Object(o.jsx)("th",{scope:"col",children:"Last Name"}),Object(o.jsx)("th",{scope:"col",children:"Mobile Number"}),Object(o.jsx)("th",{scope:"col",children:"Date"}),Object(o.jsx)("th",{scope:"col",children:"Time"}),Object(o.jsx)("th",{scope:"col",children:"Number of people"}),Object(o.jsx)("th",{scope:"col",children:"Status"}),Object(o.jsx)("th",{scope:"col"}),Object(o.jsx)("th",{scope:"col"}),Object(o.jsx)("th",{scope:"col"})]})}),Object(o.jsx)("tbody",{children:n})]})}):Object(o.jsxs)("div",{className:"container alert alert-dark",role:"alert",style:{minWidth:"100%"},children:[" ","No reservations found for ".concat(r,".")]})},V=function(e){var t=e.table,r=e.clickHandler,n=e.error;return t.reservation_id&&Object(o.jsxs)("div",{children:[Object(o.jsx)(G,{error:n}),Object(o.jsx)("button",{"data-table-id-finish":"".concat(t.table_id),className:"btn btn-danger",type:"button",onClick:function(e){e.preventDefault(),r(t.table_id),console.log("table.table_id",t.table_id)},children:"Finish"})]})},X=function(e){var t=e.tables,r=e.clickHandler,n=e.error,a=t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:e.table_name}),Object(o.jsx)("td",{children:e.capacity}),Object(o.jsx)("td",{"data-table-id-status":e.table_id,children:null===e.reservation_id?"free":"occupied"}),Object(o.jsx)("td",{children:Object(o.jsx)(V,{table:e,clickHandler:r,error:n})})]},e.table_id)}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h4",{children:"Tables"}),Object(o.jsx)("div",{className:"table table-striped table-responsive table-sm",children:Object(o.jsxs)("table",{className:"table table-hover",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Table name"}),Object(o.jsx)("th",{scope:"col",children:"Capacity"}),Object(o.jsx)("th",{scope:"col",children:"Table status"}),Object(o.jsx)("th",{scope:"col",children:"Action"})]})}),Object(o.jsx)("tbody",{children:a})]})})]})};var Z=function(e){var t=e.date,r=Object(i.g)(),a=z(),c=Object(i.j)(),s=Object(n.useState)([]),l=Object(u.a)(s,2),b=l[0],d=l[1],j=Object(n.useState)(null),h=Object(u.a)(j,2),m=h[0],p=h[1],O=Object(n.useState)(t),N=Object(u.a)(O,2),y=N[0],g=N[1],w=Object(n.useState)(null),_=Object(u.a)(w,2),k=_[0],C=_[1],D=Object(n.useState)([]),E=Object(u.a)(D,2),H=E[0],F=E[1];return Object(n.useEffect)((function(){var e=new AbortController;return p(null),S({date:y},e.signal).then(d).catch(p),U(e.signal).then(F).catch(C),function(){return e.abort()}}),[y]),Object(n.useEffect)((function(){!function(){var e=a.get("date");g(e||x())}()}),[a,c]),Object(o.jsxs)("main",{className:"col-md-10 ms-sm-auto col-lg-10 px-md-4",children:[Object(o.jsxs)("div",{className:"d-flex justify-content-between flex-wrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"h1",children:"Dashboard"})}),Object(o.jsx)("div",{className:"btn-toolbar mb-2 mb-md-0",children:Object(o.jsxs)("div",{className:"btn-group me-2",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){r.push("/dashboard?date=".concat(v(y))),g(v(y))},children:"Previous day"}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){r.push("/dashboard?date=".concat(x())),g(x())},children:"Today"}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){r.push("/dashboard?date=".concat(f(y))),g(f(y))},children:"Next day"})]})})]}),Object(o.jsxs)("div",{className:"row mb-3",children:[Object(o.jsxs)("h4",{className:"col text-center text-nowrap",children:["Reservations for ",y]}),Object(o.jsx)(G,{error:m}),b?Object(o.jsx)(Q,{reservations:b,date:y}):"Loading..."]}),Object(o.jsx)("div",{className:"row mb-3",children:H?Object(o.jsx)(X,{tables:H,error:k,clickHandler:function(e){var t=new AbortController;return console.log("table_id",e),window.confirm("Is this table ready to seat new guests? This cannot be undone.")&&function(e,t){return Y.apply(this,arguments)}(e,t.signal).then((function(e){U(t.signal).then(F).catch(C),S({date:y},t.signal).then(d).catch(p)})),function(){return t.abort()}}}):"Loading..."})]})},$=r(12),ee=r(7),te=function(e){var t=e.reservation,r=e.submitHandler,n=e.changeHandler,a=e.cancelHandler;return Object(o.jsx)("main",{children:Object(o.jsxs)("form",{onSubmit:r,children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"first_name",children:[" ","First Name:"]}),Object(o.jsx)("input",{className:"form-control",type:"text",id:"first_name",name:"first_name",required:!0,value:t.first_name,onChange:n,placeholder:"Enter guest's first name..."})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"last_name",children:[" ","Last Name:"]}),Object(o.jsx)("input",{className:"form-control",type:"text",id:"last_name",name:"last_name",required:!0,value:t.last_name,onChange:n,placeholder:"Enter guest's last name..."})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"mobile_number",children:[" ","Phone number:"]}),Object(o.jsx)("input",{className:"form-control",type:"tel",id:"mobile_number",name:"mobile_number",required:!0,value:t.mobile_number,onChange:n,placeholder:"123-456-7890"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"reservation_date",children:[" ","Reservation date:"]}),Object(o.jsx)("input",{className:"form-control",type:"date",id:"reservation_date",name:"reservation_date",required:!0,value:t.reservation_date,onChange:n,placeholder:"YYYY-MM-DD",pattern:"\\d{4}-\\d{2}-\\d{2}"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"reservation_time",children:[" ","Reservation time:"]}),Object(o.jsx)("input",{className:"form-control",type:"time",id:"reservation_time",name:"reservation_time",required:!0,value:t.reservation_time,onChange:n,placeholder:"HH:MM",pattern:"[0-9]{2}:[0-9]{2}"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"people",children:[" ","Number of guests:"]}),Object(o.jsx)("input",{className:"form-control",type:"number",id:"people",name:"people",required:!0,value:t.people,onChange:n,placeholder:1,min:1})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),Object(o.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:a,children:"Cancel"})]})]})})},re=function(){var e=Object(i.g)(),t=Object(n.useState)(Object(ee.a)({},{first_name:"",last_name:"",mobile_number:"",reservation_date:"",reservation_time:"",people:""})),r=Object(u.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(null),l=Object(u.a)(s,2),b=l[0],d=l[1],m=function(){var t=Object(h.a)(j.a.mark((function t(r){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),d(null),n=new AbortController,a.people=Number(a.people),t.prev=4,t.next=7,D(a,n.signal);case 7:c=t.sent,e.push("/dashboard?date=".concat(O(c.reservation_date))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),"AbortError"!==t.t0.name&&d(t.t0);case 14:return t.abrupt("return",(function(){return n.abort()}));case 15:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"mb-3 pt-3",children:"Create Reservation"}),Object(o.jsx)(G,{error:b}),Object(o.jsx)(te,{reservation:a,submitHandler:m,changeHandler:function(e){var t=e.target,r=t.name,n=t.value;"mobile_number"===r&&(n=n.replace(/\D/g,"")),c((function(e){return Object(ee.a)(Object(ee.a)({},e),{},Object($.a)({},r,n))}))},cancelHandler:function(){e.goBack()}})]})},ne=function(){var e=Object(i.i)().reservation_id,t=Object(i.g)(),r=Object(n.useState)(""),a=Object(u.a)(r,2),c=a[0],s=a[1],l=Object(n.useState)([]),b=Object(u.a)(l,2),d=b[0],m=b[1],p=Object(n.useState)(null),O=Object(u.a)(p,2),x=O[0],v=O[1];Object(n.useEffect)((function(){var e=new AbortController;return v(null),U(e.signal).then(m).catch(v),function(){return e.abort()}}),[e]);var f=function(){var r=Object(h.a)(j.a.mark((function r(n){var a,s,i;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),v(null),a=new AbortController,s=Number(c.table_id),i=Number(e),r.prev=5,r.next=8,M(s,i,a.signal);case 8:t.push("/"),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(5),"AbortError"!==r.t0.name&&v(r.t0);case 14:return r.abrupt("return",(function(){return a.abort()}));case 15:case"end":return r.stop()}}),r,null,[[5,11]])})));return function(e){return r.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)(G,{error:x})}),Object(o.jsx)("div",{className:"card mt-3",children:Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("form",{onSubmit:f,children:[Object(o.jsxs)("h2",{className:"card-title",children:["Seat reservation number ",e]}),Object(o.jsxs)("div",{className:"card-text mb-3",children:[Object(o.jsx)("label",{htmlFor:"table_id",className:"form-label",children:"Table number:"}),Object(o.jsxs)("select",{id:"table_id",name:"table_id",onChange:function(e){var t=e.target,r=t.name,n=t.value;s((function(e){return Object(ee.a)(Object(ee.a)({},e),{},Object($.a)({},r,n))}))},value:c.table_id,className:"form-control",children:[Object(o.jsx)("option",{value:"",children:"Select a table"}),d.map((function(e){return Object(o.jsxs)("option",{value:e.table_id,children:[e.table_name," - ",e.capacity]},e.table_id)}))]})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary card-link",children:"Submit"}),Object(o.jsx)("button",{type:"button",className:"btn btn-secondary card-link",onClick:function(){return t.goBack()},children:"Cancel"})]})})})]})},ae=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(null),s=Object(u.a)(c,2),i=s[0],l=s[1],b=Object(n.useState)([]),d=Object(u.a)(b,2),m=d[0],p=d[1],O=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l(null),n=new AbortController,e.prev=3,e.next=6,I(r,n.signal);case 6:c=e.sent,p(c),a(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),"AbortError"!==e.t0.name&&l(e.t0);case 14:return e.abrupt("return",(function(){return n.abort()}));case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("main",{children:[Object(o.jsxs)("div",{className:"col form-group",children:[Object(o.jsxs)("div",{className:"row d-md-flex my-3",children:[Object(o.jsx)("h2",{children:"Find reservation"}),Object(o.jsx)(G,{error:i})]}),Object(o.jsx)("form",{onSubmit:O,children:Object(o.jsxs)("div",{className:"row input-group mb-3",children:[Object(o.jsx)("input",{type:"tel",className:"form-control",name:"mobile_number",placeholder:"Enter a customer's phone number","aria-label":"mobile_number","aria-describedby":"basic-addon2",required:!0,value:r,onChange:function(e){var t=e.target.value.replace(/\D/g,"");a(t)}}),Object(o.jsx)("button",{className:"btn btn-primary",id:"basic-addon2",type:"submit",children:"Find"})]})})]}),Object(o.jsxs)("div",{className:"container-fluid col",children:[Object(o.jsx)("div",{className:"row d-md-flex mb-3",children:Object(o.jsx)("h4",{children:"Search Result"})}),m.length>0?Object(o.jsx)("div",{className:"row d-md-flex mb-3",children:Object(o.jsx)(Q,{reservations:m})}):Object(o.jsx)("div",{className:"row d-md-flex mb-3 alert alert-dark text-center",role:"alert",children:"No reservations found"})]})]})},ce=function(){var e=Object(i.g)(),t=Object(i.i)().reservation_id,r=Object(n.useState)({}),a=Object(u.a)(r,2),c=a[0],s=a[1],l=Object(n.useState)(null),b=Object(u.a)(l,2),d=b[0],m=b[1];Object(n.useEffect)((function(){s({});var e=new AbortController;function r(){return(r=Object(h.a)(j.a.mark((function r(){var n;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,H(t,e.signal);case 3:n=r.sent,s(n),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),"AbortError"!==r.t0.name&&m(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){return e.abort()}}),[t]);var p=function(){var t=Object(h.a)(j.a.mark((function t(r){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),m(null),n=new AbortController,c.people=Number(c.people),t.prev=4,t.next=7,A(c,n.signal);case 7:a=t.sent,e.push("/dashboard?date=".concat(O(a.reservation_date))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),"AbortError"!==t.t0.name&&m(t.t0);case 14:return t.abrupt("return",(function(){return n.abort()}));case 15:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e){return t.apply(this,arguments)}}();return c.reservation_id?Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{children:["Edit reservation ",c.reservation_id]}),Object(o.jsx)(G,{error:d}),Object(o.jsx)(te,{reservation:c,changeHandler:function(e){var t=e.target;"mobile_number"===t.name&&(t.value=t.value.replace(/\D/g,"")),s(Object(ee.a)(Object(ee.a)({},c),{},Object($.a)({},t.name,t.value)))},submitHandler:p,cancelHandler:function(){e.goBack()}})]}):"Loading..."},se=function(e){var t=e.submitHandler,r=e.cancelHandler,n=e.changeHandler,a=e.formData;return Object(o.jsxs)("form",{onSubmit:t,children:[Object(o.jsx)("h2",{className:"mb-3 pt-3",children:"Create new table"}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsxs)("label",{className:"form-label",htmlFor:"table_name",children:[" ","Table name"]}),Object(o.jsx)("input",{className:"form-control",name:"table_name",id:"table_name",type:"text",required:!0,value:a.table_name,onChange:n,placeholder:"Table name"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{className:"form-label",htmlFor:"capacity",children:"Capacity"}),Object(o.jsx)("input",{className:"form-control",name:"capacity",id:"capacity",type:"number",required:!0,value:a.capacity,onChange:n,placeholder:"1",min:1})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),Object(o.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:r,children:"Cancel"})]})]})},ie=function(){var e=Object(i.g)(),t=Object(n.useState)(Object(ee.a)({},{table_name:"",capacity:""})),r=Object(u.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(null),l=Object(u.a)(s,2),b=l[0],d=l[1],m=function(){var t=Object(h.a)(j.a.mark((function t(r){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),d(null),n=new AbortController,a.capacity=Number(a.capacity),t.prev=4,t.next=7,L(a,n.signal);case 7:e.push("/"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),d(t.t0);case 13:return t.abrupt("return",(function(){return n.abort()}));case 14:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsxs)("main",{children:[Object(o.jsx)(G,{error:b}),Object(o.jsx)(se,{submitHandler:m,cancelHandler:function(){e.goBack()},formData:a,changeHandler:function(e){var t=e.target,r=t.name,n=t.value;c((function(e){return Object(ee.a)(Object(ee.a)({},e),{},Object($.a)({},r,n))}))}})]})};var le=function(){return Object(o.jsx)("div",{className:"NotFound",children:Object(o.jsx)("h1",{children:"Not Found"})})};var oe=function(){return Object(o.jsxs)(i.d,{children:[Object(o.jsx)(i.b,{exact:!0,path:"/",children:Object(o.jsx)(i.a,{to:"/dashboard"})}),Object(o.jsx)(i.b,{exact:!0,path:"/reservations",children:Object(o.jsx)(i.a,{to:"/dashboard"})}),Object(o.jsx)(i.b,{path:"/dashboard",children:Object(o.jsx)(Z,{date:x()})}),Object(o.jsx)(i.b,{path:"/reservations/new",children:Object(o.jsx)(re,{})}),Object(o.jsx)(i.b,{path:"/reservations/:reservation_id/edit",children:Object(o.jsx)(ce,{})}),Object(o.jsx)(i.b,{path:"/reservations/:reservation_id/seat",children:Object(o.jsx)(ne,{})}),Object(o.jsx)(i.b,{path:"/tables/new",children:Object(o.jsx)(ie,{})}),Object(o.jsx)(i.b,{path:"/search",children:Object(o.jsx)(ae,{})}),Object(o.jsx)(i.b,{children:Object(o.jsx)(le,{})})]})};var be=function(){return Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsxs)("div",{className:"row h-100",id:"navbar",children:[Object(o.jsx)("div",{className:"col-md-2 side-bar",children:Object(o.jsx)(b,{})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)(oe,{})})]}),Object(o.jsx)("div",{className:"row h-10",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"col justify-content-between py-3 my-4 border-top",children:Object(o.jsx)("p",{className:"row mb-0 text-muted",children:Object(o.jsx)("a",{href:"#top",children:"Back to top"})})})})})]})};var ue=function(){return Object(o.jsx)(i.d,{children:Object(o.jsx)(i.b,{path:"/",children:Object(o.jsx)(be,{})})})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(ue,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b2a5228a.chunk.js.map