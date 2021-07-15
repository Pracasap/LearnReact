import React from 'react'

function ClildComponent(props) {
    return (
        <div>
            <button onClick={() => {props.greetHandler('child')}}>Greet Parent</button>
        </div>
    )
}

export default ClildComponent
