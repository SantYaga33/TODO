import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        tasks: [
            { title: 'CSS', isDone: true , priority:'low' },
            { title: 'Angular', isDone: false, priority:'high' },
            { title: 'ReactJS', isDone: false, priority:'low' },
            { title: 'Patterns', isDone: true, priority:'medium' }
        ],
        filterValue: "Completed",
    }
    onAddTaskClick = () => {
        let newText =  this.newTaskTitleRef.current.value !== '' ?  this.newTaskTitleRef.current.value: 'Нет Заголовка';
        let newTask = {
            title: newText,
            isDone: true ,
            priority:'low'
        };
        let newTasks = [...this.state.tasks, newTask];

        this.setState( {
            tasks : newTasks,
            filterValue: "All"
        })
        this.newTaskTitleRef.current.value = '';
    }
    newTaskTitleRef = React.createRef();

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader onAddTaskClick = {this.onAddTaskClick} refTitleTask = {this.newTaskTitleRef}/>
                    <TodoListTasks  tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}

export default App;

