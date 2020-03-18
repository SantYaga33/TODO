import React from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";
import Loader from "./Loader/Loader";
import SideBar from "./SideBar/SideBar";


class App extends React.Component {
	constructor (props) {
		super (props);
	}

	state = {
		todolists: [
			{ id: 1, titleItem: 'My notice' },
		],
		error: false,
		titleItem: '',
		nextTaskId: 2,
		loader: true
	};

	componentDidMount () {
		this.restoreState ();
		setTimeout (() => {
			this.setState ({
				loader: false
			});

		}, 3000)
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
	// deleteItem = (ItemId) => {
	// 	let newTasks = this.state.tasks.filter (t => t.id !== ItemId);
	// 	this.setState ({
	// 		tasks: newTasks
	// 	}, () => {this.saveState (this.state);})
	// };

	render () {
		let todoListElements = this.state.todolists.map (td => <TodoList id={td.id} title={td.titleItem}/>);

		return (
			<div className='main_page'>
				{this.state.loader ? <Loader/> :
				<div className='main_page__wrap'>
					<SideBar error={this.state.error} titleItem={this.state.titleItem}
						  onAddItemKeyPress={this.onAddItemKeyPress} onTitleItemChange={this.onTitleItemChange}
							  onAddItemClick={this.onAddItemClick}/>
					<div className='wrap_items'>
						{todoListElements}
					</div>
				</div>
				}
			</div>
		);
	}
}

export default App;