(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[107],{1212:function(e,t,a){e.exports=function(){"use strict";function e(e,t){if(e)for(var a in e)({}).hasOwnProperty.call(e,a)&&t(a,e[a])}var t={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function a(e){return e&&t[e]}function n(t){var a="";return e(t,(function(e,t){t&&(a+="".concat(e,":").concat(t,";"))})),a}function r(e,t){var a={};return e.COLOR[t]&&(a.COLOR=e.COLOR[t]),e.BGCOLOR[t]&&(a.BGCOLOR=e.BGCOLOR[t]),e.FONTSIZE[t]&&(a.FONTSIZE=e.FONTSIZE[t]),e.FONTFAMILY[t]&&(a.FONTFAMILY=e.FONTFAMILY[t]),e.UNDERLINE[t]&&(a.UNDERLINE=!0),e.ITALIC[t]&&(a.ITALIC=!0),e.BOLD[t]&&(a.BOLD=!0),e.STRIKETHROUGH[t]&&(a.STRIKETHROUGH=!0),e.CODE[t]&&(a.CODE=!0),e.SUBSCRIPT[t]&&(a.SUBSCRIPT=!0),e.SUPERSCRIPT[t]&&(a.SUPERSCRIPT=!0),a}function o(e,t,a){var n=!0;return a>0&&a<e.length?t.forEach((function(t){n=n&&e[t][a]===e[t][a-1]})):n=!1,n}function c(e,t,a,n){var r=e[t];if("function"===typeof n){var o=n(r,a);if(o)return o}if("MENTION"===r.type)return'<a href="'.concat(r.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(r.data.value,'">').concat(a,"</a>");if("LINK"===r.type){var c=r.data.targetOption||"_self";return'<a href="'.concat(r.data.url,'" target="').concat(c,'">').concat(a,"</a>")}if("IMAGE"===r.type){var l=r.data.alignment;return l&&l.length?'<div style="text-align:'.concat(l,';"><img src="').concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/></div>'):'<img src="'.concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/>')}return"EMBEDDED_LINK"===r.type?'<iframe width="'.concat(r.data.width,'" height="').concat(r.data.height,'" src="').concat(r.data.src,'" frameBorder="0"></iframe>'):a}function l(e,t,a,n){var c=[],l=Array.from(e.text);if(l.length>0)for(var s,i=function(e){var t=e.text,a=e.inlineStyleRanges,n={BOLD:new Array(t.length),ITALIC:new Array(t.length),UNDERLINE:new Array(t.length),STRIKETHROUGH:new Array(t.length),CODE:new Array(t.length),SUPERSCRIPT:new Array(t.length),SUBSCRIPT:new Array(t.length),COLOR:new Array(t.length),BGCOLOR:new Array(t.length),FONTSIZE:new Array(t.length),FONTFAMILY:new Array(t.length),length:t.length};return a&&a.length>0&&a.forEach((function(e){for(var t=e.offset,a=t+e.length,r=t;r<a;r+=1)0===e.style.indexOf("color-")?n.COLOR[r]=e.style.substring(6):0===e.style.indexOf("bgcolor-")?n.BGCOLOR[r]=e.style.substring(8):0===e.style.indexOf("fontsize-")?n.FONTSIZE[r]=e.style.substring(9):0===e.style.indexOf("fontfamily-")?n.FONTFAMILY[r]=e.style.substring(11):n[e.style]&&(n[e.style][r]=!0)})),n}(e),u=a;u<n;u+=1)u!==a&&o(i,t,u)?(s.text.push(l[u]),s.end=u+1):(s={styles:r(i,u),text:[l[u]],start:u,end:u+1},c.push(s));return c}function s(t,a){var n=l(t,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],a.start,a.end),r="";return n.forEach((function(t){r+=function(t){var a=t.styles,n=function(e){return e&&e.length>0?e.map((function(e){switch(e){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return e}})).join(""):""}(t.text);return e(a,(function(e,t){n=function(e,t){return"BOLD"===e?"<strong>".concat(t,"</strong>"):"ITALIC"===e?"<em>".concat(t,"</em>"):"UNDERLINE"===e?"<ins>".concat(t,"</ins>"):"STRIKETHROUGH"===e?"<del>".concat(t,"</del>"):"CODE"===e?"<code>".concat(t,"</code>"):"SUPERSCRIPT"===e?"<sup>".concat(t,"</sup>"):"SUBSCRIPT"===e?"<sub>".concat(t,"</sub>"):t}(e,n)})),n}(t)})),r=function(e,t){if(e&&(e.COLOR||e.BGCOLOR||e.FONTSIZE||e.FONTFAMILY)){var a='style="';return e.COLOR&&(a+="color: ".concat(e.COLOR,";")),e.BGCOLOR&&(a+="background-color: ".concat(e.BGCOLOR,";")),e.FONTSIZE&&(a+="font-size: ".concat(e.FONTSIZE).concat(/^\d+$/.test(e.FONTSIZE)?"px":"",";")),e.FONTFAMILY&&(a+="font-family: ".concat(e.FONTFAMILY,";")),"<span ".concat(a+='"',">").concat(t,"</span>")}return t}(a.styles,r)}function i(e,t,a,n){var r=[],o=function(e,t){var a=[],n=0,r=e.entityRanges.map((function(e){return{offset:e.offset,length:e.length,key:e.key,type:"ENTITY"}}));return(r=(r=r.concat(function(e,t){var a=[];if(t)for(var n=0,r=0,o=e,c=t.trigger||"#",l=t.separator||" ";o.length>0&&r>=0;)if(o[0]===c?(r=0,n=0,o=o.substr(c.length)):(r=o.indexOf(l+c))>=0&&(o=o.substr(r+(l+c).length),n+=r+l.length),r>=0){var s=o.indexOf(l)>=0?o.indexOf(l):o.length,i=o.substr(0,s);i&&i.length>0&&a.push({offset:n,length:i.length+c.length,type:"HASHTAG"}),n+=c.length}return a}(e.text,t))).sort((function(e,t){return e.offset-t.offset}))).forEach((function(e){e.offset>n&&a.push({start:n,end:e.offset}),a.push({start:e.offset,end:e.offset+e.length,entityKey:e.key,type:e.type}),n=e.offset+e.length})),n<e.text.length&&a.push({start:n,end:e.text.length}),a}(e,a);return o.forEach((function(a,i){var u=function(e,t,a,n){var r=[];l(e,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],a.start,a.end).forEach((function(t){r.push(s(e,t))}));var o=r.join("");return"ENTITY"===a.type?void 0!==a.entityKey&&null!==a.entityKey&&(o=c(t,a.entityKey,o,n)):"HASHTAG"===a.type&&(o='<a href="'.concat(o,'" class="wysiwyg-hashtag">').concat(o,"</a>")),o}(e,t,a,n);0===i&&(u=function(e){if(e){for(var t=e,a=0;a<t.length&&" "===e[a];a+=1)t=t.replace(" ","&nbsp;");return t}return e}(u)),i===o.length-1&&(u=function(e){if(e){for(var t=e,a=t.length-1;a>=0&&" "===t[a];a-=1)t="".concat(t.substring(0,a),"&nbsp;").concat(t.substring(a+1));return t}return e}(u)),r.push(u)})),r.join("")}function u(e,t,r,o,c){var l,s=[],d=[];return e.forEach((function(e){var h=!1;if(l?l.type!==e.type?(s.push("</".concat(a(l.type),">\n")),s.push("<".concat(a(e.type),">\n"))):l.depth===e.depth?d&&d.length>0&&(s.push(u(d,t,r,o,c)),d=[]):(h=!0,d.push(e)):s.push("<".concat(a(e.type),">\n")),!h){s.push("<li");var f=n(e.data);f&&s.push(' style="'.concat(f,'"')),o&&s.push(' dir = "auto"'),s.push(">"),s.push(i(e,t,r,c)),s.push("</li>\n"),l=e}})),d&&d.length>0&&s.push(u(d,t,r,o,c)),s.push("</".concat(a(l.type),">\n")),s.join("")}return function(e,t,r,o){var l=[];if(e){var s=e.blocks,d=e.entityMap;if(s&&s.length>0){var h=[];if(s.forEach((function(e){if("unordered-list-item"===(p=e.type)||"ordered-list-item"===p)h.push(e);else{if(h.length>0){var s=u(h,d,t,o);l.push(s),h=[]}var f=function(e,t,r,o,l){var s=[];if(function(e){return e.entityRanges.length>0&&(void 0===(t=e.text)||null===t||0===t.length||0===t.trim().length||"atomic"===e.type);var t}(e))s.push(c(t,e.entityRanges[0].key,void 0,l));else{var u=a(e.type);if(u){s.push("<".concat(u));var d=n(e.data);d&&s.push(' style="'.concat(d,'"')),o&&s.push(' dir = "auto"'),s.push(">"),s.push(i(e,t,r,l)),s.push("</".concat(u,">"))}}return s.push("\n"),s.join("")}(e,d,t,r,o);l.push(f)}var p})),h.length>0){var f=u(h,d,t,r,o);l.push(f),h=[]}}}return l.join("")}}()},2105:function(e,t,a){"use strict";a.r(t),a.d(t,"EditCourse",(function(){return A}));var n=a(76),r=a.n(n),o=a(127),c=a(831),l=a(41),s=a(13),i=a(14),u=a(16),d=a(15),h=a(0),f=a.n(h),p=a(1120),m=a(1118),g=a(1119),y=a(182),E=a(1123),v=a(802),O=a(798),b=a(799),C=a(794),S=a(780),T=a(951),N=a(956),I=a(1212),R=a.n(I),L=(a(1053),a(932),a(21)),w=a(177),F=a(873),_=a.n(F),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onEditorStateChange=function(e){n.setState({editorState:e,long_desc:R()(Object(T.convertToRaw)(e.getCurrentContent()))}),console.log(n.state.long_desc)},n.onChangeHandler=function(e){n.setState({selectedFile:e.target.files[0]}),n.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},n.changeHandler=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("course_title",n.state.course_title),t.append("desc",n.state.desc),t.append("long_desc",n.state.long_desc),t.append("teacher",n.state.teacher),t.append("category_id",n.state.category_id),null!==n.state.selectedFile&&t.append("course_image",n.state.selectedFile,n.state.selectedName);var a,r=Object(c.a)(t.keys());try{for(r.s();!(a=r.n()).done;){var o=a.value;console.log(o)}}catch(d){r.e(d)}finally{r.f()}var l,s=Object(c.a)(t.values());try{for(s.s();!(l=s.n()).done;){var i=l.value;console.log(i)}}catch(d){s.e(d)}finally{s.f()}var u=n.props.ma.params.id;w.a.post("/updatecourse/".concat(u),t).then((function(e){console.log(e),_()("Success!","Submitted SuccessFull!","success")})).catch((function(e){console.log(e.response),_()("Error!","Error Received","error")})),n.state.editorState.getCurrentContent().getPlainText()},n.state={course_title:"",desc:"",long_desc:"",teacher:"",course_type:"",category_id:"",course_image:"",editorState:T.EditorState.createEmpty(),selectedFile:null,selectedName:"",teacherL:[],categ:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t,a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.a.get("/approved_staff").then((function(e){console.log(e),a.setState({teacherL:e.data.data})})).catch((function(e){console.log(e)})),w.a.get("/allCat").then((function(e){console.log(e),a.setState({categ:e.data.data})})).catch((function(e){console.log(e)})),t=this.props.match.params.id,w.a.get("/viewonecoursep/".concat(t)).then((function(e){console.log(e.data.data),a.setState({course_title:e.data.data.course_title,desc:e.data.data.desc,long_desc:e.data.data.long_desc,course_type:e.data.data.course_type,course_image:e.data.data.course_image})})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return f.a.createElement("div",null,f.a.createElement(p.a,null,f.a.createElement(m.a,{className:"m-2"},f.a.createElement(g.a,null,f.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Course")),f.a.createElement(g.a,null,f.a.createElement(y.a,{className:" btn btn-danger float-right",onClick:function(){return L.a.push("/app/course/courseList")}},"Back"))),f.a.createElement(E.a,null,f.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},f.a.createElement(m.a,{className:"mb-2"},f.a.createElement(g.a,{lg:"6",md:"6"},f.a.createElement(O.a,null,f.a.createElement(b.a,null,"Course Title"),f.a.createElement(C.a,{type:"text",placeholder:"Course Name",name:"course_title",value:this.state.course_title,onChange:this.changeHandler}))),f.a.createElement(g.a,{lg:"6",md:"6"},f.a.createElement(O.a,null,f.a.createElement(b.a,null,"Teacher Name"),f.a.createElement(S.a,{type:"select",placeholder:"Teacher",name:"teacher",value:this.state.teacher,onChange:this.changeHandler},f.a.createElement("option",null,"Select Teacher...."),null===(e=this.state.teacherL)||void 0===e?void 0:e.map((function(e){return f.a.createElement("option",{key:e._id,value:e._id},e.fullname)}))))),f.a.createElement(g.a,{lg:"6",md:"6"},f.a.createElement(O.a,null,f.a.createElement(b.a,null,"Course Type"),f.a.createElement(S.a,{type:"select",name:"course_type",value:this.state.course_type,onChange:this.changeHandler},f.a.createElement("option",null,"Select Course Type..."),f.a.createElement("option",null,"PAID"),f.a.createElement("option",null,"FREE")))),f.a.createElement(g.a,{lg:"6",md:"6"},f.a.createElement(O.a,null,f.a.createElement(b.a,null,"Category"),f.a.createElement(S.a,{type:"select",placeholder:"Category",name:"category_id",value:this.state.category_id,onChange:this.changeHandler},f.a.createElement("option",null,"Select Category..."),this.state.categ.map((function(e){return f.a.createElement("option",{key:e._id,value:e._id},e.catName)}))))),f.a.createElement(g.a,{lg:"6",md:"6"},f.a.createElement(O.a,null,f.a.createElement(b.a,null,"Description"),f.a.createElement(C.a,{type:"textarea",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler}))),f.a.createElement(g.a,{lg:"6",md:"6"},f.a.createElement(O.a,null,f.a.createElement(b.a,null,"Long Description"),f.a.createElement(N.Editor,{required:!0,toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),f.a.createElement(g.a,{lg:"6",md:"6"},f.a.createElement(O.a,null,f.a.createElement(b.a,null,"Course Image"),f.a.createElement(S.a,{type:"file",onChange:this.onChangeHandler})))),f.a.createElement(m.a,null,f.a.createElement(y.a.Ripple,{color:"primary",type:"submit",className:"ml-2 mb-1"},"Update"))))))}}]),a}(h.Component);t.default=A},798:function(e,t,a){"use strict";var n=a(5),r=a(9),o=a(0),c=a.n(o),l=a(1),s=a.n(l),i=a(4),u=a.n(i),d=a(3),h={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:d.tagPropType,className:s.a.string,cssModule:s.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.row,l=e.disabled,s=e.check,i=e.inline,h=e.tag,f=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(d.mapToCssModules)(u()(t,!!o&&"row",s?"form-check":"form-group",!(!s||!i)&&"form-check-inline",!(!s||!l)&&"disabled"),a);return"fieldset"===h&&(f.disabled=l),c.a.createElement(h,Object(n.a)({},f,{className:p}))};f.propTypes=h,f.defaultProps={tag:"div"},t.a=f},831:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(99);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}},932:function(e,t,a){}}]);
//# sourceMappingURL=107.ed858109.chunk.js.map