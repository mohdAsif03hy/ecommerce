import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import Button from '@mui/material/Button';



const CartPanel = () => {
    return (
        <>
            <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
                <div className="cartItem w-full flex items-center gap-3 border-b border-[rgba(0,0,0,0.1)] pb-1">
                    <div className="img w-[25%] overflow-hidden h-[80px] p-2 rounded-md border border-[rgba(0,0,0,0.1)] ">
                        <img src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                            alt="" className="w-full" />
                    </div>
                    <div className="info w-[75%] py-4 relative">
                        <h4 className='text-[14px] font-[500]'><Link to={"/"} className="link ">Product Title</Link></h4>
                        <p className="flex items-center gap-4 mt-2 mb-2">
                            <span> Qty : <span>2</span></span>
                            <span className='text-[#ff5252]'>Price : 299</span>
                        </p>
                        <MdDelete className="absolute top-[15px] right-[10px] cursor-pointer text-[19px] link transition-all" />
                    </div>
                </div>
                <div className="cartItem w-full flex items-center gap-3 border-b border-[rgba(0,0,0,0.1)] py-1">
                    <div className="img w-[25%] overflow-hidden h-[80px] p-2 rounded-md border border-[rgba(0,0,0,0.1)] ">
                        <img src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                            alt="" className="w-full" />
                    </div>
                    <div className="info w-[75%] py-4 relative">
                        <h4 className='text-[14px] font-[500]'><Link to={"/"} className="link ">Product Title</Link></h4>
                        <p className="flex items-center gap-4 mt-2 mb-2">
                            <span> Qty : <span>2</span></span>
                            <span className='text-[#ff5252]'>Price : 299</span>
                        </p>
                        <MdDelete className="absolute top-[15px] right-[10px] cursor-pointer text-[19px] link transition-all" />
                    </div>
                </div>
                <div className="cartItem w-full flex items-center gap-3 border-b border-[rgba(0,0,0,0.1)] py-1">
                    <div className="img w-[25%] overflow-hidden h-[80px] p-2 rounded-md border border-[rgba(0,0,0,0.1)] ">
                        <img src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                            alt="" className="w-full" />
                    </div>
                    <div className="info w-[75%] py-4 relative">
                        <h4 className='text-[14px] font-[500]'><Link to={"/"} className="link ">Product Title</Link></h4>
                        <p className="flex items-center gap-4 mt-2 mb-2">
                            <span> Qty : <span>2</span></span>
                            <span className='text-[#ff5252]'>Price : 299</span>
                        </p>
                        <MdDelete className="absolute top-[15px] right-[10px] cursor-pointer text-[19px] link transition-all" />
                    </div>
                </div>
                <div className="cartItem w-full flex items-center gap-3 border-b border-[rgba(0,0,0,0.1)] py-1">
                    <div className="img w-[25%] overflow-hidden h-[80px] p-2 rounded-md border border-[rgba(0,0,0,0.1)] ">
                        <img src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                            alt="" className="w-full" />
                    </div>
                    <div className="info w-[75%] py-4 relative">
                        <h4 className='text-[14px] font-[500]'><Link to={"/"} className="link ">Product Title</Link></h4>
                        <p className="flex items-center gap-4 mt-2 mb-2">
                            <span> Qty : <span>2</span></span>
                            <span className='text-[#ff5252]'>Price : 299</span>
                        </p>
                        <MdDelete className="absolute top-[15px] right-[10px] cursor-pointer text-[19px] link transition-all" />
                    </div>
                </div>
                <div className="cartItem w-full flex items-center gap-3 border-b border-[rgba(0,0,0,0.1)] py-1">
                    <div className="img w-[25%] overflow-hidden h-[80px] p-2 rounded-md border border-[rgba(0,0,0,0.1)] ">
                        <img src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                            alt="" className="w-full" />
                    </div>
                    <div className="info w-[75%] py-4 relative">
                        <h4 className='text-[14px] font-[500]'><Link to={"/"} className="link ">Product Title</Link></h4>
                        <p className="flex items-center gap-4 mt-2 mb-2">
                            <span> Qty : <span>2</span></span>
                            <span className='text-[#ff5252]'>Price : 299</span>
                        </p>
                        <MdDelete className="absolute top-[15px] right-[10px] cursor-pointer text-[19px] link transition-all" />
                    </div>
                </div>
                <div className="cartItem w-full flex items-center gap-3 border-b border-[rgba(0,0,0,0.1)] py-1">
                    <div className="img w-[25%] overflow-hidden h-[80px] p-2 rounded-md border border-[rgba(0,0,0,0.1)] ">
                        <img src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                            alt="" className="w-full" />
                    </div>
                    <div className="info w-[75%] py-4 relative">
                        <h4 className='text-[14px] font-[500]'><Link to={"/"} className="link ">Product Title</Link></h4>
                        <p className="flex items-center gap-4 mt-2 mb-2">
                            <span> Qty : <span>2</span></span>
                            <span className='text-[#ff5252]'>Price : 299</span>
                        </p>
                        <MdDelete className="absolute top-[15px] right-[10px] cursor-pointer text-[19px] link transition-all" />
                    </div>
                </div>

            </div>
            <div className="bottomSec  absolute !bottom-[10px] !left-[10px] w-full pr-4">

            <div className="bottomInfo py-3 px-4 flex items-center justify-between w-full flex-col border-t border-[rgba(0,0,0,0.1)] pr-8 " >
                <div className="flex items-center  justify-between w-full">
                    <span className="text-[13px] font-[600]">1 item</span>
                    <span className="text-[#ff5252] font-bold text-[13px]">2999</span>
                </div>
                <div className="flex items-center justify-between w-full">
                    <span className="text-[13px] font-[600]">Shipping</span>
                    <span className="text-[#ff5252] font-bold text-[13px]">39</span>
                </div>

            </div>

            <div className="bottomInfo py-3 px-4  flex items-center justify-between w-full flex-col border-t border-[rgba(0,0,0,0.1)] pr-8 " >
                <div className="flex items-center justify-between w-full ">
                    <span className="text-[13px] font-[600]">Total (tax excl.)</span>
                    <span className="text-[#ff5252] font-bold text-[13px]">99</span>
                </div>
                    <div className="flex items-center justify-between w-[95%] gap-7">
                        <Button className="btn-org btn-lg w-[50%]"><Link to={"/cart"}>View Cart</Link></Button>
                        <Button className="btn-org btn-border btn-lg w-[50%]"><Link to={"/checkout"}>Checkout</Link></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPanel
