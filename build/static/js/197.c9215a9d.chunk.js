(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[197],{2148:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var n=t(41),l=t(13),s=t(14),r=t(16),c=t(15),m=t(0),o=t.n(m),u=t(1272),i=t(1273),d=t(1269),h=t(1270),p=t(1274),E=t(184),b=t(1277),f=t(804),g=t(799),v=t(796),y=t(177),N=t(21),H=t(845),R=t.n(H),S=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),y.a.post("/addReason",s.state).then((function(e){console.log(e),R()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/reason/reasonList")})).catch((function(e){console.log(e)}))},s.state={reason:"",status:""},s}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(i.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(d.a,{listTag:"div"},o.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),o.a.createElement(h.a,{href:"/app/reason/reasonList",tag:"a"},"Reason List"),o.a.createElement(h.a,{active:!0},"Add Reason"))))),o.a.createElement(p.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(i.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Reason")),o.a.createElement(i.a,null,o.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/reason/reasonList")}},"Back"))),o.a.createElement(b.a,null,o.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,null,o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(g.a,null,"Reason"),o.a.createElement(v.a,{required:!0,type:"text",name:"reason",placeholder:"",value:this.state.reason,onChange:this.changeHandler}))),o.a.createElement(u.a,null,o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(m.Component)}}]);
//# sourceMappingURL=197.c9215a9d.chunk.js.map