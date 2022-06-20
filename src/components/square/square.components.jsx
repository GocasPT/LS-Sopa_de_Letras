import React from "react"

function Square({ onSelect }) {
    return(
        <button 
            onClick={onSelect}
        >
            0
        </button>
    )
}

export default Square