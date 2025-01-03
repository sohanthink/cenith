"use client"

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { MdStar } from 'react-icons/md';

const Slider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className='container'>
            <div className="slider-container">
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}

                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    slidesPerView={3}
                >
                    <SwiperSlide className=''>
                        <div className='text-textColor space-y-3 p-4 hover:border-primary border border-gray-200 rounded-lg'>
                            <div className='flex'>
                                {[...Array(5)].map((_, index) => (
                                    <MdStar key={index} className='bg-yellow-400 h-5 w-5 p-1 text-white mr-1' />
                                ))}
                            </div>
                            <p>I was in Palermo and thanks to Nannybag I was able to leave my suitcase for only 6 euros in a place near my hotel and the train station. Easy and fast booking, delivery and collection as well.</p>
                            <h4><span className='text-black font-bold'>Maurizio Castellis<br /></span> In Palermo</h4>
                        </div>
                    </SwiperSlide>


                </Swiper>
                <div className="custom-navigation">
                    <button ref={prevRef} className="custom-prev">Prev</button>
                    <button ref={nextRef} className="custom-next">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Slider;