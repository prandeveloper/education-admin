(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[171],{2175:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a(14),r=a(16),l=a(15),s=a(0),c=a.n(s),o=a(990),u=a(991),d=a(992),m=a(178),p=a(995),f=a(793),g=a(795),h=a(791),v=a(790),b=a(798),E=(a(797),a(177)),z=a(823),w=a(311),S=a(445),y=a(268),N=a(21),R=(a(819),a(799),function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Daily Report",field:"customerId",filter:!0,width:150,cellRendererFramework:function(e){return c.a.createElement("div",{className:"ml-2 mr-4"},c.a.createElement("span",null,e.data.customerId))}},{headerName:"Weekly Report",field:"first_name",filter:!0,width:150,cellRendererFramework:function(e){return c.a.createElement("div",{className:"ml-2 mr-4"},c.a.createElement("span",null,e.data.first_name))}},{headerName:"Monthly Report",field:"last_name",filter:!0,width:150,cellRendererFramework:function(e){return c.a.createElement("div",{className:"ml-2 mr-4"},c.a.createElement("span",null,e.data.last_name))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(w.a,{className:"mr-50",size:"20px",color:"blue",onClick:function(){return N.a.push("/app/contactUs/customer/editCustomer/".concat(t.data._id))}}),c.a.createElement(S.a,{size:"20px",color:"red",onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return c.a.createElement(o.a,{className:"app-user-list"},c.a.createElement(u.a,{sm:"12"}),c.a.createElement(u.a,{sm:"12"},c.a.createElement(d.a,null,c.a.createElement(o.a,{className:"m-2"},c.a.createElement(u.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Invoiced Income")),c.a.createElement(u.a,null,c.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/billing/createInvoice")}},"Create Invoiced Income"))),c.a.createElement(p.a,null,null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(f.a,{className:"p-1 ag-dropdown"},c.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(y.a,{className:"ml-50",size:15})),c.a.createElement(h.a,{right:!0},c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(b.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(E.a.Consumer,null,(function(t){return c.a.createElement(z.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(c.a.Component));t.default=R},797:function(e,t,a){"use strict";var n=a(40),i=a.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});t.a=i},798:function(e,t,a){"use strict";var n=a(5),i=a(7),r=a(11),l=a(12),s=a(0),c=a.n(s),o=a(1),u=a.n(o),d=a(4),m=a.n(d),p=a(3),f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,s=e.valid,o=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,g=e.innerRef,h=Object(i.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(r)>-1,b=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),z="form-control";f?(z+="-plaintext",E=u||"input"):"file"===r?z+="-file":"range"===r?z+="-range":v&&(z=d?null:"form-check-input"),h.size&&b.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var w=Object(p.mapToCssModules)(m()(t,o&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,z),a);return("input"===E||u&&"function"===typeof u)&&(h.type=r),h.children&&!f&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(E,Object(n.a)({},h,{ref:g,className:w,"aria-invalid":o}))},t}(c.a.Component);g.propTypes=f,g.defaultProps={type:"text"},t.a=g},799:function(e,t,a){}}]);
//# sourceMappingURL=171.3fd465ab.chunk.js.map