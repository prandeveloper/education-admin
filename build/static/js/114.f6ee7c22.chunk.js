(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[114],{2156:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a(41),l=a(13),s=a(14),o=a(16),c=a(15),i=a(0),r=a.n(i),m=a(992),u=a(990),d=a(991),p=a(995),f=a(819),h=a(817),g=a(814),b=a(785),v=a(798),y=a(178),E=a(797),O=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("item_name",s.state.item_name),t.append("status",s.state.status),t.append("product_img",s.state.selectedFile,s.state.selectedName),E.a.post("/addproduct",t).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},s.state={item_name:"",short_name:"",desc:"",code:"",hsn_code:"",productcategory:"",productsubcategory:"",unit:"",alt_unit:"",gst_rate:"",type_of_supply:"",varient:"",material:"",stock_qty:"",stock_clearance_limit:"",size:"",colour:"",brand:"",barcode:"",std_package:"",inc_duty_tax:"",product_img:"",selectedFile:null,selectedName:""},s.state={productC:[],productSC:[],units:[],altUnits:[],gstRate:[],pBrand:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/allproductcategory").then((function(t){console.log(t),e.setState({productC:t.data.data})})).catch((function(e){console.log(e)})),E.a.get("/allproductsubcategory").then((function(t){console.log(t),e.setState({productSC:t.data.data})})).catch((function(e){console.log(e)})),E.a.get("/viewallunits").then((function(t){console.log(t),e.setState({units:t.data.data})})).catch((function(e){console.log(e)})),E.a.get("/allaltunit").then((function(t){console.log(t),e.setState({altUnits:t.data.data})})).catch((function(e){console.log(e)})),E.a.get("/viewallgst").then((function(t){console.log(t),e.setState({gstRate:t.data.data})})).catch((function(e){console.log(e)})),E.a.get("/allbrand").then((function(t){console.log(t),e.setState({pBrand:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(u.a,{className:"m-2"},r.a.createElement(d.a,null,r.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Invoice Design"))),r.a.createElement(p.a,null,r.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},r.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement(h.a,null,r.a.createElement(g.a,null,"Show Logo in invoice :"),r.a.createElement("div",null,r.a.createElement(b.a,{type:"switch",id:"exampleCustomSwitch",name:"item_name",value:this.state.item_name,onChange:this.changeHandler,label:""}))),r.a.createElement(h.a,null,r.a.createElement(g.a,null,"Show QR in invoice :"),r.a.createElement("div",null,r.a.createElement(b.a,{type:"switch",id:"exampleCustomSwitch1",name:"item_name",value:this.state.item_name,onChange:this.changeHandler,label:""})))),r.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement(h.a,null,r.a.createElement(g.a,null,"Show VAT NO. in invoice :"),r.a.createElement("div",null,r.a.createElement(b.a,{type:"switch",id:"exampleCustomSwitch2",name:"item_name",value:this.state.item_name,onChange:this.changeHandler,label:""})))),r.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement(h.a,null,r.a.createElement(g.a,null,"Print default in Landscape mode :"),r.a.createElement("div",null,r.a.createElement(b.a,{type:"switch",id:"exampleCustomSwitch3",name:"item_name",value:this.state.item_name,onChange:this.changeHandler,label:""})))),r.a.createElement(u.a,null,r.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement(g.a,null,"Border Color:"),r.a.createElement(v.a,{required:!0,type:"text",placeholder:"Name",name:"short_name",value:this.state.short_name,onChange:this.changeHandler})),r.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement(g.a,{for:"exampleCustomSelect"},"Border Radius:"),r.a.createElement(b.a,{type:"select",id:"exampleCustomSelect",name:"Border",value:this.state.productcategory,onChange:this.changeHandler},this.state.productC.map((function(e){return r.a.createElement("option",{value:e._id,key:e._id},e.name)})))),r.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement(g.a,null,"Border Style:"),r.a.createElement(b.a,{type:"select",name:"brand",value:this.state.brand,onChange:this.changeHandler},this.state.pBrand.map((function(e){return r.a.createElement("option",{value:e._id,key:e._id},e.name)})))),r.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement(g.a,null,"Invoice date format:"),r.a.createElement(b.a,{type:"select",name:"type_of_supply",value:this.state.type_of_supply,onChange:this.changeHandler},r.a.createElement("option",null,"Goods"),r.a.createElement("option",null,"Services")))),r.a.createElement(u.a,null,r.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement(y.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Product")))))))}}]),a}(i.Component)},797:function(e,t,a){"use strict";var n=a(40),l=a.n(n).a.create({baseURL:"http://13.127.52.128/v1/api/admin"});t.a=l},798:function(e,t,a){"use strict";var n=a(5),l=a(7),s=a(11),o=a(12),c=a(0),i=a.n(c),r=a(1),m=a.n(r),u=a(4),d=a.n(u),p=a(3),f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,o=e.bsSize,c=e.valid,r=e.invalid,m=e.tag,u=e.addon,f=e.plaintext,h=e.innerRef,g=Object(l.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),y=m||("select"===s||"textarea"===s?s:"input"),E="form-control";f?(E+="-plaintext",y=m||"input"):"file"===s?E+="-file":"range"===s?E+="-range":b&&(E=u?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var O=Object(p.mapToCssModules)(d()(t,r&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,E),a);return("input"===y||m&&"function"===typeof m)&&(g.type=s),g.children&&!f&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(y,Object(n.a)({},g,{ref:h,className:O,"aria-invalid":r}))},t}(i.a.Component);h.propTypes=f,h.defaultProps={type:"text"},t.a=h},814:function(e,t,a){"use strict";var n=a(5),l=a(7),s=a(0),o=a.n(s),c=a(1),i=a.n(c),r=a(4),m=a.n(r),u=a(3),d=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:d,order:d,offset:d})]),f={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,s=e.hidden,c=e.widths,i=e.tag,r=e.check,d=e.size,p=e.for,f=Object(l.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];c.forEach((function(t,n){var l=e[t];if(delete f[t],l||""===l){var s,o=!n;if(Object(u.isObject)(l)){var c,i=o?"-":"-"+t+"-";s=g(o,t,l.size),h.push(Object(u.mapToCssModules)(m()(((c={})[s]=l.size||""===l.size,c["order"+i+l.order]=l.order||0===l.order,c["offset"+i+l.offset]=l.offset||0===l.offset,c))),a)}else s=g(o,t,l),h.push(s)}}));var b=Object(u.mapToCssModules)(m()(t,!!s&&"sr-only",!!r&&"form-check-label",!!d&&"col-form-label-"+d,h,!!h.length&&"col-form-label"),a);return o.a.createElement(i,Object(n.a)({htmlFor:p},f,{className:b}))};b.propTypes=f,b.defaultProps=h,t.a=b},817:function(e,t,a){"use strict";var n=a(5),l=a(7),s=a(0),o=a.n(s),c=a(1),i=a.n(c),r=a(4),m=a.n(r),u=a(3),d={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.row,c=e.disabled,i=e.check,r=e.inline,d=e.tag,p=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(u.mapToCssModules)(m()(t,!!s&&"row",i?"form-check":"form-group",!(!i||!r)&&"form-check-inline",!(!i||!c)&&"disabled"),a);return"fieldset"===d&&(p.disabled=c),o.a.createElement(d,Object(n.a)({},p,{className:f}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},819:function(e,t,a){"use strict";var n=a(5),l=a(7),s=a(11),o=a(12),c=a(0),i=a.n(c),r=a(1),m=a.n(r),u=a(4),d=a.n(u),p=a(3),f={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,o=e.tag,c=e.innerRef,r=Object(l.a)(e,["className","cssModule","inline","tag","innerRef"]),m=Object(p.mapToCssModules)(d()(t,!!s&&"form-inline"),a);return i.a.createElement(o,Object(n.a)({},r,{ref:c,className:m}))},t}(c.Component);h.propTypes=f,h.defaultProps={tag:"form"},t.a=h}}]);
//# sourceMappingURL=114.f6ee7c22.chunk.js.map