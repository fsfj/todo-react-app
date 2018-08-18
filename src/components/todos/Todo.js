import React, { Component } from 'react';
import { connect } from 'react-redux'
import Create from './Create'
import { Button, Layout, Form } from 'antd';

class Todo extends Component {
    
    onNavigateToCreate() {
        console.log('Create Page');
    }
    render() {
        
        return (
            <Layout>
                <Form>
                    <Button type="primary" onClick={this.onNavigateToCreate}>Create New</Button>
                    <Create/>
                    {this.props.ctr}
                </Form>
            </Layout>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}
export default connect(mapStateToProps)(Todo);