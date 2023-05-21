import React from 'react';
import logo from '../../assets/images/logo/logo.jpg'
import { FaBook, FaCalculator, FaCarAlt, FaFacebook, FaFileContract, FaGoogle, FaInstagram, FaLinkedinIn, FaLocationArrow, FaLongArrowAltUp, FaMusic, FaPhoneSquareAlt, FaReact, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mb-10 bg-black'>
  <footer className="footer  p-10 bg-black text-base-content text-white">
  <div>
    <img src={logo} className='w-52 h-20' alt="" />
    <p className='text-3xl text-lime-600 font-bold pt-5'>Car Toys Shop<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className=" text-2xl font-bold text-lime-500">SERVICES</span> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaCarAlt className='text-green-400 w-14 h-8'></FaCarAlt> Car Toys</a> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaCalculator className='text-blue-400 w-14 h-8'></FaCalculator> Remote Toys</a> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaMusic className='text-red-500 w-14 h-8'></FaMusic> Musical Toys</a> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaBook className='text--600 w-14 h-8'></FaBook> Learning Toys</a>
  </div> 

<div className='w-full'>
<span className=" text-2xl font-bold text-lime-500">CONTACT</span> 
    <a className="link link-hover flex gap-3 text-lg font-semibold text-gray-200 items-center"> <FaPhoneSquareAlt className='text-blue-600 w-14 h-8'></FaPhoneSquareAlt> 01871126026</a> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaGoogle className='text-green-600 w-14 h-8'></FaGoogle> mdshariful6026@gmail.com </a> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaLocationArrow className='text-lime-400 w-14 h-8'></FaLocationArrow> Mymensingh</a> 
    <a className="link link-hover flex gap-3 text-lg font-semibold items-center text-gray-200"> <FaReact className='text-blue-500 w-14 h-8'></FaReact> React developer</a>
</div>  
  <div className='w-full'>
<ul className='flex md:flex-col lg:grid-col gap-y-5 sm:gap-x-4 justify-center mx-auto sm:mt-5 '>
                <li className='px-2 w-14 h-10 text-2xl cursor-pointer'>
               <FaFacebook className='w-14 h-10 text-white'></FaFacebook>
                </li>
                <li className='px-2 w-14 h-10 text-xl cursor-pointer'>
                    <FaLinkedinIn className='w-14 h-10 text-green-700'></FaLinkedinIn>
                </li>
                <li className='px-2 text-2xl cursor-pointer'>
                    <FaInstagram className='w-14 h-10 text-red-600'></FaInstagram>
                </li>
                <li className='px-2 text-2xl cursor-pointer'>
                    <FaTwitter className='w-14 h-10 text-blue-600'></FaTwitter>
                </li>
            </ul>
   
  </div> 
  {/* <div>

    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> */}
</footer>
 <div className='px-10 py-1 bg-black mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
                </div>
                <div className='pb-10  block text-2xl text-center text-red-400 hover:text-red-500'>
                    © 2023 copy right. All rights reserved car toys.
                </div>

    </div>
  );
};

export default Footer;