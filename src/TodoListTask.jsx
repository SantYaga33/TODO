import React from 'react';

class TodoListTask extends React.Component {
	state =  {
		editMode : false
	};

	onIsDoneChanges = (e) => {
		this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
	};
	onTitleChange = (e) => {
		this.props.changeTitle(this.props.task.id, e.currentTarget.value)
	};

	activeEditorMode = () => {
		this.setState({
			editMode : true
		});
	};
	deactivateEditMode = () => {
		this.setState({
			editMode : false
		});
	};

	render = () => {
		let currentClass =  this.props.task.isDone  ? 'todoList-task done' : 'todoList-task';

		return (
			<div className={currentClass}>
				<input type="checkbox"
					   checked={this.props.task.isDone}
					   onChange={this.onIsDoneChanges}/>
				{this.state.editMode
				? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChange}
						 value={this.props.task.title} autoFocus={true}/>
				: <span onClick={this.activeEditorMode}> {this.props.task.id}
				{this.props.task.title}, {this.props.task.priority}</span>
				}


			</div>
		);
	}
}

export default TodoListTask;

