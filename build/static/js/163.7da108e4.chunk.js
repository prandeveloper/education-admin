(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[163],{2120:function(e,a,t){"use strict";t.r(a);var n=t(76),r=t.n(n),i=t(126),l=t(13),s=t(14),c=t(16),o=t(15),d=t(0),u=t.n(d),m=t(990),p=t(991),f=t(992),g=t(178),h=t(995),b=t(793),v=t(795),w=t(791),E=t(790),z=t(798),S=t(797),N=t(177),y=t(823),x=t(311),P=t(445),R=t(268),k=t(21),C=(t(819),t(799),function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.no",field:"sortorder",valueGetter:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Logo",field:"brand_img",filter:!1,width:120,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("img",{className:"rounded-circle  mr-4",src:e.data.brand_img,alt:" brand",height:"40",width:"40"}))}},{headerName:"Brand Title",field:"name",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"ml-2 mr-4"},u.a.createElement("span",null,e.data.name))}},{headerName:"Description",field:"desc",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.desc))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-success ml-2"},e.data.status):"Inactive"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(x.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return k.a.push("/app/products/brand/editBrand/".concat(a.data._id))}}),u.a.createElement(P.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/allbrand").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,S.a.get("/deletebrand/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return u.a.createElement(m.a,{className:"app-user-list"},u.a.createElement(p.a,{sm:"12"}),u.a.createElement(p.a,{sm:"12"},u.a.createElement(f.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Brand List")),u.a.createElement(p.a,null,u.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return k.a.push("/app/products/brand/addBrand")}},"Add New Brand"))),u.a.createElement(h.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(b.a,{className:"p-1 ag-dropdown"},u.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(R.a,{className:"ml-50",size:15})),u.a.createElement(w.a,{right:!0},u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(z.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(N.a.Consumer,null,(function(a){return u.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(u.a.Component));a.default=C},797:function(e,a,t){"use strict";var n=t(40),r=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=r},798:function(e,a,t){"use strict";var n=t(5),r=t(7),i=t(11),l=t(12),s=t(0),c=t.n(s),o=t(1),d=t.n(o),u=t(4),m=t.n(u),p=t(3),f={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,l=e.bsSize,s=e.valid,o=e.invalid,d=e.tag,u=e.addon,f=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(i)>-1,v=new RegExp("\\D","g"),w=d||("select"===i||"textarea"===i?i:"input"),E="form-control";f?(E+="-plaintext",w=d||"input"):"file"===i?E+="-file":"range"===i?E+="-range":b&&(E=u?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var z=Object(p.mapToCssModules)(m()(a,o&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,E),t);return("input"===w||d&&"function"===typeof d)&&(h.type=i),h.children&&!f&&"select"!==i&&"string"===typeof w&&"select"!==w&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(w,Object(n.a)({},h,{ref:g,className:z,"aria-invalid":o}))},a}(c.a.Component);g.propTypes=f,g.defaultProps={type:"text"},a.a=g},799:function(e,a,t){}}]);
//# sourceMappingURL=163.7da108e4.chunk.js.map