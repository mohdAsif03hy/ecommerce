import { PiTimerThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const BlogItem = () => {
    return (
        <div className='blogItem group'>
            <div className="imgWrapper w-full overflow-hidden relative rounded-md">
                <img src="https://imgs.search.brave.com/qz5beOscXDwKoet2aJq8HF_w_Op-MpPFQm8hfqzUaew/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2xpZGV0ZWFtLm5l/dC9tZWRpYS9jYXRh/bG9nL3Byb2R1Y3Qv/Y2FjaGUvMzMweDE4/Ni9zL2Evc2FsZXNf/Y29uc3VsdGluZ19w/b3dlcnBvaW50X3Bw/dF90ZW1wbGF0ZV9i/dW5kbGVzX3NsaWRl/MDEuanBn"
                className="transition-all w-full group-hover:scale-105 group-hover:rorate-1  cursor-pointer" alt="blogs" />
                <span className="flex items-center justify-center text-black 
                absolute bottom-[5px] left-[5px] z-50 font-[500] hover:text-[#ff5252] cursor-pointer rounded-md gap-1 p-1 text-[12px]">
                    <PiTimerThin className="text-[18px] "/> 5 APRIL, 2025
                </span>
            </div>
            <div className="info py-4">
                <h2 className="text-[15px] font-[600] text-black ">
                    <Link className="link" to="/">Blog title</Link>
                </h2>
                <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde modi eos ad magnam harum .......</p>

                 <Link  className=" link font-[500] text-[14px]  flex items-center gap-1" to="/">Read More <MdOutlineKeyboardArrowRight  className="text-[15px] "/></Link>

            </div>
        </div>
    )
}

export default BlogItem
