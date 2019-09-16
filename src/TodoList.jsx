import React, { Component } from 'react'

import 'antd/dist/antd.css'

import store from './store/index'
import { getInputChangeAction, saveInputValue, deleteTodoItem, getTodoList } from './store/actionCreators'
import TodoListUI from './components/TodoListUI'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleSaveIputValue = this.handleSaveIputValue.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleSaveIputValue={this.handleSaveIputValue}
        list={this.state.list}
        handleDeleteItem={this.handleDeleteItem}
      />
    )
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleSaveIputValue() {
    const action = saveInputValue();
    store.dispatch(action);
  }
  handleDeleteItem(index) {
    const action = deleteTodoItem(index);
    store.dispatch(action);
  }
}

export default TodoList