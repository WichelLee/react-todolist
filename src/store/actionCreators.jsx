import { CHANGE_INPUT_VALUE, SAVE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
})

export const saveInputValue = () => ({
	type: SAVE_INPUT_VALUE,
})

export const deleteTodoItem = (index) => ({
	type: DELETE_TODO_ITEM,
	index
})

export const initListAction = (data) => ({
	type: INIT_LIST_ACTION,
	data
})

export const getTodoList = () => {
	return (dispatch) => {
		axios.get('/api/todolist').then(res => {
			if (res.status === 200 && res.statusText === 'OK') {
				const { list } = res.data;
				const action = initListAction(list);
				dispatch(action);
			}
		}).catch(err => {
			console.log(err);
		})
	}
}