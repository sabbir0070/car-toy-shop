import React, { useEffect, useState } from 'react';
import ToySubCard from '../ToySubCard/ToySubCard';

const Category = () => {
const [toys, setToys] = useState([]);
const [activeTab, setActiveTab] = useState("MiniBus");
console.log(toys)
useEffect(()=>{
fetch(`https://toys-car-project-server.vercel.app/allToy/${activeTab}`)
.then(res=>res.json())
.then(data=>{
setToys(data)
})
},[activeTab])

const handleTabClick = (tabName) =>{
setActiveTab(tabName);
}
  return (
    <div className='my-8 bg-base-300 px-20'>
<h2 className='text-center font-bold text-3xl text-blue-700 py-6'>All Toy Category Product</h2>
<div className='flex justify-center gap-8'>
<div onClick={()=>handleTabClick('MiniTruck')} className={`
px-6 py-3 w-24 bg-white text-black font-bold rounded-lg ${
activeTab =="MiniTruck" ? "bg-yellow-500 text-white"  :''
}
`}>
Truck
</div>
<div onClick={()=>handleTabClick('MiniBus')} className={`
px-6 py-3 w-24 bg-white text-black font-bold rounded-lg ${
activeTab =="MiniBus" ? "bg-yellow-500 text-white" :''
}
`}>
Buses
</div>
<div onClick={()=>handleTabClick("MiniPoliceCar")} className={`
px-6 py-3 w-24 bg-white text-black font-bold rounded-lg ${
activeTab =="MiniPoliceCar" ? "bg-yellow-500 text-white" :''
}
`}>
Police
</div>
</div>
<div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 rounded-xl gap-10 my-10 py-5'>
{
toys.map(toy=><ToySubCard key={toy._id} toy={toy}></ToySubCard> )
}
</div>
    </div>
  );
};

export default Category;