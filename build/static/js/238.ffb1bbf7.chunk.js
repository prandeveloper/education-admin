(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[238],{2114:function(e,a,t){"use strict";t.r(a);var l=t(13),n=t(14),s=t(16),i=t(15),c=t(0),r=t.n(c),m=t(990),d=t(991),o=t(992),u=t(178),f=t(995),E=t(792),v=t(993),h=t(994),N=t(311),b=t(42),g=t(40),p=t.n(g),w=(t(799),t(21)),x=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var a=this.props.match.params.id;p.a.get("/viewoneuser/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(d.a,{sm:"12"},r.a.createElement(o.a,null,r.a.createElement(m.a,{className:"m-2"},r.a.createElement(d.a,null,r.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"User Detail")),r.a.createElement(d.a,null,r.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return w.a.push("/app/users/roleAndPermission/roleList")}},"Back"))),r.a.createElement(f.a,null,r.a.createElement(m.a,{className:"mx-0",col:"12"},r.a.createElement(d.a,{className:"pl-0",sm:"12",lg:"6"},r.a.createElement(E.a,{className:"d-sm-flex d-block"},r.a.createElement(E.a,{className:"mt-md-1 mt-0",left:!0},r.a.createElement(E.a,{className:"rounded mr-2",object:!0,src:this.state.data.userImage,alt:"Generic placeholder image",height:"150",width:"180"})),r.a.createElement(E.a,{body:!0},r.a.createElement(m.a,{className:"ml-4"},r.a.createElement(d.a,{sm:"9",md:"12",lg:"12"},r.a.createElement("div",{className:"users-page-view-table"},r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"User Id"),r.a.createElement("div",{className:"text-truncate"},r.a.createElement("span",null,this.state.data.userID))),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Name"),r.a.createElement("div",{className:"text-truncate"},r.a.createElement("span",null,this.state.data.username))),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Email"),r.a.createElement("div",{className:"text-truncate"},r.a.createElement("span",null,this.state.data.email)))),r.a.createElement("div",{className:"users-page-view-table"},r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Status"),r.a.createElement("div",null,this.state.data.status)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"User Type"),r.a.createElement("div",null,this.state.data.usertype)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Website"),r.a.createElement("div",null,r.a.createElement("span",null,this.state.data.website))))))))),r.a.createElement(d.a,{className:"mt-1 pl-0",sm:"12"},r.a.createElement(u.a.Ripple,{className:"mr-1",color:"primary",outline:!0},r.a.createElement(b.a,{to:"/app/users/roleAndPermission/editRole"},r.a.createElement(N.a,{size:15}),r.a.createElement("span",{className:"align-middle ml-50"},"Edit")))))))),r.a.createElement(d.a,{sm:"12",md:"12"},r.a.createElement(o.a,null,r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement("h1",null,"Information"))),r.a.createElement(f.a,null,r.a.createElement("div",{className:"users-page-view-table"},r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Birth Date"),r.a.createElement("div",null,this.state.data.date_of_birth)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Mobile No"),r.a.createElement("div",null,this.state.data.mobile_no)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Phone No."),r.a.createElement("div",null,this.state.data.phone_no)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"City"),r.a.createElement("div",null,this.state.data.city)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"State"),r.a.createElement("div",null,this.state.data.state)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Country"),r.a.createElement("div",null,this.state.data.country)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Pin Code"),r.a.createElement("div",null,this.state.data.pincode)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Marriage Anniversary"),r.a.createElement("div",null,this.state.data.marriage_anniversary)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Technician Associate Number"),r.a.createElement("div",null,this.state.data.technician_assot_no)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"GST Number"),r.a.createElement("div",null,this.state.data.gstin_no)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Udhyog Aadhar Number"),r.a.createElement("div",null,this.state.data.udhyog_adhar_no)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"License Number"),r.a.createElement("div",null,this.state.data.licence_no)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Government Licence"),r.a.createElement("div",null,this.state.data.gov_licence_no)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"EB Licence"),r.a.createElement("div",null,this.state.data.eb_license)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Aadhar Number"),r.a.createElement("div",null,this.state.data.aadhar_no)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"PAN Number"),r.a.createElement("div",null,this.state.data.pancard_no)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Bank Name"),r.a.createElement("div",null,this.state.data.bank_name)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Account Holder Name"),r.a.createElement("div",null,this.state.data.bank_user_name)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"Bank Account Number"),r.a.createElement("div",null,this.state.data.bank_account_no)),r.a.createElement("div",{className:"d-flex user-info"},r.a.createElement("div",{className:"user-info-title font-weight-bold"},"IFSC Code"),r.a.createElement("div",null,this.state.data.ifsc_code)))))),r.a.createElement(d.a,{sm:"12",md:"6"})))}}]),t}(r.a.Component);a.default=x},799:function(e,a,t){}}]);
//# sourceMappingURL=238.ffb1bbf7.chunk.js.map