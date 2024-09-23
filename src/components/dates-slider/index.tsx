import React from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import './style.scss';

export default ({info}: {info: { title: string; text: string; }[]}) => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView="auto"
            navigation={true}
            modules={[Navigation]}
            className="dates-slider"
        >
            {
                info.map(({
                              title,
                              text
                          }) => {
                    return <SwiperSlide>
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
};
