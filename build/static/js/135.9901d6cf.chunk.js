(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[135],{2195:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _}));var n=a(41),l=a(13),s=a(14),c=a(16),o=a(15),r=a(0),i=a.n(r),d=a(1014),u=a(1015),p=a(1016),m=a(1017),f=a(818),g=a(1012),b=a(1013),h=a(815),y=a(807),v=a(785),E=a(797),_=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("item_name",s.state.item_name),t.append("short_name",s.state.short_name),t.append("desc",s.state.desc),t.append("code",s.state.code),t.append("hsn_code",s.state.hsn_code),t.append("productcategory",s.state.productcategory),t.append("productsubcategory",s.state.productsubcategory),t.append("unit",s.state.unit),t.append("alt_unit",s.state.alt_unit),t.append("gst_rate",s.state.gst_rate),t.append("brand",s.state.brand),t.append("type_of_supply",s.state.type_of_supply),t.append("varient",s.state.varient),t.append("material",s.state.material),t.append("stock_qty",s.state.stock_qty),t.append("stock_clearance_limit",s.state.stock_clearance_limit),t.append("colour",s.state.colour),t.append("size",s.state.size),t.append("inc_duty_tax",s.state.inc_duty_tax),t.append("std_package",s.state.std_package),t.append("barcode",s.state.barcode),t.append("status",s.state.status),t.append("product_img",s.state.selectedFile,s.state.selectedName),E.a.post("/addproduct",t).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},s.state={item_name:"",short_name:"",desc:"",code:"",hsn_code:"",productcategory:"",productsubcategory:"",unit:"",alt_unit:"",gst_rate:"",type_of_supply:"",varient:"",material:"",stock_qty:"",stock_clearance_limit:"",size:"",colour:"",brand:"",barcode:"",std_package:"",inc_duty_tax:"",product_img:"",selectedFile:null,selectedName:""},s.state={productC:[],productSC:[],units:[],altUnits:[],gstRate:[],pBrand:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/allproductcategory").then((function(t){console.log(t),e.setState({productC:t.data.data})})).catch((function(e){console.log(e)})),E.a.get("/allproductsubcategory").then((function(t){console.log(t),e.setState({productSC:t.data.data})})).catch((function(e){console.log(e)})),E.a.get("/viewallunits").then((function(t){console.log(t),e.setState({units:t.data.data})})).catch((function(e){console.log(e)})),E.a.get("/allaltunit").then((function(t){console.log(t),e.setState({altUnits:t.data.data})})).catch((function(e){console.log(e)})),E.a.get("/viewallgst").then((function(t){console.log(t),e.setState({gstRate:t.data.data})})).catch((function(e){console.log(e)})),E.a.get("/allbrand").then((function(t){console.log(t),e.setState({pBrand:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(u.a,null,i.a.createElement(p.a,null,"General Settings")),i.a.createElement(m.a,null,i.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(g.a,null,i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a,null,"Project Name:"),i.a.createElement(y.a,{required:!0,type:"text",placeholder:"Company Name"})),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a,null,"Default Email:"),i.a.createElement(y.a,{required:!0,type:"email",placeholder:"Email"})),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a,null,"APP URL:"),i.a.createElement(y.a,{type:"text",placeholder:"Name"})),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a,null,"Mobile No."),i.a.createElement(y.a,{type:"number",placeholder:"Mobile No."})),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a,null,"Copyright Text:"),i.a.createElement(y.a,{type:"text",placeholder:"Name"})),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a,null,"Default Currency:"),i.a.createElement(y.a,{type:"doller",placeholder:"USD"})),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a,null,"Address"),i.a.createElement(y.a,{required:!0,type:"textarea",name:"desc",rows:"1",placeholder:"Textarea"})),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a,null,"Cart Amount: "),i.a.createElement(y.a,{type:"doller",placeholder:"USD"})),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a,null,"Handling Charges: "),i.a.createElement(y.a,{type:"doller",placeholder:"USD"})),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a,null,"Charging term:"),i.a.createElement(v.a,{type:"select",placeholder:""},i.a.createElement("option",{value:"finance"},"1 "),i.a.createElement("option",{value:"resource"},"2"),i.a.createElement("option",{value:"inventory"}," 3"),i.a.createElement("option",{value:"management"}," 4"))),i.a.createElement(b.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a,null,"Select Timezone:"),i.a.createElement(v.a,{type:"select",placeholder:""},i.a.createElement("option",{value:"finance"},"1"),i.a.createElement("option",{value:"resource"},"2"),i.a.createElement("option",{value:"inventory"}," 3"),i.a.createElement("option",{value:"management"}," 4")))),i.a.createElement("div",null)))))}}]),a}(r.Component)},797:function(e,t,a){"use strict";var n=a(40),l=a.n(n).a.create({baseURL:"http://65.0.80.5:5000/api/admin"});t.a=l},807:function(e,t,a){"use strict";var n=a(5),l=a(7),s=a(11),c=a(12),o=a(0),r=a.n(o),i=a(1),d=a.n(i),u=a(4),p=a.n(u),m=a(3),f={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,c=e.bsSize,o=e.valid,i=e.invalid,d=e.tag,u=e.addon,f=e.plaintext,g=e.innerRef,b=Object(l.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),v=d||("select"===s||"textarea"===s?s:"input"),E="form-control";f?(E+="-plaintext",v=d||"input"):"file"===s?E+="-file":"range"===s?E+="-range":h&&(E=u?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=b.size,delete b.size);var _=Object(m.mapToCssModules)(p()(t,i&&"is-invalid",o&&"is-valid",!!c&&"form-control-"+c,E),a);return("input"===v||d&&"function"===typeof d)&&(b.type=s),b.children&&!f&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(m.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),r.a.createElement(v,Object(n.a)({},b,{ref:g,className:_,"aria-invalid":i}))},t}(r.a.Component);g.propTypes=f,g.defaultProps={type:"text"},t.a=g},815:function(e,t,a){"use strict";var n=a(5),l=a(7),s=a(0),c=a.n(s),o=a(1),r=a.n(o),i=a(4),d=a.n(i),u=a(3),p=r.a.oneOfType([r.a.number,r.a.string]),m=r.a.oneOfType([r.a.bool,r.a.string,r.a.number,r.a.shape({size:p,order:p,offset:p})]),f={children:r.a.node,hidden:r.a.bool,check:r.a.bool,size:r.a.string,for:r.a.string,tag:u.tagPropType,className:r.a.string,cssModule:r.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:r.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,s=e.hidden,o=e.widths,r=e.tag,i=e.check,p=e.size,m=e.for,f=Object(l.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];o.forEach((function(t,n){var l=e[t];if(delete f[t],l||""===l){var s,c=!n;if(Object(u.isObject)(l)){var o,r=c?"-":"-"+t+"-";s=b(c,t,l.size),g.push(Object(u.mapToCssModules)(d()(((o={})[s]=l.size||""===l.size,o["order"+r+l.order]=l.order||0===l.order,o["offset"+r+l.offset]=l.offset||0===l.offset,o))),a)}else s=b(c,t,l),g.push(s)}}));var h=Object(u.mapToCssModules)(d()(t,!!s&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),a);return c.a.createElement(r,Object(n.a)({htmlFor:m},f,{className:h}))};h.propTypes=f,h.defaultProps=g,t.a=h},818:function(e,t,a){"use strict";var n=a(5),l=a(7),s=a(11),c=a(12),o=a(0),r=a.n(o),i=a(1),d=a.n(i),u=a(4),p=a.n(u),m=a(3),f={children:d.a.node,inline:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,c=e.tag,o=e.innerRef,i=Object(l.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(m.mapToCssModules)(p()(t,!!s&&"form-inline"),a);return r.a.createElement(c,Object(n.a)({},i,{ref:o,className:d}))},t}(o.Component);g.propTypes=f,g.defaultProps={tag:"form"},t.a=g}}]);
//# sourceMappingURL=135.9901d6cf.chunk.js.map