
import Button from "@mui/material/Button";
import { PiHandbagDuotone } from "react-icons/pi";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";



const Cart = () => {


  return (
    <section className="section py-10 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md  bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0">There are <span className="font-bold text-[#ff5252]">2</span> Product in your cart</p>
            </div>

        <CartItem size="S" Qty={1}/>
        <CartItem size="S" Qty={1}/>
        <CartItem size="S" Qty={1}/>
        <CartItem size="S" Qty={1}/>
        <CartItem size="S" Qty={1}/>
        <CartItem size="S" Qty={1}/>
        <CartItem size="S" Qty={1}/>



          </div>
        </div>


        <div className="rightPart w-[30%] ">
          <div className="shadow-md rounded-md sticky top-[10px]  bg-white p-5">
            <h3 className="pb-3">Cart Totals</h3>
            <hr />
            <p className="flex items-center justify-between ">
              <span className="text-[13px] font-[500] ">Subtotal</span>
              <span className="text-[#ff5252] font-bold">799</span>
            </p>
            <p className="flex items-center justify-between ">
              <span className="text-[13px] font-[500] ">Shipping </span>
              <span className=" font-bold">Free</span>
            </p>
            <p className="flex items-center justify-between ">
              <span className="text-[13px] font-[500] ">Estimate for</span>
              <span className=" font-bold">UK</span>
            </p>
            <p className="flex items-center justify-between ">
              <span className="text-[13px] font-[500] ">Total</span>
              <span className="text-[#ff5252] font-bold">799</span>
            </p>
            <Link to={"/checkout"}>
            <Button className="btn-org mt-2 btn-lg w-[100%] flex gap-2"><PiHandbagDuotone className="text-[17px]" /> 
            Checkout</Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Cart
