import React from 'react';
import styles from './Todo_Task.module.css';
import classNames from "classnames";


class TodoTask extends React.Component {

	constructor (props) {
		super (props);
	}

	render = () => {
		return (
			<div className={styles.tasks_item}>
				<div className={styles.tasks_title__wrap}>
					<div className={styles.task_title}>title</div>
					<div className={classNames(styles.liquid, styles.liquid_red )}></div>
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
		);
	};
}

export default TodoTask;