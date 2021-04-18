import { createSelector } from "reselect"

const getUsers = (state) => state.user.data

export const productSelector = createSelector(
    getUsers,
    (products) => products  
)