(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[188],{2107:function(e,a,t){"use strict";t.r(a),t.d(a,"EditTeacher",(function(){return S}));var n=t(856),l=t(41),r=t(13),s=t(14),c=t(16),i=t(15),o=t(0),m=t.n(o),d=t(1014),u=t(1012),p=t(1013),h=t(178),g=t(1017),f=t(818),E=t(814),b=t(815),v=t(807),y=t(785),w=t(21),N=t(797),C=t(889),H=t.n(C),S=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({approvedstatus:e.target.value})},s.changeHandler3=function(e){s.setState({gender:e.target.value})},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.changeHandler2=function(e){e.target.value.length<11&&s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("fullname",s.state.fullname),a.append("email",s.state.email),a.append("mobile",s.state.mobile),a.append("password",s.state.password),a.append("cnfmPassword",s.state.cnfmPassword),a.append("gender",s.state.gender),a.append("dob",s.state.dob.toString()),a.append("state",s.state.state),a.append("city",s.state.city),a.append("institute",s.state.institute),a.append("approvedstatus",s.state.approvedstatus),null!==s.state.selectedFile&&a.append("image",s.state.selectedFile,s.state.selectedName);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var r=t.value;console.log(r)}}catch(d){l.e(d)}finally{l.f()}var c,i=Object(n.a)(a.keys());try{for(i.s();!(c=i.n()).done;){var o=c.value;console.log(o)}}catch(d){i.e(d)}finally{i.f()}var m=s.props.match.params.id;N.a.post("/setting/".concat(m),a).then((function(e){console.log(e),H()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/teacher/teacherList")})).catch((function(e){console.log(e),H()("Error!","Error Received","error")}))},s.state={fullname:"",email:"",mobile:"",password:"",cnfmPassword:"",image:"",gender:"",dob:"",state:"",city:"",institute:"",approvedstatus:"",selectedFile:null,selectedName:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;N.a.get("/viewonestaff/".concat(a)).then((function(a){console.log(a.data.data),e.setState(Object(l.a)({fullname:a.data.data.fullname,email:a.data.data.email,mobile:a.data.data.mobile,password:a.data.data.password,cnfmPassword:a.data.data.cnfmPassword,image:a.data.data.image,gender:a.data.data.gender,dob:a.data.data.dob,state:a.data.data.state,city:a.data.data.city,institute:a.data.data.institute},"institute",a.data.data.institute))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(d.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(p.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Teacher")),m.a.createElement(p.a,null,m.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return w.a.push("/app/teacher/teacherList")}},"Back"))),m.a.createElement(g.a,null,m.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,{className:"mb-2"},m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Full Name"),m.a.createElement(v.a,{type:"text",placeholder:"Full Name",name:"fullname",value:this.state.fullname,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Image"),m.a.createElement(y.a,{type:"file",onChange:this.onChangeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Email"),m.a.createElement(v.a,{type:"email",placeholder:"Email",name:"email",value:this.state.email,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Mobile Number"),m.a.createElement(v.a,{type:"number",placeholder:"Mobile Number",name:"mobile",value:this.state.mobile,onChange:this.changeHandler2}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Password"),m.a.createElement(v.a,{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Confirm Password"),m.a.createElement(v.a,{type:"password",placeholder:"Password",name:"cnfmPassword",value:this.state.cnfmPassword,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-1 "},m.a.createElement(E.a,null,m.a.createElement(b.a,{className:"mb-1"},"Gender"),m.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler3(a)}},m.a.createElement("input",{style:{marginRight:"3px",fontWeight:800},type:"radio",name:"gender",value:"Male"}),m.a.createElement("span",{style:{marginRight:"20px",fontWeight:800}},"Male"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"gender",value:"Female"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Female")))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Birth Date"),m.a.createElement(v.a,{type:"date",placeholder:"Birth Date",name:"dob",value:this.state.dob,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"City"),m.a.createElement(v.a,{type:"text",placeholder:"City",name:"city",value:this.state.city,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"State"),m.a.createElement(v.a,{type:"text",placeholder:"State",name:"state",value:this.state.state,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Institute"),m.a.createElement(v.a,{type:"text",placeholder:"Institute",name:"institute",value:this.state.institute,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-1 "},m.a.createElement(E.a,null,m.a.createElement(b.a,{className:"mb-1"},"Approved Status"),m.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},m.a.createElement("input",{style:{marginRight:"3px",fontWeight:800},type:"radio",name:"approvedstatus",value:"true"}),m.a.createElement("span",{style:{marginRight:"20px",fontWeight:800}},"True"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"approvedstatus",value:"false"}),m.a.createElement("span",{style:{marginRight:"3px"}},"False"))))),m.a.createElement(u.a,null,m.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"ml-2 mb-1"},"Add"))))))}}]),t}(o.Component);a.default=S},797:function(e,a,t){"use strict";var n=t(40),l=t.n(n).a.create({baseURL:"http://65.0.80.5:5000/api/admin"});a.a=l},814:function(e,a,t){"use strict";var n=t(5),l=t(7),r=t(0),s=t.n(r),c=t(1),i=t.n(c),o=t(4),m=t.n(o),d=t(3),u={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.row,c=e.disabled,i=e.check,o=e.inline,u=e.tag,p=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),h=Object(d.mapToCssModules)(m()(a,!!r&&"row",i?"form-check":"form-group",!(!i||!o)&&"form-check-inline",!(!i||!c)&&"disabled"),t);return"fieldset"===u&&(p.disabled=c),s.a.createElement(u,Object(n.a)({},p,{className:h}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},856:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(98);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,s=!0,c=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return s=e.done,e},e:function(e){c=!0,r=e},f:function(){try{s||null==l.return||l.return()}finally{if(c)throw r}}}}}}]);
//# sourceMappingURL=188.d3af9e25.chunk.js.map