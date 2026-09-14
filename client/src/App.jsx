import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductListing from './pages/ProductListing/ProductListing'
import Footer from './components/Footer/Footer'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import { createContext, useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from './components/ProductZoom/ProductZoom'
import Button from '@mui/material/Button'
import ProductDetails2 from './components/ProductDetails2/ProductDetails2'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Drawer from '@mui/material/Drawer';
import { VscClose } from "react-icons/vsc";
import CartPanel from './components/CartPanel/CartPanel'
import Cart from './pages/Cart/Cart'
import Verify from './pages/Verify/Verify'
import toast, { Toaster } from 'react-hot-toast';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
import Checkout from './pages/Checkout/Checkout'
import MyAccount from './pages/MyAccount/MyAccount'
import MyList from './pages/MyList/MyList'
import Orders from './pages/Orders/Orders'
import { fetchDataFromApi } from './utils/api'
const apiUrl = import.meta.env.VITE_API_URL;








export const MyContext = createContext();

const App = () => {
  const [maxWidth, setMaxWidth] = useState('md');
  const [fullWidth, setFullWidth] = useState(true);
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [isLogin , setIsLogin ] = useState(false);
  const [userData, setUserData] = useState(null);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };
  

  const [openProductDetailModal, setOpenProductDetailModal] = useState(false);

  const handleCloseProductDetailModal = () => {
    setOpenProductDetailModal(false);
  };

  
 const openAlertBox = (status, message) => {
    if (status === "success") {
        toast.success(message);
    } else if (status === "error") {
        toast.error(message);
    } else {
        toast(message);
    }
};
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLogin(true);
      fetchDataFromApi(`/api/user/user-details?token=${token}`, { withCredentials: true })
      .then((res) => {
        // console.log('User details:', res.data);
        setUserData(res.data);
      });
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const values = {
    openProductDetailModal,
    setOpenProductDetailModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
    apiUrl,
    userData,
    setUserData
  };

  return (
    <>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/forgot-password" element={<ForgetPassword/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/productListing" exact={true} element={<ProductListing />} />
          <Route path="/productDetails/:id" exact={true} element={<ProductDetails />} />
          <Route path="/checkout" exact={true} element={<Checkout/>} />
          <Route path="/my-account" exact={true} element={<MyAccount/>} />
          <Route path="/my-list" exact={true} element={<MyList/>} />
          <Route path="/my-orders" exact={true} element={<Orders/>} />
        </Routes>
        <Footer />
      </MyContext.Provider>

      <Dialog
        open={openProductDetailModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
        className='productDetailModal'
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailModalContainer relative">
            <Button className="!w-[36px]  !h-[36px] !min-w-[36px] !rounded-full !text-[#000] 
            !absolute top-[5px] right-[5px] !bg-[#f1f1f1]"  onClick={handleCloseProductDetailModal}><IoIosClose className='!text-[28px] !text-black !bg-none' /></Button>
            <div className="col1 w-[40%]">
              <ProductZoom />
            </div>
            <div className="col2 ml-6 py-3 px-4 w-[60%] productContent ">
              <ProductDetails2 />
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* cart panel/ */}
      <Drawer open={openCartPanel} anchor={"right"}
        className="cart-panel" onClose={() => toggleCartPanel(false)}>
        <div className="flex items-center gap-3 justify-between py-3 px-4 border-b border-[rgba(0,0,0,0.1)] ">
          <h4>Shoping Cart (1)</h4>
          <VscClose className="text-[17px] cursor-pointer " onClick={toggleCartPanel(false)} />
        </div>
      <CartPanel/>
      </Drawer>

    <Toaster/>

    </>
  )
}

export default App
