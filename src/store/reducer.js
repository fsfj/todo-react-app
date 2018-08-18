const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'INC_COUNTER_BY_5': 
            return {
                ...state,
                counter: state.counter + action.value
            }
        default: return state
    }
    //return state;
}

export default reducer;