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
import BannerBoxV2 from '../BannerBoxV2/BannerBoxV2';


const AdsBannerSliderV2 = (props) => {
    return (
        <div className='py-5  w-full'>
            <Swiper
                slidesPerView={props.item}
                spaceBetween={20}

                modules={[Navigation]}
                className="smallbtn"
            >
                <SwiperSlide>
                    <BannerBoxV2 info="left" img={'https://classyshop-server.advanceuitechniques.com/download/1784183742205_1737020250515_New_Project_47.jpg'} link={'/'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="right" img={"https://classyshop-server.advanceuitechniques.com/download/1783569104452_1737020916820_New_Project_52.jpg"} link={'/'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="left" img={'https://classyshop-server.advanceuitechniques.com/download/1784183742205_1737020250515_New_Project_47.jpg'} link={'/'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="right" img={"https://classyshop-server.advanceuitechniques.com/download/1783569104452_1737020916820_New_Project_52.jpg"}  link={'/'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="left" img={'https://classyshop-server.advanceuitechniques.com/download/1784183742205_1737020250515_New_Project_47.jpg'} link={'/'} />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default AdsBannerSliderV2
