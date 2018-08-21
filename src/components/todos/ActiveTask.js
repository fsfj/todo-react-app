import React from 'react'
import { Layout, List, Checkbox } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux'
import mapDispatchToProps from '../../store/dispatch'

axios.defaults.baseURL = "http://localhost:4000";

const ActiveTask = (props) => {
    function statusChange(id, e) {
        axios.patch(`/api/todos/${id}`, { completed: e.target.checked }).then(res => {
            console.log(res);
            props.onGetTodos();
            props.onGetCompletedTodos();
        }).catch(err => console.log(err));
    }
    function deleteTask(id) {
        axios.delete(`/api/todos/${id}`).then(res => {
            //console.log(res);
            props.onGetTodos();
            props.onGetCompletedTodos();
        }).catch(err => console.log(err));
    }
    let listItem = (text, id) => {
        return(
            <List.Item actions={[<a onClick={() => deleteTask(id)}>Delete</a>]}>
                <Checkbox onChange={(e) => statusChange(id, e)}>
                    <span>{text}</span>
                </Checkbox>
            </List.Item>
           
        )
    };
    return (
        <Layout>
            {/* {props.todos.map((todo, index) => (
                <Card key={todo._id}>
                    <Checkbox 
                        onChange={(e) => statusChange(todo._id, e)}>
                        <span style={{textDecoration: 'line-through'}}>{todo.text}</span>
                        
                    </Checkbox>
                </Card>
            ))} */}
            <List
                size="small"
                header={<h3>Active</h3>}
                bordered
                dataSource={props.todos}
                renderItem={item => (listItem(item.text, item._id))}
            />
           
        </Layout>
    );
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onGetTodos: async () => {
//             var todos = await axios.get('/api/todos');

//             dispatch({ type : 'GET_TODOS', todos: todos.data });
//         }
//     }
// }

export default connect(null,mapDispatchToProps)(ActiveTask);