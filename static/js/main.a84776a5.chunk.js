(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,function(t,e,a){t.exports={tasks_item:"Todo_Task_tasks_item__37cyi",task_title:"Todo_Task_task_title__1AWQL",tasks_title__wrap:"Todo_Task_tasks_title__wrap__3y0J7",liquid:"Todo_Task_liquid__3D62l",liquid_red:"Todo_Task_liquid_red__1kA1f",liquid_green:"Todo_Task_liquid_green__7QcuZ",liquid_yellow:"Todo_Task_liquid_yellow__YnX1O",wave:"Todo_Task_wave__3Qyo8",task_buttons:"Todo_Task_task_buttons__NSYQQ",task_button__red:"Todo_Task_task_button__red__P3C9B",task_button__green:"Todo_Task_task_button__green__1yz8E",task_button__yellow:"Todo_Task_task_button__yellow__1Bl1N",push:"Todo_Task_push__3QHcp",task_done:"Todo_Task_task_done__1FHO1",task_delete:"Todo_Task_task_delete__1BZgk",input_onblur:"Todo_Task_input_onblur__2zA1T",tooltip:"Todo_Task_tooltip__2ijxw",tooltip_wrap:"Todo_Task_tooltip_wrap__S3sZU",tooltip_title:"Todo_Task_tooltip_title__29PYu",tooltip_wrap__discr:"Todo_Task_tooltip_wrap__discr__2AUor",top:"Todo_Task_top__3xWDQ"}},,,function(t,e,a){t.exports={header:"Todo_Header_header__2FXaE",header_title:"Todo_Header_header_title__GatqN",header_logo:"Todo_Header_header_logo__1dGfm",header_logo__button:"Todo_Header_header_logo__button__1XpGI"}},function(t,e,a){t.exports={item:"CreateItemTitle_item__3YyS5",select:"CreateItemTitle_select__1EmzE",item_title:"CreateItemTitle_item_title__xMdq2",item_button:"CreateItemTitle_item_button___lIBm"}},function(t,e,a){t.exports={tasks_wrap:"Todo_Tasks_tasks_wrap__3zIuJ",tasks_wrap__input:"Todo_Tasks_tasks_wrap__input__26o5s",tasks_input:"Todo_Tasks_tasks_input__3Cbo6",inputError:"Todo_Tasks_inputError__3IHks",tasks_button:"Todo_Tasks_tasks_button__xway9","hvr-push":"Todo_Tasks_hvr-push__2bA4G",tasks_item:"Todo_Tasks_tasks_item__2QyiK",task_title:"Todo_Tasks_task_title__uKZ_h",tasks_title__wrap:"Todo_Tasks_tasks_title__wrap__nL5N8",liquid:"Todo_Tasks_liquid__j1xHQ",liquid_red:"Todo_Tasks_liquid_red__2NJF3",liquid_green:"Todo_Tasks_liquid_green__3Clj2",liquid_yellow:"Todo_Tasks_liquid_yellow__IEooR",float:"Todo_Tasks_float__30N8B",task_buttons:"Todo_Tasks_task_buttons__30mng",task_button__red:"Todo_Tasks_task_button__red__3y3q3",task_button__green:"Todo_Tasks_task_button__green__fCMZ9",task_button__yellow:"Todo_Tasks_task_button__yellow__2Nk4a",task_done:"Todo_Tasks_task_done__23Gw7",task_delete:"Todo_Tasks_task_delete__shR_d"}},function(t,e,a){t.exports={wrap:"SideBar_wrap__1w_XS",tasks_wrap__input:"SideBar_tasks_wrap__input__14FAj",tasks_input:"SideBar_tasks_input__23_Hc",inputError:"SideBar_inputError__2C27e",tasks_button:"SideBar_tasks_button__tzRMv","hvr-push":"SideBar_hvr-push__3oGRK",list_items:"SideBar_list_items__1C4AV",item:"SideBar_item__3uKXn",item_title:"SideBar_item_title__G5lfh",item_button:"SideBar_item_button__3Uef6"}},,function(t,e,a){t.exports={header_buttons:"Header_Buttons_header_buttons__p3d-1",header_buttons__item:"Header_Buttons_header_buttons__item__3KJYA","hvr-bob-float":"Header_Buttons_hvr-bob-float__3OGEw","hvr-bob":"Header_Buttons_hvr-bob__1MoXB"}},function(t,e,a){t.exports={welcome_main:"WelcomePage_welcome_main__25VrC",welcome_wrap:"WelcomePage_welcome_wrap__1YbxR",welcome_title:"WelcomePage_welcome_title__2pTpC",welcome_text:"WelcomePage_welcome_text__3-6dT"}},,,,,,,,,,function(t,e,a){t.exports={root_wrap:"Root_root_wrap__1C1Ue"}},,function(t,e,a){t.exports=a(41)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),i=a(22),o=a.n(i);a(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(8),l=a(18),c=a(2),_=a(7),d=a(5),u=a(3),m=a(4),p=(a(33),a(34),a(13)),h=a(26),k=a(25),T=a.n(k),f=a(9),b=a.n(f),v=a(16),g=a(14),E=a.n(g),y=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).onAllFilterClick=function(){a.props.changeFilter("All")},a.onCompletedFilterClick=function(){a.props.changeFilter("Completed")},a.onActiveFilterClick=function(){a.props.changeFilter("Active")},a}return Object(m.a)(e,t),Object(_.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:E.a.header_buttons},n.a.createElement("button",{className:E.a.header_buttons__item,onClick:this.onAllFilterClick},"All"),n.a.createElement("button",{className:E.a.header_buttons__item,onClick:this.onCompletedFilterClick},"Done"),n.a.createElement("button",{className:E.a.header_buttons__item,onClick:this.onActiveFilterClick},"Active"))}}]),e}(n.a.Component),C=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).state={isHidden:!1},a.onShowFiltersClick=function(){a.setState({isHidden:a.isHidden})},a.onHideFiltersClick=function(){a.setState({isHidden:!a.isHidden})},a}return Object(m.a)(e,t),Object(_.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:b.a.header},n.a.createElement("div",{className:b.a.header_title},this.props.title),n.a.createElement("div",{className:b.a.header_logo},n.a.createElement("div",{className:b.a.header_logo__icon},n.a.createElement(v.a,{icon:["fab","sith"],spin:!0,size:"lg"})),n.a.createElement("div",{className:b.a.header_logo__hide},this.state.isHidden&&n.a.createElement("button",{className:b.a.header_logo__button,onClick:this.onShowFiltersClick},"show"),!this.state.isHidden&&n.a.createElement("button",{className:b.a.header_logo__button,onClick:this.onHideFiltersClick},"hide"))),!this.state.isHidden&&n.a.createElement(y,{changeFilter:this.props.changeFilter}))}}]),e}(n.a.Component),w=a(11),S=a.n(w),I=a(6),O=a.n(I),j=a(19),N=a.n(j),D=function(t){function e(){var t,a;Object(c.a)(this,e);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(a=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).state={editMode:!1},a.onIsDoneChanges=function(t){a.props.changeStatus(a.props.task.id,t.currentTarget.checked)},a.onTitleChange=function(t){a.props.changeTitle(a.props.task.id,t.currentTarget.value)},a.onChangePriorityHigh=function(){a.props.changePriority(a.props.task.id,"high")},a.onChangePriorityMedium=function(){a.props.changePriority(a.props.task.id,"medium")},a.onChangePriorityLow=function(){a.props.changePriority(a.props.task.id,"low")},a.activeEditorMode=function(){a.setState({editMode:!0})},a.deactivateEditMode=function(){a.setState({editMode:!1})},a.onDeleteTask=function(){a.props.deleteTask(a.props.task.id)},a.render=function(){return n.a.createElement("div",{className:O.a.tasks_item,id:a.props.id,"data-priority":a.props.priority},n.a.createElement("div",{className:O.a.tasks_title__wrap},a.state.editMode?n.a.createElement("input",{className:O.a.input_onblur,onBlur:a.deactivateEditMode,onChange:a.onTitleChange,type:"text",maxLength:"15",value:a.props.task.title,autoFocus:!0}):n.a.createElement("div",{className:O.a.task_title,onClick:a.activeEditorMode,maxLength:"15"},a.props.task.title),n.a.createElement("div",{className:"high"===a.props.priority?N()(O.a.liquid,O.a.liquid_red):"medium"===a.props.priority?N()(O.a.liquid,O.a.liquid_green):N()(O.a.liquid,O.a.liquid_yellow)})),n.a.createElement("div",{className:O.a.task_buttons},n.a.createElement("button",{className:O.a.task_button__red,onClick:a.onChangePriorityHigh},"high"),n.a.createElement("button",{className:O.a.task_button__green,onClick:a.onChangePriorityMedium},"medium"),n.a.createElement("button",{className:O.a.task_button__yellow,onClick:a.onChangePriorityLow},"low")),n.a.createElement("div",{className:O.a.task_done},n.a.createElement("input",{type:"checkbox",checked:a.props.task.isDone,onChange:a.onIsDoneChanges})),n.a.createElement("div",{className:O.a.task_delete},n.a.createElement("button",{onClick:a.onDeleteTask},"del")))},a}return Object(m.a)(e,t),e}(n.a.Component),x=function(t){function e(){var t,a;Object(c.a)(this,e);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(a=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).state={error:!1,title:""},a.onAddTaskClick=function(){var t=a.state.title;a.setState({title:""}),""===t?a.setState({error:!0}):(a.setState({error:!1}),a.props.addTask(t))},a.onAddTaskKeyPress=function(t){if("Enter"===t.key){var e=a.state.title;a.setState({title:""}),""===e?a.setState({error:!0}):(a.setState({error:!1}),a.props.addTask(e))}},a.onTitleChange=function(t){a.setState({error:!1,title:t.currentTarget.value})},a.errorClass=S.a.inputError,a.render=function(){var t=a.props.tasks.map((function(t){return n.a.createElement(D,{changeStatus:a.props.changeStatus,key:t.id,id:t.id,priority:t.priority,task:t,changeTitle:a.props.changeTitle,deleteTask:a.props.deleteTask,changePriority:a.props.changePriority,createDate:t.date.createDate,updateDate:t.date.updateDate,finishedDate:t.date.finishedDate})}));return n.a.createElement("div",{className:S.a.tasks_wrap},n.a.createElement("div",{className:S.a.tasks_wrap__input},n.a.createElement("div",{className:S.a.tasks_input},n.a.createElement("input",{className:a.state.error?a.errorClass:"",value:a.state.title,type:"text",placeholder:"Enter task name",onKeyPress:a.onAddTaskKeyPress,onChange:a.onTitleChange,maxLength:"15"}),n.a.createElement("button",{className:S.a.tasks_button,onClick:a.onAddTaskClick},"add"))),t)},a}return Object(m.a)(e,t),e}(n.a.Component),M=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).render=function(){return n.a.createElement("div",{className:a.props.display},n.a.createElement("div",{className:T.a.root_wrap,id:a.props.id},n.a.createElement(C,{state:a.props.state,changeFilter:a.props.changeFilter,title:a.props.title}),n.a.createElement(x,{addTask:a.props.addTask,tasks:a.props.tasks,deleteTask:a.props.deleteTask,changeTitle:a.props.changeTitle,changeStatus:a.props.changeStatus,state:a.props.state,changePriority:a.props.changePriority,title:a.props.title})))},a}return Object(m.a)(e,t),e}(n.a.Component),A=a(17),P={saveTodoList:function(t){this._save(t,"Todo-list")},getTodoList:function(){return this._get("Todo-list")},saveTasks:function(t,e){this._save(t,"our-state-"+e)},getTasks:function(t){return this._get("our-state-"+t)},_save:function(t,e){var a=JSON.stringify(t);localStorage.setItem(e,a)},_get:function(t){var e=localStorage.getItem(t);return null!==e?JSON.parse(e):null}};p.b.add(h.a,A.a);var q=function(t){function e(){var t,a;Object(c.a)(this,e);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(a=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).state={tasks:[{id:0,title:"Example",isDone:!1,priority:"high",date:{createDate:"Wed Mar 25 2020 18:21:54 GMT+0400 (\u041f\u0435\u0440\u0441\u0438\u0434\u0441\u043a\u0438\u0439 \u0437\u0430\u043b\u0438\u0432)",updateDate:"Wed Mar 25 2020 18:21:54 GMT+0400 (\u041f\u0435\u0440\u0441\u0438\u0434\u0441\u043a\u0438\u0439 \u0437\u0430\u043b\u0438\u0432)",finishedDate:"Wed Mar 25 2020 18:21:54 GMT+0400 (\u041f\u0435\u0440\u0441\u0438\u0434\u0441\u043a\u0438\u0439 \u0437\u0430\u043b\u0438\u0432)"}},{id:1,title:"Example",isDone:!1,priority:"low",date:{createDate:"Wed Mar 25 2020 18:21:54 GMT+0400 (\u041f\u0435\u0440\u0441\u0438\u0434\u0441\u043a\u0438\u0439 \u0437\u0430\u043b\u0438\u0432)",updateDate:"Wed Mar 25 2020 18:21:54 GMT+0400 (\u041f\u0435\u0440\u0441\u0438\u0434\u0441\u043a\u0438\u0439 \u0437\u0430\u043b\u0438\u0432)",finishedDate:"Wed Mar 25 2020 18:21:54 GMT+0400 (\u041f\u0435\u0440\u0441\u0438\u0434\u0441\u043a\u0438\u0439 \u0437\u0430\u043b\u0438\u0432)"}},{id:2,title:"Example",isDone:!0,priority:"medium",date:{createDate:"Wed Mar 25 2020 18:21:54 GMT+0400 (\u041f\u0435\u0440\u0441\u0438\u0434\u0441\u043a\u0438\u0439 \u0437\u0430\u043b\u0438\u0432)",updateDate:"Wed Mar 25 2020 18:21:54 GMT+0400 (\u041f\u0435\u0440\u0441\u0438\u0434\u0441\u043a\u0438\u0439 \u0437\u0430\u043b\u0438\u0432)",finishedDate:"Wed Mar 25 2020 18:21:54 GMT+0400 (\u041f\u0435\u0440\u0441\u0438\u0434\u0441\u043a\u0438\u0439 \u0437\u0430\u043b\u0438\u0432)"}}],filterValue:"All",nextTaskId:3},a.saveState=function(){P.saveTasks(a.state,a.props.id)},a.restoreState=function(){var t=P.getTasks(a.props.id);null!==t&&a.setState(t)},a.addTask=function(t){var e=new Date,s={id:a.state.nextTaskId,title:t,isDone:!1,priority:"low",date:{createDate:e+"",updateDate:"",finishedDate:""}},n=[].concat(Object(l.a)(a.state.tasks),[s]);a.setState({tasks:n,nextTaskId:a.state.nextTaskId+1},(function(){a.saveState(a.state)}))},a.changeFilter=function(t){a.setState({filterValue:t},(function(){a.saveState(a.state)}))},a.changeTask=function(t,e){var s=a.state.tasks.map((function(a){return a.id===t?Object(r.a)({},a,{},e):a}));a.setState({tasks:s},(function(){a.saveState(a.state)}))},a.changeStatus=function(t,e){var s=new Date,n=a.state.tasks.find((function(e){return e.id===t})),i=Object(r.a)({},n.date,{finishedDate:s+""});a.changeTask(t,{isDone:e,date:i})},a.changeTitle=function(t,e){var s=new Date,n=a.state.tasks.find((function(e){return e.id===t})),i=Object(r.a)({},n.date,{updateDate:s+""});a.changeTask(t,{title:e,date:i})},a.changePriority=function(t,e){a.changeTask(t,{priority:e})},a.deleteTask=function(t){var e=a.state.tasks.filter((function(e){return e.id!==t}));a.setState({tasks:e},(function(){a.saveState(a.state)}))},a.render=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"todoList"},n.a.createElement(M,{state:a.state,addTask:a.addTask,changeFilter:a.changeFilter,id:a.props.id,changeTitle:a.changeTitle,changeStatus:a.changeStatus,deleteTask:a.deleteTask,changePriority:a.changePriority,title:a.props.title,display:a.props.display,tasks:a.state.tasks.filter((function(t){return"Active"===a.state.filterValue&&!1===t.isDone||"Completed"===a.state.filterValue&&!0===t.isDone||"All"===a.state.filterValue}))})))},a}return Object(m.a)(e,t),Object(_.a)(e,[{key:"componentDidMount",value:function(){this.restoreState()}}]),e}(n.a.Component),F=(a(40),function(t){function e(t){return Object(c.a)(this,e),Object(d.a)(this,Object(u.a)(e).call(this,t))}return Object(m.a)(e,t),Object(_.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"wrap_loader"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"r"}),n.a.createElement("div",{className:"r"}),n.a.createElement("div",{className:"r"}),n.a.createElement("div",{className:"r"}),n.a.createElement("div",{className:"r"})))}}]),e}(n.a.Component)),H=a(12),B=a.n(H),W=a(10),G=a.n(W),L=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).onChoiceItem=function(){a.props.choiceItem(a.props.id)},a.onDeleteItem=function(){a.props.deleteItem(a.props.id)},a}return Object(m.a)(e,t),Object(_.a)(e,[{key:"render",value:function(){return n.a.createElement("li",{className:this.props.selectItem?" ".concat(G.a.item," ").concat(G.a.select):G.a.item},n.a.createElement("div",{className:G.a.item_title,onClick:this.onChoiceItem},this.props.title),n.a.createElement("div",{className:G.a.item_button,onClick:this.onDeleteItem},n.a.createElement("button",null,n.a.createElement(v.a,{className:G.a.item_icon,icon:A.a,size:"lg"}))))}}]),e}(n.a.Component),K=function(t){function e(t){return Object(c.a)(this,e),Object(d.a)(this,Object(u.a)(e).call(this,t))}return Object(m.a)(e,t),Object(_.a)(e,[{key:"render",value:function(){var t=this,e=this.props.todolists.map((function(e){return n.a.createElement(L,{key:e.id,id:e.id,title:e.titleItem,choiceItem:t.props.choiceItem,deleteItem:t.props.deleteItem,selectItem:e.selectItem})}));return n.a.createElement("div",{className:B.a.wrap},n.a.createElement("div",{className:B.a.tasks_wrap__input},n.a.createElement("div",{className:B.a.tasks_input},n.a.createElement("input",{className:this.props.errorTitle?B.a.inputError:"",value:this.props.titleItem,type:"text",placeholder:"Enter name",onKeyPress:this.props.onAddItemKeyPress,onChange:this.props.onTitleItemChange,maxLength:"8"}),n.a.createElement("button",{className:"tasks_button",onClick:this.props.onAddItemClick},"add"))),n.a.createElement("div",{className:B.a.list_items},n.a.createElement("ul",null,e)))}}]),e}(n.a.Component),Q=a(15),J=a.n(Q),z=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).render=function(){return n.a.createElement("div",{className:J.a.welcome_main},n.a.createElement("div",{className:J.a.welcome_wrap},n.a.createElement("h1",{className:J.a.welcome_title}," WELCOME !!!"),n.a.createElement("h4",{className:J.a.welcome_text}," Let`s name your first TODO  "),n.a.createElement("span",null,"enjoy :)")))},a}return Object(m.a)(e,t),e}(n.a.Component),V=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).state={todolists:[{id:0,titleItem:"My notice",display:!0,selectItem:!0}],errorTitle:!1,titleItem:"",nextTaskId:1,loader:!0,isTodo:!0},a.saveState=function(){P.saveTodoList(a.state)},a.restoreState=function(){var t=P.getTodoList();null!==t&&a.setState(t)},a.addItem=function(t){var e={id:a.state.nextTaskId,titleItem:t,display:!1,selectItem:!1},s=[].concat(Object(l.a)(a.state.todolists),[e]);a.setState({todolists:s,nextTaskId:a.state.nextTaskId+1},(function(){a.setState({isTodo:!0,todolists:a.state.todolists.map((function(t,e){return e===a.state.todolists.length-1?Object(r.a)({},t,{display:!0,selectItem:!0}):Object(r.a)({},t,{display:!1,selectItem:!1})}))},(function(){return a.saveState(a.state)}))}))},a.onAddItemClick=function(){var t=a.state.titleItem;a.setState({titleItem:""}),""===t?a.setState({errorTitle:!0},(function(){a.saveState(a.state)})):(a.setState({errorTitle:!1},(function(){a.saveState(a.state)})),a.addItem(t))},a.onAddItemKeyPress=function(t){if("Enter"===t.key){var e=a.state.titleItem;a.setState({titleItem:""}),""===e?a.setState({errorTitle:!0},(function(){a.saveState(a.state)})):(a.setState({errorTitle:!1},(function(){a.saveState(a.state)})),a.addItem(e))}},a.onTitleItemChange=function(t){a.setState({errorTitle:!1,titleItem:t.currentTarget.value},(function(){a.saveState(a.state)}))},a.choiceItem=function(t){a.setState({todolists:a.state.todolists.map((function(e){return e.id===t?Object(r.a)({},e,{display:!0,selectItem:!0}):Object(r.a)({},e,{display:!1,selectItem:!1})}))},(function(){a.saveState(a.state)}))},a.deleteItem=function(t){a.state.todolists.length-1!==0?a.setState({isTodo:!0,todolists:a.state.todolists.filter((function(e){return e.id!==t}))},(function(){a.setState({todolists:a.state.todolists.map((function(t,e){return e===a.state.todolists.length-1?Object(r.a)({},t,{display:!0,selectItem:!0}):Object(r.a)({},t,{display:!1,selectItem:!1})}))},(function(){return a.saveState(a.state)}))})):a.setState({todolists:a.state.todolists.filter((function(e){return e.id!==t})),isTodo:!1},(function(){a.saveState(a.state)}))},a}return Object(m.a)(e,t),Object(_.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.restoreState(),setTimeout((function(){t.setState({loader:!1})}),3e3)}},{key:"render",value:function(){var t=this.state.todolists.map((function(t){return n.a.createElement(q,{key:t.id,id:t.id,title:t.titleItem,display:t.display?"display_block":"display_none"})}));return n.a.createElement("div",{className:"main_page"},this.state.loader?n.a.createElement(F,null):n.a.createElement("div",{className:"main_page__wrap"},n.a.createElement(K,{errorTitle:this.state.errorTitle,todolists:this.state.todolists,choiceItem:this.choiceItem,deleteItem:this.deleteItem,onAddItemKeyPress:this.onAddItemKeyPress,onTitleItemChange:this.onTitleItemChange,titleItem:this.state.titleItem,onAddItemClick:this.onAddItemClick}),n.a.createElement("div",{className:"join"}),n.a.createElement("div",{className:"wrap_items"},this.state.isTodo?n.a.createElement("div",null,t):n.a.createElement(z,null))))}}]),e}(n.a.Component);o.a.render(n.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[27,1,2]]]);
//# sourceMappingURL=main.a84776a5.chunk.js.map