import Button from '@mui/material/Button';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { TbLayoutDashboard } from "react-icons/tb";
import { FaImages } from "react-icons/fa6";
import { HiMiniUsers } from "react-icons/hi2";
import { CgProductHunt } from "react-icons/cg";
import { IoBagCheck } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";

import { Collapse } from 'react-collapse';
import { MyContext } from '../../App';

const Sidebar = () => {

  const [subemnuIndex, setSubmenuIndex] = useState(null);

  const isOpenSubMenu = (index) => {
    if (subemnuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
const context = useContext(MyContext);
  return (
    <>
      <div
        className={`
          sidebar
          fixed
          top-0
          left-0
          bg-[#fff]
          border-r
          border-[rgba(0,0,0,0.1)]
          
          h-full
          py-2
          px-5
          pr-0
          w-[${context.isSidebarOpen === true ? "18%" : "0%"}]
        `}
      >

        {/* ================= LOGO ================= */}

        <div className="py-2 w-full">
          <Link to={"/"}>
            <img
              src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"
              alt=""
              className="w-[110px]"
            />
          </Link>
        </div>


        {/* ================= MENU ================= */}

        <ul className="list-none mt-4 pr-0">


          {/* ================= DASHBOARD ================= */}

          <li>
            <Link to={"/"}>
              <Button
                className="
                  !w-full
                  !capitalize
                  !justify-start
                  !py-2
                  flex
                  !gap-3
                  !text-[13px]
                  !text-[rgba(0,0,0,0.8)]
                  !font-[500]
                  items-center
                  hover:!bg-[#f1f1f1]
                "
              >
                <TbLayoutDashboard className="text-[17px]" />

                <span>
                  Dashboard
                </span>
              </Button>
            </Link>
          </li>


          {/* ================= HOME SLIDES ================= */}

          <li>

            <Button
              onClick={() => isOpenSubMenu(1)}
              className="
                !w-full
                !capitalize
                !justify-start
                !py-2
                flex
                !gap-3
                !text-[13px]
                !text-[rgba(0,0,0,0.8)]
                !font-[500]
                items-center
                hover:!bg-[#f1f1f1]
              "
            >

              <FaImages className="text-[17px]" />

              <span>
                Home Slides
              </span>

              <span
                className={`
                  ml-auto
                  w-[30px]
                  h-[30px]
                  flex
                  items-center
                  justify-center
                  transition-transform
                  duration-200
                  ${subemnuIndex === 1 ? "rotate-180" : ""}
                `}
              >
                <FaAngleDown />
              </span>

            </Button>


            <Collapse isOpened={subemnuIndex === 1}>

              <ul className="w-full">


                {/* Home Slide List */}

                <li className="w-full">

                  <Link to={"/home-slides"}>

                    <Button
                      className="
                        !capitalize
                        !pl-9
                        !w-full
                        !justify-start
                        !text-[rgba(0,0,0,0.8)]
                        !opacity-85
                        !text-[12px]
                        !font-[500]
                        flex
                        !gap-3
                      "
                    >

                      <span
                        className="
                          block
                          w-[5px]
                          h-[5px]
                          rounded-full
                          bg-[rgba(0,0,0,0.5)]
                        "
                      ></span>

                      <span>
                        Home Slide List
                      </span>

                    </Button>

                  </Link>

                </li>


                {/* Add Home Banner Slide */}

                <li className="w-full">

                  <Link to={"/home-slides/add"}>

                    <Button
                      className="
                        !capitalize
                        !pl-9
                        !w-full
                        !justify-start
                        !text-[rgba(0,0,0,0.8)]
                        !opacity-85
                        !text-[12px]
                        !font-[500]
                        flex
                        !gap-3
                      "
                    >

                      <span
                        className="
                          block
                          w-[5px]
                          h-[5px]
                          rounded-full
                          bg-[rgba(0,0,0,0.5)]
                        "
                      ></span>

                      <span>
                        Add Home Banner Slide
                      </span>

                    </Button>

                  </Link>

                </li>

              </ul>

            </Collapse>

          </li>


          {/* ================= USERS ================= */}

          <li>

            <Link to={"/users"}>

              <Button
                className="
                  !w-full
                  !capitalize
                  !justify-start
                  !py-2
                  flex
                  !gap-3
                  !text-[13px]
                  !text-[rgba(0,0,0,0.8)]
                  !font-[500]
                  items-center
                  hover:!bg-[#f1f1f1]
                "
              >

                <HiMiniUsers className="text-[17px]" />

                <span>
                  Users
                </span>

              </Button>

            </Link>

          </li>


          {/* ================= PRODUCTS ================= */}

          <li>
            <Button
              onClick={() => isOpenSubMenu(2)}
              className="
                !w-full
                !capitalize
                !justify-start
                !py-2
                flex
                !gap-3
                !text-[13px]
                !text-[rgba(0,0,0,0.8)]
                !font-[500]
                items-center
                hover:!bg-[#f1f1f1]
              "
            >

              <CgProductHunt className="text-[17px]" />

              <span>
                Products
              </span>

              <span
                className={`
                  ml-auto
                  w-[30px]
                  h-[30px]
                  flex
                  items-center
                  justify-center
                  transition-transform
                  duration-200
                  ${subemnuIndex === 2 ? "rotate-180" : ""}
                `}
              >
                <FaAngleDown />
              </span>

            </Button>


            <Collapse isOpened={subemnuIndex === 2}>

              <ul className="w-full">


                {/* Product List */}

                <li className="w-full">

                  <Link to={"/products/list"}>

                    <Button
                      className="
                        !capitalize
                        !pl-9
                        !w-full
                        !justify-start
                        !text-[rgba(0,0,0,0.8)]
                        !opacity-85
                        !text-[12px]
                        !font-[500]
                        flex
                        !gap-3
                      "
                    >

                      <span
                        className="
                          block
                          w-[5px]
                          h-[5px]
                          rounded-full
                          bg-[rgba(0,0,0,0.5)]
                        "
                      ></span>

                      <span>
                        Product List
                      </span>

                    </Button>

                  </Link>

                </li>


                {/* Product Upload */}

                <li className="w-full">

                  <Link to={"/products/upload"}>

                    <Button
                      className="
                        !capitalize
                        !pl-9
                        !w-full
                        !justify-start
                        !text-[rgba(0,0,0,0.8)]
                        !opacity-85
                        !text-[12px]
                        !font-[500]
                        flex
                        !gap-3
                      "
                    >

                      <span
                        className="
                          block
                          w-[5px]
                          h-[5px]
                          rounded-full
                          bg-[rgba(0,0,0,0.5)]
                        "
                      ></span>

                      <span>
                        Product Upload
                      </span>

                    </Button>

                  </Link>

                </li>


                {/* Add Product */}

                <li className="w-full">

                  <Link to={"/products/add"}>

                    <Button
                      className="
                        !capitalize
                        !pl-9
                        !w-full
                        !justify-start
                        !text-[rgba(0,0,0,0.8)]
                        !opacity-85
                        !text-[12px]
                        !font-[500]
                        flex
                        !gap-3
                      "
                    >

                      <span
                        className="
                          block
                          w-[5px]
                          h-[5px]
                          rounded-full
                          bg-[rgba(0,0,0,0.5)]
                        "
                      ></span>

                      <span>
                        Add Product
                      </span>

                    </Button>

                  </Link>

                </li>


                {/* Add Product RAM */}

                <li className="w-full">

                  <Link to={"/products/ram"}>

                    <Button
                      className="
                        !capitalize
                        !pl-9
                        !w-full
                        !justify-start
                        !text-[rgba(0,0,0,0.8)]
                        !opacity-85
                        !text-[12px]
                        !font-[500]
                        flex
                        !gap-3
                      "
                    >

                      <span
                        className="
                          block
                          w-[5px]
                          h-[5px]
                          rounded-full
                          bg-[rgba(0,0,0,0.5)]
                        "
                      ></span>

                      <span>
                        Add Product RAM
                      </span>

                    </Button>

                  </Link>

                </li>


                {/* Add Product Weight */}

                <li className="w-full">

                  <Link to={"/products/weight"}>

                    <Button
                      className="
                        !capitalize
                        !pl-9
                        !w-full
                        !justify-start
                        !text-[rgba(0,0,0,0.8)]
                        !opacity-85
                        !text-[12px]
                        !font-[500]
                        flex
                        !gap-3
                      "
                    >

                      <span
                        className="
                          block
                          w-[5px]
                          h-[5px]
                          rounded-full
                          bg-[rgba(0,0,0,0.5)]
                        "
                      ></span>

                      <span>
                        Add Product Weight
                      </span>

                    </Button>

                  </Link>

                </li>


                {/* Add Product Size */}

                <li className="w-full">

                  <Link to={"/products/size"}>

                    <Button
                      className="
                        !capitalize
                        !pl-9
                        !w-full
                        !justify-start
                        !text-[rgba(0,0,0,0.8)]
                        !opacity-85
                        !text-[12px]
                        !font-[500]
                        flex
                        !gap-3
                      "
                    >

                      <span
                        className="
                          block
                          w-[5px]
                          h-[5px]
                          rounded-full
                          bg-[rgba(0,0,0,0.5)]
                        "
                      ></span>

                      <span>
                        Add Product Size
                      </span>

                    </Button>

                  </Link>

                </li>

              </ul>

            </Collapse>

          </li>


          {/* ================= CATEGORY ================= */}

          <li>
            <Button
              onClick={() => isOpenSubMenu(3)}
              className="
                !w-full
                !capitalize
                !justify-start
                !py-2
                flex
                !gap-3
                !text-[13px]
                !text-[rgba(0,0,0,0.8)]
                !font-[500]
                items-center
                hover:!bg-[#f1f1f1]
              "
            >

              <TbCategory className="text-[17px]" />

              <span>
                Category
              </span>

              <span
                className={`
                  ml-auto
                  w-[30px]
                  h-[30px]
                  flex
                  items-center
                  justify-center
                  transition-transform
                  duration-200
                  ${subemnuIndex === 3 ? "rotate-180" : ""}
                `}
              >
                <FaAngleDown />
              </span>

            </Button>


            <Collapse isOpened={subemnuIndex === 3}>

              <ul className="w-full">


                {/* Category List */}

                <li className="w-full">

                  <Link to={"/categories/list"}>

                    <Button
                      className="
                        !capitalize
                        !pl-9
                        !w-full
                        !justify-start
                        !text-[rgba(0,0,0,0.8)]
                        !opacity-85
                        !text-[12px]
                        !font-[500]
                        flex
                        !gap-3
                      "
                    >

                      <span
                        className="
                          block
                          w-[5px]
                          h-[5px]
                          rounded-full
                          bg-[rgba(0,0,0,0.5)]
                        "
                      ></span>

                      <span>
                        Category List
                      </span>

                    </Button>

                  </Link>

                </li>


                {/* Add Category */}

                <li className="w-full">

                  <Link to={"/categories/add"}>

                    <Button
                      className="
                        !capitalize
                        !pl-9
                        !w-full
                        !justify-start
                        !text-[rgba(0,0,0,0.8)]
                        !opacity-85
                        !text-[12px]
                        !font-[500]
                        flex
                        !gap-3
                      "
                    >

                      <span
                        className="
                          block
                          w-[5px]
                          h-[5px]
                          rounded-full
                          bg-[rgba(0,0,0,0.5)]
                        "
                      ></span>

                      <span>
                        Add a Category
                      </span>

                    </Button>

                  </Link>

                </li>


                {/* Sub Category List */}

                <li className="w-full">

                  <Link to={"/sub-categories"}>

                    <Button
                      className="
                        !capitalize
                        !pl-9
                        !w-full
                        !justify-start
                        !text-[rgba(0,0,0,0.8)]
                        !opacity-85
                        !text-[12px]
                        !font-[500]
                        flex
                        !gap-3
                      "
                    >

                      <span
                        className="
                          block
                          w-[5px]
                          h-[5px]
                          rounded-full
                          bg-[rgba(0,0,0,0.5)]
                        "
                      ></span>

                      <span>
                        Sub Category List
                      </span>

                    </Button>

                  </Link>

                </li>


                {/* Add Sub Category */}

                <li className="w-full">

                  <Link to={"/sub-categories/add"}>

                    <Button
                      className="
                        !capitalize
                        !pl-9
                        !w-full
                        !justify-start
                        !text-[rgba(0,0,0,0.8)]
                        !opacity-85
                        !text-[12px]
                        !font-[500]
                        flex
                        !gap-3
                      "
                    >

                      <span
                        className="
                          block
                          w-[5px]
                          h-[5px]
                          rounded-full
                          bg-[rgba(0,0,0,0.5)]
                        "
                      ></span>

                      <span>
                        Add a Sub Category
                      </span>

                    </Button>

                  </Link>

                </li>

              </ul>

            </Collapse>

          </li>


          {/* ================= ORDERS ================= */}

          <li>

            <Link to={"/orders"}>

              <Button
                className="
                  !w-full
                  !capitalize
                  !justify-start
                  !py-2
                  flex
                  !gap-3
                  !text-[13px]
                  !text-[rgba(0,0,0,0.8)]
                  !font-[500]
                  items-center
                  hover:!bg-[#f1f1f1]
                "
              >

                <IoBagCheck className="text-[17px]" />

                <span>
                  Orders
                </span>

              </Button>

            </Link>

          </li>


          {/* ================= LOGOUT ================= */}

          <li>

            <Button
              className="
                !w-full
                !capitalize
                !justify-start
                flex
                !py-2
                !gap-3
                !text-[13px]
                !text-[rgba(0,0,0,0.8)]
                !font-[500]
                items-center
                hover:!bg-[#f1f1f1]
              "
            >

              <IoMdLogOut className="text-[17px]" />

              <span>
                Logout
              </span>

            </Button>

          </li>


        </ul>

      </div>
    </>
  );
};

export default Sidebar;