(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[183],{2102:function(e,a,t){"use strict";t.r(a);var n=t(76),r=t.n(n),i=t(126),l=t(13),c=t(14),s=t(16),o=t(15),u=t(0),m=t.n(u),d=t(1012),g=t(1013),f=t(1014),p=t(1017),h=t(793),v=t(795),w=t(791),E=t(790),S=t(807),b=t(178),z=t(797),N=t(177),P=t(837),k=t(445),y=t(268),D=(t(21),t(832),t(799),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:80,filter:!0},{headerName:"Image",field:"userimg",filter:!1,width:80,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("img",{className:"rounded-circle  mr-4",src:e.data.userimg,alt:" brand",height:"40",width:"40"}))}},{headerName:"Name",field:"fullname",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-1 mr-4"},m.a.createElement("span",null,e.data.fullname))}},{headerName:"Email",field:"email",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-1 mr-4"},m.a.createElement("span",null,e.data.email))}},{headerName:"Mobile No.",field:"mobile",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-1 mr-4"},m.a.createElement("span",null,e.data.mobile))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return m.a.createElement("div",{className:"actions cursor-pointer"},m.a.createElement(k.a,{size:"20px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("/allusers").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,z.a.get("/deleteuser/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return m.a.createElement(d.a,{className:"app-user-list"},m.a.createElement(g.a,{sm:"12"}),m.a.createElement(g.a,{sm:"12"},m.a.createElement(f.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(g.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Student List"))),m.a.createElement(p.a,null,null===this.state.rowData?null:m.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(h.a,{className:"p-1 ag-dropdown"},m.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,m.a.createElement(y.a,{className:"ml-50",size:15})),m.a.createElement(w.a,{right:!0},m.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),m.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),m.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),m.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},m.a.createElement("div",{className:"table-input mr-1"},m.a.createElement(S.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),m.a.createElement("div",{className:"export-btn"},m.a.createElement(b.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),m.a.createElement(N.a.Consumer,null,(function(a){return m.a.createElement(P.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(m.a.Component));a.default=D},797:function(e,a,t){"use strict";var n=t(40),r=t.n(n).a.create({baseURL:"http://65.0.80.5:5000/api/admin"});a.a=r},799:function(e,a,t){}}]);
//# sourceMappingURL=183.adcdc729.chunk.js.map