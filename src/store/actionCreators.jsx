import { CHANGE_INPUT_VALUE, SAVE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes'
// import axios from 'axios'

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

export const getInitList = () => ({
  type: GET_INIT_LIST,
})
