import React, { useEffect } from 'react';
import delivery from '../../../assets/images/allToyImage/deliveryRight.png'
import Aos from 'aos';
// import delivery1 from '../../../assets/images/allToyImage/deliveryavif.avif'
const ProductDelivery = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000, // Animation duration
      once: false, // Only animate once
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <div
      className='grid grid-cols-1  gap-5 md:grid-cols-2 lg:grid-cols-2 sm:gap-y-16 bg-base-200 mb-10 
justify-between lg:px-10 md:px-10 pt-10 mx-auto my-auto xs:w-xl  sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
      <div data-aos="zoom-in-up" className='w-100 lg:w-100 md:w-100 relative'>
        <img className=' h-80 w-full bg-cover shadow-xl rounded-lg bg-gray-300' src={delivery} alt="img nai" />
        <div data-aos="zoom-in-top" className='absolute bottom-0 mb-8 width-full  text-center'>
          <h2 className='text-center ml-40 text-2xl font-semibold text-green-500 hover:text-red-500'>Please call me</h2>
        </div>
      </div>
      <div data-aos="zoom-in-left" className=' text-left  px-8 border border-gray-500 hover:bg-base-300 rounded-lg pt-5 bg-base-100'>
        <p className='text-4xl font-bold text-gray-800 leading-tight '> Your Favourite Toy Car <br />   <span className='text-indigo-500'> Order</span>  Now. </p>
        <p className='text-gray-700 text-2xl mt-3'> We are focused on being the best helping hard to the local business <br /> best toys car direct to your door </p>
        <button className='border border-gray-400 hover:bg-indigo-700 hover:text-yellow-500 px-8 py-3 mt-3 mb-3 bg-blue-600 font-bold rounded-lg text-white '>Order Now</button>
      </div>
      <div>
      </div>
    </div>
  );
};

export default ProductDelivery;