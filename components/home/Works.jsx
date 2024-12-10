import Image from 'next/image'
import React from 'react'

import workImage from '../../public/home/howworks.png'

import workicon from '../../public/home/works-1.png'
import workicon2 from '../../public/home/works-2.png'
import workicon3 from '../../public/home/works-3.png'

import Heading from '../common/Heading'
import Button from '../common/Button'



export function WorksContent({ src, title, text }) {
    return (
        <div className='flex gap-8 items-center group'>
            <div className='border border-dashed p-4 -rotate-6 group-hover:rotate-0 transition-all duration-200 ease-linear'><Image src={src} alt='work image icon' /></div>
            <div>
                <h3 className='font-sspro text-h3 font-extrabold'>{title}</h3>
                <p className='text-paragraph text-black'>{text}</p>
            </div>
        </div>
    )
}

const Works = () => {
    return (
        <div className='container mt-16'>
            <div className='flex gap-16 items-center'>
                <Image src={workImage} alt='a girl working in a computer' />
                <div className='space-y-8'>
                    <Heading styles="text-start" text="How It Works" />
                    <WorksContent
                        src={workicon}
                        title="Book online"
                        text="Select the nearest luggage storage and the time slot you prefer, according to your needs."
                    />
                    <WorksContent
                        src={workicon2}
                        title="Drop off your luggage"
                        text="Go to the address on your booking: entrust your luggage to our partner"
                    />
                    <WorksContent
                        src={workicon3}
                        title="Enjoy your stay"
                        text="Make the most out of your day, then show your confirmation to pick up your stuff."
                    />

                    <Button styles="mt-12" varient="bg" text="Find Closest Location" />
                </div>
            </div>
        </div>
    )
}

export default Works