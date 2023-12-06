import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../../src/styles.css';

// import required modules
import { Scrollbar } from 'swiper/modules';
import data from '../db/item1';
import Products from '../components/Products';
import 'swiper/css';
import 'swiper/css/scrollbar';


const Men = () => {
let [item1] = useState(data);
return (
    <div style={{ width: "100%" }}>
    <h1 className="title">MEN</h1>
    <div className="slide_itemBox">
        <Swiper
        className="men"
        slidesPerView={5}
        spaceBetween={10}
        scrollbar={{}}
        modules={[Scrollbar]}
        >
        {item1.slice(8, 18).map((ele, i) => (
            <SwiperSlide key={ele.id+9}>
            <Products item1={ele} i={i+9} key={ele.id} />
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
    </div>
);
};

export default Men;