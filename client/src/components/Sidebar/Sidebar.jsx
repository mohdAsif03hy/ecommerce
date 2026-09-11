import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css";
import { Collapse } from 'react-collapse';
import { FaCaretDown } from "react-icons/fa";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { FaCaretUp } from "react-icons/fa";
import "react-range-slider-input/dist/style.css";
import RangeSliderModule from "react-range-slider-input";
import Rating from '@mui/material/Rating';



const Sidebar = () => {
    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
    const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
    const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);
    const RangeSlider = RangeSliderModule.default ?? RangeSliderModule;


    return (
        <aside className="sidebar">
            <div className="box ">
                <h3 className='mb-t text-[15px] font-[600] flex items-center pr-5'>Shop by Category
                    <Button className='!w-[30px] !h-[30px] !ml-auto !min-w-[30px] !rounded-full' onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                        {isOpenCategoryFilter ? <FaCaretUp className="text-black" /> : <FaCaretDown className="text-black" />}
                    </Button>
                </h3>
                <Collapse isOpened={isOpenCategoryFilter}>
                    <div className="scroll px-3 relative -left-[9px]">
                        <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className='w-full' />
                        <FormControlLabel control={<Checkbox size="small" />} label="Electronics" className='w-full' />
                        <FormControlLabel control={<Checkbox size="small" />} label="Bags" className='w-full' />
                        <FormControlLabel control={<Checkbox size="small" />} label="Footwear" className='w-full' />
                        <FormControlLabel control={<Checkbox size="small" />} label="Groceries" className='w-full' />
                        <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className='w-full' />
                        <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className='w-full' />
                        <FormControlLabel control={<Checkbox size="small" />} label="Jewellery" className='w-full' />
                    </div>
                </Collapse>
            </div>

            <div className="box mt-4 ">
                <h3 className='mb-t text-[15px] font-[600] flex items-center pr-5'>Availability
                    <Button className='!w-[30px] !h-[30px] !ml-auto !min-w-[30px] !rounded-full' onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}>
                        {isOpenAvailFilter ? <FaCaretUp className="text-black" /> : <FaCaretDown className="text-black" />}
                    </Button>
                </h3>
                <Collapse isOpened={isOpenAvailFilter}>
                    <div className="scroll px-3 relative -left-[9px]">
                        <FormControlLabel control={<Checkbox size="small" />}
                            label="Available   (18)"
                            className='w-full' />
                        <FormControlLabel control={<Checkbox size="small" />}
                            label="In stock   (18)"
                            className='w-full' />
                        <FormControlLabel control={<Checkbox size="small" />}
                            label="Not available   (18)"
                            className='w-full' />
                    </div>
                </Collapse>
            </div>



            <div className="box mt-2">
                <h3 className='mb-t text-[15px] font-[600] flex items-center pr-5'>Size
                    <Button className='!w-[30px] !h-[30px] !ml-auto !min-w-[30px] !rounded-full' onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}>
                        {isOpenSizeFilter ? <FaCaretUp className="text-black" /> : <FaCaretDown className="text-black" />}
                    </Button>
                </h3>
                <Collapse isOpened={isOpenSizeFilter}>
                    <div className="scroll px-3 relative -left-[9px]">
                        <FormControlLabel control={<Checkbox size="small" />}
                            label="Small   (18)"
                            className='w-full' />
                        <FormControlLabel control={<Checkbox size="small" />}
                            label="Medium   (18)"
                            className='w-full' />
                        <FormControlLabel control={<Checkbox size="small" />}
                            label="Large   (18)"
                            className='w-full' />
                        <FormControlLabel control={<Checkbox size="small" />}
                            label="XL  (18)"
                            className='w-full' />
                        <FormControlLabel control={<Checkbox size="small" />}
                            label="XXL   (18)"
                            className='w-full' />
                    </div>
                </Collapse>
            </div>



            <div className="box mt-4">
                <h3 className='mb-2 text-[15px] font-[600] flex items-center pr-5'>
                    Filter By Price
                </h3>
                <RangeSlider />
                <div className="flex pt-4 pb-2 priceRange">
                    <span className='text-[11px]'>
                        Form: <strong className='text-dark'>Rs: {300}</strong>
                    </span>
                    <span className='ml-auto text-[11px]'>
                        Form: <strong className='text-dark'>Rs: {500}</strong>
                    </span>
                </div>

            </div>



            <div className="box mt-4">
                <h3 className='mb-2 text-[15px] font-[600] flex items-center pr-5'>
                    Filter By Rating
                </h3>
                <div className="w-full"> 
                    <Rating name="size-small" size="small" value={5} readOnly  />
                </div>
                <div className="w-full">
                    <Rating name="size-small" size="small" value={4} readOnly />
                </div>
                <div className="w-full">
                    <Rating name="size-small" size="small" value={3} readOnly />
                </div>
                <div className="w-full">
                    <Rating name="size-small" size="small" value={2} readOnly />
                </div>
                <div className="w-full">
                    <Rating name="size-small" size="small" value={1} readOnly />
                </div>



            </div>

        </aside>
    )
}

export default Sidebar
