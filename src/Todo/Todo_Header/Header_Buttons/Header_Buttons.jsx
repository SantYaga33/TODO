import React from 'react';
import styles from './Header_Buttons.module.css';


class  HeaderButtons extends React.Component {
	constructor (props) {
		super (props);
	}

	render () {
		return (
			<div className={styles.header_buttons}>
				<button className={styles.header_buttons__item}>All</button>
				<button className={styles.header_buttons__item}>Done</button>
				<button className={styles.header_buttons__item}>Active</button>
			</div>
		);
	};
};

export default HeaderButtons;