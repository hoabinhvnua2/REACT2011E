import { createSelector } from "reselect"

const getRegister = (state) => state.register

export const registerSelector = createSelector(
    getRegister,
    (register) => register  
)