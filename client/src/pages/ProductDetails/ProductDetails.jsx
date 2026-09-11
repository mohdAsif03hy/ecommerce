import Breadcrumbs from "@mui/material/Breadcrumbs"
import { Link } from "react-router-dom"
import ProductZoom from "../../components/ProductZoom/ProductZoom"
import Button from "@mui/material/Button";
import { useState } from "react";

import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import LatestProduct from "../../components/LatestProduct/LatestProduct";
import ProductDetails2 from "../../components/ProductDetails2/ProductDetails2";


const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);


  return (
    <>
      <div className="py-4">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" className="link transition !text-[13px]">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[13px]"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              className="link transition !text-[13px]"
            >
              Cropped Satin Bomber Jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5 ">
        <div className="container flex gap-8 items-center ">
          <div className="productZoomContainer w-[35%] overflow-hidden">
            <ProductZoom />
          </div>

          <div className="productContent w-[65%] gap-3 pr-10 pl-10">
            <ProductDetails2/>
           </div>
        </div>

        <div className="container pt-10 ">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[16px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>

            <span
              className={`link text-[16px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Detail
            </span>

            <span
              className={`link text-[16px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Reviews (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p className="!my-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur nemo iusto possimus earum aut itaque suscipit dolores
                optio, vero ipsam! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Mollitia enim minima eos autem accusantium
                nulla maiores unde rem perspiciatis debitis.
              </p>

              <h4 className="!font-[600]">Lightweight</h4>

              <p className="!my-[10px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia enimm Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Molestias maxime et nihil animi? Similique
                ipsam corporis vel vitae voluptate soluta? minima eos autem
                accusantium nulla maiores unde rem perspiciatis debitis.
              </p>

              <h4 className="!font-[600]">Lightweight</h4>

              <p className="!my-[10px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia enimm Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Molestias maxime et nihil animi? Similique
                ipsam corporis vel vitae voluptate soluta? minima eos autem
                accusantium nulla maiores unde rem perspiciatis debitis.
              </p>

              <h4 className="!font-[600]">Free Shiping return</h4>

              <p className="!my-[10px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia enimm Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Molestias maxime et nihil animi? Similique
                ipsam corporis vel vitae voluptate soluta? minima eos autem
                accusantium nulla maiores unde rem perspiciatis debitis.
              </p>

              <h4 className="!font-[600]">Online support</h4>

              <p className="!my-[10px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia enimm Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Molestias maxime et nihil animi? Similique
                ipsam corporis vel vitae voluptate soluta? minima eos autem
                accusantium nulla maiores unde rem perspiciatis debitis.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <section className="w-full bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px] border-collapse border border-[#ccc]">
                    <tbody>
                      <tr className="border-b border-[#ccc]">
                        <th className="w-1/2 border-r border-[#ccc] px-4 py-[17px] text-left font-semibold">
                          Stand Up
                        </th>

                        <td className="w-1/2 px-4 py-[17px]">
                          35"L x 24"W x 37-45"H (front to back wheel)
                        </td>
                      </tr>

                      <tr className="border-b border-[#ccc]">
                        <th className="border-r border-[#ccc] px-4 py-[17px] text-left font-semibold">
                          Folded (w/o wheels)
                        </th>

                        <td className="px-4 py-[17px]">
                          32.5"L x 18.5"W x 16.5"H
                        </td>
                      </tr>

                      <tr className="border-b border-[#ccc]">
                        <th className="border-r border-[#ccc] px-4 py-[17px] text-left font-semibold">
                          Folded (w/ wheels)
                        </th>

                        <td className="px-4 py-[17px]">
                          32.5"L x 24"W x 18.5"H
                        </td>
                      </tr>

                      <tr className="border-b border-[#ccc]">
                        <th className="border-r border-[#ccc] px-4 py-[17px] text-left font-semibold">
                          Door Pass Through
                        </th>

                        <td className="px-4 py-[17px]">24</td>
                      </tr>

                      <tr className="border-b border-[#ccc]">
                        <th className="border-r border-[#ccc] px-4 py-[17px] text-left font-semibold">
                          Frame
                        </th>

                        <td className="px-4 py-[17px]">Aluminum</td>
                      </tr>

                      <tr className="border-b border-[#ccc]">
                        <th className="border-r border-[#ccc] px-4 py-[17px] text-left font-semibold">
                          Weight (w/o wheels)
                        </th>

                        <td className="px-4 py-[17px]">20 LBS</td>
                      </tr>

                      <tr className="border-b border-[#ccc]">
                        <th className="border-r border-[#ccc] px-4 py-[17px] text-left font-semibold">
                          Weight Capacity
                        </th>

                        <td className="px-4 py-[17px]">60 LBS</td>
                      </tr>

                      <tr className="border-b border-[#ccc]">
                        <th className="border-r border-[#ccc] px-4 py-[17px] text-left font-semibold">
                          Width
                        </th>

                        <td className="px-4 py-[17px]">24"</td>
                      </tr>

                      <tr className="border-b border-[#ccc]">
                        <th className="border-r border-[#ccc] px-4 py-[17px] text-left font-semibold">
                          Handle height (ground to handle)
                        </th>

                        <td className="px-4 py-[17px]">37-45"</td>
                      </tr>

                      <tr className="border-b border-[#ccc]">
                        <th className="border-r border-[#ccc] px-4 py-[17px] text-left font-semibold">
                          Wheels
                        </th>

                        <td className="px-4 py-[17px]">
                          12" air / wide track slick tread
                        </td>
                      </tr>

                      <tr className="border-b border-[#ccc]">
                        <th className="border-r border-[#ccc] px-4 py-[17px] text-left font-semibold">
                          Seat back height
                        </th>

                        <td className="px-4 py-[17px]">21.5"</td>
                      </tr>

                      <tr>
                        <th className="border-r border-[#ccc] px-4 py-[17px] text-left font-semibold">
                          Head room (inside canopy)
                        </th>

                        <td className="px-4 py-[17px]">25"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[17px]">Customer Q & A</h2>

                <div className="Reviewscroll pr-5 w-full max-h-[300px] overflow-y-auto overflow-x-hidden mt-5">

                  <div className="review pb-5 pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-4">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F9hBF6B_9rqYTF6OHiCL-GPEVEcGfASclJ9fqYI82g&s=10"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[14px] font-[500]">
                          Rinku verma
                        </h4>

                        <h5 className="text-[11px]">
                          2024-12-24
                        </h5>

                        <p className="text-[11px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt totam ipsum exercitationem sint
                          incidunt voluptate iure laborum officia quaerat
                          minima.
                        </p>
                      </div>
                    </div>

                    <Rating
                      name="size-small"
                      value={4}
                      readOnly
                    />
                  </div>

                  <div className="review pb-5 pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-4">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F9hBF6B_9rqYTF6OHiCL-GPEVEcGfASclJ9fqYI82g&s=10"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[14px] font-[500]">
                          Rinku verma
                        </h4>

                        <h5 className="text-[11px]">
                          2024-12-24
                        </h5>

                        <p className="text-[11px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt totam ipsum exercitationem sint
                          incidunt voluptate iure laborum officia quaerat
                          minima.
                        </p>
                      </div>
                    </div>

                    <Rating
                      name="size-small"
                      value={4}
                      readOnly
                    />
                  </div>

                  <div className="review pb-5 pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-4">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F9hBF6B_9rqYTF6OHiCL-GPEVEcGfASclJ9fqYI82g&s=10"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[14px] font-[500]">
                          Rinku verma
                        </h4>

                        <h5 className="text-[11px]">
                          2024-12-24
                        </h5>

                        <p className="text-[11px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt totam ipsum exercitationem sint
                          incidunt voluptate iure laborum officia quaerat
                          minima.
                        </p>
                      </div>
                    </div>

                    <Rating
                      name="size-small"
                      value={4}
                      readOnly
                    />
                  </div>

                  <div className="review pb-5 pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-4">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F9hBF6B_9rqYTF6OHiCL-GPEVEcGfASclJ9fqYI82g&s=10"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[14px] font-[500]">
                          Rinku verma
                        </h4>

                        <h5 className="text-[11px]">
                          2024-12-24
                        </h5>

                        <p className="text-[11px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt totam ipsum exercitationem sint
                          incidunt voluptate iure laborum officia quaerat
                          minima.
                        </p>
                      </div>
                    </div>

                    <Rating
                      name="size-small"
                      value={4}
                      readOnly
                    />
                  </div>

                  <div className="review pb-5 pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-4">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F9hBF6B_9rqYTF6OHiCL-GPEVEcGfASclJ9fqYI82g&s=10"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[14px] font-[500]">
                          Rinku verma
                        </h4>

                        <h5 className="text-[11px]">
                          2024-12-24
                        </h5>

                        <p className="text-[11px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt totam ipsum exercitationem sint
                          incidunt voluptate iure laborum officia quaerat
                          minima.
                        </p>
                      </div>
                    </div>

                    <Rating
                      name="size-small"
                      value={4}
                      readOnly
                    />
                  </div>
                </div>

                <br />

                <div className="reviewForm bg-[#f1f1f1] p-4 rounded-md">
                  <h2 className="text-[17px] mb-2 font-[500]">
                    Add a review
                  </h2>

                  <form className="!w-full">
                    <TextField
                      className="!w-full"
                      id="outlined-textarea"
                      label="Write a review"
                      placeholder="Nice product"
                      multiline
                    />

                    <br />

                    <Rating
                      name="size-small"
                      value={4}
                    />

                    <div className="flex items-center mt-4">
                      <Button className="btn-org">
                        Submite Review
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="container !pt-8">
          <h2 className='text-[20px] font-[600] mb-2'>Latest Products</h2>
          <LatestProduct items={5} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;