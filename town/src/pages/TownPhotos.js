// import React from 'react';
import '../App.css';
import Data from './Data';

// const TownPhotos = () => {
//     return (
//         <h2>Фотогаллерея</h2>
//     );
// }
// export default TownPhotos;

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function TownPhotos() {
  return (
    <>
        <h2>Фотогаллерея</h2>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <img className="slide" src={ Data.slide1 } alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="slide" src={ Data.slide2 } alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="slide" src={ Data.slide3 } alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="slide" src={ Data.slide4 } alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="slide" src={ Data.slide5 } alt="" />
            </SwiperSlide>
        </Swiper>
    </>
  );
}
