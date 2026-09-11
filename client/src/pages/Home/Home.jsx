import HomeSlider from '../../components/HomeSlider/HomeSlider'
import HomeCatSlider from '../../components/HomeCatSlider/HomeCatSlider'
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider/AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import LatestProduct from '../../components/LatestProduct/LatestProduct';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../Home/style.css"


// import required modules
import { Navigation } from 'swiper/modules';
import BlogItem from '../../components/BlogItem/BlogItem';
// import HomeSliderV2 from '../../components/HomeSliderV2/HomeSliderV2';
// import BannerBoxV2 from '../../components/BannerBoxV2/BannerBoxV2';
import AdsBannerSliderV2 from '../../components/AdsBannerSliderV2/AdsBannerSliderV2';



const Home = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <HomeSlider />
            {/* <section className='py-6'>
                <div className="container flex gap-5 h-[393px]">
                    <div className="part1 w-[70%] ">
                        <HomeSliderV2/>
                    </div>
                    <div className="part2 w-[30%]  gap-5 flex items-center
                     justify-between flex-col ">
                        <BannerBoxV2 info="left" img={'https://classyshop-server.advanceuitechniques.com/download/1784183742205_1737020250515_New_Project_47.jpg'}/>
                        <BannerBoxV2 info="right" img={"https://classyshop-server.advanceuitechniques.com/download/1783569104452_1737020916820_New_Project_52.jpg"} />
                    </div>
                </div>
            </section> */}


            <HomeCatSlider />

            <section className='bg-white py-6 px-8'>
                <div className="container-fluid">
                    <div className="flex items-center justify-between">
                        <div className="leftSec">
                            <h2 className='text-[20px] font-[600]'>Papular Products</h2>
                            <p className='text-[14px] font-[500]'>Do not miss the current offers untill the end of August.</p>
                        </div>

                        <div className="rightSec w-[60%]">
                            <Box sx={{ maxWidth: { xs: 320, sm: 720 }, bgcolor: 'background.paper' }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    aria-label="scrollable auto tabs example"
                                >
                                    <Tab label="Fashion" />
                                    <Tab label="Electronis" />
                                    <Tab label="Bags" />
                                    <Tab label="Footwear" />
                                    <Tab label="Groceries" />
                                    <Tab label="Beauty" />
                                    <Tab label="Wellness" />
                                    <Tab label="Jewellery" />
                                </Tabs>
                            </Box>
                        </div>
                    </div>

                    <ProductSlider items={5} />


                </div>
            </section>

            <section className='py-8 pb-2 bg-white z-99'>
                <div className="container">
                    <div className="freeShipping w-full py-3 p-4 border border-[#a51919eb] flex items-center
             justify-between rounded-md mb-6">
                        <div className="col1 flex items-center gap-4">
                            <LiaShippingFastSolid className='text-[50px]' />
                            <span className='text-[20px] font-[600] uppercase'>Free Shipping</span>
                        </div>
                        <div className="col">
                            <p className='mb-0 font-[500] '>Free Delivery Now On Your First Order and over ₹200</p>
                        </div>
                        <p className='font-[500] text-[22px]'>- Only <span className='font-[600]'>₹200*</span></p>
                    </div>
                    <AdsBannerSliderV2 item={4} />
                </div>
            </section>

            <section className=" bg-white   ">
                <div className="container px-[-200px]">
                    <h2 className='text-[20px] font-[600] mb-2'>Latest Products</h2>

                    <LatestProduct items={5} />
                    <AdsBannerSlider item={3} />
                </div>
            </section>






            <section className=" bg-white  pb-4 ">
                <div className="container px-[-200px]">
                    <h2 className='text-[20px] font-[600] mb-2'>Featured Products</h2>

                    <LatestProduct items={5} />
                </div>

            </section>

            <section className='py-5 pb-8 pt-0 bg-white blogSection '>
                <div className="container relative ">
                    <h2 className='text-[20px] font-[600] mb-4 '>From The Blog</h2>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="blogSlider"

                    >
                        <SwiperSlide>
                        <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <BlogItem/>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </section>

            
            



        </>
    )
}

export default Home
