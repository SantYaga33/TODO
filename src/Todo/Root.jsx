import React from 'react';
import styles from './Root.module.css';

class Root extends React.Component {
	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div className={styles.root_wrap}>
				<div className={styles.header}>
					<div className={styles.header_title}>a</div>
					<div className={styles.header_logo}>icon
						<div className={styles.header_logo__icon}>

						</div>
						<div className={styles.header_logo__hide}>
							<button> hide</button>
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
						<input type="text"/>
						<button>add</button>
					</div>
					<div className={styles.tasks_item}>
						<div className={styles.task_title}>title</div>
						<div className={styles.task_buttons}>
							<button>high</button>
							<button>medium</button>
							<button>low</button>
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