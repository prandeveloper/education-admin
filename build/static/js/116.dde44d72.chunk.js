(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[116],{2229:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var n=a(904),r=a(41),s=a(13),l=a(14),i=a(16),o=a(15),c=a(0),u=a.n(c),d=a(992),f=a(993),m=a(994),p=a(995),b=a(818),h=a(990),g=a(991),v=a(814),y=a(798),O=a(785),j=a(178),E=a(797),N=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(r.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("banner_title",l.state.banner_title),t.append("status",l.state.status),null!==l.state.selectedFile&&t.append("banner_img",l.state.selectedFile,l.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var s=a.value;console.log(s)}}catch(u){r.e(u)}finally{r.f()}var i,o=Object(n.a)(t.keys());try{for(o.s();!(i=o.n()).done;){var c=i.value;console.log(c)}}catch(u){o.e(u)}finally{o.f()}E.a.post("/addbanner",t).then((function(e){console.log(e),alert("Slider Added Successful"),l.props.history.push("/app/slider/sliderList")})).catch((function(e){console.log(e)}))},l.state={banner_title:"",banner_img:"",selectedFile:null,status:""},l}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(f.a,null,u.a.createElement(m.a,null,"New Slider")),u.a.createElement(p.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(h.a,null,u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Title"),u.a.createElement(y.a,{required:!0,type:"text",name:"banner_title",placeholder:"Enter Banner Title",value:this.state.banner_title,onChange:this.changeHandler})),u.a.createElement(g.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},u.a.createElement(v.a,null,"BannerImage"),u.a.createElement(O.a,{required:!0,type:"file",placeholder:"Enter Banner Image",onChange:this.onChangeHandler}))),u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),u.a.createElement(h.a,null,u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(j.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Slider")))))))}}]),a}(c.Component)},797:function(e,t,a){"use strict";var n=a(40),r=a.n(n).a.create({baseURL:"http://13.127.52.128/v1/api/admin"});t.a=r},798:function(e,t,a){"use strict";var n=a(5),r=a(7),s=a(11),l=a(12),i=a(0),o=a.n(i),c=a(1),u=a.n(c),d=a(4),f=a.n(d),m=a(3),p={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,i=e.valid,c=e.invalid,u=e.tag,d=e.addon,p=e.plaintext,b=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),y=u||("select"===s||"textarea"===s?s:"input"),O="form-control";p?(O+="-plaintext",y=u||"input"):"file"===s?O+="-file":"range"===s?O+="-range":g&&(O=d?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var j=Object(m.mapToCssModules)(f()(t,c&&"is-invalid",i&&"is-valid",!!l&&"form-control-"+l,O),a);return("input"===y||u&&"function"===typeof u)&&(h.type=s),h.children&&!p&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(m.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(y,Object(n.a)({},h,{ref:b,className:j,"aria-invalid":c}))},t}(o.a.Component);b.propTypes=p,b.defaultProps={type:"text"},t.a=b},814:function(e,t,a){"use strict";var n=a(5),r=a(7),s=a(0),l=a.n(s),i=a(1),o=a.n(i),c=a(4),u=a.n(c),d=a(3),f=o.a.oneOfType([o.a.number,o.a.string]),m=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),p={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,s=e.hidden,i=e.widths,o=e.tag,c=e.check,f=e.size,m=e.for,p=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];i.forEach((function(t,n){var r=e[t];if(delete p[t],r||""===r){var s,l=!n;if(Object(d.isObject)(r)){var i,o=l?"-":"-"+t+"-";s=h(l,t,r.size),b.push(Object(d.mapToCssModules)(u()(((i={})[s]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i))),a)}else s=h(l,t,r),b.push(s)}}));var g=Object(d.mapToCssModules)(u()(t,!!s&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),a);return l.a.createElement(o,Object(n.a)({htmlFor:m},p,{className:g}))};g.propTypes=p,g.defaultProps=b,t.a=g},818:function(e,t,a){"use strict";var n=a(5),r=a(7),s=a(11),l=a(12),i=a(0),o=a.n(i),c=a(1),u=a.n(c),d=a(4),f=a.n(d),m=a(3),p={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,i=e.innerRef,c=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.mapToCssModules)(f()(t,!!s&&"form-inline"),a);return o.a.createElement(l,Object(n.a)({},c,{ref:i,className:u}))},t}(i.Component);b.propTypes=p,b.defaultProps={tag:"form"},t.a=b},904:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(99);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,l=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw s}}}}}}]);
//# sourceMappingURL=116.dde44d72.chunk.js.map