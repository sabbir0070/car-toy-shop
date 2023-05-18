import React, { useEffect, useState } from 'react';
import AllToysTabler from '../AllToysTabler/AllToysTabler';

const AllToys = () => {
const [toys, setToys] = useState([]);
console.log(toys)
useEffect(()=>{
fetch(`http://localhost:5000/allToy`)
.then(res=>res.json())
.then(data=>{
console.log(data)
setToys(data)
})
},[])

  return (
    <div>
      <h2>All toys: {toys?.length}</h2>
<div className="overflow-x-auto my-7">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th>No</th> 
        <th>Seller Name</th> 
        <th>Toy Name</th> 
        <th>Sub-Category</th> 
        <th>Price</th> 
        <th>Quantity</th> 
        <th>View Details</th> 
      </tr>
    </thead> 
    <tbody>
     
{
 toys.map(toy=> <AllToysTabler toy={toy} key={toy._id}></AllToysTabler> )
}  

    </tbody> 
  </table>
</div>
    </div>
  );
};

export default AllToys;