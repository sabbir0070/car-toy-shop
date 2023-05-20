import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

import Swal from 'sweetalert2';
import MyToyTable from '../MyToyTable/MyToyTable';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [control, setControl] = useState(false)


  useEffect(() => {
    fetch(`https://toys-car-project-server.vercel.app/myToy/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setToys(data)
        // console.log(data)
      })
  }, [user,control])

  const handleDelete = (id) => {
    console.log('confirm deleted', id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://toys-car-project-server.vercel.app/myToy/${id}`, {
            method: "DELETE"
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data?.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
              const remaining = toys.filter(toy => toy._id !== id);
              setToys(remaining);
            })
        }
      })
  }
 
  return (
    <div>
      <h2 className='text-center text-3xl font-semibold text-lime-600 mt-5'>My All Toys</h2>
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
toys.map((toy,index)=><MyToyTable handleDelete={handleDelete} toy={toy} key={toy._id} index={index} setControl={setControl} control={control}></MyToyTable> )
}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;