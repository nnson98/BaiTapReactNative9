import {all, fork} from 'redux-saga/effects';
import {watchGetData} from '../sagas/DataSagas';
import {watchCheckInData} from '../sagas/DataSagas';
export default function* rootSaga() {
  yield all([fork(watchGetData), fork(watchCheckInData)]);
}
