import React from 'react';
import styles from './Todo_Tasks.module.css';
import TodoTask from "./Todo_Task/Todo_Task";
import classNames from 'classnames';

class TodoTasks extends React.Component {

	constructor (props) {
		super (props);
	}

	render = () => {
		return (
			<div className={styles.tasks_wrap}>
				<div className={styles.tasks_input}>
					<input type="text" placeholder='Enter task name'/>
					<button className={styles.tasks_button}>add</button>
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
				<TodoTask/>
				<TodoTask/>
			</div>
		);
	};
}

export default TodoTasks;