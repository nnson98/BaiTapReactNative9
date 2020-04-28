import {call, put, takeLatest} from 'redux-saga/effects';
import {
  GET_DATA_REQUEST,
  getDataFail,
  getDataSuccess,
  ADD_DATA,
} from '../actions/DataActions';
import {getData} from '../api/Api';
import {sendNetworkFail} from '../actions/actions';
import {login} from '../api/apipost';
export function* watchGetData() {
  yield takeLatest(GET_DATA_REQUEST, handleGetData);
}

function* handleGetData(action) {
  const response = yield call(getData, action.payload);
  if (response !== []) {
    yield put(getDataSuccess(response.data));
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getDataFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getDataFail(response.problem));
    }
  }
}
function* addNewData(action) {
  try {
    const response = yield call(login, action.payload);
    if (response !== []) {
      yield put({type: GET_DATA_REQUEST});
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}
export function* watchCheckInData() {
  yield takeLatest(ADD_DATA, addNewData);
}
