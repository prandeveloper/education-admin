(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[143],{2135:function(e,t,a){"use strict";a.r(t),a.d(t,"AddSubCategory",(function(){return C}));var n=a(76),r=a.n(n),s=a(126),c=a(41),o=a(13),l=a(14),i=a(16),u=a(15),d=a(0),m=a.n(d),p=a(977),f=a(975),g=a(976),h=a(178),b=a(980),y=a(816),v=a(812),E=a(785),O=a(798),j=a(21),N=a(797),C=(a(840),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeHandler=function(e){n.setState({selectedFile:e.target.files[0]}),n.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},n.changeHandler1=function(e){n.setState({status:e.target.value})},n.changeHandler=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",n.state.name),t.append("desc",n.state.desc),t.append("productcategory",n.state.productcategory),t.append("sortorder",n.state.sortorder),t.append("status",n.state.status),null!==n.state.selectedFile&&t.append("product_img",n.state.selectedFile,n.state.selectedName),N.a.post("/addproductsubcategory",t).then((function(e){console.log(e),n.props.history.push("/app/category/subCategory")})).catch((function(e){console.log(e)}))},n.state={name:"",sortorder:"",desc:"",productcategory:"",product_img:"",status:"",selectedFile:null,selectedName:""},n.state={productC:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.a.get("/getproductCategory").then((function(e){console.log(e),t.setState({productC:e.data.data})})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(p.a,null,m.a.createElement(f.a,{className:"m-2"},m.a.createElement(g.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Category")),m.a.createElement(g.a,null,m.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return j.a.push("/app/category/subCategory")}},"Back"))),m.a.createElement(b.a,null,m.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(f.a,{className:"mb-2"},m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(v.a,null," Main Category"),m.a.createElement(E.a,{type:"select",name:"productcategory",value:this.state.productcategory,onChange:this.changeHandler},this.state.productC.map((function(e){return m.a.createElement("option",{key:e._id,value:e._id},e.name)})))),m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(v.a,null,"Category Name"),m.a.createElement(O.a,{type:"text",placeholder:"Enter Category",name:"name",value:this.state.name,onChange:this.changeHandler})),m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(v.a,null,"Description"),m.a.createElement(O.a,{type:"textarea",name:"desc",value:this.state.desc,onChange:this.changeHandler})),m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(v.a,null,"Sort Order"),m.a.createElement(O.a,{type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler})),m.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(v.a,null,"Image"),m.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler})),m.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},m.a.createElement(v.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),m.a.createElement(f.a,null,m.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Sub-Category"))))))}}]),a}(d.Component));t.default=C},797:function(e,t,a){"use strict";var n=a(40),r=a.n(n).a.create({baseURL:"http://13.127.52.128/api/api/admin"});t.a=r},798:function(e,t,a){"use strict";var n=a(5),r=a(7),s=a(11),c=a(12),o=a(0),l=a.n(o),i=a(1),u=a.n(i),d=a(4),m=a.n(d),p=a(3),f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,c=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),v=u||("select"===s||"textarea"===s?s:"input"),E="form-control";f?(E+="-plaintext",v=u||"input"):"file"===s?E+="-file":"range"===s?E+="-range":b&&(E=d?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=h.size,delete h.size);var O=Object(p.mapToCssModules)(m()(t,i&&"is-invalid",o&&"is-valid",!!c&&"form-control-"+c,E),a);return("input"===v||u&&"function"===typeof u)&&(h.type=s),h.children&&!f&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(v,Object(n.a)({},h,{ref:g,className:O,"aria-invalid":i}))},t}(l.a.Component);g.propTypes=f,g.defaultProps={type:"text"},t.a=g},812:function(e,t,a){"use strict";var n=a(5),r=a(7),s=a(0),c=a.n(s),o=a(1),l=a.n(o),i=a(4),u=a.n(i),d=a(3),m=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:m,order:m,offset:m})]),f={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:l.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,s=e.hidden,o=e.widths,l=e.tag,i=e.check,m=e.size,p=e.for,f=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];o.forEach((function(t,n){var r=e[t];if(delete f[t],r||""===r){var s,c=!n;if(Object(d.isObject)(r)){var o,l=c?"-":"-"+t+"-";s=h(c,t,r.size),g.push(Object(d.mapToCssModules)(u()(((o={})[s]=r.size||""===r.size,o["order"+l+r.order]=r.order||0===r.order,o["offset"+l+r.offset]=r.offset||0===r.offset,o))),a)}else s=h(c,t,r),g.push(s)}}));var b=Object(d.mapToCssModules)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,g,!!g.length&&"col-form-label"),a);return c.a.createElement(l,Object(n.a)({htmlFor:p},f,{className:b}))};b.propTypes=f,b.defaultProps=g,t.a=b},816:function(e,t,a){"use strict";var n=a(5),r=a(7),s=a(11),c=a(12),o=a(0),l=a.n(o),i=a(1),u=a.n(i),d=a(4),m=a.n(d),p=a(3),f={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,c=e.tag,o=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.mapToCssModules)(m()(t,!!s&&"form-inline"),a);return l.a.createElement(c,Object(n.a)({},i,{ref:o,className:u}))},t}(o.Component);g.propTypes=f,g.defaultProps={tag:"form"},t.a=g}}]);
//# sourceMappingURL=143.c8ac0f74.chunk.js.map