import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import AccountSideBar from '../../components/AccountSideBar/AccountSideBar';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { editData } from '../../utils/api';
import CircularProgress from '@mui/material/CircularProgress';

const MyAccount = () => {
    const context = useContext(MyContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        mobile: ""
    });
    const [userId, setuserId] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        if (token === null) {
            navigate("/");
        }
    }, [context?.isLogin]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
        ...formFields,
        [name]: value
    });
};

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formFields.email || !formFields.mobile || !formFields.name) {
            context.openAlertBox(
                "error",
                "Please fill in all required fields."
            );
            return;
        }

        setIsLoading(true);
        editData(`/api/user/{userId}`, formFields, { withCredentials: true })
            .then((res) => {
                if (res.success) {
                    context.openAlertBox("success", res.message);
                    context.setIsLogin(true);
                     context.setUserData({
            ...context.userData,
            name: formFields.name,
            email: formFields.email,
            mobile: formFields.mobile
        });
                    navigate("/");
                } else {
                    context.openAlertBox("error", res.message);
                }
            })
            .catch((error) => {
                console.error("Login error:", error);
                context.openAlertBox(
                    "error",
                    error.message || "Login failed"
                );
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    useEffect(() => {
        if (context?.userData?.avatar !== " " && context?.userData?.avatar !== undefined) {
            setuserId(context?.userData?._id);
            setFormFields({
                name:context?.userData?.name,
                email:context?.userData?.email,
                mobile:context?.userData?.mobile
            })
        }
    }, [context?.userData])

    return (
        <section className='py-10 w-full'>
            <div className="container flex gap-5">
                <div className="col1 w-[20%]">
                    <AccountSideBar />
                </div>
                <div className="col2 w-[70%]">
                    <div className="card bg-white p-5 shadow-md rounded-md">
                        <h2 className="pb-3">My Profile</h2>
                        <hr />

                        <form className='' onSubmit={handleSubmit}>
                            <div className="flex items-center gap-5 ">
                                <div className="w-[50%]">
                                    <TextField
                                        label="Full Name"
                                        variant="outlined"
                                        name="name"
                                        value={formFields.name}
                                        disabled={isLoading === true ? true : false}
                                        size="small"
                                        onChange={handleChange}
                                        className="w-full" />
                                </div>
                                <div className="w-[50%]">
                                    <TextField
                                        label="Email"
                                        type='email'
                                        variant="outlined"
                                        size="small"
                                        name='email'
                                        value={formFields.email}
                                        disabled={isLoading === true ? true : false}
                                        className="w-full"
                                        onChange={handleChange}
                                    />

                                </div>


                            </div>
                            <div className="flex items-center gap-5 ">
                                <div className="w-[50%] -mt-6">
                                    <TextField

                                        label="Phone Number"
                                        variant="outlined"
                                        size="small"
                                        className="w-full"
                                        name="mobile"
                                        value={formFields.mobile}
                                        disabled={isLoading === true ? true : false}
                                        onChange={handleChange}
                                    />

                                </div>
                            </div>
                            <br />
                            <div className="flex items-center -mt-8 gap-4">
                                <Button type='submite' className='btn-org btn-lg w-[200px]'>
                                    {
                                        isLoading === true ? <CircularProgress color="inherit" />
                                            :
                                            'Update Profile'
                                    }
                                </Button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyAccount
