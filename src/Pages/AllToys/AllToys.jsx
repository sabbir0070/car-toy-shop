import React, { useEffect, useState } from 'react';
import AllToysTabler from '../AllToysTabler/AllToysTabler';

const AllToys = () => {
const [toys, setToys] = useState([]);
const [searchText, setSearchText] = useState('');

console.log(toys)
useEffect(()=>{
fetch(`http://localhost:5000/allToy`)
.then(res=>res.json())
.then(data=>{
console.log(data)
setToys(data)
})
},[])

const handleSearch =() =>{
fetch(`http://localhost:5000/allToySearchName/${searchText}`)
.then(res=>res.json())
.then(data=>{
setToys(data)
})
}
  return (
    <div>
      <h2>All toys user toys</h2>
<div className='text-center w-full'>
<input onChange={(e)=>setSearchText(e.target.value)} className='text-center w-72 bg-base-300 h-12  text-black rounded-lg' placeholder='Search your toy name' type="text"  />
<button onClick={handleSearch} className='ml-4 px-5 py-3 bg-green-700 text-white rounded-lg'>Search</button>
</div>

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