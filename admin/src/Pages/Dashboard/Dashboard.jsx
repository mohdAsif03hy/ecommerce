import React, { useState } from "react";
import DashboardBox from "../../components/DashboardBox/DashboardBox";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';
import {
    FiPlus,
    FiChevronDown,
    FiChevronUp,
    FiPhone,
    FiMail,
    FiPackage,
} from "react-icons/fi";
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';


import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { MdDeleteOutline, MdEdit, MdVisibility } from "react-icons/md";


import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';




import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip as ChartTooltip,
    XAxis,
    YAxis,
} from "recharts";



const columns = [
    { id: 'product', label: 'PRODUCT', minWidth: 150 },
    { id: 'category', label: 'CATEGORY', minWidth: 100 },
    {
        id: 'subcategory',
        label: 'SUB CATEGORY',
        minWidth: 150,
    },
    {
        id: 'brand',
        label: 'BRAND',
        minWidth: 120,
    },
    {
        id: 'price',
        label: 'PRICE',
        minWidth: 100,
    },
    {
        id: 'sales',
        label: 'SALES',
        minWidth: 100,
    },
    {
        id: 'action',
        label: 'ACTION',
        minWidth: 120,
    },
];






function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];







const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

// ============================================================
// DASHBOARD
// ============================================================

