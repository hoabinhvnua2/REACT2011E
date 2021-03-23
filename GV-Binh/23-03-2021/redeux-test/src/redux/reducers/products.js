const productReduce = (state= {products: [], loading: false, err: ''}, actions) => {
    switch (actions.type) {
        case 'GET_PRODUCT':
            return {...state, loading: true}
        case 'GET_PRODUCT_SUCCESS':
            console.log(actions)
            return {...state, products: actions.product, loading: false}
        case 'GET_REQUEST_ERR':
            console.log(actions)
            return {...state, err: actions.err, loading: false}
        default:
            return state
    }
}

export default productReduce;