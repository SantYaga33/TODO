import React from 'react';
import styles from './SideBar.module.css';
import CreateItemTitle from "./CreateItem/CreateItemTitle";


class SideBar extends React.Component {
	constructor (props) {
		super (props);
	}

	errorClass = styles.inputError;

	render () {

		return (
			<div className={styles.wrap}>
				<div className={styles.tasks_wrap__input}>
					<div className={styles.tasks_input}>
						<input className={this.props.error ? this.props.errorClass : ''}
							   value={this.props.titleItem} type="text" placeholder='Enter  name'
							   onKeyPress={this.props.onAddItemKeyPress} onChange={this.props.onTitleItemChange}
							   maxLength="25"/>
						<button className='tasks_button' onClick={this.props.onAddItemClick}>add</button>
					</div>
				</div>
				<div className={styles.list_items}>

				</div>
			</div>
		);
	}
}

export default SideBar;