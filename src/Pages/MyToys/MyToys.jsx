import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaBeer, FaRegEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UpdateToyModal from '../UpdateToyModal/UpdateToyModal';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [control, setControl] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/myToy/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setToys(data)
        console.log(data)
      })
  }, [user])

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
          fetch(`http://localhost:5000/myToy/${id}`, {
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
const handleUpdate = (toys) =>{
console.log(toys)
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
              toys.map((toy, index) => (
                <tr className='' key={toy._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask  w-24 h-16">
                        <img src={toy?.photo} className='w-full h-full rounded-lg' alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </td>
                  <td> {toy?.toyName} </td>
                  <td> {toy?.subCategory} </td>
                  <td> {toy?.price} </td>
                  <td> {toy?.date} </td>
                  <td> {toy?.quantity} </td>
                  <td >
  {/* The button to open modal */}
                    <label  htmlFor="my-modal-5"><FaRegEdit className='text-green-600 w-8 h-8'></FaRegEdit></label>
                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box w-3/4 h-3/4 max-w-5xl">

                        <div>modal information</div>
                         <UpdateToyModal toy={toy} handleUpdate={handleUpdate}></UpdateToyModal>
                        <div className="modal-action">
                          <label htmlFor="my-modal-5" className="btn">Save</label>
                        </div>
                      </div>
                    </div> </td>
                  <td onClick={() => handleDelete(toy?._id)}> <FaTrash className='text-red-600 w-8 h-8'></FaTrash> </td>
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