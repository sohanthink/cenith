import React from 'react'

const Heading = (props) => {
    return (
        <div>
            <h2 className={`font-extrabold text-black text-center text-[48px] font-sspro ${props.styles}`}>{props.text}</h2>
        </div>
    )
}

export default Heading