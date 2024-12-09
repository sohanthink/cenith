import Link from 'next/link'
import React from 'react'

const Button = (props) => {
    return (
        <Link href={`${props.link}`}>
            <div className={`text-lg font-semibold border-[1px] border-primary inline-block px-4 py-1 rounded-full ease-in-out transition-all duration-300 cursor-pointer ${props.varient == "normal" && "text-primary hover:text-white hover:bg-primary border-primary"} ${props.varient == "lite" && "text-primary hover:text-primary bg-[#454bed85]/20 hover:bg-[#454bed85]/20"} ${props.varient == 'bg' && "bg-primary text-white hover:bg-white hover:text-primary"}`}>
                {props.text}
            </div>
        </Link>
    )
}

export default Button