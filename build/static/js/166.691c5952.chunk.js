(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[166],{2167:function(e,a,t){"use strict";t.r(a);var r=t(76),n=t.n(r),i=t(126),l=t(13),c=t(14),s=t(16),o=t(15),m=t(0),d=t.n(m),u=t(1012),f=t(1013),p=t(1014),g=t(1017),h=t(793),E=t(795),v=t(791),w=t(790),N=t(807),z=t(178),b=t(797),S=t(177),y=t(837),k=(t(1224),t(445)),x=t(268),R=(t(832),t(799),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.no",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Name",field:"name",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.name)))}},{headerName:"Email",field:"email",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.email)))}},{headerName:"Customer Type",field:"you_are",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.you_are)))}},{headerName:"Request Type",field:"typeof_req",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.typeof_req)))}},{headerName:"Category",field:"category",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.category)))}},{headerName:"Mobile No.",field:"mobile_no",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.mobile_no)))}},{headerName:"State",field:"state",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.state)))}},{headerName:"City",field:"district",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.district)))}},{headerName:"Address",field:"address",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.address)))}},{headerName:"Comment",field:"comments",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.comments)))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(k.a,{size:20,onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/allcontactus").then((function(e){var t=e.data.data;a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,b.a.get("/delcontactus/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return d.a.createElement(u.a,{className:"app-user-list"},d.a.createElement(f.a,{sm:"12"}),d.a.createElement(f.a,{sm:"12"},d.a.createElement(p.a,null,d.a.createElement(u.a,{className:"m-2"},d.a.createElement(f.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Layout List"))),d.a.createElement(g.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(h.a,{className:"p-1 ag-dropdown"},d.a.createElement(E.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(x.a,{className:"ml-50",size:15})),d.a.createElement(v.a,{right:!0},d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(N.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(z.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(S.a.Consumer,null,(function(a){return d.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(d.a.Component));a.default=R},797:function(e,a,t){"use strict";var r=t(40),n=t.n(r).a.create({baseURL:"http://65.0.80.5:5000/api/admin"});a.a=n},799:function(e,a,t){}}]);
//# sourceMappingURL=166.691c5952.chunk.js.map