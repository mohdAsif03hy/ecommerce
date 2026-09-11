import React, { useState } from 'react'
import AccountSideBar from '../../components/AccountSideBar/AccountSideBar'
import Bagde from '../../components/Badge/Bagde'

const Orders = () => {

    const [openOrder, setOpenOrder] = useState(null)

    const handleOrderProducts = (index) => {
        setOpenOrder(openOrder === index ? null : index)
    }

    return (
        <section className="w-full py-5">

            <div className="container mx-auto px-3">

                <div className="flex flex-col gap-4 lg:flex-row">

                    {/* SIDEBAR */}

                    <div className="w-full lg:w-[20%] lg:min-w-[210px]">
                        <AccountSideBar />
                    </div>


                    {/* ORDERS */}

                    <div className="w-full min-w-0 lg:w-[80%]">

                        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_5px_20px_rgba(0,0,0,0.05)]">

                            {/* HEADER */}

                            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">

                                <div>

                                    <h2 className="text-[16px] font-bold text-gray-800">
                                        My Orders
                                    </h2>

                                    <p className="text-[12px] text-gray-500">
                                        There are{" "}
                                        <span className="font-bold text-[#ff5252]">
                                            2
                                        </span>{" "}
                                        orders
                                    </p>

                                </div>

                                <span className="rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[12px] font-semibold text-[#ff5252]">
                                    2 Orders
                                </span>

                            </div>


                            {/* MAIN TABLE */}

                            <div className="premium-scroll w-full overflow-x-auto">

                                <table className="w-max min-w-[1400px] border-collapse">

                                    {/* HEAD */}

                                    <thead>

                                        <tr className="border-b border-gray-100 bg-[#fafafa]">

                                            <th className="whitespace-nowrap px-3 py-2.5 text-left text-[12px] font-bold text-gray-500">
                                                Order ID
                                            </th>

                                            <th className="whitespace-nowrap px-3 py-2.5 text-left text-[12px] font-bold text-gray-500">
                                                Payment ID
                                            </th>

                                            <th className="whitespace-nowrap px-3 py-2.5 text-left text-[12px] font-bold text-gray-500">
                                                Products
                                            </th>

                                            <th className="whitespace-nowrap px-3 py-2.5 text-left text-[12px] font-bold text-gray-500">
                                                Name
                                            </th>

                                            <th className="whitespace-nowrap px-3 py-2.5 text-left text-[12px] font-bold text-gray-500">
                                                Phone
                                            </th>

                                            <th className="whitespace-nowrap px-3 py-2.5 text-left text-[12px] font-bold text-gray-500">
                                                Email
                                            </th>

                                            <th className="whitespace-nowrap px-3 py-2.5 text-left text-[12px] font-bold text-gray-500">
                                                User ID
                                            </th>

                                            <th className="whitespace-nowrap px-3 py-2.5 text-left text-[12px] font-bold text-gray-500">
                                                Address
                                            </th>

                                            <th className="whitespace-nowrap px-3 py-2.5 text-left text-[12px] font-bold text-gray-500">
                                                Pincode
                                            </th>

                                            <th className="whitespace-nowrap px-3 py-2.5 text-left text-[12px] font-bold text-gray-500">
                                                Total Amount
                                            </th>

                                            <th className="whitespace-nowrap px-3 py-2.5 text-left text-[12px] font-bold text-gray-500">
                                                Order Status
                                            </th>

                                            <th className="whitespace-nowrap px-3 py-2.5 text-left text-[12px] font-bold text-gray-500">
                                                Date
                                            </th>

                                        </tr>

                                    </thead>


                                    <tbody>

                                        {/* =================================================
                                            ORDER 1
                                        ================================================= */}

                                        <tr className="border-b border-gray-100 hover:bg-gray-50">

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] font-semibold text-gray-800">
                                                    #ORD-1001
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="font-mono text-[12px] text-gray-500">
                                                    pay_123456789
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">

                                                <button
                                                    type="button"
                                                    onClick={() => handleOrderProducts(0)}
                                                    className="text-[13px] font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                                                >
                                                    {openOrder === 0
                                                        ? "Hide Products ↑"
                                                        : "View Products ↓"}
                                                </button>

                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] font-semibold text-gray-800">
                                                    Mohd Asif
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] text-gray-600">
                                                    +91 9876543210
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] text-gray-600">
                                                    asif@gmail.com
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="font-mono text-[12px] text-gray-500">
                                                    64f8a92c...
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] text-gray-600">
                                                    Hyderabad, Telangana, India
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] font-medium text-gray-700">
                                                    500032
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] font-bold text-gray-800">
                                                    ₹2,499
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <Bagde status="Pending" />
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] text-gray-500">
                                                    21 Aug 2026
                                                </span>
                                            </td>

                                        </tr>


                                        {/* ORDER 1 PRODUCTS */}

                                        {openOrder === 0 && (

                                            <tr>

                                                <td
                                                    colSpan="12"
                                                    className="bg-gray-50 p-2"
                                                >

                                                    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">

                                                        {/* PRODUCT HEADER */}

                                                        <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-3 py-2">

                                                            <div>

                                                                <h3 className="text-[13px] font-semibold text-gray-800">
                                                                    Order Products
                                                                </h3>

                                                                <p className="text-[11px] text-gray-500">
                                                                    #ORD-1001
                                                                </p>

                                                            </div>

                                                            <span className="text-[12px] text-gray-500">
                                                                3 Products
                                                            </span>

                                                        </div>


                                                        {/* PRODUCT TABLE */}

                                                        <div className="product-scroll max-h-[220px] overflow-auto">

                                                            <table className="w-max border-collapse">

                                                                <thead className="sticky top-0 z-10 bg-white">

                                                                    <tr className="border-b border-gray-100">

                                                                        <th className="whitespace-nowrap px-2 py-2 text-left text-[12px] font-semibold text-gray-500">
                                                                            Product ID
                                                                        </th>

                                                                        <th className="whitespace-nowrap px-2 py-2 text-left text-[12px] font-semibold text-gray-500">
                                                                            Product Title
                                                                        </th>

                                                                        <th className="whitespace-nowrap px-2 py-2 text-left text-[12px] font-semibold text-gray-500">
                                                                            Image
                                                                        </th>

                                                                        <th className="whitespace-nowrap px-2 py-2 text-center text-[12px] font-semibold text-gray-500">
                                                                            Quantity
                                                                        </th>

                                                                        <th className="whitespace-nowrap px-2 py-2 text-right text-[12px] font-semibold text-gray-500">
                                                                            Price
                                                                        </th>

                                                                        <th className="whitespace-nowrap px-2 py-2 text-right text-[12px] font-semibold text-gray-500">
                                                                            Subtotal
                                                                        </th>

                                                                    </tr>

                                                                </thead>


                                                                <tbody>

                                                                    {/* PRODUCT 1 */}

                                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">

                                                                        <td className="whitespace-nowrap px-2 py-2">
                                                                            <span className="font-mono text-[12px] text-gray-500">
                                                                                PROD-1001
                                                                            </span>
                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2">
                                                                            <span className="text-[13px] font-medium text-gray-800">
                                                                                Premium Wireless Headphones
                                                                            </span>
                                                                        </td>

                                                                        <td className="px-2 py-2">

                                                                            <img
                                                                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                                                                                alt="Premium Wireless Headphones"
                                                                                className="h-8 w-8 rounded-md object-cover"
                                                                            />

                                                                        </td>

                                                                        <td className="px-2 py-2 text-center">

                                                                            <span className="rounded-md bg-gray-100 px-2 py-1 text-[12px] font-semibold">
                                                                                2
                                                                            </span>

                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2 text-right">
                                                                            <span className="text-[13px] text-gray-600">
                                                                                ₹1,499
                                                                            </span>
                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2 text-right">
                                                                            <span className="text-[13px] font-semibold text-gray-800">
                                                                                ₹2,998
                                                                            </span>
                                                                        </td>

                                                                    </tr>


                                                                    {/* PRODUCT 2 */}

                                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">

                                                                        <td className="whitespace-nowrap px-2 py-2">
                                                                            <span className="font-mono text-[12px] text-gray-500">
                                                                                PROD-1002
                                                                            </span>
                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2">
                                                                            <span className="text-[13px] font-medium text-gray-800">
                                                                                Mechanical Keyboard
                                                                            </span>
                                                                        </td>

                                                                        <td className="px-2 py-2">

                                                                            <img
                                                                                src="https://images.unsplash.com/photo-1587829741301-dc798b83add3"
                                                                                alt="Mechanical Keyboard"
                                                                                className="h-8 w-8 rounded-md object-cover"
                                                                            />

                                                                        </td>

                                                                        <td className="px-2 py-2 text-center">

                                                                            <span className="rounded-md bg-gray-100 px-2 py-1 text-[12px] font-semibold">
                                                                                1
                                                                            </span>

                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2 text-right">
                                                                            <span className="text-[13px] text-gray-600">
                                                                                ₹2,499
                                                                            </span>
                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2 text-right">
                                                                            <span className="text-[13px] font-semibold text-gray-800">
                                                                                ₹2,499
                                                                            </span>
                                                                        </td>

                                                                    </tr>


                                                                    {/* PRODUCT 3 */}

                                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">

                                                                        <td className="whitespace-nowrap px-2 py-2">
                                                                            <span className="font-mono text-[12px] text-gray-500">
                                                                                PROD-1003
                                                                            </span>
                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2">
                                                                            <span className="text-[13px] font-medium text-gray-800">
                                                                                Wireless Mouse
                                                                            </span>
                                                                        </td>

                                                                        <td className="px-2 py-2">

                                                                            <img
                                                                                src="https://images.unsplash.com/photo-1527814050087-3793815479db"
                                                                                alt="Wireless Mouse"
                                                                                className="h-8 w-8 rounded-md object-cover"
                                                                            />

                                                                        </td>

                                                                        <td className="px-2 py-2 text-center">

                                                                            <span className="rounded-md bg-gray-100 px-2 py-1 text-[12px] font-semibold">
                                                                                3
                                                                            </span>

                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2 text-right">
                                                                            <span className="text-[13px] text-gray-600">
                                                                                ₹899
                                                                            </span>
                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2 text-right">
                                                                            <span className="text-[13px] font-semibold text-gray-800">
                                                                                ₹2,697
                                                                            </span>
                                                                        </td>

                                                                    </tr>

                                                                </tbody>

                                                            </table>

                                                        </div>


                                                        {/* FOOTER */}

                                                        <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-3 py-2">

                                                            <span className="text-[12px] text-gray-500">
                                                                3 Products
                                                            </span>

                                                            <span className="text-[13px] font-bold text-gray-800">
                                                                Subtotal: ₹8,194
                                                            </span>

                                                        </div>

                                                    </div>

                                                </td>

                                            </tr>

                                        )}


                                        {/* =================================================
                                            ORDER 2
                                        ================================================= */}

                                        <tr className="border-b border-gray-100 hover:bg-gray-50">

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] font-semibold text-gray-800">
                                                    #ORD-1002
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="font-mono text-[12px] text-gray-500">
                                                    pay_987654321
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">

                                                <button
                                                    type="button"
                                                    onClick={() => handleOrderProducts(1)}
                                                    className="text-[13px] font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                                                >
                                                    {openOrder === 1
                                                        ? "Hide Products ↑"
                                                        : "View Products ↓"}
                                                </button>

                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] font-semibold text-gray-800">
                                                    Ahmed Khan
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] text-gray-600">
                                                    +91 9123456789
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] text-gray-600">
                                                    ahmed@gmail.com
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="font-mono text-[12px] text-gray-500">
                                                    71ab42de...
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] text-gray-600">
                                                    Gachibowli, Hyderabad, Telangana
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] font-medium text-gray-700">
                                                    500032
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] font-bold text-gray-800">
                                                    ₹1,899
                                                </span>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <Bagde status="Processing" />
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-2.5">
                                                <span className="text-[13px] text-gray-500">
                                                    20 Aug 2026
                                                </span>
                                            </td>

                                        </tr>


                                        {/* ORDER 2 PRODUCTS */}

                                        {openOrder === 1 && (

                                            <tr>

                                                <td
                                                    colSpan="6"
                                                    className="bg-gray-50 p-2"
                                                >

                                                    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">

                                                        <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-3 py-2">

                                                            <div>

                                                                <h3 className="text-[13px] font-semibold text-gray-800">
                                                                    Order Products
                                                                </h3>

                                                                <p className="text-[11px] text-gray-500">
                                                                    #ORD-1002
                                                                </p>

                                                            </div>

                                                            <span className="text-[12px] text-gray-500">
                                                                3 Products
                                                            </span>

                                                        </div>


                                                        <div className="product-scroll max-h-[220px] overflow-auto">

                                                            <table className="w-max border-collapse">

                                                                <thead className="sticky top-0 z-10 bg-white">

                                                                    <tr className="border-b border-gray-100">

                                                                        <th className="whitespace-nowrap px-2 py-2 text-left text-[12px] font-semibold text-gray-500">
                                                                            Product ID
                                                                        </th>

                                                                        <th className="whitespace-nowrap px-2 py-2 text-left text-[12px] font-semibold text-gray-500">
                                                                            Product Title
                                                                        </th>

                                                                        <th className="whitespace-nowrap px-2 py-2 text-left text-[12px] font-semibold text-gray-500">
                                                                            Image
                                                                        </th>

                                                                        <th className="whitespace-nowrap px-2 py-2 text-center text-[12px] font-semibold text-gray-500">
                                                                            Quantity
                                                                        </th>

                                                                        <th className="whitespace-nowrap px-2 py-2 text-right text-[12px] font-semibold text-gray-500">
                                                                            Price
                                                                        </th>

                                                                        <th className="whitespace-nowrap px-2 py-2 text-right text-[12px] font-semibold text-gray-500">
                                                                            Subtotal
                                                                        </th>

                                                                    </tr>

                                                                </thead>


                                                                <tbody>

                                                                    {/* PRODUCT 1 */}

                                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">

                                                                        <td className="whitespace-nowrap px-2 py-2">
                                                                            <span className="font-mono text-[12px] text-gray-500">
                                                                                PROD-2001
                                                                            </span>
                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2">
                                                                            <span className="text-[13px] font-medium text-gray-800">
                                                                                Premium Laptop Stand
                                                                            </span>
                                                                        </td>

                                                                        <td className="px-2 py-2">

                                                                            <img
                                                                                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
                                                                                alt="Premium Laptop Stand"
                                                                                className="h-8 w-8 rounded-md object-cover"
                                                                            />

                                                                        </td>

                                                                        <td className="px-2 py-2 text-center">

                                                                            <span className="rounded-md bg-gray-100 px-2 py-1 text-[12px] font-semibold">
                                                                                1
                                                                            </span>

                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2 text-right">
                                                                            <span className="text-[13px] text-gray-600">
                                                                                ₹1,299
                                                                            </span>
                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2 text-right">
                                                                            <span className="text-[13px] font-semibold text-gray-800">
                                                                                ₹1,299
                                                                            </span>
                                                                        </td>

                                                                    </tr>


                                                                    {/* PRODUCT 2 */}

                                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">

                                                                        <td className="whitespace-nowrap px-2 py-2">
                                                                            <span className="font-mono text-[12px] text-gray-500">
                                                                                PROD-2002
                                                                            </span>
                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2">
                                                                            <span className="text-[13px] font-medium text-gray-800">
                                                                                USB-C Fast Charger
                                                                            </span>
                                                                        </td>

                                                                        <td className="px-2 py-2">

                                                                            <img
                                                                                src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0"
                                                                                alt="USB-C Fast Charger"
                                                                                className="h-8 w-8 rounded-md object-cover"
                                                                            />

                                                                        </td>

                                                                        <td className="px-2 py-2 text-center">

                                                                            <span className="rounded-md bg-gray-100 px-2 py-1 text-[12px] font-semibold">
                                                                                2
                                                                            </span>

                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2 text-right">
                                                                            <span className="text-[13px] text-gray-600">
                                                                                ₹799
                                                                            </span>
                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2 text-right">
                                                                            <span className="text-[13px] font-semibold text-gray-800">
                                                                                ₹1,598
                                                                            </span>
                                                                        </td>

                                                                    </tr>


                                                                    {/* PRODUCT 3 */}

                                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">

                                                                        <td className="whitespace-nowrap px-2 py-2">
                                                                            <span className="font-mono text-[12px] text-gray-500">
                                                                                PROD-2003
                                                                            </span>
                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2">
                                                                            <span className="text-[13px] font-medium text-gray-800">
                                                                                USB-C Hub
                                                                            </span>
                                                                        </td>

                                                                        <td className="px-2 py-2">

                                                                            <img
                                                                                src="https://images.unsplash.com/photo-1625842268584-8f3296236761"
                                                                                alt="USB-C Hub"
                                                                                className="h-8 w-8 rounded-md object-cover"
                                                                            />

                                                                        </td>

                                                                        <td className="px-2 py-2 text-center">

                                                                            <span className="rounded-md bg-gray-100 px-2 py-1 text-[12px] font-semibold">
                                                                                1
                                                                            </span>

                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2 text-right">
                                                                            <span className="text-[13px] text-gray-600">
                                                                                ₹1,099
                                                                            </span>
                                                                        </td>

                                                                        <td className="whitespace-nowrap px-2 py-2 text-right">
                                                                            <span className="text-[13px] font-semibold text-gray-800">
                                                                                ₹1,099
                                                                            </span>
                                                                        </td>

                                                                    </tr>

                                                                </tbody>

                                                            </table>

                                                        </div>


                                                        <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-3 py-2">

                                                            <span className="text-[12px] text-gray-500">
                                                                3 Products
                                                            </span>

                                                            <span className="text-[13px] font-bold text-gray-800">
                                                                Subtotal: ₹3,996
                                                            </span>

                                                        </div>

                                                    </div>

                                                </td>

                                            </tr>

                                        )}

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Orders