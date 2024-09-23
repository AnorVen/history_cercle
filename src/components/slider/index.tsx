import React from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import {initialStore} from '../../store/store'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import DatesSlider from '../dates-slider'
import './style.scss';

export default () => {
    const mockData = initialStore.data
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={() => console.log(123)}
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="main-slider"
        >
            {
                mockData.map(({button_name, info}) => {
                    return  <SwiperSlide>
                        <DatesSlider key={button_name} info={info}/>
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
};
