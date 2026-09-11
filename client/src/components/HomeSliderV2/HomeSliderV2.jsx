// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

 

const HomeSliderV2 = () => {
    return (
        <Swiper
            loop={true}
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            modules={[EffectFade, Navigation, Pagination,Autoplay]}
            className="HomeSliderV2"
        >
            <SwiperSlide>
                <div className="item w-full rounded-md overflow-hidden relative">
                    <img src="https://classyshop-server.advanceuitechniques.com/download/1783066403324_1737036773579_sample-1.jpg" />
                    <div className="info absolute top-0 right-[-100%] transition-all opacity-0 duration-600 w-[50%] h-[100%] flex items-center flex-col justify-center z-50 p-8  ">
                        <h4 className='text-[18px] font-[500] w-full text-left mb-4 relative -right-[100%] opacity-0 duration-1000 '>Big Saving Days Sale</h4>
                        <h2 className='text-[32px] font-[600] w-full text-left'>Women Solid Round Green T-Shirt</h2>
                        <h3 className='text-[18px] font-[500] flex items-center gap-3  w-full mt-3 text-left mb-4 relative -right-[100%] opacity-0 duration-1000'>Starting At Only
                            <span className='text-[#ff5252] text-[26px] font-[600] relative -right-[100%] opacity-0 duration-1000'>Rs 299</span>
                        </h3>
                        <div className='w-full'>
                            <Button className='btn-org '> <Link to={'/'}>Shop Now</Link></Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="item w-full rounded-md overflow-hidden w-full ">
                    <img src="https://classyshop-server.advanceuitechniques.com/download/1783515536915_1737037654953_New_Project_45.jpg" />
                    <div className="info absolute top-0 right-[-100%] transition-all opacity-0 duration-600 w-[50%] h-[100%] flex items-center flex-col justify-center z-50 p-8  ">
                        <h4 className='text-[18px] font-[500] w-full text-left mb-4 relative -right-[100%] opacity-0 duration-1000 '>Big Saving Days Sale</h4>
                        <h2 className='text-[32px] font-[600] w-full text-left'>Ai Integrated Mobail</h2>
                        <h3 className='text-[18px] font-[500] flex items-center gap-3  w-full mt-3 text-left mb-4 relative -right-[100%] opacity-0 duration-1000'>Starting At Only
                            <span className='text-[#ff5252] text-[26px] font-[600] relative -right-[100%] opacity-0 duration-1000'>Rs 10,999</span>
                        </h3>
                        <div className='w-full'>
                            <Button className='btn-org '> <Link to={'/'}>Shop Now</Link></Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>


        </Swiper>
    )
}

export default HomeSliderV2
