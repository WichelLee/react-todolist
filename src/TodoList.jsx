import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'
import { getInputChangeAction, saveInputValue, deleteTodoItem } from './store/actionCreators'

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleSaveIputValue = this.handleSaveIputValue.bind(this);
		store.subscribe(this.handleStoreChange);
	}
	render() {
		return (
			<Fragment>
				<div style={{ margin: '50px' }}>
					<Input
						value={this.state.inputValue}
						placeholder="todo info"
						style={{ width: '300px' }}
						onChange={this.handleInputChange}
					/>
					<Button
						type="primary"
						style={{ marginLeft: '10px' }}
						onClick={this.handleSaveIputValue}
					>提交</Button>
					<List
						style={{ marginTop: '10px', width: '300px' }}
						bordered
						dataSource={this.state.list}
						renderItem={(item, index) => (
							<List.Item onClick={this.handleDeleteItem.bind(this, index)}>
								{item}
							</List.Item>
						)}
					/>
				</div>

			</Fragment>
		)
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