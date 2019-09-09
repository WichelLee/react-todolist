import { CHANGE_INPUT_VALUE, SAVE_INPUT_VALUE, DELETE_TODO_ITEM } from './actionTypes'

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