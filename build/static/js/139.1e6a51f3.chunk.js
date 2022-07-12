(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[139],{2106:function(e,t,a){"use strict";a.r(t);var l=a(13),n=a(14),r=a(16),c=a(15),o=a(0),s=a.n(o),i=a(1120),d=a(1118),m=a(1119),u=a(182),h=a(1123),E=a(1121),p=a(848),b=(a(24),a(833),a(177)),f=a(446),g=a(841),v=a.n(g),y=a(58),N=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:{}},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;b.a.get("/viewonecoursep/".concat(t)).then((function(t){console.log(t.data.data),e.setState({data:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t,a,l,n,r;return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{className:"overflow-hidden app-ecommerce-details"},s.a.createElement(d.a,{className:"m-2"},s.a.createElement(m.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Course Detail")),s.a.createElement(m.a,null,s.a.createElement(y.b,{render:function(e){var t=e.history;return s.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/course/courseList")}},"Back")}}))),s.a.createElement(h.a,{className:"pb-0"},s.a.createElement(d.a,{className:"mb-5 mt-2"},s.a.createElement(m.a,{className:"d-flex align-items-start justify-content-center mb-2 mb-md-0",sm:"12",md:"5"},s.a.createElement("img",{src:this.state.data.course_image,alt:"Google Home",height:"200",width:"250"})),s.a.createElement(m.a,{md:"7",sm:"12"},s.a.createElement("h3",null,this.state.data.course_title),s.a.createElement("h6",{className:""},"by ",null===(e=this.state.data.teacher)||void 0===e?void 0:e.fullname),s.a.createElement("div",{className:"d-flex flex-wrap"},s.a.createElement("h3",{className:"text-primary"})),s.a.createElement("hr",null),s.a.createElement("h4",null,"Short Description "),s.a.createElement("h6",null,this.state.data.desc),s.a.createElement("hr",null),s.a.createElement("h4",null,"Long Description "),s.a.createElement("h6",null,this.state.data.long_desc),s.a.createElement("hr",null),s.a.createElement("h4",null,"Course Popularity"),s.a.createElement("h6",null,this.state.data.popularity),s.a.createElement("hr",null),s.a.createElement("h4",null,"Category "),s.a.createElement("h6",null,null===(t=this.state.data.category_id)||void 0===t?void 0:t.catName),s.a.createElement("hr",null))))),s.a.createElement(i.a,null,s.a.createElement(E.a,{tag:"h3"},"Video List"),s.a.createElement(h.a,null,s.a.createElement(p.a,{bordered:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"#"),s.a.createElement("th",null,"Video Title"),s.a.createElement("th",null,"Video Image"),s.a.createElement("th",null,"Video URL"),s.a.createElement("th",null,"Action"))),s.a.createElement("tbody",null,null===(a=this.state.data)||void 0===a||null===(l=a.videolist)||void 0===l?void 0:l.map((function(e){return s.a.createElement("tr",{key:e._id},s.a.createElement("th",{scope:"row"},"1"),s.a.createElement("td",null,e.videoTitle),s.a.createElement("td",null,s.a.createElement("img",{src:e.video_image,width:"70"})),s.a.createElement("td",null,s.a.createElement("video",{width:"120",height:"100",controls:!0,source:!0,src:e.video_file,type:"video/mp4"})),s.a.createElement("td",null,s.a.createElement(y.b,{render:function(t){t.history;return s.a.createElement("button",{className:"btn-danger float-center",onClick:function(){return b.a.get("/deletevideo/".concat(e._id)).then((function(e){console.log(e.data),"deleted"===e.data.message&&(v()("Success!","Deleted SuccessFull!","success"),window.location.reload())})).catch((function(e){console.log(e)}))}},s.a.createElement(f.a,{size:"20px"}))}})))})))))),s.a.createElement(i.a,null,s.a.createElement(E.a,{tag:"h3"},"PDF List"),s.a.createElement(h.a,null,s.a.createElement(p.a,{bordered:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"#"),s.a.createElement("th",null,"PDF Title"),s.a.createElement("th",null,"PDF Image"),s.a.createElement("th",null,"PDF URL"))),s.a.createElement("tbody",null,null===(n=this.state.data)||void 0===n||null===(r=n.pdflist)||void 0===r?void 0:r.map((function(e){return s.a.createElement("tr",{key:e._id},s.a.createElement("th",{scope:"row"},"1"),s.a.createElement("td",null,e.pdf_title),s.a.createElement("td",null,s.a.createElement("img",{src:e.pdf_image,width:"70"})),s.a.createElement("td",null,s.a.createElement("a",{href:e.pdf_file,download:!0},"Download file")),s.a.createElement("td",null,s.a.createElement(y.b,{render:function(t){t.history;return s.a.createElement("button",{className:"btn-danger float-center",onClick:function(){return b.a.get("/deletepdf/".concat(e._id)).then((function(e){console.log(e.data),"deleted"===e.data.message&&(v()("Success!","Deleted SuccessFull!","success"),window.location.reload())})).catch((function(e){console.log(e)}))}},s.a.createElement(f.a,{size:"20px"}))}})))})))))))}}]),a}(s.a.Component);t.default=N},833:function(e,t,a){},848:function(e,t,a){"use strict";var l=a(5),n=a(9),r=a(0),c=a.n(r),o=a(1),s=a.n(o),i=a(4),d=a.n(i),m=a(3),u={className:s.a.string,cssModule:s.a.object,size:s.a.string,bordered:s.a.bool,borderless:s.a.bool,striped:s.a.bool,dark:s.a.bool,hover:s.a.bool,responsive:s.a.oneOfType([s.a.bool,s.a.string]),tag:m.tagPropType,responsiveTag:m.tagPropType,innerRef:s.a.oneOfType([s.a.func,s.a.string,s.a.object])},h=function(e){var t=e.className,a=e.cssModule,r=e.size,o=e.bordered,s=e.borderless,i=e.striped,u=e.dark,h=e.hover,E=e.responsive,p=e.tag,b=e.responsiveTag,f=e.innerRef,g=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(m.mapToCssModules)(d()(t,"table",!!r&&"table-"+r,!!o&&"table-bordered",!!s&&"table-borderless",!!i&&"table-striped",!!u&&"table-dark",!!h&&"table-hover"),a),y=c.a.createElement(p,Object(l.a)({},g,{ref:f,className:v}));if(E){var N=Object(m.mapToCssModules)(!0===E?"table-responsive":"table-responsive-"+E,a);return c.a.createElement(b,{className:N},y)}return y};h.propTypes=u,h.defaultProps={tag:"table",responsiveTag:"div"},t.a=h}}]);
//# sourceMappingURL=139.1e6a51f3.chunk.js.map