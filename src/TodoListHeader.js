import React from 'react';

class TodoListHeader extends React.Component {


	onAddTaskClick = () => {
		let newText = this.props.refTitleTask.current.value !== '' ?
			this.props.refTitleTask.current.value : 'Нет Заголовка';
		this.props.refTitleTask.current.value = '';
		this.props.addTask(newText);
	};

	render = () => {
		return (
			<div className="todoList-header">
				<h3 className="todoList-header__title">What to Learn</h3>
				<div className="todoList-newTaskForm">
					<input ref={this.props.refTitleTask} type="text" placeholder="New task name"/>
					<button onClick={this.onAddTaskClick}>Add</button>
				</div>
			</div>
		);
	}
}

export default TodoListHeader;

