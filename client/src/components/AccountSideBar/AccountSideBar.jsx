import React from "react";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import { LiaCloudUploadAltSolid } from "react-icons/lia";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const AccountSideBar = () => {
    return (
        <div className="card bg-white shadow-md rounded-md  sticky top-[10px]">
            <div className="w-full p-4 flex items-center pb-3 justify-center flex-col border-b border-[rgba(0,0,0,0.1)]">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden mb-4 relative group">
                    <img src="https://imgs.search.brave.com/KUJiF41Pdwr6X3adBHYbNpJIZWoBKNelfJPSJDnYiKM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zcHJh/dHguY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzAxL1Rl/c3RpbW9uaWFsLUdp/cmwuanBn"
                        className=" h-full w-full object-cover " alt="" />
                    <div className="overlay w-full h-full absolute !cursor-pointer opacity-0 transition-all group-hover:opacity-100
                        flex items-center justify-center top-0 left-0 z-50 bg-[rgba(0,0,0,0.4)]">
                        <LiaCloudUploadAltSolid className='text-[20px] text-white cursor-pointer' />
                        <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0' />
                    </div>
                </div>
                <h3>Moh Asif</h3>
                <h6 className='text-[12px] font-[400] pb-'>mohdasif70568@gmail.com</h6>

            </div>
            <ul className='list-none pb-3 pt-2 bg-[#f1f1f1] MyAccountTab'>
                <li className='w-full '>
                    <NavLink to={"/my-account"} exact={true} activeClassName="isActive" >
                        <Button className='flex w-full !justify-start !text-left !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none !py-2  items-center gap-2'>
                            <FaRegUser className='text-[12px]' /> My Profile
                        </Button>
                    </NavLink>
                </li>
                <li className='w-full '>
                    <NavLink to={"/my-List"} exact={true} activeClassName="isActive" >
                        <Button className='flex w-full !justify-start !text-left !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none !py-2 items-center gap-2'>
                            <IoHeartOutline className='text-[15px]' /> My List
                        </Button>
                    </NavLink>
                </li>
                <li className='w-full '>
                    <NavLink to={"/my-orders"} exact={true} activeClassName="isActive" >

                        <Button className='flex w-full !justify-start !text-left !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none !py-2  items-center gap-2'>
                            <HiOutlineShoppingBag className='text-[15px]' /> My Orders
                        </Button>
                    </NavLink>
                </li>
                <li className='w-full '>
                    <NavLink to={"/Lagout"} exact={true} activeClassName="isActive" >

                        <Button className='flex w-full !justify-start !text-left !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none !py-2   items-center gap-2'>
                            <IoLogOutOutline className='text-[15px]' /> Logout
                        </Button>
                    </NavLink>
                </li>

            </ul>
        </div>
    )
}

export default AccountSideBar
