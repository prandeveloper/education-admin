(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[258],{2160:function(e,a,t){"use strict";t.r(a),t.d(a,"EditOffers",(function(){return w}));var n=t(76),r=t.n(n),c=t(126),l=t(41),s=t(13),o=t(14),i=t(16),m=t(15),u=t(0),f=t.n(u),d=t(990),p=t(991),h=t(987),g=t(988),E=t(992),v=t(178),b=t(995),O=t(818),y=t(814),N=t(798),S=t(785),C=t(21),H=t(797),k=t(900),L=t.n(k),w=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).changeHandler1=function(e){n.setState({status:e.target.value})},n.changeHandler=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault();var a=n.props.match.params.id;H.a.post("/edit_offer/".concat(a),n.state).then((function(e){console.log(e),console.log(n.state),L()("Success!","Submitted SuccessFull!","success"),n.props.history.push("/app/offerAndCoupon/specialOffer/specialOfferList")})).catch((function(e){console.log(e)}))},n.state={offerTitle:"",product:"",percentageOff:"",sortorder:"",status:""},n.state={productL:[]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){var a,t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H.a.get("/getproduct").then((function(e){console.log(e.data.data),t.setState({productL:e.data.data})})).catch((function(e){console.log(e)})),a=this.props.match.params.id,H.a.get("/viewoneoffer/".concat(a)).then((function(e){console.log(e),t.setState({offerTitle:e.data.data.offerTitle,product:e.data.data.product,percentageOff:e.data.data.percentageOff,sortorder:e.data.data.sortorder,status:e.data.data.status})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return f.a.createElement("div",null,f.a.createElement(d.a,null,f.a.createElement(p.a,{sm:"12"},f.a.createElement("div",null,f.a.createElement(h.a,{listTag:"div"},f.a.createElement(g.a,{href:"/analyticsDashboard",tag:"a"},"Home"),f.a.createElement(g.a,{href:"/app/offerAndCoupon/specialOffer/specialOfferList",tag:"a"},"Offers List"),f.a.createElement(g.a,{active:!0},"Edit Offer"))))),f.a.createElement(E.a,null,f.a.createElement(d.a,{className:"m-2"},f.a.createElement(p.a,null,f.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Offer")),f.a.createElement(p.a,null,f.a.createElement(v.a,{className:" btn btn-danger float-right",onClick:function(){return C.a.push("/app/offerAndCoupon/specialOffer/specialOfferList")}},"Back"))),f.a.createElement(b.a,null,f.a.createElement(O.a,{className:"m-1",onSubmit:this.submitHandler},f.a.createElement(d.a,{className:"mb-2"},f.a.createElement(p.a,{lg:"6",md:"6"},f.a.createElement(y.a,null,"Offer Title"),f.a.createElement(N.a,{type:"text",name:"offerTitle",value:this.state.offerTitle,onChange:this.changeHandler})),f.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},f.a.createElement(y.a,null,"Offer On Product"),f.a.createElement(S.a,{type:"select",placeholder:"Link By...",name:"product",value:this.state.product,onChange:this.changeHandler},f.a.createElement("option",null,"Select Product......."),this.state.productL.map((function(e){return f.a.createElement("option",{key:e._id,value:e._id},e.product_name)})))),f.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},f.a.createElement(y.a,null,"Percentage Off"),f.a.createElement(N.a,{type:"text",name:"percentageOff",value:this.state.percentageOff,onChange:this.changeHandler})),f.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},f.a.createElement(y.a,null,"Sort Order"),f.a.createElement(N.a,{type:"number",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler})),f.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},f.a.createElement(y.a,{className:"mb-1"},"Status"),f.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},f.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),f.a.createElement("span",{className:"mr-2 font-weight-bold"},"Active"),f.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),f.a.createElement("span",{className:"mr-2 font-weight-bold"},"Inactive")))),f.a.createElement(d.a,null,f.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit"))))))}}]),t}(u.Component);a.default=w},797:function(e,a,t){"use strict";var n=t(40),r=t.n(n).a.create({baseURL:"http://13.127.52.128/v1/api/admin"});a.a=r}}]);
//# sourceMappingURL=258.9b524ab0.chunk.js.map