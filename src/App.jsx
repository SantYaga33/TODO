import React from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";
import Loader from "./Loader/Loader";
import SideBar from "./SideBar/SideBar";
import WelcomePage from "./WelcomePage/WelcomePage";
import { repository } from "./Repository";
import { connect } from "react-redux";
import axios from "axios";

import {addTodoList,addTodolistClick,choiceTodoList,deleteTodolist, setLoading,	setTodolistTitle, setTodoLists
} from "./Redux/reducer";


class App extends React.Component {

	componentDidMount () {
		setTimeout (() => {
			this.props.setLoading (false);
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

	// restoreState = () => {
	//
	// 	axios.get ("https://social-network.samuraijs.com/api/1.1/todo-lists", { withCredentials: true })
	// 		.then (res => {
	// 			this.props.setTodoLists(res.data);
	// 		});
	// };


	addItem = (title) => {
		let todolist = {
			id: this.props.nextTodolistId,
			titleItem: title,
			display: false,
			selectItem: false,
			tasks: []
		};
		this.props.addTodoList (todolist, this.props.nextTodolistId);

	};
	// addItem = (title) => {
	// 	axios.post ("https://social-network.samuraijs.com/api/1.1/todo-lists",
	// 		{title:title},
	// 		{
	// 			withCredentials: true,
	// 			headers:{'API-KEY':'ee6f2b26-8c6d-4680-bc97-a1aebe9730b2'}
	// 		})
	// 		.then (res => {
	// 			let todolist = res.data.data.item;
	// 			this.props.setTodoLists(todolist);
	// 			console.log (todolist);
	// 		});
	//
	// };

	onAddItemClick = () => {
		let newTitleItem = this.props.titleItem;
		this.props.addTodolistClick (newTitleItem);
		if ( newTitleItem ) {
			this.addItem (newTitleItem);
		}
	};
	onAddItemKeyPress = (e) => {
		let newTitleItem = this.props.titleItem;
		if ( e.key === "Enter" ) {
			this.props.addTodolistClick (newTitleItem);
			if ( newTitleItem ) {
				this.addItem (newTitleItem);
			}
		}
	};

	onTitleItemChange = (e) => {
		let titleItem = e.currentTarget.value
		this.props.setTodolistTitle (titleItem);
	};

	choiceItem = (itemId) => {
		this.props.choiceTodoList (itemId);
	};

	deleteItem = (itemId) => {
		this.props.deleteTodolist (itemId);
	};


	render () {
		let todoListElements = this.props.todolists.map (td =>
			<TodoList key={td.id} id={td.id} title={td.titleItem} tasks={td.tasks}
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


const ConnectedApp = connect (mapStateToProps,
	{ addTodoList, addTodolistClick, choiceTodoList, deleteTodolist, setLoading, setTodolistTitle,
		setTodoLists}) (App);

export default ConnectedApp;
