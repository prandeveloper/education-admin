(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[255],{2229:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var n=t(41),l=t(13),c=t(14),r=t(16),o=t(15),s=t(0),m=t.n(s),u=t(990),i=t(991),d=t(987),p=t(988),h=t(992),E=t(178),f=t(995),b=t(819),v=t(814),g=t(798),N=t(797),y=t(21),C=t(883),S=t.n(C),k=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=a.call(this,e)).changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(n.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault();var a=c.props.match.params.id;N.a.post("/editcolor/".concat(a),c.state).then((function(e){console.log(e),S()("Success!","Submitted SuccessFull!","success"),c.props.history.push("/app/colour/colourList")})).catch((function(e){console.log(e)}))},c.state={colorName:"",state:""},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;N.a.get("/viewonecolor/".concat(a)).then((function(a){console.log(a),e.setState({colorName:a.data.data.colorName,state:a.data.data.state})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(i.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(d.a,{listTag:"div"},m.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(p.a,{href:"/app/colour/colourList",tag:"a"},"Colour List"),m.a.createElement(p.a,{active:!0},"Edit Colour"))))),m.a.createElement(h.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(i.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Colour")),m.a.createElement(i.a,null,m.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/app/colour/colourList")}},"Back"))),m.a.createElement(f.a,null,m.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Colour"),m.a.createElement(g.a,{type:"text",name:"colorName",value:this.state.colorName,onChange:this.changeHandler}))),m.a.createElement(u.a,null,m.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(s.Component)},797:function(e,a,t){"use strict";var n=t(40),l=t.n(n).a.create({baseURL:"http://13.127.52.128/v1/api/admin"});a.a=l}}]);
//# sourceMappingURL=255.cf9dab31.chunk.js.map