import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        alert('Clicked from class component');
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
