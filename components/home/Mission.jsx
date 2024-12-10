import React from 'react'
import { CiLocationOn } from "react-icons/ci";


const Mission = () => {
    return (
        <div className='bg-primary py-11'>
            <div className='container'>
                <h4 className='font-sspro text-paragraph text-center font-normal text-white pb-9'>Our mission is to enhance your travel experience</h4>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 text-white items-center'>
                        <CiLocationOn className='text-[44px]' />
                        <h4 className='font-sspro font-bold leading-6 uppercase'><span className='text-[50px] font-extrabold'>200+</span><br />Locations</h4>
                    </div>
                    <div className='flex gap-4 text-white items-center'>
                        <CiLocationOn className='text-[44px]' />
                        <h4 className='font-sspro font-bold leading-6 uppercase'><span className='text-[50px] font-extrabold'>100,000+</span><br />Hours stored</h4>
                    </div>
                    <div className='flex gap-4 text-white items-center'>
                        <CiLocationOn className='text-[44px]' />
                        <h4 className='font-sspro font-bold leading-6 uppercase'><span className='text-[50px] font-extrabold'>40,000+</span><br />items stored</h4>
                    </div>
                    <div className='flex gap-4 text-white items-center'>
                        <CiLocationOn className='text-[44px]' />
                        <h4 className='font-sspro font-bold leading-6 uppercase'><span className='text-[50px] font-extrabold'>5 star</span><br />google ratings</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission