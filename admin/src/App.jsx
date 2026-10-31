import React, { useState, createContext } from "react";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";


// Create Context
export const MyContext = createContext();


const App = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isLogin, setIsLogin] = useState(false);


    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <section className="main">
                    <Header />
                    <div className="contentMain flex">
                        {/* Sidebar */}
                        <div
                            className={`sidebarWrapper ${
                                isSidebarOpen ? "w-[18%]" : "w-[0%] opacity-0 "
                            } transition-all`}
                        >
                            <Sidebar />
                        </div>


                        {/* Main Content */}
                        <div className={`contentRight py-4 px-4 mr-1 ${isSidebarOpen === false ? "w-[100%]" :"w-[82%]" } transition-all`}>
                            <Dashboard />
                        </div>

                    </div>

                </section>
            )
        },
         {
            path: "/login",
            element: (
                <Login/>
            )
        },
        {
            path: "/signup",
            element: (
                <Signup/>
            )
        }
    ]);


    const values = {
        isSidebarOpen,
        setIsSidebarOpen,
        isLogin,
        setIsLogin
    };


    return (
        <MyContext.Provider value={values}>

            <RouterProvider router={router} />

        </MyContext.Provider>
    );
};


export default App;