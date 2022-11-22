import React from "react";
import {
  FaMapMarker,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import paymentImg from '../../Assets/images/img/payment-method.png'
import paymentsecureImg1 from '../../Assets/images/img/godaddy.svg'
import paymentsecureImg2 from '../../Assets/images/img/norton.svg'
import paymentsecureImg3 from '../../Assets/images/img/ssl.svg'
const UpperFooter = () => {
  return (
    <div className=" bg-white py-5 px-3">
      <div className=" flex  justify-around text-[#353535]">
        <div className=" space-y-2">
          <h2 className=" text-2xl font-bold text-gray-700 pb-4 font-myfont ">
            Get in Touch
          </h2>
          <div className="space-y-2  ">
            <p className=" flex items-center gap-3">
              <FaMapMarker />
              #R-20, #H-20, Sector-11, Shaymoli, Dhaka
            </p>
            <p className=" flex items-center gap-3">
              <FaEnvelope />
              management@e-bazar.com.bd
            </p>
            <p className=" flex items-center gap-3">
              <FaPhoneAlt />
              +8801938639567
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className=" text-2xl font-bold text-gray-700 pb-4 font-myfont ">
            Follow Us
          </h2>
          <div className="">
            <div className="flex items-center gap-4 text-2xl">
              <a
                className=" p-2 border border-black rounded hover:text-primaryColor 
               hover:border-primaryColor "
                href="/"
              >
                <FaTwitter />
              </a>
              <a
                className=" p-2 border border-black rounded hover:text-primaryColor 
               hover:border-primaryColor"
                href="/"
              >
                <FaFacebookF />
              </a>
              <a
                className=" p-2 border border-black rounded hover:text-primaryColor 
               hover:border-primaryColor"
                href="/"
              >
                <FaLinkedin />
              </a>
              <a
                className=" p-2 border border-black rounded hover:text-primaryColor 
               hover:border-primaryColor"
                href="/"
              >
                <FaInstagram />
              </a>
              <a
                className=" p-2 border border-black rounded hover:text-primaryColor 
               hover:border-primaryColor"
                href="/"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className=" text-2xl font-bold text-gray-700 pb-4 font-myfont ">
            Company Info
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                className=" flex items-center group hover:text-primaryColor"
                href="/"
              >
                <span className="text-2xl hidden group-hover:block transition-all duration-1000 ">
                  <MdKeyboardArrowRight className="transition-all duration-1000 " />
                </span>
                About Us
              </a>
            </li>
            <li>
              <a
                className=" flex items-center group hover:text-primaryColor"
                href="/"
              >
                <span className="text-2xl hidden group-hover:block transition-all duration-1000 ">
                  <MdKeyboardArrowRight className="transition-all duration-1000 " />
                </span>
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className=" flex items-center group hover:text-primaryColor"
                href="/"
              >
                <span className="text-2xl hidden group-hover:block transition-all duration-1000 ">
                  <MdKeyboardArrowRight className="transition-all duration-1000 " />
                </span>
                Terms & Condition
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className=" text-2xl font-bold text-gray-700 pb-4 font-myfont ">
            Purchase Info
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                className=" flex items-center group hover:text-primaryColor"
                href="/"
              >
                <span className="text-2xl hidden group-hover:block transition-all duration-1000 ">
                  <MdKeyboardArrowRight className="transition-all duration-1000 " />
                </span>
                Pyament Policy
              </a>
            </li>
            <li>
              <a
                className=" flex items-center group hover:text-primaryColor"
                href="/"
              >
                <span className="text-2xl hidden group-hover:block transition-all duration-1000 ">
                  <MdKeyboardArrowRight className="transition-all duration-1000 " />
                </span>
                Shipping Policy
              </a>
            </li>

            <li>
              <a
                className=" flex items-center group hover:text-primaryColor"
                href="/"
              >
                <span className="text-2xl hidden group-hover:block transition-all duration-1000 ">
                  <MdKeyboardArrowRight className="transition-all duration-1000 " />
                </span>
                Return Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" container border-t my-8 py-2 flex items-center justify-around">
        <div className=" flex items-center gap-3">
          <h2 className=" text-xl font-bold text-gray-700  font-myfont ">We Accept:</h2>
          <img src={paymentImg} alt="Payment Method" />
        </div>

        <div className=" flex items-center py-2 gap-3">
          <h2 className=" text-xl font-bold text-gray-700  font-myfont ">Secured By:</h2>
          <img className=" w-16" src={paymentsecureImg1}  alt="Payment Security" />
          <img className=" w-16" src={paymentsecureImg2}  alt="Payment Security" />
          <img className=" w-16" src={paymentsecureImg3}  alt="Payment Security" />
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
