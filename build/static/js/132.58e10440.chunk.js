(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[132],{2109:function(e,t,a){"use strict";a.r(t),a.d(t,"AddCategory",(function(){return j}));var n=a(41),s=a(13),r=a(14),l=a(16),o=a(15),c=a(0),i=a.n(c),u=a(1120),d=a(1118),f=a(1119),p=a(182),m=a(1123),b=a(802),h=a(799),g=a(794),y=a(780),v=a(21),O=a(177),j=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("catName",r.state.catName),null!==r.state.selectedFile&&t.append("icon",r.state.selectedFile,r.state.selectedName),O.a.post("/addCat",t).then((function(e){console.log(e),r.props.history.push("/app/category/categoryList")})).catch((function(e){console.log(e)}))},r.state={catName:"",icon:"",selectedFile:null,selectedName:""},r}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(f.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Category")),i.a.createElement(f.a,null,i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/category/categoryList")}},"Back"))),i.a.createElement(m.a,null,i.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,{className:"mb-2"},i.a.createElement(f.a,{lg:"6",md:"6"},i.a.createElement(h.a,null,"Category Name"),i.a.createElement(g.a,{type:"text",placeholder:"Enter Category",name:"catName",value:this.state.catName,onChange:this.changeHandler})),i.a.createElement(f.a,{lg:"6",md:"6"},i.a.createElement(h.a,null,"Image"),i.a.createElement(y.a,{type:"file",onChange:this.onChangeHandler}))),i.a.createElement(d.a,null,i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Category"))))))}}]),a}(c.Component);t.default=j},794:function(e,t,a){"use strict";var n=a(5),s=a(9),r=a(11),l=a(12),o=a(0),c=a.n(o),i=a(1),u=a.n(i),d=a(4),f=a.n(d),p=a(3),m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,b=e.innerRef,h=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),v=u||("select"===r||"textarea"===r?r:"input"),O="form-control";m?(O+="-plaintext",v=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":g&&(O=d?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var j=Object(p.mapToCssModules)(f()(t,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),a);return("input"===v||u&&"function"===typeof u)&&(h.type=r),h.children&&!m&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(v,Object(n.a)({},h,{ref:b,className:j,"aria-invalid":i}))},t}(c.a.Component);b.propTypes=m,b.defaultProps={type:"text"},t.a=b},799:function(e,t,a){"use strict";var n=a(5),s=a(9),r=a(0),l=a.n(r),o=a(1),c=a.n(o),i=a(4),u=a.n(i),d=a(3),f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:f,order:f,offset:f})]),m={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,i=e.check,f=e.size,p=e.for,m=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];o.forEach((function(t,n){var s=e[t];if(delete m[t],s||""===s){var r,l=!n;if(Object(d.isObject)(s)){var o,c=l?"-":"-"+t+"-";r=h(l,t,s.size),b.push(Object(d.mapToCssModules)(u()(((o={})[r]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),a)}else r=h(l,t,s),b.push(r)}}));var g=Object(d.mapToCssModules)(u()(t,!!r&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),a);return l.a.createElement(c,Object(n.a)({htmlFor:p},m,{className:g}))};g.propTypes=m,g.defaultProps=b,t.a=g},802:function(e,t,a){"use strict";var n=a(5),s=a(9),r=a(11),l=a(12),o=a(0),c=a.n(o),i=a(1),u=a.n(i),d=a(4),f=a.n(d),p=a(3),m={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.mapToCssModules)(f()(t,!!r&&"form-inline"),a);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:u}))},t}(o.Component);b.propTypes=m,b.defaultProps={tag:"form"},t.a=b}}]);
//# sourceMappingURL=132.58e10440.chunk.js.map