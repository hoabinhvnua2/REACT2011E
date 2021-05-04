import { createSelector } from "reselect"

const signIn = (state) => state.auth

export const authSelector = createSelector(
    signIn,
    (auth) => auth  
)