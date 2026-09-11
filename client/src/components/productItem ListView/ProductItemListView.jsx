import { Link } from "react-router-dom"
import "../productItem/style.css"

import { BsSuitHeart } from "react-icons/bs";

import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import { IoIosGitCompare } from 'react-icons/io';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import { PiShoppingCartLight } from "react-icons/pi";
import { MyContext } from "../../App";
import { useContext } from "react";




const ProductItemListView = () => {
       const { setOpenProductDetailModal } = useContext(MyContext);
    
    return (
        <div className="productItem shadow-md rounded-md overflow-hidden border border-[rgba(0,0,0,0.1)] h-[95%] flex items-center">
            <div className=" group imgWrapper w-[25%] h-[80%] items-center flex  relative">
                <Link to={'/'}>
                
                    <div className="img h-[210px] overflow-hidden relative rounded-md">
                <img src="./public/thumbnail/model1.png" className=" w-full h-auto  " alt="model" />
                <img src="./public/thumbnail/model2.png" className="w-full h-auto   transition-all
                 duration-400 absolute top-0 left-0 opacity-0
                  group-hover:opacity-100 group-hover:scale-105" alt="model" />
                    </div>
                </Link>
                <span className="discount flex items-center absolute top-[10px] left-[0px] z-50 bg-[#ff5252]
                    text-white rounded-r-xl px-2 text-[11px] font-[500]
                    -translate-x-full opacity-0 transition-all duration-500 ease-out
                    group-hover:translate-x-0 group-hover:opacity-100">10% Off</span>

                <div className="actions absolute top-[5px] !right-[-10px] z-50 flex items-center
                                gap-1 flex-col w-[50px] -translate-y-[150%] opacity-0
                                transition-all duration-500 ease-out
                                group-hover:translate-y-0 group-hover:opacity-100">
                                    
                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full transition-all hover:!bg-[#ff5252] hover:!text-white group" >
                        <BsSuitHeart className="!text-black text-[15px] group-hover:text-white" />
                    </Button>
                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full transition-all hover:!bg-[#ff5252] hover:!text-white group" >
                        <IoIosGitCompare className="!text-black text-[15px] group-hover:text-white" />
                    </Button>
                    <Button onClick={()=>setOpenProductDetailModal(true)} className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full transition-all hover:!bg-[#ff5252] hover:!text-white group" >
                        <MdOutlineZoomOutMap className="!text-black text-[15px] group-hover:text-white" />
                    </Button>
                    <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full transition-all hover:!bg-[#ff5252] hover:!text-white group" >
                        <TbExternalLink className="!text-black text-[15px] group-hover:text-white" />

                    </Button>

                </div>
            </div>
            <div className="info p-2 py-4 px-5 w-[75%]">
                <h6 className="text-[15px] !font-[400] "><Link to={'/'} className="link transition-all">Soylent Green</Link></h6>
                <h3 className="text-[17px] title mt-2 font-[500] mb-2 text-[#000]"><Link to={'/'}
                    className="link transition-all">Siril Georgette Pink Color Saree with Blouse piece</Link></h3>
                    <p className="text-[14px] mb-1 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, qui soluta. Sit saepe dolores
                        , laborum, ratione atque dolore !</p>
                <Rating name="size-small" size="small" value={4} readOnly />

                <div className="flex items-center gap-2">
                    <span className="oldPrice line-through text-gray-500 text-[13px] font-[500]">Rs 399</span>
                    <span className="price text-[#ff5252] text-[13px] font-[600]">Rs 399</span>

                </div>
               <div className="">
                 <Button className="btn-org flex items-center gap-2"><PiShoppingCartLight className="text[17px] !font-[500]"/>Add to Cart </Button>
               </div>
            </div>

        </div>
    )
}

export default ProductItemListView;
