import React, { Component } from 'react';
import { Input } from 'antd'

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '', completed: false, completedAt: null }

        this.textHandleChanged = this.textHandleChanged.bind(this);
    }
    textHandleChanged(e) {
        this.setState({ text: e.target.value });
    }

    render() {
        return(
            <div>
                <Input 
                    placeholder="Description" 
                    onChange={this.textHandleChanged}
                    value={this.state.text}
                    />
                    {this.state.text}
            </div>
        );
       
    }
}

export default Create;