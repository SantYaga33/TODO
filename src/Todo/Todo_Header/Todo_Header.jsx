import React from 'react';
import styles from './Todo_Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderButtons from "./Header_Buttons/Header_Buttons";


class  Header extends React.Component {
	constructor (props) {
		super (props);
	}

	render () {
		return (
			<div className={styles.header}>
				<div className={styles.header_title}> New Tasks</div>
				<div className={styles.header_logo}>
					<div className={styles.header_logo__icon}>
						<FontAwesomeIcon icon={[ 'fab', 'sith' ]} spin size='lg'/>
					</div>
					<div className={styles.header_logo__hide}>
						<button className={styles.header_logo__button}>hide</button>
					</div>
				</div>
				<HeaderButtons />
			</div>
		);
	};
}

export default Header;