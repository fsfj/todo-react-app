import axios from 'axios';
axios.defaults.baseURL = "http://localhost:4000";

const initialState = {
    counter: 0,
    todos: [],
    completedTodos: []
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
        case 'GET_TODOS': 
            return {
                ...state,
                todos: action.todos
            }
        case 'GET_COMPLETED_TODOS':
            return {
                ...state,
                completedTodos: action.completedTodos
            }
        default: return state
    }
    //return state;
}

export default reducer;