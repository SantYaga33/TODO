import React from 'react';
import './App.css';
import TodoList from "./Ui/TodoList/TodoList";
import Loader from "./Ui/Loader/Loader";
import SideBar from "./Ui/SideBar/SideBar";
import WelcomePage from "./Ui/WelcomePage/WelcomePage";
import { repository } from "./Repository";
import { connect } from "react-redux";
import {
	addTodoList, addTodolistClick, choiceTodoList, deleteTodolist, setLoading, setTodolistTitle, setTodoLists
} from "./Redux/reducer";


class App extends React.Component {

	componentDidMount () {
		setTimeout (() => {
			this.props.setLoading (false);
		}, 3000);
	};

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

	componentDidUpdate (prevProps, prevState, snapshot) {
		if ( prevState !== this.props.state ) {
			repository.saveTodoList (this.props.state);
			console.log (this.props.state);
		}
	}

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
						<div className='join'> </div>
						<div className='wrap_items'>
							{this.props.isTodo ?
								<>{todoListElements}</>
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
		state: state

	}
};

const ConnectedApp = connect (mapStateToProps,
	{
		addTodoList, addTodolistClick, choiceTodoList, deleteTodolist, setLoading, setTodolistTitle,
		setTodoLists
	}) (App);

export default ConnectedApp;
