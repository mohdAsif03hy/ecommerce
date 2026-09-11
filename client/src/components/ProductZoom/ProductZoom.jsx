import { InnerImageZoom } from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../HomeCatSlider/style.css";
import { Navigation } from "swiper/modules";
import "../ProductZoom/style.css";
import { useRef, useState } from "react";

const ProductZoom = () => {

const [slideIndex, setSlideIndex] = useState(0);

const zoomSlideBig = useRef();
const zoomSlideSml = useRef();


const goto =(index)=>{
    setSlideIndex(index);
    zoomSlideSml.current?.swiper.slideTo(index);
    zoomSlideBig.current?.swiper.slideTo(index);
}




    return (
        <>
            <div className="flex gap-3 ">
                <div className="slider w-[15%]">
                    <Swiper
                        ref={zoomSlideSml }
                        direction="vertical"
                        slidesPerView={4}
                        spaceBetween={0}
                        navigation={true}
                        modules={[Navigation]}
                        className="zoomProductSliderThumb overflow-hidden"
                    >
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer ${slideIndex ===  0 ? 'opacity-100' : 'opacity-30'} group`}
                            onClick={()=> goto(0)}>
                                <img
                                    src={
                                    "https://imgs.search.brave.com/y6QY-65QSaDYMgEQSAH1U2dnVLItc_nDQTsPJB6inUg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEva2lkcy1kcmVz/cy9iLzYvNC85LTEw/LXllYXJzLXYwMDIt/ZGhhbm9vLWZhc2hp/b24tb3JpZ2luYWwt/aW1haGp6ZWF5OXlo/amY2ei5qcGVnP3E9/NzA"
                                }
                                    className="w-full transition-all group-hover:scale-105"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer ${slideIndex ===  1 ? 'opacity-100' : 'opacity-30'} group`}
                            onClick={()=> goto(1)}>
                                <img
                                     src={
                                    "https://imgs.search.brave.com/GTjMYPdn0AwgVVOpgtP4KI1kqjwKeakZBqZhV2lbsZ4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEva2lkcy1kcmVz/cy9uL3ovay83LTgt/eWVhcnMta2lkcy1t/aWRpLTY0OC1qYXll/bnRlcnByaXNlLW9y/aWdpbmFsLWltYWho/NHE2dGhid2Fubnku/anBlZz9xPTcw"
                                }
                                    className="w-full transition-all group-hover:scale-105"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className={`item rounded-md overflow-hidden cursor-pointer ${slideIndex ===  2 ? 'opacity-100' : 'opacity-30'} group`}
                            onClick={()=> goto(2)}>
                                <img
                                     src={
                                    "https://imgs.search.brave.com/RNfJ3jZWgtit9VUi0aeWqa-ZY9hSB1bpwo4YEiNqqrI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEva2lkcy1kcmVz/cy9rL2svcC8tb3Jp/Z2luYWwtaW1haGp5/enYzcWRmemd5cy5q/cGVnP3E9NzA"
                                }
                                    className="w-full transition-all group-hover:scale-105"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className={`item rounded-md overflow-hidden cursor-pointer ${slideIndex ===  3 ? 'opacity-100' : 'opacity-30'} group`}
                            onClick={()=> goto(3)}>
                                <img
                                     src={
                                    "https://imgs.search.brave.com/LUFCSLNrtaGtecS8in4VanjZ_uDyTB9Q77XehLcTG0E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvZ293bi9sL3Mv/Yy9uYS0xMi0xMy15/ZWFycy1zaG9ydC1z/bGVldmUtc3RpdGNo/ZWQtZ293bjAxLWFh/cnlhLWRlc2lnbmVy/LW5hLXJlc2l6ZWQt/Mi1vcmlnaW5hbC1p/bWFnY2Y3NHFzNXhl/Z2F0LWJiLmpwZWc_/cT03MA"
                                }
                                    className="w-full transition-all group-hover:scale-105"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className={`item rounded-md overflow-hidden cursor-pointer ${slideIndex ===  4 ? 'opacity-100' : 'opacity-30'} group`}
                            onClick={()=> goto(4)}>
                                <img
                                     src={
                                    "https://imgs.search.brave.com/S72699KM-L_WVjrTzuEZkgMwGUPXBz6b0SYlP9bFNBM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEva2lkcy1kcmVz/cy9qL28vay8xMS0x/Mi15ZWFycy1hbS0x/MTMtcGluay1zZmMt/ZmFzaGlvbi1vcmln/aW5hbC1pbWFndTVz/MmZnd3RwaGZoLmpw/ZWc_cT03MA"
                                }
                                    className="w-full transition-all group-hover:scale-105"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer ${slideIndex ===  5 ? 'opacity-100' : 'opacity-30'} group`}
                            onClick={()=> goto(5)}>
                                <img
                                    src={
                                    "https://imgs.search.brave.com/3rKfCC2wf1hV0I80KAnVFe_as8Xxlo_xSiDIYmk1wdk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEva2lkcy1sZWhl/bmdhLWNob2xpLzMv/di9iLzktMTAteWVh/cnMtY3Mtay1sYzAz/Ny0xNjctY2xvdGhl/cy1zaG9wLW9yaWdp/bmFsLWltYWd1YXdt/dmF2aGhkdnAuanBl/Zz9xPTcw"
                                }
                                    className="w-full transition-all group-hover:scale-105"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </div>
                <div className="zoomContainer w-[85%] ">
                    <Swiper
                        ref={zoomSlideBig }
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false}
                        modules={[Navigation]}
                    >
                        <SwiperSlide>
                            <InnerImageZoom
                                src={
                                    "https://imgs.search.brave.com/y6QY-65QSaDYMgEQSAH1U2dnVLItc_nDQTsPJB6inUg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEva2lkcy1kcmVz/cy9iLzYvNC85LTEw/LXllYXJzLXYwMDIt/ZGhhbm9vLWZhc2hp/b24tb3JpZ2luYWwt/aW1haGp6ZWF5OXlo/amY2ei5qcGVnP3E9/NzA"
                                }
                                zoomType="hover"
                                zoomScale={1.5}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                src={
                                    "https://imgs.search.brave.com/GTjMYPdn0AwgVVOpgtP4KI1kqjwKeakZBqZhV2lbsZ4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEva2lkcy1kcmVz/cy9uL3ovay83LTgt/eWVhcnMta2lkcy1t/aWRpLTY0OC1qYXll/bnRlcnByaXNlLW9y/aWdpbmFsLWltYWho/NHE2dGhid2Fubnku/anBlZz9xPTcw"
                                }
                                zoomType="hover"
                                zoomScale={1.5}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                src={
                                    "https://imgs.search.brave.com/RNfJ3jZWgtit9VUi0aeWqa-ZY9hSB1bpwo4YEiNqqrI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEva2lkcy1kcmVz/cy9rL2svcC8tb3Jp/Z2luYWwtaW1haGp5/enYzcWRmemd5cy5q/cGVnP3E9NzA"
                                }
                                zoomType="hover"
                                zoomScale={1.5}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                src={
                                    "https://imgs.search.brave.com/LUFCSLNrtaGtecS8in4VanjZ_uDyTB9Q77XehLcTG0E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvZ293bi9sL3Mv/Yy9uYS0xMi0xMy15/ZWFycy1zaG9ydC1z/bGVldmUtc3RpdGNo/ZWQtZ293bjAxLWFh/cnlhLWRlc2lnbmVy/LW5hLXJlc2l6ZWQt/Mi1vcmlnaW5hbC1p/bWFnY2Y3NHFzNXhl/Z2F0LWJiLmpwZWc_/cT03MA"
                                }
                                zoomType="hover"
                                zoomScale={1.5}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                src={
                                    "https://imgs.search.brave.com/S72699KM-L_WVjrTzuEZkgMwGUPXBz6b0SYlP9bFNBM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEva2lkcy1kcmVz/cy9qL28vay8xMS0x/Mi15ZWFycy1hbS0x/MTMtcGluay1zZmMt/ZmFzaGlvbi1vcmln/aW5hbC1pbWFndTVz/MmZnd3RwaGZoLmpw/ZWc_cT03MA"
                                }
                                zoomType="hover"
                                zoomScale={1.5}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom
                                src={
                                    "https://imgs.search.brave.com/3rKfCC2wf1hV0I80KAnVFe_as8Xxlo_xSiDIYmk1wdk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEva2lkcy1sZWhl/bmdhLWNob2xpLzMv/di9iLzktMTAteWVh/cnMtY3Mtay1sYzAz/Ny0xNjctY2xvdGhl/cy1zaG9wLW9yaWdp/bmFsLWltYWd1YXdt/dmF2aGhkdnAuanBl/Zz9xPTcw"
                                }
                                zoomType="hover"
                                zoomScale={1.5}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ProductZoom;
