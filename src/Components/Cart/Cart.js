import React from "react";
import productImg from "../../Assets/images/img/product-1.jpg";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
const Cart = () => {
  return (
    <div className="">
      <div className="bg-white   ">
        <table className=" w-[90%]  mx-auto border">
          <thead className="p-4 border-b border-gray-300 text-xl text-center mb-3 text-zinc-600">
            <tr className="p-4 ">
              <th className="  p-4 font-semibold  tracking-wide border-r">
                Product
              </th>
              <th className=" p-4 font-semibold  tracking-wide border-r">
                Price
              </th>
              <th className=" p-4 font-semibold  tracking-wide border-r">
                Quantity
              </th>
              <th className=" p-4 font-semibold  tracking-wide border-r">
                Total
              </th>
              <th className=" p-4  font-semibold  tracking-wide border-r">
                Remove
              </th>
            </tr>
          </thead>
          <tbody className=" text-center  text-lg">
            <tr className=" border py-4">
              <td className=" py-4 px-5 border-r">
                <div className=" flex items-center gap-2">
                  <img className=" w-16" src={productImg} alt="" />
                  <p>Milk</p>
                </div>
              </td>
              <td className="border-r text-center">99tk</td>
              <td className="border-r text-center">
                <div className=" flex items-center justify-center text-white ">
                  <button className=" p-2 bg-primaryColor text-base  ">
                    <FaMinus />{" "}
                  </button>
                  <p className=" py-1 px-3 bg-black text-base  "> 1</p>
                  <button className=" p-2 bg-primaryColor text-base  ">
                    <FaPlus />{" "}
                  </button>
                </div>
              </td>
              <td className="border-r">99tk</td>
              <td className="border-r text-center ">
                <button className=" p-2  bg-primaryColor text-white rounded-md">
                  <FaTrash />{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Cart;
