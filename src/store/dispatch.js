import axios from 'axios';
axios.defaults.baseURL = "http://localhost:4000";

const mapDispatchToProps = dispatch => {
    return {
        onGetTodos: async () => {
            var todos = await axios.get('/api/todos');

            dispatch({ type : 'GET_TODOS', todos: todos.data });
        },
        onGetCompletedTodos: async () => {
            var todos = await axios.get('/api/todos/done');

            dispatch({ type: 'GET_COMPLETED_TODOS', completedTodos: todos.data });
        }
    }
}

export default mapDispatchToProps;