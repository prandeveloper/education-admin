(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[105],{2132:function(e,t,a){"use strict";a.r(t),a.d(t,"EditSubCategory",(function(){return j}));var n=a(904),r=a(41),s=a(13),o=a(14),c=a(16),l=a(15),i=a(0),u=a.n(i),d=a(992),m=a(990),p=a(991),f=a(178),g=a(995),h=a(818),b=a(814),y=a(785),v=a(798),E=a(21),O=a(797),j=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).onChangeHandler=function(e){o.setState({selectedFile:e.target.files[0]}),o.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},o.changeHandler1=function(e){o.setState({status:e.target.value})},o.changeHandler=function(e){o.setState(Object(r.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",o.state.name),t.append("desc",o.state.desc),t.append("productcategory",o.state.productcategory),t.append("sortorder",o.state.sortorder),t.append("status",o.state.status),null!==o.state.selectedFile&&t.append("product_img",o.state.selectedFile,o.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var s=a.value;console.log(s)}}catch(d){r.e(d)}finally{r.f()}var c,l=Object(n.a)(t.keys());try{for(l.s();!(c=l.n()).done;){var i=c.value;console.log(i)}}catch(d){l.e(d)}finally{l.f()}var u=o.props.match.params.id;O.a.post("/editproductsubcategory/".concat(u),t).then((function(e){console.log(e),o.props.history.push("/app/category/subCategory")})).catch((function(e){console.log(e)}))},o.state={name:"",sortorder:"",desc:"",product_img:"",productcategory:"",status:"",selectedFile:null,selectedName:""},o.state={productC:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/getproductCategory").then((function(t){console.log(t),e.setState({productC:t.data.data})})).catch((function(e){console.log(e)}));var t=this.props.match.params.id;O.a.get("/viewoneproductsubcategory/".concat(t)).then((function(t){console.log(t),e.setState({product_img:t.data.data.product_img,productcategory:t.data.data.productcategory,name:t.data.data.name,desc:t.data.data.desc,sortorder:t.data.data.sortorder,status:t.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Sub Category")),u.a.createElement(p.a,null,u.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/category/subCategory")}},"Back"))),u.a.createElement(g.a,null,u.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(m.a,{className:"mb-2"},u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(b.a,null," Main Category"),u.a.createElement(y.a,{type:"select",name:"productcategory",value:this.state.productcategory,onChange:this.changeHandler},this.state.productC.map((function(e){return u.a.createElement("option",{key:e._id,value:e._id},e.name)})))),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(b.a,null,"Category Name"),u.a.createElement(v.a,{type:"text",placeholder:"Enter Category",name:"name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(b.a,null,"Description"),u.a.createElement(v.a,{type:"textarea",name:"desc",value:this.state.desc,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(b.a,null,"Sort Order"),u.a.createElement(v.a,{type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(b.a,null,"Image"),u.a.createElement(y.a,{type:"file",onChange:this.onChangeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(b.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),u.a.createElement(m.a,null,u.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Sub-Category"))))))}}]),a}(i.Component);t.default=j},797:function(e,t,a){"use strict";var n=a(40),r=a.n(n).a.create({baseURL:"http://13.127.52.128/v1/api/admin"});t.a=r},798:function(e,t,a){"use strict";var n=a(5),r=a(7),s=a(11),o=a(12),c=a(0),l=a.n(c),i=a(1),u=a.n(i),d=a(4),m=a.n(d),p=a(3),f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,o=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),v=u||("select"===s||"textarea"===s?s:"input"),E="form-control";f?(E+="-plaintext",v=u||"input"):"file"===s?E+="-file":"range"===s?E+="-range":b&&(E=d?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=h.size,delete h.size);var O=Object(p.mapToCssModules)(m()(t,i&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,E),a);return("input"===v||u&&"function"===typeof u)&&(h.type=s),h.children&&!f&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(v,Object(n.a)({},h,{ref:g,className:O,"aria-invalid":i}))},t}(l.a.Component);g.propTypes=f,g.defaultProps={type:"text"},t.a=g},814:function(e,t,a){"use strict";var n=a(5),r=a(7),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(4),u=a.n(i),d=a(3),m=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:m,order:m,offset:m})]),f={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:l.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,s=e.hidden,c=e.widths,l=e.tag,i=e.check,m=e.size,p=e.for,f=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];c.forEach((function(t,n){var r=e[t];if(delete f[t],r||""===r){var s,o=!n;if(Object(d.isObject)(r)){var c,l=o?"-":"-"+t+"-";s=h(o,t,r.size),g.push(Object(d.mapToCssModules)(u()(((c={})[s]=r.size||""===r.size,c["order"+l+r.order]=r.order||0===r.order,c["offset"+l+r.offset]=r.offset||0===r.offset,c))),a)}else s=h(o,t,r),g.push(s)}}));var b=Object(d.mapToCssModules)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,g,!!g.length&&"col-form-label"),a);return o.a.createElement(l,Object(n.a)({htmlFor:p},f,{className:b}))};b.propTypes=f,b.defaultProps=g,t.a=b},818:function(e,t,a){"use strict";var n=a(5),r=a(7),s=a(11),o=a(12),c=a(0),l=a.n(c),i=a(1),u=a.n(i),d=a(4),m=a.n(d),p=a(3),f={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,o=e.tag,c=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.mapToCssModules)(m()(t,!!s&&"form-inline"),a);return l.a.createElement(o,Object(n.a)({},i,{ref:c,className:u}))},t}(c.Component);g.propTypes=f,g.defaultProps={tag:"form"},t.a=g},904:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(99);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,o=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){c=!0,s=e},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw s}}}}}}]);
//# sourceMappingURL=105.75ccb0d3.chunk.js.map