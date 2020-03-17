import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import styles from "./Todo/Todo_Tasks/Todo_Tasks.module.css";


class App extends React.Component {
	constructor (props) {
		super (props);
	}

	state = {
		todolists: [
			{ id: 1, titleItem: 'one' },
		],
		error: false,
		titleItem: '',
		nextTaskId: 2,
	};

	componentDidMount () {
		this.restoreState ();
	};

	saveState = () => {
		let stateAsString = JSON.stringify (this.state);
		localStorage.setItem ('Todo-list', stateAsString);
	};

	restoreState = () => {
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
		let stateAsString = localStorage.getItem ('Todo-list');
		if ( stateAsString !== null ) {
			state = JSON.parse (stateAsString);
		}
		this.setState (state);
	};


	addItem = (title) => {
		let newItem = {
			id: this.state.nextTaskId,
			titleItem: title,
		};

		let newTodolists = [ ...this.state.todolists, newItem ];
		this.setState ({
			todolists: newTodolists,
			nextTaskId: this.state.nextTaskId + 1,
		}, () => {this.saveState (this.state);});

	};


	onAddItemClick = () => {
		let newTitleItem = this.state.titleItem;
		this.setState ({
			titleItem: ''
		});
		if ( newTitleItem === '' ) {
			this.setState ({
				error: true
			});
		} else {
			this.setState ({
				error: false
			});
			this.addItem (newTitleItem);
		}

	};
	onAddItemKeyPress = (e) => {
		if ( e.key === "Enter" ) {
			let newTitleItem = this.state.titleItem;
			this.setState ({
				titleItem: ''
			});
			if ( newTitleItem === '' ) {
				this.setState ({
					error: true
				});
			} else {
				this.setState ({
					error: false
				});
				this.addItem (newTitleItem);
			}

		}
	};

	onTitleItemChange = (e) => {
		this.setState ({
			error: false,
			titleItem: e.currentTarget.value
		});

	};
	errorClass = 'inputError';

	render () {
		let todoListElements = this.state.todolists.map (td => <TodoList id={td.id} title={td.titleItem}/>)

		return (
			<div className='wrap'>
				<div className='tasks_wrap__input'>
					<div className='tasks_input'>
						<input className={this.state.error ? this.errorClass : ''} value={this.state.titleItem}
							   type="text" placeholder='Enter  name' onKeyPress={this.onAddItemKeyPress}
							   onChange={this.onTitleItemChange} maxLength="25"/>
						<button className='tasks_button' onClick={this.onAddItemClick}>add</button>
					</div>
				</div>
				<div className='wrap_items'>
					{todoListElements}
				</div>
			</div>
		);
	}
};

export default App;