(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[220],{2191:function(e,a,t){"use strict";t.r(a);var s=t(13),n=t(14),l=t(16),m=t(15),c=t(0),r=t.n(c),h=t(975),i=t(976),o=t(972),d=t(973),u=t(977),E=t(178),p=t(980),N=t(21),b=(t(866),t(797)),f=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={data:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;b.a.get("/getonewarehouse/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(i.a,{sm:"12"},r.a.createElement("div",null,r.a.createElement(o.a,{listTag:"div"},r.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),r.a.createElement(d.a,{href:"/app/warehouse/warehouseList",tag:"a"},"Warehouse List"),r.a.createElement(d.a,{active:!0},"View Warehouse"))))),r.a.createElement(u.a,{className:"overflow-hidden app-ecommerce-details"},r.a.createElement(h.a,{className:"m-2"},r.a.createElement(i.a,null,r.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Warehouse")),r.a.createElement(i.a,null,r.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/warehouse/warehouseList")}},"Back"))),r.a.createElement(p.a,{className:"pb-0"},r.a.createElement(h.a,{className:"mb-5 mt-2"},r.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Warehouse Name"),r.a.createElement("h6",{className:""}," ",this.state.data.warehousename)),r.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Email"),r.a.createElement("h6",{className:""}," ",this.state.data.email)),r.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Phone No."),r.a.createElement("h6",{className:""}," ",this.state.data.phone_no)),r.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Address 1"),r.a.createElement("h6",{className:""}," ",this.state.data.address1)),r.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Address 2"),r.a.createElement("h6",{className:""}," ",this.state.data.address2)),r.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"City"),r.a.createElement("h6",{className:""}," ",this.state.data.city)),r.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Pin Code"),r.a.createElement("h6",{className:""}," ",this.state.data.pin)))))))}}]),t}(r.a.Component);a.default=f},797:function(e,a,t){"use strict";var s=t(40),n=t.n(s).a.create({baseURL:"http://13.127.52.128/api/api/admin"});a.a=n},866:function(e,a,t){}}]);
//# sourceMappingURL=220.535090c3.chunk.js.map