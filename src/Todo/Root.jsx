import React from 'react';
import styles from './Root.module.css';
import Header from "./Todo_Header/Todo_Header";
import TodoTasks from "./Todo_Tasks/Todo_Tasks";


class Root extends React.Component {

	constructor (props) {
		super (props);
	}

	render = () => {
		return (
			<div className={styles.root_wrap}>
				<Header state={this.props.state} changeFilter={this.props.changeFilter}/>
				<TodoTasks addTask={this.props.addTask} tasks={this.props.tasks} deleteTask={this.props.deleteTask}
						   changeTitle={this.props.changeTitle} changeStatus={this.props.changeStatus}
						   state={this.props.state} changePriority={this.props.changePriority}/>
			</div>
		);

	};

}

export default Root;