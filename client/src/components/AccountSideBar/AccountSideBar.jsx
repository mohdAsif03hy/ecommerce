
import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import { LiaCloudUploadAltSolid } from "react-icons/lia";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import {  uploadImage } from "../../utils/api.js";

const AccountSideBar = () => {

    const [preview, setPreview] = useState([]);
    const [uploading, setUploading] = useState(false);

    const context = useContext(MyContext);



    const onChnageFile = async (e, apiEndPoint) => {
        try {
            setPreview([]);
            const files = e.target.files;
            if (!files || files.length === 0) {
                return;
            }
            setUploading(true);
            const formData = new FormData();
            // Validate and append files
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (
                    file &&
                    (
                        file.type === "image/jpeg" ||
                        file.type === "image/png" ||
                        file.type === "image/webp" ||
                        file.type === "image/jpg"
                    )
                ) {
                    formData.append("avatar", file);
                    console.log("Valid image:", file.name);
                } else {
                    context.openAlertBox(
                        "error",
                        `${file?.name || "File"} is not a valid image. Only JPG, JPEG, PNG and WEBP are allowed.`
                    );
                    setUploading(false);
                    return;
                }
            }

            // Send FormData to backend
            const res = await uploadImage(
                apiEndPoint,
                formData
            );
            console.log("Upload response:", res);
            if (res?.success === true) {
                // editData already returns response.data
                const avatar = res.avatar;
                setPreview([avatar]);
                context.openAlertBox(
                    "success",
                    res.message || "Image uploaded successfully"
                );
            } else {
                context.openAlertBox(
                    "error",
                    res?.message || "Image upload failed"
                );
            }
        } catch (error) {
            console.error("Image upload error:", error);
            context.openAlertBox(
                "error",
                error?.response?.data?.message ||
                error?.message ||
                "Image upload failed"
            );
        } finally {
            setUploading(false);
        }
    };
    return (
        <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
            {/* User Profile */}
            <div className="w-full p-4 flex items-center pb-3 justify-center flex-col border-b border-[rgba(0,0,0,0.1)]">
                {/* Avatar */}
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200">
                    {
                        uploading === true
                            ?
                            <CircularProgress
                                size={24}
                                color="inherit"
                            />
                            :
                            <img
                                src={
                                    context.userData?.avatar ||
                                    "https://imgs.search.brave.com/nOYCCBLzO_PUCOBWNye1v7ntCEGT60M1liawsyakotc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLWNsaXBhcnQv/MjAyMTA5MTUvb3Vy/bWlkL3BuZ3RyZWUt/dXNlci1hdmF0YXIt/cGxhY2Vob2xkZXIt/YmxhY2stcG5nLWlt/YWdlXzM5MTg0Mjcu/anBn"
                                }
                                className="h-full w-full object-cover"
                                alt="User Avatar"
                            />
                    }
                    {/* Upload Overlay */}
                    <div className="overlay w-full h-full absolute !cursor-pointer opacity-0 transition-all group-hover:opacity-100 flex items-center justify-center top-0 left-0 z-50 bg-[rgba(0,0,0,0.4)]">
                        <LiaCloudUploadAltSolid className="text-[20px] text-white cursor-pointer" />
                        <input
                            type="file"
                            className="absolute top-0 left-0 w-full h-full opacity-0"
                            accept="image/jpeg,image/png,image/webp,image/jpg"
                            onChange={(e) =>
                                onChnageFile(
                                    e,
                                    "/api/user/user-avatar"
                                )
                            }
                            name="avatar"
                        />
                    </div>
                </div>
                <h3>
                    {context.userData?.name}
                </h3>
                <h6 className="text-[12px] font-[400] pb-">
                    {context.userData?.email}
                </h6>
            </div>
            {/* Account Navigation */}
            <ul className="list-none pb-3 pt-2 bg-[#f1f1f1] MyAccountTab">
                {/* My Profile */}
                <li className="w-full">
                    <NavLink
                        to="/my-account"
                        end
                        className={({ isActive }) =>
                            isActive ? "isActive" : ""
                        }
                    >
                        <Button className="flex w-full !justify-start !text-left !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none !py-2 items-center gap-2">
                            <FaRegUser className="text-[12px]" />
                            My Profile
                        </Button>
                    </NavLink>
                </li>
                {/* My List */}
                <li className="w-full">
                    <NavLink
                        to="/my-List"
                        end
                        className={({ isActive }) =>
                            isActive ? "isActive" : ""
                        }
                    >
                        <Button className="flex w-full !justify-start !text-left !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none !py-2 items-center gap-2">
                            <IoHeartOutline className="text-[15px]" />
                            My List
                        </Button>
                    </NavLink>
                </li>
                {/* My Orders */}
                <li className="w-full">
                    <NavLink
                        to="/my-orders"
                        end
                        className={({ isActive }) =>
                            isActive ? "isActive" : ""
                        }
                    >
                        <Button className="flex w-full !justify-start !text-left !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none !py-2 items-center gap-2">
                            <HiOutlineShoppingBag className="text-[15px]" />
                            My Orders
                        </Button>
                    </NavLink>
                </li>
                {/* Logout */}
                <li className="w-full">
                    <NavLink
                        to="/logout"
                        className={({ isActive }) =>
                            isActive ? "isActive" : ""
                        }
                    >
                        <Button className="flex w-full !justify-start !text-left !px-5 !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none !py-2 items-center gap-2">
                            <IoLogOutOutline className="text-[15px]" />
                            Logout
                        </Button>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default AccountSideBar;

