import { delay } from "redux-saga";// allow us to make it async
import { takeLatest, put } from "redux-saga/effects";

function* counterUpAsync() {
  yield delay(1000); 
  yield put({ type: "COUNTER_UP_ASYNC", value: 1 });
  //put- pauses the saga until delay time
}

//will run after delay
export function* watchCounterUp() {
  yield takeLatest("COUNTER_UP", counterUpAsync);
  //takeLatest - it will only increment one click regardless of multiple clicks
}
 