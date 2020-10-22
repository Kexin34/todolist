import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import {initListAction } from './actioncreators'; 
import axios from 'axios';

//generator函数,不要再用promise了
function* getInitList() {
    try {
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        yield put(action);
    } catch (e){
        console.log('list.json request fail');
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
  
export default mySaga;