(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{11:function(t,e,a){t.exports={header_buttons:"Header_Buttons_header_buttons__p3d-1",header_buttons__item:"Header_Buttons_header_buttons__item__3KJYA","hvr-bob-float":"Header_Buttons_hvr-bob-float__3OGEw","hvr-bob":"Header_Buttons_hvr-bob__1MoXB"}},16:function(t,e,a){t.exports={root_wrap:"Root_root_wrap__1C1Ue"}},21:function(t,e,a){t.exports=a(33)},26:function(t,e,a){},27:function(t,e,a){},33:function(t,e,a){"use strict";a.r(e);var o=a(0),s=a.n(o),n=a(15),i=a.n(n),r=(a(26),a(20)),_=a(19),l=a(2),c=a(8),d=a(4),u=a(3),k=a(5),p=(a(27),function(t){var e=JSON.stringify(t);localStorage.setItem("our-state",e)}),h=(s.a.Component,function(t){function e(){var t,a;Object(l.a)(this,e);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(a=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(n)))).state={editMode:!1},a.onIsDoneChanges=function(t){a.props.changeStatus(a.props.task.id,t.currentTarget.checked)},a.onTitleChange=function(t){a.props.changeTitle(a.props.task.id,t.currentTarget.value)},a.activeEditorMode=function(){a.setState({editMode:!0})},a.deactivateEditMode=function(){a.setState({editMode:!1})},a.render=function(){var t=a.props.task.isDone?"todoList-task done":"todoList-task";return s.a.createElement("div",{className:t},s.a.createElement("input",{type:"checkbox",checked:a.props.task.isDone,onChange:a.onIsDoneChanges}),a.state.editMode?s.a.createElement("input",{onBlur:a.deactivateEditMode,onChange:a.onTitleChange,value:a.props.task.title,autoFocus:!0}):s.a.createElement("span",{onClick:a.activeEditorMode}," ",a.props.task.id,a.props.task.title,", ",a.props.task.priority))},a}return Object(k.a)(e,t),e}(s.a.Component)),T=(s.a.Component,s.a.Component,a(10)),m=a(18),g=a(16),b=a.n(g),f=a(7),v=a.n(f),C=a(17),E=a(11),y=a.n(E),w=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).onAllFilterClick=function(){a.props.changeFilter("All")},a.onCompletedFilterClick=function(){a.props.changeFilter("Completed")},a.onActiveFilterClick=function(){a.props.changeFilter("Active")},a}return Object(k.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:y.a.header_buttons},s.a.createElement("button",{className:y.a.header_buttons__item,onClick:this.onAllFilterClick},"All"),s.a.createElement("button",{className:y.a.header_buttons__item,onClick:this.onCompletedFilterClick},"Done"),s.a.createElement("button",{className:y.a.header_buttons__item,onClick:this.onActiveFilterClick},"Active"))}}]),e}(s.a.Component),N=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).state={isHidden:!1},a.onShowFiltersClick=function(){a.setState({isHidden:a.isHidden})},a.onHideFiltersClick=function(){a.setState({isHidden:!a.isHidden})},a}return Object(k.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:v.a.header},s.a.createElement("div",{className:v.a.header_title},"New Tasks"),s.a.createElement("div",{className:v.a.header_logo},s.a.createElement("div",{className:v.a.header_logo__icon},s.a.createElement(C.a,{icon:["fab","sith"],spin:!0,size:"lg"})),s.a.createElement("div",{className:v.a.header_logo__hide},this.state.isHidden&&s.a.createElement("button",{className:v.a.header_logo__button,onClick:this.onShowFiltersClick},"show"),!this.state.isHidden&&s.a.createElement("button",{className:v.a.header_logo__button,onClick:this.onHideFiltersClick},"hide"))),!this.state.isHidden&&s.a.createElement(w,{changeFilter:this.props.changeFilter}))}}]),e}(s.a.Component),O=a(9),j=a.n(O),S=a(6),F=a.n(S),q=a(12),H=a.n(q),A=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).state={editMode:!1},a.onIsDoneChanges=function(t){a.props.changeStatus(a.props.task.id,t.currentTarget.checked)},a.onTitleChange=function(t){a.props.changeTitle(a.props.task.id,t.currentTarget.value)},a.onChangePriorityHigh=function(){a.props.changePriority(a.props.task.id,"high")},a.onChangePriorityMedium=function(){a.props.changePriority(a.props.task.id,"medium")},a.onChangePriorityLow=function(){a.props.changePriority(a.props.task.id,"low")},a.activeEditorMode=function(){a.setState({editMode:!0})},a.deactivateEditMode=function(){a.setState({editMode:!1})},a.onDeleteTask=function(){a.props.deleteTask(a.props.task.id)},a.render=function(){return s.a.createElement("div",{className:F.a.tasks_item,id:a.props.id,"data-priority":a.props.priority},s.a.createElement("div",{className:F.a.tasks_title__wrap},a.state.editMode?s.a.createElement("input",{className:F.a.input_onblur,onBlur:a.deactivateEditMode,onChange:a.onTitleChange,value:a.props.task.title,autoFocus:!0}):s.a.createElement("div",{className:F.a.task_title,onClick:a.activeEditorMode},a.props.task.title),s.a.createElement("div",{className:"high"===a.props.priority?H()(F.a.liquid,F.a.liquid_red):"medium"===a.props.priority?H()(F.a.liquid,F.a.liquid_green):H()(F.a.liquid,F.a.liquid_yellow)})),s.a.createElement("div",{className:F.a.task_buttons},s.a.createElement("button",{className:F.a.task_button__red,onClick:a.onChangePriorityHigh},"high"),s.a.createElement("button",{className:F.a.task_button__green,onClick:a.onChangePriorityMedium},"medium"),s.a.createElement("button",{className:F.a.task_button__yellow,onClick:a.onChangePriorityLow},"low")),s.a.createElement("div",{className:F.a.task_done},s.a.createElement("input",{type:"checkbox",checked:a.props.task.isDone,onChange:a.onIsDoneChanges})),s.a.createElement("div",{className:F.a.task_delete},s.a.createElement("button",{onClick:a.onDeleteTask},"del")))},a}return Object(k.a)(e,t),e}(s.a.Component),M=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).state={error:!1,title:""},a.onAddTaskClick=function(){var t=a.state.title;a.setState({title:""}),""===t?a.setState({error:!0}):(a.setState({error:!1}),a.props.addTask(t))},a.onAddTaskKeyPress=function(t){if("Enter"===t.key){var e=a.state.title;a.setState({title:""}),""===e?a.setState({error:!0}):(a.setState({error:!1}),a.props.addTask(e))}},a.onTitleChange=function(t){a.setState({error:!1,title:t.currentTarget.value})},a.errorClass=j.a.inputError,a.render=function(){var t=a.props.tasks.map((function(t){return s.a.createElement(A,{changeStatus:a.props.changeStatus,key:t.id,id:t.id,priority:t.priority,task:t,changeTitle:a.props.changeTitle,deleteTask:a.props.deleteTask,changePriority:a.props.changePriority})}));return s.a.createElement("div",{className:j.a.tasks_wrap},s.a.createElement("div",{className:j.a.tasks_wrap__input},s.a.createElement("div",{className:j.a.tasks_input},s.a.createElement("input",{className:a.state.error?a.errorClass:"",value:a.state.title,type:"text",placeholder:"Enter task name",onKeyPress:a.onAddTaskKeyPress,onChange:a.onTitleChange}),s.a.createElement("button",{className:j.a.tasks_button,onClick:a.onAddTaskClick},"add"))),t)},a}return Object(k.a)(e,t),e}(s.a.Component),P=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).render=function(){return s.a.createElement("div",{className:b.a.root_wrap},s.a.createElement(N,{state:a.props.state,changeFilter:a.props.changeFilter}),s.a.createElement(M,{addTask:a.props.addTask,tasks:a.props.tasks,deleteTask:a.props.deleteTask,changeTitle:a.props.changeTitle,changeStatus:a.props.changeStatus,state:a.props.state,changePriority:a.props.changePriority}))},a}return Object(k.a)(e,t),e}(s.a.Component);T.b.add(m.a);var D=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).state={tasks:[{id:0,title:"Example1",isDone:!1,priority:"high"},{id:1,title:"Example2",isDone:!1,priority:"low"},{id:2,title:"Example3",isDone:!0,priority:"medium"}],filterValue:"All",nextTaskId:3},a.addTask=function(t){var e={id:a.state.nextTaskId,title:t,isDone:!1,priority:"low"},o=[].concat(Object(_.a)(a.state.tasks),[e]);a.setState({tasks:o,nextTaskId:a.state.nextTaskId+1},(function(){p(a.state)}))},a.changeFilter=function(t){a.setState({filterValue:t},(function(){p(a.state)}))},a.changeTask=function(t,e){var o=a.state.tasks.map((function(a){return a.id===t?Object(r.a)({},a,{},e):a}));a.setState({tasks:o},(function(){p(a.state)}))},a.changeStatus=function(t,e){a.changeTask(t,{isDone:e})},a.changeTitle=function(t,e){a.changeTask(t,{title:e})},a.changePriority=function(t,e){a.changeTask(t,{priority:e})},a.deleteTask=function(t){var e=a.state.tasks.filter((function(e){return e.id!==t}));a.setState({tasks:e},(function(){p(a.state)}))},a.render=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"todoList"},s.a.createElement(P,{state:a.state,addTask:a.addTask,changeFilter:a.changeFilter,changeTitle:a.changeTitle,changeStatus:a.changeStatus,deleteTask:a.deleteTask,changePriority:a.changePriority,tasks:a.state.tasks.filter((function(t){return"Active"===a.state.filterValue&&!1===t.isDone||"Completed"===a.state.filterValue&&!0===t.isDone||"All"===a.state.filterValue}))})))},a}return Object(k.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=function(){var t,e=localStorage.getItem("our-state");return null!==e&&(t=JSON.parse(e)),t}();t?this.setState(t):this.setState(this.state)}}]),e}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},6:function(t,e,a){t.exports={tasks_item:"Todo_Task_tasks_item__37cyi",task_title:"Todo_Task_task_title__1AWQL",tasks_title__wrap:"Todo_Task_tasks_title__wrap__3y0J7",liquid:"Todo_Task_liquid__3D62l",liquid_red:"Todo_Task_liquid_red__1kA1f",liquid_green:"Todo_Task_liquid_green__7QcuZ",liquid_yellow:"Todo_Task_liquid_yellow__YnX1O",float:"Todo_Task_float__3KOPi",task_buttons:"Todo_Task_task_buttons__NSYQQ",task_button__red:"Todo_Task_task_button__red__P3C9B",task_button__green:"Todo_Task_task_button__green__1yz8E",task_button__yellow:"Todo_Task_task_button__yellow__1Bl1N","hvr-push":"Todo_Task_hvr-push__1_OCu",task_done:"Todo_Task_task_done__1FHO1",task_delete:"Todo_Task_task_delete__1BZgk",input_onblur:"Todo_Task_input_onblur__2zA1T"}},7:function(t,e,a){t.exports={header:"Todo_Header_header__2FXaE",header_title:"Todo_Header_header_title__GatqN",header_logo:"Todo_Header_header_logo__1dGfm",header_logo__button:"Todo_Header_header_logo__button__1XpGI"}},9:function(t,e,a){t.exports={tasks_wrap:"Todo_Tasks_tasks_wrap__3zIuJ",tasks_wrap__input:"Todo_Tasks_tasks_wrap__input__26o5s",tasks_input:"Todo_Tasks_tasks_input__3Cbo6",inputError:"Todo_Tasks_inputError__3IHks",tasks_button:"Todo_Tasks_tasks_button__xway9","hvr-push":"Todo_Tasks_hvr-push__2bA4G",tasks_item:"Todo_Tasks_tasks_item__2QyiK",task_title:"Todo_Tasks_task_title__uKZ_h",tasks_title__wrap:"Todo_Tasks_tasks_title__wrap__nL5N8",liquid:"Todo_Tasks_liquid__j1xHQ",liquid_red:"Todo_Tasks_liquid_red__2NJF3",liquid_green:"Todo_Tasks_liquid_green__3Clj2",liquid_yellow:"Todo_Tasks_liquid_yellow__IEooR",float:"Todo_Tasks_float__30N8B",task_buttons:"Todo_Tasks_task_buttons__30mng",task_button__red:"Todo_Tasks_task_button__red__3y3q3",task_button__green:"Todo_Tasks_task_button__green__fCMZ9",task_button__yellow:"Todo_Tasks_task_button__yellow__2Nk4a",task_done:"Todo_Tasks_task_done__23Gw7",task_delete:"Todo_Tasks_task_delete__shR_d"}}},[[21,1,2]]]);
//# sourceMappingURL=main.494fc7d8.chunk.js.map