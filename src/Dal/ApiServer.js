import axios from 'axios';


const instance = axios.create ({
	baseURL: `https://social-network.samuraijs.com/api/1.1/todo-lists`,
	withCredentials: true,
	headers: { 'API-KEY': '2e2f3f78-0b2b-433b-bff2-23720197bfa9' }
});

export const api = {

	getTodoList () {
		return instance.get();
	},
	getTasks (todolistId) {
		return instance.get(`/${todolistId}/tasks`)
	},
	createTodolist (title) {
		return instance.post('',{title: title});
	},
	createTask (todolistId, newTaskTitle) {
		return instance.post(`${todolistId}/tasks`,{title: newTaskTitle});
	},
	updateTask (todolistId, taskId, task) {
		return instance.put(`/${todolistId}/tasks/${taskId}`,{...task});
	},
	deleteTodolist (todolistId) {
		return instance.delete(`	${todolistId}`)
	},
	deleteTask (todolistId, taskId) {
		return instance.delete(`${todolistId}/tasks/${taskId}`)
	},
	updateTodolistTitle (todolistId, newTodolistTitle) {
		return instance.put(`/${todolistId} `, {title: newTodolistTitle});
	}
}