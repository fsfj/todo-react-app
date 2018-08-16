import React, { Component } from 'react';

class Todo extends Component {
    
    onNavigateToCreate() {
        console.log('Create Page');
    }
    render() {
        
        return (
            <div>
                <button onClick={this.onNavigateToCreate}>Create New</button>
            </div>
        );
    }
}

export default Todo;