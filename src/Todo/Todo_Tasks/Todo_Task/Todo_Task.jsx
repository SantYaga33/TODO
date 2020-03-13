import React from 'react';
import styles from './Todo_Task.module.css';
import classNames from "classnames";


class TodoTask extends React.Component {

	constructor (props) {
		super (props);
	}

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


//
// {this.state.editMode
// ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChange}
// value={this.props.task.title} autoFocus={true}/>
// : <span onClick={this.activeEditorMode}> {this.props.task.id}
// {this.props.task.title}, {this.props.task.priority}</span>
// }
//
//


	render = () => {
		return (
			<div className={styles.tasks_item}>
				<div className={styles.tasks_title__wrap}>

					{this.state.editMode
					? <input  className={styles.input_onblur} onBlur={this.deactivateEditMode} onChange={this.onTitleChange}
					value={this.props.task.title} autoFocus={true}/>
					:<div className={styles.task_title} onClick={this.activeEditorMode}>{this.props.task.title}</div>
					}


					<div className={classNames (styles.liquid, styles.liquid_red)}></div>
				</div>
				<div className={styles.task_buttons}>
					<button className={styles.task_button__red}>high</button>
					<button className={styles.task_button__green}>medium</button>
					<button className={styles.task_button__yellow}>low</button>
				</div>
				<div className={styles.task_done}>
					<input type="checkbox"  checked={this.props.task.isDone}
						   onChange={this.onIsDoneChanges}/>
				</div>
				<div className={styles.task_delete}>
					<button>del</button>
				</div>
			</div>
		);
	};
}

export default TodoTask;