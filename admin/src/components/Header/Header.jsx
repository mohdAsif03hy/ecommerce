import  { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { IoIosNotificationsOutline } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { LiaSignOutAltSolid } from "react-icons/lia";
import { RiUserLine } from "react-icons/ri";
import {MyContext} from '../../App';
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";



const Header = () => {
  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };
 const context = useContext(MyContext);
  return (
    <header className={`w-full pr-7 shadow-sm h-[auto] py-2  ${context.isSidebarOpen === true ? "pl-60" : "pl-4"} transition-all  bg-[#fff]  flex items-center justify-between `}>
      <div className="part1">
        <Button className='!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.7)]' 
        onClick={() => context.setIsSidebarOpen(!context.isSidebarOpen)} >
          {
          context.isSidebarOpen === true ? 
          <AiOutlineMenuFold className='text-[18px] text-[rgba(0,0,0,0.8)]' />
          :
          <AiOutlineMenuUnfold className='text-[18px] text-[rgba(0,0,0,0.8)]'/>
        }
        </Button>
      </div>
      <div className="part2 w-[40%] flex items-center justify-end gap-5">
        <IconButton aria-label="show 0 unread messages">
          <Badge color="secondary" badgeContent={2}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <IoIosNotificationsOutline />
          </Badge>
        </IconButton>


        <div className="relative">
            <div className="rounded-full h-[34px] w-[34px] overflow-hidden cursor-pointer" onClick={handleClickMyAcc}>
              <img src="https://imgs.search.brave.com/0zuOpNz-txUX4LdTcMP0KOlf9QVWqIFj4ZtH4CeKACU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3NseS5pbi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wNC93/aGF0c2FwcC1kcF8x/NC5qcGc"
               alt="" className='w-full h-full object-cover'/>
            </div>
            <Menu
        anchorEl={anchorMyAcc}
        id="account-menu"
        open={openMyAcc}
        onClose={handleCloseMyAcc}
        onClick={handleCloseMyAcc}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
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
        <MenuItem onClick={handleCloseMyAcc} className='!bg-white '>
          <div className="flex items-center gap-3">
             <div className="rounded-full h-[34px] w-[34px] overflow-hidden cursor-pointer" >
              <img src="https://imgs.search.brave.com/0zuOpNz-txUX4LdTcMP0KOlf9QVWqIFj4ZtH4CeKACU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3NseS5pbi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wNC93/aGF0c2FwcC1kcF8x/NC5qcGc"
               alt="" className='w-full h-full object-cover'/>
            </div>
            <div className="info">
              <h3 className="text-[15px] font-[500] leading-3">Mohd Asif</h3>
              <p className="text-[11px] font-[400] opacity-85  text-[rgba(0,0,0,0.7)]">mohdasif@gmai.com</p>
            </div>
          </div>
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3 '>
        <RiUserLine className='text-[18px]'/> <span className='text-[13px]'>Profile</span>
        </MenuItem>
         <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3 '>
        <LiaSignOutAltSolid className='text-[19px]'/> <span className='text-[13px]'>Sign Out</span>
        </MenuItem>
      </Menu>
        </div>
      </div>
    </header>
  )
}

export default Header
