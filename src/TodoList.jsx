import React, { Component } from 'react'
import store from './store'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    return (
      <div>
        <input value={this.state.inputValue} type="text" />
        <button>提交</button>
        <ul>
          {
            this.state.list.map(item => {
              return (
                <li>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default TodoList