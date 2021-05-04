import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../selectors/Auth";
import { bindActionCreators } from "redux";
import authActions from "../actions/Auth";

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
  const actions = useMemo(() => bindActionCreators(authActions, dispatch), [
    dispatch,
  ]);

  return useMemo(() => ({
    actions, auth
  }), [actions, auth]);
};
