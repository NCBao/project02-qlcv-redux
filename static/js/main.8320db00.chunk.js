(this["webpackJsonpproject02-qlcv-redux"]=this["webpackJsonpproject02-qlcv-redux"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),r=n(9),c=n.n(r),o=(n(19),n(4)),i=n(5),l=n(7),u=n(6),d=(n(20),n(10)),p=n(2),j=n(3),b="LIST_ALL",h="GENERATE_TASKS",m="TOGGLE_FORM",O="OPEN_FORM",f="CLOSE_FORM",g="ADD_TASK",k="UPDATE_TASK",v="DELETE_TASK",y="UPDATE_TASK_EDITING",x="RESET_TASK_EDITING",S="CHANGE_STATUS",T="PASS_TASKS",N="CHANGE_TYPE_SORT",E="FILTER_WITH_KEYWORD",C=function(t){return{type:y,task:t}},F=function(t){return{type:T,tasks:t}},w=n(0),A=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).onCloseForm=function(){t.props.onCloseForm(),t.props.onResetTaskEditing()},t.onSave=function(e){e.preventDefault();var n=t.props.taskEditing;if(""===n.id){var s=Object(p.a)({},n);t.props.onAddTask(s)}else{var a=Object(p.a)({},n);t.props.onUpdateTask(a)}t.props.onCloseForm(),t.onClear()},t.onChange=function(e){var n=t.props.taskEditing,s=e.target.name,a="txtName"===s?(s="name",e.target.value):(s="status",e.target.checked),r=Object(p.a)(Object(p.a)({},n),{},Object(d.a)({},s,a));t.props.onUpdateTaskEditing(r)},t.onClear=function(){var e=t.props.taskEditing,n=Object(p.a)(Object(p.a)({},e),{},{name:"",status:!1});t.props.onUpdateTaskEditing(n)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.taskEditing;return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:""===t.id?"panel panel-primary":"panel panel-warning",children:[Object(w.jsx)("div",{className:"panel-heading",children:Object(w.jsxs)("h3",{className:"panel-title",children:[""===t.id?"Add work":"Edit work",Object(w.jsx)("span",{className:"pull-right cursor-pointer",onClick:this.onCloseForm,children:Object(w.jsx)("i",{className:"glyphicon glyphicon-remove-sign"})})]})}),Object(w.jsx)("div",{className:"panel-body",children:Object(w.jsxs)("form",{children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Name:"}),Object(w.jsx)("input",{type:"text",className:"form-control",name:"txtName",onChange:this.onChange,value:t.name})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Status:"}),Object(w.jsx)("div",{className:"checkbox",children:Object(w.jsxs)("label",{className:"user-select-none",children:[Object(w.jsx)("input",{type:"checkbox",name:"chkStatus",onChange:this.onChange,checked:t.status}),"Active"]})})]}),Object(w.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:this.onSave,children:"Save"}),Object(w.jsx)("button",{type:"reset",className:"btn btn-warning mg-l-15",onClick:this.onClear,children:"Reset"})]})})]})})}}]),n}(s.Component),D=Object(j.b)((function(t){return{taskEditing:t.taskEditing}}),(function(t,e){return{onCloseForm:function(){t({type:f})},onAddTask:function(e){t(function(t){return{type:g,task:t}}(e))},onUpdateTaskEditing:function(e){t(C(e))},onResetTaskEditing:function(){t({type:x})},onUpdateTask:function(e){t(function(t){return{type:k,task:t}}(e))}}}))(A),_=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).findTask=function(e){t.props.tasks.forEach((function(n,s){n.id===e&&t.props.onUpdateTaskEditing(n)}))},t.onEdit=function(e){t.findTask(e),t.props.onOpenForm()},t.onDelete=function(e){t.props.onDeleteTask(e),setTimeout((function(){t.props.onPassTasksToFilter(t.props.tasks)}),10)},t.onChangeStatus=function(e){t.props.onChangeStatus(e)},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onPassTasksToFilter(this.props.tasks)}},{key:"render",value:function(){var t=this,e=this.props.tasksFilter.tasks;if(0!==e.length){var n=e.map((function(e,n){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{className:"center wd-5",children:n+1}),Object(w.jsx)("td",{className:"",children:e.name}),Object(w.jsx)("td",{className:"center wd-6",children:Object(w.jsx)("label",{className:e.status?"cursor-pointer label label-success":"cursor-pointer label label-danger",onClick:function(){return t.onChangeStatus(e.id)},children:e.status?"Active":"Deactive"})}),Object(w.jsxs)("td",{className:"center wd-18",children:[Object(w.jsx)("button",{className:"btn btn-primary",onClick:function(){return t.onEdit(e.id)},children:"Edit"}),Object(w.jsx)("button",{className:"btn btn-danger mg-l-15",onClick:function(){return t.onDelete(e.id)},children:"Delete"})]})]},n)}));return Object(w.jsx)("div",{children:Object(w.jsxs)("table",{className:"table table-bordered table-hover",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{className:"center",children:"STT"}),Object(w.jsx)("th",{className:"center",children:"Name"}),Object(w.jsx)("th",{className:"center",children:"Status"}),Object(w.jsx)("th",{className:"center",children:"Action"})]})}),Object(w.jsx)("tbody",{children:n})]})})}return Object(w.jsx)("div",{children:Object(w.jsx)("p",{children:"We don't have any tasks to show"})})}}]),n}(s.Component),I=Object(j.b)((function(t){return{tasks:t.tasks,tasksFilter:t.tasksFilter}}),(function(t,e){return{onOpenForm:function(){t({type:O})},onUpdateTaskEditing:function(e){t(C(e))},onDeleteTask:function(e){t(function(t){return{type:v,id:t}}(e))},onChangeStatus:function(e){t(function(t){return{type:S,id:t}}(e))},onPassTasksToFilter:function(e){t(F(e))}}}))(_),J=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).onGenerateData=function(){t.props.onGenerateTasks(),setTimeout((function(){t.props.onPassTasksToFilter(t.props.tasks)}),10)},t.onToggleForm=function(){t.props.onToggleForm()},t.onSearch=function(){var e=document.getElementById("search-box").value;t.props.onSearch(t.props.tasks,e)},t.onSort=function(e){t.props.onChangeTypeSort(e.target.value)},t.onEnter=function(e){13===e.which&&t.onSearch()},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){t.props.onChangeTypeSort(JSON.stringify({by:"name",value:1}))}),10)}},{key:"render",value:function(){return Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("button",{className:"btn btn-primary",onClick:this.onToggleForm,children:"Add"}),Object(w.jsx)("button",{className:"btn btn-success mg-l-15",onClick:this.onGenerateData,children:"Generate data"}),Object(w.jsxs)("div",{className:"wd-50 dp-inline mg-l-15",children:[Object(w.jsx)("input",{id:"search-box",className:"form-control dp-inline wd-80",type:"text",placeholder:"Search box",onKeyPress:this.onEnter}),Object(w.jsx)("button",{className:"btn btn-primary",onClick:this.onSearch,children:"Search"})]}),Object(w.jsxs)("div",{className:"dp-inline mg-l-15 min-200",children:[Object(w.jsx)("label",{children:"Sort:\xa0"}),Object(w.jsxs)("select",{className:"form-control max-160 dp-inline",onChange:this.onSort,children:[Object(w.jsx)("option",{value:JSON.stringify({by:"name",value:1}),children:"A-Z"}),Object(w.jsx)("option",{value:JSON.stringify({by:"name",value:2}),children:"Z-A"}),Object(w.jsx)("option",{value:JSON.stringify({by:"status",value:1}),children:"Active - Deactive"}),Object(w.jsx)("option",{value:JSON.stringify({by:"status",value:2}),children:"Deactive - Active"})]})]})]})}}]),n}(s.Component),R=Object(j.b)((function(t){return{tasks:t.tasks,tasksFilter:t.tasksFilter}}),(function(t,e){return{onGenerateTasks:function(){t({type:h})},onToggleForm:function(){t({type:m})},onChangeTypeSort:function(e){t(function(t){return{type:N,typeSort:t}}(e))},onPassTasksToFilter:function(e){t(F(e))},onSearch:function(e,n){t(function(t,e){return{type:E,tasks:t,keyword:e}}(e,n))}}}))(J),L=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.isDisplayForm,e=t?Object(w.jsx)(D,{}):"";return Object(w.jsxs)("div",{className:"mg-30 row",id:"wrapper",children:[Object(w.jsx)("p",{className:"title",children:"project 02: qu\u1ea3n l\xfd c\xf4ng vi\u1ec7c"}),Object(w.jsx)("div",{className:t?"col-xs-4 col-sm-4 col-md-4 col-lg-4":"",children:e}),Object(w.jsxs)("div",{className:t?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"",children:[Object(w.jsx)(R,{}),Object(w.jsx)(I,{})]})]})}}]),n}(s.Component),P=Object(j.b)((function(t){return{isDisplayForm:t.isDisplayForm}}),(function(t,e){return{}}))(L),U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),r(t),c(t)}))},G=n(11),K=n(8),M=function(){return Math.floor(1+65536*Math.random()).toString(16).substring(1)},H=function(){return M()+M()+"-"+M()+"-"+M()+M()+M()+"-"+M()},X=function(t,e){var n=-1;return t.forEach((function(t,s){t.id===e&&(n=s)})),n},q=function(){var t=[{id:H(),name:"H\u1ecdc ReactJS",status:!0},{id:H(),name:"Ng\u1ee7",status:!0},{id:H(),name:"Ch\u01a1i game",status:!1},{id:H(),name:"H\u1ecdc NodeJS",status:!0}];return localStorage.setItem("tasks",JSON.stringify(t)),t},B=localStorage&&localStorage.tasks?JSON.parse(localStorage.getItem("tasks")):[],W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return t;case h:return t=q();case g:return e.task.id=H(),t.push(e.task),localStorage.setItem("tasks",JSON.stringify(t)),Object(K.a)(t);case k:var n=X(t,e.task.id);return t[n]=e.task,localStorage.setItem("tasks",JSON.stringify(t)),Object(K.a)(t);case v:var s=X(t,e.id);return t.splice(s,1),localStorage.setItem("tasks",JSON.stringify(t)),Object(K.a)(t);case S:var a=X(t,e.id);return t[a].status=!t[a].status,localStorage.setItem("tasks",JSON.stringify(t)),Object(K.a)(t);default:return t}},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return t=!t;case O:return t=!0;case f:return t=!1;default:return t}},V={id:"",name:"",status:!1},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return t=Object(p.a)(Object(p.a)({},t),{},{id:e.task.id,name:e.task.name,status:e.task.status});case x:return t={id:"",name:"",status:!1};default:return t}},z=function(t,e){var n=e.by,s=e.value;return"name"===n&&1===s?(t.sort((function(t,e){return t.name.localeCompare(e.name)})),t):"name"===n&&2===s?(t.sort((function(t,e){return e.name.localeCompare(t.name)})),t):"status"===n&&1===s?(t.sort((function(t,e){return!0===t.status&&!0===e.status?0:!0===t.status&&!1===e.status?-1:1})),t):"status"===n&&2===s?(t.sort((function(t,e){return!0===e.status&&!0===t.status?0:!0===e.status&&!1===t.status?-1:1})),t):t},Q=function(t,e){if(0===e.length)return t;var n=[];return t.forEach((function(t,s){$(t.name).toLowerCase().includes(e.toLowerCase())&&n.push(t)})),n},$=function(t){return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g,"A")).replace(/\xc8|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g,"E")).replace(/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g,"I")).replace(/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g,"O")).replace(/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g,"U")).replace(/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g,"Y")).replace(/\u0110/g,"D")},tt={keyword:"",tasks:[],sort:{by:"name",value:1}},et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T:return t.tasks=e.tasks,Object(p.a)({},t);case N:var n=JSON.parse(e.typeSort),s=z(t.tasks,n);return t=Object(p.a)(Object(p.a)({},t),{},{tasks:s,sort:n});case E:var a=Q(e.tasks,e.keyword);return t=Object(p.a)(Object(p.a)({},t),{},{keyword:e.keyword,tasks:a});default:return t}},nt=Object(G.a)({tasks:W,isDisplayForm:Y,taskEditing:Z,tasksFilter:et}),st=Object(G.b)(nt,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(j.a,{store:st,children:Object(w.jsx)(P,{})})}),document.getElementById("root")),U()}},[[26,1,2]]]);
//# sourceMappingURL=main.8320db00.chunk.js.map