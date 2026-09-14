import React from 'react';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import { GiDivert, GiShoppingCart } from "react-icons/gi";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { IoIosGitCompare } from 'react-icons/io';
import { CiHeart } from "react-icons/ci";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation/Navigation';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';
import Button from '@mui/material/Button';
import { TbUserHeart } from "react-icons/tb";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { fetchDataFromApi } from '../../utils/api';


const Header = () => {
    const context = useContext(MyContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const logout = () => {
        setAnchorEl(null);
        fetchDataFromApi(`/api/user/logout?token=${localStorage.getItem('accessToken')}`, {withCredentials: true})
            .then((res) => {
                if(res?.error === false) {
                    localStorage.removeItem('accessToken');
                    context.setIsLogin(false);
                    localStorage.removeItem('accessToken',res?.data?.accessToken);
                    localStorage.removeItem('refreshToken',res?.data?.refreshToken);
                }
            })
            .catch((error) => {
                // console.error('Error during logout:', error);
            });

    }
    const handleClose = () => {
        setAnchorEl(null);
    }


    const { setOpenCartPanel } = useContext(MyContext);

    const maxVisibleNotifications = 9;
    const unreadNotificationsCount = 9;


    return (
        <header className='bg-white'>
            <div className='top-strip py-2 border-t-100 border-black-200 border-b-[1px]'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className="col1 w-[50%]">
                            <p className='text-[14px] font-[400]'>Get up to 50% off new styles, limited time only</p>
                        </div>
                        <div className="col2 flex items-center justify-end">
                            <ul className='flex items-center gap-3'>
                                <li className='list-none'>
                                    <Link to="/help-center" className='link text-[13px] font-[500] transition' >Help Center</Link>
                                </li>
                                <li className='list-none'>
                                    <Link to="/Order Tracking" className='link text-[13px] font-[500] transition' >Order Tracking</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header py-3 borderb">
                <div className="container flex items-center justify-between">
                    <div className="col1 w-[25%]">
                        <Link to="/"><img className='' src="./logo.png" alt="" /></Link>
                    </div>
                    <div className="col2 w-[40%]">
                        <Search />
                    </div>
                    <div className="col3  w-[30%] flex items-center pl-6">
                        <ul className='flex items-center justify-end w-full gap-2'>
                            {
                                context.isLogin === false ?
                                    <li className='list-none'>
                                        <Link className='link transition text[15px] font-500' to="/login">
                                            Login
                                        </Link>&nbsp;/&nbsp;
                                        <Link className='
                                link transition text[15px] font-500 ' to="/register">
                                            Register
                                        </Link>
                                    </li>
                                    :
                                    <>

                                        <div className="myAccountWrap !text-black flex items-center gap-1 cursor-pointer">
                                            <Button onClick={handleClick} className=" !text-[15px] !text-black !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]">
                                                <TbUserHeart className='text-[22px] text-[rgba(0,0,0,0.7)]' />
                                            </Button>
                                            <div className="info">

                                            </div>
                                        </div>

                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            slotProps={{
                                                paper: {
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                        mt: 1,
                                                        '&::before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            {/* Profile Header */}
                                            <div className="px-4 py-2 flex items-center gap-3 min-w-[260px]">
                                                {/* Profile Picture */}
                                                <img
                                                    src={context.userData?.profilePicture || "https://imgs.search.brave.com/pdN1zMdlb8OwDKLeFNoE0ViMB0Yod1uHyjOZzjNweNc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9weGNv/bGxlY3Rpb25zLmNv/LmluL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzA4L2luc3Rh/Z3JhbS1kcC1mb3It/Z2lybHMtYWVzdGhl/dGljLTExLmpwZw"}
                                                    alt="Profile"
                                                    className="w-[45px] h-[45px] rounded-full object-cover border border-gray-200"
                                                />
                                                {/* Name + Email */}
                                                <div className="flex flex-col min-w-0">
                                                    <h4 className="text-[13px] font-[600] text-gray-800 truncate">
                                                        {context.userData?.name || "User Name"}
                                                    </h4>
                                                    <p className="text-[12px] text-gray-500 truncate">
                                                        {context.userData?.email || "user@gmail.com"}
                                                    </p>
                                                </div>
                                            </div>
                                            <Divider />
                                            {/* Menu Items */}
                                            <Link to={"/my-account"} className='w-full block'>
                                            <MenuItem
                                                onClick={handleClose}
                                                className="flex gap-2 !py-2"
                                            >
                                                <CiUser className="text-[20px]" />
                                                <span className="text-[13px]">My account</span>
                                            </MenuItem>
                                            </Link>
                                            <Link to={"/my-orders"} className='w-full block'>

                                            <MenuItem
                                                onClick={handleClose}
                                                className="flex gap-2 !py-2"
                                            >
                                                <HiOutlineShoppingBag className="text-[20px]" />
                                                <span className="text-[13px]">Orders</span>
                                            </MenuItem>
                                            </Link>
                                            <Link to={"/my-list"} className='w-full block'>

                                            <MenuItem
                                                onClick={handleClose}
                                                className="flex gap-2 !py-2"
                                            >
                                                <IoHeartOutline className="text-[20px]" />
                                                <span className="text-[13px]">My List</span>
                                            </MenuItem>
                                            </Link>
                                            <Divider />
                                            <Link to={"/login"} className='w-full block'>

                                            <MenuItem
                                                onClick={logout}
                                                className="flex gap-2 !py-1"
                                            >
                                                <IoLogOutOutline className="text-[20px]" />
                                                <span className="text-[13px]">Logout</span>
                                            </MenuItem>
                                            </Link>

                                        </Menu>
                                    </>
                            }
                            <li>
                                <Tooltip title="Compare" placement='top'>
                                    <IconButton aria-label="show 4 unread messages">
                                        <Badge badgeContent={9} color="#ff5252">
                                            <IoIosGitCompare className='font-bold' />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Wishlist" placement='top'>
                                    <IconButton aria-label="show 4 unread messages">
                                        <Badge badgeContent={9} color="#ff5252">
                                            <CiHeart />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Cart" placement='top'>
                                    <IconButton aria-label="show 4 unread messages" onClick={() => setOpenCartPanel(true)}>
                                        <Badge badgeContent={9} color="#ff5252">
                                            <GiShoppingCart />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <Navigation />
        </header>
    )
}

export default Header
