(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[92],{1650:function(e,a,t){},2338:function(e,a,t){"use strict";t.r(a);var r=t(13),s=t(14),n=t(16),o=t(15),l=t(0),c=t.n(l),i=t(990),b=t(991),u=t(992),m=t(994),d=t(906),p=t(797),g=t(993),y=t(868),f=t(789),h=t(882),v=t(179),O=t.n(v),j=t(182),N=t.n(j),T=t(133),E=t.n(T),w=t(132),M=t.n(w),P=t(98),x=t.n(P),C=t(68),S=t.n(C),k=t(60),A=t.n(k),D=t(78),B=t.n(D),L=(c.a.Component,t(1650),function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).state={product:{},users:{},staff:{},brand:{}},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/total_product").then((function(a){console.log(a.data),e.setState({product:a.data})})).catch((function(e){console.log(e)})),p.a.get("/total_users").then((function(a){console.log(a.data),e.setState({users:a.data})})).catch((function(e){console.log(e)})),p.a.get("/total_staff").then((function(a){console.log(a.data),e.setState({staff:a.data})})).catch((function(e){console.log(e)})),p.a.get("/total_brand").then((function(a){console.log(a.data),e.setState({brand:a.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{className:"match-height"},c.a.createElement(b.a,{lg:"3",md:"12"},c.a.createElement(u.a,{className:"bg-primary",body:!0,inverse:!0,style:{borderColor:"white"}},c.a.createElement(m.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Total Student"),c.a.createElement(d.a,{tag:"h3",style:{color:"white"}}," 100"))),c.a.createElement(b.a,{lg:"3",md:"12"},c.a.createElement(u.a,{className:"bg-success",body:!0,inverse:!0},c.a.createElement(m.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Total Teachers"),c.a.createElement(d.a,{tag:"h3",style:{color:"white"}},"50"))),c.a.createElement(b.a,{lg:"3",md:"12"},c.a.createElement(u.a,{className:"bg-danger",body:!0,inverse:!0},c.a.createElement(m.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Total Courses"),c.a.createElement(d.a,{tag:"h3",style:{color:"white"}}," 40"))),c.a.createElement(b.a,{lg:"3",md:"12"},c.a.createElement(u.a,{className:"bg-warning",body:!0,inverse:!0},c.a.createElement(m.a,{className:"mb-1",tag:"h4",style:{color:"white"}},"Wallet Balance"),c.a.createElement(d.a,{tag:"h3",style:{color:"white"}}," 1500")))))}}]),t}(c.a.Component));a.default=L},797:function(e,a,t){"use strict";var r=t(40),s=t.n(r).a.create({baseURL:"http://13.127.52.128/v1/api/admin"});a.a=s},868:function(e,a,t){"use strict";var r=t(5),s=t(7),n=t(0),o=t.n(n),l=t(1),c=t.n(l),i=t(4),b=t.n(i),u=t(3),m={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:u.tagPropType,responsiveTag:u.tagPropType,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},d=function(e){var a=e.className,t=e.cssModule,n=e.size,l=e.bordered,c=e.borderless,i=e.striped,m=e.dark,d=e.hover,p=e.responsive,g=e.tag,y=e.responsiveTag,f=e.innerRef,h=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(u.mapToCssModules)(b()(a,"table",!!n&&"table-"+n,!!l&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!m&&"table-dark",!!d&&"table-hover"),t),O=o.a.createElement(g,Object(r.a)({},h,{ref:f,className:v}));if(p){var j=Object(u.mapToCssModules)(!0===p?"table-responsive":"table-responsive-"+p,t);return o.a.createElement(y,{className:j},O)}return O};d.propTypes=m,d.defaultProps={tag:"table",responsiveTag:"div"},a.a=d},882:function(e,a,t){"use strict";var r=t(5),s=t(35),n=t(7),o=t(0),l=t.n(o),c=t(1),i=t.n(c),b=t(4),u=t.n(b),m=t(3);function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var g={children:i.a.node,bar:i.a.bool,multi:i.a.bool,tag:m.tagPropType,value:i.a.oneOfType([i.a.string,i.a.number]),min:i.a.oneOfType([i.a.string,i.a.number]),max:i.a.oneOfType([i.a.string,i.a.number]),animated:i.a.bool,striped:i.a.bool,color:i.a.string,className:i.a.string,barClassName:i.a.string,cssModule:i.a.object,style:i.a.object,barStyle:i.a.object,barAriaValueText:i.a.string,barAriaLabelledBy:i.a.string},y=function(e){var a=e.children,t=e.className,s=e.barClassName,o=e.cssModule,c=e.value,i=e.min,b=e.max,d=e.animated,g=e.striped,y=e.color,f=e.bar,h=e.multi,v=e.tag,O=e.style,j=e.barStyle,N=e.barAriaValueText,T=e.barAriaLabelledBy,E=Object(n.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barStyle","barAriaValueText","barAriaLabelledBy"]),w=Object(m.toNumber)(c)/Object(m.toNumber)(b)*100,M=Object(m.mapToCssModules)(u()(t,"progress"),o),P={className:Object(m.mapToCssModules)(u()("progress-bar",f&&t||s,d?"progress-bar-animated":null,y?"bg-"+y:null,g||d?"progress-bar-striped":null),o),style:p(p(p({},f?O:{}),j),{},{width:w+"%"}),role:"progressbar","aria-valuenow":c,"aria-valuemin":i,"aria-valuemax":b,"aria-valuetext":N,"aria-labelledby":T,children:a};return f?l.a.createElement(v,Object(r.a)({},E,P)):l.a.createElement(v,Object(r.a)({},E,{style:O,className:M}),h?a:l.a.createElement("div",P))};y.propTypes=g,y.defaultProps={tag:"div",value:0,min:0,max:100,style:{},barStyle:{}},a.a=y},906:function(e,a,t){"use strict";var r=t(5),s=t(7),n=t(0),o=t.n(n),l=t(1),c=t.n(l),i=t(4),b=t.n(i),u=t(3),m={tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),c=Object(u.mapToCssModules)(b()(a,"card-text"),t);return o.a.createElement(n,Object(r.a)({},l,{className:c}))};d.propTypes=m,d.defaultProps={tag:"p"},a.a=d}}]);
//# sourceMappingURL=92.402b8e50.chunk.js.map