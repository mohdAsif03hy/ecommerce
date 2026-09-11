// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../AdsBannerSlider/style.css"


// import required modules
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox/BannerBox';


const AdsBannerSlider = (props) => {
    return (
        <div className='py-5  w-full'>
            <Swiper
                slidesPerView={props.item}
                spaceBetween={20}

                modules={[Navigation]}
                className="smallbtn"
            >
                <SwiperSlide>
                    <BannerBox img={"./public/thumbnail/banner1.png"} link={'/'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={"./public/thumbnail/banner2.png"} link={'/'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={"./public/thumbnail/banner3.png"} link={'/'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={"./public/thumbnail/banner4.png"} link={'/'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={"./public/thumbnail/banner5.png"} link={'/'} />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default AdsBannerSlider
