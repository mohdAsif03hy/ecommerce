import Button from "@mui/material/Button"
import { useState } from "react";



import { FaChevronDown, FaChevronUp } from "react-icons/fa";




const QtyBox = () => {
    const [qtyValue , setQtyValue] = useState(1);
    const plus=()=>{
       setQtyValue((prev) => prev + 1);
    }
    const minus =()=>{
        if(qtyValue === 1){
            setQtyValue(1);
        }else{
        setQtyValue(qtyValue-1);
        }
    }


    return (
        <div className="qtyBox flex items-center relative">
            <input type="number" className="w-full h-[37px] mt-4 text-[15px]
            focus:outline-none border-1 border-[rgba(0,0,0,0.2)] p-2 pl-3 rounded-md"   value={qtyValue}/>
        <div className="flex items-center flex-col !justify-between mt-4 !h-[37px]  absolute top-0 right-0 z-50
        border-l-1 border-[rgba(0,0,0,0.1)]">
            <Button className="!min-w-[25px] !w-[25px] !h-[19px] !p1-2 !border-b-1 !border-[rgba(0,0,0,0.1)] !text-[#000] !rounded-none "
            onClick={()=>plus()}><FaChevronUp className="opacity-60"/></Button>
            <Button  className="!min-w-[25px] !w-[25px] !h-[17px]  !text-[#000] " onClick={()=>minus()}><FaChevronDown 
            className="opacity-60"/></Button>
        </div>

       
        </div>
    )
}

export default QtyBox
