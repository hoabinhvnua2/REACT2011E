import { createSelector } from "reselect"

const getStateUser = state => state.user.users

export const userSelector = createSelector(
    getStateUser,
    users => users
) 