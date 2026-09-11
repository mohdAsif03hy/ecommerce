import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { FaGooglePay } from "react-icons/fa";
import { ImGift } from "react-icons/im";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoChatbubblesOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <footer className="py-6 bg-white">
                <div className="container  rounded-lg py-4  ">
                    <div className="flex items-center justify-center gap-8 pb-7">
                        <div className="col flex items-center justify-center flex-col w-[15%] group w">
                            <FaShippingFast className="text-[40px] transition-all  group-hover:text-[#ff5252] duration-300 group-hover:-translate-y-1" />
                            <h3 className="text-[16px] font-[600] mt-1">Free Shipping</h3>
                            <p className="text-[12px] font-[500]">For all Oders Over Rs 100</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col w-[15%] group w">
                            <TbTruckReturn className="text-[40px] transition-all  group-hover:text-[#ff5252] duration-300 group-hover:-translate-y-1" />
                            <h3 className="text-[16px] font-[600] mt-1">30 Days Returns</h3>
                            <p className="text-[12px] font-[500]">For an Exchange Product</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col w-[15%] group w">
                            <FaGooglePay className="text-[40px] transition-all  group-hover:text-[#ff5252] duration-300 group-hover:-translate-y-1" />
                            <h3 className="text-[16px] font-[600] mt-1">Secured Payment</h3>
                            <p className="text-[12px] font-[500]">Payment Card Accepted</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col w-[15%] group w">
                            <ImGift className="text-[40px] transition-all  group-hover:text-[#ff5252] duration-300 group-hover:-translate-y-1" />
                            <h3 className="text-[16px] font-[600] mt-1">Special Gifts</h3>
                            <p className="text-[12px] font-[500]">Our First Product Order</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col w-[15%] group w">
                            <MdSupportAgent className="text-[40px] transition-all  group-hover:text-[#ff5252] duration-300 group-hover:-translate-y-1" />
                            <h3 className="text-[16px] font-[600] mt-1">Support 24/7</h3>
                            <p className="text-[12px] font-[500]">Contact us Anytime</p>
                        </div>
                    </div>
                    <br />
                    <hr />


                    <div className="footer flex  py-8 ">
                        <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
                            <h2 className="text-[18px] font-[600] mb-4">Contact Us</h2>
                            <p className="text-[13px] font-[400] pb-4">Classyshop - Mega Super Store
                                <br />
                                507-Union Trade Center France</p>
                            <Link to="mailto:someone@mozilla.org" className="link text-[13px]">sales@gmail.com</Link>

                            <span className="text-[20px] font-[600] block w-full mb-5 mt-3 text-[#ff5252]">
                                (91+) 9336-099-763
                            </span>


                            <div className="flex items-center gap-2">
                                <IoChatbubblesOutline className="text-[35px] text-[#ff5252]" />
                                <span className="text-[15px] font-[600] ">Online Chat <br />
                                    Get Expert Help</span>
                            </div>
                        </div>
                        <div className="part2 w-[40%] flex  ">
                            <div className="part2_col1 w-[50%] pl-9">
                                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                                <ul className="list">
                                    <li className="list-none text-[13px] w-full mb-2">
                                        <Link to="/" className="link">Prices drop</Link>
                                    </li>
                                    <li className="list-none text-[13px] w-full mb-2">
                                        <Link to="/" className="link">New Products</Link>
                                    </li>
                                    <li className="list-none text-[13px] w-full mb-2">
                                        <Link to="/" className="link">Best Sales</Link>
                                    </li>
                                    <li className="list-none text-[13px] w-full mb-2">
                                        <Link to="/" className="link">Contact Us</Link>
                                    </li>
                                    <li className="list-none text-[13px] w-full mb-2">
                                        <Link to="/" className="link">Sitemap</Link>
                                    </li>
                                    <li className="list-none text-[13px] w-full mb-2">
                                        <Link to="/" className="link">Stores</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="part2_col2 w-[50%]">
                                <h2 className="text-[18px] font-[600] mb-4">Our Company</h2>
                                <ul className="list">
                                    <li className="list-none text-[13px] w-full mb-2">
                                        <Link to="/" className="link">Delivery</Link>
                                    </li>
                                    <li className="list-none text-[13px] w-full mb-2">
                                        <Link to="/" className="link">Legal Notice</Link>
                                    </li>
                                    <li className="list-none text-[13px] w-full mb-2">
                                        <Link to="/" className="link">Term And Condition Of Use</Link>
                                    </li>
                                    <li className="list-none text-[13px] w-full mb-2">
                                        <Link to="/" className="link">About Us</Link>
                                    </li>
                                    <li className="list-none text-[13px] w-full mb-2">
                                        <Link to="/" className="link">Secure Payment</Link>
                                    </li>
                                    <li className="list-none text-[13px] w-full mb-2">
                                        <Link to="/" className="link">Login</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="part2 w-[35%] flex flex-col pr-8">
                            <h2 className="text-[18px] font-[600] mb-4">Subscribe To Newsletter</h2>
                            <p className="text-[13px]">SUbscribe to our latest newslatter to get <br /> news about special discounts.</p>
                            <form action="" className="mt-5">
                                <input type="text" className="w-[85%] outline-none h-[43px] pl-4 pr-4
                        rounded-sm border border-[rgba(0,0,0,0.3)] " placeholder="Your Email Address" />
                                <Button className="btn-org ">SUBSCRIBE</Button>
                                <FormControlLabel control={<Checkbox />} label="I agree to the terms and conditions and the privacy policy" />
                            </form>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white ">
                <div className="container flex items-center justify-between  ">
                    <ul className=" flex items-center gap-3">
                        <li className="list-none ">
                            <Link  target="_blank" to="/" className="w-[35px] h-[35px] rounded-full border
                            border-[rgba(0,0,0,0.1)] flex items-center justify-center group transition-all hover:bg-[#ff5252]">
                                <FaFacebookF className="text-[15px] group-hover:text-white " />
                            </Link>

                        </li>
                        <li className="list-none">
                            <Link  target="_blank" to="/" className="w-[35px] h-[35px] rounded-full border
                            border-[rgba(0,0,0,0.1)] flex items-center justify-center group transition-all hover:bg-[#ff5252]">
                                <FaInstagram className="text-[15px] group-hover:text-white " />
                            </Link>

                        </li>
                        <li className="list-none" className="w-[35px] h-[35px] rounded-full border
                            border-[rgba(0,0,0,0.1)] flex items-center justify-center group transition-all hover:bg-[#ff5252]">
                            <Link  target="_blank" to="/">
                                <FaXTwitter className="text-[15px] group-hover:text-white " />
                            </Link>

                        </li>
                        <li className="list-none">
                            <Link  target="_blank" to="/" className="w-[35px] h-[35px] rounded-full border
                            border-[rgba(0,0,0,0.1)] flex items-center justify-center group transition-all hover:bg-[#ff5252]">
                                <FaSnapchat className="text-[17px] group-hover:text-white " />
                            </Link>

                        </li>
                        <li className="list-none">
                            <Link target="_blank" to="/" className="w-[35px] h-[35px] rounded-full border
                            border-[rgba(0,0,0,0.1)] flex items-center justify-center group transition-all hover:bg-[#ff5252]">
                                <AiOutlineYoutube className="text-[20px] group-hover:text-white " />
                            </Link>

                        </li>
                    </ul>
                    <p className="text-[13px] text-center mb-0
                     ">© 2026 - Ecommerce Template</p>
                     <div className="flex items-center ">
                        <img src="./public/thumbnail/pay1.png" alt="" />
                        <img src="./public/thumbnail/pay2.png" alt="" />
                        <img src="./public/thumbnail/pay3.png" alt="" />
                        <img src="./public/thumbnail/pay4.png" alt="" />
                        <img src="./public/thumbnail/pay5.png" alt="" />
                     </div>
                </div>
            </div>
           
            
        </>
    )
}

export default Footer
