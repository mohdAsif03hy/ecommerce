import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { IoBagCheckOutline } from "react-icons/io5";
const Checkout = () => {
    return (
        <section className="py-10">
            <div className="container flex items-center gap-4">

                <div className="leftcol w-[70%]">
                    <div className="card bg-white shadow-md w-full p-5 rounded-md">

                        <h1>
                            Billing Details
                        </h1>

                        <form action="" className="w-full">

                            <div className="flex items-center gap-5 -my-4 pt-[3px] -mb-3">
                                <div className="col w-[50%]">
                                    <TextField
                                        fullWidth
                                        label="Full Name"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>

                                <div className="col w-[50%]">
                                    <TextField
                                        fullWidth
                                        label="Country"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <h5 className="text-[13px] font-[500] mb-2">
                                Street Address*
                            </h5>

                            <div className="flex items-center gap-5 -my-4 -mb-3">
                                <div className="col w-[100%]">
                                    <TextField
                                        fullWidth
                                        label="House No. And Street Name"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-5 -my-4 -mb-3">
                                <div className="col w-[100%]">
                                    <TextField
                                        fullWidth
                                        label="Apartment, suite, unit, etc. (optional)"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <h5 className="text-[13px] font-[500] mb-2">
                                Town / City*
                            </h5>

                            <div className="flex items-center gap-5 -my-4 -mb-3">
                                <div className="col w-[100%]">
                                    <TextField
                                        fullWidth
                                        label="City / Town"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>
                            <h5 className="text-[13px] font-[500] mb-2">
                                State*
                            </h5>
                            <div className="flex items-center gap-5 -my-4 -mb-3">
                                <div className="col w-[100%]">
                                    <TextField
                                        fullWidth
                                        label="State"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <h5 className="text-[13px] font-[500] mb-2">
                                Postcode / ZIP*
                            </h5>

                            <div className="flex items-center gap-5 -my-4 -mb-3">
                                <div className="col w-[100%]">
                                    <TextField
                                        fullWidth
                                        label="Zip Code"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-5 -my-4 pt-[3px] -mb-3">
                                <div className="col w-[50%]">
                                    <TextField
                                        fullWidth
                                        type="tel"
                                        label="Phone Number"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>

                                <div className="col w-[50%]">
                                    <TextField
                                        fullWidth
                                        type="email"
                                        label="Email Address"
                                        variant="outlined"
                                        size="small"
                                    />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="rightcol w-[30%]">
                    <div className="card shadow-md bg-white rounded-md p-5">
                        <h2 className='m-3'>Your Orders</h2>
                        <div className=" mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-3" > 
                        <div className=" row flex items-center justify-between border-b border-t border-[rgba(0,0,0,0.1)] py-2">
                            <span className="text-[13px] font-[600]">Product</span>
                            <span className="text-[13px] font-[600]">Subtotal</span>
                        </div>

                        <div className="flex items-center justify-between  py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="img w-[35px] h-[35px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                    <img src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                                    alt="" className='w-full group-hover:scale-105 transition-all' />
                                </div>
                                <div className="info">
                                    <h4 className="text-[12px] font-[500]">product name ...</h4>
                                    <span className="text-[12px] ">Qty: 1</span>
                                </div>
                            </div>
                            <span className="text-[13px]  font-[500]">99</span>
                        </div>
                        <div className="flex items-center justify-between  py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="img w-[35px] h-[35px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                    <img src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                                    alt="" className='w-full group-hover:scale-105 transition-all' />
                                </div>
                                <div className="info">
                                    <h4 className="text-[12px] font-[500]">product name ...</h4>
                                    <span className="text-[12px] ">Qty: 1</span>
                                </div>
                            </div>
                            <span className="text-[13px]  font-[500]">99</span>
                        </div>
                        <div className="flex items-center justify-between  py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="img w-[35px] h-[35px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                    <img src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                                    alt="" className='w-full group-hover:scale-105 transition-all' />
                                </div>
                                <div className="info">
                                    <h4 className="text-[12px] font-[500]">product name ...</h4>
                                    <span className="text-[12px] ">Qty: 1</span>
                                </div>
                            </div>
                            <span className="text-[13px]  font-[500]">99</span>
                        </div>
                        <div className="flex items-center justify-between  py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="img w-[35px] h-[35px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                    <img src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                                    alt="" className='w-full group-hover:scale-105 transition-all' />
                                </div>
                                <div className="info">
                                    <h4 className="text-[12px] font-[500]">product name ...</h4>
                                    <span className="text-[12px] ">Qty: 1</span>
                                </div>
                            </div>
                            <span className="text-[13px]  font-[500]">99</span>
                        </div>
                        <div className="flex items-center justify-between  py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="img w-[35px] h-[35px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                    <img src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                                    alt="" className='w-full group-hover:scale-105 transition-all' />
                                </div>
                                <div className="info">
                                    <h4 className="text-[12px] font-[500]">product name ...</h4>
                                    <span className="text-[12px] ">Qty: 1</span>
                                </div>
                            </div>
                            <span className="text-[13px]  font-[500]">99</span>
                        </div>
                        <div className="flex items-center justify-between  py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="img w-[35px] h-[35px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                    <img src="https://imgs.search.brave.com/8m4xiC1khQN-1Y8T9FrshRXO_R4b92-AS6f7lkd2Wfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QjFwcHBSNGdWS0wu/X0NMYXw1MDAsNDY4/fDgxK05Xc21GN2VM/LnBuZ3wwLDAsNTAw/LDQ2OCswLjAsMC4w/LDUwMC4wLDQ2OC4w/X0FDXy5wbmc"
                                    alt="" className='w-full group-hover:scale-105 transition-all' />
                                </div>
                                <div className="info">
                                    <h4 className="text-[12px] font-[500]">product name ...</h4>
                                    <span className="text-[12px] ">Qty: 1</span>
                                </div>
                            </div>
                            <span className="text-[13px]  font-[500]">99</span>
                        </div>
                        
                    </div>
                    <Button className="btn-org btn-lg w-full flex gap-2 items-center"><IoBagCheckOutline className='text-[18px] '/>Checkout</Button>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Checkout;