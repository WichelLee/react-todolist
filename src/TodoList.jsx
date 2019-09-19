import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    return (
      <div>
        <input value={this.props.inputValue} type="text" onChange={this.props.handleInputChange} />
        <button onClick={this.props.handleClick}>提交</button>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick() {
      const action = {
        type: 'add_item',
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchProps)(TodoList)