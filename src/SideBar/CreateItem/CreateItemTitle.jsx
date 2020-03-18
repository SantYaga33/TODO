import React from 'react';
import styles from './CreateItemTitle.module.css';


class CreateItemTitle extends React.Component {
	constructor (props) {
		super (props);
	}

	state = {
		editMode: false
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
	onTitleChange = (e) => {
		this.props.changeTitle (this.props.item.id, e.currentTarget.value)
	};
	onDeleteItem = () => {
		this.props.deleteTask (this.props.item.id)
	};
	render () {

		return (
			<div className={styles.wrap_title__item}>
				<div className={styles.tasks_wrap__title}>
					{this.state.editMode
						? <input className={styles.input_onblur} onBlur={this.deactivateEditMode}
								 onChange={this.onTitleChange} type='text'  maxLength="25"
								 value={this.props.item.title} autoFocus={true}/>
						:
						<div className={styles.item_title} onClick={this.activeEditorMode}
							 maxLength="25"	>{this.props.item.title}</div>
					}
				</div>
				<div className={styles.wrap_button}>
					<button onClick={this.onDeleteItem}>del</button>
				</div>
			</div>
		);
	}
}

export default CreateItemTitle;