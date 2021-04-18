import productApi from "../../services/user-service";
import { call, put, fork, takeLatest } from 'redux-saga/effects'
import { productActions } from "../actions/Product";

export function* getProduct() {
  try {
      const respon = yield call(productApi.getProducts, {});
      yield put({
          type: productActions.GET_PRODUCT_SUCCESS,
          payload: respon.data
      })
  } catch (error) {
      yield put({
          type: productActions.GET_PRODUCT_ERR,
          payload: error
      })
  }
}


export function* watchGetProducts() {
    yield takeLatest(productActions.GET_PRODUCT, getProduct)
}

export default function* reward() {
    yield fork(watchGetProducts)
}