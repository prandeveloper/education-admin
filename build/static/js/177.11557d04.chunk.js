(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[177],{2123:function(e,a,t){"use strict";t.r(a);var r=t(76),n=t.n(r),i=t(127),l=t(13),c=t(14),s=t(16),o=t(15),u=t(0),d=t.n(u),m=t(1118),f=t(1119),g=t(1120),p=t(182),h=t(1123),v=t(787),w=t(789),E=t(786),N=t(785),S=t(794),b=t(40),z=t.n(b),k=t(178),y=t(808),x=t(315),C=t(312),P=t(446),A=t(269),R=t(21),D=(t(807),t(792),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No.",field:"",valueGetter:"node.rowIndex + 1",width:110,filter:!0},{headerName:"Image",field:"userImage\t",filter:!0,width:120,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("img",{className:"rounded-circle",src:e.data.userImage,alt:"user",height:"60",width:"60"}))}},{headerName:"Name",field:"username",filter:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.username))}},{headerName:"Email",field:"user_email\t",filter:!0,width:190,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.user_email))}},{headerName:"Mobile No.",field:"mobile_no\t",filter:!0,width:170,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.mobile_no))}},{headerName:"City ",field:"city",filter:!0,width:170,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.city))}},{headerName:" State",field:"state",filter:!0,width:170,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.state))}},{headerName:"Country",field:"country",filter:!0,width:170,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.country))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success ml-2"},e.data.status):"Inactive"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(x.a,{className:"mr-50",size:20,onClick:function(){return R.a.push("/app/users/user/viewUsers/".concat(a.data._id))}}),d.a.createElement(C.a,{className:"mr-50",size:20,onClick:function(){return R.a.push("/app/users/user/edit")}}),d.a.createElement(P.a,{size:20,onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("http://35.154.86.59/api/user/alluser").then((function(e){var t=e.data.data;a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,axiosConfig.get("/deleteuser/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return d.a.createElement(m.a,{className:"app-user-list"},d.a.createElement(f.a,{sm:"12"}),d.a.createElement(f.a,{sm:"12"},d.a.createElement(g.a,null,d.a.createElement(m.a,{className:"m-2"},d.a.createElement(f.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"All Users")),d.a.createElement(f.a,null,d.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return R.a.push("/app/users/user/addUsers")}},"Add New User"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(w.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(A.a,{className:"ml-50",size:15})),d.a.createElement(E.a,{right:!0},d.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(S.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(k.a.Consumer,null,(function(a){return d.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(d.a.Component));a.default=D},792:function(e,a,t){}}]);
//# sourceMappingURL=177.11557d04.chunk.js.map