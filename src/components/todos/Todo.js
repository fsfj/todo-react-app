import React, { Component } from 'react';
import { connect } from 'react-redux'
import Create from './Create'
import { Layout, Divider, Row, Col } from 'antd';
import ActiveTasks from './ActiveTask';
import CompeletedTasks from './CompletedTask';
import axios from 'axios';
import mapDispatchToProps from '../../store/dispatch'

axios.defaults.baseURL = "http://localhost:4000";

class Todo extends Component {
    constructor(props){
        super(props);

        this.state = { todos: [], completedTasks: [] }
    }
    // async getTodos() {
    //     var todos = await axios.get('/api/todos');

    //     this.setState({ todos: todos.data });
    // }
    // async getCompletedTodos() {
    //     var todos = await axios.get('/api/todos/done');

    //     this.setState({ completedTasks: todos.data });
    // }
    componentDidMount() {
       // this.getTodos();
        //this.getCompletedTodos();
        this.props.onGetTodos();
        this.props.onGetCompletedTodos();
    }
    render() {
        let message = "Oyeah";
        return (
            <Layout>
                <Create/>
                <Row gutter={8}>
                    <Col span={12}>
                        <div>
                            <ActiveTasks todos={this.props.todos} message={message}/>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>
                            <CompeletedTasks completedTasks={this.props.completedTasks}/>
                        </div>
                    </Col>
                </Row>
                

                <Divider/>

                
            </Layout>
        );
    }
}
const mapStateToProps = state => {
    return {
        todos: state.todos,
        completedTasks: state.completedTodos
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onGetTodos: async () => {
//             var todos = await axios.get('/api/todos');

//             dispatch({ type : 'GET_TODOS', todos: todos.data });
//         },
//         onGetCompletedTodos: async () => {
//             var todos = await axios.get('/api/todos/done');

//             dispatch({ type: 'GET_COMPLETED_TODOS', completedTodos: todos.data });
//         }
//     }
// }
export default connect(mapStateToProps, mapDispatchToProps)(Todo);