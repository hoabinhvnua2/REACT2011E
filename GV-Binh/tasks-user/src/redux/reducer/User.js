import { userAction } from "../actions/User";
import produce from "immer";

const initialState = {
  users: {
    data: [],
    err: "",
    isLoading: false,
  },
};

const user = (state = initialState, action) =>
  produce(state, (draf) => {
    const { type, payload } = action;
    switch (type) {
      case userAction.GET_USER:
        draf.users.isLoading = true
        break;
      case userAction.GET_USER_SUCCESS:
        draf.users.data = payload.data
        draf.users.isLoading =  false
        break;
      case userAction.GET_USER_ERR:
        draf.users.err = payload
        draf.users.isLoading =  false
        break;
      default:
        break;
    }
  });

export default user;
