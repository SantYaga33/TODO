import { createStore } from "redux";

const initialState = {
	todolists: [
		{ id: 0, titleItem: 'My notice', display: true, selectItem: true },
	],
	errorTitle: false,
	titleItem: '',
	nextTodolistId: 1,
	loading: true,
	isTodo: true,
	tasks: [
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
	filterValue: "All",
	nextTaskId: 3,

};

const reducer = (state = initialState, action) => {

	switch ( action.type ) {

		case  'ADD-TODOLIST':

			let newTodolists = [ ...state.todolists, action.todolist ].map (
				(todo, index) => {
					if ( index === state.todolists.length  ) {
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

		case 'SET_LOADING':

			return {
				...state,
				loading: action.loading
			};
		case 'SET_TITLE_TODOLIST':

			return {
				...state,
				titleItem: action.titleItem
			};

		case'ADD_TODOLIST_CLICK':

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

		case 'CHOICE_TODOLIST':
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

		case 'DELETE_TODOLIST':

			if ( state.todolists.length - 1 !== 0 ) {
				let	todolistFilter = [...state.todolists].filter (todo => todo.id !== action.itemId);
				console.log(todolistFilter);
				let newtodolists = todolistFilter.map ((todo, index) => {
					if ( index === todolistFilter.length - 1 ) {
						return { ...todo, display: true, selectItem: true }
					} else {
						return { ...todo, display: false, selectItem: false }
					}
				});
				console.log(newtodolists);
				return {
					...state,
						todolists:newtodolists,
						isTodo: true
					}
			} else {
				return{
					...state,
					isTodo: false,
					todolists: [...state.todolists].filter (todo => todo.id !== action.itemId)
				}

			}

		default:

			return state;
	}

};


const store = createStore (reducer);
export default store;