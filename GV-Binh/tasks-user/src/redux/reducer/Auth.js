import produce from "immer";
import { authAction } from "../actions/Auth";

const initialAuth = {
  loading: false,
  userInfor: {},
  err: "",
};

const auth = (state = initialAuth, action) =>
  produce(state, (draf) => {
    const { type, payload } = action;
    switch (type) {
      case authAction.SIGNIN:
        draf.loading = true;
        break;
      case authAction.SIGNIN_SUCCESS:
        draf.loading = false;
        draf.userInfor = payload
        break;
      case authAction.LOGOUT:
        draf.userInfor = {}
        draf.err = ''
        break;
      case authAction.SIGNIN_ERR:
        draf.err = payload;
        draf.loading = false;
        break;
      default:
        return;
    }
  });

export default auth