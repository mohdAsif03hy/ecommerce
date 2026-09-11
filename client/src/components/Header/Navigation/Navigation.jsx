import  { useState } from 'react'
import "../Navigation/style.css"
import Button from '@mui/material/Button'
import { RiMenu2Fill } from "react-icons/ri";
import { RiArrowDownWideLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { PiRocketLaunch } from "react-icons/pi";
import CategoryPanel from './CategoryPanel';





const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel = () => {
        setOpenCatPanel(true);
    };
    
    return (
        <>
            <nav className='py-1 mr-0 '>
                <div className="container flex items-center justify-end gap-10">
                    <div className="col_1 w-[26%]">
                        <Button className='!text-black gap-2 w-full' onClick={(e) => {
                            e.currentTarget.blur();
                            setIsOpenCatPanel(true);
                        }}>
                            <RiMenu2Fill className='text-[15px]' />
                            Shop By Categories
                            <RiArrowDownWideLine className='text-[13px] ml-auto font-bold cursor-pointer' />
                        </Button>
                    </div>
                    <div className="col_2 w-[55%] z-99">
                        <ul className='flex items-center gap-1 nav'>
                            <li className='list-none'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#f65454eb]'>
                                        Home
                                    </Button>
                                </Link>
                            </li>
                            <li className='list-none relative'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#f65454eb]'>
                                        Fashion
                                    </Button>
                                </Link>
                                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all" >
                                    <ul>
                                        <li className='list-none w-full relative'>
                                            <Link to='/' className='w-full'>
                                                <Button className= '  w-full !text-left !justify-start !rounded-none'>Men</Button>
                                            </Link>
                                            


                                    <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all" >
                                    <ul>
                                        <li className='list-none w-full '>
                                            <Link to='/' className='w-full'>
                                                <Button className=' w-full !text-left !justify-start !rounded-none '>T-shirt</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none  w-full '>
                                            <Link to='/' className='w-full'>
                                                <Button className=' !text-left w-full !justify-start !rounded-none' >Shirt</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none  w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className=' !text-left w-full !justify-start !rounded-none'>Footwear</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none  w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className=' !text-left w-full !justify-start !rounded-none'>jeans</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none  w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className=' !text-left w-full !justify-start !rounded-none'>pent</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                            
                                        </li>
                                        <li className='list-none  w-full '>
                                            <Link to='/' className='w-full'>
                                                <Button className=' !text-left w-full !justify-start !rounded-none' >Women</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none  w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className=' !text-left w-full !justify-start !rounded-none'>Kids</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none  w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className=' !text-left w-full !justify-start !rounded-none'>Girls</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none  w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className=' !text-left w-full !justify-start !rounded-none'>Boys</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#f65454eb]'>
                                        Electronics
                                    </Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#f65454eb]'>
                                        Bags
                                    </Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#f65454eb]'>
                                        Footwear
                                    </Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#f65454eb]'>
                                        Groceries
                                    </Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#f65454eb]'>
                                        Beauty
                                    </Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#f65454eb]'>
                                        Wellness
                                    </Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#f65454eb]'>
                                        Jewellery
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col_3 w-[22%] right-[-33px] relative">
                        <p className='text-[12px] font-[500] flex  items-center gap-3 mb-0 mt-0 '>
                            <PiRocketLaunch className='text-[18px] '  />Free International Delivery</p>
                    </div>
                </div>
            </nav>
            <CategoryPanel
                isOpenCatPanel={isOpenCatPanel}
                setIsOpenCatPanel={setIsOpenCatPanel}
            />
        </>
    )
}

export default Navigation
