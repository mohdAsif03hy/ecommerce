import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { PiGift } from "react-icons/pi";
import { IoStatsChart } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa6";
import { PiBankDuotone } from "react-icons/pi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";


const DashboardBox = () => {
    return (
        <>
            <Swiper 
                slidesPerView={4}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="dashboardBoxesSlider"
            >
                <SwiperSlide>
                    <div className="box p-5 bg-white cursor-pointer hover:bg-[#fafafa] rounded-md border flex items-center gap-3 border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                        <PiGift className='text-[40px] text-[#3872fa]' />
                        <div className="info w-[70%] ">
                            <h4 className="text-[14px]">New Orders</h4>
                            <b>1,390</b>
                        </div>
                        <LuChartNoAxesCombined className='text-[60px] !text-[#3872fa] ' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box p-5  bg-white cursor-pointer hover:bg-[#fafafa] rounded-md border flex items-center gap-3 border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                        <FaChartPie className='text-[50px] text-[#10b981]' />
                        <div className="info w-[70%] ">
                            <h4>Sales</h4>
                            <b>13,987</b>
                        </div>
                        <LuChartNoAxesCombined className='text-[60px] !text-[#10b981] ' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box p-5  bg-white cursor-pointer hover:bg-[#fafafa] rounded-md border flex items-center gap-3 border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                        <PiBankDuotone className='text-[50px] text-[#7928ca]' />
                        <div className="info w-[70%] ">
                            <h4>Revenue</h4>
                            <b>1,390</b>

                        </div>
                        <LuChartNoAxesCombined className='text-[60px] !text-[#7928ca] ' />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box p-5  bg-white cursor-pointer hover:bg-[#fafafa] rounded-md border flex items-center gap-3 border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                        <MdProductionQuantityLimits className='text-[35px] text-[#312be1d8]' />
                        <div className="info w-[70%] ">
                            <h4 className="text-[12px]">Total Products</h4>
                            <b>1,390</b>
                        </div>
                        <LuChartNoAxesCombined className='text-[60px] !text-[#312be1d8] ' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default DashboardBox
