import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";


class App extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		tasks: [
			{title: 'CSS', isDone: true, priority: 'low'},
			{title: 'Angular', isDone: false, priority: 'high'},
			{title: 'ReactJS', isDone: false, priority: 'low'},
			{title: 'Patterns', isDone: true, priority: 'medium'}
		],
		filterValue: "Completed",
	};
	addTask = (title) => {
		let newTask = {
			title: title,
			isDone: false,
			priority: 'low'
		};

		let newTasks = [...this.state.tasks, newTask];
		this.setState({
			tasks: newTasks
		});
	};

	newTaskTitleRef = React.createRef();

	changeFilter = (newFilterValue) => {
		this.setState({
			filterValue: newFilterValue
		})
	};
	changeStatus = (task, isDone) => {
		let newTasks = this.state.tasks.map(t => {
			if (t === task) {
				return {...t, isDone: isDone}
			} else {
				return t
			}
		});
		this.setState({
			tasks: newTasks
		})
	};


	render = () => {
		return (
			<div className="App">
				<div className="todoList">
					<TodoListHeader addTask={this.addTask} refTitleTask={this.newTaskTitleRef}/>
					<TodoListTasks changeStatus={this.changeStatus} tasks={this.state.tasks.filter(t => {
						return this.state.filterValue === "Active" && t.isDone === false ||
							this.state.filterValue === "Completed" && t.isDone === true ||
							this.state.filterValue === "All"
					})}/>
					<TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
				</div>
			</div>
		);
	}
}

export default App;

