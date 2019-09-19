import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
	// 异步操作
	try {
		const res = yield axios.get('/api/todolist');
		const action = initListAction(res.data.list);
		//  代替store.dispatch
		console.log('saga get list',action)
		yield put(action);
	}
	catch (e) {
    console.log('网络繁忙，请稍后再试。。。');
	}

}

// generator 函数
function* mySaga() {
	console.log('saga start');
	yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga