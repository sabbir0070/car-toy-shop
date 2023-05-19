import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTabler = ({ toy,index }) => {
  const { _id, sellerName, subCategory, toyName, price, quantity } = toy || {}
  return (
    <tr className='text-lg text-gray-600 font-semibold'>
      <th>{index + 1}</th>
      <td>{sellerName}</td>
      <td> {toyName || 'No Name '} </td>
      <td> {subCategory} </td>
      <td> $ {price} </td>
      <td> {quantity} </td>
      <td> <Link to ={`/singleToy/${_id}`}><button className='text-white bg-green-700 px-5 py-2 rounded'>View Details</button></Link> </td>
    </tr>
  );
};

export default AllToysTabler;