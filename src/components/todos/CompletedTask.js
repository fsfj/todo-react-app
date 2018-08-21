import React from 'react';
import { Layout, List, Checkbox } from 'antd'
import mapDispatchToProps from '../../store/dispatch';
import { connect } from 'react-redux';
import axios from 'axios';


const CompletedTasks = (props) => {
    function statusChange(id, e) {
        console.log(id);
        axios.patch(`/api/todos/${id}`, { completed: !e.target.checked }).then(res => {
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

    let completedTask = (text, id) => {       
        return (
            <List.Item actions={[<a onClick={() => deleteTask(id)}>Delete</a>]}>
                <Checkbox onChange={(e) => statusChange(id, e)}>
                   <span style={{ textDecoration: 'line-through'}}>{text}</span> 
                </Checkbox>
            </List.Item>
        );
    }
    return (
        <Layout>
            <List
                header={(<h3>Completed</h3>)}
                bordered
                dataSource={props.completedTasks}
                renderItem={item => (completedTask(item.text, item._id))}
            />
        </Layout>
    );
}

export default connect(null, mapDispatchToProps)(CompletedTasks);