(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[113],{1198:function(e,t,a){},1592:function(e,t){},2102:function(e,t,a){"use strict";a.r(t);var l=a(13),n=a(14),r=a(16),c=a(15),u=a(0),m=a.n(u),o=a(1120),s=a(1118),h=a(1119),i=a(182),d=a(1123),E=(a(24),a(1568)),v=a.n(E),p=(a(833),a(177)),f=(a(838),a(1197),a(1198),a(2086)),b=a(58),g=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:{}},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;p.a.get("/viewonestaff/".concat(t)).then((function(t){console.log(t.data.data),e.setState({data:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t,a,l,n,r,c,u,E;return m.a.createElement(m.a.Fragment,null,m.a.createElement(o.a,{className:"overflow-hidden app-ecommerce-details"},m.a.createElement(s.a,{className:"m-2"},m.a.createElement(h.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Teacher")),m.a.createElement(h.a,null,m.a.createElement(b.b,{render:function(e){var t=e.history;return m.a.createElement(i.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/teacher/teacherList")}},"Back")}}))),m.a.createElement(d.a,{className:"pb-0"},m.a.createElement(o.a,null,m.a.createElement("div",null,m.a.createElement(f.a,null,null===(e=this.state.data)||void 0===e||null===(t=e.product_img)||void 0===t?void 0:t.map((function(e){return m.a.createElement("img",{className:"border-black m-0",src:e,alt:"user avatar",height:"400"})}))))),m.a.createElement(s.a,{className:"mb-5 mt-2"},m.a.createElement(h.a,{md:"7",sm:"12"},m.a.createElement("h4",null,"Product Name"),m.a.createElement("h6",null,this.state.data.product_name),m.a.createElement("hr",null),m.a.createElement("h4",null,"Cost Price"),m.a.createElement("h6",null,this.state.data.cost_price),m.a.createElement("hr",null),m.a.createElement("h4",null,"Selling Price "),m.a.createElement("h6",null,this.state.data.sell_price),m.a.createElement("hr",null),m.a.createElement("h4",null,"GSt Rate "),m.a.createElement("h6",null,this.state.data.gst),m.a.createElement("hr",null),m.a.createElement("h4",null,"SKU No."),m.a.createElement("h6",null,this.state.data.sku_no),m.a.createElement("hr",null),m.a.createElement("h4",null,"HSN/SAC"),m.a.createElement("h6",null,this.state.data.hsn_sac_no),m.a.createElement("hr",null),m.a.createElement("h4",null,"Short Description "),m.a.createElement("h6",null,this.state.data.short_desc),m.a.createElement("hr",null),m.a.createElement("h4",null,"Product Description "),m.a.createElement("h6",null,v()(this.state.data.long_desc)),m.a.createElement("hr",null),m.a.createElement("h4",null,"Brand"),m.a.createElement("h6",null,null===(a=this.state.data.brand)||void 0===a?void 0:a.name),m.a.createElement("hr",null),m.a.createElement("h4",null,"Product Category"),m.a.createElement("h6",null,null===(l=this.state.data.productcategory)||void 0===l?void 0:l.name),m.a.createElement("hr",null),m.a.createElement("h4",null,"Product Sub Category "),m.a.createElement("h6",null,null===(n=this.state.data.productsubcategory)||void 0===n?void 0:n.name),m.a.createElement("hr",null),m.a.createElement("h4",null,"Size"),m.a.createElement("h6",null,null===(r=this.state.data)||void 0===r||null===(c=r.size)||void 0===c?void 0:c.map((function(e){return m.a.createElement("span",null,null===e||void 0===e?void 0:e.sizeName)}))),m.a.createElement("hr",null),m.a.createElement("h4",null,"Colour "),m.a.createElement("h6",null,null===(u=this.state.data)||void 0===u||null===(E=u.color)||void 0===E?void 0:E.map((function(e){return m.a.createElement("span",{style:{color:null===e||void 0===e?void 0:e.colorName}},null===e||void 0===e?void 0:e.colorName)}))),m.a.createElement("hr",null),m.a.createElement("h4",null,"Material "),m.a.createElement("h6",null,this.state.data.material),m.a.createElement("hr",null),m.a.createElement("h4",null,"Stock Quantity "),m.a.createElement("h6",null,this.state.data.qty),m.a.createElement("hr",null),m.a.createElement("h4",null,"Re-Order Level"),m.a.createElement("h6",null,this.state.data.reorder_level),m.a.createElement("hr",null),m.a.createElement("h4",null,"Stock Available "),m.a.createElement("h6",null,this.state.data.stock),m.a.createElement("hr",null))))))}}]),a}(m.a.Component);t.default=g},833:function(e,t,a){}}]);
//# sourceMappingURL=113.cc0a0421.chunk.js.map