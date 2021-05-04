import { fork } from 'redux-saga/effects'
import user from './User'
import register from './Register'
import auth from './Auth';


export default function* rootSagas() {
    yield fork(user)
    yield fork(register)
    yield fork(auth)
}