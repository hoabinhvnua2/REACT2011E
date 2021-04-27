import produce from "immer";
import { registerAction } from '../actions/Register';

const initialRegister = {
  err: "",
  isLoading: false,
};

const register = (state = initialRegister, action) =>
  produce(state, (draf) => {
    const { type, payload } = action;
    switch (type) {
      case registerAction.REGISTER:
        draf.isLoading = true;
        break;
      case registerAction.REGISTER_SUCCESS:
        draf.isLoading = false;
        break;
      case registerAction.REGISTER_ERR :
        draf.err = payload;
        draf.isLoading = false;
        break;
      default:
        return;
    }
  });
export default register;
