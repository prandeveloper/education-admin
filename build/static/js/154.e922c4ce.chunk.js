(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[154],{2114:function(e,a,t){"use strict";t.r(a);var r=t(13),i=t(14),n=t(16),l=t(15),c=t(0),o=t.n(c),s=t(1272),m=t(1273),d=t(1274),u=t(1277),f=t(787),g=t(789),p=t(786),h=t(785),w=t(796),E=t(184),v=(t(177),t(178)),N=t(812),S=t(312),z=t(446),b=t(269),P=t(21),k=(t(810),t(793),function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Name",field:"customerId",filter:!0,width:150,cellRendererFramework:function(e){return o.a.createElement("div",{className:"ml-2 mr-4"})}},{headerName:"Date Of Birth",field:"image",filter:!1,width:120,cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"})}},{headerName:"Gender",field:"first_name",filter:!0,width:150,cellRendererFramework:function(e){return o.a.createElement("div",{className:"ml-2 mr-4"})}},{headerName:"Nationality",field:"customer_email",filter:!0,width:150,cellRendererFramework:function(e){return o.a.createElement("div",{className:"ml-2 mr-4"})}},{headerName:"Aadhar No.",field:"mobile_no",filter:!0,width:150,cellRendererFramework:function(e){return o.a.createElement("div",{className:"ml-2 mr-4"})}},{headerName:"Document Image",field:"mobile_no",filter:!0,width:150,cellRendererFramework:function(e){return o.a.createElement("div",{className:"ml-2 mr-4"})}},{headerName:"Selfie Image",field:"mobile_no",filter:!0,width:150,cellRendererFramework:function(e){return o.a.createElement("div",{className:"ml-2 mr-4"})}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return o.a.createElement("div",{className:"actions cursor-pointer"},o.a.createElement(S.a,{className:"mr-50",size:"20px",color:"blue",onClick:function(){return P.a.push("/app/contactUs/customer/editCustomer/".concat(a.data._id))}}),o.a.createElement(z.a,{size:"20px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,i=a.defaultColDef;return o.a.createElement(s.a,{className:"app-user-list"},o.a.createElement(m.a,{sm:"12"}),o.a.createElement(m.a,{sm:"12"},o.a.createElement(d.a,null,o.a.createElement(s.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"KYC List")),o.a.createElement(m.a,null)),o.a.createElement(u.a,null,null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(f.a,{className:"p-1 ag-dropdown"},o.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(b.a,{className:"ml-50",size:15})),o.a.createElement(p.a,{right:!0},o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(w.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(E.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(v.a.Consumer,null,(function(a){return o.a.createElement(N.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(o.a.Component));a.default=k},793:function(e,a,t){}}]);
//# sourceMappingURL=154.e922c4ce.chunk.js.map