import { Link } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

const MyListItem = () => {
    return (
        <div
            className="
                group
                w-full
                flex
                items-center
                gap-3
                p-3
                sm:p-4
                bg-white
                rounded-lg
                border
                border-gray-100
                hover:border-gray-200
                hover:shadow-sm
                transition-all
                duration-200
            "
        >

            {/* =========================
                PRODUCT IMAGE
            ========================== */}
            <div
                className="
                    w-[65px]
                    h-[65px]
                    sm:w-[80px]
                    sm:h-[80px]
                    md:w-[90px]
                    md:h-[90px]
                    shrink-0
                    rounded-md
                    bg-gray-50
                    overflow-hidden
                "
            >
                <Link to="/" className="block w-full h-full">
                    <img
                        src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                        alt="Product"
                        className="
                            w-full
                            h-full
                            object-contain
                            p-1
                            group-hover:scale-105
                            transition-transform
                            duration-300
                        "
                    />
                </Link>
            </div>


            {/* =========================
                PRODUCT INFORMATION
            ========================== */}
            <div className="flex-1 min-w-0">

                {/* Brand */}
                <span className="block text-[9px] sm:text-[10px] text-gray-500">
                    Brand Name
                </span>

                {/* Product Name */}
                <h3
                    className="
                        text-[11px]
                        sm:text-[13px]
                        md:text-[14px]
                        font-medium
                        text-gray-800
                        truncate
                    "
                >
                    <Link
                        to="/"
                        className="hover:text-[#ff5252] transition-colors"
                    >
                        Product Name
                    </Link>
                </h3>


                {/* Rating */}
                <div className="flex items-center gap-1 mt-0.5">
                    <Rating
                        name="product-rating"
                        size="small"
                        value={4}
                        precision={0.5}
                        readOnly
                    />

                    <span className="text-[9px] sm:text-[10px] text-gray-400">
                        (24)
                    </span>
                </div>


                {/* Price */}
                <div className="flex items-center gap-1.5 sm:gap-2 mt-1 flex-wrap">

                    <span className="text-[12px] sm:text-[14px] font-semibold text-gray-900">
                        ₹399
                    </span>

                    <span className="text-[9px] sm:text-[11px] text-gray-400 line-through">
                        ₹899
                    </span>

                    <span className="text-[9px] sm:text-[11px] font-semibold text-green-600">
                        55% OFF
                    </span>

                </div>

            </div>


            {/* =========================
                ACTIONS
            ========================== */}
            <div
                className="
                    shrink-0
                    flex
                    flex-col
                    items-end
                    justify-center
                    gap-1.5
                "
            >

                {/* Remove */}
                <button
                    type="button"
                    className="
                        flex
                        items-center
                        gap-0.5
                        text-[9px]
                        sm:text-[10px]
                        text-gray-400
                        hover:text-[#ff5252]
                        transition-colors
                    "
                >
                    <RiCloseLine className="text-[15px] sm:text-[17px]" />
                </button>
                {/* Add To Cart */}
                <Button
                    className="
                        btn-org
                        !min-w-[75px]
                        sm:!min-w-[90px]
                        md:!min-w-[105px]
                        !h-[29px]
                        sm:!h-[32px]
                        md:!h-[35px]

                        !px-2
                        sm:!px-3

                        !text-[9px]
                        sm:!text-[10px]
                        md:!text-[11px]

                        !font-semibold
                        !rounded-md
                    "
                >
                    Add to Cart
                </Button>

            </div>

        </div>
    );
};

export default MyListItem;