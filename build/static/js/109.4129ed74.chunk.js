(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[109],{2189:function(e,a,t){"use strict";t.r(a),t.d(a,"AddOrder",(function(){return R}));var n=t(41),r=t(13),l=t(14),s=t(16),c=t(15),o=t(0),i=t.n(o),u=t(992),d=t(990),m=t(991),p=t(178),h=t(995),f=t(818),g=t(817),b=t(814),y=t(785),v=t(798),E=t(21),O=t(797),j=t(40),N=t.n(j),R=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),console.log(l.state),O.a.post("/addorder",l.state,{headers:{"auth-token":localStorage.getItem("token")}}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},l.state={customer:"",product:"",order_type:"",payment_type:"",qty:"",purchaseprice:"",delivery_address:"",order_date:"",status:"",productList:[],customerList:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/getproduct").then((function(a){console.log(a),e.setState({productList:a.data.data})})).catch((function(e){console.log(e)})),N.a.get("http://35.154.86.59/api/user/allcustomer",{headers:{"auth-token":localStorage.getItem("token")}}).then((function(a){console.log(a),e.setState({customerList:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Brand")),i.a.createElement(m.a,null,i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/order/allOrder")}},"Back"))),i.a.createElement(h.a,null,i.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,{className:"mb-2"},i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Customer Name"),i.a.createElement(y.a,{type:"select",name:"customer",value:this.state.customer,onChange:this.changeHandler},this.state.customerList.map((function(e){return i.a.createElement("option",{key:e._id,value:e._id},e.firstname,"\xa0",e.lastname)}))))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Select Product"),i.a.createElement(y.a,{type:"select",name:"product",value:this.state.product,onChange:this.changeHandler},this.state.productList.map((function(e){return i.a.createElement("option",{key:e._id,value:e._id},e.product_name)}))))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Order Type"),i.a.createElement(y.a,{type:"select",name:"order_type",value:this.state.order_type,onChange:this.changeHandler,readOnly:"true"},i.a.createElement("option",{value:"In Shop",selected:!0},"In Shop"),i.a.createElement("option",{value:"Remote",selected:!0},"Remote")))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Payment Type"),i.a.createElement(y.a,{type:"select",name:"payment_type",value:this.state.payment_type,onChange:this.changeHandler},i.a.createElement("option",{value:"Cash",selected:!0},"Cash"),i.a.createElement("option",{value:"Online"},"Online")))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Quantity"),i.a.createElement(v.a,{type:"number",min:0,placeholder:"Quantity",name:"qty",value:this.state.qty,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Price"),i.a.createElement(v.a,{type:"number",min:0,placeholder:"Price",name:"purchaseprice",value:this.state.purchaseprice,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Delivery Address"),i.a.createElement(v.a,{type:"text",placeholder:"Address",name:"delivery_address",value:this.state.delivery_address,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Order Date"),i.a.createElement(v.a,{type:"date",placeholder:"Date",name:"order_date",value:this.state.order_date,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(g.a,null,i.a.createElement(b.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))),i.a.createElement(d.a,null,i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Order"))))))}}]),t}(o.Component);a.default=R},797:function(e,a,t){"use strict";var n=t(40),r=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=r},798:function(e,a,t){"use strict";var n=t(5),r=t(7),l=t(11),s=t(12),c=t(0),o=t.n(c),i=t(1),u=t.n(i),d=t(4),m=t.n(d),p=t(3),h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,s=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,h=e.plaintext,f=e.innerRef,g=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(l)>-1,y=new RegExp("\\D","g"),v=u||("select"===l||"textarea"===l?l:"input"),E="form-control";h?(E+="-plaintext",v=u||"input"):"file"===l?E+="-file":"range"===l?E+="-range":b&&(E=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var O=Object(p.mapToCssModules)(m()(a,i&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,E),t);return("input"===v||u&&"function"===typeof u)&&(g.type=l),g.children&&!h&&"select"!==l&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(v,Object(n.a)({},g,{ref:f,className:O,"aria-invalid":i}))},a}(o.a.Component);f.propTypes=h,f.defaultProps={type:"text"},a.a=f},814:function(e,a,t){"use strict";var n=t(5),r=t(7),l=t(0),s=t.n(l),c=t(1),o=t.n(c),i=t(4),u=t.n(i),d=t(3),m=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:m,order:m,offset:m})]),h={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},b=function(e){var a=e.className,t=e.cssModule,l=e.hidden,c=e.widths,o=e.tag,i=e.check,m=e.size,p=e.for,h=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),f=[];c.forEach((function(a,n){var r=e[a];if(delete h[a],r||""===r){var l,s=!n;if(Object(d.isObject)(r)){var c,o=s?"-":"-"+a+"-";l=g(s,a,r.size),f.push(Object(d.mapToCssModules)(u()(((c={})[l]=r.size||""===r.size,c["order"+o+r.order]=r.order||0===r.order,c["offset"+o+r.offset]=r.offset||0===r.offset,c))),t)}else l=g(s,a,r),f.push(l)}}));var b=Object(d.mapToCssModules)(u()(a,!!l&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,f,!!f.length&&"col-form-label"),t);return s.a.createElement(o,Object(n.a)({htmlFor:p},h,{className:b}))};b.propTypes=h,b.defaultProps=f,a.a=b},817:function(e,a,t){"use strict";var n=t(5),r=t(7),l=t(0),s=t.n(l),c=t(1),o=t.n(c),i=t(4),u=t.n(i),d=t(3),m={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.row,c=e.disabled,o=e.check,i=e.inline,m=e.tag,p=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),h=Object(d.mapToCssModules)(u()(a,!!l&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),t);return"fieldset"===m&&(p.disabled=c),s.a.createElement(m,Object(n.a)({},p,{className:h}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},818:function(e,a,t){"use strict";var n=t(5),r=t(7),l=t(11),s=t(12),c=t(0),o=t.n(c),i=t(1),u=t.n(i),d=t(4),m=t.n(d),p=t(3),h={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,s=e.tag,c=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.mapToCssModules)(m()(a,!!l&&"form-inline"),t);return o.a.createElement(s,Object(n.a)({},i,{ref:c,className:u}))},a}(c.Component);f.propTypes=h,f.defaultProps={tag:"form"},a.a=f}}]);
//# sourceMappingURL=109.4129ed74.chunk.js.map