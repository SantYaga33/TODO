import React from 'react';
import styles from './Root.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Root extends React.Component {
	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div className={styles.root_wrap}>
				<div className={styles.header}>
					<div className={styles.header_title}> New Tasks </div>
					<div className={styles.header_logo}>
						<div className={styles.header_logo__icon}>
							<FontAwesomeIcon icon={['fab', 'sith']} spin size ='lg' />
						</div>
						<div className={styles.header_logo__hide}>
							<button className={styles.header_logo__button}>hide</button>
						</div>
					</div>
					<div className={styles.header_buttons}>
						<button className={styles.header_buttons__item}>All</button>
						<button className={styles.header_buttons__item}>Done</button>
						<button className={styles.header_buttons__item}>Active</button>
					</div>
				</div>
				<div className={styles.tasks_wrap}>
						<div className={styles.tasks_input}>
						<input type="text" placeholder='Enter task name'/>
						<button className={styles.tasks_button}>add</button>
					</div>
					<div className={styles.tasks_item}>
						<div className={styles.task_title}>title</div>
						<div className={styles.task_buttons}>
							<button className={styles.task_buttons__item}>high</button>
							<button className={styles.task_buttons__item}>medium</button>
							<button className={styles.task_buttons__item}>low</button>
						</div>
						<div className={styles.task_done}>
							<input type="checkbox"/>
						</div>
						<div className={styles.task_delete}>
							<button>del</button>
						</div>

					</div>
				</div>
			</div>
		);

	};

};

export default Root;