import React from 'react'
import "../Search/search.css"
import Button from '@mui/material/Button';
import { IoMdSearch } from "react-icons/io";


const Search = () => {
    return (
        <div className="searchBox w-[100%] h-[40px] 
       bg-[#e5e5e5] rounded-[7px] relative p-2">
            <input className='w-full h-[25px] focus:outline-none
         bg-none bg-inherit p-2 text-[15px]'
                type="search" placeholder='Search for products...' />
            <Button className="!absolute   top-[2px] right-[5px] z-50
                !min-w-[37px] !h-[37px] !rounded-full !text-black" ><IoMdSearch className='text-[#0c0c0ca4] text-[20px]' /></Button>
        </div>
    )
}

export default Search
