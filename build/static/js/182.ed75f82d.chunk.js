(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[182],{2152:function(e,t,a){"use strict";a.r(t);var n=a(76),r=a.n(n),i=a(127),l=a(13),o=a(14),c=a(16),s=a(15),u=a(0),d=a.n(u),m=a(1118),g=a(1119),p=a(1120),f=a(182),h=a(1123),v=a(787),w=a(789),E=a(786),S=a(785),z=a(794),b=a(177),y=a(178),P=a(810),N=a(312),k=a(446),A=a(269),C=a(21),D=(a(807),a(793),function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Transfer Type",field:"transfer_type",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.transfer_type))}},{headerName:"Actions",field:"sortorder",width:150,cellRendererFramework:function(t){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(N.a,{className:"mr-50",color:"blue",size:20,onClick:function(){return C.a.push("/app/transferType/editTransferType/".concat(t.data._id))}}),d.a.createElement(k.a,{size:20,color:"red",onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/getTransfertype").then((function(e){var a=e.data.data;console.log(a),t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,b.a.get("/deleteReason/".concat(t)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return console.log(a),d.a.createElement(m.a,{className:"app-user-list"},d.a.createElement(g.a,{sm:"12"}),d.a.createElement(g.a,{sm:"12"},d.a.createElement(p.a,null,d.a.createElement(m.a,{className:"m-2"},d.a.createElement(g.a,null,d.a.createElement("h1",{sm:"6",className:"float-left"},"Reason List")),d.a.createElement(g.a,null,d.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return C.a.push("/app/reason/addReason")}},"Add Reason"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(w.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(A.a,{className:"ml-50",size:15})),d.a.createElement(E.a,{right:!0},d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(z.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(f.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(y.a.Consumer,null,(function(t){return d.a.createElement(P.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(d.a.Component));t.default=D},793:function(e,t,a){}}]);
//# sourceMappingURL=182.ed75f82d.chunk.js.map