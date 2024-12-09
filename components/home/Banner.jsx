import React from 'react'
import Button from '../common/Button'
import Image from 'next/image'
import banner from '../../public/home/image 7.png'

const Banner = () => {
    return (
        <div className='h-screen flex items-center'>
            <div className='flex gap-[10%] w-full'>
                <div className='space-y-6 w-2/5'>
                    <Button varient="lite" link="/review" text="Starting from €4.50/day" />
                    <h1 className="text-[76px] text-black font-sspro font-extrabold leading-[80px]">
                        The Best Luggage <br /> <span className="text-primary">Storage</span>{" "}
                        Service!
                    </h1>
                    <p className='pb-6 text-paragraph'>
                        Drop off your heavy luggage at our Cenith storage and enjoy your trip
                        hands-free!
                    </p>
                    <Button text="Find closest locations" varient="bg" />
                </div>
                <div className='w-1/2'>
                    <Image src={banner} alt='banner image' />
                </div>
            </div>
        </div>
    )
}

export default Banner