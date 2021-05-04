export const authAction = Object.freeze({
    SIGNIN: 'SIGNIN',
    SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
    SIGNIN_ERR: 'SIGNIN_ERR',

    LOGOUT: 'LOGOUT'
})


const signIn = (params) => ({
    type: authAction.SIGNIN,
    payload: params
})

const logout = () => ({
    type: authAction.LOGOUT,
    payload: {}
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    signIn,
    logout
}