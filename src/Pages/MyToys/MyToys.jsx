import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaBeer, FaRegEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyToys = () => {
const {user} = useContext(AuthContext);
const [toys, setToys] = useState([]);
const [control, setControl] = useState(false)

useEffect(()=>{
fetch(`http://localhost:5000/myToy/${user?.email}`)
.then(res=>res.json())
.then(data=>{
setToys(data)
console.log(data)
})
},[user])

const handleDelete = (id) =>{
console.log('confirm deleted',id)
fetch()
}
  return (
    <div>
     <h2>My All Toys</h2>
<div className="overflow-x-auto my-7">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>No:</th>
        <th>image</th>
        <th>ToyName</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Date</th>
        <th>Quantity</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    
     {
toys.map((toy) =>(

 <tr className=''>
        <th>1</th>
<td>
<div className="avatar">
              <div className="mask  w-24 h-16">
                <img src= {toy?.photo} className='w-full h-full rounded-lg' alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
</td>
        <td> {toy?.toyName} </td>
        <td> {toy?.subCategory} </td>
        <td> {toy?.price} </td>
        <td> {toy?.date} </td>
        <td> {toy?.quantity} </td>
        <td htmlFor="my-modal-5" > <FaRegEdit className='text-green-600 w-8 h-8'>
   {/* The button to open modal */}
{/* <label  className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
<div className="modal-box w-11/12 max-w-5xl">
   
 <div>modal information</div>
   
    <div className="modal-action">
      <label htmlFor="my-modal-5" className="btn">Yay!</label>
    </div>
  </div> 
</div>
</FaRegEdit> </td>
        <td onClick={()=>handleDelete(toy?._id)}> <FaTrash className='text-red-600 w-8 h-8'></FaTrash> </td>
      </tr>
))
}
   
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyToys;