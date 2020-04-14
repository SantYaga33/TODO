import React from 'react';
import './TodoList.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Root from "./../Todo/Root";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { repository } from "../Repository";
import { connect } from "react-redux";
import {addTaskStore, changeFilterStore, changeTaskStore, deleteTaskStore} from "../Redux/reducer";

library.add (fab, faTrashAlt);


class TodoList extends React.Component {

	componentDidMount () {
			this.restoreState ();
		};

		saveState = () => {
			repository.saveTasks (this.state, this.props.id);
		};

		restoreState = () => {
			let tasks = repository.getTasks (this.props.id);
			if ( tasks !== null ) {
				this.setState (tasks);
			}
		};

	addTask = (title) => {
		let newCreateDate = new Date ();
		let newTask = {
			id: this.props.nextTaskId,
			title: title,
			isDone: false,
			priority: 'low',
			date: { createDate: newCreateDate + '', updateDate: '', finishedDate: '' }
		};
		this.props.addTaskStore(newTask, this.props.id);
	};

	changeFilter = (newFilterValue) => {
		this.props.changeFilterStore(newFilterValue);
	};

	changeTask = (taskId, obj) => {
		this.props.changeTaskStore(taskId, obj, this.props.id);
	};

	changeStatus = (taskId, isDone) => {
		let newFinishedDate = new Date ();
		let newTask = this.props.tasks.find ((task) => {
			return task.id === taskId
		});
		let newTaskDate = { ...newTask.date, finishedDate: newFinishedDate + '' };
		this.changeTask (taskId,
			{
				isDone: isDone,
				date: newTaskDate
			});
	};
	changeTitle = (taskId, title) => {
		let newUpdateDate = new Date ();
		let newTask = this.props.tasks.find ((task) => {
			return task.id === taskId
		});
		let newTaskDate = { ...newTask.date, updateDate: newUpdateDate + '' };
		this.changeTask (taskId, { title: title, date: newTaskDate });
	};

	changePriority = (taskId, priority) => {
		this.changeTask (taskId, { priority: priority });
	};

	deleteTask = (taskId) => {
		this.props.deleteTaskStore(taskId, this.props.id);
	};

	render = () => {
		return (
			<div>
				<div className="todoList">
					<Root state={this.state} addTask={this.addTask} changeFilter={this.changeFilter} id={this.props.id}
						  changeTitle={this.changeTitle} changeStatus={this.changeStatus} deleteTask={this.deleteTask}
						  changePriority={this.changePriority} title={this.props.title} display={this.props.display}
						  tasks={this.props.tasks.filter (t => {
							  return this.props.filterValue === "Active" && t.isDone === false ||
								  this.props.filterValue === "Completed" && t.isDone === true ||
								  this.props.filterValue === "All"
						  })}/>
				</div>
			</div>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		filterValue: state.filterValue,
		nextTaskId: state.nextTaskId
	}
};


const ConnectedTodoList = connect (mapStateToProps,
	{addTaskStore, changeFilterStore, changeTaskStore,deleteTaskStore}) (TodoList);

export default ConnectedTodoList;
