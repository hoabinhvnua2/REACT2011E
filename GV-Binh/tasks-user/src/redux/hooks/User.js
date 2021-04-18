import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../selectors/User";
import { bindActionCreators } from "redux";
import userActions from "../actions/User";

export const useUser = () => {
  const dispatch = useDispatch();
  const users = useSelector(userSelector);
  const actions = useMemo(() => bindActionCreators(userActions, dispatch), [
    dispatch,
  ]);

  return useMemo(() => ({
    actions, users
  }), [actions, users]);
};
