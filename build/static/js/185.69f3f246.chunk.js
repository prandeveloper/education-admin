(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[185],{2175:function(e,t,a){"use strict";a.r(t);var n=a(76),r=a.n(n),i=a(126),l=a(13),s=a(14),c=a(16),o=a(15),u=a(0),d=a.n(u),m=a(975),f=a(976),p=a(977),g=a(178),h=a(980),v=a(793),b=a(795),w=a(791),E=a(790),z=a(798),N=a(797),S=a(21),y=a(177),j=a(819),k=(a(1099),a(445)),x=a(268),R=(a(815),a(799),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:80,filter:!0},{headerName:"Referance Number",field:"reference_no",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.reference_no)))}},{headerName:"Adjustment Date",field:"adjustment_date",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.adjustment_date)))}},{headerName:"Warehouse",field:"warehouse",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.warehouse)))}},{headerName:"Reason",field:"reason",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){var t;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,null===(t=e.data.reason)||void 0===t?void 0:t.reason)))}},{headerName:"Adjusted Quantity",field:"adjusted_qty",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.adjusted_qty)))}},{headerName:"Adjusted Value",field:"adjusted_value",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.adjusted_value)))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(k.a,{size:20,onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/getstockadjustment").then((function(e){var a=e.data.data;t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,N.a.get("/delstockadjustment/".concat(t)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return d.a.createElement(m.a,{className:"app-user-list"},d.a.createElement(f.a,{sm:"12"},d.a.createElement(p.a,null,d.a.createElement(m.a,{className:"m-2"},d.a.createElement(f.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Stock Adjustment List")),d.a.createElement(f.a,null,d.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return S.a.push("/app/stockControl/addStockAdjustment")}},"Add Stock Adjustment"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(b.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(x.a,{className:"ml-50",size:15})),d.a.createElement(w.a,{right:!0},d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(z.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(y.a.Consumer,null,(function(t){return d.a.createElement(j.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(d.a.Component));t.default=R},797:function(e,t,a){"use strict";var n=a(40),r=a.n(n).a.create({baseURL:"http://13.127.52.128/api/api/admin"});t.a=r},798:function(e,t,a){"use strict";var n=a(5),r=a(7),i=a(11),l=a(12),s=a(0),c=a.n(s),o=a(1),u=a.n(o),d=a(4),m=a.n(d),f=a(3),p={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,l=e.bsSize,s=e.valid,o=e.invalid,u=e.tag,d=e.addon,p=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(i)>-1,b=new RegExp("\\D","g"),w=u||("select"===i||"textarea"===i?i:"input"),E="form-control";p?(E+="-plaintext",w=u||"input"):"file"===i?E+="-file":"range"===i?E+="-range":v&&(E=d?null:"form-check-input"),h.size&&b.test(h.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var z=Object(f.mapToCssModules)(m()(t,o&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,E),a);return("input"===w||u&&"function"===typeof u)&&(h.type=i),h.children&&!p&&"select"!==i&&"string"===typeof w&&"select"!==w&&(Object(f.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(w,Object(n.a)({},h,{ref:g,className:z,"aria-invalid":o}))},t}(c.a.Component);g.propTypes=p,g.defaultProps={type:"text"},t.a=g},799:function(e,t,a){}}]);
//# sourceMappingURL=185.69f3f246.chunk.js.map