(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[152],{2141:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var n=t(42),s=t(13),r=t(14),l=t(16),o=t(15),i=t(0),c=t.n(i),d=t(1118),m=t(1119),u=t(1115),h=t(1116),p=t(1120),f=t(182),b=t(1123),g=t(799),E=t(796),v=t(795),y=t(177),O=t(24),j=t(841),N=t.n(j),w=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;y.a.post("/editwarehouse/".concat(a),r.state).then((function(e){console.log(e),N()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/warehouse/warehouseList")})).catch((function(e){console.log(e)}))},r.state={warehousename:"",email:"",phone_no:"",address1:"",address2:"",city:"",pin:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;y.a.get("/getonewarehouse/".concat(a)).then((function(a){console.log(a),e.setState({warehousename:a.data.data.warehousename,email:a.data.data.email,phone_no:a.data.data.phone_no,address1:a.data.data.address1,address2:a.data.data.address2,city:a.data.data.city,pin:a.data.data.pin})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement(m.a,{sm:"12"},c.a.createElement("div",null,c.a.createElement(u.a,{listTag:"div"},c.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),c.a.createElement(h.a,{href:"/app/warehouse/warehouseList",tag:"a"},"Warehouse List"),c.a.createElement(h.a,{active:!0},"Edit Warehouse"))))),c.a.createElement(p.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(m.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Warehouse")),c.a.createElement(m.a,null,c.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return O.a.push("/app/warehouse/warehouseList")}},"Back"))),c.a.createElement(b.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(d.a,null,c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"WareHouse Name"),c.a.createElement(v.a,{required:!0,type:"text",name:"warehousename",placeholder:"Enter Name",value:this.state.warehousename,onChange:this.changeHandler})),c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Email"),c.a.createElement(v.a,{required:!0,type:"email",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.changeHandler})),c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Phone Number"),c.a.createElement(v.a,{required:!0,type:"number",name:"phone_no",placeholder:"Enter Phone No.",value:this.state.phone_no,onChange:this.changeHandler})),c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Address Line 1"),c.a.createElement(v.a,{required:!0,type:"textarea",name:"address1",placeholder:"Enter Address Line 1",value:this.state.address1,onChange:this.changeHandler})),c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Address Line 2"),c.a.createElement(v.a,{required:!0,type:"textarea",name:"address2",placeholder:"Enter Address Line 2",value:this.state.address2,onChange:this.changeHandler})),c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"City"),c.a.createElement(v.a,{required:!0,type:"text",name:"city",placeholder:"Enter City",value:this.state.city,onChange:this.changeHandler})),c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"PinCode"),c.a.createElement(v.a,{required:!0,type:"number",name:"pin",placeholder:"Enter Pin Code",value:this.state.pin,onChange:this.changeHandler}))),c.a.createElement(d.a,null,c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(i.Component)},795:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),l=t(12),o=t(0),i=t.n(o),c=t(1),d=t.n(c),m=t(4),u=t.n(m),h=t(3),p={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:h.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,c=e.invalid,d=e.tag,m=e.addon,p=e.plaintext,f=e.innerRef,b=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(r)>-1,E=new RegExp("\\D","g"),v=d||("select"===r||"textarea"===r?r:"input"),y="form-control";p?(y+="-plaintext",v=d||"input"):"file"===r?y+="-file":"range"===r?y+="-range":g&&(y=m?null:"form-check-input"),b.size&&E.test(b.size)&&(Object(h.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var O=Object(h.mapToCssModules)(u()(a,c&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,y),t);return("input"===v||d&&"function"===typeof d)&&(b.type=r),b.children&&!p&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(h.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(v,Object(n.a)({},b,{ref:f,className:O,"aria-invalid":c}))},a}(i.a.Component);f.propTypes=p,f.defaultProps={type:"text"},a.a=f},796:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(0),l=t.n(r),o=t(1),i=t.n(o),c=t(4),d=t.n(c),m=t(3),u=i.a.oneOfType([i.a.number,i.a.string]),h=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:u,order:u,offset:u})]),p={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:i.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,i=e.tag,c=e.check,u=e.size,h=e.for,p=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),f=[];o.forEach((function(a,n){var s=e[a];if(delete p[a],s||""===s){var r,l=!n;if(Object(m.isObject)(s)){var o,i=l?"-":"-"+a+"-";r=b(l,a,s.size),f.push(Object(m.mapToCssModules)(d()(((o={})[r]=s.size||""===s.size,o["order"+i+s.order]=s.order||0===s.order,o["offset"+i+s.offset]=s.offset||0===s.offset,o))),t)}else r=b(l,a,s),f.push(r)}}));var g=Object(m.mapToCssModules)(d()(a,!!r&&"sr-only",!!c&&"form-check-label",!!u&&"col-form-label-"+u,f,!!f.length&&"col-form-label"),t);return l.a.createElement(i,Object(n.a)({htmlFor:h},p,{className:g}))};g.propTypes=p,g.defaultProps=f,a.a=g},799:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),l=t(12),o=t(0),i=t.n(o),c=t(1),d=t.n(c),m=t(4),u=t.n(m),h=t(3),p={children:d.a.node,inline:d.a.bool,tag:h.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,c=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(h.mapToCssModules)(u()(a,!!r&&"form-inline"),t);return i.a.createElement(l,Object(n.a)({},c,{ref:o,className:d}))},a}(o.Component);f.propTypes=p,f.defaultProps={tag:"form"},a.a=f}}]);
//# sourceMappingURL=152.c95a40eb.chunk.js.map