// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "../HomeSlider/style.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const HomeSlider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={40}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="./public/thumbnail/2.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./public/thumbnail/3.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./public/thumbnail/4.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./public/thumbnail/5.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./public/thumbnail/6.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./public/thumbnail/7.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./public/thumbnail/8.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./public/thumbnail/9.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./public/thumbnail/10.png" alt="" /></SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default HomeSlider
