// load users -> 


export const userAction = Object.freeze({
    // phần lấy về danh sách
    GET_USER: 'GET_USER',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_ERR: 'GET_USER_ERR'
})


const getUsers = () => ({
    type: userAction.GET_USER,
    payload: {}
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUsers
}