const Dashboard = () => {

    const [openOrder, setOpenOrder] = useState(null);
    const [categoryFiltervalue, setCategoryFiltervalue] = useState('');
   const [chart1Data, setChart1Data] = useState([
    { month: "Jan", Totalsales: 420, Totaluser: 210 },
    { month: "Feb", Totalsales: 350, Totaluser: 175 },
    { month: "Mar", Totalsales: 580, Totaluser: 290 },
    { month: "Apr", Totalsales: 470, Totaluser: 235 },
    { month: "May", Totalsales: 690, Totaluser: 345 },
    { month: "Jun", Totalsales: 620, Totaluser: 310 },
    { month: "Jul", Totalsales: 780, Totaluser: 390 },
    { month: "Aug", Totalsales: 850, Totaluser: 425 },
    { month: "Sep", Totalsales: 730, Totaluser: 365 },
    { month: "Oct", Totalsales: 920, Totaluser: 460 },
    { month: "Nov", Totalsales: 810, Totaluser: 405 },
    { month: "Dec", Totalsales: 1050,Totaluser: 525 },
]);

    const handleChangeCatFilter = (event) => {
        setCategoryFiltervalue(event.target.value);
    };

    // ========================================================
    // OPEN / CLOSE PRODUCT TABLE
    // ========================================================

    const handleOrderProducts = (index) => {
        setOpenOrder(openOrder === index ? null : index);
    };


    // ========================================================
    // ORDERS
    // ========================================================

    const orders = [

        // ====================================================
        // ORDER 1
        // ====================================================

        {
            id: "#ORD-1001",
            paymentId: "pay_123456789",

            name: "Mohd Asif",
            phone: "+91 9876543210",
            email: "asif@gmail.com",

            userId: "64f8a92c...",

            address: "Hyderabad, Telangana, India",
            pincode: "500032",

            total: "₹2,499",

            status: "Pending",

            date: "21 Aug 2026",

            products: [

                {
                    id: "PROD-1001",
                    title: "Premium Wireless Headphones",

                    image:
                        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",

                    quantity: 2,

                    price: "₹1,499",

                    subtotal: "₹2,998",
                },



            ],

            subtotal: "₹8,194",
        },





    ];

    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };










    return (

        <>

            {/* =====================================================
                WELCOME CARD
            ===================================================== */}

            <div
                className="
                    mb-5
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-8
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-6
                    py-4
                    shadow-sm
                "
            >

                <div>

                    <h1
                        className="
                            mb-2
                            text-[32px]
                            font-bold
                            leading-[1.15]
                            tracking-tight
                            text-gray-800
                        "
                    >
                        Good Morning,
                        <br />
                        Cameron 👋
                    </h1>


                    <p className="mb-4 text-[14px] text-gray-500">
                        Here's what's happening with your store today.
                    </p>


                    <Button
                        className="
                            !rounded-lg
                            !bg-[#3872fa]
                            !px-4
                            !py-2.5
                            !text-[13px]
                            !font-semibold
                            !capitalize
                            !text-white
                            hover:!bg-[#2860dc]
                        "
                    >

                        <FiPlus className="mr-2 text-[17px]" />

                        Add Product

                    </Button>

                </div>


                <img
                    src="/shop-illustration.webp"
                    className="w-[220px] object-contain"
                    alt="Shop illustration"
                />

            </div>


            {/* =====================================================
                DASHBOARD BOXES
            ===================================================== */}

            <DashboardBox />


            {/* =====================================================
                RECENT ORDERS
            ===================================================== */}

            <div
                className="
                    my-5
                    overflow-hidden
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    shadow-sm
                "
            >

                {/* =================================================
                    RECENT ORDERS HEADER
                ================================================= */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-200
                        px-6
                        py-4
                    "
                >

                    <div>

                        <h2
                            className="
                                text-[19px]
                                font-bold
                                text-gray-800
                            "
                        >
                            Recent Orders
                        </h2>


                        <p className="mt-0.5 text-[12px] text-gray-400">
                            Manage and monitor your latest customer orders
                        </p>

                    </div>


                    <div
                        className="
                            rounded-full
                            bg-[#3872fa]/10
                            px-3
                            py-1.5
                            text-[12px]
                            font-semibold
                            text-[#3872fa]
                        "
                    >
                        {orders.length} Orders
                    </div>

                </div>


                {/* =================================================
                    OUTER TABLE
                ================================================= */}

                <div className="premium-scroll w-full overflow-x-auto">

                    <table
                        className="
                            w-full
                            min-w-[1550px]
                            table-fixed
                            border-collapse
                        "
                    >

                        {/* =================================================
                            OUTER TABLE HEADER
                        ================================================= */}

                        <thead>

                            <tr
                                className="
                                    border-b
                                    border-gray-200
                                    bg-gray-50
                                "
                            >

                                {/* 1 */}

                                <th
                                    className="
                                        w-[110px]
                                        px-4
                                        py-3
                                        text-left
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    Order ID
                                </th>


                                {/* 2 */}

                                <th
                                    className="
                                        w-[160px]
                                        px-4
                                        py-3
                                        text-left
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    Payment ID
                                </th>


                                {/* 3 */}

                                <th
                                    className="
                                        w-[120px]
                                        px-4
                                        py-3
                                        text-center
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    Products
                                </th>


                                {/* 4 */}

                                <th
                                    className="
                                        w-[155px]
                                        px-4
                                        py-3
                                        text-left
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    Name
                                </th>


                                {/* 5 */}

                                <th
                                    className="
                                        w-[145px]
                                        px-4
                                        py-3
                                        text-left
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    Phone
                                </th>


                                {/* 6 */}

                                <th
                                    className="
                                        w-[195px]
                                        px-4
                                        py-3
                                        text-left
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    Email
                                </th>


                                {/* 7 */}

                                <th
                                    className="
                                        w-[125px]
                                        px-4
                                        py-3
                                        text-left
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    User ID
                                </th>


                                {/* 8 */}

                                <th
                                    className="
                                        w-[215px]
                                        px-4
                                        py-3
                                        text-left
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    Address
                                </th>


                                {/* 9 */}

                                <th
                                    className="
                                        w-[90px]
                                        px-4
                                        py-3
                                        text-center
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    Pincode
                                </th>


                                {/* 10 */}

                                <th
                                    className="
                                        w-[120px]
                                        px-4
                                        py-3
                                        text-right
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    Total Amount
                                </th>


                                {/* 11 */}

                                <th
                                    className="
                                        w-[120px]
                                        px-4
                                        py-3
                                        text-center
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    Order Status
                                </th>


                                {/* 12 */}

                                <th
                                    className="
                                        w-[110px]
                                        px-4
                                        py-3
                                        text-center
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    Date
                                </th>

                            </tr>

                        </thead>


                        {/* =================================================
                            OUTER TABLE BODY
                        ================================================= */}

                        <tbody>

                            {orders.map((order, index) => (

                                <React.Fragment key={order.id}>

                                    {/* =================================================
                                        ORDER ROW
                                    ================================================= */}

                                    <tr
                                        className="
                                            border-b
                                            border-gray-100
                                            transition-all
                                            duration-200
                                            hover:bg-[#3872fa]/[0.025]
                                        "
                                    >

                                        {/* 1 ORDER ID */}

                                        <td className="px-4 py-4 align-middle">

                                            <span
                                                className="
                                                    inline-flex
                                                    rounded-md
                                                    bg-gray-100
                                                    px-2
                                                    py-1
                                                    font-mono
                                                    text-[11px]
                                                    font-semibold
                                                    text-gray-700
                                                "
                                            >
                                                {order.id}
                                            </span>

                                        </td>


                                        {/* 2 PAYMENT ID */}

                                        <td className="px-4 py-4 align-middle">

                                            <span
                                                className="
                                                    block
                                                    truncate
                                                    font-mono
                                                    text-[10px]
                                                    text-gray-500
                                                "
                                            >
                                                {order.paymentId}
                                            </span>

                                        </td>


                                        {/* 3 PRODUCTS */}

                                        <td className="px-4 py-4 text-center align-middle">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleOrderProducts(index)
                                                }
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-1.5
                                                    rounded-lg
                                                    bg-[#3872fa]/10
                                                    px-3
                                                    py-2
                                                    text-[11px]
                                                    font-bold
                                                    text-[#3872fa]
                                                    transition-all
                                                    duration-200
                                                    hover:bg-[#3872fa]
                                                    hover:text-white
                                                "
                                            >

                                                <FiPackage />

                                                {openOrder === index ? (
                                                    <>
                                                        Hide
                                                        <FiChevronUp />
                                                    </>
                                                ) : (
                                                    <>
                                                        View
                                                        <FiChevronDown />
                                                    </>
                                                )}

                                            </button>

                                        </td>


                                        {/* 4 NAME */}

                                        <td className="px-4 py-4 align-middle">

                                            <div className="flex items-center gap-2">

                                                <div
                                                    className="
                                                        flex
                                                        h-8
                                                        w-8
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        bg-[#3872fa]/10
                                                        text-[10px]
                                                        font-bold
                                                        text-[#3872fa]
                                                    "
                                                >
                                                    {order.name
                                                        .split(" ")
                                                        .map(
                                                            (word) =>
                                                                word[0]
                                                        )
                                                        .join("")
                                                        .slice(0, 2)}
                                                </div>


                                                <span
                                                    className="
                                                        truncate
                                                        text-[12px]
                                                        font-semibold
                                                        text-gray-800
                                                    "
                                                >
                                                    {order.name}
                                                </span>

                                            </div>

                                        </td>


                                        {/* 5 PHONE */}

                                        <td className="px-4 py-4 align-middle">

                                            <div className="flex items-center gap-2">

                                                <FiPhone
                                                    className="
                                                        shrink-0
                                                        text-[13px]
                                                        text-gray-400
                                                    "
                                                />

                                                <span
                                                    className="
                                                        whitespace-nowrap
                                                        text-[11px]
                                                        text-gray-600
                                                    "
                                                >
                                                    {order.phone}
                                                </span>

                                            </div>

                                        </td>


                                        {/* 6 EMAIL */}

                                        <td className="px-4 py-4 align-middle">

                                            <div className="flex min-w-0 items-center gap-2">

                                                <FiMail
                                                    className="
                                                        shrink-0
                                                        text-[13px]
                                                        text-gray-400
                                                    "
                                                />

                                                <span
                                                    className="
                                                        truncate
                                                        text-[11px]
                                                        text-gray-600
                                                    "
                                                >
                                                    {order.email}
                                                </span>

                                            </div>

                                        </td>


                                        {/* 7 USER ID */}

                                        <td className="px-4 py-4 align-middle">

                                            <span
                                                className="
                                                    font-mono
                                                    text-[10px]
                                                    text-gray-500
                                                "
                                            >
                                                {order.userId}
                                            </span>

                                        </td>


                                        {/* 8 ADDRESS */}

                                        <td className="px-4 py-4 align-middle">

                                            <div className="flex items-start gap-2">

                                                <IoLocationOutline
                                                    className="
                                                        mt-0.5
                                                        shrink-0
                                                        text-[15px]
                                                        text-gray-400
                                                    "
                                                />

                                                <span
                                                    className="
                                                        line-clamp-2
                                                        text-[11px]
                                                        leading-5
                                                        text-gray-600
                                                    "
                                                >
                                                    {order.address}
                                                </span>

                                            </div>

                                        </td>


                                        {/* 9 PINCODE */}

                                        <td className="px-4 py-4 text-center align-middle">

                                            <span
                                                className="
                                                    rounded-md
                                                    bg-gray-100
                                                    px-2
                                                    py-1.5
                                                    font-mono
                                                    text-[10px]
                                                    font-semibold
                                                    text-gray-700
                                                "
                                            >
                                                {order.pincode}
                                            </span>

                                        </td>


                                        {/* 10 TOTAL */}

                                        <td className="px-4 py-4 text-right align-middle">

                                            <span
                                                className="
                                                    text-[13px]
                                                    font-bold
                                                    text-gray-800
                                                "
                                            >
                                                {order.total}
                                            </span>

                                        </td>


                                        {/* 11 STATUS */}

                                        <td className="px-4 py-4 text-center align-middle">

                                            <StatusBadge
                                                status={order.status}
                                            />

                                        </td>


                                        {/* 12 DATE */}

                                        <td className="px-4 py-4 text-center align-middle">

                                            <span
                                                className="
                                                    whitespace-nowrap
                                                    text-[11px]
                                                    font-medium
                                                    text-gray-500
                                                "
                                            >
                                                {order.date}
                                            </span>

                                        </td>

                                    </tr>


                                    {/* =================================================
                                        INNER TABLE
                                    ================================================= */}

                                    {openOrder === index && (

                                        <tr>

                                            <td
                                                colSpan="12"
                                                className="
                                                    bg-[#f7f9fd]
                                                    p-3
                                                "
                                            >

                                                <div
                                                    className="
                                                        overflow-hidden
                                                        rounded-xl
                                                        border
                                                        border-[#dce5f7]
                                                        bg-white
                                                        shadow-[0_3px_15px_rgba(56,114,250,0.06)]
                                                    "
                                                >

                                                    {/* =============================================
                                                        INNER HEADER
                                                    ============================================= */}

                                                    <div
                                                        className="
                                                            flex
                                                            items-center
                                                            justify-between
                                                            border-b
                                                            border-[#e5ebf5]
                                                            bg-[#f9fbff]
                                                            px-4
                                                            py-3
                                                        "
                                                    >

                                                        <div className="flex items-center gap-2.5">

                                                            <div
                                                                className="
                                                                    flex
                                                                    h-9
                                                                    w-9
                                                                    items-center
                                                                    justify-center
                                                                    rounded-lg
                                                                    bg-[#3872fa]
                                                                    text-white
                                                                "
                                                            >
                                                                <FiPackage />
                                                            </div>


                                                            <div>

                                                                <h3
                                                                    className="
                                                                        text-[13px]
                                                                        font-bold
                                                                        text-gray-800
                                                                    "
                                                                >
                                                                    Order Products
                                                                </h3>


                                                                <p
                                                                    className="
                                                                        text-[9px]
                                                                        text-gray-400
                                                                    "
                                                                >
                                                                    {order.id}
                                                                    {" • "}
                                                                    {order.products.length}
                                                                    {" products"}
                                                                </p>

                                                            </div>

                                                        </div>


                                                        <div
                                                            className="
                                                                rounded-lg
                                                                bg-[#3872fa]/10
                                                                px-3
                                                                py-1.5
                                                            "
                                                        >

                                                            <span
                                                                className="
                                                                    mr-2
                                                                    text-[9px]
                                                                    text-gray-400
                                                                "
                                                            >
                                                                Subtotal
                                                            </span>


                                                            <span
                                                                className="
                                                                    text-[13px]
                                                                    font-bold
                                                                    text-[#3872fa]
                                                                "
                                                            >
                                                                {order.subtotal}
                                                            </span>

                                                        </div>

                                                    </div>


                                                    {/* =============================================
                                                        INNER TABLE
                                                    ============================================= */}

                                                    <div
                                                        className="
                                                            product-scroll
                                                            max-h-[260px]
                                                            overflow-auto
                                                        "
                                                    >

                                                        <table
                                                            className="
                                                                w-full
                                                                min-w-[720px]
                                                                border-collapse
                                                            "
                                                        >

                                                            {/* =====================================
                                                                INNER HEADER
                                                            ===================================== */}

                                                            <thead
                                                                className="
                                                                    sticky
                                                                    top-0
                                                                    z-20
                                                                "
                                                            >

                                                                <tr
                                                                    className="
                                                                        border-b
                                                                        border-[#e5ebf5]
                                                                        bg-white
                                                                    "
                                                                >

                                                                    {/* 1 PRODUCT ID */}

                                                                    <th
                                                                        className="
                                                                            w-[130px]
                                                                            px-4
                                                                            py-3
                                                                            text-left
                                                                            text-[10px]
                                                                            font-bold
                                                                            uppercase
                                                                            tracking-wider
                                                                            text-gray-400
                                                                        "
                                                                    >
                                                                        Product ID
                                                                    </th>


                                                                    {/* 2 PRODUCT TITLE */}

                                                                    <th
                                                                        className="
                                                                            w-[220px]
                                                                            px-4
                                                                            py-3
                                                                            text-left
                                                                            text-[10px]
                                                                            font-bold
                                                                            uppercase
                                                                            tracking-wider
                                                                            text-gray-400
                                                                        "
                                                                    >
                                                                        Product Title
                                                                    </th>


                                                                    {/* 3 IMAGE */}

                                                                    <th
                                                                        className="
                                                                            w-[85px]
                                                                            px-4
                                                                            py-3
                                                                            text-center
                                                                            text-[10px]
                                                                            font-bold
                                                                            uppercase
                                                                            tracking-wider
                                                                            text-gray-400
                                                                        "
                                                                    >
                                                                        Image
                                                                    </th>


                                                                    {/* 4 QUANTITY */}

                                                                    <th
                                                                        className="
                                                                            w-[100px]
                                                                            px-4
                                                                            py-3
                                                                            text-center
                                                                            text-[10px]
                                                                            font-bold
                                                                            uppercase
                                                                            tracking-wider
                                                                            text-gray-400
                                                                        "
                                                                    >
                                                                        Quantity
                                                                    </th>


                                                                    {/* 5 PRICE */}

                                                                    <th
                                                                        className="
                                                                            w-[120px]
                                                                            px-4
                                                                            py-3
                                                                            text-right
                                                                            text-[10px]
                                                                            font-bold
                                                                            uppercase
                                                                            tracking-wider
                                                                            text-gray-400
                                                                        "
                                                                    >
                                                                        Price
                                                                    </th>


                                                                    {/* 6 SUBTOTAL */}

                                                                    <th
                                                                        className="
                                                                            w-[130px]
                                                                            px-4
                                                                            py-3
                                                                            text-right
                                                                            text-[10px]
                                                                            font-bold
                                                                            uppercase
                                                                            tracking-wider
                                                                            text-gray-400
                                                                        "
                                                                    >
                                                                        Subtotal
                                                                    </th>

                                                                </tr>

                                                            </thead>


                                                            {/* =====================================
                                                                INNER BODY
                                                            ===================================== */}

                                                            <tbody>

                                                                {order.products.map(
                                                                    (
                                                                        product,
                                                                        productIndex
                                                                    ) => (

                                                                        <tr
                                                                            key={
                                                                                product.id
                                                                            }
                                                                            className="
                                                                                group
                                                                                border-b
                                                                                border-gray-100
                                                                                last:border-0
                                                                                transition-all
                                                                                duration-200
                                                                                hover:bg-[#3872fa]/[0.025]
                                                                            "
                                                                        >

                                                                            {/* =================================
                                                                                1 PRODUCT ID
                                                                            ================================= */}

                                                                            <td
                                                                                className="
                                                                                    px-4
                                                                                    py-3.5
                                                                                    align-middle
                                                                                "
                                                                            >

                                                                                <div
                                                                                    className="
                                                                                        flex
                                                                                        items-center
                                                                                        gap-2
                                                                                    "
                                                                                >

                                                                                    <span
                                                                                        className="
                                                                                            flex
                                                                                            h-6
                                                                                            w-6
                                                                                            shrink-0
                                                                                            items-center
                                                                                            justify-center
                                                                                            rounded-md
                                                                                            bg-[#3872fa]/10
                                                                                            text-[9px]
                                                                                            font-bold
                                                                                            text-[#3872fa]
                                                                                        "
                                                                                    >
                                                                                        {String(
                                                                                            productIndex +
                                                                                            1
                                                                                        ).padStart(
                                                                                            2,
                                                                                            "0"
                                                                                        )}
                                                                                    </span>


                                                                                    <span
                                                                                        className="
                                                                                            font-mono
                                                                                            text-[10px]
                                                                                            text-gray-500
                                                                                        "
                                                                                    >
                                                                                        {
                                                                                            product.id
                                                                                        }
                                                                                    </span>

                                                                                </div>

                                                                            </td>


                                                                            {/* =================================
                                                                                2 PRODUCT TITLE
                                                                            ================================= */}

                                                                            <td
                                                                                className="
                                                                                    px-4
                                                                                    py-3.5
                                                                                    align-middle
                                                                                "
                                                                            >

                                                                                <div className="min-w-0">

                                                                                    <p
                                                                                        className="
                                                                                            truncate
                                                                                            text-[12px]
                                                                                            font-bold
                                                                                            text-gray-800
                                                                                        "
                                                                                    >
                                                                                        {
                                                                                            product.title
                                                                                        }
                                                                                    </p>


                                                                                    <p
                                                                                        className="
                                                                                            mt-0.5
                                                                                            text-[9px]
                                                                                            text-gray-400
                                                                                        "
                                                                                    >
                                                                                        Product
                                                                                        #
                                                                                        {productIndex +
                                                                                            1}
                                                                                    </p>

                                                                                </div>

                                                                            </td>


                                                                            {/* =================================
                                                                                3 IMAGE
                                                                            ================================= */}

                                                                            <td
                                                                                className="
                                                                                    px-4
                                                                                    py-3.5
                                                                                    text-center
                                                                                    align-middle
                                                                                "
                                                                            >

                                                                                <div
                                                                                    className="
                                                                                        mx-auto
                                                                                        flex
                                                                                        h-10
                                                                                        w-10
                                                                                        items-center
                                                                                        justify-center
                                                                                        overflow-hidden
                                                                                        rounded-lg
                                                                                        border
                                                                                        border-gray-200
                                                                                        bg-gray-50
                                                                                    "
                                                                                >

                                                                                    <img
                                                                                        src={
                                                                                            product.image
                                                                                        }
                                                                                        alt={
                                                                                            product.title
                                                                                        }
                                                                                        className="
                                                                                            h-full
                                                                                            w-full
                                                                                            object-cover
                                                                                            transition-transform
                                                                                            duration-300
                                                                                            group-hover:scale-110
                                                                                        "
                                                                                    />

                                                                                </div>

                                                                            </td>


                                                                            {/* =================================
                                                                                4 QUANTITY
                                                                            ================================= */}

                                                                            <td
                                                                                className="
                                                                                    px-4
                                                                                    py-3.5
                                                                                    text-center
                                                                                    align-middle
                                                                                "
                                                                            >

                                                                                <span
                                                                                    className="
                                                                                        inline-flex
                                                                                        min-w-[38px]
                                                                                        items-center
                                                                                        justify-center
                                                                                        rounded-lg
                                                                                        border
                                                                                        border-[#dce6fb]
                                                                                        bg-[#f5f8ff]
                                                                                        px-2.5
                                                                                        py-1.5
                                                                                        text-[11px]
                                                                                        font-bold
                                                                                        text-[#3872fa]
                                                                                    "
                                                                                >
                                                                                    {
                                                                                        product.quantity
                                                                                    }
                                                                                </span>

                                                                            </td>


                                                                            {/* =================================
                                                                                5 PRICE
                                                                            ================================= */}

                                                                            <td
                                                                                className="
                                                                                    px-4
                                                                                    py-3.5
                                                                                    text-right
                                                                                    align-middle
                                                                                "
                                                                            >

                                                                                <span
                                                                                    className="
                                                                                        text-[12px]
                                                                                        font-medium
                                                                                        text-gray-600
                                                                                    "
                                                                                >
                                                                                    {
                                                                                        product.price
                                                                                    }
                                                                                </span>


                                                                                <p
                                                                                    className="
                                                                                        mt-0.5
                                                                                        text-[9px]
                                                                                        text-gray-400
                                                                                    "
                                                                                >
                                                                                    per item
                                                                                </p>

                                                                            </td>


                                                                            {/* =================================
                                                                                6 SUBTOTAL
                                                                            ================================= */}

                                                                            <td
                                                                                className="
                                                                                    px-4
                                                                                    py-3.5
                                                                                    text-right
                                                                                    align-middle
                                                                                "
                                                                            >

                                                                                <span
                                                                                    className="
                                                                                        text-[12px]
                                                                                        font-bold
                                                                                        text-gray-800
                                                                                    "
                                                                                >
                                                                                    {
                                                                                        product.subtotal
                                                                                    }
                                                                                </span>


                                                                                <p
                                                                                    className="
                                                                                        mt-0.5
                                                                                        text-[9px]
                                                                                        text-gray-400
                                                                                    "
                                                                                >
                                                                                    line total
                                                                                </p>

                                                                            </td>

                                                                        </tr>

                                                                    )
                                                                )}

                                                            </tbody>

                                                        </table>

                                                    </div>


                                                    {/* =============================================
                                                        INNER FOOTER
                                                    ============================================= */}

                                                    <div
                                                        className="
                                                            flex
                                                            items-center
                                                            justify-between
                                                            border-t
                                                            border-[#e5ebf5]
                                                            bg-gray-50
                                                            px-4
                                                            py-2.5
                                                        "
                                                    >

                                                        <div className="flex items-center gap-2">

                                                            <span
                                                                className="
                                                                    h-1.5
                                                                    w-1.5
                                                                    rounded-full
                                                                    bg-[#3872fa]
                                                                "
                                                            />

                                                            <span
                                                                className="
                                                                    text-[10px]
                                                                    text-gray-500
                                                                "
                                                            >
                                                                {order.products.length}
                                                                {" products"}
                                                            </span>

                                                        </div>


                                                        <div className="flex items-center gap-2">

                                                            <span
                                                                className="
                                                                    text-[10px]
                                                                    text-gray-400
                                                                "
                                                            >
                                                                Subtotal:
                                                            </span>


                                                            <span
                                                                className="
                                                                    text-[14px]
                                                                    font-bold
                                                                    text-[#3872fa]
                                                                "
                                                            >
                                                                {order.subtotal}
                                                            </span>

                                                        </div>

                                                    </div>

                                                </div>

                                            </td>

                                        </tr>

                                    )}

                                </React.Fragment>

                            ))}

                        </tbody>

                    </table>

                </div>
                {/* order */}


            </div>

            <div className="w-full rounded-md flex flex-col items-end bg-white overflow-hidden shadow-sm border-gray-200">

                <div className="w-full  ">
                    <h2 className="text-[18px] pl-4 py-4 font-[500]">Product</h2>
                    <div className="flex items-center w-full px-5 justify-between pr-2">
                        <div className="col w-[20%]">
                            <h4 className="font-[600] text-[12px] mb-2">Category By</h4>
                            <Select
                                className="w-full"
                                size="small"
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={categoryFiltervalue}
                                onChange={handleChangeCatFilter}
                                label="Category By"
                            >
                                <MenuItem value="">
                                    <em>all</em>
                                </MenuItem>
                                <MenuItem value={10}>Men</MenuItem>
                                <MenuItem value={20}>Women</MenuItem>
                                <MenuItem value={30}>Kids</MenuItem>
                                <MenuItem value={30}>Kids</MenuItem>
                                <MenuItem value={30}>Kids</MenuItem>
                                <MenuItem value={30}>Kids</MenuItem>

                            </Select>

                        </div>


                        <div className="col w-[30%] ml-auto flex items-center gap-3 ">
                            <Button className="btn-sm !bg-green-500 !text-white">Export</Button>
                            <Button className="btn-sm !bg-blue-500 text-white">add Product</Button>
                        </div>
                    </div>

                    <table className="w-full table-fixed border-collapse">

                        {/* Header */}
                        <thead>
                            <tr className="border-b border-gray-200 bg-gray-50">

                                {/* Checkbox */}
                                <th className="w-[5%] px-4 py-2.5 text-left align-middle">
                                    <Checkbox {...label} size="small" />
                                </th>

                                {/* Product */}
                                <th className="w-[19%] px-4 py-2.5 text-left align-middle">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                        Product
                                    </span>
                                </th>

                                {/* Category */}
                                <th className="w-[13%] px-4 py-2.5 text-left align-middle">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                        Category
                                    </span>
                                </th>

                                {/* Sub Category */}
                                <th className="w-[14%] px-4 py-2.5 text-left align-middle">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                        Sub Category
                                    </span>
                                </th>

                                {/* Brand */}
                                <th className="w-[13%] px-4 py-2.5 text-left align-middle">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                        Brand
                                    </span>
                                </th>

                                {/* Price */}
                                <th className="w-[11%] px-4 py-2.5 text-left align-middle">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                        Price
                                    </span>
                                </th>
                                <th className="w-[11%] px-4 py-2.5 text-left align-middle">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                        Sales
                                    </span>
                                </th>

                                {/* Rating */}
                                <th className="w-[12%] px-4 py-2.5 text-left align-middle">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                        Rating
                                    </span>
                                </th>

                                {/* Action */}
                                <th className="w-[13%] px-4 py-2.5 text-right align-middle">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                        Action
                                    </span>
                                </th>

                            </tr>
                        </thead>

                        <tbody>

                            {/* Product 1 */}
                            <tr className="h-[64px] border-b border-gray-100 transition-colors hover:bg-gray-50">

                                {/* Checkbox */}
                                <td className="px-4 py-2 align-middle">
                                    <Checkbox {...label} size="small" />
                                </td>

                                {/* Product */}
                                <td className="px-4 py-2 align-middle">
                                    <div className="flex items-center gap-3">

                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                                            <img
                                                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=100"
                                                className="h-full w-full object-cover"
                                                alt="Atomic Habits"
                                            />
                                        </div>

                                        <div className="min-w-0 leading-tight">
                                            <Link to="/products/2323">
                                                <h3 className="truncate text-[11px] font-semibold text-gray-800 hover:text-blue-600">
                                                    Atomic Habits
                                                </h3>
                                            </Link>

                                            <span className="mt-1 block text-[9px] text-gray-400">
                                                Paperback
                                            </span>
                                        </div>

                                    </div>
                                </td>

                                {/* Category */}
                                <td className="px-4 py-2 align-middle">
                                    <span className="inline-flex rounded-md bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-600">
                                        Books
                                    </span>
                                </td>

                                {/* Sub Category */}
                                <td className="px-4 py-2 align-middle">
                                    <span className="text-[10px] text-gray-500">
                                        Self Help
                                    </span>
                                </td>

                                {/* Brand */}
                                <td className="px-4 py-2 align-middle">
                                    <span className="text-[10px] font-medium text-gray-600">
                                        Penguin
                                    </span>
                                </td>

                                {/* Price */}
                                <td className="px-4 py-2 align-middle">
                                    <span className="text-[11px] font-semibold text-gray-800">
                                        ₹499
                                    </span>
                                </td>
                                <td className="px-4 py-2 align-middle">
                                    <span className="text-[11px]  font-semibold text-gray-800">
                                        234<span className="text-[9px] opacity-80"> sales</span>
                                        <ProgressBar value={70} type="success" />
                                    </span>
                                </td>

                                {/* Rating */}
                                <td className="px-4 py-2 align-middle">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] font-semibold text-gray-700">
                                            4.8
                                        </span>

                                        <span className="text-[10px] text-yellow-500">
                                            ★
                                        </span>
                                    </div>
                                </td>

                                {/* Action */}
                                {/* Action */}
                                {/* Action */}
                                <td className="px-4 py-2 align-middle">
                                    <div className="flex items-center justify-end gap-1">

                                        {/* Edit */}
                                        <Tooltip describeChild title="Edit" placement="top">
                                            <Button
                                                variant="text"
                                                size="small"
                                                sx={{
                                                    minWidth: 0,
                                                    width: 30,
                                                    height: 30,
                                                    padding: 0,
                                                    borderRadius: "6px",
                                                    color: "#6b7280",
                                                    "&:hover": {
                                                        backgroundColor: "#eff6ff",
                                                        color: "#2563eb",
                                                    },
                                                }}
                                            >
                                                <MdEdit size={16} />
                                            </Button>
                                        </Tooltip>

                                        {/* View */}
                                        <Tooltip describeChild title="View" placement="top">
                                            <Button
                                                variant="text"
                                                size="small"
                                                sx={{
                                                    minWidth: 0,
                                                    width: 30,
                                                    height: 30,
                                                    padding: 0,
                                                    borderRadius: "6px",
                                                    color: "#6b7280",
                                                    "&:hover": {
                                                        backgroundColor: "#f3f4f6",
                                                        color: "#374151",
                                                    },
                                                }}
                                            >
                                                <MdVisibility size={16} />
                                            </Button>
                                        </Tooltip>

                                        {/* Delete */}
                                        <Tooltip describeChild title="Delete" placement="top">
                                            <Button
                                                variant="text"
                                                size="small"
                                                sx={{
                                                    minWidth: 0,
                                                    width: 30,
                                                    height: 30,
                                                    padding: 0,
                                                    borderRadius: "6px",
                                                    color: "#6b7280",
                                                    "&:hover": {
                                                        backgroundColor: "#fef2f2",
                                                        color: "#dc2626",
                                                    },
                                                }}
                                            >
                                                <MdDeleteOutline size={17} />
                                            </Button>
                                        </Tooltip>

                                    </div>
                                </td>

                            </tr>


                        </tbody>
                        <tbody>

                            {/* Product 1 */}
                            <tr className="h-[64px] border-b border-gray-100 transition-colors hover:bg-gray-50">

                                {/* Checkbox */}
                                <td className="px-4 py-2 align-middle">
                                    <Checkbox {...label} size="small" />
                                </td>

                                {/* Product */}
                                <td className="px-4 py-2 align-middle">
                                    <div className="flex items-center gap-3">

                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                                            <img
                                                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=100"
                                                className="h-full w-full object-cover"
                                                alt="Atomic Habits"
                                            />
                                        </div>

                                        <div className="min-w-0 leading-tight">
                                            <Link to="/products/2323">
                                                <h3 className="truncate text-[11px] font-semibold text-gray-800 hover:text-blue-600">
                                                    Atomic Habits
                                                </h3>
                                            </Link>

                                            <span className="mt-1 block text-[9px] text-gray-400">
                                                Paperback
                                            </span>
                                        </div>

                                    </div>
                                </td>

                                {/* Category */}
                                <td className="px-4 py-2 align-middle">
                                    <span className="inline-flex rounded-md bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-600">
                                        Books
                                    </span>
                                </td>

                                {/* Sub Category */}
                                <td className="px-4 py-2 align-middle">
                                    <span className="text-[10px] text-gray-500">
                                        Self Help
                                    </span>
                                </td>

                                {/* Brand */}
                                <td className="px-4 py-2 align-middle">
                                    <span className="text-[10px] font-medium text-gray-600">
                                        Penguin
                                    </span>
                                </td>

                                {/* Price */}
                                <td className="px-4 py-2 align-middle">
                                    <span className="text-[11px] font-semibold text-gray-800">
                                        ₹499
                                    </span>
                                </td>
                                <td className="px-4 py-2 align-middle">
                                    <span className="text-[11px]  font-semibold text-gray-800">
                                        234<span className="text-[9px] opacity-80"> sales</span>
                                        <ProgressBar value={70} type="success" />
                                    </span>
                                </td>

                                {/* Rating */}
                                <td className="px-4 py-2 align-middle">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] font-semibold text-gray-700">
                                            4.8
                                        </span>

                                        <span className="text-[10px] text-yellow-500">
                                            ★
                                        </span>
                                    </div>
                                </td>

                                {/* Action */}
                                {/* Action */}
                                {/* Action */}
                                <td className="px-4 py-2 align-middle">
                                    <div className="flex items-center justify-end gap-1">

                                        {/* Edit */}
                                        <Tooltip describeChild title="Edit" placement="top">
                                            <Button
                                                variant="text"
                                                size="small"
                                                sx={{
                                                    minWidth: 0,
                                                    width: 30,
                                                    height: 30,
                                                    padding: 0,
                                                    borderRadius: "6px",
                                                    color: "#6b7280",
                                                    "&:hover": {
                                                        backgroundColor: "#eff6ff",
                                                        color: "#2563eb",
                                                    },
                                                }}
                                            >
                                                <MdEdit size={16} />
                                            </Button>
                                        </Tooltip>

                                        {/* View */}
                                        <Tooltip describeChild title="View" placement="top">
                                            <Button
                                                variant="text"
                                                size="small"
                                                sx={{
                                                    minWidth: 0,
                                                    width: 30,
                                                    height: 30,
                                                    padding: 0,
                                                    borderRadius: "6px",
                                                    color: "#6b7280",
                                                    "&:hover": {
                                                        backgroundColor: "#f3f4f6",
                                                        color: "#374151",
                                                    },
                                                }}
                                            >
                                                <MdVisibility size={16} />
                                            </Button>
                                        </Tooltip>

                                        {/* Delete */}
                                        <Tooltip describeChild title="Delete" placement="top">
                                            <Button
                                                variant="text"
                                                size="small"
                                                sx={{
                                                    minWidth: 0,
                                                    width: 30,
                                                    height: 30,
                                                    padding: 0,
                                                    borderRadius: "6px",
                                                    color: "#6b7280",
                                                    "&:hover": {
                                                        backgroundColor: "#fef2f2",
                                                        color: "#dc2626",
                                                    },
                                                }}
                                            >
                                                <MdDeleteOutline size={17} />
                                            </Button>
                                        </Tooltip>

                                    </div>
                                </td>

                            </tr>


                        </tbody>
                    </table>

                </div>
                <div className="flex  items-center justify-nd mt-4 mb-4">
                    <Pagination count={10} color="primary" />
                </div>

            </div>







            <div className="w-full mt-4 rounded-md flex flex-col items-end bg-white overflow-hidden shadow-sm border-gray-200">
                <div className="w-full  ">
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead className="">

                                <TableRow>
                                    <TableCell>
                                        <Checkbox {...label} size="small" />
                                    </TableCell>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <Checkbox {...label} size="small" />
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex items-center gap-3">

                                            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                                                <img
                                                    src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=100"
                                                    className="h-full w-full object-cover"
                                                    alt="Atomic Habits"
                                                />
                                            </div>

                                            <div className="min-w-0 leading-tight">
                                                <Link to="/products/2323">
                                                    <h3 className="truncate text-[11px] font-semibold text-gray-800 hover:text-blue-600">
                                                        Atomic Habits
                                                    </h3>
                                                </Link>

                                                <span className="mt-1 block text-[9px] text-gray-400">
                                                    Paperback
                                                </span>
                                            </div>

                                        </div>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="inline-flex rounded-md bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-600">
                                            Books
                                        </span>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="text-[10px] text-gray-500">
                                            Self Help
                                        </span>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="text-[10px] font-medium text-gray-600">
                                            Penguin
                                        </span>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="text-[11px] font-semibold text-gray-800">
                                            ₹499
                                        </span>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <span className="text-[11px]  font-semibold text-gray-800">
                                            234<span className="text-[9px] opacity-80"> sales</span>
                                            <ProgressBar value={70} type="success" />
                                        </span>
                                    </TableCell>
                                    <TableCell style={{ minWidth: columns.minWidth }}>
                                        <div className="flex items-center justify-end gap-1">

                                            {/* Edit */}
                                            <Tooltip describeChild title="Edit" placement="top">
                                                <Button
                                                    variant="text"
                                                    size="small"
                                                    sx={{
                                                        minWidth: 0,
                                                        width: 30,
                                                        height: 30,
                                                        padding: 0,
                                                        borderRadius: "6px",
                                                        color: "#6b7280",
                                                        "&:hover": {
                                                            backgroundColor: "#eff6ff",
                                                            color: "#2563eb",
                                                        },
                                                    }}
                                                >
                                                    <MdEdit size={16} />
                                                </Button>
                                            </Tooltip>

                                            {/* View */}
                                            <Tooltip describeChild title="View" placement="top">
                                                <Button
                                                    variant="text"
                                                    size="small"
                                                    sx={{
                                                        minWidth: 0,
                                                        width: 30,
                                                        height: 30,
                                                        padding: 0,
                                                        borderRadius: "6px",
                                                        color: "#6b7280",
                                                        "&:hover": {
                                                            backgroundColor: "#f3f4f6",
                                                            color: "#374151",
                                                        },
                                                    }}
                                                >
                                                    <MdVisibility size={16} />
                                                </Button>
                                            </Tooltip>

                                            {/* Delete */}
                                            <Tooltip describeChild title="Delete" placement="top">
                                                <Button
                                                    variant="text"
                                                    size="small"
                                                    sx={{
                                                        minWidth: 0,
                                                        width: 30,
                                                        height: 30,
                                                        padding: 0,
                                                        borderRadius: "6px",
                                                        color: "#6b7280",
                                                        "&:hover": {
                                                            backgroundColor: "#fef2f2",
                                                            color: "#dc2626",
                                                        },
                                                    }}
                                                >
                                                    <MdDeleteOutline size={17} />
                                                </Button>
                                            </Tooltip>

                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />

                </div>
                <div className="flex   items-center justify-nd mt-4 mb-4">
                    <Pagination count={10} color="primary" />
                </div>

            </div>


            <div className="card my-4 p-6 shadow-md sm:rounded-lg bg-white">
                <div className="flex items-center gap-5 px-5 py-5">
                    <h2 className="text-[18px] font-[600]">Total Users & Total Sales</h2>

                </div>
                <div className="flex items-center justify-between px-5 py-5 pt-0 ">
                    <span className="flex items-center gap-1 text-[13px] pt-1 ">
                        <span className="block w-[8px] h-[8px] ml-1 bg-green-600  rounded-full "></span>Total Users</span>
                    <span className="flex items-center gap-1 text-[13px] pt-1 ">
                        <span className="block w-[8px] h-[8px] ml-1 bg-[#2860DC] rounded-full "></span>Total Sales</span>

                </div>
                <ResponsiveContainer width="900" height={500}>
                    <LineChart data={chart1Data}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" tick={{
                            fontSize: 11,
                        }}
                        />
                        <YAxis tick={{
                            fontSize: 11,
                        }}
                        />

                        <ChartTooltip />
                        <Legend />

                        <Line
                            type="monotone"
                            dataKey="Totalsales"
                            stroke="#8884d8"
                            strokeWidth={3}
                        />

                        <Line
                            type="monotone"
                            dataKey="Totaluser"
                            stroke="#82ca9d"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};


// ============================================================
// STATUS BADGE
// ============================================================

const StatusBadge = ({ status }) => {

    const styles = {

        Pending: {
            bg: "bg-[#3872fa]/10",
            text: "text-[#3872fa]",
            dot: "bg-[#3872fa]",
        },

        Processing: {
            bg: "bg-[#3872fa]/10",
            text: "text-[#3872fa]",
            dot: "bg-[#3872fa]",
        },

        Delivered: {
            bg: "bg-emerald-50",
            text: "text-emerald-600",
            dot: "bg-emerald-500",
        },

        Cancelled: {
            bg: "bg-gray-100",
            text: "text-gray-600",
            dot: "bg-gray-500",
        },

    };

    const style = styles[status] || styles.Pending;
    return (
        <span
            className={`
                inline-flex
                items-center
                gap-1.5
                rounded-full
                px-2.5
                py-1.5
                text-[10px]
                font-bold
                ${style.bg}
                ${style.text}
            `}
        >
            <span
                className={`
                    h-1.5
                    w-1.5
                    rounded-full
                    ${style.dot}
                `}
            />
            {status}
        </span>
    );
};
export default Dashboard;