import React from 'react'
import Heading from '../common/Heading'
import Image from 'next/image'

import benefits from '../../public/home/benefits-1.png'
import benefits2 from '../../public/home/benefits-2.png'
import benefits3 from '../../public/home/benefits-3.png'


export function BenefitContents({ src, text }) {
    return (
        <div className='p-10 flex flex-1 flex-col justify-center gap-3 items-center hover:border hover:border-dashed hover:border-black border border-black/0 rounded-md leading-10 cursor-pointer bg-[#f0f5ff]'>
            <Image src={src} width={100} alt='benefits icon' />
            <h3 className='text-h3 font-sspro font-bold text-center' dangerouslySetInnerHTML={{ __html: text }}></h3>
        </div>
    )
}

const Benefits = () => {
    return (
        <div className='py-8 container'>
            <Heading styles="py-12" text='Benefits of our luggage Storage' />
            <div className='flex justify-between gap-3'>
                <BenefitContents src={benefits} text='Open 24/7 - <br />365 days' />
                <BenefitContents src={benefits2} text='Large medium &<br /> small lockers' />
                <BenefitContents src={benefits3} text='Quick Safe and<br /> Easy' />
            </div>
        </div>
    )

}

export default Benefits