(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[120],{2137:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(831),r=a(41),o=a(13),s=a(14),l=a(16),c=a(15),i=a(0),u=a.n(i),f=a(1120),d=a(1118),m=a(1119),p=a(1123),b=a(802),h=a(794),g=a(799),v=a(182),y=a(40),O=a.n(y),j=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(r.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state);var t=new FormData;t.append("usertype",s.state.usertype);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var o=a.value;console.log(o)}}catch(u){r.e(u)}finally{r.f()}var l,c=Object(n.a)(t.keys());try{for(c.s();!(l=c.n()).done;){var i=l.value;console.log(i)}}catch(u){c.e(u)}finally{c.f()}O.a.post("").then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},s.state={status:"",selectedName:"",selectedFile:null},s}return Object(s.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(f.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Choose Payment Options"))),u.a.createElement(p.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(d.a,null,u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement("div",{class:"form-check"},u.a.createElement(h.a,{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1"}),u.a.createElement(g.a,{class:"form-check-label",for:"flexRadioDefault1"},"Cash")),u.a.createElement("div",{class:"form-check"},u.a.createElement(h.a,{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",checked:!0}),u.a.createElement(g.a,{class:"form-check-label",for:"flexRadioDefault2"},"Cheque")),u.a.createElement("div",{class:"form-group"},u.a.createElement(h.a,{type:"text",class:"form-control",name:"cheque",placeholder:"Enter your cheque number"})),u.a.createElement(v.a.Ripple,{color:"danger",className:"mr-1 mb-1 btn-danger-rgba",type:"reset",value:"Reset"},"Back"),u.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Next")))))))}}]),a}(i.Component)},794:function(e,t,a){"use strict";var n=a(5),r=a(9),o=a(11),s=a(12),l=a(0),c=a.n(l),i=a(1),u=a.n(i),f=a(4),d=a.n(f),m=a(3),p={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,s=e.bsSize,l=e.valid,i=e.invalid,u=e.tag,f=e.addon,p=e.plaintext,b=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),y=u||("select"===o||"textarea"===o?o:"input"),O="form-control";p?(O+="-plaintext",y=u||"input"):"file"===o?O+="-file":"range"===o?O+="-range":g&&(O=f?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=h.size,delete h.size);var j=Object(m.mapToCssModules)(d()(t,i&&"is-invalid",l&&"is-valid",!!s&&"form-control-"+s,O),a);return("input"===y||u&&"function"===typeof u)&&(h.type=o),h.children&&!p&&"select"!==o&&"string"===typeof y&&"select"!==y&&(Object(m.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(y,Object(n.a)({},h,{ref:b,className:j,"aria-invalid":i}))},t}(c.a.Component);b.propTypes=p,b.defaultProps={type:"text"},t.a=b},799:function(e,t,a){"use strict";var n=a(5),r=a(9),o=a(0),s=a.n(o),l=a(1),c=a.n(l),i=a(4),u=a.n(i),f=a(3),d=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:d,order:d,offset:d})]),p={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:f.tagPropType,className:c.a.string,cssModule:c.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,o=e.hidden,l=e.widths,c=e.tag,i=e.check,d=e.size,m=e.for,p=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];l.forEach((function(t,n){var r=e[t];if(delete p[t],r||""===r){var o,s=!n;if(Object(f.isObject)(r)){var l,c=s?"-":"-"+t+"-";o=h(s,t,r.size),b.push(Object(f.mapToCssModules)(u()(((l={})[o]=r.size||""===r.size,l["order"+c+r.order]=r.order||0===r.order,l["offset"+c+r.offset]=r.offset||0===r.offset,l))),a)}else o=h(s,t,r),b.push(o)}}));var g=Object(f.mapToCssModules)(u()(t,!!o&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,b,!!b.length&&"col-form-label"),a);return s.a.createElement(c,Object(n.a)({htmlFor:m},p,{className:g}))};g.propTypes=p,g.defaultProps=b,t.a=g},802:function(e,t,a){"use strict";var n=a(5),r=a(9),o=a(11),s=a(12),l=a(0),c=a.n(l),i=a(1),u=a.n(i),f=a(4),d=a.n(f),m=a(3),p={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,s=e.tag,l=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.mapToCssModules)(d()(t,!!o&&"form-inline"),a);return c.a.createElement(s,Object(n.a)({},i,{ref:l,className:u}))},t}(l.Component);b.propTypes=p,b.defaultProps={tag:"form"},t.a=b},831:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(99);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,s=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw o}}}}}}]);
//# sourceMappingURL=120.01c5431c.chunk.js.map