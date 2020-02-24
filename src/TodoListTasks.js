import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
	render = () => {

		let tasksElements = this.props.tasks.map(task => {
			return (
				<TodoListTask changeStatus={this.props.changeStatus}
							  task={task}/>
			)
		});
		return (
			<div className="todoList-tasks">
				{tasksElements}
			</div>
		);

	}
}

export default TodoListTasks;

