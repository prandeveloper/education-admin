(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[140],{2151:function(e,t,a){"use strict";a.r(t);var n=a(76),r=a.n(n),i=a(126),l=a(13),s=a(14),o=a(16),c=a(15),u=a(0),d=a.n(u),m=a(178),p=a(975),f=a(976),g=a(977),h=a(980),v=a(793),b=a(795),E=a(791),w=a(790),S=a(798),z=a(797),y=a(177),N=a(819),P=a(268),C=a(21),R=(a(815),a(799),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"sortorder",width:100,filter:!0},{headerName:"Order Id",field:"orderId",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.orderId))}},{headerName:"Phone",field:"customer_phone",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.customer_phone))}},{headerName:"Customer Name",field:"customer_name",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.customer_name))}},{headerName:"Quantity",field:"total_qty",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.total_qty))}},{headerName:"Total Amount",field:"total_amount",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.total_amount))}},{headerName:"Actions",field:"transactions",width:400,cellRendererFramework:function(e){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(m.a,{color:"primary",className:"mr-2",onClick:function(){return C.a.push("/app/billing/billingInvoice/".concat(e.data._id))}},"Create Invoice"),d.a.createElement(m.a,{color:"primary",outline:!0,className:"mr-2"},"Show Order Details"))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("/getbillinglist").then((function(e){var a=e.data.data;console.log(a),t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return d.a.createElement(p.a,{className:"app-user-list"},d.a.createElement(f.a,{sm:"12"}),d.a.createElement(f.a,{sm:"12"},d.a.createElement(g.a,null,d.a.createElement(p.a,{className:"m-2"},d.a.createElement(f.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Create Invoice")),d.a.createElement(f.a,null,d.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return C.a.push("/app/contactUs/customer/addCustomer")}},"Add New Customer"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(b.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(P.a,{className:"ml-50",size:15})),d.a.createElement(E.a,{right:!0},d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(S.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(y.a.Consumer,null,(function(t){return d.a.createElement(N.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(d.a.Component));t.default=R},797:function(e,t,a){"use strict";var n=a(40),r=a.n(n).a.create({baseURL:"http://13.127.52.128/api/api/admin"});t.a=r},798:function(e,t,a){"use strict";var n=a(5),r=a(7),i=a(11),l=a(12),s=a(0),o=a.n(s),c=a(1),u=a.n(c),d=a(4),m=a.n(d),p=a(3),f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,l=e.bsSize,s=e.valid,c=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(i)>-1,b=new RegExp("\\D","g"),E=u||("select"===i||"textarea"===i?i:"input"),w="form-control";f?(w+="-plaintext",E=u||"input"):"file"===i?w+="-file":"range"===i?w+="-range":v&&(w=d?null:"form-check-input"),h.size&&b.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var S=Object(p.mapToCssModules)(m()(t,c&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,w),a);return("input"===E||u&&"function"===typeof u)&&(h.type=i),h.children&&!f&&"select"!==i&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(E,Object(n.a)({},h,{ref:g,className:S,"aria-invalid":c}))},t}(o.a.Component);g.propTypes=f,g.defaultProps={type:"text"},t.a=g},799:function(e,t,a){}}]);
//# sourceMappingURL=140.b7a7ce02.chunk.js.map