import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Root from "./Todo/Root";


library.add (fab);

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {

		tasks: [],
		filterValue: "All",
		nextTaskId: 0,
	};

	componentDidMount() {
		this.restoreState();
	};

	saveState = () => {
		let stateAsString = JSON.stringify(this.state);
		localStorage.setItem('our-state', stateAsString);
	};

	restoreState = () => {
		let state= {
			tasks: [],
			filterValue: 'All',
			nextTaskId: 0,
		};
		let stateAsString = localStorage.getItem('our-state');
		if (stateAsString !==null) {
			state = JSON.parse(stateAsString);
		}
		this.setState(state);
	};

	addTask = (title) => {
		let newTask = {
			id: this.state.nextTaskId,
			title: title,
			isDone: false,
			priority: 'low'
		};

		let newTasks = [...this.state.tasks, newTask];
		this.setState({
			tasks: newTasks,
			nextTaskId: this.state.nextTaskId +1,
		}, () => {this.saveState();});

	};

	changeFilter = (newFilterValue) => {
		this.setState({
			filterValue: newFilterValue
		},() => {this.saveState();} )
	};
	changeTask = (taskId, obj) => {
		let newTasks = this.state.tasks.map(t => {
			if (t.id === taskId) {
				return {...t,...obj}
			} else {
				return t
			}
		});
		this.setState({
			tasks: newTasks
		}, () => {this.saveState();})
	};

	changeStatus = (taskId, isDone) => {
		this.changeTask (taskId, {isDone: isDone});

	};
	changeTitle = (taskId, title) => {
		this.changeTask (taskId, {title: title});

	};

	render = () => {
		return (
			<div className="App">
				<div className="todoList">
					<Root />
					<TodoListHeader addTask={this.addTask}/>
					<TodoListTasks changeTitle={this.changeTitle}  changeStatus={this.changeStatus}
								   tasks={this.state.tasks.filter(t => {
						return this.state.filterValue === "Active" && t.isDone === false ||
							this.state.filterValue === "Completed" && t.isDone === true ||
							this.state.filterValue === "All"
					})}/>
					<TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
				</div>
			</div>
		);
	};

}

export default App;