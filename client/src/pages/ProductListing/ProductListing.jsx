import Sidebar from "../../components/Sidebar/Sidebar"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from "../../components/productItem/ProductItem";
import Button from "@mui/material/Button";
import { BiSolidGridAlt } from "react-icons/bi";
import { TiThMenuOutline } from "react-icons/ti";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react"
import { useId } from "react"
import ProductItemListView from "../../components/productItem ListView/ProductItemListView";
import Pagination from '@mui/material/Pagination';



const ProductListing = () => {

    const id = useId();
    const buttonId = `${id}-button`;
    const menuId = `${id}-menu`;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


        const [isItemView, setItemView] = useState('grid');

    return (
        <section className="py-3 pb-0">
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/" className="link transition">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                        className="link"
                    >
                        Fashion
                    </Link>
                </Breadcrumbs>
            </div>
            <div className="bg-white p-2 mt-3 ">
                <div className="container flex  gap-3">
                    <div className="sidebarWrapper w-[20%] h-full bg-white ">
                        <Sidebar />
                    </div>

                    <div className="rightContent !w-[80%] !h-full py-2">
                        <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between">
                            <div className="col1 flex items-center itemViewAction " >
                                <Button onClick={()=>setItemView('List')} className={`!w-[30px] ${isItemView === "list" && "active"} !h-[30px] !min-w-[30px] !rounded-full !text-black`}>
                                    <TiThMenuOutline className="text-[rgba(0,0,0,0.7)] text-[28px] " />
                                </Button>
                                <Button onClick={()=>setItemView('grid')} className={`!w-[30px] ${isItemView === "grid" && "active"} !h-[30px] !min-w-[30px] !rounded-full !text-black`}>
                                    <BiSolidGridAlt  className="!font-[400] text-[rgba(0,0,0,0.7)] !text-[28px]" />
                                </Button>
                                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">There are 27 products</span>
                            </div>
                            <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">Sort By</span>
                                <Button
                                    id={buttonId}
                                    aria-controls={open ? menuId : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open}
                                    onClick={handleClick}
                                    className="!bg-white   !text-[12px] !text-[#000] !capitalize !border-1 !border-[#000] "
                                >
                                    Sales, highest to lowers
                                </Button>
                                <Menu
                                    id={menuId}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    slotProps={{
                                        list: {
                                            'aria-labelledby': buttonId,
                                        },
                                    }}
                                >
                                    <MenuItem onClick={handleClose}
                                        className="!bg-white   !text-[12px] !text-[#000] !capitalize  "
                                    >Sales, highest to lowers</MenuItem>
                                    <MenuItem onClick={handleClose}
                                        className="!bg-white   !text-[12px] !text-[#000] !capitalize  "
                                    >Relevance</MenuItem>
                                    <MenuItem onClick={handleClose}
                                        className="!bg-white   !text-[12px] !text-[#000] !capitalize  "
                                    >Name, A to Z</MenuItem>
                                    <MenuItem onClick={handleClose}
                                        className="!bg-white   !text-[12px] !text-[#000] !capitalize  "
                                    >Name, Z to A</MenuItem>
                                    <MenuItem onClick={handleClose}
                                        className="!bg-white   !text-[12px] !text-[#000] !capitalize  "
                                    >Price, low to high</MenuItem>
                                    <MenuItem onClick={handleClose}
                                        className="!bg-white   !text-[12px] !text-[#000] !capitalize  "
                                    >Price, high to low</MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className={`grid ${isItemView === 'grid' ? "grid-cols-4 md:grid-cols-4"  : "grid-cols-1 md:grid-cols-1"   } gap-3 `}>
                            {
                                isItemView === 'grid' ?
                                <>
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                                </> 
                                : 
                                <>
                            <ProductItemListView />
                            <ProductItemListView />
                            <ProductItemListView />
                            <ProductItemListView />
                            <ProductItemListView />
                            <ProductItemListView />
                            <ProductItemListView />
                            <ProductItemListView />
                                
                                </>
                            }
                            
                        </div>
                        <div className="flex items-center  justify-center mt-4">
                               <Pagination count={10} showFirstButton showLastButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductListing
