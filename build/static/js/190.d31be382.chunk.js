(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[190],{2095:function(e,a,t){"use strict";t.r(a);var n=t(76),r=t.n(n),i=t(126),l=t(13),c=t(14),s=t(16),o=t(15),d=t(0),u=t.n(d),m=t(990),f=t(991),p=t(992),g=t(178),h=t(995),v=t(793),b=t(795),w=t(791),E=t(790),N=t(798),z=t(797),S=t(177),y=t(822),R=t(311),k=t(445),x=t(268),P=t(21),C=(t(818),t(799),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Image",field:"image",filter:!1,width:120,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("img",{className:"rounded-circle  mr-4",src:e.data.image,alt:" brand",height:"40",width:"40"}))}},{headerName:"FullName",field:"fullname",filter:!0,width:150,cellRendererFramework:function(e){return u.a.createElement("div",{className:"ml-2 mr-4"},u.a.createElement("span",null,e.data.fullname))}},{headerName:"Email",field:"email",filter:!0,width:150,cellRendererFramework:function(e){return u.a.createElement("div",{className:"ml-2 mr-4"},u.a.createElement("span",null,e.data.email))}},{headerName:"Mobile No.",field:"mobile",filter:!0,width:150,cellRendererFramework:function(e){return u.a.createElement("div",{className:"ml-2 mr-4"},u.a.createElement("span",null,e.data.mobile))}},{headerName:"Approved",field:"approvedstatus",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.approvedstatus):"false"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.approvedstatus):null}},{headerName:"Date Of Birth",field:"dob",filter:!0,width:150,cellRendererFramework:function(e){return u.a.createElement("div",{className:"ml-2 mr-4"},u.a.createElement("span",null,e.data.dob))}},{headerName:"Gender",field:"gender",filter:!0,width:150,cellRendererFramework:function(e){return u.a.createElement("div",{className:"ml-2 mr-4"},u.a.createElement("span",null,e.data.gender))}},{headerName:"Institute",field:"institute",filter:!0,width:150,cellRendererFramework:function(e){return u.a.createElement("div",{className:"ml-2 mr-4"},u.a.createElement("span",null,e.data.institute))}},{headerName:"City",field:"city",filter:!0,width:150,cellRendererFramework:function(e){return u.a.createElement("div",{className:"ml-2 mr-4"},u.a.createElement("span",null,e.data.city))}},{headerName:"State",field:"state",filter:!0,width:150,cellRendererFramework:function(e){return u.a.createElement("div",{className:"ml-2 mr-4"},u.a.createElement("span",null,e.data.state))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(R.a,{className:"mr-50",size:"20px",color:"blue",onClick:function(){return P.a.push("/app/contactUs/customer/editCustomer/".concat(a.data._id))}}),u.a.createElement(k.a,{size:"20px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("/approved_staff").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,z.a.get("/deletestaff/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return u.a.createElement(m.a,{className:"app-user-list"},u.a.createElement(f.a,{sm:"12"}),u.a.createElement(f.a,{sm:"12"},u.a.createElement(p.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Approved Teacher")),u.a.createElement(f.a,null,u.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return P.a.push("/app/teacher/addTeacher")}},"Add New Teacher"))),u.a.createElement(h.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(v.a,{className:"p-1 ag-dropdown"},u.a.createElement(b.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(x.a,{className:"ml-50",size:15})),u.a.createElement(w.a,{right:!0},u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(N.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(S.a.Consumer,null,(function(a){return u.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(u.a.Component));a.default=C},797:function(e,a,t){"use strict";var n=t(40),r=t.n(n).a.create({baseURL:"http://13.127.52.128/v1/api/admin"});a.a=r},798:function(e,a,t){"use strict";var n=t(5),r=t(7),i=t(11),l=t(12),c=t(0),s=t.n(c),o=t(1),d=t.n(o),u=t(4),m=t.n(u),f=t(3),p={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,l=e.bsSize,c=e.valid,o=e.invalid,d=e.tag,u=e.addon,p=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(i)>-1,b=new RegExp("\\D","g"),w=d||("select"===i||"textarea"===i?i:"input"),E="form-control";p?(E+="-plaintext",w=d||"input"):"file"===i?E+="-file":"range"===i?E+="-range":v&&(E=u?null:"form-check-input"),h.size&&b.test(h.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var N=Object(f.mapToCssModules)(m()(a,o&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,E),t);return("input"===w||d&&"function"===typeof d)&&(h.type=i),h.children&&!p&&"select"!==i&&"string"===typeof w&&"select"!==w&&(Object(f.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),s.a.createElement(w,Object(n.a)({},h,{ref:g,className:N,"aria-invalid":o}))},a}(s.a.Component);g.propTypes=p,g.defaultProps={type:"text"},a.a=g},799:function(e,a,t){}}]);
//# sourceMappingURL=190.d31be382.chunk.js.map