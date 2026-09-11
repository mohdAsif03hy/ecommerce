import { AiOutlinePlusCircle, AiTwotoneMinusCircle } from "react-icons/ai"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { useState } from "react";

const CategoryCollapse = () => {

 

  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);


  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  }

  const opeInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  }




    return (
        <>
            <div className="scroll">
                <ul className='w-full'>
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/ ' className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                Fashion
                            </Button>
                        </Link>
                        {
                            submenuIndex === 0 ?
                                <AiTwotoneMinusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(0)} />
                                :
                                <AiOutlinePlusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(0)} />
                        }
                        {
                            submenuIndex === 0 &&
                            (
                                <ul className='submenu  w-full pl-3 '>
                                    <li className='list-none relative mb-1'>
                                        <Link to='/' className='w-full'>
                                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                                Appareal
                                            </Button>
                                        </Link>
                                        {
                                            innerSubmenuIndex === 0 ?
                                                <AiTwotoneMinusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => opeInnerSubmenu(0)} />
                                                :
                                                <AiOutlinePlusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => opeInnerSubmenu(0)} />
                                        }
                                        {
                                            innerSubmenuIndex === 0 && (
                                                <ul className='inner_submenu w-full pl-3 '>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Smart tablet
                                                        </Link>
                                                    </li>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Crepe T-Shirt
                                                        </Link>
                                                    </li><li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Leather Watch
                                                        </Link>
                                                    </li><li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Rolling Diamond
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )
                                        }
                                    </li>
                                </ul>
                            )
                        }
                    </li>
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/ ' className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                Groceries
                            </Button>
                        </Link>
                        {
                            submenuIndex === 1 ?
                                <AiTwotoneMinusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(1)} />
                                :
                                <AiOutlinePlusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(1)} />
                        }
                        {
                            submenuIndex === 1 &&
                            (
                                <ul className='submenu  w-full pl-3 '>
                                    <li className='list-none relative mb-1'>
                                        <Link to='/' className='w-full'>
                                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                                Daily Essentials
                                            </Button>
                                        </Link>
                                        {
                                            innerSubmenuIndex === 1 ?
                                                <AiTwotoneMinusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => opeInnerSubmenu(1)} />
                                                :
                                                <AiOutlinePlusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => opeInnerSubmenu(1)} />
                                        }
                                        {
                                            innerSubmenuIndex === 1 && (
                                                <ul className='inner_submenu  w-full pl-3 '>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Fruits & Vegetables
                                                        </Link>
                                                    </li>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Dal & Pulses
                                                        </Link>
                                                    </li><li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Spices & Masala
                                                        </Link>
                                                    </li><li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Dry Fruits & Nuts
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )
                                        }
                                    </li>
                                </ul>
                            )
                        }
                    </li>
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/ ' className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                Bags
                            </Button>
                        </Link>
                        {
                            submenuIndex === 2 ?
                                <AiTwotoneMinusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(2)} />
                                :
                                <AiOutlinePlusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(2)} />
                        }
                        {
                            submenuIndex === 2 &&
                            (
                                <ul className='submenu  w-full pl-3 '>
                                    <li className='list-none relative mb-1'>
                                        <Link to='/' className='w-full'>
                                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                                Backpacks
                                            </Button>
                                        </Link>
                                        {
                                            innerSubmenuIndex === 2 ?
                                                <AiTwotoneMinusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => opeInnerSubmenu(2)} />
                                                :
                                                <AiOutlinePlusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => opeInnerSubmenu(2)} />
                                        }
                                        {
                                            innerSubmenuIndex === 2 && (
                                                <ul className='inner_submenu  w-full pl-3 '>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Laptop Bags
                                                        </Link>
                                                    </li>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Travel Bags & Duffel Bags
                                                        </Link>
                                                    </li><li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Wallets & Sling Bags
                                                        </Link>
                                                    </li><li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            School Bags
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )
                                        }
                                    </li>
                                </ul>
                            )
                        }
                    </li>

                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/ ' className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                Wellness
                            </Button>
                        </Link>
                        {
                            submenuIndex === 3 ?
                                <AiTwotoneMinusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(3)} />
                                :
                                <AiOutlinePlusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(3)} />
                        }
                        {
                            submenuIndex === 3 &&
                            (
                                <ul className='submenu  w-full pl-3 '>
                                    <li className='list-none relative mb-1'>
                                        <Link to='/' className='w-full'>
                                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                                Healthy Living
                                            </Button>
                                        </Link>
                                        {
                                            innerSubmenuIndex === 3 ?
                                                <AiTwotoneMinusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => opeInnerSubmenu(3)} />
                                                :
                                                <AiOutlinePlusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => opeInnerSubmenu(3)} />
                                        }
                                        {
                                            innerSubmenuIndex === 3 && (
                                                <ul className='inner_submenu  w-full pl-3 '>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Vitamins & Supplements
                                                        </Link>
                                                    </li>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Sports Nutrition
                                                        </Link>
                                                    </li><li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Herbal & Ayurvedic
                                                        </Link>
                                                    </li><li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Personal Wellness
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )
                                        }
                                    </li>
                                </ul>
                            )
                        }
                    </li>

                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/ ' className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                Beauty
                            </Button>
                        </Link>
                        {
                            submenuIndex === 4 ?
                                <AiTwotoneMinusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(4)} />
                                :
                                <AiOutlinePlusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(4)} />
                        }
                        {
                            submenuIndex === 4 &&
                            (
                                <ul className='submenu  w-full pl-3 '>
                                    <li className='list-none relative mb-1'>
                                        <Link to='/' className='w-full'>
                                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                                Beauty & Personal Care
                                            </Button>
                                        </Link>
                                        {
                                            innerSubmenuIndex === 4 ?
                                                <AiTwotoneMinusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => opeInnerSubmenu(4)} />
                                                :
                                                <AiOutlinePlusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => opeInnerSubmenu(4)} />
                                        }
                                        {
                                            innerSubmenuIndex === 4 && (
                                                <ul className='inner_submenu  w-full pl-3 '>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Makeup
                                                        </Link>
                                                    </li>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Fragrances & Perfumes
                                                        </Link>
                                                    </li><li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Bath & Body
                                                        </Link>
                                                    </li><li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Personal Hygiene
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )
                                        }
                                    </li>
                                </ul>
                            )
                        }
                    </li>
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/ ' className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                Electronics
                            </Button>
                        </Link>
                        {
                            submenuIndex === 5 ?
                                <AiTwotoneMinusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(5)} />
                                :
                                <AiOutlinePlusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(5)} />
                        }
                        {
                            submenuIndex === 5 &&
                            (
                                <ul className='submenu  w-full pl-3 '>
                                    <li className='list-none relative mb-1'>
                                        <Link to='/' className='w-full'>
                                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                                Tech & Gadgets
                                            </Button>
                                        </Link>
                                        {
                                            innerSubmenuIndex === 5 ?
                                                <AiTwotoneMinusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => opeInnerSubmenu(5)} />
                                                :
                                                <AiOutlinePlusCircle className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => opeInnerSubmenu(5)} />
                                        }
                                        {
                                            innerSubmenuIndex === 5 && (
                                                <ul className='inner_submenu  w-full pl-3 '>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Mobiles & Tablets
                                                        </Link>
                                                    </li>
                                                    <li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Laptops & Computers
                                                        </Link>
                                                    </li><li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Audio & Accessories
                                                        </Link>
                                                    </li><li className='list-none relative mb-1'>
                                                        <Link to='/' className='w-full link !text-left !justify-start !px-3 transition text-[13px] !text-[500]'>
                                                            Smartwatches & Wearables
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )
                                        }
                                    </li>
                                </ul>
                            )
                        }
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CategoryCollapse
