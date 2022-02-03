(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[277],{2238:function(e,t,a){"use strict";a.r(t);var i=a(13),n=a(14),r=a(16),l=a(15),s=a(0),o=a.n(s),c=a(992),d=a(995),u=a(793),f=a(795),g=a(791),p=a(790),m=a(798),h=a(178),b=a(823),v=a(177),S=a(268),w=a(40),y=a.n(w),z=(a(819),a(813)),N=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={rowData:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"First Name",field:"firstname",width:175,filter:!0,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Last Name",field:"lastname",filter:!0,width:175},{headerName:"Email",field:"email",filter:!0,width:250,pinned:window.innerWidth>992&&"left"},{headerName:"Company",field:"company",filter:!0,width:250},{headerName:"City",field:"city",filter:!0,width:150},{headerName:"Country",field:"country",filter:!0,width:150},{headerName:"State",field:"state",filter:!0,width:125},{headerName:"Zip",field:"zip",filter:"agNumberColumnFilter",width:140},{headerName:"Followers",field:"followers",filter:"agNumberColumnFilter",width:140}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.get("/api/aggrid/data").then((function(t){var a=t.data.data;JSON.stringify(a),e.setState({rowData:a})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,i=t.columnDefs,n=t.defaultColDef;return o.a.createElement(o.a.Fragment,null,o.a.createElement(z.a,{breadCrumbTitle:"Aggrid Table",breadCrumbParent:"Forms & Tables",breadCrumbActive:"Aggrid Table"}),o.a.createElement(c.a,{className:"overflow-hidden agGrid-card"},o.a.createElement(d.a,{className:"py-0"},null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(u.a,{className:"p-1 ag-dropdown"},o.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(S.a,{className:"ml-50",size:15})),o.a.createElement(g.a,{right:!0},o.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(m.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(h.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(v.a.Consumer,null,(function(t){return o.a.createElement(b.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:i,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))))}}]),a}(o.a.Component);t.default=N},798:function(e,t,a){"use strict";var i=a(5),n=a(7),r=a(11),l=a(12),s=a(0),o=a.n(s),c=a(1),d=a.n(c),u=a(4),f=a.n(u),g=a(3),p={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:g.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,s=e.valid,c=e.invalid,d=e.tag,u=e.addon,p=e.plaintext,m=e.innerRef,h=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),S=d||("select"===r||"textarea"===r?r:"input"),w="form-control";p?(w+="-plaintext",S=d||"input"):"file"===r?w+="-file":"range"===r?w+="-range":b&&(w=u?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(g.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var y=Object(g.mapToCssModules)(f()(t,c&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,w),a);return("input"===S||d&&"function"===typeof d)&&(h.type=r),h.children&&!p&&"select"!==r&&"string"===typeof S&&"select"!==S&&(Object(g.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(S,Object(i.a)({},h,{ref:m,className:y,"aria-invalid":c}))},t}(o.a.Component);m.propTypes=p,m.defaultProps={type:"text"},t.a=m}}]);
//# sourceMappingURL=277.2f7a5b35.chunk.js.map