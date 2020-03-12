import React from 'react';

class TodoListHeader extends React.Component {

	state = {
		error: false,
		title: ''
	};

	onAddTaskClick = () => {
		let newText = this.state.title;
		this.setState ({
			title: ''
		});
		if ( newText === '' ) {
			this.setState ({
				error: true
			});
		} else {
			this.setState ({
				error: false
			});
			this.props.addTask (newText);
		}

	};
	onAddTaskKeyPress = (e) => {
		if ( e.key === "Enter" ) {
			let newText = this.state.title;
			this.setState ({
				title: ''
			});
			if ( newText === '' ) {
				this.setState ({
					error: true
				});
			} else {
				this.setState ({
					error: false
				});
				this.props.addTask (newText);
			}

		}
	};

	onTitleChange = (e) => {
		this.setState ({
			error: false,
			title: e.currentTarget.value
		});

	};

	render = () => {
		return (
			<div className="todoList-header">
				<h3 className="todoList-header__title">What to Learn</h3>
				<div className="todoList-newTaskForm">
					<input className={this.state.error ? 'error' : ''} value={this.state.title}
						   onKeyPress={this.onAddTaskKeyPress} onChange={this.onTitleChange}
						   type="text" placeholder="New task name"/>
					<button onClick={this.onAddTaskClick}>Add</button>
				</div>
			</div>
		);
	}
}

export default TodoListHeader;

