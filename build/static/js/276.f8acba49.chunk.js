(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[276],{2190:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var n=t(41),l=t(13),r=t(14),s=t(16),m=t(15),c=t(0),i=t.n(c),u=t(975),d=t(976),o=t(972),h=t(973),E=t(977),p=t(178),g=t(980),b=t(816),v=t(812),y=t(798),f=t(797),N=t(21),C=t(875),w=t.n(C),H=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),f.a.post("/addwarehouse",r.state).then((function(e){console.log(e),w()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/warehouse/warehouseList")})).catch((function(e){console.log(e)}))},r.state={warehousename:"",email:"",phone_no:"",address1:"",address2:"",city:"",pin:""},r}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(o.a,{listTag:"div"},i.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(h.a,{href:"/app/warehouse/warehouseList",tag:"a"},"Warehouse List"),i.a.createElement(h.a,{active:!0},"Add Warehouse"))))),i.a.createElement(E.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Warehouse")),i.a.createElement(d.a,null,i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/warehouse/warehouseList")}},"Back"))),i.a.createElement(g.a,null,i.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"WareHouse Name"),i.a.createElement(y.a,{required:!0,type:"text",name:"warehousename",placeholder:"Enter Name",value:this.state.warehousename,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"Email"),i.a.createElement(y.a,{required:!0,type:"email",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"Phone Number"),i.a.createElement(y.a,{required:!0,type:"number",name:"phone_no",placeholder:"Enter Phone No.",value:this.state.phone_no,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"Address Line 1"),i.a.createElement(y.a,{required:!0,type:"textarea",name:"address1",placeholder:"Enter Address Line 1",value:this.state.address1,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"Address Line 2"),i.a.createElement(y.a,{required:!0,type:"textarea",name:"address2",placeholder:"Enter Address Line 2",value:this.state.address2,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"City"),i.a.createElement(y.a,{required:!0,type:"text",name:"city",placeholder:"Enter City",value:this.state.city,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"PinCode"),i.a.createElement(y.a,{required:!0,type:"number",name:"pin",placeholder:"Enter Pin Code",value:this.state.pin,onChange:this.changeHandler}))),i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(c.Component)},797:function(e,a,t){"use strict";var n=t(40),l=t.n(n).a.create({baseURL:"http://13.127.52.128/api/api/admin"});a.a=l}}]);
//# sourceMappingURL=276.f8acba49.chunk.js.map