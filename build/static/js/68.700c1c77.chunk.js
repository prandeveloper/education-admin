(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[68],{1443:function(e,a,t){e.exports=t.p+"static/media/ilogo.5f4d959d.png"},1444:function(e,a,t){},2239:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(14),s=t(16),r=t(15),c=t(0),o=t.n(c),i=t(990),m=t(991),d=t(908),u=t(798),p=t(923),E=t(178),b=t(992),v=t(995),f=t(792),g=t(868),h=t(813),N=t(797),y=t(1443),T=t.n(y),O=t(320),j=t(307),z=t(358),M=t(393),P=(t(1444),function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;N.a.get("/viewonebilling/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a,t,n,l,s;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{breadCrumbTitle:"Invoice",breadCrumbParent:"Pages",breadCrumbActive:"Invoice"}),o.a.createElement(i.a,null,o.a.createElement(m.a,{className:"mb-1 invoice-header",md:"5",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(u.a,{placeholder:"Email"}),o.a.createElement(p.a,{addonType:"append"},o.a.createElement(E.a.Ripple,{color:"primary",outline:!0},"Send Invoice")))),o.a.createElement(m.a,{className:"d-flex flex-column flex-md-row justify-content-end invoice-header mb-1",md:"7",sm:"12"},o.a.createElement(E.a,{className:"mr-1 mb-md-0 mb-1",color:"primary",onClick:function(){return window.print()}},o.a.createElement(O.a,{size:"15"}),o.a.createElement("span",{className:"align-middle ml-50"},"Print")),o.a.createElement(E.a.Ripple,{color:"primary",outline:!0},o.a.createElement(j.a,{size:"15"}),o.a.createElement("span",{className:"align-middle ml-50"},"Download"))),o.a.createElement(m.a,{className:"invoice-wrapper",sm:"12"},o.a.createElement(b.a,{className:"invoice-page"},o.a.createElement(v.a,null,o.a.createElement(i.a,null,o.a.createElement(m.a,{md:"6",sm:"12",className:"pt-1"},o.a.createElement(f.a,{className:"pt-1"},o.a.createElement("img",{src:T.a,alt:"logo"}))),o.a.createElement(m.a,{md:"6",sm:"12",className:"text-right"},o.a.createElement("h1",null,"Invoice"),o.a.createElement("div",{className:"invoice-details mt-2"},o.a.createElement("h6",null,this.state.data.product_name),o.a.createElement("p",null,"001/2020"),o.a.createElement("h6",{className:"mt-2"},"INVOICE DATE"),o.a.createElement("p",null,"10 Dec 2018")))),o.a.createElement(i.a,{className:"pt-2"},o.a.createElement(m.a,{md:"6",sm:"12"},o.a.createElement("h5",null,"Recipient"),o.a.createElement("div",{className:"recipient-info my-2"},o.a.createElement("p",null,"Peter Stark"),o.a.createElement("p",null,"8577 West West Drive"),o.a.createElement("p",null,"Holbrook, NY"),o.a.createElement("p",null,"90001")),o.a.createElement("div",{className:"recipient-contact pb-2"},o.a.createElement("p",null,o.a.createElement(z.a,{size:15,className:"mr-50"}),"peter@mail.com"),o.a.createElement("p",null,o.a.createElement(M.a,{size:15,className:"mr-50"}),"+91 988 888 8888"))),o.a.createElement(m.a,{md:"6",sm:"12",className:"text-right"},o.a.createElement("h5",null,"Microsion Technologies Pvt. Ltd."),o.a.createElement("div",{className:"company-info my-2"},o.a.createElement("p",null,"9 N. Sherwood Court"),o.a.createElement("p",null,"Elyria, OH"),o.a.createElement("p",null,"94203")),o.a.createElement("div",{className:"company-contact"},o.a.createElement("p",null,o.a.createElement(z.a,{size:15,className:"mr-50"}),"hello@pixinvent.net"),o.a.createElement("p",null,o.a.createElement(M.a,{size:15,className:"mr-50"}),"+91 999 999 9999")))),o.a.createElement("div",{className:"invoice-items-table pt-1"},o.a.createElement(i.a,null,o.a.createElement(m.a,{sm:"12"},o.a.createElement(g.a,{responsive:!0,borderless:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"TASK DESCRIPTION"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Quantity"),o.a.createElement("th",null,"Sell Price"),"Select Product(tab)")),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Website Redesign"),o.a.createElement("td",null,this.state.data.name),o.a.createElement("td",null,null===(e=this.state.data.product)||void 0===e?void 0:e.qty),o.a.createElement("td",null,null===(a=this.state.data.product)||void 0===a?void 0:a.cost)),o.a.createElement("tr",null,o.a.createElement("td",null,"Newsletter template design"),o.a.createElement("td",null,null===(t=this.state.data.product)||void 0===t?void 0:t.name),o.a.createElement("td",null,null===(n=this.state.data.product)||void 0===n?void 0:n.qty),o.a.createElement("td",null,null===(l=this.state.data.product)||void 0===l?void 0:l.cost))))))),o.a.createElement("div",{className:"invoice-total-table"},o.a.createElement(i.a,null,o.a.createElement(m.a,{sm:{size:7,offset:5},xs:{size:7,offset:5}},o.a.createElement(g.a,{responsive:!0,borderless:!0},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,"GST"),o.a.createElement("td",null)),o.a.createElement("tr",null,o.a.createElement("th",null,"Discount (5%)"),o.a.createElement("td",null,null===(s=this.state.data.product)||void 0===s?void 0:s.discount)),o.a.createElement("tr",null,o.a.createElement("th",null,"Grand Total"),o.a.createElement("td",null,this.state.data.total_amount))))))),o.a.createElement("div",{className:"text-right pt-3 invoice-footer"},o.a.createElement("p",null,"Transfer the amounts to the business amount below. Please include invoice number on your check."),o.a.createElement("p",{className:"bank-details mb-0"},o.a.createElement("span",{className:"mr-4"},"BANK: ",o.a.createElement("strong",null,"FTSBUS33")),o.a.createElement("span",null,"IBAN: ",o.a.createElement("strong",null,"G882-1111-2222-3333")))))))))}}]),t}(o.a.Component));a.default=P},797:function(e,a,t){"use strict";var n=t(40),l=t.n(n).a.create({baseURL:"http://13.127.52.128/v1/api/admin"});a.a=l},798:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(11),r=t(12),c=t(0),o=t.n(c),i=t(1),m=t.n(i),d=t(4),u=t.n(d),p=t(3),E={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,r=e.bsSize,c=e.valid,i=e.invalid,m=e.tag,d=e.addon,E=e.plaintext,b=e.innerRef,v=Object(l.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),f=["radio","checkbox"].indexOf(s)>-1,g=new RegExp("\\D","g"),h=m||("select"===s||"textarea"===s?s:"input"),N="form-control";E?(N+="-plaintext",h=m||"input"):"file"===s?N+="-file":"range"===s?N+="-range":f&&(N=d?null:"form-check-input"),v.size&&g.test(v.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=v.size,delete v.size);var y=Object(p.mapToCssModules)(u()(a,i&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,N),t);return("input"===h||m&&"function"===typeof m)&&(v.type=s),v.children&&!E&&"select"!==s&&"string"===typeof h&&"select"!==h&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),o.a.createElement(h,Object(n.a)({},v,{ref:b,className:y,"aria-invalid":i}))},a}(o.a.Component);b.propTypes=E,b.defaultProps={type:"text"},a.a=b},868:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(0),r=t.n(s),c=t(1),o=t.n(c),i=t(4),m=t.n(i),d=t(3),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:d.tagPropType,responsiveTag:d.tagPropType,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},p=function(e){var a=e.className,t=e.cssModule,s=e.size,c=e.bordered,o=e.borderless,i=e.striped,u=e.dark,p=e.hover,E=e.responsive,b=e.tag,v=e.responsiveTag,f=e.innerRef,g=Object(l.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),h=Object(d.mapToCssModules)(m()(a,"table",!!s&&"table-"+s,!!c&&"table-bordered",!!o&&"table-borderless",!!i&&"table-striped",!!u&&"table-dark",!!p&&"table-hover"),t),N=r.a.createElement(b,Object(n.a)({},g,{ref:f,className:h}));if(E){var y=Object(d.mapToCssModules)(!0===E?"table-responsive":"table-responsive-"+E,t);return r.a.createElement(v,{className:y},N)}return N};p.propTypes=u,p.defaultProps={tag:"table",responsiveTag:"div"},a.a=p},869:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(0),r=t.n(s),c=t(1),o=t.n(c),i=t(4),m=t.n(i),d=t(3),u={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=Object(l.a)(e,["className","cssModule","tag"]),o=Object(d.mapToCssModules)(m()(a,"input-group-text"),t);return r.a.createElement(s,Object(n.a)({},c,{className:o}))};p.propTypes=u,p.defaultProps={tag:"span"},a.a=p},908:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(0),r=t.n(s),c=t(1),o=t.n(c),i=t(4),m=t.n(i),d=t(3),u={tag:d.tagPropType,size:o.a.string,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=e.size,o=Object(l.a)(e,["className","cssModule","tag","size"]),i=Object(d.mapToCssModules)(m()(a,"input-group",c?"input-group-"+c:null),t);return r.a.createElement(s,Object(n.a)({},o,{className:i}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},923:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(0),r=t.n(s),c=t(1),o=t.n(c),i=t(4),m=t.n(i),d=t(3),u=t(869),p={tag:d.tagPropType,addonType:o.a.oneOf(["prepend","append"]).isRequired,children:o.a.node,className:o.a.string,cssModule:o.a.object},E=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=e.addonType,o=e.children,i=Object(l.a)(e,["className","cssModule","tag","addonType","children"]),p=Object(d.mapToCssModules)(m()(a,"input-group-"+c),t);return"string"===typeof o?r.a.createElement(s,Object(n.a)({},i,{className:p}),r.a.createElement(u.a,{children:o})):r.a.createElement(s,Object(n.a)({},i,{className:p,children:o}))};E.propTypes=p,E.defaultProps={tag:"div"},a.a=E}}]);
//# sourceMappingURL=68.700c1c77.chunk.js.map