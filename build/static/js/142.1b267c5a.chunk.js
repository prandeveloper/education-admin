(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[142],{2101:function(e,t,a){"use strict";a.r(t);var n=a(76),i=a.n(n),r=a(126),l=a(13),s=a(14),c=a(16),o=a(15),u=a(0),d=a.n(u),p=a(990),f=a(991),m=a(992),g=a(178),h=a(995),v=a(793),b=a(795),S=a(791),z=a(790),w=a(798),y=a(797),E=a(177),N=a(822),C=(a(1125),a(445)),P=a(268),x=a(21),R=(a(818),a(799),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"sortorder",width:100,filter:!0},{headerName:"Category Name",field:"catName",filter:"agSetColumnFilter",width:250,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("div",{className:"ml-2"},d.a.createElement("span",null,e.data.catName)))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(C.a,{size:20,color:"red",onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://13.127.52.128/v1//api/admin/allCat").then((function(e){var a=e.data.data;t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,y.a.get("http://13.127.52.128/v1//api/admin/deleteCat/".concat(t)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return d.a.createElement(p.a,{className:"app-user-list"},d.a.createElement(f.a,{sm:"12"}),d.a.createElement(f.a,{sm:"12"},d.a.createElement(m.a,null,d.a.createElement(p.a,{className:"m-2"},d.a.createElement(f.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Category List")),d.a.createElement(f.a,null,d.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return x.a.push("/app/category/addCategory")}},"Add Category"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(b.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(P.a,{className:"ml-50",size:15})),d.a.createElement(S.a,{right:!0},d.a.createElement(z.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(z.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(z.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(z.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(w.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(E.a.Consumer,null,(function(t){return d.a.createElement(N.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(d.a.Component));t.default=R},797:function(e,t,a){"use strict";var n=a(40),i=a.n(n).a.create({baseURL:"http://13.127.52.128/v1/api/admin"});t.a=i},798:function(e,t,a){"use strict";var n=a(5),i=a(7),r=a(11),l=a(12),s=a(0),c=a.n(s),o=a(1),u=a.n(o),d=a(4),p=a.n(d),f=a(3),m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,s=e.valid,o=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,g=e.innerRef,h=Object(i.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(r)>-1,b=new RegExp("\\D","g"),S=u||("select"===r||"textarea"===r?r:"input"),z="form-control";m?(z+="-plaintext",S=u||"input"):"file"===r?z+="-file":"range"===r?z+="-range":v&&(z=d?null:"form-check-input"),h.size&&b.test(h.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var w=Object(f.mapToCssModules)(p()(t,o&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,z),a);return("input"===S||u&&"function"===typeof u)&&(h.type=r),h.children&&!m&&"select"!==r&&"string"===typeof S&&"select"!==S&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(S,Object(n.a)({},h,{ref:g,className:w,"aria-invalid":o}))},t}(c.a.Component);g.propTypes=m,g.defaultProps={type:"text"},t.a=g},799:function(e,t,a){}}]);
//# sourceMappingURL=142.1b267c5a.chunk.js.map