import React, { useEffect, useState } from 'react';

const AllToys = () => {
const [toys, setToys] = useState();
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

    </div>
  );
};

export default AllToys;