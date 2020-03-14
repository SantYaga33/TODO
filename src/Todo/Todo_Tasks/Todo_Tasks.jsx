import React from 'react';
import styles from './Todo_Tasks.module.css';
import TodoTask from "./Todo_Task/Todo_Task";
import classNames from 'classnames';


class TodoTasks extends React.Component {

	constructor (props) {
		super (props);
	}

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


	errorClass = styles.inputError;


	render = () => {

		let tasksElements = this.props.tasks.map(task => {
			return (
				<TodoTask  changeStatus={this.props.changeStatus} key={task.id} id={task.id} priority={task.priority}
						   task={task} changeTitle={this.props.changeTitle} deleteTask={this.props.deleteTask}
						   changePriority={this.props.changePriority}
						   classForPriority={task.priority === 'high'? classNames (styles.liquid, styles.liquid_red)
						   : task.priority === 'medium'? classNames (styles.liquid, styles.liquid_green) :
						   classNames (styles.liquid, styles.liquid_yellow)}/>
			)
		});
		return (
			<div className={styles.tasks_wrap}>
				<div className={styles.tasks_wrap__input}>
					<div className={styles.tasks_input}>
						<input className={this.state.error ? this.errorClass : ''} value={this.state.title}
							   type="text" placeholder='Enter task name'  onKeyPress={this.onAddTaskKeyPress}
							   onChange={this.onTitleChange}/>
						<button className={styles.tasks_button} onClick={this.onAddTaskClick}>add</button>
					</div>
				</div>
				<div className={styles.tasks_item}>
					<div className={styles.tasks_title__wrap}>
						<div className={styles.task_title}>example</div>
						<div className={classNames (styles.liquid, styles.liquid_red)}></div>
					</div>
					<div className={styles.task_buttons}>
						<button className={styles.task_button__red}>high</button>
						<button className={styles.task_button__green}>medium</button>
						<button className={styles.task_button__yellow}>low</button>
					</div>
					<div className={styles.task_done}>
						<input type="checkbox"/>
					</div>
					<div className={styles.task_delete}>
						<button>del</button>
					</div>
				</div>
				<div className={styles.tasks_item}>
					<div className={styles.tasks_title__wrap}>
						<div className={styles.task_title}>example</div>
						<div className={classNames (styles.liquid, styles.liquid_green)}></div>
					</div>
					<div className={styles.task_buttons}>
						<button className={styles.task_button__red}>high</button>
						<button className={styles.task_button__green}>medium</button>
						<button className={styles.task_button__yellow}>low</button>
					</div>
					<div className={styles.task_done}>
						<input type="checkbox"/>
					</div>
					<div className={styles.task_delete}>
						<button>del</button>
					</div>
				</div>
				<div className={styles.tasks_item}>
					<div className={styles.tasks_title__wrap}>
						<div className={styles.task_title}>example</div>
						<div className={classNames (styles.liquid, styles.liquid_yellow)}></div>
					</div>
					<div className={styles.task_buttons}>
						<button className={styles.task_button__red}>high</button>
						<button className={styles.task_button__green}>medium</button>
						<button className={styles.task_button__yellow}>low</button>
					</div>
					<div className={styles.task_done}>
						<input type="checkbox"/>
					</div>
					<div className={styles.task_delete}>
						<button>del</button>
					</div>
				</div>
				{tasksElements}
			</div>
		);
	};
}

export default TodoTasks;