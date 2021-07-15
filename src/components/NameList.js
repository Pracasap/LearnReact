import React from 'react'

function NameList() {
    
    const names = ['Bruce','Bruce', 'Clerk', 'Diana'];

    return (
        <div>
            {
            names.map((name, index) => <h2 key={index}>{name}</h2>)
        }
        </div>
    )
}

export default NameList
