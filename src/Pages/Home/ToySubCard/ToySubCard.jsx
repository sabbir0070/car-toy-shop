import React from 'react';
import { FaPencilAlt, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const ToySubCard = ({ toy }) => {
  const { _id, toyName, sellerName, rating, quantity, photo, price, subCategory, date, details } = toy;
console.log(_id)  
return (
    <div>
      <div className="card md:card-side lg:card-side w-full h-full bg-base-100  shadow-xl">
        <div className='rounded-xl md:w-1/2 lg:w-1/2 h-60 '>
          <img src={photo} className='w-full  h-full p-5 rounded-xl ' alt="Movie" />
        </div>
        <div className="card-body lg:w-1/2 bg-base-200 ">
          <h2 className="text-2xl font-bold text-lime-800 ">Name: <span className='text-blue-800 text-xl'>{toyName}</span> </h2>

          <p className='text-lime-800 text-xl font-bold'>Price: <span className='text-yellow-600'>$ {price} </span> </p>
          <p className='text-lime-700 text-lg font-bold'>Quantity: <span className='text-red-500'> {quantity} </span> </p>
          <p className='text-lime-800 text-xl font-bold'>Rating:
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar className='w-6 h-6 mt-1 '></FaRegStar>}
              placeholderSymbol={<FaStar className=' w-6 h-6 text-yellow-400 mt-1'></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
          </p>
          <Link to={`/singleSubDetails/${_id}`} toy={toy}> <button className="px-7 mt-3 py-2 text-lg font-bold rounded-xl bg-lime-500 text-white">View details</button></Link>

        </div>
      </div>
    </div>
  );
};

export default ToySubCard;