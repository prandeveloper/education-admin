(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[176],{2105:function(e,t,a){"use strict";a.r(t);var n=a(76),r=a.n(n),i=a(126),l=a(13),s=a(14),c=a(16),o=a(15),d=a(0),u=a.n(d),m=a(990),f=a(991),p=a(992),g=a(178),h=a(995),v=a(793),w=a(795),b=a(791),E=a(790),S=a(798),N=a(797),z=a(177),y=a(823),R=a(314),k=a(311),x=a(445),P=a(268),C=a(21),O=(a(819),a(799),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Seller Name",field:"seller_name",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.seller_name))}},{headerName:"Seller Id",field:" sellerId",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.sellerId))}},{headerName:"Seller Email",field:"selleremail\t",filter:!0,width:190,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.selleremail))}},{headerName:"Mobile No.",field:"mobile_no\t",filter:!0,width:170,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.mobile_no))}},{headerName:"Business Type",field:"business_type",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.business_type))}},{headerName:"Store Name",field:"store_name",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.store_name))}},{headerName:"Store Image",field:"store_img",filter:!1,width:150,setColumnVisible:!1,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("img",{className:" rounded-circle  mr-3",src:e.data.store_img,alt:"user avatar",height:"40",width:"40"}))}},{headerName:"Store Address",field:"store_address",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.store_address))}},{headerName:"GSTIN NO.",field:"gstin_no",filter:!0,width:180,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.gstin_no))}},{headerName:"City ",field:"city",filter:!0,width:170,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.city))}},{headerName:" State",field:"state",filter:!0,width:170,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.state))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Inactive"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Actions",field:"sortorder",width:150,cellRendererFramework:function(t){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(R.a,{className:"mr-50",size:20,onClick:function(){return C.a.push("/app/seller/viewSeller/".concat(t.data._id))}}),u.a.createElement(k.a,{className:"mr-50",size:20,onClick:function(){return C.a.push("/app/seller/editSeller")}}),u.a.createElement(x.a,{size:20,onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/getseller").then((function(e){var a=e.data.data;console.log(a),t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,N.a.get("/delproduct/".concat(t)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return console.log(a),u.a.createElement(m.a,{className:"app-user-list"},u.a.createElement(f.a,{sm:"12"}),u.a.createElement(f.a,{sm:"12"},u.a.createElement(p.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{sm:"6",className:"float-left"},"Seller List")),u.a.createElement(f.a,null,u.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return C.a.push("/app/seller/addSeller")}},"Add Seller"))),u.a.createElement(h.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(v.a,{className:"p-1 ag-dropdown"},u.a.createElement(w.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(P.a,{className:"ml-50",size:15})),u.a.createElement(b.a,{right:!0},u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(S.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(z.a.Consumer,null,(function(t){return u.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(u.a.Component));t.default=O},797:function(e,t,a){"use strict";var n=a(40),r=a.n(n).a.create({baseURL:"http://13.127.52.128/v1/api/admin"});t.a=r},798:function(e,t,a){"use strict";var n=a(5),r=a(7),i=a(11),l=a(12),s=a(0),c=a.n(s),o=a(1),d=a.n(o),u=a(4),m=a.n(u),f=a(3),p={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,l=e.bsSize,s=e.valid,o=e.invalid,d=e.tag,u=e.addon,p=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(i)>-1,w=new RegExp("\\D","g"),b=d||("select"===i||"textarea"===i?i:"input"),E="form-control";p?(E+="-plaintext",b=d||"input"):"file"===i?E+="-file":"range"===i?E+="-range":v&&(E=u?null:"form-check-input"),h.size&&w.test(h.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var S=Object(f.mapToCssModules)(m()(t,o&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,E),a);return("input"===b||d&&"function"===typeof d)&&(h.type=i),h.children&&!p&&"select"!==i&&"string"===typeof b&&"select"!==b&&(Object(f.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(b,Object(n.a)({},h,{ref:g,className:S,"aria-invalid":o}))},t}(c.a.Component);g.propTypes=p,g.defaultProps={type:"text"},t.a=g},799:function(e,t,a){}}]);
//# sourceMappingURL=176.98bd9d2c.chunk.js.map