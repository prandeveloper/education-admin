(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[138],{2144:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var n=t(13),l=t(14),r=t(16),s=t(15),i=t(0),c=t.n(i),o=t(1274),m=t(1275),d=t(1276),u=t(1277),p=t(804),f=t(1272),b=t(1273),h=t(799),g=t(796),E=t(184),y=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(o.a,null,c.a.createElement(m.a,null,c.a.createElement(d.a,null)),c.a.createElement(u.a,null,c.a.createElement("h1",null,"Edit Mail Settings "),c.a.createElement(p.a,{className:"m-1"},c.a.createElement(f.a,null,c.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(h.a,null,"Sender Name:"),c.a.createElement(g.a,{required:!0,type:"text",placeholder:"Company Name"})),c.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(h.a,null,"Mail Driver: (ex. smtp,sendmail,mail)"),c.a.createElement(g.a,{required:!0,type:"email",placeholder:"Email"})),c.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(h.a,null,"Mail Address: (ex. user@info.com)"),c.a.createElement(g.a,{required:!0,type:"email",placeholder:"Email"})),c.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(h.a,null,"Mail Host: (ex. smtp.gmail.com)"),c.a.createElement(g.a,{required:!0,type:"email",placeholder:"Email"})),c.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(h.a,null,"Mail PORT: (ex. 467,587,2525)"),c.a.createElement(g.a,{type:"text",placeholder:"IFSC Code"})),c.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(h.a,null,"Mail Username: (info@gmail.com)"),c.a.createElement(g.a,{required:!0,type:"email",placeholder:"Email"})),c.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(h.a,null,"Password:"),c.a.createElement(g.a,{required:!0,type:"text",name:"password",id:"show_hide_password",placeholder:"Set Password For User"})),c.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(h.a,null,"Mail Encryption: (ex. TLS,SSL,OR Leave blank)"),c.a.createElement(g.a,{type:"text",placeholder:"IFSC Code"}))),c.a.createElement(f.a,null,c.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a.Ripple,{className:"mr-1 mb-1 btn-danger-rgba",type:"reset",value:"Reset"},"Reset"),c.a.createElement(E.a.Ripple,{type:"submit",className:"mr-1 mb-1 btn-primary-rgba"},"Mail Template")))))))}}]),t}(i.Component)},796:function(e,a,t){"use strict";var n=t(5),l=t(9),r=t(11),s=t(12),i=t(0),c=t.n(i),o=t(1),m=t.n(o),d=t(4),u=t.n(d),p=t(3),f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,s=e.bsSize,i=e.valid,o=e.invalid,m=e.tag,d=e.addon,f=e.plaintext,b=e.innerRef,h=Object(l.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(r)>-1,E=new RegExp("\\D","g"),y=m||("select"===r||"textarea"===r?r:"input"),v="form-control";f?(v+="-plaintext",y=m||"input"):"file"===r?v+="-file":"range"===r?v+="-range":g&&(v=d?null:"form-check-input"),h.size&&E.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=h.size,delete h.size);var O=Object(p.mapToCssModules)(u()(a,o&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,v),t);return("input"===y||m&&"function"===typeof m)&&(h.type=r),h.children&&!f&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(y,Object(n.a)({},h,{ref:b,className:O,"aria-invalid":o}))},a}(c.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},799:function(e,a,t){"use strict";var n=t(5),l=t(9),r=t(0),s=t.n(r),i=t(1),c=t.n(i),o=t(4),m=t.n(o),d=t(3),u=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:u,order:u,offset:u})]),f={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.hidden,i=e.widths,c=e.tag,o=e.check,u=e.size,p=e.for,f=Object(l.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];i.forEach((function(a,n){var l=e[a];if(delete f[a],l||""===l){var r,s=!n;if(Object(d.isObject)(l)){var i,c=s?"-":"-"+a+"-";r=h(s,a,l.size),b.push(Object(d.mapToCssModules)(m()(((i={})[r]=l.size||""===l.size,i["order"+c+l.order]=l.order||0===l.order,i["offset"+c+l.offset]=l.offset||0===l.offset,i))),t)}else r=h(s,a,l),b.push(r)}}));var g=Object(d.mapToCssModules)(m()(a,!!r&&"sr-only",!!o&&"form-check-label",!!u&&"col-form-label-"+u,b,!!b.length&&"col-form-label"),t);return s.a.createElement(c,Object(n.a)({htmlFor:p},f,{className:g}))};g.propTypes=f,g.defaultProps=b,a.a=g},804:function(e,a,t){"use strict";var n=t(5),l=t(9),r=t(11),s=t(12),i=t(0),c=t.n(i),o=t(1),m=t.n(o),d=t(4),u=t.n(d),p=t(3),f={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,s=e.tag,i=e.innerRef,o=Object(l.a)(e,["className","cssModule","inline","tag","innerRef"]),m=Object(p.mapToCssModules)(u()(a,!!r&&"form-inline"),t);return c.a.createElement(s,Object(n.a)({},o,{ref:i,className:m}))},a}(i.Component);b.propTypes=f,b.defaultProps={tag:"form"},a.a=b}}]);
//# sourceMappingURL=138.498534fd.chunk.js.map