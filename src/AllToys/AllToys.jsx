import React, { useEffect, useState } from 'react';

const AllToys = () => {
const [toys, setToys] = useState();
useEffect(()=>{
fetch(`http://localhost:500/allToy`)
.then(res=>res.json())
.then(data=>{
console.log(data)

})
},[])

  return (
    <div>
      <h2>All toys: {}</h2>
    </div>
  );
};

export default AllToys;