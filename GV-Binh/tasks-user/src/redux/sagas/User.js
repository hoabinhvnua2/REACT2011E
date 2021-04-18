import { call, fork, put, takeLatest } from "@redux-saga/core/effects";
import userApi from '../../services/user-service'
import {userAction} from '../actions/User'

export function* getUsers() {
  try {
    const resp = yield call(userApi.getUser, {})
    yield put({
        type: userAction.GET_USER_SUCCESS,
        payload: resp
    })
  } catch (error) {
    yield put({
        type: userAction.GET_USER_ERR,
        payload: error
    })
  }
}

export function* watchGetUsers() {
    yield takeLatest(userAction.GET_USER, getUsers)
}

export default function* reward() {
    yield fork(watchGetUsers)
}






