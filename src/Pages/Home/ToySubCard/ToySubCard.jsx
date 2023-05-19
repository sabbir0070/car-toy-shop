import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ToySubCard = ({toy}) => {
const {_id, toyName,sellerName, rating,quantity, photo, price, subCategory, date, details} = toy;
  return (
    <div>
      <div className="card md:card-side lg:card-side h-full bg-base-100  shadow-xl">
  <div className='rounded-xl lg:w-1/2 h-60 '> 
<img src={photo} className='w-full  h-full p-5 rounded-xl ' alt="Movie"/>
</div>
  <div className="card-body lg:w-1/2 bg-base-200 ">
    <h2 className="text-2xl font-bold text-lime-800 ">Name: <span className='text-blue-800 text-xl'>{toyName}</span> </h2>
    
    <p className='text-lime-800 text-xl font-bold'>Price: <span className='text-yellow-600'>$ {price} </span> </p>
    <p>Rating: <span> {rating} </span> </p>
    
    <div className="lg:flex lg-items-center md:flex md:items-center">
<p className='text-lime-700 text-lg font-bold'>Quantity: <span  className='text-red-500'> {quantity} </span> </p>
     <Link> <button className="px-7 mt-3 py-2 text-lg font-bold rounded-xl bg-lime-500 text-white">Watch</button></Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default ToySubCard;