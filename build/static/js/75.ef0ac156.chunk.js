(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[75],{1867:function(e,a,t){e.exports=t.p+"static/media/graphic-1.58c221eb.png"},1868:function(e,a,t){e.exports=t.p+"static/media/graphic-2.6dd844b4.png"},1869:function(e,a,t){e.exports=t.p+"static/media/graphic-3.32e0e0cb.png"},1870:function(e,a,t){e.exports=t.p+"static/media/graphic-4.0112e680.png"},1871:function(e,a,t){e.exports=t.p+"static/media/graphic-5.e6415499.png"},1872:function(e,a,t){e.exports=t.p+"static/media/graphic-6.4df5e78b.png"},2321:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),i=t(16),c=t(15),s=t(0),o=t.n(s),l=t(1012),d=t(1013),u=t(808),m=t(1014),p=t(1017),f=t(814),b=t(807),g=t(412),h=t(42),v=t(1867),y=t.n(v),w=t(1868),E=t.n(w),x=t(1869),O=t.n(x),j=t(1870),k=t.n(j),N=t(1871),C=t.n(N),z=t(1872),M=t.n(z),P=[{id:1,img:y.a,title:"sales automation",text:"Muffin lemon drops chocolate carrot cake chocolate bar sweet roll."},{id:2,img:E.a,title:"marketing automation",text:"Gingerbread sesame snaps wafer souffl\xe9. Macaroon brownie ice cream."},{id:3,img:O.a,title:"marketing bi",text:"cotton candy caramels danish chocolate cake pie candy. Lemon drops tart.."},{id:4,img:k.a,title:"personalization",text:"Pudding oat cake carrot cake lemon drops gummies marshmallow.."},{id:5,img:C.a,title:"email marketing",text:"Gummi bears pudding icing sweet caramels chocolate.Muffin croissant."},{id:6,img:M.a,title:"demand generation",text:"Drag\xe9e jelly beans candy canes pudding cake wafer. Muffin croissant."}],R=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).renderCards=function(){return P.map((function(a){return e.props.value.length<1||a.title.includes(e.props.value)?o.a.createElement(d.a,{md:"4",sm:"6",className:"search-content",key:a.id},o.a.createElement(m.a,null,o.a.createElement(p.a,{className:"text-center"},o.a.createElement(h.a,{to:"/pages/knowledge-base/category"},o.a.createElement("img",{src:a.img,alt:a.title,className:"mx-auto mb-2",width:"180"}),o.a.createElement("h4",null,a.title.toUpperCase()),o.a.createElement("small",{className:"text-dark"},a.text))))):""}))},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(l.a,null,this.renderCards())}}]),t}(o.a.Component),T=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={value:""},e.onChange=function(a){var t=a.target.value.toLowerCase();e.setState({value:t})},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(l.a,null,o.a.createElement(d.a,{sm:"12"},o.a.createElement(m.a,{className:"knowledge-base-bg"},o.a.createElement(p.a,null,o.a.createElement("h1",{className:"white"},"Dedicated Source Used on Website"),o.a.createElement("p",{className:"mb-2 white"},"Bonbon sesame snaps lemon drops marshmallow ice cream carrot cake croissant wafer."),o.a.createElement("form",null,o.a.createElement(f.a,{className:"position-relative has-icon-left mb-0"},o.a.createElement(b.a,{type:"text",placeholder:"Search a topic or a keyword",bsSize:"lg",value:this.state.value,onChange:this.onChange}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(g.a,{size:14}))))))),o.a.createElement(d.a,{sm:"12"},o.a.createElement(R,{value:this.state.value})))}}]),t}(o.a.Component),S=(t(1406),function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{breadCrumbTitle:"Knowledge Base",breadCrumbParent:"Pages",breadCrumbActive:"Knowledge Base"}),o.a.createElement(l.a,null,o.a.createElement(d.a,{sm:"12"},o.a.createElement(T,null))))}}]),t}(o.a.Component));a.default=S},807:function(e,a,t){"use strict";var n=t(5),r=t(7),i=t(11),c=t(12),s=t(0),o=t.n(s),l=t(1),d=t.n(l),u=t(4),m=t.n(u),p=t(3),f={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,c=e.bsSize,s=e.valid,l=e.invalid,d=e.tag,u=e.addon,f=e.plaintext,b=e.innerRef,g=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(i)>-1,v=new RegExp("\\D","g"),y=d||("select"===i||"textarea"===i?i:"input"),w="form-control";f?(w+="-plaintext",y=d||"input"):"file"===i?w+="-file":"range"===i?w+="-range":h&&(w=u?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=g.size,delete g.size);var E=Object(p.mapToCssModules)(m()(a,l&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,w),t);return("input"===y||d&&"function"===typeof d)&&(g.type=i),g.children&&!f&&"select"!==i&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(y,Object(n.a)({},g,{ref:b,className:E,"aria-invalid":l}))},a}(o.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},814:function(e,a,t){"use strict";var n=t(5),r=t(7),i=t(0),c=t.n(i),s=t(1),o=t.n(s),l=t(4),d=t.n(l),u=t(3),m={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,i=e.row,s=e.disabled,o=e.check,l=e.inline,m=e.tag,p=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(u.mapToCssModules)(d()(a,!!i&&"row",o?"form-check":"form-group",!(!o||!l)&&"form-check-inline",!(!o||!s)&&"disabled"),t);return"fieldset"===m&&(p.disabled=s),c.a.createElement(m,Object(n.a)({},p,{className:f}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p}}]);
//# sourceMappingURL=75.ef0ac156.chunk.js.map