import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../ProductSlider/style.css";

// import required modules
import { Navigation } from 'swiper/modules';
import ProductItem from '../productItem/ProductItem';









const ProductSlider = (props) => {
    return (
        <div className='productsSlider py-2'>
            <Swiper
                    slidesPerView={props.items}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='slider-wrapper'>
                    <ProductItem/>
                    </SwiperSlide>
                     <SwiperSlide className='slider-wrapper'>
                    <ProductItem/>
                    </SwiperSlide>
                     <SwiperSlide className='slider-wrapper'>
                    <ProductItem/>
                    </SwiperSlide>
                     <SwiperSlide className='slider-wrapper'>
                    <ProductItem/>
                    </SwiperSlide>
                     <SwiperSlide className='slider-wrapper'>
                    <ProductItem/>
                    </SwiperSlide>
                     <SwiperSlide className='slider-wrapper'>
                    <ProductItem/>
                    </SwiperSlide>
                     <SwiperSlide className='slider-wrapper'>
                    <ProductItem/>
                    </SwiperSlide>
                    <SwiperSlide className='slider-wrapper'>
                    <ProductItem/>
                    </SwiperSlide>
                    <SwiperSlide className='slider-wrapper'>
                    <ProductItem/>
                    </SwiperSlide>
                </Swiper>
        </div>
    )
}

export default ProductSlider
