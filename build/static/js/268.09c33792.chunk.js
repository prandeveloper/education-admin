(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[268],{2221:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var n=t(41),l=t(13),s=t(14),c=t(16),r=t(15),i=t(0),m=t.n(i),u=t(975),o=t(976),d=t(972),p=t(973),h=t(977),E=t(178),b=t(980),f=t(816),g=t(812),v=t(798),z=t(797),N=t(21),S=t(875),y=t.n(S),H=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),z.a.post("/addsize",s.state).then((function(e){console.log(e),y()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/size/sizeList")})).catch((function(e){console.log(e)}))},s.state={sizeName:"",status:""},s}return Object(s.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(o.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(d.a,{listTag:"div"},m.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(p.a,{href:"/app/size/sizeList",tag:"a"},"Size List"),m.a.createElement(p.a,{active:!0},"Add Size"))))),m.a.createElement(h.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(o.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Size")),m.a.createElement(o.a,null,m.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/size/sizeList")}},"Back"))),m.a.createElement(b.a,null,m.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(g.a,null,"Size"),m.a.createElement(v.a,{required:!0,type:"text",name:"sizeName",placeholder:"",value:this.state.sizeName,onChange:this.changeHandler}))),m.a.createElement(u.a,null,m.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(i.Component)},797:function(e,a,t){"use strict";var n=t(40),l=t.n(n).a.create({baseURL:"http://13.127.52.128/api/api/admin"});a.a=l}}]);
//# sourceMappingURL=268.09c33792.chunk.js.map