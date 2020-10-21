import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Todo extends Component {
    render(){
        return(
            <p>{this.props.newItem}</p>
        )
    }
}

export default Todo