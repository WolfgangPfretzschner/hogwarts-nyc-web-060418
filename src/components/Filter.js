import React from 'react'

const Filter = (props) => {
    return (
        <div>
            <button onClick={props.sortByWeight} >
                sort-Me
            </button>
        </div>
    )

} 

export default Filter