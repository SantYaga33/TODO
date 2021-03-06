import React from 'react';
import styles from './Todo_Task.module.css';
import classNames from "classnames";


class TodoTask extends React.Component {

	state = {
		editMode: false
	};

	onIsDoneChanges = (e) => {
		this.props.changeStatus (this.props.task.id, e.currentTarget.checked)
	};
	onTitleChange = (e) => {
		this.props.changeTitle (this.props.task.id, e.currentTarget.value)
	};
	onChangePriorityHigh = () => {
		this.props.changePriority (this.props.task.id, 'high');
	};
	onChangePriorityMedium = () => {
		this.props.changePriority (this.props.task.id, 'medium');
	};
	onChangePriorityLow = () => {
		this.props.changePriority (this.props.task.id, 'low');
	};

	activeEditorMode = () => {
		this.setState ({
			editMode: true
		});
	};
	deactivateEditMode = () => {
		this.setState ({
			editMode: false
		});
	};

	onDeleteTask = () => {
		this.props.deleteTask (this.props.task.id)
	};
	render = () => {
		return (
			<li className={styles.tasks_item} data-priority={this.props.priority}>
				{/** ===== tooltip ===== * */}

				{/*<div className={styles.tooltip}>*/}
				{/*	<div className={styles.tooltip_wrap}>*/}
				{/*		<h4 className={styles.tooltip_title}>Task title : {this.props.task.title}</h4>*/}
				{/*		<div className={styles.tooltip_wrap__discr}>*/}
				{/*			<div className={styles.tooltip_info}>created : {this.props.createDate} </div>*/}
				{/*			<div className={styles.tooltip_info}>updated :{this.props.updateDate} </div>*/}
				{/*			<div className={styles.tooltip_info}>finished : {this.props.finishedDate} </div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</div>*/}

				{/** ===== tooltip ===== * */}

				<div className={styles.tasks_title__wrap}>
					{this.state.editMode
						? <input className={styles.input_onblur} onBlur={this.deactivateEditMode}
								 onChange={this.onTitleChange} type='text' maxLength="15"
								 value={this.props.task.title} autoFocus={true}/>
						:
						<div className={styles.task_title} onClick={this.activeEditorMode}
							 maxLength="15">{this.props.task.title}</div>
					}
					<div className={this.props.priority === 'high' ? classNames (styles.liquid, styles.liquid_red)
						: this.props.priority === 'medium' ? classNames (styles.liquid, styles.liquid_green) :
							classNames (styles.liquid, styles.liquid_yellow)}>

					</div>
				</div>
				<div className={styles.task_buttons}>
					<button className={styles.task_button__red}
							onClick={this.onChangePriorityHigh}>high
					</button>
					<button className={styles.task_button__green}
							onClick={this.onChangePriorityMedium}>medium
					</button>
					<button className={styles.task_button__yellow}
							onClick={this.onChangePriorityLow}>low
					</button>
				</div>
				<div className={styles.task_done}>
					<input type="checkbox" checked={this.props.task.isDone}
						   onChange={this.onIsDoneChanges} id={this.props.id}/> <label htmlFor={this.props.id}></label>
				</div>
				<div className={styles.task_delete}>
					<button onClick={this.onDeleteTask}>del</button>
				</div>
			</li>
		);
	};
}

export default TodoTask;









