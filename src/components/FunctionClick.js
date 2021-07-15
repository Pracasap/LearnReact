import React from 'react'



function FunctionClick() {

    const clickHandler = () => { alert('Hey!')}
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick;
