import React from 'react';
import './App.css';
import { saveState,restoreState } from './localStorage'
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Root from "./Todo/Root";


library.add (fab);

class App extends React.Component {
	constructor (props) {
		super (props);
	}

	state = {

		tasks: [
			{
				id: 0,
				title: 'Example1',
				isDone: false,
				priority: 'high'
			},
			{
				id: 1,
				title: 'Example2',
				isDone: false,
				priority: 'low'
			},
			{
				id: 2,
				title: 'Example3',
				isDone: true,
				priority: 'medium'
			},
		],
		filterValue: "All",
		nextTaskId: 3,
	};

	componentDidMount () {
		let newState = restoreState ();
		if (!!newState){
			this.setState(newState);
		} else {
			this.setState (this.state);
		}
	};

	// saveState = () => {
	// 	let stateAsString = JSON.stringify (this.state);
	// 	localStorage.setItem ('our-state', stateAsString);
	// };
	//
	// restoreState = () => {
	// 	let state = {
	// 		tasks: [
	// 			{
	// 				id: 0,
	// 				title: 'Example',
	// 				isDone: false,
	// 				priority: 'high'
	// 			},
	// 			{
	// 				id: 1,
	// 				title: 'Example',
	// 				isDone: false,
	// 				priority: 'low'
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Example',
	// 				isDone: true,
	// 				priority: 'medium'
	// 			},
	// 		],
	// 		filterValue: 'All',
	// 		nextTaskId: 3,
	// 	};
	// 	let stateAsString = localStorage.getItem ('our-state');
	// 	if ( stateAsString !== null ) {
	// 		state = JSON.parse (stateAsString);
	// 	}
	// 	this.setState (state);
	// };

	addTask = (title) => {
		let newTask = {
			id: this.state.nextTaskId,
			title: title,
			isDone: false,
			priority: 'low'
		};

		let newTasks = [ ...this.state.tasks, newTask ];
		this.setState ({
			tasks: newTasks,
			nextTaskId: this.state.nextTaskId + 1,
		}, () => {saveState(this.state);});

	};

	changeFilter = (newFilterValue) => {
		this.setState ({
			filterValue: newFilterValue
		}, () => {saveState(this.state);})
	};
	changeTask = (taskId, obj) => {
		let newTasks = this.state.tasks.map (t => {
			if ( t.id === taskId ) {
				return { ...t, ...obj }
			} else {
				return t
			}
		});
		this.setState ({
			tasks: newTasks
		}, () => {saveState(this.state);})
	};

	changeStatus = (taskId, isDone) => {
		this.changeTask (taskId, { isDone: isDone });

	};
	changeTitle = (taskId, title) => {
		this.changeTask (taskId, { title: title });

	};
	changePriority = (taskId, priority) => {
		this.changeTask (taskId, { priority: priority });

	};

	deleteTask = (taskId) => {
		let newTasks = this.state.tasks.filter (t =>  t.id !== taskId);
		this.setState ({
			tasks: newTasks
		}, () => {saveState(this.state);})
	};

	render = () => {
		return (
			<div className="App">
				<div className="todoList">
					<Root state={this.state} addTask={this.addTask} changeFilter={this.changeFilter}
						  changeTitle={this.changeTitle} changeStatus={this.changeStatus} deleteTask={this.deleteTask}
						  changePriority={this.changePriority}
						  tasks={this.state.tasks.filter (t => {
							  return this.state.filterValue === "Active" && t.isDone === false ||
								  this.state.filterValue === "Completed" && t.isDone === true ||
								  this.state.filterValue === "All"
						  })}/>
					{/*<div className='todo_wrap'>*/}
						{/*<TodoListHeader addTask={this.addTask}/>*/}
						{/*<TodoListTasks changeTitle={this.changeTitle} changeStatus={this.changeStatus}*/}
						{/*			   tasks={this.state.tasks.filter (t => {*/}
						{/*				   return this.state.filterValue === "Active" && t.isDone === false ||*/}
						{/*					   this.state.filterValue === "Completed" && t.isDone === true ||*/}
						{/*					   this.state.filterValue === "All"*/}
						{/*			   })}/>*/}
						{/*<TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>*/}
					{/*</div>*/}
				</div>
			</div>
		);
	};

}

export default App;