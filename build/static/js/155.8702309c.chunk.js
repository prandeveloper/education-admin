(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[155],{2186:function(e,a,t){"use strict";t.r(a);var r=t(76),n=t.n(r),i=t(126),l=t(13),c=t(14),s=t(16),o=t(15),d=t(0),u=t.n(d),m=t(1012),p=t(1013),f=t(1014),g=t(178),h=t(1017),w=t(793),E=t(795),v=t(791),N=t(790),S=t(807),b=t(797),k=t(177),z=t(837),x=t(311),y=t(445),P=t(268),R=t(21),A=(t(832),t(799),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"First Name",field:"first_name",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"ml-2 mr-4"},u.a.createElement("span",null,e.data.first_name))}},{headerName:"Last Name",field:"last_name",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.last_name))}},{headerName:"Email",field:"email",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.email))}},{headerName:"Phone No.",field:"phone_no",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.phone_no))}},{headerName:"Company",field:"company",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.company))}},{headerName:"Address",field:"address_one",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.address_one," ",e.data.address_two))}},{headerName:"State",field:"state",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.state))}},{headerName:"City",field:"city",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.city))}},{headerName:"Postcode",field:"postcode",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.postcode))}},{headerName:"GST Rate",field:"gst_no",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.gst_no))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-success ml-2"},e.data.status):"Inactive"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(x.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return R.a.push("/app/contactUs/supplier/editSupplier/".concat(a.data._id))}}),u.a.createElement(y.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/Getsupplier").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,b.a.get("/deletebrand/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return u.a.createElement(m.a,{className:"app-user-list"},u.a.createElement(p.a,{sm:"12"}),u.a.createElement(p.a,{sm:"12"},u.a.createElement(f.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Supplier List")),u.a.createElement(p.a,null,u.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return R.a.push("/app/contactUs/supplier/addSupplier")}},"Add New Supplier"))),u.a.createElement(h.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(w.a,{className:"p-1 ag-dropdown"},u.a.createElement(E.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(P.a,{className:"ml-50",size:15})),u.a.createElement(v.a,{right:!0},u.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(S.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(k.a.Consumer,null,(function(a){return u.a.createElement(z.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(u.a.Component));a.default=A},797:function(e,a,t){"use strict";var r=t(40),n=t.n(r).a.create({baseURL:"http://65.0.80.5:5000/api/admin"});a.a=n},799:function(e,a,t){}}]);
//# sourceMappingURL=155.8702309c.chunk.js.map