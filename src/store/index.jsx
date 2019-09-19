import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

import createSagaMiddleware from 'redux-saga'
import TodoSages from './sages'

// 方便redux-devtools调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose;
const sageMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(
  applyMiddleware(sageMiddleware)
)

const store = createStore(
  reducer,
  // 中间件
  enhancer
)

sageMiddleware.run(TodoSages)

export default store