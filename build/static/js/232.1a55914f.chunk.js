(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[232],{2196:function(e,a,t){"use strict";t.r(a),t.d(a,"EditCustomer",(function(){return k}));var n=t(41),l=t(13),r=t(14),s=t(16),c=t(15),m=t(0),o=t.n(m),i=t(992),u=t(990),d=t(991),h=t(178),p=t(995),g=t(819),E=t(817),b=t(814),f=t(798),v=t(21),y=(t(797),t(883)),_=t.n(y),N=t(40),C=t.n(N),k=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;C.a.post("http://35.154.86.59/api/user/editcustomer/".concat(a),r.state).then((function(e){console.log(e),_()("Success!","Updated SuccessFull!","success"),r.props.history.push("/app/contactUs/customer/customerList")})).catch((function(e){_()("Error!","Error Received","error"),console.log(e)}))},r.state={first_name:"",last_name:"",customer_email:"",mobile_no:"",sortorder:"",status:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;C.a.get("http://35.154.86.59/api/user/getonecustomer/".concat(a)).then((function(a){console.log(a),e.setState({first_name:a.data.data.first_name,last_name:a.data.data.last_name,customer_email:a.data.data.customer_email,mobile_no:a.data.data.mobile_no,sortorder:a.data.data.sortorder,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Customer")),o.a.createElement(d.a,null,o.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/contactUs/customer/customerList")}},"Back"))),o.a.createElement(p.a,null,o.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(d.a,{lg:"6",md:"6"},o.a.createElement(E.a,null,o.a.createElement(b.a,null,"FirstName"),o.a.createElement(f.a,{type:"text",placeholder:"First Name",name:"first_name",value:this.state.first_name,onChange:this.changeHandler}))),o.a.createElement(d.a,{lg:"6",md:"6"},o.a.createElement(E.a,null,o.a.createElement(b.a,null,"LastName"),o.a.createElement(f.a,{type:"text",placeholder:"Last Name",name:"last_name",value:this.state.last_name,onChange:this.changeHandler}))),o.a.createElement(d.a,{lg:"6",md:"6"},o.a.createElement(E.a,null,o.a.createElement(b.a,null,"Customer Email"),o.a.createElement(f.a,{type:"email",placeholder:"Customer Email",name:"customer_email",value:this.state.customer_email,onChange:this.changeHandler}))),o.a.createElement(d.a,{lg:"6",md:"6"},o.a.createElement(E.a,null,o.a.createElement(b.a,null,"Mobile Number"),o.a.createElement(f.a,{type:"number",placeholder:"Mobile Number",name:"mobile_no",value:this.state.mobile_no,onChange:this.changeHandler}))),o.a.createElement(d.a,{lg:"6",md:"6"},o.a.createElement(E.a,null,o.a.createElement(b.a,null,"Sort Order"),o.a.createElement(f.a,{type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler}))),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-1 "},o.a.createElement(E.a,null,o.a.createElement(b.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},o.a.createElement("input",{style:{marginRight:"3px",fontWeight:800},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px",fontWeight:800}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))),o.a.createElement(u.a,null,o.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"ml-2 mb-1"},"Add Customer"))))))}}]),t}(m.Component);a.default=k},797:function(e,a,t){"use strict";var n=t(40),l=t.n(n).a.create({baseURL:"http://13.127.52.128/v1/api/admin"});a.a=l},817:function(e,a,t){"use strict";var n=t(5),l=t(7),r=t(0),s=t.n(r),c=t(1),m=t.n(c),o=t(4),i=t.n(o),u=t(3),d={children:m.a.node,row:m.a.bool,check:m.a.bool,inline:m.a.bool,disabled:m.a.bool,tag:u.tagPropType,className:m.a.string,cssModule:m.a.object},h=function(e){var a=e.className,t=e.cssModule,r=e.row,c=e.disabled,m=e.check,o=e.inline,d=e.tag,h=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(u.mapToCssModules)(i()(a,!!r&&"row",m?"form-check":"form-group",!(!m||!o)&&"form-check-inline",!(!m||!c)&&"disabled"),t);return"fieldset"===d&&(h.disabled=c),s.a.createElement(d,Object(n.a)({},h,{className:p}))};h.propTypes=d,h.defaultProps={tag:"div"},a.a=h}}]);
//# sourceMappingURL=232.1a55914f.chunk.js.map