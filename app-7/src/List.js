import React, {Component} from 'react';
import Todo from './Todo'

class List extends Component {
    render(){
        let list = this.props.inventory.map((e, i) => {
            return <Todo key={i} item={e}/>
        })
        return(
            <div>{list}</div>
        )
    }
}

export default List