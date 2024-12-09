import React from 'react'

const Heading = (props) => {
    return (
        <div>
            <h2 className="font-semibold text-black text-center text-[48px]">{props.text}</h2>
        </div>
    )
}

export default Heading