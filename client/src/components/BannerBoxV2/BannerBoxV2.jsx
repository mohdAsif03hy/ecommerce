import { Link } from "react-router-dom";
import "../BannerBoxV2/style.css";


const BannerBoxV2 = (props) => {
    return (
        <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative">
            <img src={props.img} alt="" className="w-full overflow-hidden 
            rounded-md transition-all duration-150 group-hover:scale-105 " />
            <div className={`info absolute p-5 -top-5 ${props.info === "left" ? 'left-0' : 'right-0 '} w-[70%] h-full z-50
            flex items-center justify-center flex-col gap-2 ${props.info === "left" ? '' : 'pl-12'} `}>
                <h2 className="text-[20px] font-[600]">Samsung Gear VR Camera</h2>
                <span className="text-[20px] text-[#ff5252] font-[500] w-full">Rs 14,999</span>
                <div className=" w-full ">
                    <Link to={'/'} className="font-[17px] font-[600] link ">
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BannerBoxV2
