(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[207],{2143:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var n=t(41),l=t(13),r=t(14),s=t(16),c=t(15),m=t(0),d=t.n(m),o=t(1118),i=t(1119),u=t(1115),h=t(1116),p=t(1120),E=t(182),g=t(1123),b=t(802),v=t(799),y=t(794),f=t(177),N=t(21),w=t(872),C=t.n(w),H=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;f.a.post("/editwarehouse/".concat(a),r.state).then((function(e){console.log(e),C()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/warehouse/warehouseList")})).catch((function(e){console.log(e)}))},r.state={warehousename:"",email:"",phone_no:"",address1:"",address2:"",city:"",pin:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;f.a.get("/getonewarehouse/".concat(a)).then((function(a){console.log(a),e.setState({warehousename:a.data.data.warehousename,email:a.data.data.email,phone_no:a.data.data.phone_no,address1:a.data.data.address1,address2:a.data.data.address2,city:a.data.data.city,pin:a.data.data.pin})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(o.a,null,d.a.createElement(i.a,{sm:"12"},d.a.createElement("div",null,d.a.createElement(u.a,{listTag:"div"},d.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),d.a.createElement(h.a,{href:"/app/warehouse/warehouseList",tag:"a"},"Warehouse List"),d.a.createElement(h.a,{active:!0},"Edit Warehouse"))))),d.a.createElement(p.a,null,d.a.createElement(o.a,{className:"m-2"},d.a.createElement(i.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Warehouse")),d.a.createElement(i.a,null,d.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/warehouse/warehouseList")}},"Back"))),d.a.createElement(g.a,null,d.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(o.a,null,d.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(v.a,null,"WareHouse Name"),d.a.createElement(y.a,{required:!0,type:"text",name:"warehousename",placeholder:"Enter Name",value:this.state.warehousename,onChange:this.changeHandler})),d.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(v.a,null,"Email"),d.a.createElement(y.a,{required:!0,type:"email",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.changeHandler})),d.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(v.a,null,"Phone Number"),d.a.createElement(y.a,{required:!0,type:"number",name:"phone_no",placeholder:"Enter Phone No.",value:this.state.phone_no,onChange:this.changeHandler})),d.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(v.a,null,"Address Line 1"),d.a.createElement(y.a,{required:!0,type:"textarea",name:"address1",placeholder:"Enter Address Line 1",value:this.state.address1,onChange:this.changeHandler})),d.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(v.a,null,"Address Line 2"),d.a.createElement(y.a,{required:!0,type:"textarea",name:"address2",placeholder:"Enter Address Line 2",value:this.state.address2,onChange:this.changeHandler})),d.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(v.a,null,"City"),d.a.createElement(y.a,{required:!0,type:"text",name:"city",placeholder:"Enter City",value:this.state.city,onChange:this.changeHandler})),d.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(v.a,null,"PinCode"),d.a.createElement(y.a,{required:!0,type:"number",name:"pin",placeholder:"Enter Pin Code",value:this.state.pin,onChange:this.changeHandler}))),d.a.createElement(o.a,null,d.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(m.Component)}}]);
//# sourceMappingURL=207.1f1726a6.chunk.js.map