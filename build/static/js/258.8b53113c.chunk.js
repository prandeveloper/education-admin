(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[258],{2231:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var l=t(41),n=t(13),c=t(14),r=t(16),s=t(15),o=t(0),u=t.n(o),m=t(975),i=t(976),d=t(972),p=t(973),h=t(977),E=t(178),b=t(980),f=t(816),g=t(812),v=t(798),N=t(797),y=t(21),C=t(875),H=t.n(C),S=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault(),N.a.post("/addcolor",c.state).then((function(e){console.log(e),H()("Success!","Submitted SuccessFull!","success"),c.props.history.push("/app/colour/colourList")})).catch((function(e){console.log(e)}))},c.state={colorName:"",status:""},c}return Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(i.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(d.a,{listTag:"div"},u.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(p.a,{href:"/app/colour/colourList",tag:"a"},"Colour List"),u.a.createElement(p.a,{active:!0},"Add Colour"))))),u.a.createElement(h.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(i.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Colour")),u.a.createElement(i.a,null,u.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/app/colour/colourList")}},"Back"))),u.a.createElement(b.a,null,u.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(m.a,null,u.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a,null,"Colour"),u.a.createElement(v.a,{required:!0,type:"text",name:"colorName",placeholder:"",value:this.state.colorName,onChange:this.changeHandler}))),u.a.createElement(m.a,null,u.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(o.Component)},797:function(e,a,t){"use strict";var l=t(40),n=t.n(l).a.create({baseURL:"http://13.127.52.128/api/api/admin"});a.a=n}}]);
//# sourceMappingURL=258.8b53113c.chunk.js.map