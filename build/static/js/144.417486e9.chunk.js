(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[144],{1075:function(e,t,a){"use strict";var n=a(13),l=a(14),r=a(16),c=a(15),m=a(0),s=a.n(m),i=a(4),o=a.n(i),u=a(802),p=a(801),E=a(782),d=a(783),v=a(803),h=a(804),b=a(182),y=a(1076),f=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeStep:e.props.activeStep?e.props.activeStep:0,errors:[],values:[]},e.handleNextStep=function(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],l=e.state.activeStep,r=e.props.validate;if(r)if(0===n.length&&l<=t&&l!==a)e.setState({activeStep:l+1});else{if(!n.length||!e.props.onValidationError)return;e.props.onValidationError(e.state.errors)}else l<=t&&l!==a&&e.setState({activeStep:l+1})},e.handlePreviousStep=function(t){var a=e.state.activeStep;a>=t&&e.setState({activeStep:a-1})},e.handleEnableAllSteps=function(t){e.props.enableAllSteps&&e.setState({activeStep:t})},e.handleSubmit=function(t){e.props.steps.length-1===e.state.activeStep&&e.props.onFinish&&e.props.onFinish(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.validate?y.AvForm:u.a;return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{className:"vx-wizard ".concat(this.props.className?this.props.className:""),tabs:!0},this.props.steps.map((function(t,a){return s.a.createElement(E.a,{className:"step-wrapper",key:a,onClick:function(){return e.handleEnableAllSteps(a)}},s.a.createElement(d.a,{className:o()("step step-".concat(a),{active:e.state.activeStep===a,done:a<e.state.activeStep})},s.a.createElement("span",{className:"step-text"},t.title)))}))),s.a.createElement(v.a,{className:"vx-wizard-content ".concat(this.props.tabPaneClass?this.props.tabPaneClass:""),activeTab:this.state.activeStep},this.props.steps.map((function(a,n){return s.a.createElement(h.a,{className:"step-content step-".concat(n,"-content"),key:n,tabId:n},s.a.createElement(t,{className:"form-horizontal",onSubmit:function(t,a,l){e.setState({errors:a,values:l}),e.props.validate||t.preventDefault(),e.handleNextStep(n,e.props.steps.length-1,a),e.handleSubmit(t)}},a.content,e.props.pagination?s.a.createElement("div",{className:"wizard-actions d-flex justify-content-between"},s.a.createElement(b.a,{color:"primary",disabled:0===e.state.activeStep,onClick:function(){return e.handlePreviousStep(n)}},"Prev"),s.a.createElement(b.a,{type:"submit",color:"primary"},e.props.steps.length-1!==n||e.props.finishBtnText?e.props.steps.length-1===n&&e.props.finishBtnText?e.props.finishBtnText:"Next":"Submit")):null))}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.activeStep&&e.activeStep!==t.activeStep){if(!e.validate)return{activeStep:e.activeStep};if(0===t.errors.length&&t.submitted)return{activeStep:e.activeStep}}return null}}]),a}(s.a.Component);f.defaultProps={pagination:!0},t.a=f},2258:function(e,t,a){"use strict";a.r(t);var n=a(13),l=a(14),r=a(16),c=a(15),m=a(0),s=a.n(m),i=a(792),o=a(1118),u=a(1119),p=a(1075),E=a(798),d=a(799),v=a(794),h=a(780),b=a(1120),y=a(1121),f=a(1122),N=a(1123),k=a(800),S=a(268),x=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={steps:[{title:1,content:s.a.createElement(o.a,null,s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," First Name "),s.a.createElement(v.a,{type:"text"}))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Last Name "),s.a.createElement(v.a,{type:"text"}))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Email Name "),s.a.createElement(v.a,{type:"email"}))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," City Name "),s.a.createElement(h.a,{type:"select",name:"select",id:"city"},s.a.createElement("option",null,"New York"),s.a.createElement("option",null,"Chicago"),s.a.createElement("option",null,"San Francisco"),s.a.createElement("option",null,"Boston")))))},{title:2,content:s.a.createElement(o.a,null,s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Proposal Title "),s.a.createElement(v.a,{type:"text"})),s.a.createElement(E.a,null,s.a.createElement(d.a,null," Job Title "),s.a.createElement(v.a,{type:"text"}))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Proposal Title "),s.a.createElement(v.a,{type:"textarea",rows:"5"}))))},{title:3,content:s.a.createElement(o.a,null,s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Event Name "),s.a.createElement(v.a,{type:"text"}))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Event Location "),s.a.createElement(h.a,{type:"select",name:"select",id:"location"},s.a.createElement("option",null,"New York"),s.a.createElement("option",null,"Chicago"),s.a.createElement("option",null,"San Francisco"),s.a.createElement("option",null,"Boston")))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Event Status "),s.a.createElement(h.a,{type:"select",name:"select",id:"status"},s.a.createElement("option",null,"Planning"),s.a.createElement("option",null,"In Process"),s.a.createElement("option",null,"Finished")))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Event Status "),s.a.createElement(d.a,{className:"mr-2"},"Requirements :"),s.a.createElement("div",{className:"stacked-checkbox"},s.a.createElement("div",{className:"d-inline-block mr-2"},s.a.createElement(k.a,{color:"primary",icon:s.a.createElement(S.a,{className:"vx-icon",size:16}),label:"Staffing",defaultChecked:!1})),s.a.createElement("div",{className:"d-inline-block"},s.a.createElement(k.a,{color:"primary",icon:s.a.createElement(S.a,{className:"vx-icon",size:16}),label:"Catering",defaultChecked:!1}))))))}]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.steps;return s.a.createElement(b.a,null,s.a.createElement(y.a,null,s.a.createElement(f.a,null,"Wizard with numbered tabs")),s.a.createElement(N.a,null,s.a.createElement(p.a,{enableAllSteps:!0,onFinish:function(){return alert("submitted")},steps:e})))}}]),a}(s.a.Component),C=a(196),A=a(261),g=a(343),F=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={steps:[{title:s.a.createElement(C.a,{size:20}),content:s.a.createElement(o.a,null,s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," First Name "),s.a.createElement(v.a,{type:"text"}))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Last Name "),s.a.createElement(v.a,{type:"text"}))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Email Name "),s.a.createElement(v.a,{type:"email"}))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," City Name "),s.a.createElement(h.a,{type:"select",name:"select",id:"city"},s.a.createElement("option",null,"New York"),s.a.createElement("option",null,"Chicago"),s.a.createElement("option",null,"San Francisco"),s.a.createElement("option",null,"Boston")))))},{title:s.a.createElement(A.a,{size:20}),content:s.a.createElement(o.a,null,s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Proposal Title "),s.a.createElement(v.a,{type:"text"})),s.a.createElement(E.a,null,s.a.createElement(d.a,null," Job Title "),s.a.createElement(v.a,{type:"text"}))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Proposal Title "),s.a.createElement(v.a,{type:"textarea",rows:"5"}))))},{title:s.a.createElement(g.a,{size:20}),content:s.a.createElement(o.a,null,s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Event Name "),s.a.createElement(v.a,{type:"text"}))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Event Location "),s.a.createElement(h.a,{type:"select",name:"select",id:"location"},s.a.createElement("option",null,"New York"),s.a.createElement("option",null,"Chicago"),s.a.createElement("option",null,"San Francisco"),s.a.createElement("option",null,"Boston")))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Event Status "),s.a.createElement(h.a,{type:"select",name:"select",id:"status"},s.a.createElement("option",null,"Planning"),s.a.createElement("option",null,"In Process"),s.a.createElement("option",null,"Finished")))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(E.a,null,s.a.createElement(d.a,null," Event Status "),s.a.createElement(d.a,{className:"mr-2"},"Requirements :"),s.a.createElement("div",{className:"stacked-checkbox"},s.a.createElement("div",{className:"d-inline-block mr-2"},s.a.createElement(k.a,{color:"primary",icon:s.a.createElement(S.a,{className:"vx-icon",size:16}),label:"Staffing",defaultChecked:!1})),s.a.createElement("div",{className:"d-inline-block"},s.a.createElement(k.a,{color:"primary",icon:s.a.createElement(S.a,{className:"vx-icon",size:16}),label:"Catering",defaultChecked:!1}))))))}]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.steps;return s.a.createElement(b.a,null,s.a.createElement(y.a,null,s.a.createElement(f.a,null,"Wizard with Icons")),s.a.createElement(N.a,null,s.a.createElement(p.a,{steps:e})))}}]),a}(s.a.Component),P=a(1076),j=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={steps:[{title:1,content:s.a.createElement(o.a,null,s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(P.AvGroup,null,s.a.createElement(d.a,null," First Name "),s.a.createElement(P.AvInput,{name:"first-name",type:"text",required:!0}),s.a.createElement(P.AvFeedback,null,"Please enter valid First Name"))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(P.AvGroup,null,s.a.createElement(d.a,null," Last Name "),s.a.createElement(P.AvInput,{name:"last-name",type:"text",required:!0}),s.a.createElement(P.AvFeedback,null,"Please enter valid Last Name"))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(P.AvGroup,null,s.a.createElement(d.a,null," Email "),s.a.createElement(P.AvInput,{name:"last-name",type:"email",required:!0}),s.a.createElement(P.AvFeedback,null,"Please enter valid email"))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(P.AvGroup,null,s.a.createElement(P.AvField,{type:"select",name:"city-name",label:"City Name",required:!0},s.a.createElement("option",{defaultValue:!0},"Select City"),s.a.createElement("option",null,"New York"),s.a.createElement("option",null,"Chicago"),s.a.createElement("option",null,"San Francisco"),s.a.createElement("option",null,"Boston")))))},{title:2,content:s.a.createElement(o.a,null,s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(P.AvGroup,null,s.a.createElement(d.a,null," Proposal Title "),s.a.createElement(P.AvInput,{name:"Proposal-Title",type:"text",required:!0}),s.a.createElement(P.AvFeedback,null,"Please enter valid Title")),s.a.createElement(P.AvGroup,null,s.a.createElement(d.a,null," Job Title "),s.a.createElement(P.AvInput,{name:"Job-Title",type:"text",required:!0}),s.a.createElement(P.AvFeedback,null,"Please enter valid Job Title"))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(P.AvGroup,null,s.a.createElement(d.a,null," Proposal Description "),s.a.createElement(P.AvInput,{name:"description",type:"textarea",rows:"5",required:!0}),s.a.createElement(P.AvFeedback,null,"Please enter valid Description"))))},{title:3,content:s.a.createElement(o.a,null,s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(P.AvGroup,null,s.a.createElement(d.a,null," Event Name "),s.a.createElement(P.AvInput,{name:"Event-Name",type:"text",required:!0}),s.a.createElement(P.AvFeedback,null,"Event Name"))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(P.AvGroup,null,s.a.createElement(P.AvField,{type:"select",name:"city-name",label:"City Name",required:!0},s.a.createElement("option",{defaultValue:!0},"Select City"),s.a.createElement("option",null,"New York"),s.a.createElement("option",null,"Chicago"),s.a.createElement("option",null,"San Francisco"),s.a.createElement("option",null,"Boston")))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(P.AvGroup,null,s.a.createElement(P.AvField,{type:"select",name:"status",label:"Event Status",required:!0},s.a.createElement("option",null,"Planning"),s.a.createElement("option",null,"In Process"),s.a.createElement("option",null,"Finished")))),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(P.AvGroup,null,s.a.createElement(d.a,null," Event Status "),s.a.createElement(d.a,{className:"mr-2"},"Requirements :"),s.a.createElement("div",{className:"stacked-checkbox"},s.a.createElement("div",{className:"d-inline-block mr-2"},s.a.createElement(k.a,{color:"primary",icon:s.a.createElement(S.a,{className:"vx-icon",size:16}),label:"Staffing",defaultChecked:!1})),s.a.createElement("div",{className:"d-inline-block"},s.a.createElement(k.a,{color:"primary",icon:s.a.createElement(S.a,{className:"vx-icon",size:16}),label:"Catering",defaultChecked:!1}))))))}]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.steps;return s.a.createElement(b.a,null,s.a.createElement(y.a,null,s.a.createElement(f.a,null,"Wizard with Validation")),s.a.createElement(N.a,null,s.a.createElement(p.a,{validate:!0,steps:e})))}}]),a}(s.a.Component),O=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{breadCrumbTitle:"Wizard",breadCrumbParent:"Extra Components",breadCrumbActive:"Wizard"}),s.a.createElement(o.a,null,s.a.createElement(u.a,{sm:"12"},s.a.createElement(x,null)),s.a.createElement(u.a,{sm:"12"},s.a.createElement(F,null)),s.a.createElement(u.a,{sm:"12"},s.a.createElement(j,null))))}}]),a}(s.a.Component);t.default=O},800:function(e,t,a){"use strict";var n=a(13),l=a(14),r=a(16),c=a(15),m=a(0),s=a.n(m),i=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},s.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),s.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},s.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),s.a.createElement("span",null,this.props.label))}}]),a}(s.a.Component);t.a=i}}]);
//# sourceMappingURL=144.417486e9.chunk.js.map