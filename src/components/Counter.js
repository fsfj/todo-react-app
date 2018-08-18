import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { Button, Card } from 'antd'

class Counter extends Component {
    state = {
        counter: 0
    }
    componentDidMount(){
        setTimeout(()=> {
            this.props.onIncrement();
        }, 2000)
        
    }
    render() {
        return (
            <div>
                <Card>
                    <Button type="primary" onClick={this.props.onIncrement}>Increment</Button>
                    <Button onClick={this.props.onIncrementBy5}>Increment By 5</Button>
                    {this.props.ctr}
                </Card>
               
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({ type: 'INC_COUNTER' }),
        onIncrementBy5: () => dispatch({ type: 'INC_COUNTER_BY_5', value: 5 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);