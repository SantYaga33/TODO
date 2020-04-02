import React from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";
import Loader from "./Loader/Loader";
import SideBar from "./SideBar/SideBar";
import WelcomePage from "./WelcomePage/WelcomePage";
import { repository } from "./Repository";
import { connect } from "react-redux";


class App extends React.Component {

	state = {
		todolists: [
			{ id: 0, titleItem: 'My notice', display: true, selectItem: true },
		],
		errorTitle: false,
		titleItem: '',
		nextTaskId: 1,
		loader: true,
		isTodo: true
	};

	componentDidMount () {
		setTimeout (() => {
		this.props.setLoading(false);
	}, 3000);

		this.restoreState ();

	};

	saveState = () => {
		repository.saveTodoList (this.state);
	};

	restoreState = () => {
		let todolists = repository.getTodoList ();
		if ( todolists !== null ) {
			this.setState (todolists);
		}
	};

	addItem = (title) => {
		let todolist = {
			id: this.props.nextTaskId,
			titleItem: title,
			display: false,
			selectItem: false
		};

		this.props.addTodolist(todolist,this.props.nextTaskId);
		// let newTodolists = [ ...this.state.todolists, newItem ];
		// this.setState ({
		// 	todolists: newTodolists,
		// 	nextTaskId: this.state.nextTaskId + 1,
		// }, () => {
		// 	this.setState ({
		// 		isTodo: true,
		// 		todolists: this.state.todolists.map ((todo, index) => {
		// 			if ( index === this.state.todolists.length - 1 ) {
		// 				return { ...todo, display: true, selectItem: true }
		// 			} else {
		// 				return { ...todo, display: false, selectItem: false }
		// 			}
		// 		})
		//
		// 	}, () => this.saveState (this.state));
		// });
	};

	onAddItemClick = () => {
		let newTitleItem = this.props.titleItem;
		this.props.addTodolistClick(newTitleItem);
		this.addItem (newTitleItem);
		// this.setState ({
		// 	titleItem: ''
		// });
		// if ( newTitleItem === '' ) {
		// 	this.setState ({
		// 		errorTitle: true
		// 	}, () => {
		// 		this.saveState (this.state);
		// 	});
		// } else {
		// 	this.setState ({
		// 		errorTitle: false
		// 	}, () => {
		// 		this.saveState (this.state);
		// 	});
		// 	this.addItem (newTitleItem);
		// }

	};
	onAddItemKeyPress = (e) => {
		if ( e.key === "Enter" ) {
			let newTitleItem = this.props.titleItem;
			this.props.addTodolistClick(newTitleItem);
			this.addItem (newTitleItem);
		}

		// if ( e.key === "Enter" ) {
		// 	let newTitleItem = this.state.titleItem;
		// 	this.setState ({
		// 		titleItem: ''
		// 	});
		// 	if ( newTitleItem === '' ) {
		// 		this.setState ({
		// 			errorTitle: true
		// 		}, () => {
		// 			this.saveState (this.state);
		// 		});
		// 	} else {
		// 		this.setState ({
		// 			errorTitle: false
		// 		}, () => {
		// 			this.saveState (this.state);
		// 		});
		// 		this.addItem (newTitleItem);
		// 	}
		// }
	};

	onTitleItemChange = (e) => {
		let titleItem = e.currentTarget.value
		this.props.setTodolistTitle(titleItem);

		// this.setState ({
		// 	errorTitle: false,
		// 	titleItem: e.currentTarget.value
		// }, () => {
		// 	this.saveState (this.state);
		// });

	};
	choiceItem = (itemId) => {

		this.props.choiceTodoList(itemId);
		// this.setState ({
		// 	todolists: this.state.todolists.map (todo => {
		// 		if ( todo.id === itemId ) {
		// 			return { ...todo, display: true, selectItem: true }
		// 		} else {
		// 			return { ...todo, display: false, selectItem: false }
		// 		}
		// 	})
		// }, () => {
		// 	this.saveState (this.state);
		// });
	};

	deleteItem = (itemId) => {

		this.props.deleteTodolist(itemId);
		// if ( this.state.todolists.length - 1 !== 0 ) {
		// 	this.setState ({
		// 		isTodo: true,
		// 		todolists: this.state.todolists.filter (todo => todo.id !== itemId)
		// 	}, () => {
		// 		this.setState ({
		// 			todolists: this.state.todolists.map ((todo, index) => {
		// 				if ( index === this.state.todolists.length - 1 ) {
		// 					return { ...todo, display: true, selectItem: true }
		// 				} else {
		// 					return { ...todo, display: false, selectItem: false }
		// 				}
		// 			})
		// 		}, () => this.saveState (this.state));
		// 	});
		// } else {
		// 	this.setState ({
		// 		todolists: this.state.todolists.filter (todo => todo.id !== itemId),
		// 		isTodo: false
		// 	}, () => {
		// 		this.saveState (this.state);
		// 	});
		// }
	};


	render () {
		let todoListElements = this.props.todolists.map (td =>
			<TodoList key={td.id} id={td.id} title={td.titleItem}
					  display={td.display ? 'display_block' : 'display_none'}/>);

		return (
			<div className='main_page'>
				{this.props.loading ? <Loader/> :
					<div className='main_page__wrap'>
						<SideBar errorTitle={this.props.errorTitle} todolists={this.props.todolists}
								 choiceItem={this.choiceItem}
								 deleteItem={this.deleteItem} onAddItemKeyPress={this.onAddItemKeyPress}
								 onTitleItemChange={this.onTitleItemChange} titleItem={this.props.titleItem}
								 onAddItemClick={this.onAddItemClick}/>
						<div className='join'></div>
						<div className='wrap_items'>
							{this.props.isTodo ?
								<div>{todoListElements}</div>
								: <WelcomePage/>
							}
						</div>
					</div>
				}
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		todolists: state.todolists,
		loading: state.loading,
		nextTaskId: state.nextTaskId,
		isTodo: state.isTodo,
		titleItem: state.titleItem
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		addTodolist: (todolist,nextTaskId) => {
			const action = {
				type: "ADD-TODOLIST",
				todolist: todolist,
				nextTaskId: nextTaskId
			};
			dispatch (action)
		},
		setLoading: (loading) => {
			const action = {
				type: 'SET_LOADING',
				loading:loading
			};
			dispatch (action)
		},
		setTodolistTitle: (titleItem) => {
			const action = {
				type: 'SET_TITLE_TODOLIST',
				titleItem: titleItem
			};

			dispatch (action)
		},
		addTodolistClick: (newTitleItem) => {
			const action = {
				type: 'ADD_TODOLIST_CLICK',
				newTitleItem: newTitleItem
			};

			dispatch (action)
		},
		choiceTodoList: (itemId) => {
			const action = {
				type: 'CHOICE_TODOLIST',
				itemId: itemId
			};

			dispatch (action)
		},
		deleteTodolist: (itemId) => {
			const action = {
				type: 'DELETE_TODOLIST',
				itemId: itemId
			};

			dispatch (action)
		}
	}
};



const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(App);
export default ConnectedApp;
