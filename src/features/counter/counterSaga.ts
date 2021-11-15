import { delay, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction) {
//   console.log('action', action);
// }
function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('waiting 2s');
  yield delay(1000);
  console.log('waiting done, dispatch action');

  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('COUNTER SAGA');
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
  // yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
