(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[169],{2128:function(e,t,a){"use strict";a.r(t);var n=a(76),r=a.n(n),i=a(127),l=a(13),c=a(14),o=a(16),s=a(15),u=a(0),d=a.n(u),m=a(1118),f=a(1119),g=a(1120),p=a(182),h=a(1123),v=a(787),E=a(789),w=a(786),S=a(785),z=a(794),N=a(177),b=a(178),P=a(810),C=a(312),D=a(446),k=a(269),A=a(21),y=(a(807),a(793),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Title",field:"noti_title",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.noti_title))}},{headerName:"Student",field:"userid?.fullname",filter:!0,width:150,cellRendererFramework:function(e){var t;return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,null===(t=e.data.userid)||void 0===t?void 0:t.fullname))}},{headerName:"Description",field:"desc",filter:!0,width:250,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.desc))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(C.a,{className:"mr-50",size:"20px",color:"blue",onClick:function(){return A.a.push("/app/contactUs/customer/editCustomer/".concat(t.data._id))}}),d.a.createElement(D.a,{size:"20px",color:"red",onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/all_NotificationUser").then((function(e){var a=e.data.data;console.log(a),t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return d.a.createElement(m.a,{className:"app-user-list"},d.a.createElement(f.a,{sm:"12"}),d.a.createElement(f.a,{sm:"12"},d.a.createElement(g.a,null,d.a.createElement(m.a,{className:"m-2"},d.a.createElement(f.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Notification")),d.a.createElement(f.a,null,d.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return A.a.push("/app/notifications/addNotification")}},"Add New"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(E.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(k.a,{className:"ml-50",size:15})),d.a.createElement(w.a,{right:!0},d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(z.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(b.a.Consumer,null,(function(t){return d.a.createElement(P.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(d.a.Component));t.default=y},793:function(e,t,a){}}]);
//# sourceMappingURL=169.89cb06b4.chunk.js.map