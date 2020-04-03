export const ADD_TODOLIST = 'ADD_TODOLIST';
export const SET_LOADING = 'SET_LOADING';
export const SET_TITLE_TODOLIST = 'SET_TITLE_TODOLIST';
export const ADD_TODOLIST_CLICK = 'ADD_TODOLIST_CLICK';
export const CHOICE_TODOLIST = 'CHOICE_TODOLIST';
export const DELETE_TODOLIST = 'DELETE_TODOLIST';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const CHANGE_TASK = 'CHANGE_TASK';
export const CHANGE_FILTER_VALUE = 'CHANGE_FILTER_VALUE';


export const addTodoListAC = (todolist,nextTodolistId) => {
	return { type: ADD_TODOLIST, todolist, nextTodolistId }
};

export const setLoadingAC = (loading) => {
	return { type: SET_LOADING, loading }
};

export const setTodolistTitleAC = (titleItem) => {
	return { type: SET_TITLE_TODOLIST, titleItem }
};

export const addTodolistClickAC = (newTitleItem) => {
	return { type: ADD_TODOLIST_CLICK, newTitleItem}
};

export const choiceTodoListAC = (itemId) => {
	return { type: CHOICE_TODOLIST, itemId}
};

export const deleteTodolistAC = (itemId) => {
	return { type: DELETE_TODOLIST, itemId}
};

export const addTaskStoreAC = (newTask, todolistId) => {
	return { type: ADD_TASK, newTask, todolistId }
};
export const deleteTaskStoreAC = (taskId, todolistId) => {
	return { type: DELETE_TASK, taskId, todolistId}
};
export const changeTaskStoreAC = (taskId, obj, todolistId) => {
	return { type: CHANGE_TASK, taskId, obj, todolistId}
};
export const changeFilterStoreAC = (newFilterValue) => {
	return { type: CHANGE_FILTER_VALUE, newFilterValue}
};


const initialState = {

	todolists: [
		{
			id: 0, titleItem: 'My notice', display: true, selectItem: true, tasks: [
				{
					id: 0,
					title: 'Example',
					isDone: false,
					priority: 'high',
					date: {
						createDate: 'Wed Mar 25 2020 18:21:54 GMT+0400 (Персидский залив)',
						updateDate: 'Wed Mar 25 2020 18:21:54 GMT+0400 (Персидский залив)',
						finishedDate: 'Wed Mar 25 2020 18:21:54 GMT+0400 (Персидский залив)'
					}
				},
				{
					id: 1,
					title: 'Example',
					isDone: false,
					priority: 'low',
					date: {
						createDate: 'Wed Mar 25 2020 18:21:54 GMT+0400 (Персидский залив)',
						updateDate: 'Wed Mar 25 2020 18:21:54 GMT+0400 (Персидский залив)',
						finishedDate: 'Wed Mar 25 2020 18:21:54 GMT+0400 (Персидский залив)'
					}
				},
				{
					id: 2,
					title: 'Example',
					isDone: true,
					priority: 'medium',
					date: {
						createDate: 'Wed Mar 25 2020 18:21:54 GMT+0400 (Персидский залив)',
						updateDate: 'Wed Mar 25 2020 18:21:54 GMT+0400 (Персидский залив)',
						finishedDate: 'Wed Mar 25 2020 18:21:54 GMT+0400 (Персидский залив)'
					}
				},
			],
		},
	],
	errorTitle: false,
	titleItem: '',
	nextTodolistId: 1,
	loading: true,
	isTodo: true,
	filterValue: "All",
	nextTaskId: 3,
};

const reducer = (state = initialState, action) => {

	switch ( action.type ) {

		case  ADD_TODOLIST:

			let newTodolists = [ ...state.todolists, action.todolist ].map (
				(todo, index) => {
					if ( index === state.todolists.length ) {
						return { ...todo, display: true, selectItem: true }
					} else {
						return { ...todo, display: false, selectItem: false }
					}
				}
			);

			return {
				...state,
				todolists: newTodolists,
				nextTodolistId: action.nextTodolistId + 1,
				isTodo: true
			};

		case SET_LOADING:

			return {
				...state,
				loading: action.loading
			};
		case SET_TITLE_TODOLIST:

			return {
				...state,
				titleItem: action.titleItem
			};

		case ADD_TODOLIST_CLICK:

			if ( action.newTitleItem === '' ) {
				return {
					...state,
					errorTitle: true,
					titleItem: ''
				}

			} else {
				return {
					...state,
					errorTitle: false,
					titleItem: ''
				}
			}

		case CHOICE_TODOLIST:
			let todolistsChoice = [ ...state.todolists ].map (todo => {
				if ( todo.id === action.itemId ) {
					return { ...todo, display: true, selectItem: true }
				} else {
					return { ...todo, display: false, selectItem: false }
				}
			});

			return {
				...state,
				todolists: todolistsChoice

			};

		case DELETE_TODOLIST:

			if ( state.todolists.length - 1 !== 0 ) {
				let todolistFilter = [ ...state.todolists ].filter (todo => todo.id !== action.itemId);
				console.log (todolistFilter);
				let newtodolists = todolistFilter.map ((todo, index) => {
					if ( index === todolistFilter.length - 1 ) {
						return { ...todo, display: true, selectItem: true }
					} else {
						return { ...todo, display: false, selectItem: false }
					}
				});
				console.log (newtodolists);
				return {
					...state,
					todolists: newtodolists,
					isTodo: true
				}
			} else {
				return {
					...state,
					isTodo: false,
					todolists: [ ...state.todolists ].filter (todo => todo.id !== action.itemId)
				}

			}

		case  ADD_TASK:

			return {
				...state,
				todolists: state.todolists.map (tl => {
					if ( tl.id === action.todolistId ) {
						return { ...tl, tasks: [ ...tl.tasks, action.newTask ] }
					} else {
						return tl
					}

				}),
				nextTaskId: state.nextTaskId+1
			};

		case  DELETE_TASK:

			return {
				...state,
				todolists: state.todolists.map (tl => {
					if ( tl.id === action.todolistId ) {
						return { ...tl, tasks: [ ...tl.tasks ].filter (t => t.id !== action.taskId) }
					} else {
						return tl
					}
				})
			};
		case  CHANGE_TASK:

			return {
				...state,
				todolists: state.todolists.map (tl => {
					if ( tl.id === action.todolistId ) {
						return {
							...tl, tasks: [ ...tl.tasks ].map (t => {
								if ( t.id === action.taskId ) {
									return { ...t, ...action.obj }
								} else {
									return t
								}
							})
						}
					} else {
						return tl
					}
				})
			};

		case  CHANGE_FILTER_VALUE:

			return {
				...state,
				filterValue: action.newFilterValue
			};

		default:

			return state;
	}

};

export default reducer;