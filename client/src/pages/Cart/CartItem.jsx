import { useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";

const CartItem = ({ size, Qty }) => {

    // =========================
    // SIZE STATE
    // =========================
    const [selectedSize, setSelectedSize] = useState(size);
    const [sizeAnchorEl, setSizeAnchorEl] = useState(null);

    const openSize = Boolean(sizeAnchorEl);

    const handleClickSize = (event) => {
        setSizeAnchorEl(event.currentTarget);
    };

    const handleCloseSize = (value) => {
        setSizeAnchorEl(null);

        if (value !== null) {
            setSelectedSize(value);
        }
    };


    // =========================
    // QUANTITY STATE
    // =========================
    const [selectedQty, setSelectedQty] = useState(Qty);
    const [qtyAnchorEl, setQtyAnchorEl] = useState(null);

    const openQty = Boolean(qtyAnchorEl);

    const handleClickQty = (event) => {
        setQtyAnchorEl(event.currentTarget);
    };

    const handleCloseQty = (value) => {
        setQtyAnchorEl(null);

        if (value !== null) {
            setSelectedQty(value);
        }
    };


    return (
        <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">

            {/* =========================
                PRODUCT IMAGE
            ========================== */}
            <div className="img w-[15%] rounded-md overflow-hidden">

                <Link to="/" className="group">

                    <img
                        src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                        alt="Product"
                        className="w-full group-hover:scale-105 transition-all"
                    />

                </Link>

            </div>


            {/* =========================
                PRODUCT INFO
            ========================== */}
            <div className="info w-[85%] relative">

                {/* Remove Product */}
                <RiCloseFill
                    className="cursor-pointer link transition-all absolute top-0 right-0 text-[22px]"
                />


                {/* Brand */}
                <span className="text-[11px]">
                    Brand Name
                </span>


                {/* Product Name */}
                <h3 className="text-[13px]">

                    <Link
                        to="/"
                        className="link"
                    >
                        Product Name
                    </Link>

                </h3>


                {/* Rating */}
                <Rating
                    name="product-rating"
                    size="small"
                    value={4}
                    readOnly
                />


                {/* =========================
                    SIZE & QUANTITY
                ========================== */}
                <div className="flex items-center gap-4 mt-1">


                    {/* =========================
                        SIZE DROPDOWN
                    ========================== */}
                    <div className="relative">

                        <span
                            id="size-button"
                            className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-[1px] px-[5px] rounded-md cursor-pointer"
                            onClick={handleClickSize}
                        >
                            Size: {selectedSize}
                            <GoTriangleDown />
                        </span>


                        <Menu
                            id="size-menu"
                            anchorEl={sizeAnchorEl}
                            open={openSize}
                            onClose={() => handleCloseSize(null)}
                            slotProps={{
                                list: {
                                    "aria-labelledby": "size-button",
                                },
                            }}
                        >

                            <MenuItem
                                onClick={() => handleCloseSize("S")}
                            >
                                S
                            </MenuItem>

                            <MenuItem
                                onClick={() => handleCloseSize("M")}
                            >
                                M
                            </MenuItem>

                            <MenuItem
                                onClick={() => handleCloseSize("L")}
                            >
                                L
                            </MenuItem>

                            <MenuItem
                                onClick={() => handleCloseSize("XL")}
                            >
                                XL
                            </MenuItem>

                            <MenuItem
                                onClick={() => handleCloseSize("XXL")}
                            >
                                XXL
                            </MenuItem>

                        </Menu>

                    </div>


                    {/* =========================
                        QUANTITY DROPDOWN
                    ========================== */}
                    <div className="relative">

                        <span
                            id="qty-button"
                            className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-[1px] px-[5px] rounded-md cursor-pointer"
                            onClick={handleClickQty}
                        >
                            Qty: {selectedQty}
                            <GoTriangleDown />
                        </span>


                        <Menu
                            id="qty-menu"
                            anchorEl={qtyAnchorEl}
                            open={openQty}
                            onClose={() => handleCloseQty(null)}
                            slotProps={{
                                list: {
                                    "aria-labelledby": "qty-button",
                                },
                            }}
                        >

                            <MenuItem
                                onClick={() => handleCloseQty(1)}
                            >
                                1
                            </MenuItem>

                            <MenuItem
                                onClick={() => handleCloseQty(2)}
                            >
                                2
                            </MenuItem>

                            <MenuItem
                                onClick={() => handleCloseQty(3)}
                            >
                                3
                            </MenuItem>

                            <MenuItem
                                onClick={() => handleCloseQty(4)}
                            >
                                4
                            </MenuItem>

                            <MenuItem
                                onClick={() => handleCloseQty(5)}
                            >
                                5
                            </MenuItem>
                            


                        </Menu>

                    </div>

                </div>


                {/* =========================
                    PRICE
                ========================== */}
                <div className="flex items-center gap-2 mt-1">

                    <span className="price text-[13px] font-[600]">
                        Rs 399
                    </span>

                    <span className="oldPrice line-through text-gray-500 text-[13px] font-[500]">
                        Rs 899
                    </span>

                    <span className="price text-[#ff5252] text-[13px] font-[600]">
                        55% OFF
                    </span>

                </div>

            </div>

        </div>
    );
};

export default CartItem;