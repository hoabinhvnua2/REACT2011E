

const test = (state = {value: 0}, action) => {
    switch (action.type) {
        case 'CONG':
            return {value: state.value + 1}
        case 'TRU':
            return {value: state.value - 1}
        default:
            return state
    }
}

export default test;