(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[149],{2118:function(e,a,t){"use strict";t.r(a);var n=t(76),r=t.n(n),i=t(127),l=t(13),c=t(14),o=t(16),s=t(15),u=t(0),d=t.n(u),m=t(1118),g=t(1119),f=t(1120),p=t(182),h=t(1123),v=t(787),E=t(789),w=t(786),S=t(785),N=t(794),b=t(177),z=t(178),P=t(810),k=(t(1137),t(446)),C=t(269),y=t(21),x=(t(807),t(793),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"sortorder",width:100,filter:!0},{headerName:"Image",field:"icon",filter:!0,width:120,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("img",{className:"rounded-circle mr-50",src:null===(a=e.data.lavel_Id)||void 0===a?void 0:a.icon,alt:"user avatar",height:"40",width:"40"}))}},{headerName:"Level Name",field:"level",filter:"agSetColumnFilter",width:200,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,null===(a=e.data.lavel_Id)||void 0===a?void 0:a.level)))}},{headerName:"Student Name",field:"level",filter:"agSetColumnFilter",width:200,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,null===(a=e.data.student_Id)||void 0===a?void 0:a.fullname)))}},{headerName:"Student Email",field:"level",filter:"agSetColumnFilter",width:200,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,null===(a=e.data.student_Id)||void 0===a?void 0:a.email)))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(k.a,{size:20,color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://65.0.80.5:5000/api/user/allbatch").then((function(e){var t=e.data.data;a.setState({rowData:t}),console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,b.a.get("http://65.0.80.5:5000/api/user/deletebatch/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return d.a.createElement(m.a,{className:"app-user-list"},d.a.createElement(g.a,{sm:"12"}),d.a.createElement(g.a,{sm:"12"},d.a.createElement(f.a,null,d.a.createElement(m.a,{className:"m-2"},d.a.createElement(g.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Badge List")),d.a.createElement(g.a,null,d.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/app/badge/addBadge")}},"Add Badge"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(E.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(C.a,{className:"ml-50",size:15})),d.a.createElement(w.a,{right:!0},d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(N.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(z.a.Consumer,null,(function(a){return d.a.createElement(P.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(d.a.Component));a.default=x},793:function(e,a,t){}}]);
//# sourceMappingURL=149.f33b39e2.chunk.js.map