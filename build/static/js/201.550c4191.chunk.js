(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[201],{2118:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(865),s=a(41),r=a(13),l=a(14),o=a(16),i=a(15),c=a(0),u=a.n(c),m=a(977),p=a(975),d=a(976),f=a(178),b=a(980),h=a(816),g=a(812),y=a(798),v=a(40),O=a.n(v),E=a(21),j=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(s.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),console.log(l.state);var t=new FormData;t.append("userID",l.state.userID),t.append("usertype",l.state.usertype),t.append("username",l.state.username),t.append("password",l.state.password),t.append("pincode",l.state.pincode),t.append("phone_no",l.state.phone_no),t.append("mobile_no",l.state.mobile_no),t.append("email",l.state.email),t.append("website",l.state.website),t.append("country",l.state.country),t.append("state",l.state.state),t.append("city",l.state.city),t.append("status",l.state.status),t.append("userImage",l.state.selectedFile,l.state.selectedName);var a,s=Object(n.a)(t.values());try{for(s.s();!(a=s.n()).done;){var r=a.value;console.log(r)}}catch(u){s.e(u)}finally{s.f()}var o,i=Object(n.a)(t.keys());try{for(i.s();!(o=i.n()).done;){var c=o.value;console.log(c)}}catch(u){i.e(u)}finally{i.f()}O.a.post("http://65.2.150.118:4444/api/user/adduserbyadmin",t).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},l.state={userID:"",usertype:"",username:"",password:"",pincode:"",phone_no:"",mobile_no:"",email:"",website:"",country:"",state:"",city:"",userImage:"",status:"",selectedName:"",selectedFile:null},l}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(p.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Create A New Role")),u.a.createElement(d.a,null,u.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/roleAndPermission/RoleList")}},"Back"))),u.a.createElement(b.a,null,u.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(p.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a,null,"Role Name:"),u.a.createElement(y.a,{required:!0,type:"text",placeholder:"Enter Role Name",name:"username",value:this.state.userID,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a,null,"Assign permissions To Role:"),u.a.createElement(y.a,{required:!0,type:"email",name:"email",value:this.state.email,onChange:this.changeHandler,placeholder:"Enter Email"})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),u.a.createElement(p.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add User")))))))}}]),a}(c.Component)},798:function(e,t,a){"use strict";var n=a(5),s=a(7),r=a(11),l=a(12),o=a(0),i=a.n(o),c=a(1),u=a.n(c),m=a(4),p=a.n(m),d=a(3),f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,c=e.invalid,u=e.tag,m=e.addon,f=e.plaintext,b=e.innerRef,h=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),v=u||("select"===r||"textarea"===r?r:"input"),O="form-control";f?(O+="-plaintext",v=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":g&&(O=m?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var E=Object(d.mapToCssModules)(p()(t,c&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),a);return("input"===v||u&&"function"===typeof u)&&(h.type=r),h.children&&!f&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(v,Object(n.a)({},h,{ref:b,className:E,"aria-invalid":c}))},t}(i.a.Component);b.propTypes=f,b.defaultProps={type:"text"},t.a=b},812:function(e,t,a){"use strict";var n=a(5),s=a(7),r=a(0),l=a.n(r),o=a(1),i=a.n(o),c=a(4),u=a.n(c),m=a(3),p=i.a.oneOfType([i.a.number,i.a.string]),d=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),f={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,xs:d,sm:d,md:d,lg:d,xl:d,widths:i.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,r=e.hidden,o=e.widths,i=e.tag,c=e.check,p=e.size,d=e.for,f=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];o.forEach((function(t,n){var s=e[t];if(delete f[t],s||""===s){var r,l=!n;if(Object(m.isObject)(s)){var o,i=l?"-":"-"+t+"-";r=h(l,t,s.size),b.push(Object(m.mapToCssModules)(u()(((o={})[r]=s.size||""===s.size,o["order"+i+s.order]=s.order||0===s.order,o["offset"+i+s.offset]=s.offset||0===s.offset,o))),a)}else r=h(l,t,s),b.push(r)}}));var g=Object(m.mapToCssModules)(u()(t,!!r&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),a);return l.a.createElement(i,Object(n.a)({htmlFor:d},f,{className:g}))};g.propTypes=f,g.defaultProps=b,t.a=g},816:function(e,t,a){"use strict";var n=a(5),s=a(7),r=a(11),l=a(12),o=a(0),i=a.n(o),c=a(1),u=a.n(c),m=a(4),p=a.n(m),d=a(3),f={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,c=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(d.mapToCssModules)(p()(t,!!r&&"form-inline"),a);return i.a.createElement(l,Object(n.a)({},c,{ref:o,className:u}))},t}(o.Component);b.propTypes=f,b.defaultProps={tag:"form"},t.a=b},865:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(98);function s(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r,l=!0,o=!1;return{s:function(){s=e[Symbol.iterator]()},n:function(){var e=s.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==s.return||s.return()}finally{if(o)throw r}}}}}}]);
//# sourceMappingURL=201.550c4191.chunk.js.map