import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/ourService/polic3.jfif'
import img2 from '../../../assets/images/ourService/truck.jfif'
import img3 from '../../../assets/images/ourService/bus2.jfif'
import img4 from '../../../assets/images/ourService/beku.jfif'
import img5 from '../../../assets/images/ourService/ambolance.png'
import img6 from '../../../assets/images/ourService/truck1.jpg'
import Aos from 'aos';

const OurServices = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000, // Animation duration
      once: false, // Only animate once
      easing: 'ease-in-out'
    });
  }, []);
  return (
   <div>
<h2 className='text-center text-4xl font-bold text-gray-500 '>OUR SERVICES</h2>
 <div className='grid grid-cols-1 bg-base-300 my-7 lg:px-10 md:px-10 gap-5 md:grid-cols-3 lg:grid-cols-3'>
      <div data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
        className="card lg:w-full md:w-96 bg-base-100 my-10 shadow-xl">
        <figure data-aos="zoom-in-up" className="px-10 pt-10">
          <img src={img1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div data-aos="zoom-in-left" className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-serif text-green-700">Police Car</h2>
          <p className='text-gray-500 text-lg'>The police car is a fast and sleek toy vehicle used for law enforcement missions. It is equipped with flashing lights and sirens for a realistic play experience. Kids can imagine chasing down criminals and maintaining law and order with this exciting toy.</p>
          <div className="card-actions">
            <button className="px-10 py-3 hover:bg-lime-700 bg-lime-500 text-white font-bold rounded-xl">Buy Now</button>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
        className="card lg:w-96 md:w-96 bg-base-100 my-10 shadow-xl">
        <figure data-aos="zoom-in-up" className="px-10 pt-10">
          <img src={img2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div data-aos="zoom-in-left" className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-serif text-green-700"> Truck</h2>
          <p className='text-gray-500 text-lg'>The mini fire truck is a compact toy vehicle inspired by firefighting vehicles. It features a ladder, water hose, and other fire-fighting accessories. Kids can role-play as firefighters and respond to imaginary emergencies, putting out fires and saving the day.</p>
          <div className="card-actions">
            <button className="px-10 py-3 hover:bg-lime-700 bg-lime-500 text-white font-bold rounded-xl">Buy Now</button>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
        className="card lg:w-96 md:w-96 bg-base-100 my-10 shadow-xl">
        <figure data-aos="zoom-in-up" className="px-10 pt-10">
          <img src={img3} alt="Shoes" className="rounded-xl" />
        </figure>
        <div data-aos="zoom-in-left" className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-serif text-green-700">Mini Bus</h2>
          <p className='text-gray-500 text-lg'>The toy bus is a large, yellow vehicle with wheels that move. It has seating for many passengers and big windows for them to look out. Kids can imagine picking up and dropping off passengers on their own little adventures.</p>
          <div className="card-actions">
            <button className="px-10 py-3 hover:bg-lime-700 bg-lime-500 text-white font-bold rounded-xl">Buy Now</button>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
        className="card lg:w-96 md:w-96 bg-base-100 my-10 shadow-xl">
        <figure data-aos="zoom-in-up" className="px-10 pt-10">
          <img src={img4} alt="Shoes" className="rounded-xl" />
        </figure>
        <div data-aos="zoom-in-left" className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-serif text-green-700">Excavator</h2>
          <p className='text-gray-500 text-lg'>The Excavator car is a fast and sleek toy vehicle used for law enforcement missions. It is equipped with flashing lights and sirens for a realistic play experience. Kids can imagine chasing down criminals and maintaining law and order with this exciting toy.</p>
          <div className="card-actions">
            <button className="px-10 py-3 hover:bg-lime-700 bg-lime-500 text-white font-bold rounded-xl">Buy Now</button>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
        className="card lg:w-96 md:w-96 bg-base-100 my-10 shadow-xl">
        <figure data-aos="zoom-in-up" className="px-10 pt-10">
          <img src={img5} alt="Shoes" className="rounded-xl" />
        </figure>
        <div data-aos="zoom-in-left" className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-serif text-green-700">Ambolance</h2>
          <p className='text-gray-500 text-lg'>The Embolance car is a fast and sleek toy vehicle used for law enforcement missions. It is equipped with flashing lights and sirens for a realistic play experience. Kids can imagine chasing down criminals and maintaining law and order with this exciting toy.</p>
          <div className="card-actions">
            <button className="px-10 py-3 hover:bg-lime-700 bg-lime-500 text-white font-bold rounded-xl">Buy Now</button>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
        className="card lg:w-96 md:w-96 bg-base-100 my-10 shadow-xl">
        <figure data-aos="zoom-in-up" className="px-10 pt-10">
          <img src={img6} alt="Shoes" className="rounded-xl" />
        </figure>
        <div data-aos="zoom-in-left" className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-serif text-green-700">Mini Tuck</h2>
          <p className='text-gray-500 text-lg'>The mini fire truck is a compact toy vehicle inspired by firefighting vehicles. It features a ladder, water hose, and other fire-fighting accessories. Kids can role-play as firefighters and respond to imaginary emergencies, putting out fires and saving the day.</p>
          <div className="card-actions">
            <button className="px-10 py-3 hover:bg-lime-700 bg-lime-500 text-white font-bold rounded-xl">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default OurServices;