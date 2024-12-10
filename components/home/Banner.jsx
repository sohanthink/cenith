import React from 'react'
import Button from '../common/Button'
import Image from 'next/image'
import { PiCalendarStarDuotone } from "react-icons/pi";
import { MdStar } from "react-icons/md";


// import banner from '../../public/home/banner.jpeg'
import banner from '../../public/home/image 7.png'
import customer from '../../public/home/customer.png'


const Banner = () => {
    return (
        <div className='h-[90vh] flex items-center'>
            <div className='flex gap-4 md:gap-[10%] w-full items-center'>
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
                    <div className='flex gap-6 items-center'>
                        <Image src={customer} alt='customer image' />
                        <div>
                            <h4 className='font-sspro font-extrabold'>Our Happy Customer</h4>
                            <div className='flex'>
                                {[...Array(5)].map((_, index) => (
                                    <MdStar key={index} className='bg-green-600 h-5 w-5 p-1 text-white mr-1' />
                                ))}
                                <span className='flex gap-2 ms-2 text-textColor'>
                                    <h4>5.0</h4>
                                    <h4><i>(8.9k Reviews)</i></h4>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <Image src={banner} alt='banner image' />
                </div>
            </div>
        </div>
    )
}

export default Banner