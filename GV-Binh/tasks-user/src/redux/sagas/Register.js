import { call, fork, put, takeLatest } from "@redux-saga/core/effects";
import { authService } from "../../services/auth-service";
import { registerAction } from "../actions/Register";
import { delay } from "redux-saga/effects";
import { history } from "../../helps/history";

export function* register(params) {
  yield delay(3000);
  try {
    const resp = yield call(authService.register, params.payload);
    history.push('sign-in')
    yield put({
      type: registerAction.REGISTER_SUCCESS,
      payload: resp,
    });
  } catch (error) {
    yield put({
      type: registerAction.REGISTER_ERR,
      payload: error,
    });
  }
}

export function* watchRegister() {
  yield takeLatest(registerAction.REGISTER, register);
}

export default function* reward() {
  yield fork(watchRegister);
}
