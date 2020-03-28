export const repository = {
	saveTodoList(todolist) {
		this._save(todolist,'Todo-list' );
	},
	getTodoList() {
		 return this._get('Todo-list');
	},
	saveTasks(tasks, id) {
		this._save(tasks, 'our-state-'+ id)
	},
	getTasks(id) {
		return  this._get('our-state-' +id);
	},
	_save(data, key) {
		let stateAsString = JSON.stringify (data);
		localStorage.setItem (key, stateAsString);
	},
	_get(key) {
		let stateAsString = localStorage.getItem (key);
		if ( stateAsString !== null ) {
			let state = JSON.parse (stateAsString);
			return state;
		}
		return null;
	}
};