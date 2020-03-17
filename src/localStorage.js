export const saveState = (state) => {
	let stateAsString = JSON.stringify (state);
	localStorage.setItem ('our-state' );
};

export const restoreState = (currentState) => {
	let state;
	let stateAsString = localStorage.getItem ('our-state' );
	if ( stateAsString !== null ) {
		 state = JSON.parse (stateAsString);
		return state;
	} else {

	} return currentState;

};