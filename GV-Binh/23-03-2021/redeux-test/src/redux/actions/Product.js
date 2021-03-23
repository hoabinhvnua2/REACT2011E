
export const getProduct = () => {
    return dispatch => {
        dispatch(request())

        try {
            fetch('https://6050aa4a5346090017670332.mockapi.io/list-product')
                .then(data => data.json())
                .then(products => {
                    dispatch(success(products))
                }).catch(e => {
                    dispatch(error(e))
                })
        } catch (error) {
            
        }
    }
    

    function request() {return {type: 'GET_PRODUCT'}}
    function success(product) {return {type: 'GET_PRODUCT_SUCCESS', product}}
    function error(err) {return {type: 'GET_PRODUCT_ERR', err}}
}