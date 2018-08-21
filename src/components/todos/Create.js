import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Form } from 'antd';
import axios from 'axios';
import mapDispatchToProps from '../../store/dispatch'

//axios.defaults.baseURL = "http://localhost:4000";

const FormItem = Form.Item;

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = { todo: { } }

        this.textHandleChanged = this.textHandleChanged.bind(this);

        this.addNewTask = this.addNewTask.bind(this);
    }
    textHandleChanged(e) {
        this.setState({ todo: { text: e.target.value } });
    }

    addNewTask() {
        console.log(this.state.todo);
        axios.post('/api/todos', this.state.todo).then(res => {
            //console.log(res);
            this.setState({ todo: { text: null } });
            this.props.onGetTodos();
            this.props.onGetCompletedTodos();
        }).catch(err => console.log(err));
    }

    render() {
        return(
            <Form>
                <FormItem>
                    <Input 
                        placeholder="New Task" 
                        onChange={this.textHandleChanged}
                        value={this.state.todo.text}
                        />
                        {this.state.todo.text}
                </FormItem>
                <FormItem>
                    <Button type="primary" onClick={this.addNewTask}>Add</Button>
                </FormItem>
            </Form>
        );
       
    }
}

export default connect(null,mapDispatchToProps)(Create);