(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[121],{2127:function(e,t,a){"use strict";a.r(t),a.d(t,"AddNotification",(function(){return T}));var n=a(41),s=a(13),o=a(14),i=a(16),l=a(15),r=a(0),c=a.n(r),u=a(1120),d=a(1118),f=a(1119),p=a(182),m=a(1123),h=a(798),b=a(799),g=a(795),v=a(794),y=a(780),O=a(21),j=a(177),E=a(840),N=a.n(E),T=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),j.a.post("/addUserNotification",o.state).then((function(e){console.log(e),N()("Success!","Submitted SuccessFull!","success"),o.props.history.push("/app/notifications/notification")})).catch((function(e){console.log(e),N()("Error!","Error Received","error")}))},o.state={userid:"",noti_title:"",desc:"",studentL:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get("/allusers").then((function(t){console.log(t.data.data),e.setState({studentL:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e;return c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(f.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Student Notification")),c.a.createElement(f.a,null,c.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return O.a.push("/app/notifications/notification")}},"Back"))),c.a.createElement(m.a,null,c.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(d.a,{className:"mb-2"},c.a.createElement(f.a,{lg:"6",md:"6"},c.a.createElement(b.a,null,c.a.createElement(g.a,null,"Notification Title"),c.a.createElement(v.a,{type:"text",placeholder:"Title",name:"noti_title",value:this.state.noti_title,onChange:this.changeHandler}))),c.a.createElement(f.a,{lg:"6",md:"6"},c.a.createElement(b.a,null,c.a.createElement(g.a,null,"Select Student"),c.a.createElement(y.a,{type:"select",placeholder:"Last Name",name:"userid",value:this.state.userid,onChange:this.changeHandler},c.a.createElement("option",null,"Choose Student ......"),null===(e=this.state.studentL)||void 0===e?void 0:e.map((function(e){return c.a.createElement("option",{key:e._id,value:e._id},e.fullname)}))))),c.a.createElement(f.a,{lg:"6",md:"6"},c.a.createElement(b.a,null,c.a.createElement(g.a,null,"Description"),c.a.createElement(v.a,{type:"textarea",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler})))),c.a.createElement(d.a,null,c.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"ml-2 mb-1"},"Add"))))))}}]),a}(r.Component);t.default=T},794:function(e,t,a){"use strict";var n=a(5),s=a(9),o=a(11),i=a(12),l=a(0),r=a.n(l),c=a(1),u=a.n(c),d=a(4),f=a.n(d),p=a(3),m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,i=e.bsSize,l=e.valid,c=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,h=e.innerRef,b=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),y=u||("select"===o||"textarea"===o?o:"input"),O="form-control";m?(O+="-plaintext",y=u||"input"):"file"===o?O+="-file":"range"===o?O+="-range":g&&(O=d?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=b.size,delete b.size);var j=Object(p.mapToCssModules)(f()(t,c&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,O),a);return("input"===y||u&&"function"===typeof u)&&(b.type=o),b.children&&!m&&"select"!==o&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),r.a.createElement(y,Object(n.a)({},b,{ref:h,className:j,"aria-invalid":c}))},t}(r.a.Component);h.propTypes=m,h.defaultProps={type:"text"},t.a=h},795:function(e,t,a){"use strict";var n=a(5),s=a(9),o=a(0),i=a.n(o),l=a(1),r=a.n(l),c=a(4),u=a.n(c),d=a(3),f=r.a.oneOfType([r.a.number,r.a.string]),p=r.a.oneOfType([r.a.bool,r.a.string,r.a.number,r.a.shape({size:f,order:f,offset:f})]),m={children:r.a.node,hidden:r.a.bool,check:r.a.bool,size:r.a.string,for:r.a.string,tag:d.tagPropType,className:r.a.string,cssModule:r.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:r.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,o=e.hidden,l=e.widths,r=e.tag,c=e.check,f=e.size,p=e.for,m=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];l.forEach((function(t,n){var s=e[t];if(delete m[t],s||""===s){var o,i=!n;if(Object(d.isObject)(s)){var l,r=i?"-":"-"+t+"-";o=b(i,t,s.size),h.push(Object(d.mapToCssModules)(u()(((l={})[o]=s.size||""===s.size,l["order"+r+s.order]=s.order||0===s.order,l["offset"+r+s.offset]=s.offset||0===s.offset,l))),a)}else o=b(i,t,s),h.push(o)}}));var g=Object(d.mapToCssModules)(u()(t,!!o&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),a);return i.a.createElement(r,Object(n.a)({htmlFor:p},m,{className:g}))};g.propTypes=m,g.defaultProps=h,t.a=g},798:function(e,t,a){"use strict";var n=a(5),s=a(9),o=a(11),i=a(12),l=a(0),r=a.n(l),c=a(1),u=a.n(c),d=a(4),f=a.n(d),p=a(3),m={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,i=e.tag,l=e.innerRef,c=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.mapToCssModules)(f()(t,!!o&&"form-inline"),a);return r.a.createElement(i,Object(n.a)({},c,{ref:l,className:u}))},t}(l.Component);h.propTypes=m,h.defaultProps={tag:"form"},t.a=h},799:function(e,t,a){"use strict";var n=a(5),s=a(9),o=a(0),i=a.n(o),l=a(1),r=a.n(l),c=a(4),u=a.n(c),d=a(3),f={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:d.tagPropType,className:r.a.string,cssModule:r.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.row,l=e.disabled,r=e.check,c=e.inline,f=e.tag,p=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(d.mapToCssModules)(u()(t,!!o&&"row",r?"form-check":"form-group",!(!r||!c)&&"form-check-inline",!(!r||!l)&&"disabled"),a);return"fieldset"===f&&(p.disabled=l),i.a.createElement(f,Object(n.a)({},p,{className:m}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=121.7aba5fdd.chunk.js.map