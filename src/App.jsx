import React from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";
import Loader from "./Loader/Loader";
import SideBar from "./SideBar/SideBar";
import WelcomePage from "./WelcomePage/WelcomePage";
import { repository } from "./Repository";
import { connect } from "react-redux";


class App extends React.Component {

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
			id: this.props.nextTodolistId,
			titleItem: title,
			display: false,
			selectItem: false
		};
		this.props.addTodolist(todolist,this.props.nextTodolistId);

	};

	onAddItemClick = () => {
		let newTitleItem = this.props.titleItem;
		this.props.addTodolistClick(newTitleItem);
		if (newTitleItem) {
			this.addItem (newTitleItem);
		}
	};
	onAddItemKeyPress = (e) => {
		let newTitleItem = this.props.titleItem;
		if ( e.key === "Enter" ) {
			this.props.addTodolistClick(newTitleItem);
			if(newTitleItem) {
				this.addItem (newTitleItem);
			}
		}
	};

	onTitleItemChange = (e) => {
		let titleItem = e.currentTarget.value
		this.props.setTodolistTitle(titleItem);
	};

	choiceItem = (itemId) => {
		this.props.choiceTodoList(itemId);
	};

	deleteItem = (itemId) => {
		this.props.deleteTodolist(itemId);
	};


	render () {
		let todoListElements = this.props.todolists.map (td =>
			<TodoList key={td.id} id={td.id} title={td.titleItem}
					  display={td.display ? 'display_block' : 'display_none'}/>);

		return (
			<div className='main_page'>
				{this.props.loading ? <Loader/> :
					<div className='main_page__wrap'>
						<SideBar choiceItem={this.choiceItem} deleteItem={this.deleteItem}
								 onAddItemKeyPress={this.onAddItemKeyPress}
								 onTitleItemChange={this.onTitleItemChange}
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
		nextTodolistId: state.nextTodolistId,
		isTodo: state.isTodo,
		titleItem: state.titleItem,

	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		addTodolist: (todolist,nextTodolistId) => {
			const action = {
				type: "ADD-TODOLIST",
				todolist: todolist,
				nextTodolistId: nextTodolistId
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
