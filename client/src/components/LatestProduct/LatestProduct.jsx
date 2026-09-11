import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../LatestProduct/style.css";

// import required modules
import { Navigation } from 'swiper/modules';
import LatestProductitem from './LatestProductitem';









const LatestProduct = (props) => {
    return (
        <div className='productsSlider'>
            <Swiper
                    slidesPerView={props.items}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='slider-wrapper'>
                    <LatestProductitem/>
                    </SwiperSlide>
                    <SwiperSlide className='slider-wrapper'>
                    <LatestProductitem/>
                    </SwiperSlide>
                    <SwiperSlide className='slider-wrapper'>
                    <LatestProductitem/>
                    </SwiperSlide>
                    <SwiperSlide className='slider-wrapper'>
                    <LatestProductitem/>
                    </SwiperSlide>
                    <SwiperSlide className='slider-wrapper'>
                    <LatestProductitem/>
                    </SwiperSlide>
                    
                </Swiper>
        </div>
    )
}

export default LatestProduct
