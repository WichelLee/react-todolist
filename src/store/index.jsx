import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer'

// 方便redux-devtools调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)
const store = createStore(
  reducer,
  // 中间件
  enhancer
)

export default store