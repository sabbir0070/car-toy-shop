import React, {useEffect, useState } from 'react';
import AllToysTabler from '../AllToysTabler/AllToysTabler';
import UseTitle from '../../Hooks/UseTitle';

const AllToys = () => {
const [toys, setToys] = useState([]);
const [searchText, setSearchText] = useState('');
UseTitle('All Toy')
useEffect(()=>{
fetch(`https://toys-car-project-server.vercel.app/allToy`)
.then(res=>res.json())
.then(data=>{
setToys(data)
})
},[])

const handleSearch =() =>{
fetch(`https://toys-car-project-server.vercel.app/allToySearchName/${searchText}`)
.then(res=>res.json())
.then(data=>{
setToys(data)
})




}
  return (
    <div>
      <h2 className='text-center my-3 text-4xl font-bold text-gray-400'>ALL USER TOYS</h2>
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
 toys.map((toy,index)=> <AllToysTabler toy={toy} index={index} key={toy._id}></AllToysTabler> )
}  

    </tbody> 
  </table>
</div>
    </div>
  );
};

export default AllToys;