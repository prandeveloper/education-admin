(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[170],{2099:function(e,a,t){"use strict";t.r(a);var r=t(76),n=t.n(r),i=t(127),l=t(13),c=t(14),s=t(16),o=t(15),d=t(0),m=t.n(d),u=t(1118),f=t(1119),p=t(1120),g=t(182),h=t(1123),v=t(787),w=t(789),E=t(786),N=t(785),b=t(794),S=t(177),z=t(178),k=t(810),y=t(312),P=t(446),R=t(269),A=t(21),C=(t(807),t(793),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Image",field:"image",filter:!1,width:120,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("img",{className:"rounded-circle  mr-4",src:e.data.image,alt:" brand",height:"40",width:"40"}))}},{headerName:"FullName",field:"fullname",filter:!0,width:150,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-2 mr-4"},m.a.createElement("span",null,e.data.fullname))}},{headerName:"Email",field:"email",filter:!0,width:150,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-2 mr-4"},m.a.createElement("span",null,e.data.email))}},{headerName:"Mobile No.",field:"mobile",filter:!0,width:150,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-2 mr-4"},m.a.createElement("span",null,e.data.mobile))}},{headerName:"Approved",field:"approvedstatus",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?m.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.approvedstatus):"false"===e.value?m.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.approvedstatus):null}},{headerName:"Date Of Birth",field:"dob",filter:!0,width:150,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-2 mr-4"},m.a.createElement("span",null,e.data.dob))}},{headerName:"Gender",field:"gender",filter:!0,width:150,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-2 mr-4"},m.a.createElement("span",null,e.data.gender))}},{headerName:"Institute",field:"institute",filter:!0,width:150,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-2 mr-4"},m.a.createElement("span",null,e.data.institute))}},{headerName:"City",field:"city",filter:!0,width:150,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-2 mr-4"},m.a.createElement("span",null,e.data.city))}},{headerName:"State",field:"state",filter:!0,width:150,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-2 mr-4"},m.a.createElement("span",null,e.data.state))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return m.a.createElement("div",{className:"actions cursor-pointer"},m.a.createElement(y.a,{className:"mr-50",size:"20px",color:"blue",onClick:function(){return A.a.push(A.a.push("/app/teacher/editTeacher/".concat(a.data._id)))}}),m.a.createElement(P.a,{size:"20px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/approved_staff").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,S.a.get("/deletestaff/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return m.a.createElement(u.a,{className:"app-user-list"},m.a.createElement(f.a,{sm:"12"}),m.a.createElement(f.a,{sm:"12"},m.a.createElement(p.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(f.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Approved Teacher")),m.a.createElement(f.a,null,m.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return A.a.push("/app/teacher/addTeacher")}},"Add New Teacher"))),m.a.createElement(h.a,null,null===this.state.rowData?null:m.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(v.a,{className:"p-1 ag-dropdown"},m.a.createElement(w.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,m.a.createElement(R.a,{className:"ml-50",size:15})),m.a.createElement(E.a,{right:!0},m.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),m.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),m.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),m.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},m.a.createElement("div",{className:"table-input mr-1"},m.a.createElement(b.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),m.a.createElement("div",{className:"export-btn"},m.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),m.a.createElement(z.a.Consumer,null,(function(a){return m.a.createElement(k.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(m.a.Component));a.default=C},793:function(e,a,t){}}]);
//# sourceMappingURL=170.dd7bc7ef.chunk.js.map