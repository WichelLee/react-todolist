import { CHANGE_INPUT_VALUE, SAVE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'

let defaultState = {
  inputValue: '',
  list: []
}

// 可接收state，但不能修改state
export default (state = defaultState, action) => {
  // 输入事件
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  // 提交
  if (action.type === SAVE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  // 删除操作
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  // 初始化列表
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    console.log(action.data);
    newState.list = action.data;
    return newState;
  }
  return state;
}