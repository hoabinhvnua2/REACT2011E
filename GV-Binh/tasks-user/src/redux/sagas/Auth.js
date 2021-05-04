import { call, fork, put, takeLatest } from "@redux-saga/core/effects";
import { authService } from "../../services/auth-service";
import { authAction } from "../actions/Auth";
import { delay } from "redux-saga/effects";
import {history} from '../../helps/history';

export function* signIn(params) {
  yield delay(3000);
  try {
    const resp = yield call(authService.login, params.payload);
    history.push('/')
    yield put({
      type: authAction.SIGNIN_SUCCESS,
      payload: resp,
    });
  } catch (error) {
    yield put({
      type: authAction.SIGNIN_ERR,
      payload: error,
    });
  }
}

export function* logout() {
    yield delay(2000)
}

export function* watchSignIn() {
  yield takeLatest(authAction.SIGNIN, signIn);
}
export function* watchLogout() {
  yield takeLatest(authAction.LOGOUT, logout);
}

export default function* reward() {
  yield fork(watchSignIn);
}
