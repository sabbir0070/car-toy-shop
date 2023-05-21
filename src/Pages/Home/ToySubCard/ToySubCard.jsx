import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

const ToySubCard = ({ toy }) => {
  useEffect(() => {
    Aos.init({
      duration: 3000, // Animation duration
      once: false, // Only animate once
      easing: 'ease-in-out'
    });
  }, []);
  const { _id, toyName, sellerName, rating, quantity, photo, price, subCategory, date, details } = toy;
  console.log(_id)
  return (
    <div>
      <div className="card md:card-side lg:card-side w-full h-full bg-base-100 rounded-r-xl  rounded-xl shadow-xl ">
        <div data-aos="zoom-in-up"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"

          className='md:w-1/2 lg:w-1/2 w-full h-60 '>
          <img src={photo} className='w-full h-full p-5 lg:mt-3 md:mt-3 ' alt="Car" />
        </div>
        <div className="card-body lg:w-1/2 md:w-1/2 rounded-r-xl bg-base-200 ">
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
          <Link to={`/singleSubDetails/${_id}`} toy={toy}> <button className="px-7 mt-3 py-3 text-lg font-bold rounded-xl hover:bg-lime-700 bg-lime-500 text-white">View details</button></Link>

        </div>
      </div>
    </div>
  );
};

export default ToySubCard;