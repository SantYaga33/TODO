export const saveState = () => {
	let stateAsString = JSON.stringify (this.state);
	localStorage.setItem ('our-state', stateAsString);
};

export const restoreState = () => {
	let state = {
		tasks: [
			{
				id: 0,
				title: 'Example',
				isDone: false,
				priority: 'high'
			},
			{
				id: 1,
				title: 'Example',
				isDone: false,
				priority: 'low'
			},
			{
				id: 2,
				title: 'Example',
				isDone: true,
				priority: 'medium'
			},
		],
		filterValue: 'All',
		nextTaskId: 3,
	};
	let stateAsString = localStorage.getItem ('our-state');
	if ( stateAsString !== null ) {
		 state = JSON.parse (stateAsString);
	}
	this.setState(state);
};