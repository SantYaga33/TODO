(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{1:function(e,t,a){e.exports={tasks_wrap:"Todo_Tasks_tasks_wrap__3zIuJ",tasks_wrap__input:"Todo_Tasks_tasks_wrap__input__26o5s",tasks_input:"Todo_Tasks_tasks_input__3Cbo6",inputError:"Todo_Tasks_inputError__3IHks",tasks_button:"Todo_Tasks_tasks_button__xway9","hvr-push":"Todo_Tasks_hvr-push__2bA4G",tasks_item:"Todo_Tasks_tasks_item__2QyiK",task_title:"Todo_Tasks_task_title__uKZ_h",tasks_title__wrap:"Todo_Tasks_tasks_title__wrap__nL5N8",liquid:"Todo_Tasks_liquid__j1xHQ",liquid_red:"Todo_Tasks_liquid_red__2NJF3",liquid_green:"Todo_Tasks_liquid_green__3Clj2",liquid_yellow:"Todo_Tasks_liquid_yellow__IEooR",float:"Todo_Tasks_float__30N8B",task_buttons:"Todo_Tasks_task_buttons__30mng",task_button__red:"Todo_Tasks_task_button__red__3y3q3",task_button__green:"Todo_Tasks_task_button__green__fCMZ9",task_button__yellow:"Todo_Tasks_task_button__yellow__2Nk4a",task_done:"Todo_Tasks_task_done__23Gw7",task_delete:"Todo_Tasks_task_delete__shR_d"}},12:function(e,t,a){e.exports={header_buttons:"Header_Buttons_header_buttons__p3d-1",header_buttons__item:"Header_Buttons_header_buttons__item__3KJYA","hvr-bob-float":"Header_Buttons_hvr-bob-float__3OGEw","hvr-bob":"Header_Buttons_hvr-bob__1MoXB"}},16:function(e,t,a){e.exports={root_wrap:"Root_root_wrap__1C1Ue"}},21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),o=a(15),i=a.n(o),r=(a(26),a(20)),l=a(19),_=a(3),c=a(10),d=a(5),u=a(4),k=a(6),m=(a(27),function(e){var t=JSON.stringify(e);localStorage.setItem("our-state",t)}),p=(n.a.Component,function(e){function t(){var e,a;Object(_.a)(this,t);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={editMode:!1},a.onIsDoneChanges=function(e){a.props.changeStatus(a.props.task.id,e.currentTarget.checked)},a.onTitleChange=function(e){a.props.changeTitle(a.props.task.id,e.currentTarget.value)},a.activeEditorMode=function(){a.setState({editMode:!0})},a.deactivateEditMode=function(){a.setState({editMode:!1})},a.render=function(){var e=a.props.task.isDone?"todoList-task done":"todoList-task";return n.a.createElement("div",{className:e},n.a.createElement("input",{type:"checkbox",checked:a.props.task.isDone,onChange:a.onIsDoneChanges}),a.state.editMode?n.a.createElement("input",{onBlur:a.deactivateEditMode,onChange:a.onTitleChange,value:a.props.task.title,autoFocus:!0}):n.a.createElement("span",{onClick:a.activeEditorMode}," ",a.props.task.id,a.props.task.title,", ",a.props.task.priority))},a}return Object(k.a)(t,e),t}(n.a.Component)),h=(n.a.Component,n.a.Component,a(11)),T=a(18),b=a(16),g=a.n(b),E=a(9),v=a.n(E),f=a(17),N=a(12),y=a.n(N),C=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).onAllFilterClick=function(){a.props.changeFilter("All")},a.onCompletedFilterClick=function(){a.props.changeFilter("Completed")},a.onActiveFilterClick=function(){a.props.changeFilter("Active")},a}return Object(k.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:y.a.header_buttons},n.a.createElement("button",{className:y.a.header_buttons__item,onClick:this.onAllFilterClick},"All"),n.a.createElement("button",{className:y.a.header_buttons__item,onClick:this.onCompletedFilterClick},"Done"),n.a.createElement("button",{className:y.a.header_buttons__item,onClick:this.onActiveFilterClick},"Active"))}}]),t}(n.a.Component),w=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={isHidden:!1},a.onShowFiltersClick=function(){a.setState({isHidden:a.isHidden})},a.onHideFiltersClick=function(){a.setState({isHidden:!a.isHidden})},a}return Object(k.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:v.a.header},n.a.createElement("div",{className:v.a.header_title},"New Tasks"),n.a.createElement("div",{className:v.a.header_logo},n.a.createElement("div",{className:v.a.header_logo__icon},n.a.createElement(f.a,{icon:["fab","sith"],spin:!0,size:"lg"})),n.a.createElement("div",{className:v.a.header_logo__hide},this.state.isHidden&&n.a.createElement("button",{className:v.a.header_logo__button,onClick:this.onShowFiltersClick},"show"),!this.state.isHidden&&n.a.createElement("button",{className:v.a.header_logo__button,onClick:this.onHideFiltersClick},"hide"))),!this.state.isHidden&&n.a.createElement(C,{changeFilter:this.props.changeFilter}))}}]),t}(n.a.Component),O=a(1),j=a.n(O),S=a(7),q=a.n(S),F=a(8),x=a.n(F),H=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={editMode:!1},a.onIsDoneChanges=function(e){a.props.changeStatus(a.props.task.id,e.currentTarget.checked)},a.onTitleChange=function(e){a.props.changeTitle(a.props.task.id,e.currentTarget.value)},a.onChangePriorityHigh=function(){a.props.changePriority(a.props.task.id,"high")},a.onChangePriorityMedium=function(){a.props.changePriority(a.props.task.id,"medium")},a.onChangePriorityLow=function(){a.props.changePriority(a.props.task.id,"low")},a.activeEditorMode=function(){a.setState({editMode:!0})},a.deactivateEditMode=function(){a.setState({editMode:!1})},a.onDeleteTask=function(e){a.props.deleteTask(a.props.task.id)},a.render=function(){return n.a.createElement("div",{className:q.a.tasks_item,id:a.props.id,"data-priority":a.props.priority},n.a.createElement("div",{className:q.a.tasks_title__wrap},a.state.editMode?n.a.createElement("input",{className:q.a.input_onblur,onBlur:a.deactivateEditMode,onChange:a.onTitleChange,value:a.props.task.title,autoFocus:!0}):n.a.createElement("div",{className:q.a.task_title,onClick:a.activeEditorMode},a.props.task.title),n.a.createElement("div",{className:x()(q.a.liquid,q.a.liquid_red)})),n.a.createElement("div",{className:q.a.task_buttons},n.a.createElement("button",{className:q.a.task_button__red,onClick:a.onChangePriorityHigh},"high"),n.a.createElement("button",{className:q.a.task_button__green,onClick:a.onChangePriorityMedium},"medium"),n.a.createElement("button",{className:q.a.task_button__yellow,onClick:a.onChangePriorityLow},"low")),n.a.createElement("div",{className:q.a.task_done},n.a.createElement("input",{type:"checkbox",checked:a.props.task.isDone,onChange:a.onIsDoneChanges})),n.a.createElement("div",{className:q.a.task_delete},n.a.createElement("button",{onClick:a.onDeleteTask},"del")))},a}return Object(k.a)(t,e),t}(n.a.Component),A=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={error:!1,title:""},a.onAddTaskClick=function(){var e=a.state.title;a.setState({title:""}),""===e?a.setState({error:!0}):(a.setState({error:!1}),a.props.addTask(e))},a.onAddTaskKeyPress=function(e){if("Enter"===e.key){var t=a.state.title;a.setState({title:""}),""===t?a.setState({error:!0}):(a.setState({error:!1}),a.props.addTask(t))}},a.onTitleChange=function(e){a.setState({error:!1,title:e.currentTarget.value})},a.errorClass=j.a.inputError,a.render=function(){var e=a.props.tasks.map((function(e){return n.a.createElement(H,{changeStatus:a.props.changeStatus,key:e.id,id:e.id,priority:e.priority,task:e,changeTitle:a.props.changeTitle,deleteTask:a.props.deleteTask,changePriority:a.props.changePriority,classForPriority:"high"===e.priority?x()(j.a.liquid,j.a.liquid_red):"medium"===e.priority?x()(j.a.liquid,j.a.liquid_green):x()(j.a.liquid,j.a.liquid_yellow)})}));return n.a.createElement("div",{className:j.a.tasks_wrap},n.a.createElement("div",{className:j.a.tasks_wrap__input},n.a.createElement("div",{className:j.a.tasks_input},n.a.createElement("input",{className:a.state.error?a.errorClass:"",value:a.state.title,type:"text",placeholder:"Enter task name",onKeyPress:a.onAddTaskKeyPress,onChange:a.onTitleChange}),n.a.createElement("button",{className:j.a.tasks_button,onClick:a.onAddTaskClick},"add"))),n.a.createElement("div",{className:j.a.tasks_item},n.a.createElement("div",{className:j.a.tasks_title__wrap},n.a.createElement("div",{className:j.a.task_title},"example"),n.a.createElement("div",{className:x()(j.a.liquid,j.a.liquid_red)})),n.a.createElement("div",{className:j.a.task_buttons},n.a.createElement("button",{className:j.a.task_button__red},"high"),n.a.createElement("button",{className:j.a.task_button__green},"medium"),n.a.createElement("button",{className:j.a.task_button__yellow},"low")),n.a.createElement("div",{className:j.a.task_done},n.a.createElement("input",{type:"checkbox"})),n.a.createElement("div",{className:j.a.task_delete},n.a.createElement("button",null,"del"))),n.a.createElement("div",{className:j.a.tasks_item},n.a.createElement("div",{className:j.a.tasks_title__wrap},n.a.createElement("div",{className:j.a.task_title},"example"),n.a.createElement("div",{className:x()(j.a.liquid,j.a.liquid_green)})),n.a.createElement("div",{className:j.a.task_buttons},n.a.createElement("button",{className:j.a.task_button__red},"high"),n.a.createElement("button",{className:j.a.task_button__green},"medium"),n.a.createElement("button",{className:j.a.task_button__yellow},"low")),n.a.createElement("div",{className:j.a.task_done},n.a.createElement("input",{type:"checkbox"})),n.a.createElement("div",{className:j.a.task_delete},n.a.createElement("button",null,"del"))),n.a.createElement("div",{className:j.a.tasks_item},n.a.createElement("div",{className:j.a.tasks_title__wrap},n.a.createElement("div",{className:j.a.task_title},"example"),n.a.createElement("div",{className:x()(j.a.liquid,j.a.liquid_yellow)})),n.a.createElement("div",{className:j.a.task_buttons},n.a.createElement("button",{className:j.a.task_button__red},"high"),n.a.createElement("button",{className:j.a.task_button__green},"medium"),n.a.createElement("button",{className:j.a.task_button__yellow},"low")),n.a.createElement("div",{className:j.a.task_done},n.a.createElement("input",{type:"checkbox"})),n.a.createElement("div",{className:j.a.task_delete},n.a.createElement("button",null,"del"))),e)},a}return Object(k.a)(t,e),t}(n.a.Component),P=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).render=function(){return n.a.createElement("div",{className:g.a.root_wrap},n.a.createElement(w,{state:a.props.state,changeFilter:a.props.changeFilter}),n.a.createElement(A,{addTask:a.props.addTask,tasks:a.props.tasks,deleteTask:a.props.deleteTask,changeTitle:a.props.changeTitle,changeStatus:a.props.changeStatus,state:a.props.state,changePriority:a.props.changePriority}))},a}return Object(k.a)(t,e),t}(n.a.Component);h.b.add(T.a);var M=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={tasks:[{id:0,title:"Example1",isDone:!1,priority:"high"},{id:1,title:"Example2",isDone:!1,priority:"low"},{id:2,title:"Example3",isDone:!0,priority:"medium"}],filterValue:"All",nextTaskId:3},a.addTask=function(e){var t={id:a.state.nextTaskId,title:e,isDone:!1,priority:"low"},s=[].concat(Object(l.a)(a.state.tasks),[t]);a.setState({tasks:s,nextTaskId:a.state.nextTaskId+1},(function(){m(a.state)}))},a.changeFilter=function(e){a.setState({filterValue:e},(function(){m(a.state)}))},a.changeTask=function(e,t){var s=a.state.tasks.map((function(a){return a.id===e?Object(r.a)({},a,{},t):a}));a.setState({tasks:s},(function(){m(a.state)}))},a.changeStatus=function(e,t){a.changeTask(e,{isDone:t})},a.changeTitle=function(e,t){a.changeTask(e,{title:t})},a.changePriority=function(e,t){a.changeTask(e,{priority:t})},a.deleteTask=function(e){var t=a.state.tasks.filter((function(t){return t.id!==e}));a.setState({tasks:t},(function(){m(a.state)}))},a.render=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"todoList"},n.a.createElement(P,{state:a.state,addTask:a.addTask,changeFilter:a.changeFilter,changeTitle:a.changeTitle,changeStatus:a.changeStatus,deleteTask:a.deleteTask,changePriority:a.changePriority,tasks:a.state.tasks.filter((function(e){return"Active"===a.state.filterValue&&!1===e.isDone||"Completed"===a.state.filterValue&&!0===e.isDone||"All"===a.state.filterValue}))})))},a}return Object(k.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=function(){var e,t=localStorage.getItem("our-state");return null!==t&&(e=JSON.parse(t)),e}();e?this.setState(e):this.setState(this.state)}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){e.exports={tasks_item:"Todo_Task_tasks_item__37cyi",task_title:"Todo_Task_task_title__1AWQL",tasks_title__wrap:"Todo_Task_tasks_title__wrap__3y0J7",liquid:"Todo_Task_liquid__3D62l",liquid_red:"Todo_Task_liquid_red__1kA1f",liquid_green:"Todo_Task_liquid_green__7QcuZ",liquid_yellow:"Todo_Task_liquid_yellow__YnX1O",float:"Todo_Task_float__3KOPi",task_buttons:"Todo_Task_task_buttons__NSYQQ",task_button__red:"Todo_Task_task_button__red__P3C9B",task_button__green:"Todo_Task_task_button__green__1yz8E",task_button__yellow:"Todo_Task_task_button__yellow__1Bl1N","hvr-push":"Todo_Task_hvr-push__1_OCu",task_done:"Todo_Task_task_done__1FHO1",task_delete:"Todo_Task_task_delete__1BZgk",input_onblur:"Todo_Task_input_onblur__2zA1T"}},9:function(e,t,a){e.exports={header:"Todo_Header_header__2FXaE",header_title:"Todo_Header_header_title__GatqN",header_logo:"Todo_Header_header_logo__1dGfm",header_logo__button:"Todo_Header_header_logo__button__1XpGI"}}},[[21,1,2]]]);
//# sourceMappingURL=main.47b830b0.chunk.js.map