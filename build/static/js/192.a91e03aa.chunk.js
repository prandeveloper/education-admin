(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[192],{2215:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),c=t(16),s=t(15),l=t(0),m=t.n(l),i=t(1012),o=t(1013),u=t(1009),p=t(1010),d=t(1014),f=t(178),h=t(1017),E=t(21),b=(t(874),t(797)),v=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={data:{}},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;b.a.get("/viewonesize/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,m.a.createElement(i.a,null,m.a.createElement(o.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(u.a,{listTag:"div"},m.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(p.a,{href:"/app/transferType/transferTypeList",tag:"a"},"Transfer Type List"),m.a.createElement(p.a,{active:!0},"View Transfer Type"))))),m.a.createElement(d.a,{className:"overflow-hidden app-ecommerce-details"},m.a.createElement(i.a,{className:"m-2"},m.a.createElement(o.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Transfer Type")),m.a.createElement(o.a,null,m.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/transferType/transferTypeList")}},"Back"))),m.a.createElement(h.a,{className:"pb-0"},m.a.createElement(i.a,{className:"mb-5 mt-2"},m.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Transfer Type"),m.a.createElement("h6",{className:""}," ",this.state.data.transfer_type)))))))}}]),t}(m.a.Component);a.default=v},797:function(e,a,t){"use strict";var n=t(40),r=t.n(n).a.create({baseURL:"http://65.0.80.5:5000/api/admin"});a.a=r},874:function(e,a,t){}}]);
//# sourceMappingURL=192.a91e03aa.chunk.js.map