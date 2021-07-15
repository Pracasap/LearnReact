import React, { Component } from 'react'

class EventBind extends Component {
    constructor() {
        super();
        this.state = {
            message: "Subscribe"
        }
    
    }

    handleClick = () => {
        this.setState({
            message: 'Thank you!'
        })
    }

    render() {
        return (
            <div>
                {this.state.message}
                <button onClick={this.handleClick}>Change the message</button>
            </div>
        )
    }
}

export default EventBind
