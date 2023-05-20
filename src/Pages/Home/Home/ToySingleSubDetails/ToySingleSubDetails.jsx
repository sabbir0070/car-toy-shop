import React from 'react';
import { FaCalendar, FaRegStar, FaStar, FaStopwatch } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';

const ToySingleSubDetails = () => {
const toy = useLoaderData();
 const { _id, toyName, sellerName,sellerEmail, rating, quantity, photo, price, subCategory, date, details } = toy;

  return (
    <div className='bg-base-3000'>
<div className="card  h-full lg:card-side md:card-side my-7  bg-base-100 mx-auto shadow-xl">
  <div className='lg:px- md:m-10 w-full md:w-1/2 lg:w-1/2  h-full px-2 '>
    <img src={photo} alt="Shoes" className=" w-full rounded-xl" />
</div>
  <div className="card-body border border-gray-400 rounded-xl md:w-1/2 lg:w-1/2 lg:px-10 md:m-10 space-y-1 text-left">
    <h2 className="card-title"> Name : <span className='text-orange-500'>{toyName}</span> </h2>
  <p className='text-gray-600 font-semibold text-lg'> {details} </p>    

    <div className='flex gap-8'>
 <p className='text-lime-800 text-xl font-bold'>Price: <span className='text-yellow-600'>$ {price} </span> </p>
          <p className='text-lime-700 text-lg font-bold'>Quantity: <span className='text-red-500'> {quantity} </span> </p>
</div>
<p className='text-lime-800 text-xl font-bold mb-3'>Rating:
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar className='w-14 h-6 mt-1 '></FaRegStar>}
              placeholderSymbol={<FaStar className=' w-14 h-8 text-yellow-400 mt-1'></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
          </p>
        <div className="flex gap-20 items-center">
      <Link to="/"><button className="px-6 py-2 text-white bg-lime-500 rounded">Back Now</button></Link>
    <p className='text-lime-700 text-xl font-bold flex items-center'> <FaCalendar className='text-lime-500 mr-2'></FaCalendar> {date} </p>
</div>
<div className='flex gap-3'>
<p className='text-lime-700 text-lg font-bold'>Seller Name : <span className='text-orange-500'>{sellerName}</span> </p>
<p className='text-lime-700 text-lg font-bold'>Seller Email : <span className='text-orange-500'>{sellerName}</span> </p>

</div>
  </div>
</div>
    </div>
  );
};

export default ToySingleSubDetails;