import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {

  const { photo, toyName, sellerName, sellerEmail, price, rating, quantity, details } = useLoaderData();

  return (
    <div className='my-7'>
      <h2></h2>
      <div className="card lg:card-side px-10 bg-base-200 shadow-xl">
        <div className='lg:w-1/2 py-5'><img src={photo} className='w-full  h-full rounded-xl bg-base-300' alt="Album" /></div>
        <div className=" px-12 py-6 space-y-6 w-full border border-lime-700 border-4 rounded-xl my-5 ml-5">
         <div className='flex justify-between'>
 <h2 className="text-2xl font-bold"> ToyName : <span className='text-lime-600'>{toyName}</span> </h2>
<Link to='/allToy' > <button className='text-white bg-lime-600 px-5 py-2 rounded-xl text-lg'>Back All Toys</button> </Link>
</div>
          <p className='text-xl font-semibold mb-0'> Details : <span className='text-blue-700 text-lg'>{details}</span> </p>
          {/* <div className='flex justify-between'> */}
            <p className='text-xl font-semibold'> SellerName : <span className='text-green-700'> {sellerName}</span> </p>
            <p className='text-xl font-semibold'> SellerEmail : <span className='text-blue-700' >{sellerEmail}</span> </p>
          {/* </div> */}
          <div className='flex justify-between mt-0' >
            <p className='text-xl font-semibold'> Price : <span className='text-blue-700'> $ {price}</span>  </p>
            <p className='text-xl font-semibold'> Quantity : <span className='text-blue-700'> $ {quantity}</span>  </p>
            <p className='text-xl font-semibold'> Rating :
              <Rating
                placeholderRating={rating}
                readonly
                emptySymbol={<FaRegStar className='w-10 h-6 mt-1 '></FaRegStar>}
                placeholderSymbol={<FaStar className=' w-10 h-6 text-yellow-400 mt-1'></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              />
            </p>
          </div>

        </div>
      </div>

      {/* <div className="card w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */}
    </div>
  );
};

export default SingleToyDetails;