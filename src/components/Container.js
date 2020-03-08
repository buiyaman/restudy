import React, { Component } from 'react';
import Presentation from './Presentaion'

class Components extends Component {
state = {
    count: 0
}
add = ()=> {
    console.log(this.state.count);
    this.setState({
        count : this.state.count + 1
    })

}
    render() {
        return (
            <div>
                <button onClick={this.add}>+</button>
                <Presentation>현재 클릭수 : {this.state.count}</Presentation>
            </div>
        );
    }
}

export default Components;