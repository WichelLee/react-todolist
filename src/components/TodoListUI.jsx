import React, { Fragment } from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <Fragment>
      <div style={{ margin: '50px' }}>
        <Input
          value={props.inputValue}
          placeholder="todo info"
          style={{ width: '300px' }}
          onChange={props.handleInputChange}
        />
        <Button
          type="primary"
          style={{ marginLeft: '10px' }}
          onClick={props.handleSaveIputValue}
        >提交</Button>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => { props.handleDeleteItem(index) }}>
              {item}
            </List.Item>
          )}
        />
      </div>
    </Fragment>
  )
}

export default TodoListUI