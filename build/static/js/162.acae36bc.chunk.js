(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[162],{2149:function(e,a,t){"use strict";t.r(a);var r=t(76),n=t.n(r),i=t(126),l=t(13),s=t(14),c=t(16),o=t(15),d=t(0),u=t.n(d),m=t(975),p=t(976),f=t(977),g=t(980),h=t(793),v=t(795),b=t(791),w=t(790),E=t(798),y=t(178),N=t(797),S=t(177),z=t(819),x=t(268),P=(t(21),t(815),t(799),function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Order ID",field:"orderId",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.orderId))}},{headerName:"Payment Type",field:"order_type",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.payment_type))}},{headerName:"Customer Name",field:"customername",filter:!0,width:200,cellRendererFramework:function(e){var a,t,r,n;return u.a.createElement("div",null,u.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.customer)||void 0===t?void 0:t.first_name," ",null===(r=e.data)||void 0===r||null===(n=r.customer)||void 0===n?void 0:n.last_name))}},{headerName:"Product Name",field:"product.product_name",filter:!0,width:150,cellRendererFramework:function(e){var a,t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.product)||void 0===t?void 0:t.product_name))}},{headerName:"Total Qty ",field:"qty",filter:!0,width:150,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.qty))}},{headerName:"Amount",field:"purchaseprice",filter:!0,width:150,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.purchaseprice))}},{headerName:"Address",field:"delivery_address",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.delivery_address))}},{headerName:"Order Date",field:"order_date",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.order_date))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Delivery"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Pending"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-primary"},e.data.status):"Cancel"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):"Returned"===e.value||"Complete"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/cancel_order").then((function(e){var t=e.data.data;a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return u.a.createElement(m.a,{className:"app-user-list"},u.a.createElement(p.a,{sm:"12"}),u.a.createElement(p.a,{sm:"12"},u.a.createElement(f.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Cancelled Order"))),u.a.createElement(g.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(h.a,{className:"p-1 ag-dropdown"},u.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(x.a,{className:"ml-50",size:15})),u.a.createElement(b.a,{right:!0},u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(E.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(y.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(S.a.Consumer,null,(function(a){return u.a.createElement(z.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(u.a.Component));a.default=P},797:function(e,a,t){"use strict";var r=t(40),n=t.n(r).a.create({baseURL:"http://13.127.52.128/api/api/admin"});a.a=n},798:function(e,a,t){"use strict";var r=t(5),n=t(7),i=t(11),l=t(12),s=t(0),c=t.n(s),o=t(1),d=t.n(o),u=t(4),m=t.n(u),p=t(3),f={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,l=e.bsSize,s=e.valid,o=e.invalid,d=e.tag,u=e.addon,f=e.plaintext,g=e.innerRef,h=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(i)>-1,b=new RegExp("\\D","g"),w=d||("select"===i||"textarea"===i?i:"input"),E="form-control";f?(E+="-plaintext",w=d||"input"):"file"===i?E+="-file":"range"===i?E+="-range":v&&(E=u?null:"form-check-input"),h.size&&b.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var y=Object(p.mapToCssModules)(m()(a,o&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,E),t);return("input"===w||d&&"function"===typeof d)&&(h.type=i),h.children&&!f&&"select"!==i&&"string"===typeof w&&"select"!==w&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(w,Object(r.a)({},h,{ref:g,className:y,"aria-invalid":o}))},a}(c.a.Component);g.propTypes=f,g.defaultProps={type:"text"},a.a=g},799:function(e,a,t){}}]);
//# sourceMappingURL=162.acae36bc.chunk.js.map