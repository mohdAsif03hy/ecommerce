
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../HomeCatSlider/style.css"




// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const HomeCatSlider = () => {
    return (
        <div className="HomeCatSlider pt-4 py-8">
            <div className="container ml-1 mr-1">
                <Swiper
                    slidesPerView={8}
                    spaceBetween={20}


                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper"

                >
                    <SwiperSlide>
                        <Link to='/'>
                            <div className="item py-2 mb-2 px-2 bg-white rounded-sm flex items-center justify-center flex-col ">
                                <img src="./public/thumbnail/11.png" alt="" className='w-full h-full transition-all' />
                                <h3 className='text-[14px] font-[500] mt-2'>Smart Tablet</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/'>
                            <div className="item py-3 mb-2 px-2 bg-white rounded-sm flex items-center justify-center flex-col divv">
                                <img src="./public/thumbnail/fashion.png" alt="" className='w-full h-full transition-all' />
                                <h3 className='text-[14px] font-[500] mt-2'>Fashion</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/'>
                            <div className="item py-3 mb-2 px-2 bg-white rounded-sm flex items-center justify-center flex-col w-">
                                <img src="./public/thumbnail/bag.png" alt="" className='w-full h-full transition-all' />
                                <h3 className='text-[14px] font-[500] mt-2'>Bags</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/'>
                            <div className="item py-3 mb-2 px-2 bg-white rounded-sm flex items-center justify-center flex-col w-">
                                <img src="./public/thumbnail/groceries.png" alt="" className='w-full h-full transition-all' />
                                <h3 className='text-[14px] font-[500] mt-2'>Groceries</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/'>
                            <div className="item py-3 mb-2 px-2 bg-white rounded-sm flex items-center justify-center flex-col ">
                                <img src="./public/thumbnail/wellness.png" alt="" className='w-full h-full transition-all' />
                                <h3 className='text-[14px] font-[500] mt-2'>Wellness</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/'>
                            <div className="item py-3 mb-2 px-2 bg-white rounded-sm flex items-center justify-center flex-col w-">
                                <img src="./public/thumbnail/electronics.png" alt="" className='w-full h-full transition-all' />
                                <h3 className='text-[14px] font-[500] mt-2'>Electronics</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/'>
                            <div className="item py-3 mb-2 px-2 bg-white rounded-sm flex items-center justify-center flex-col w-">
                                <img src="./public/thumbnail/jwellery.png" alt="" className='w-full h-full transition-all' />
                                <h3 className='text-[14px] font-[500] mt-2'>Jewellery</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/'>
                            <div className="item py-3 mb-2 px-2 bg-white rounded-sm flex items-center justify-center flex-col w-">
                                <img src="./public/thumbnail/beauty.png" alt="" className='w-full h-full transition-all' />
                                <h3 className='text-[14px] font-[500] mt-2'>Beauty</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/'>
                            <div className="item py-3 mb-2 px-2 bg-white rounded-sm flex items-center justify-center flex-col w-">
                                <img src="./public/thumbnail/bath&body.png" alt="" className='w-full h-full transition-all' />
                                <h3 className='text-[14px] font-[500] mt-2'>Bath & Body</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeCatSlider
