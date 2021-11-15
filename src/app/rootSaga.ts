import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';
function* helloSaga() {
  console.log('Hello saga');
}

export default function* rootSaga() {
  console.log('ROOT SAGA');
  yield all([helloSaga(), counterSaga()]);
}
