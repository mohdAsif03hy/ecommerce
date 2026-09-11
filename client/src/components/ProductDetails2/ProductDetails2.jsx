import QtyBox from "../../components/QtyBox/QtyBox";
import { PiShoppingCartLight } from "react-icons/pi";
import { BsSuitHeart } from "react-icons/bs";
import { IoIosGitCompare } from 'react-icons/io';
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useState } from "react";


const ProductDetails2 = () => {
    const [productActioIndex, setProductActionIndex] = useState(null);

    return (
        <>
            <h1 className="text-[22px] font-[600] mb-1 ">
                Chinkari Woven Kurta
            </h1>

            <div className="flex items-center gap-3">
                <span className="text-gray-400 text-[13px]">
                    Brands :
                    <span className="font-[500] text-black opacity-75 ">
                        Brand Name
                    </span>
                </span>

                <Rating name="size-small" size="small" value={4} readOnly />

                <span className="text-[13px] cursor-pointer opacity-50 font-[500]">
                    Review (5)
                </span>
            </div>

            <div className="flex items-center gap-3 mt-2 mb-1">
                <span className="oldPrice line-through text-gray-500 text-[19px] font-[500]">
                    Rs 399
                </span>

                <span className="price text-[#ff5252] text-[19px] font-[600]">
                    Rs 399
                </span>

                <span className="text-[13px]">
                    Available In Stock:
                    <span className="text-green-600 text-[13px] font-bold">
                        147 Items
                    </span>
                </span>
            </div>

            <p className="mt-2 opacity-80 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dicta enim accusantium ex? Temporibus quia id corporis v
                ero cupiditate, error consectetur, vitae magni voluptate
                m praesentium laboriosam aspernatur. Provident dolor minima solut
                a iste aut facere ab commodi nobis eligendi quaerat voluptas
                inventore repellendus, mollitia adipisci.
            </p>

            <div className="flex items-center gap-3">
                <span className="text-[15px]">Size: </span>

                <div className="flex items-center gap-1 actions">
                    <Button
                        className={`!min-w-[35px] !border !border-[rgba(0,0,0,0.1)] !h-[30px] !text-[rgba(0,0,0,0.7)] ${productActioIndex === 0
                            ? "!bg-[#ff5252] !text-white "
                            : " "
                            }`}
                        onClick={() => setProductActionIndex(0)}
                    >
                        S
                    </Button>

                    <Button
                        className={`!min-w-[35px] !border !border-[rgba(0,0,0,0.1)] !h-[30px] !text-[rgba(0,0,0,0.7)] ${productActioIndex === 1
                            ? "!bg-[#ff5252] !text-white "
                            : " "
                            }`}
                        onClick={() => setProductActionIndex(1)}
                    >
                        M
                    </Button>

                    <Button
                        className={`!min-w-[35px] !border !border-[rgba(0,0,0,0.1)] !h-[30px] !text-[rgba(0,0,0,0.7)] ${productActioIndex === 2
                            ? "!bg-[#ff5252] !text-white "
                            : " "
                            }`}
                        onClick={() => setProductActionIndex(2)}
                    >
                        L
                    </Button>

                    <Button
                        className={`!min-w-[35px] !border !border-[rgba(0,0,0,0.1)] !h-[30px] !text-[rgba(0,0,0,0.7)] ${productActioIndex === 3
                            ? "!bg-[#ff5252] !text-white "
                            : " "
                            }`}
                        onClick={() => setProductActionIndex(3)}
                    >
                        XL
                    </Button>
                </div>
            </div>

            <p className="!text-[12px] opacity-75 mt-4">
                Free Shipping (Est. Delivery Time 2-3 Days)
            </p>

            <div className="flex items-center gap-4">
                <div className="qtyBoxWrapper w-[57px]">
                    <QtyBox />
                </div>

                <Button className="btn-org flex gap-2">
                    <PiShoppingCartLight className="text-[18px]" />
                    Add to Cart
                </Button>
            </div>

            <div className="flex items-center gap-4 mt-3">
                <span className="flex items-center text-[14px] gap-2 link cursor-pointer">
                    <BsSuitHeart />
                    Add to Wishlist
                </span>
                <span className="flex items-center text-[14px] gap-2 link cursor-pointer">
                    <IoIosGitCompare />
                    Add to Compare
                </span>
            </div>
        </>
    )
}

export default ProductDetails2
