(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[205],{2156:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var n=t(41),r=t(13),s=t(14),c=t(16),l=t(15),m=t(0),u=t.n(m),i=t(1118),o=t(1119),p=t(1115),f=t(1116),d=t(1120),h=t(182),E=t(1123),y=t(802),b=t(799),g=t(794),v=t(177),T=t(21),N=t(872),S=t.n(N),k=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=s.props.match.params.id;v.a.post("/editsize/".concat(a),s.state).then((function(e){console.log(e),S()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/transferType/transferTypeList")})).catch((function(e){console.log(e)}))},s.state={transfer_type:"",status:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/viewonesize/".concat(a)).then((function(a){console.log(a),e.setState({transferType:a.data.data.transferType,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(i.a,null,u.a.createElement(o.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(p.a,{listTag:"div"},u.a.createElement(f.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(f.a,{href:"/app/transferType/transferTypeList",tag:"a"},"Transfer Type List"),u.a.createElement(f.a,{active:!0},"Edit Transfer Type"))))),u.a.createElement(d.a,null,u.a.createElement(i.a,{className:"m-2"},u.a.createElement(o.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Transfer Type")),u.a.createElement(o.a,null,u.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return T.a.push("/app/transferType/transferTypeList")}},"Back"))),u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(i.a,null,u.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(b.a,null,"Transfer Type"),u.a.createElement(g.a,{type:"text",name:"transfer_type",value:this.state.transfer_type,onChange:this.changeHandler}))),u.a.createElement(i.a,null,u.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(m.Component)}}]);
//# sourceMappingURL=205.46388934.chunk.js.map